import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./foodSlice";
import cartSlice from "../cart/cartSlice";
import userSlice from "../user/userSlice";

export const store = configureStore({
    reducer: {
        food: foodSlice,
        cart: cartSlice,
        user: userSlice
    }
})