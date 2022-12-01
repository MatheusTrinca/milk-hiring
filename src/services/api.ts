import axios from 'axios';
import config from '../../config';

export const api = axios.create({
  baseURL: config.API_URL,
});

export const connStatus = axios.create({
  baseURL: config.CONNECTION_STATUS_URL,
});
