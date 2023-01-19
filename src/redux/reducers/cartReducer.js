import {createReducer} from "@reduxjs/toolkit";


export const cartReducer = createReducer(
    {
        dishes: []
    },
    {
        addItemToCart: (state, action) => {
            state.dishes.push(action.payload)
        },
        removeItemFromCart: (state, action) => {
            state.dishes = action.payload;    
        },
        resetCart: (state) => {
            state.dishes = [];
        },
        increaseItemQuantity: (state, payload) => {
            state.dishes = action.payload;
        },
        decreaseItemQuantity: (state, payload) => {
            state.dishes = action.payload;
        }

    }
)