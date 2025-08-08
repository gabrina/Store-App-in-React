import { FaListUl } from "react-icons/fa";
import Styles from "./Sidebar.module.css";
import { createQueryObject } from "../helpers/createQueryObject";

import { categories } from "../Constants/Categories";

function Sidebar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    if (tagName !== "LI") return;
    //if (innerText.toLowerCase() === "all") setQuery((query) => ({ ...query }));

    // setQuery((query) => ({ ...query, category: innerText.toLowerCase() }));
    setQuery((query) => createQueryObject(query, { category }));
  };
  return (
    <div className={Styles.sidebar}>
      <header>
        <FaListUl color="var(--blue)" />
        <span>Categories</span>
      </header>
      <ul onClick={categoryHandler}>
        {categories.map((category) => (
          <li
            key={category.id}
            className={
              category.type.trim().toLowerCase() === query.category
                ? Styles.selectedCategory
                : null
            }
          >
            {category.type}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
