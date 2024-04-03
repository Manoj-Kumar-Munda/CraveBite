import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import itemReducer from "./itemSlice";
import restaurantReducer from "./restaurantSlice";


const store = configureStore({
    reducer : {
        cart : cartReducer,
        item : itemReducer,
        restaurants : restaurantReducer
    }
});

export default store;