import { createContext, useContext, useEffect, useState } from "react";
import api from "../Services/config";

const productsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);
  //async await or then and catch
  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
}

const useProducts = () => {
  return useContext(productsContext);
};

const useProductDetail = (id) => {
  const products = useProducts();
  const result = products.find((product) => product.id === id);
  return result;
};

export default ProductsProvider;
export { useProducts, useProductDetail };
