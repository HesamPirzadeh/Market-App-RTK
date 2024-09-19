import { createSlice } from "@reduxjs/toolkit";
import { sumPrice, sumQuantity } from "../../helpers/helpers";

const initialState = {
  selectedItem: [],
  total: 0,
  itemCounter: 0,
  checkOut: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    
    addItem: (state, action) => {
      if (!state.selectedItem.find((i) => i.id === action.payload.id)) {
        state.selectedItem.push({ ...action.payload, quantity: 1 });
        state.itemCounter = sumQuantity(state.selectedItem);
        state.total = sumPrice(state.selectedItem);
        state.checkOut = false;
      }
    },
    removeItem: (state, action) => {
      const remove = state.selectedItem.filter(
        (i) => i.id !== action.payload.id
      );
      state.selectedItem = remove;
      state.itemCounter = sumQuantity(state.selectedItem);
      state.total = sumPrice(state.selectedItem);
      state.checkOut = false;
    },
    increment: (state, action) => {
      const itemQuantity = state.selectedItem.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItem[itemQuantity].quantity++;
      state.itemCounter = sumQuantity(state.selectedItem);
      state.total = sumPrice(state.selectedItem);
      state.checkOut = false;
    },
    decrement: (state, action) => {
      const itemQuantity = state.selectedItem.findIndex(
        (i) => i.id === action.payload.id
      );
      state.selectedItem[itemQuantity].quantity--;
      state.itemCounter = sumQuantity(state.selectedItem);
      state.total = sumPrice(state.selectedItem);
      state.checkOut = false;
    },
    checkOut:state =>{
        state.selectedItem= [],
        state.itemCounter=0,
        state.total=0,
        state.checkOut =true
        
    }
  },
});

export default cartSlice.reducer;
export const { addItem, removeItem, increment, decrement,checkOut } = cartSlice.actions;
