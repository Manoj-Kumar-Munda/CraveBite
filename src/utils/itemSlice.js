import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "item",
  initialState: {
    isVegOnly: false,
  },
  reducers: {
    toggleVegOnly: (state, action) => {
      state.isVegOnly = !state.isVegOnly;
    },
    
  },
});

export const {toggleVegOnly} = itemSlice.actions;
export default itemSlice.reducer;


