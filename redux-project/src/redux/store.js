import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './slice';
import ProductsReducer from './ProductSlice';

const store = configureStore ({
  reducer: {
    cart: CartReducer,
    products: ProductsReducer,
  },
})

export default store;