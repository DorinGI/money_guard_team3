import { createSlice } from '@reduxjs/toolkit';

import {
  addTransaction,
  deleteTransaction,
  fetchAllTransactions,
  fetchTransactionsSummary,
  modifyTransaction,
} from './operations';

const initialState = {
  categories: [],
  items: [
    {
      id: '1',
      date: '2024-01-01',
      type: 'income',
      category: 'Salary',
      comment: 'Monthly salary',
      sum: 3000,
    },
    {
      id: '2',
      date: '2024-01-05',
      type: 'expense',
      category: 'Food',
      comment: 'Groceries',
      sum: 150,
    },
    {
      id: '3',
      date: '2024-01-10',
      type: 'expense',
      category: 'Utilities',
      comment: 'Electric bill',
      sum: 100,
    },
  ], //date de proba
  isLoading: false,
  error: null,
  summary: [],
  trasactionIdForDelete: '',
  transactionForUpdate: {
    id: '',
    type: '',
  },
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    setTrasactionIdForDelete: (state, action) => {
      state.trasactionIdForDelete = action.payload;
    },
    setTrasactionForUpdate: (state, action) => {
      state.transactionForUpdate = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(el => el.id === action.payload);
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      })
      .addCase(modifyTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(modifyTransaction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(modifyTransaction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(el => el.id === action.payload.id);
        state.items.splice(index, 1, action.payload);
      })
      .addCase(fetchAllTransactions.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAllTransactions.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllTransactions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTransactionsSummary.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchTransactionsSummary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTransactionsSummary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.summary = action.payload;
      });
  },
});

export const { setTrasactionIdForDelete, setTrasactionForUpdate } =
  transactionsSlice.actions;

export const transactionsReducer = transactionsSlice.reducer;
