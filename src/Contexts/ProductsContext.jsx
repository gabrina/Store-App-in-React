import { createContext, useContext, useEffect, useState } from "react";
import api from "../Services/config";

const productsContex = createContext();

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
    <productsContex.Provider value={products}>
      {children}
    </productsContex.Provider>
  );
}

const useProducts = () => {
  return useContext(productsContex);
};

export default ProductsProvider;
export { useProducts };
