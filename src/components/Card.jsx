import { TbListDetails } from "react-icons/tb";
import { MdDeleteOutline, MdShoppingCartCheckout } from "react-icons/md";

import { Link } from "react-router-dom";
import { productQuantity, shortenText } from "../helpers/helpers";

import styles from "../css/Card.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrement, increment, removeItem } from "../features/cart/cardSlice";


function Card({ data }) {
  const { id, image, title, price } = data;

  const store = useSelector(store => store.cart)
  console.log(store);
  const dispatch = useDispatch()

  const quantity = productQuantity(store, id);

 

  return (
    <div className={styles.card}>
      <img src={image} alt="" />
      <h3>{shortenText(title)}</h3>
      <p>$ {price}</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}
          {quantity > 1 && (
            <button onClick={() => dispatch(decrement(data))}>-</button>
          )}
          {<span>{!!quantity && quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() =>  dispatch(addItem(data))}>
              <MdShoppingCartCheckout />
            </button>
          ) : (
            <button onClick={() => dispatch(increment(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
