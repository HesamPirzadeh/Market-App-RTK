import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa6";
import { BsPatchCheck } from "react-icons/bs";

import { useDispatch } from "react-redux";
import { checkOut } from "../features/cart/cardSlice";

import styles from "../css/BasketSideBar.module.css";

function BasketSideBar({ state }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebar}>
      <div>
        <TbChecklist />
        <p>Total:</p>
        <span>{state.total}</span>
      </div>
      <div>
        <FaHashtag />
        <p>Quantity:</p>
        <span>{state.itemCounter}</span>
      </div>
      <div>
        <BsPatchCheck />
        <p>Status:</p>
        <span>{!state.checkout && "Pending..."}</span>
      </div>
      <button  onClick={()=>dispatch(checkOut())}>Check out</button>
    </div>
  );
}

export default BasketSideBar;
