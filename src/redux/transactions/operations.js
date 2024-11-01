import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosConfig from '../axiosConfig';
import { toast } from 'react-toastify';

// Configurăm axios
axiosConfig.setAxiosBaseURL();
axiosConfig.setAxiosHeader();

const getTransactionsCategories = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transaction-categories');
      return response.data;
    } catch (error) {
      const errorNotify =
        error.response?.data?.message ||
        'Operation failed, transaction not saved. We are facing some technical problems with our servers!';
      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// *Adaugă tranzacție //
const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async (transactionData, thunkAPI) => {
    try {
      const response = await axios.post('/transactions', transactionData);
      toast.success('Transaction added successfully!');
      return response.data;
    } catch (error) {
      const errorNotify =
        error.response?.data?.message ||
        'Operation failed, transaction not saved. We are facing some technical problems with our servers!';
      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// *Obține toate tranzacțiile //
const fetchAllTransactions = createAsyncThunk(
  'transactions/fetchAllTransaction',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/transactions');
      return response.data;
    } catch (error) {
      const errorNotify =
        error.response?.data?.message ||
        'Operation failed, transaction not saved. We are facing some technical problems with our servers!';
      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// *Șterge tranzacție //
const deleteTransaction = createAsyncThunk(
  'transactions/deleteTransaction',
  async (transactionId, thunkAPI) => {
    try {
      await axios.delete(`/transactions/${transactionId}`);
      toast.success('Transaction deleted successfully!');
      return transactionId;
    } catch (error) {
      const errorNotify =
        error.response?.data?.message ||
        'Operation failed, transaction not deleted. We are facing some technical problems with our servers!';
      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// *Modifică tranzacție //
const modifyTransaction = createAsyncThunk(
  'transactions/modifyTransaction',
  async ({ transactionId, transactionData }, thunkAPI) => {
    try {
      const response = await axios.patch(
        `/transactions/${transactionId}`,
        transactionData
      );
      toast.success('Transaction modified successfully!');
      return response.data;
    } catch (error) {
      const errorNotify =
        error.response?.data?.message ||
        'Operation failed, transaction not modified. We are facing some technical problems with our servers!';
      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// *Obține rezumatul tranzacțiilor //
const fetchTransactionsSummary = createAsyncThunk(
  'transactions/fetchTransactionsSummary',
  async ({ month, year }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/transactions-summary?month=${month}&year=${year}`
      );
      return response.data;
    } catch (error) {
      const errorNotify =
        error.response?.data?.message ||
        'Operation failed and transaction summary not fetched. We are facing some technical problems with our servers!';
      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// *Obține categoriile tranzacțiilor //
const getTransactionsCategories = createAsyncThunk(
  "transactions/getTransactionsCategories",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/transactions/categories");
      return response.data;
    } catch (error) {
      const errorNotify =
        error.response?.data?.message ||
        "Operation failed and transaction categories not fetched. We are facing some technical problems with our servers!";
      toast.error(errorNotify);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export {
  getTransactionsCategories,
  fetchAllTransactions,
  addTransaction,
  deleteTransaction,
  fetchTransactionsSummary,
  modifyTransaction,
  getTransactionsCategories,
};
