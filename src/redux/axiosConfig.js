import axios from 'axios';

const setAxiosBaseURL = () => {
  axios.defaults.baseURL = 'https://wallet.b.goit.study/docs/';
};

const setAxiosHeader = tokenReceived => {
  const savedDataLocalString = localStorage.getItem('persist:auth');

  const savedDataLocal = savedDataLocalString
    ? JSON.parse(savedDataLocalString)
    : null;

  const savedToken =
    savedDataLocal?.token === 'null' || !savedDataLocal?.token
      ? null
      : savedDataLocal?.token.slice(1, -1);

  axios.defaults.headers.common.Authorization = tokenReceived || savedToken;
};

const clearAxiosHeader = () => {
  delete axios.defaults.headers.common.Authorization;
};

const axiosConfig = {
  setAxiosBaseURL,
  setAxiosHeader,
  clearAxiosHeader,
};

export const api = axios.create({
  baseURL: 'https://wallet.b.goit.study/api/',
});

export const setToken = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};
export const clearToken = () => {
  api.defaults.headers.common.Authorization = '';
};
export default axiosConfig;
