import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contactsSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    // contacts: contactsReducer,
    auth: authReducer,
  },
});
