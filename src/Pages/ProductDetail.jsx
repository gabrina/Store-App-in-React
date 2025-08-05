import { Link, Navigate, useParams } from "react-router-dom";
import { useProductDetail } from "../Contexts/ProductsContext";
import Loader from "../Components/Loader";
import Styles from "./ProductDetail.module.css";
import { IoPricetag } from "react-icons/io5";
import { BiSolidCategory } from "react-icons/bi";
import { IoMdArrowRoundBack } from "react-icons/io";

function ProductDetail() {
  // it takes a little bit of time
  const { id } = useParams();

  // If id is not a number or less than 1, redirect to NotFound
  if (id < 1 || id > 20) {
    return <Navigate to="/*" replace />;
  }
  const product = useProductDetail(+id);

  // If product is not found (e.g. invalid ID), redirect
  if (!product) {
    return <Navigate to="/*" replace />;
  }

  if (!product) return <Loader />;
  return (
    <div className={Styles.container}>
      <img src={product.image} alt="" />
      <div className={Styles.rightSide}>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>
          <IoPricetag color="var(--blue)" /> {product.price}
        </p>
        <sub>
          <BiSolidCategory color="var(--blue)" />
          {product.category}
        </sub>
        <Link to="/products">
          <IoMdArrowRoundBack />
          Back to store
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;
