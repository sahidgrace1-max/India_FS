import { z } from "zod";

export const createDestinationSchema = z.object({
  body: z.object({
    country: z.string().min(2, "Country must be at least 2 characters"),
    slug: z.string().optional(),
    description: z.string().min(20, "Description must be at least 20 characters"),
    featured: z
      .preprocess((val) => val === "true" || val === true, z.boolean())
      .optional(),
  })
});

export const updateDestinationSchema = z.object({
  body: z.object({
    country: z
      .string()
      .min(2, "Country must be at least 2 characters")
      .optional(),
    slug: z.string().optional(),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters")
      .optional(),
    featured: z
      .preprocess((val) => val === "true" || val === true, z.boolean())
      .optional(),
  })
});
