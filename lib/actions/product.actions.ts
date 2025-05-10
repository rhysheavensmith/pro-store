"use server";

import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "@/lib/utils";

export const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
    take: 4,
  });
  return convertToPlainObject(products);
};

export const getProductBySlug = async (slug: string) => {
  const product = await prisma.product.findFirst({
    where: { slug: { equals: slug } },
  });
  return convertToPlainObject(product);
};
