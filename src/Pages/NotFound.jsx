import { Link } from "react-router-dom";
import Styles from "./NotFound.module.css";
import { IoMdArrowRoundBack } from "react-icons/io";
function NotFound() {
  return (
    <div className={Styles.container}>
      <div>¯\\_(ツ)_/¯</div>
      <p>Sorry, requested page was not found</p>
      <Link to="/products" replace>
        <IoMdArrowRoundBack />
        Back to store
      </Link>
    </div>
  );
}

export default NotFound;
