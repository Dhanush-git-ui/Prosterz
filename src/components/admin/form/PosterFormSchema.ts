
import { z } from "zod";

// Form schema with validation
export const posterFormSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters"),
  category: z.enum(["albums", "sneakers", "sports", "movies"]),
  subcategory: z.enum(["dc", "marvel", "other"]).optional(),
  priceA4: z.string().min(1, "A4 Price is required"),
  priceA3: z.string().optional(),
  imageUrl: z.string().min(1, "Image URL is required"),
});

export type PosterFormValues = z.infer<typeof posterFormSchema>;
