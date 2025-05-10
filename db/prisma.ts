import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "@/lib/generated/prisma";
import ws from "ws";

// Enable WebSocket mode for Neon
neonConfig.webSocketConstructor = ws;
const connectionString = `${process.env.DATABASE_URL}`;

// Initialize Prisma with Neon adapter
const adapter = new PrismaNeon({ connectionString });

// Extend PrismaClient to convert price and rating to strings
export const prisma = new PrismaClient({ adapter }).$extends({
  result: {
    product: {
      price: {
        compute({ price }) {
          return price.toString();
        },
      },
      rating: {
        compute({ rating }) {
          return rating.toString();
        },
      },
    },
  },
});
