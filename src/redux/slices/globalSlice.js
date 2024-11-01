import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrency } from '../currency/operations';
import { fetchTransSumThunk } from '../statistics/operations';
import {
  addTransaction,
  fetchAllTransactions,
  deleteTransaction,
  getTransactionsCategories,
} from '../transactions/operations';

const initialState = {
  isLoading: false,
  error: null,
};

function handlePending(state) {
  state.isLoading = true;
}

function handleFulfilled(state) {
  state.isLoading = false;
  state.error = null;
}

function handleRejected(state, action) {
  state.isLoading = false;
  state.error = action.payload;
}

const slice = createSlice({
  name: 'global',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCurrency.fulfilled, handleFulfilled)
      .addCase(fetchCurrency.pending, handlePending)
      .addCase(fetchCurrency.rejected, handleRejected)

      .addCase(fetchTransSumThunk.pending, handlePending)
      .addCase(fetchTransSumThunk.fulfilled, handleFulfilled)
      .addCase(fetchTransSumThunk.rejected, handleRejected)

      .addCase(getTransactionsCategories.pending, handlePending)
      .addCase(getTransactionsCategories.fulfilled, handleFulfilled)
      .addCase(getTransactionsCategories.rejected, handleRejected)

      .addCase(addTransaction.pending, handlePending)
      .addCase(addTransaction.fulfilled, handleFulfilled)
      .addCase(addTransaction.rejected, handleRejected)

      .addCase(fetchAllTransactions.pending, handlePending)
      .addCase(fetchAllTransactions.fulfilled, handleFulfilled)
      .addCase(fetchAllTransactions.rejected, handleRejected)

      .addCase(deleteTransaction.pending, handlePending)
      .addCase(deleteTransaction.fulfilled, handleFulfilled)
      .addCase(deleteTransaction.rejected, handleRejected);
  },
});

export const globalReducer = slice.reducer;
