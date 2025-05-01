import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact,
  newsletters, type Newsletter, type InsertNewsletter,
  content, type Content, type InsertContent,
  images, type Image, type InsertImage
} from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";
import session from "express-session";
import connectPg from "connect-pg-simple";
import { pool } from "./db";

const PostgresSessionStore = connectPg(session);

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Newsletter methods
  subscribeNewsletter(email: InsertNewsletter): Promise<Newsletter>;

  // Content management
  getAllContent(): Promise<Content[]>;
  getContent(id: number): Promise<Content | undefined>;
  getContentBySection(section: string): Promise<Content[]>;
  createContent(content: InsertContent): Promise<Content>;
  updateContent(content: Partial<Content> & { id: number }): Promise<Content>;
  
  // Image management
  getAllImages(): Promise<Image[]>;
  getImage(id: number): Promise<Image | undefined>;
  getImagesBySection(section: string): Promise<Image[]>;
  createImage(image: InsertImage): Promise<Image>;
  
  // Session store
  sessionStore: session.Store;
}

export class DatabaseStorage implements IStorage {
  sessionStore: session.Store;

  constructor() {
    this.sessionStore = new PostgresSessionStore({ 
      pool,
      createTableIfMissing: true
    });
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }
  
  // Contact methods
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db
      .insert(contacts)
      .values(insertContact)
      .returning();
    return contact;
  }
  
  // Newsletter methods
  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    // Check if email already exists
    const [existingNewsletter] = await db
      .select()
      .from(newsletters)
      .where(eq(newsletters.email, insertNewsletter.email));
    
    if (existingNewsletter) {
      return existingNewsletter;
    }
    
    const [newsletter] = await db
      .insert(newsletters)
      .values(insertNewsletter)
      .returning();
    return newsletter;
  }

  // Content management
  async getAllContent(): Promise<Content[]> {
    return await db.select().from(content);
  }

  async getContent(id: number): Promise<Content | undefined> {
    const [contentItem] = await db
      .select()
      .from(content)
      .where(eq(content.id, id));
    return contentItem || undefined;
  }

  async getContentBySection(section: string): Promise<Content[]> {
    return await db
      .select()
      .from(content)
      .where(eq(content.section, section));
  }

  async createContent(insertContent: InsertContent): Promise<Content> {
    const [contentItem] = await db
      .insert(content)
      .values(insertContent)
      .returning();
    return contentItem;
  }

  async updateContent(contentUpdate: Partial<Content> & { id: number }): Promise<Content> {
    const { id, ...rest } = contentUpdate;

    // If this is a new content entry (id is -1), create it instead
    if (id === -1) {
      return await this.createContent(rest as InsertContent);
    }

    // Otherwise, update the existing content
    const [updatedContent] = await db
      .update(content)
      .set({
        ...rest,
        updatedAt: new Date()
      })
      .where(eq(content.id, id))
      .returning();
    
    return updatedContent;
  }

  // Image management
  async getAllImages(): Promise<Image[]> {
    return await db.select().from(images);
  }

  async getImage(id: number): Promise<Image | undefined> {
    const [image] = await db
      .select()
      .from(images)
      .where(eq(images.id, id));
    return image || undefined;
  }

  async getImagesBySection(section: string): Promise<Image[]> {
    return await db
      .select()
      .from(images)
      .where(eq(images.section, section));
  }

  async createImage(insertImage: InsertImage): Promise<Image> {
    const [image] = await db
      .insert(images)
      .values(insertImage)
      .returning();
    return image;
  }
}

export const storage = new DatabaseStorage();