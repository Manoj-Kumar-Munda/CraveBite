import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        total : 0,
        totalItems : 0,

    },
    reducers : {
        addItem : ( state, action) => {
            state.items.push(action.payload);
            state.total += action.payload.price;
      
            state.totalItems++;
        },
        clearCart : (state, action) => {
            state.items.length = 0;
            state.total = 0;
            state.totalItems = 0;
           
        },
        addQuantity : (state,action) => {
            const item = state.items.find((item) => item?.id === action.payload?.id)
            console.log("addQuantity");
            console.log(item);
            if(item){
                item.quantity++;
                state.total += item.price;
                state.totalItems++;
            }
        },
        removeQuantity : (state,action) => {
            const item = state.items.find( (item) => item?.id === action.payload?.id)
            if( item && item.quantity === 1){
                state.items = state.items.filter((product) => product?.id !== item?.id)
                state.total -= item.price;
                state.totalItems--;
                
            }
            if( item && item.quantity > 1 ){
                item.quantity--;
                state.total -= item.price;
                state.totalItems--;
            }

        }
    }
});

export const {addItem, clearCart, addQuantity, removeQuantity} = cartSlice.actions;
export default cartSlice.reducer;