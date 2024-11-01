import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  refreshUser,
  registerThunk,
} from './operations';
import { addTransaction } from '../transactions/operations';

const initialState = {
  user: {
    id: null,
    username: null,
    email: null,
    balance: 0,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

function handleLogIn(state, { payload }) {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    changeBalanceValue: (state, { payload }) => {
      state.user.balance = state.user.balance - payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleLogIn)
      .addCase(loginThunk.fulfilled, handleLogIn)
      .addCase(logoutThunk.fulfilled, state => {
        state.user = {
          id: null,
          username: null,
          email: null,
          balance: 0,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(addTransaction.fulfilled, (state, { payload }) => {
        state.user.balance = payload.balanceAfter;
      });
  },
});

export const authReducer = authSlice.reducer;
export const { changeBalanceValue } = authSlice.actions;
