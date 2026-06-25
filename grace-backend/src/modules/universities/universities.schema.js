import { z } from "zod";

export const createUniversitySchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    location: z.string().min(2, "Location must be at least 2 characters"),
    website: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    destinationId: z.string().min(1, "Destination ID is required"),
  })
});

export const updateUniversitySchema = z.object({
  body: z.object({
    name: z.string().min(2, "Name must be at least 2 characters").optional(),
    location: z
      .string()
      .min(2, "Location must be at least 2 characters")
      .optional(),
    website: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    destinationId: z.string().min(1, "Destination ID is required").optional(),
  })
});
