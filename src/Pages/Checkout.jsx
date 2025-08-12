import React from "react";
import { useCart } from "../Contexts/CartContext";
import Styles from "./Checkout.module.css";
import CartProductCard from "../Components/CartProductCard";

//importing icons
import { GrStatusGood } from "react-icons/gr";
import { MdOutlineNumbers } from "react-icons/md";
import { IoPricetagOutline } from "react-icons/io5";

function Checkout() {
  const [state, dispatch] = useCart();
  const { selectedItems, itemsCounter, total, checkout } = state;
  console.log(state);
  if (!itemsCounter)
    return <div className={Styles.empty}>Your cart is empty</div>;
  return (
    <div className={Styles.container}>
      <div className={Styles.sidebar}>
        <p>
          <IoPricetagOutline />
          <span>Total: </span>
          {total}
        </p>
        <p>
          <MdOutlineNumbers />
          <span>Quantity: </span>
          {itemsCounter}{" "}
        </p>
        <p>
          <GrStatusGood />
          <span>Status: </span>
          {checkout ? "Checked out" : "Pending"}
        </p>
        <button onClick={() => dispatch({ type: "CHECKOUT" })}>Checkout</button>
      </div>
      <div className={Styles.cart}>
        {selectedItems.map((product) => (
          <CartProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
