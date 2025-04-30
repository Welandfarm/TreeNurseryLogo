import { pgTable, text, serial, timestamp, integer, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { relations } from "drizzle-orm";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  isAdmin: boolean("is_admin").default(false).notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  isAdmin: true,
});

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  userId: integer("user_id").references(() => users.id),
});

export const contactsRelations = relations(contacts, ({ one }) => ({
  user: one(users, {
    fields: [contacts.userId],
    references: [users.id],
  }),
}));

export const insertContactSchema = createInsertSchema(contacts).omit({
  createdAt: true,
  userId: true,
});

export const newsletters = pgTable("newsletters", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertNewsletterSchema = createInsertSchema(newsletters).omit({
  createdAt: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertNewsletter = z.infer<typeof insertNewsletterSchema>;
export type Newsletter = typeof newsletters.$inferSelect;

// Setup relations after all tables are defined
export const content = pgTable("content", {
  id: serial("id").primaryKey(),
  section: text("section").notNull(),
  key: text("key").notNull(),
  value: text("value").notNull(),
  type: text("type").default("text").notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
  updatedBy: integer("updated_by").references(() => users.id),
});

export const insertContentSchema = createInsertSchema(content).omit({
  updatedAt: true,
});

export type InsertContent = z.infer<typeof insertContentSchema>;
export type Content = typeof content.$inferSelect;

export const contentRelations = relations(content, ({ one }) => ({
  user: one(users, {
    fields: [content.updatedBy],
    references: [users.id],
  }),
}));

export const images = pgTable("images", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  path: text("path").notNull().unique(),
  section: text("section").notNull(),
  uploadedAt: timestamp("uploaded_at").defaultNow().notNull(),
  uploadedBy: integer("uploaded_by").references(() => users.id),
});

export const insertImageSchema = createInsertSchema(images).omit({
  uploadedAt: true,
});

export type InsertImage = z.infer<typeof insertImageSchema>;
export type Image = typeof images.$inferSelect;

export const imagesRelations = relations(images, ({ one }) => ({
  user: one(users, {
    fields: [images.uploadedBy],
    references: [users.id],
  }),
}));

export const usersRelations = relations(users, ({ many }) => ({
  contacts: many(contacts),
  content: many(content),
  images: many(images),
}));
