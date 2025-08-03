import { useProducts } from "../Contexts/ProductsContext";
import ProductCard from "../Components/ProductCard";
import Loader from "../Components/Loader";
import Styles from "./ProductPage.module.css";
function ProductPage() {
  const products = useProducts();
  return (
    <div className={Styles.container}>
      <div className={Styles.products}>
        {!products.length && <Loader /> }
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className={Styles.sidebar}>Sidebar</div>
    </div>
  );
}

export default ProductPage;
