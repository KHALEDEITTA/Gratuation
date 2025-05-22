// src/features/flight/flightSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from './axios';

export const fetchalldestination = createAsyncThunk('destinations/fetchAll', async () => {
  const res = await axiosInstance.get('/destinations');
  return res.data;
});

export const adddestination = createAsyncThunk('flight/add', async (flightData) => {
  const res = await axiosInstance.post('/destinations/', flightData);
  return res.data;
});

export const updatedestination = createAsyncThunk('flight/update', async ({ id, data }) => {
  const res = await axiosInstance.put(`/flights/${id}/`, data);
  return res.data;
});

export const deletedestination = createAsyncThunk('flight/delete', async (id) => {
  await axiosInstance.delete(`/flights/${id}/`);
  return id;
});

const destinationtSlice = createSlice({
  name: 'destination',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchalldestination.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchalldestination.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.data;
      })
      .addCase(fetchalldestination.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(adddestination.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updatedestination.fulfilled, (state, action) => {
        const index = state.list.findIndex((f) => f.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deletedestination.fulfilled, (state, action) => {
        state.list = state.list.filter((f) => f.id !== action.payload);
      });
  },
});

export default destinationtSlice.reducer;
