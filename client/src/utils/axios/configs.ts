import { AxiosRequestConfig } from 'axios';

export const axiosCofig: AxiosRequestConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: process.env.REACT_APP_API_CREDENTIALS === 'true',
};
