import { useProducts } from "../Contexts/ProductsContext";
function ProductPage() {
  const result = useProducts();
  console.log(result);
  return <div>ProductPage</div>;
}

export default ProductPage;
