import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";

import Loader from "../components/Loader.jsx";

import { Link, useParams } from "react-router-dom";
// import { useProductDetasil } from "../context/ProductContext";

import styles from "../css/DetailPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "../features/products/productSlice.js";

function DetailPage() {
  const { id } = useParams();
  // const result = useProductDetasil(+id);
  const dispatch = useDispatch();
  const result = useSelector((store) =>
    store.product.products.find((i) => i.id === +id)
  );

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  console.log(result);
  if (!result) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={result.image} alt={result.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{result.title}</h3>
        <p className={styles.description}>{result.description}</p>
        <div>
          <p className={styles.category}>
            <SiOpenproject />
            {result.category}
          </p>
        </div>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {result.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            Back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
