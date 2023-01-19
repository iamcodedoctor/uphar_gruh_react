// import { configureStore } from "@reduxjs/toolkit";
// import { cartReducer } from "./reducers/cartReducer";
// import { authReducer } from "./reducers/userReducer";

// export const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         cart: cartReducer,
//     },
// });



import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



import { authReducer } from './reducers/userReducer';
import  cartReducer  from './reducers/cartReducer';

const persistUserConfig = {
  key: 'auth',
  version: 1,
  storage,
}
const persistCartConfig = {
    key: 'cart',
    version: 1,
    storage,
  }

const allReducers = combineReducers({
    auth: persistReducer(persistUserConfig, authReducer),
    cart: persistReducer(persistCartConfig, cartReducer)
})

export const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
export const serverUrl = "http://localhost:3010/api/v1";
