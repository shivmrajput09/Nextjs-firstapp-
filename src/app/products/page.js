import { getProducts } from '@/api-services/productionApi';
import ProductList from '../components/product-list/ProductList';

export default async function Products() {
  const data = await getProducts();

  return (
    <div className="py-10">
      <h1 className="text-3xl font-bold text-center m-10 text-gray-800">
        Our Products
      </h1>
      <div className="max-w-[1320px] mx-auto">
        <ProductList data={data} />
      </div>
    </div>
  );
}
