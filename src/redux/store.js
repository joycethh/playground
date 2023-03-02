import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./feature/authSlice";
import cartReducer from " ./feature/cartSlice";

export const store = configureStore({
  reducer: {
    //auth
    auth: authReducer,
    //products
    cart: cartReducer,
  },
});
