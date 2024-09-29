import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },

  reducers: {
    addToCart: (state, action) => {
      const exisistingItem = state.cart.find(
        (item) => item.id === action.payload.id // find the item is already in cart or not
      );
      if (exisistingItem) {
        /// if yes then map the item and if already exist the +1 the qty
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.cart.push(action.payload); // else push item normaly
      } // action
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload); // action
    },

    incrementQty: (state, action) => {
      state.cart = state.cart.map((item) =>
        item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
      );
    },
    decreaseQty: (state, action) => {
      const exisistingItem = state.cart.find(
        (item) => item.id === action.payload // find the item is already in cart or not
      );

      if (exisistingItem.qty > 1) {
        exisistingItem.qty -= 1; // if quantity is greater than 1 then increase else delete the item
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload); // action
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decreaseQty } =
  CartSlice.actions;
export default CartSlice.reducer;
