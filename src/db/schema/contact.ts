import { relations } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { moduleTable } from "./module";
import { sqliteTable } from "./noodle_table";

export const contact = sqliteTable("contact", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),

  userId: text("userId").notNull(),
  //   orgId: text("orgId").notNull(),
  moduleId: integer("moduleId"),

  name: text("name").notNull(),
  role: text("role").notNull(),
  officeLocation: text("officeLocation"),
  openHours: text("openHours"),
  phoneNumber: text("phoneNumber"),
  email: text("email"),
});

export const contactRelations = relations(contact, ({ one }) => ({
  module: one(moduleTable, {
    fields: [contact.moduleId],
    references: [moduleTable.id],
  }),
}));

export const insertContact = createInsertSchema(contact).omit({
  id: true,
  userId: true,
  //   orgId: true,
});

export const updateContactSchema = createInsertSchema(contact).omit({
  id: true,
  userId: true,
  //   orgId: true,
  moduleId: true,
});

export const selectContactSchema = createSelectSchema(contact);
