import axios from 'axios';

export const currencyAPI = axios.create({
  baseURL: `https://openexchangerates.org/api`,
});
