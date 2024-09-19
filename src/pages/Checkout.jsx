import React from "react";
// import { useCart } from "../context/CartContext";
import Basket from "../components/Basket";
import BasketSideBar from "../components/BasketSideBar";

import styles from "../css/Checkout.module.css";
import { useSelector } from "react-redux";

function Checkout() {
 const state =useSelector(store =>store.cart)

  

  if (!state.itemCounter) {
    return <div className={styles.container}>empty</div>;
  }

  return (
    <div className={styles.container}>
      <BasketSideBar state={state}  />
      <div className={styles.products}>
        {state.selectedItem.map((p) => (
          <Basket key={p.id} data={p} />
        ))}
      </div>
    </div>
  );
}

export default Checkout;
