import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

// Get all hotels
export const fetchAllHotels = createAsyncThunk('hotel/fetchAll', async () => {
  const res = await axiosInstance.get('/hotels');
  return res.data;
});

// Get one hotel
export const fetchOneHotel = createAsyncThunk('hotel/fetchOne', async (id) => {
  const res = await axiosInstance.get(`/hotels/${id}`);
  return res.data.data;
});

// Add new hotel (assumes FormData is used)
export const addHotel = createAsyncThunk('hotel/add', async (hotelData) => {
  const res = await axiosInstance.post('/hotels', hotelData);
  return res.data;
});

// Update hotel
export const updateHotel = createAsyncThunk('hotel/update', async ({ id, data }) => {
  const res = await axiosInstance.put(`/hotels/${id}`, data);
  return res.data;
});

// Delete hotel
export const deleteHotel = createAsyncThunk('hotel/delete', async (id) => {
  await axiosInstance.delete(`/hotels/${id}`);
  return id;
});

// Search hotels by name (you can extend with more params)
export const searchHotels = createAsyncThunk('hotel/search', async ({
    destination,to,from
}) => {
  const res = await axiosInstance.get(`/hotels/search`,{
    params: {
    ...(destination && { destination }),
    ...(from && { from }),
    ...(to && { to }),
  }

  });
  return res.data;
});

const hotelSlice = createSlice({
  name: 'hotel',
  initialState: {
    lists: [],
    status: 'idle',
    error: null,
    currentHotel: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllHotels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllHotels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lists = action.payload.data;
      })
      .addCase(fetchAllHotels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOneHotel.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOneHotel.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentHotel = action.payload;
      })
      .addCase(fetchOneHotel.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addHotel.fulfilled, (state, action) => {
        state.lists.push(action.payload);
      })
      .addCase(updateHotel.fulfilled, (state, action) => {
        const index = state.lists.findIndex((h) => h.id === action.payload.id);
        if (index !== -1) {
          state.lists[index] = action.payload;
        }
      })
      .addCase(deleteHotel.fulfilled, (state, action) => {
        state.lists = state.lists.filter((h) => h.id !== action.payload);
      })
      .addCase(searchHotels.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(searchHotels.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.lists = action.payload.data;
      })
      .addCase(searchHotels.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default hotelSlice.reducer;
