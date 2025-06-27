
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const fetchAllNileCruises = createAsyncThunk('nileCruise/fetchAll', async () => {
  const res = await axiosInstance.get('/nile-cruises');
  return res.data;
});

export const fetchOneNileCruise = createAsyncThunk('nileCruise/fetchOne', async (id) => {
  const res = await axiosInstance.get(`/nile-cruises/${id}`);
  return res.data.data;
});

export const addNileCruise = createAsyncThunk('nileCruise/add', async (cruiseData) => {
  const res = await axiosInstance.post('/nile-cruises', cruiseData);
  return res.data;
});

export const updateNileCruise = createAsyncThunk('nileCruise/update', async ({ id, data }) => {
  const res = await axiosInstance.put(`/nile-cruises/${id}`, data);
  return res.data;
});

export const deleteNileCruise = createAsyncThunk('nileCruise/delete', async (id) => {
  await axiosInstance.delete(`/nile-cruises/${id}`);
  return id;
});
export const filterNileCruisesByItinerary = createAsyncThunk(
  'nileCruise/filterByItinerary',
  async (itinerary) => {
    const res = await axiosInstance.get(`/nile-cruises/filter?itinerary=${encodeURIComponent(itinerary)}`);
    return res.data;
  }
);


const nileCruiseSlice = createSlice({
  name: 'nileCruise',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
    currentCruise: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllNileCruises.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllNileCruises.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.data;
      })
      .addCase(fetchAllNileCruises.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOneNileCruise.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOneNileCruise.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentCruise = action.payload;
      })
      .addCase(fetchOneNileCruise.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNileCruise.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateNileCruise.fulfilled, (state, action) => {
        const index = state.list.findIndex((c) => c.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteNileCruise.fulfilled, (state, action) => {
        state.list = state.list.filter((c) => c.id !== action.payload);
      })
       .addCase(filterNileCruisesByItinerary.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(filterNileCruisesByItinerary.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.data;
      })
      .addCase(filterNileCruisesByItinerary.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  },
});

export default nileCruiseSlice.reducer;
