import Styles from "./CartProductCard.module.css";
import { Link } from "react-router-dom";
import { shortenText } from "../helpers/shortenText";
import { productQuantity } from "../helpers/productQuantity";
import { useCart } from "../Contexts/CartContext";

import {
  RiMoreFill,
  RiShoppingCartLine,
  RiDeleteBin2Line,
} from "react-icons/ri";

import { BiPlus, BiMinus } from "react-icons/bi";

function CartProductCard({ product }) {
  const { id, title, price, image } = product;
  const [state, dispatch] = useCart();
  const quantity = productQuantity(state, id);
  const clickHandler = (action) => {
    dispatch({ type: action, payload: product });
  };

  return (
    <div to={`/products/${id}`} className={Styles.card}>
      <Link to={`/products/${id}`}>
        <img src={image} />
      </Link>
      <h1>{shortenText(title)}</h1>
      {/* <span>{price} $</span> */}
      <div className={Styles.icons}>
        {quantity == 0 && (
          <button
            onClick={() => clickHandler("ADD_ITEM")}
            className={Styles.button}
          >
            <RiShoppingCartLine />
          </button>
        )}
        {quantity > 0 && (
          <button
            onClick={() => clickHandler("INCREASE")}
            className={Styles.button}
          >
            <BiPlus />
          </button>
        )}
        {!!quantity && <p>{quantity}</p>}
        {quantity == 1 && (
          <button
            onClick={() => clickHandler("REMOVE_ITEM")}
            className={Styles.button}
          >
            <RiDeleteBin2Line />
          </button>
        )}
        {quantity > 1 && (
          <button
            onClick={() => clickHandler("DECREASE")}
            className={Styles.button}
          >
            <BiMinus />
          </button>
        )}
      </div>
    </div>
  );
}

export default CartProductCard;
