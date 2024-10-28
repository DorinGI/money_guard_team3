import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from '../redux/transactions/slice';
// import contactsReducer from './contactsSlice';
// import authReducer from './authSlice';

 export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
  },
});