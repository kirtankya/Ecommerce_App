
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addTocart(state, action) {
            const { id, heading, img, price, quantity } = action.payload;
            const itemIndex = state.cartItems.findIndex(item => item.id === id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].quantity += 1;
            } else {
                state.cartItems.push({ id, heading, img, price, quantity: 1 });
            }
            state.cartTotalQuantity += 1;
            state.cartTotalAmount += price;
        },
        removeTocart(state, action) {
            const idToRemove = action.payload;
            const itemToRemove = state.cartItems.find(item => item.id === idToRemove);
            if (itemToRemove) {
                state.cartTotalQuantity -= itemToRemove.quantity;
                state.cartTotalAmount -= itemToRemove.price * itemToRemove.quantity;
                state.cartItems = state.cartItems.filter(item => item.id !== idToRemove);
            }
        }
    }
});

export const { addTocart, removeTocart } = cartSlice.actions;
export default cartSlice.reducer;
