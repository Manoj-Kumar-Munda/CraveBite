import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    totalItems: 0,
    restaurantId: null,
    showClearCart: false,
  },
  reducers: {
    addItem: (state, action) => {
      if (!state.restaurantId || state.restaurantId === action.payload.resId) {
        state.restaurantId = action.payload.resId;
        state.items.push(action.payload);
        state.total += action.payload.price;
        state.totalItems++;
      } else {
        state.showClearCart = true;
      }
    },
    clearCart: (state, action) => {
      state.items.length = 0;
      state.total = 0;
      state.totalItems = 0;
      state.restaurantId = null;
      state.showClearCart = false;
    },
    addQuantity: (state, action) => {
      const item = state.items.find((item) => item?.id === action.payload?.id);
      console.log("addQuantity");
      console.log(item);
      if (item) {
        item.quantity++;
        state.total += item.price;
        state.totalItems++;
      }
    },
    removeQuantity: (state, action) => {
      const item = state.items.find((item) => item?.id === action.payload?.id);
      if (item && item.quantity === 1) {
        state.items = state.items.filter((product) => product?.id !== item?.id);
        state.total -= item.price;
        state.totalItems--;
        state.restaurantId =null;
      }
      if (item && item.quantity > 1) {
        item.quantity--;
        state.total -= item.price;
        state.totalItems--;
      }
    },
    setShowClearCart : (state,action) => {
        state.showClearCart = false;
    }
  },
});

export const { addItem, clearCart, addQuantity, removeQuantity,setShowClearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
