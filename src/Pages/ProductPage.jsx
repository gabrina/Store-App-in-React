import { useProducts } from "../Contexts/ProductsContext";
import ProductCard from "../Components/ProductCard";
import Loader from "../Components/Loader";
import Styles from "./ProductPage.module.css";
import { useEffect, useState } from "react";
import { searchProductByName } from "../helpers/searchProductByName";
import { searchProductByCategory } from "../helpers/searchProductByCategory";
import { useSearchParams } from "react-router-dom";
import { getInitialParams } from "../helpers/getInitialParams";
import SearchBox from "../Components/SearchBox";
import Sidebar from "../Components/Sidebar";

function ProductPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  //هوک را فقط در کامپوننت های ری اکتی میتوان استفاده کرد

  useEffect(() => {
    setDisplayedProducts(products);
    setQuery(getInitialParams(searchParams));
  }, [products]);

  useEffect(() => {
    //adding the value of query to the URL
    //for cases when the user doesn't provide the search value,
    // set it to empty string
    setSearch(query.search || "");
    //for cases when user enter search string in URL(i guess)
    //it also set the value of input box, to the new one
    setSearchParams(query);
    //Souldn't we add the same thing for category?
    let searchedProducts = searchProductByName(products, query.search);
    searchedProducts = searchProductByCategory(
      searchedProducts,
      query.category
    );
    setDisplayedProducts(searchedProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={Styles.container}>
        <div className={Styles.products}>
          {!products.length && <Loader />}
          {!displayedProducts.length && <p>Not Found</p>}
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <Sidebar query={query} setQuery={setQuery} />
      </div>
    </>
  );
}

export default ProductPage;
