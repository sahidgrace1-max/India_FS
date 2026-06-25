import { z } from "zod";

export const createContactSchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().optional(),
    message: z.string().min(10),
  })
});

export const updateContactStatusSchema = z.object({
  body: z.object({
    isRead: z.boolean({ required_error: "isRead boolean is required" }),
  })
});