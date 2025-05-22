import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { data } from 'react-router';


// login thunk
export const Register = createAsyncThunk(
  'auth/Register',
  async (form) => {
    try {
      const response =  await axios.post('http://localhost:8080/favtour/auth/register', form);
      const   res= await response.data;

      // localStorage.setItem('token', token);
  //  console.log((await response).data)
            return  res

    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data?.message || 'Register failed');
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (form , thunkAPI) => {
    try {
    const res =  await axios.post('http://localhost:8080/favtour/auth/login', form);
      localStorage.setItem('token', res.data.data.token);
      console.log(res.data)

      // localStorage.setItem('refreshToken', res.data.refreshToken);
      return res.data;
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Login failed');
    }
  }
);

// refresh token thunk


const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
  loading: false,
  error: null,
  isAuthenticated: !!localStorage.getItem('token'),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
    setToken: (state, action) => {
      state.token = action.payload;
      localStorage.setItem('token', action.payload);
      state.isAuthenticated = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
    
  },
});

export const { logout, setToken } = authSlice.actions;
export default authSlice.reducer;


