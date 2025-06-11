// src/features/trip/tripSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const fetchAllTrips = createAsyncThunk('trips/fetchAll', async () => {
  const res = await axiosInstance.get('/trips');
  return res.data;
});

export const fetchOneTrip = createAsyncThunk('trips/fetchOne', async (id) => {
  const  res = await axiosInstance.get(`/trips/${id}`);
  console.log(res.data.data)
  return await res.data.data;
});

export const addTrip = createAsyncThunk('trips/add', async (tripData) => {
  const res = await axiosInstance.post('/trips', tripData);
  return res.data;
});

export const updateTrip = createAsyncThunk('trips/update', async ({ id, data }) => {
  const res = await axiosInstance.put(`/trips/${id}`, data);
  return res.data;
});

export const deleteTrip = createAsyncThunk('trips/delete', async (id) => {
  await axiosInstance.delete(`/trips/${id}`);
  return id;
});

const tripSlice = createSlice({
  name: 'trip',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
    currentTrip: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllTrips.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllTrips.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.data;
      })
      .addCase(fetchAllTrips.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOneTrip.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOneTrip.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentTrip = action.payload;
      })
      .addCase(fetchOneTrip.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addTrip.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateTrip.fulfilled, (state, action) => {
        const index = state.list.findIndex((t) => t.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteTrip.fulfilled, (state, action) => {
        state.list = state.list.filter((t) => t.id !== action.payload);
      });
  },
});

export default tripSlice.reducer;
