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
            state.totalCost += action.payload.price;
            
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
        },
        removeItemFromCart(state, action) {
            const itemToRemove = state.itemsInCart.find(item => item.id === action.payload.id);
            
            state.totalItemsInCart -= 1;
            state.totalCost -= itemToRemove.price;
            
            itemToRemove.quantity -= 1;
            if (itemToRemove.quantity === 0) {
                //Remove from cart
                state.itemsInCart = state.itemsInCart.filter(item => item.id !== action.payload.id);
            }
        }
    }
})

export const CartActions = CartSlice.actions;
export default CartSlice;