import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";

export const Store = configureStore({
  reducer: {
    AllCartItems : cartReducer
  },
});