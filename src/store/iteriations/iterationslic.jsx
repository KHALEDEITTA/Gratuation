
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const fetchAllItineraries = createAsyncThunk('itinerary/fetchAll', async () => {
  const res = await axiosInstance.get('/itineraries');
  return res.data;
});

export const fetchOneItinerary = createAsyncThunk('itinerary/fetchOne', async (id) => {
  const res = await axiosInstance.get(`/itineraries/${id}`);
  return res.data.data;
});

export const addItinerary = createAsyncThunk('itinerary/add', async (itineraryData) => {
  const res = await axiosInstance.post('/itineraries', itineraryData);
  return res.data;
});

export const updateItinerary = createAsyncThunk('itinerary/update', async ({ id, data }) => {
  const res = await axiosInstance.put(`/itineraries/${id}`, data);
  return res.data;
});

export const deleteItinerary = createAsyncThunk('itinerary/delete', async (id) => {
  await axiosInstance.delete(`/itineraries/${id}`);
  return id;
});

const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: {
    itieration: [],
    status: 'idle',
    error: null,
    currentItinerary: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllItineraries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllItineraries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.itieration = action.payload.data;
      })
      .addCase(fetchAllItineraries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOneItinerary.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOneItinerary.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentItinerary = action.payload;
      })
      .addCase(fetchOneItinerary.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItinerary.fulfilled, (state, action) => {
        state.itieration.push(action.payload);
      })
      .addCase(updateItinerary.fulfilled, (state, action) => {
        const index = state.itieration.findIndex((i) => i.id === action.payload.id);
        if (index !== -1) {
          state.itieration[index] = action.payload;
        }
      })
      .addCase(deleteItinerary.fulfilled, (state, action) => {
        state.itieration = state.itieration.filter((i) => i.id !== action.payload);
      });
  },
});

export default itinerarySlice.reducer;
