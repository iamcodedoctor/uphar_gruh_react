import {createReducer} from "@reduxjs/toolkit";

export const authReducer = createReducer(
    {},
    {
        loadUserRequest: (state) => {
            state.loading = true;
        },
        loadUserSuccess: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        loadUserFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = false;
            state.error = action.payload;
        },
        logOutUserRequest: (state) => {
            state.loading = true;
        },
        logOutUserSuccess: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
        },
        logOutUserFailure: (state, action) => {
            state.loading = false;
            state.isAuthenticated = true;
            state.error = action.payload;
        },
        clearError: (state, action) => {
            state.error = null;
        },
        clearMessage: (state, action) => {
            state.message = null;
        }
    }
)