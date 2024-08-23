import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./addTocart/cartSlice";


const store = configureStore({
    reducer: {
        cart: cartSlice,
    }
})

export default store;