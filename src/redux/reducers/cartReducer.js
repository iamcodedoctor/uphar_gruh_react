import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dishes: [],
    total: {
        subTotal: 0,
        delivery: 0,
        finalTotal: 0,
    },
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const dish = action.payload;
            const item = state.dishes.find((item) => item._id === dish._id);
            if (item) {
                item.quantity += 1;
            } else {
                state.dishes.push({ ...dish, quantity: 1 });
            }
        },
        resetCart: (state) => {
            state.dishes = [];
        },
        removeItemFromCart: (state, action) => {
            state.dishes = state.dishes.filter(
                (dish) => dish._id !== action.payload
            );
        },
        incrementItemQuantity: (state, action) => {
            state.dishes.find(dish => dish._id === action.payload).quantity += 1;
        },
        decrementItemQuantity: (state, action) => {
            state.dishes.find(dish => dish._id === action.payload).quantity -= 1;
        },
        getCartTotal: (state) => {
            const dishes = state.dishes;
            let subTotal = 0;
            if (dishes.length > 0) {
                dishes.map(
                    (item) => (subTotal += item.price * item.quantity)
                );
            }
            const delivery = 50;
            const finalTotal = subTotal + delivery;
            state.total = {subTotal, delivery, finalTotal}
        },
    },
});

export const {
    addToCart,
    resetCart,
    removeItemFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
    getCartTotal
} = cartSlice.actions;

export default cartSlice.reducer;
