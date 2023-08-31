import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import itemReducer from "./itemSlice";


const store = configureStore({
    reducer : {
        cart : cartReducer,
        item : itemReducer,
    }
});

export default store;