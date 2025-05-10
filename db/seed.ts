import sampleData from "@/db/sample-data";
import { prisma } from "@/db/prisma";

const seed = async () => {
  await prisma.product.deleteMany();
  await prisma.product.createMany({ data: sampleData.products });
  console.log("Database seeded successfully");
};

seed();
