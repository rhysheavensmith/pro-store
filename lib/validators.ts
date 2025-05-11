import { z } from "zod";
import { formatNumberWithDecimal } from "@/lib/utils";

const validatedCurrency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places (e.g., 49.99)"
  );

export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  slug: z.string().min(3, "Slug must be at least 3 characters"),
  category: z.string().min(3, "Category must be at least 3 characters"),
  brand: z.string().min(3, "Brand must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at least one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: validatedCurrency,
});

// export const userSchema = z.object({
//   id: z.string().uuid(),
//   name: z.string().min(1),
//   email: z.string().email(),
//   role: z.enum(["user", "admin"]),
//   emailVerified: z.date().nullable(),
//   image: z.string().nullable(),
//   address: z.any().nullable(),
//   paymentMethod: z.string().nullable(),
//   createdAt: z.date(),
//   updatedAt: z.date(),
// });
