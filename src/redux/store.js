import { configureStore } from '@reduxjs/toolkit';
import { transactionsReducer } from '../redux/transactions/slice';
// import contactsReducer from './contactsSlice';
import authReducer from './slices/authSlice';

 export const store = configureStore({
  reducer: {
    transactions: transactionsReducer,
    auth: authReducer,
  },
});