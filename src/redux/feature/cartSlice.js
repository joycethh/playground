import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQty: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM(state, action) {
      console.log("cart action payload", action.payload);
      const newItem = action.payload;
      const exisitngItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      state.totalQty++;

      if (!exisitngItem) {
        state.cartItems.push({
          id: newItem.id,
          productName: newItem.productName,
          image: newItem.imgUrl,
          price: newItem.price,
          qty: 1,
          totalPrice: newItem.price,
        });
      } else {
        exisitngItem.qty++;
        exisitngItem.totalPrice =
          Number(exisitngItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.qty)
      );

      console.log("state.totalQty", state.totalQty);
      console.log("state.totalAmount", state.totalAmount);
    },
  },
});

export const { ADD_ITEM } = cartSlice.actions;

export default cartSlice.reducer;
