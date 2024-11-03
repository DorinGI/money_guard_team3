import { createAsyncThunk } from '@reduxjs/toolkit';
import { currencyAPI } from '../../redux/currencyApi';

const currencyID = {
  usd: 'USD',
  eur: 'EUR',
  ron: 'RON',
};

export const fetchCurrency = createAsyncThunk(
  'fetchCurrency',
  async (_, { rejectWithValue }) => {
    try {
      const res = await currencyAPI.get(
        '/latest.json?app_id=8b363fd5da974ff799c5f684a0aaa34a'
      );

      // Verificăm dacă datele există
      if (res.data && res.data.rates) {
        const rates = res.data.rates;

        const eurToRon = rates['RON'] / rates['EUR'];
        const usdToRon = rates['RON'] / rates['USD'];

        const result = [
          {
            currencyName: currencyID.usd,
            rateBuy: usdToRon,
            rateSell: usdToRon + 0.3,
            currencyCodeA: '840',
          },
          {
            currencyName: currencyID.eur,
            rateBuy: eurToRon,
            rateSell: eurToRon + 0.4,
            currencyCodeA: '978',
          },
        ];

        return result;
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
