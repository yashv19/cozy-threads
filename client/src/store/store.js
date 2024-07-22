import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../components/Cart/CartSlice";

const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
    },
})

export default store;