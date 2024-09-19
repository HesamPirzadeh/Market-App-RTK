import { shortenText } from "../helpers/helpers";

import { MdDeleteOutline } from "react-icons/md";

import styles from "../css/Basket.module.css"
import { useDispatch } from "react-redux";
import { decrement, increment, removeItem } from "../features/cart/cardSlice";

function Basket({ data }) {
    const {image,title,quantity}= data
    const dispatch = useDispatch()
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.action}>
        {quantity === 1 && (
          <button  onClick={()=>dispatch(removeItem(data))}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && <button onClick={()=>dispatch(decrement(data))}>-</button>}
        {<span>{quantity}</span>}
        <button onClick={()=>dispatch(increment(data))} >+</button>
      </div>
    </div>
  );
}

export default Basket;
