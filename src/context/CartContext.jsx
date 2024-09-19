import { Children, createContext, useContext, useReducer } from "react";
import { sumItem } from "../helpers/helpers";

const initialState = {
  selectedItem: [],
  total: 0,
  itemCounter: 0,
  checkOut: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItem.find((item) => item.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        ...sumItem(state.selectedItem),
        checkOut: false,
      };
    case "REMOVED_ITEM":
      const itemSelected = state.selectedItem.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        selectedItem: [...itemSelected],
        ...sumItem(itemSelected),
      };
    case "INCREASE":
      const increaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[increaseIndex].quantity++;
      return {
        ...state,
        ...sumItem(state.selectedItem),
      };
    case "DECREASE":
      const decreaseIndex = state.selectedItem.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItem[decreaseIndex].quantity--;
      return {
        ...state,
        ...sumItem(state.selectedItem),
      };
    case "CHECKOUT":
      return {
        selectedItem: [],
        total: 0,
        itemCounter: 0,
        checkOut: true,
      };
    default:
      throw new Error("Invalid Action");
  }
};

const Context = createContext();

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

const useCart = () => {
  const { state, dispatch } = useContext(Context);
  return [state, dispatch];
};

export default CartProvider;
export { useCart };
