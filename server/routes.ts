import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { ZodError } from "zod";
import { setupAuth } from "./auth";

export async function registerRoutes(app: Express): Promise<Server> {
  // Set up authentication routes and middleware
  const { isAdmin } = setupAuth(app);
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      return res.status(201).json({
        message: "Contact form submitted successfully",
        contact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Invalid form data",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });
  
  // Newsletter subscription endpoint
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const validatedData = insertNewsletterSchema.parse(req.body);
      const newsletter = await storage.subscribeNewsletter(validatedData);
      
      return res.status(201).json({
        message: "Successfully subscribed to newsletter",
        newsletter
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          message: "Invalid email address",
          errors: error.errors
        });
      }
      
      return res.status(500).json({
        message: "An error occurred while processing your request"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
