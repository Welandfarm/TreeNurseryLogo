import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import { Express } from "express";
import session from "express-session";
import { scrypt, randomBytes, timingSafeEqual } from "crypto";
import { promisify } from "util";
import { storage } from "./storage";
import { User as SelectUser } from "@shared/schema";
import connectPg from "connect-pg-simple";
import { pool } from "./db";

const PostgresSessionStore = connectPg(session);

declare global {
  namespace Express {
    interface User extends SelectUser {}
  }
}

const scryptAsync = promisify(scrypt);

async function hashPassword(password: string) {
  const salt = randomBytes(16).toString("hex");
  const buf = (await scryptAsync(password, salt, 64)) as Buffer;
  return `${buf.toString("hex")}.${salt}`;
}

async function comparePasswords(supplied: string, stored: string) {
  const [hashed, salt] = stored.split(".");
  const hashedBuf = Buffer.from(hashed, "hex");
  const suppliedBuf = (await scryptAsync(supplied, salt, 64)) as Buffer;
  return timingSafeEqual(hashedBuf, suppliedBuf);
}

export function setupAuth(app: Express) {
  const sessionSettings: session.SessionOptions = {
    secret: process.env.SESSION_SECRET || "littleforest-secret-key-change-in-production",
    resave: false,
    saveUninitialized: false,
    store: new PostgresSessionStore({ 
      pool,
      createTableIfMissing: true
    }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
      secure: process.env.NODE_ENV === "production"
    }
  };

  app.set("trust proxy", 1);
  app.use(session(sessionSettings));
  app.use(passport.initialize());
  app.use(passport.session());

  passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        const user = await storage.getUserByUsername(username);
        if (!user || !(await comparePasswords(password, user.password))) {
          return done(null, false, { message: "Incorrect username or password" });
        } else {
          return done(null, user);
        }
      } catch (error) {
        return done(error);
      }
    }),
  );

  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser(async (id: number, done) => {
    try {
      const user = await storage.getUser(id);
      done(null, user);
    } catch (error) {
      done(error);
    }
  });

  // Admin middleware
  const isAdmin = (req: any, res: any, next: any) => {
    if (req.isAuthenticated() && req.user.isAdmin) {
      return next();
    }
    res.status(403).json({ message: "Access denied. Admin privileges required." });
  };

  // Authentication routes
  app.post("/api/register", async (req, res, next) => {
    try {
      const existingUser = await storage.getUserByUsername(req.body.username);
      if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
      }

      // For security reasons, only allow setting isAdmin to true if there's an existing admin user making the request
      if (req.body.isAdmin === true && !(req.isAuthenticated() && req.user.isAdmin)) {
        req.body.isAdmin = false;
      }

      const user = await storage.createUser({
        ...req.body,
        password: await hashPassword(req.body.password),
      });

      req.login(user, (err) => {
        if (err) return next(err);
        res.status(201).json({ id: user.id, username: user.username, isAdmin: user.isAdmin });
      });
    } catch (error) {
      next(error);
    }
  });

  app.post("/api/login", (req, res, next) => {
    passport.authenticate("local", (err: Error | null, user: Express.User | false, info: { message: string } | undefined) => {
      if (err) return next(err);
      if (!user) return res.status(401).json({ message: info?.message || "Login failed" });
      
      req.login(user, (loginErr) => {
        if (loginErr) return next(loginErr);
        return res.status(200).json({ id: user.id, username: user.username, isAdmin: user.isAdmin });
      });
    })(req, res, next);
  });

  app.post("/api/logout", (req, res, next) => {
    req.logout((err) => {
      if (err) return next(err);
      res.sendStatus(200);
    });
  });

  app.get("/api/user", (req, res) => {
    if (!req.isAuthenticated()) return res.status(401).json({ message: "Not authenticated" });
    const { password, ...userWithoutPassword } = req.user;
    res.json(userWithoutPassword);
  });

  // Content management routes
  app.get("/api/content", async (req, res, next) => {
    try {
      const content = await storage.getAllContent();
      res.json(content);
    } catch (error) {
      next(error);
    }
  });

  app.post("/api/content", isAdmin, async (req, res, next) => {
    try {
      const newContent = await storage.updateContent({
        ...req.body,
        updatedBy: req.user?.id
      });
      res.status(201).json(newContent);
    } catch (error) {
      next(error);
    }
  });

  app.put("/api/content/:id", isAdmin, async (req, res, next) => {
    try {
      const content = await storage.getContent(parseInt(req.params.id));
      if (!content) {
        return res.status(404).json({ message: "Content not found" });
      }
      
      const updatedContent = await storage.updateContent({
        ...req.body,
        id: parseInt(req.params.id),
        updatedBy: req.user?.id
      });
      
      res.json(updatedContent);
    } catch (error) {
      next(error);
    }
  });

  app.get("/api/images", async (req, res, next) => {
    try {
      const images = await storage.getAllImages();
      res.json(images);
    } catch (error) {
      next(error);
    }
  });

  // Get images by section
  app.get("/api/images/:section", async (req, res, next) => {
    try {
      const images = await storage.getImagesBySection(req.params.section);
      res.json(images);
    } catch (error) {
      next(error);
    }
  });

  // For image upload we'll need to add file handling middleware and routes

  return { isAdmin };
}