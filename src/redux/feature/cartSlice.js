import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemSubtotal: 0,
  tax: 0,
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
      state.itemSubtotal = Math.round((subTotal + Number.EPSILON) * 100) / 100;
      state.tax = Math.round((subTotal * 0.08 + Number.EPSILON) * 100) / 100;
      state.totalAmount =
        Math.round((subTotal * 1.08 + Number.EPSILON) * 100) / 100;
    },
  },
});

export const { ADD_TO_CART } = cartSlice.actions;

export default cartSlice.reducer;
