/* eslint-disable import/no-cycle */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-param-reassign */
import axios from 'axios';
import { getToken, logout } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `jwt ${token}`;
  }
  return config;
});

api.interceptors.response.use(response =>
  // Do something with response data
   response,
 (error) => {
  // Do something with response error
  if (error.response.data === 'Unauthorized') {
    logout();
  }
  return Promise.reject(error);
});

export default api;
