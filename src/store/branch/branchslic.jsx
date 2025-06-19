// src/features/branch/branchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../axios';

export const fetchAllBranches = createAsyncThunk('branches/fetchAll', async () => {
  const res = await axiosInstance.get('/branches');
  console.log(res.data.data)
  return res.data;
});

export const fetchOneBranch = createAsyncThunk('branches/fetchOne', async (id) => {
  const res = await axiosInstance.get(`/branches/${id}`);
  return res.data.data;
});

export const addBranch = createAsyncThunk('branches/add', async (branchData) => {
  const res = await axiosInstance.post('/branches', branchData);
  return res.data;
});

export const updateBranch = createAsyncThunk('branches/update', async ({ id, data }) => {
  const res = await axiosInstance.put(`/branches/${id}`, data);
  return res.data;
});

export const deleteBranch = createAsyncThunk('branches/delete', async (id) => {
  await axiosInstance.delete(`/branches/${id}`);
  return id;
});

const branchSlice = createSlice({
  name: 'branch',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
    currentBranch: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllBranches.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBranches.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload.data;
      })
      .addCase(fetchAllBranches.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchOneBranch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchOneBranch.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentBranch = action.payload;
      })
      .addCase(fetchOneBranch.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBranch.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(updateBranch.fulfilled, (state, action) => {
        const index = state.list.findIndex((b) => b.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      })
      .addCase(deleteBranch.fulfilled, (state, action) => {
        state.list = state.list.filter((b) => b.id !== action.payload);
      });
  },
});

export default branchSlice.reducer;
