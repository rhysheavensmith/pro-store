import { notFound } from "next/navigation";
import ProductPrice from "@/components/common/product/product-price";
import ProductImages from "@/components/common/product/product-images";
import { Card, CardContent } from "@/components/ui/card";
import { getProductBySlug } from "@/lib/actions/product.actions";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProductDetailsPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await props.params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {/* Images Column */}
        <div className="col-span-2">
          <ProductImages images={product.images!} />
        </div>

        {/* Details Column */}
        <div className="col-span-2 p-5">
          <div className="flex flex-col gap-6">
            <p className="text-muted-foreground">
              {product.brand} | {product.category}
            </p>
            <h1 className="h3-bold">{product.name}</h1>
            <p className="text-sm">
              {product.rating.toString()} / 5 ({product.numReviews} reviews)
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductPrice
                value={Number(product.price)}
                className="w-24 rounded-full bg-green-100 text-green-700 px-5 py-2"
              />
            </div>
          </div>

          <div className="mt-10">
            <p className="text-muted-foreground">Description:</p>
            <p>{product.description}</p>
          </div>
        </div>

        {/* Action Column */}
        <div>
          <Card>
            <CardContent className="p-4">
              <div className="mb-2 flex justify-between">
                <span>Price</span>
                <ProductPrice value={Number(product.price)} />
              </div>
              <div className="mb-2 flex justify-between">
                <span>Status</span>
                {product.stock > 0 ? (
                  <Badge variant="outline">In Stock</Badge>
                ) : (
                  <Badge variant="destructive">Unavailable</Badge>
                )}
              </div>
              {product.stock > 0 && (
                <div className="mt-4">
                  <Button className="w-full">Add to cart</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
