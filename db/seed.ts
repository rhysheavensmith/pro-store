import sampleData from "@/db/sample-data";
import { prisma } from "@/db/prisma";

const seed = async () => {
  try {
    await prisma.product.deleteMany();
    await prisma.product.createMany({ data: sampleData.products });
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(`Error seeding database: ${error}`);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
