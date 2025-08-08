import { MdSearch } from "react-icons/md";
import Styles from "./SearchBox.module.css"
import { createQueryObject } from "../helpers/createQueryObject";

function SearchBox({ search, setSearch, setQuery}) {
  // sensitive to products change, so when the products data is fetched, it rerenders
  const searchHandler = () => {
    // setQuery((query) => ({ ...query, search }));
    //query is set using it's last value, 
    //based on the fact that we said so by passing the arrow function as its argument
    setQuery((query) => createQueryObject(query, { search }));
    // returning an object is done within ()
    // because key and value have the same name, we can drop search:search into just search
  };

  return (
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
  );
}

export default SearchBox;
