import sampleData from "@/db/sample-data";
import { prisma } from "@/db/prisma";

const seed = async () => {
  try {
    await prisma.product.deleteMany();
    await prisma.user.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.verificationToken.deleteMany();
    await prisma.product.createMany({ data: sampleData.products });
    await prisma.user.createMany({ data: sampleData.users });
    console.log("Database seeded successfully");
  } catch (error) {
    console.error(`Error seeding database: ${error}`);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};

seed();
