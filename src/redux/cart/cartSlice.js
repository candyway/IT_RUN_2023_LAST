import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemInCart: []
    },
    reducers:{
        setItemInCart: (state, action) => {
            const newItem = action.payload;
            const checkItem = state.itemInCart.find(item => item.id === newItem.id);
            if (checkItem) {
              checkItem.quantity += newItem.quantity
            } else {
              state.itemInCart.push(newItem);
            }
          },
          
        deleteItemInCart : (state,action) => {
            state.itemInCart = state.itemInCart.filter(item => item.id !== action.payload)
        },
        PlusItemInCart : (state, action) => {
          const itemId = action.payload;
          const item = state.itemInCart.find(item => item.id === itemId);
          if (item) {
            item.quantity += 1;
          }
        },
        MinusItemInCart : (state, action) => {
          const itemId = action.payload;
          const item = state.itemInCart.find(item => item.id === itemId);
          if (item && item.quantity > 1) {
            item.quantity -= 1;
          }
        }
    }
})

export const {setItemInCart, deleteItemInCart, PlusItemInCart, MinusItemInCart} = cartSlice.actions
export default cartSlice.reducer