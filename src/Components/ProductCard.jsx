import Styles from "./ProductCard.module.css";
import { RiMoreFill, RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { shortenText } from "../helpers/shortenText";

function ProductCard({ product }) {
  const { id, title, price, image } = product;
  return (
    <div className={Styles.card}>
      <img src={image} />
      <h1>{shortenText(title)}</h1>
      <span>{price} $</span>
      <div className={Styles.icons}>
        <Link to={`/products/${id}`}>
          <RiMoreFill />
        </Link>
        <RiShoppingCartLine />
      </div>
    </div>
  );
}

export default ProductCard;
