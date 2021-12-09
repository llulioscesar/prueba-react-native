import {AxiosRequestConfig} from 'axios';
import {API_URL} from 'react-native-dotenv';

export const API_BASE_URL: string = API_URL;

export const ServiceConfig: AxiosRequestConfig = {
  timeout: 15000,
  baseURL: API_BASE_URL,
  headers: {
    'cache-control': 'no-cache, no-store, must-revalidate',
    pragma: 'no-cache',
    'content-type': 'application/json',
    accept: 'application/json',
  },
};
