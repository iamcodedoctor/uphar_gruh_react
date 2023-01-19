import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dishes: [],
    total: {
        subTotal: 0,
        tax: 0,
        total: 0,
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
    },
});

export const {
    addToCart,
    resetCart,
    removeItemFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
