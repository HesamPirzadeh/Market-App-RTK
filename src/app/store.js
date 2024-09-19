import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../features/products/productSlice";
import card from "../features/cart/cardSlice";

const store = configureStore({
  reducer: { product: productSlice, cart:card },
});

export default store;
