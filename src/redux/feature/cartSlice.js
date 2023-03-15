import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_TO_CART: (state, action) => {
      const exisitngItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      state.totalQty++;

      if (exisitngItem) {
        exisitngItem.qty++;
        exisitngItem.totalPrice =
          exisitngItem.totalPrice + action.payload.price;
      } else {
        state.cartItems.push({
          ...action.payload,
          qty: 1,
          totalPrice: action.payload.price,
        });
      }

      const subTotal = state.cartItems.reduce((a, b) => a + b.totalPrice, 0);
      state.totalAmount = Math.round((subTotal + Number.EPSILON) * 100) / 100;

      // console.log("state.totalQty", state.totalQty);
      // console.log("cartItem", current(state.cartItems));
      console.log("totalAmount", state.totalAmount);
    },
  },
});

export const { ADD_TO_CART } = cartSlice.actions;

export default cartSlice.reducer;
