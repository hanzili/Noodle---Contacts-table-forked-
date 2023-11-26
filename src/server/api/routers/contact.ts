import { contact, insertContact } from "@/db";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const contactRouter = createTRPCRouter({
  get: createTRPCRouter({
    all: protectedProcedure.query(async ({ ctx }) => {
      try {
        const contacts = await ctx.db.query.contact.findMany({
          where: (table, { eq }) => eq(table.userId, ctx.auth.userId),
        });

        return contacts;
      } catch (err) {
        console.error(err);
      }
    }),
  }),
  post: createTRPCRouter({
    addContact: protectedProcedure
      .input(insertContact)
      .mutation(async ({ ctx, input }) => {
        try {
          const res = await ctx.db
            .insert(contact)
            .values({
              ...input,
              userId: ctx.auth.userId,
            })
            .returning();

          return res;
        } catch (err) {
          console.error(err);
        }
      }),
  }),
});
