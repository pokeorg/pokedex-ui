// api.ts
import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Ensure this matches your backend URL

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json', // Ensure the backend expects JSON
  },
});

export default api;
