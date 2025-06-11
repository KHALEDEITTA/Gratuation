import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios';


export const payForBooking = createAsyncThunk(
  'payment/payForBooking',
  async ({bookingId}, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`/bookings/${bookingId}/pay`);
      console.log(response.data)
      sessionStorage.removeItem('bookingId')
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const initialState = {
  payment: null,
  status: 'idle',
  error: null
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    clearPaymentState: (state) => {
      state.payment = null;
      state.status = 'idle';
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(payForBooking.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(payForBooking.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.payment = action.payload;
      })
      .addCase(payForBooking.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'حدث خطأ أثناء الدفع';
      });
  }
});

export const { clearPaymentState } = paymentSlice.actions;

export default paymentSlice.reducer;
