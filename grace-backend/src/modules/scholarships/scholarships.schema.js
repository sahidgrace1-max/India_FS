import { z } from "zod";

export const createScholarshipSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters"),
    slug: z.string().optional(),
    description: z.string().min(20, "Description must be at least 20 characters"),
    country: z.string().min(2, "Country must be at least 2 characters"),
    deadline: z.string().optional(),
    link: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    published: z.boolean().optional(),
  })
});

export const updateScholarshipSchema = z.object({
  body: z.object({
    title: z.string().min(3, "Title must be at least 3 characters").optional(),
    slug: z.string().optional(),
    description: z
      .string()
      .min(20, "Description must be at least 20 characters")
      .optional(),
    country: z
      .string()
      .min(2, "Country must be at least 2 characters")
      .optional(),
    deadline: z.string().optional(),
    link: z.string().url("Must be a valid URL").optional().or(z.literal("")),
    published: z.boolean().optional(),
  })
});
