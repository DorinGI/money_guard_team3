import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from '../axiosConfig';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { username, password, email } = credentials;
      const { data } = await api.post('/auth/sign-up', {
        username,
        password,
        email,
      });
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await api.post('/auth/sign-in', credentials);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.delete('/auth/sign-out');
      clearToken();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    try {
      setToken(persistedToken);
      const res = await api.get('/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const getUserInfo = createAsyncThunk(
  'auth/getUserInfo',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/api/users/current');

      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
