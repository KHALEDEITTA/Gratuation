import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authslic';
import destinationtSlice from './destinationslic';
import tripslic from './trip/tripslic';
import bookingSlice from './booking/bookingslic';
import branchSlice from './branch/branchslic';
import paymentSlice from './payment/paymentslic';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    destinations:destinationtSlice,
    trip:tripslic,
    booking:bookingSlice,
    payment:paymentSlice,
    branch:branchSlice
   
  },
});
