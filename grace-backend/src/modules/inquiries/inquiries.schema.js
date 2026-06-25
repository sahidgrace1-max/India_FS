import { z } from "zod";

export const createInquirySchema = z.object({
  body: z.object({
    name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(7),
    destination: z.string().min(2),
    course: z.string().optional(),
    intake: z.string().optional(),
  })
});

export const updateInquirySchema = z.object({
  body: z.object({
    status: z.enum(["PENDING", "REVIEWED", "CONTACTED", "CLOSED"]).optional(),
    notes: z.string().optional(),
  })
});
