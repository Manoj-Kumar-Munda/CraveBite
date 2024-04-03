import { createSlice } from "@reduxjs/toolkit";

const restaurant = createSlice({
  name: "restaurant",
  initialState: {
    restaurants: [],
  },
  reducers: {
    addRestaurants: (state, action) => {
      if (state.restaurants.length === 0) {
        state.restaurants = action.payload;
      }
    },
  },
});

export const { addRestaurants } = restaurant.actions;
export default restaurant.reducer;
