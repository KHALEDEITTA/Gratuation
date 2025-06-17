import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios';
import { toast } from 'react-toastify';

export const bookTrip = createAsyncThunk(
  'booking/bookTrip',
  async ({ tripId, bookingData }, thunkAPI) => {
    try {
      const response = await axiosInstance.post(`/trips/${tripId}/book`, bookingData);
      sessionStorage.setItem('bookingId',response.data.data.bookingId)
      console.log(response.data.data.bookingId)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
export const bookingUser = createAsyncThunk(
  'booking/bookUser',
  async ( thunkAPI) => {
    try {
      const response = await axiosInstance.get(`/user/bookings`);
    //   sessionStorage.setItem('bookingId',response.data.data.bookingId)
      console.log(response.data.data.bookingId)
      return await response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);
"You can't cancel this booking now. Cancellations are only allowed within 24 hours of booking."


export const bookingCancle = createAsyncThunk(
  'booking/bookingCancle',
  async ({ userid }, thunkAPI) => {
    try {
      const response = await axiosInstance.put(`/bookings/${userid}/cancel`);

      const { success, message } = response.data;

      if (success) {
        toast.success('Your order has been cancelled.');
      } else {
        toast.error(message || "Cancellation failed.");
      }

      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;

    
      if (
        errorMessage ===
        "You can't cancel this booking now. Cancellations are only allowed within 24 hours of booking."
      ) {
        toast.error(" Cancellations are only allowed within 24 hours of booking");
     
      
      } else {
        toast.error(errorMessage);
      }

      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);










const initialState = {
  booking: null,
  status: 'idle',
  list:[],
  id:null,
  error: null
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    clearBookingState: (state) => {
      state.booking = null;
      state.status = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookTrip.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(bookTrip.fulfilled, (state, action) => {
        state.status = false;
        state.booking = action.payload;
        state.id=action.payload.data.bookingId
        console.log(state.id)
      })
      .addCase(bookTrip.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload || 'حدث خطأ أثناء الحجز';
      })
       .addCase(bookingUser.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(bookingUser.fulfilled, (state, action) => {
        state.status = false;
        state.list = action.payload;
       
       
      })
      .addCase(bookingUser.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload || 'حدث خطأ أثناء الحجز';
      })
        .addCase(bookingCancle.pending, (state) => {
        state.status = true;
        state.error = null;
      })
      .addCase(bookingCancle.fulfilled, (state, action) => {
        state.status = false;
        state.list = action.payload;
       
       
      })
      .addCase(bookingCancle.rejected, (state, action) => {
        state.status = false;
        state.error = action.payload || 'حدث خطأ أثناء الحجز';
      });
  }
});

export const { clearBookingState } = bookingSlice.actions;

export default bookingSlice.reducer;
