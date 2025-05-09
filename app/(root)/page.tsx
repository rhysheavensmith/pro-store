import ProductList from "@/components/common/product/product-list";
import { Product } from "@/types";
import { getLatestProducts } from "@/lib/actions/product.actions";
import { formatNumberWithDecimal } from "@/lib/utils";

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  const formattedProducts: Product[] = latestProducts.map(
    (product): Product => ({
      ...product,
      price: formatNumberWithDecimal(Number(product.price)),
      rating: product.rating.toString(),
    })
  );

  return (
    <div className="space-y-8">
      <h2 className="h2-bold">Latest Products</h2>
      <ProductList
        title="Newest Arrivals"
        data={formattedProducts as Product[]}
        limit={4}
      />
    </div>
  );
};

export default HomePage;
