import { useProducts } from "../Contexts/ProductsContext";
import ProductCard from "../Components/ProductCard";
import Loader from "../Components/Loader";
import Styles from "./ProductPage.module.css";
import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";
import { FaListUl } from "react-icons/fa";

function ProductPage() {
  const products = useProducts();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts([...products]);
  }, [products]);
  // sensitive to products change, so when the products data is fetched, it rerenders
  const searchHandler = () => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().trim().includes(search.toLowerCase().trim())
      )
    );
  };

  const categoryHandler = (event) => {
    const { tagName, innerText } = event.target;
    if (tagName !== "LI") return;
    setCategory(innerText.toLowerCase());
  };

  return (
    <>
      <div className={Styles.searchBar}>
        <input
          type="text"
          placeholder="Type to search"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <MdSearch />
        </button>
      </div>
      <div className={Styles.container}>
        <div className={Styles.products}>
          {!products.length && <Loader />}
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className={Styles.sidebar}>
          <header>
            <FaListUl color="var(--blue)" />
            <span>Categories</span>
          </header>
          <ul onClick={categoryHandler}>
            <li className={category === "All" ? Styles.selectedCategory : ""}>
              All
            </li>
            <li
              className={
                category === "Electronics" ? Styles.selectedCategory : ""
              }
            >
              Electronics
            </li>
            <li
              className={category === "Jewelery" ? Styles.selectedCategory : ""}
            >
              Jewelery
            </li>
            <li
              className={
                category === "Men's clothing" ? Styles.selectedCategory : ""
              }
            >
              Men's clothing
            </li>
            <li
              className={
                category === "Women's clothing" ? Styles.selectedCategory : ""
              }
            >
              Women's clothing
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
