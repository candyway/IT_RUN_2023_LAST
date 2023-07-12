import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodSlice";
import cartSlice from "../cart/cartSlice";

export const store = configureStore({
    reducer: {
        food: foodSlice,
        cart: cartSlice
    }
})