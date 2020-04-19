import axios from 'axios';

const api = axios.create({
  //baseURL: 'http://localhost:4444',
  baseURL: 'http://yarnadd.com',
});

export default api;
