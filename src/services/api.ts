import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your API URL

const api = axios.create({
  baseURL: API_URL,
});

export default api;
