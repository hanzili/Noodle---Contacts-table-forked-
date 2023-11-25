import { relations } from "drizzle-orm";
import { integer, text } from "drizzle-orm/sqlite-core";
import { moduleTable } from "./module";
import { sqliteTable } from "./noodle_table";

export const contact = sqliteTable("contact", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),

  userId: text("userId").notNull(),
  orgId: text("userId").notNull(),
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
