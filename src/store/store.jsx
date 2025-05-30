import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authslic';
import destinationtSlice from './destinationslic';
import tripslic from './trip/tripslic';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    destinations:destinationtSlice,
    trip:tripslic
   
  },
});
