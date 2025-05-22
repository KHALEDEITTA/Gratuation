import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authslic';
import destinationtSlice from './destinationslic';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    destinations:destinationtSlice
   
  },
});
