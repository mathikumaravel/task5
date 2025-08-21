import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cratSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
