import axios, { isAxiosError } from 'axios';
import api from './api'; // Import the API instance

export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });

    const { token } = response.data;
    return { token };
  } catch (error) {
    if (isAxiosError(error) && error.response) { // Correct check for Axios error
      throw new Error(error.response.data.error || 'Login failed');
    } else {
      throw new Error('Login failed');
    }
  }
};
