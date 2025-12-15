import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slice';

const store = configureStore ({
  reducer: {
    cart: CartReducer,
  },
})

export default store;