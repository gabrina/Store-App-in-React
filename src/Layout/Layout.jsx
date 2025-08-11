import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import Styles from "./Layout.module.css";
import { useCart } from "../Contexts/CartContext";

function Layout({ children }) {
  const [state, dispatch] = useCart();
  const quantity = state.itemsCounter;
  return (
    <>
      <header className={Styles.header}>
        <Link to="/products">Store App</Link>
        <Link to="/checkout" className={Styles.cart}>
          <RiShoppingCartLine />
          {!!quantity && <span className={Styles.quantity}>{quantity}</span>}
        </Link>
      </header>
      {children}
      <footer className={Styles.footer}>developed by Gabrina</footer>
    </>
  );
}

export default Layout;
