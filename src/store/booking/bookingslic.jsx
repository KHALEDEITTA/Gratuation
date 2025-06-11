import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

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

const initialState = {
  booking: null,
  status: 'idle',
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
      });
  }
});

export const { clearBookingState } = bookingSlice.actions;

export default bookingSlice.reducer;
