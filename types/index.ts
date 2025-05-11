import { z } from "zod";
import { insertProductSchema } from "@/lib/validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  createdAt: Date;
  rating: string;
  numReviews: number;
};

// export type User = z.infer<typeof userSchema> & {
//   id: string;
//   createdAt: Date;
// };
