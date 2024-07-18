import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItemsInCart: 0,
    itemsInCart: [],
    totalCost: 0,
}

const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart(state, action) {
            state.totalItemsInCart += 1;
            
            //Check if item exists in cart, if so increment it's quantity
            const item = state.itemsInCart.find(product => product.id === action.payload.id);
            if(item) {
                //Item exists
                item.quantity += 1;
            }
            else {
                state.itemsInCart.push({
                    ...action.payload,
                    quantity: 1,
                })
            }
        }
    }
})

export const CartActions = CartSlice.actions;
export default CartSlice;