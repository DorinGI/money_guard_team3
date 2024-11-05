import axios from 'axios';

export const currencyAPI = axios.create({
  baseURL: `https://openexchangerates.org/api`,
});

// export const getCurrencyData = async () => {
//   const { data } = await currencyAPI.get(
//     '/latest.json?app_id:8b363fd5da974ff799c5f684a0aaa34a'
//   );
//   return data;
// };
