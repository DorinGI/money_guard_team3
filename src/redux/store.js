import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './auth/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { globalReducer } from './slices/globalSlice';
import { transactionsReducer } from '../redux/transactions/slice';
import { modalsReducer } from './Modals/slice';
import { currencyReducer } from './currency/slice.js';
// import { statisticsReducer } from './statistics/slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const currencyPersistConfig = {
  key: 'currency',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    currency: persistReducer(currencyPersistConfig, currencyReducer),
    transactions: transactionsReducer,
    // auth: authReducer,
    modals: modalsReducer,
    // statistics: statisticsReducer,
    global: globalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
