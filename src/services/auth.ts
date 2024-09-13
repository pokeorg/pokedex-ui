// auth.ts
import api from './api'; // Import the API instance
import { isAxiosError } from 'axios';

// Login function
export const login = async (email: string, password: string,) => {
  try {
    const response = await api.post('/login', {
      email,
      password,
    });

    // Extract the token from the response
    const { token } = response.data;
    return { token };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      // Return the error message from the response or a generic error message
      throw new Error(error.response.data.error || 'Login failed');
    } else {
      throw new Error('Login failed');
    }
  }
};

// Signup function (fixed)
export const signup = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post('/signup', {
      username, 
      email,
      password,
    });

    const { token } = response.data;
    return { token };
  } catch (error:any) {
    if (error.response && error.response.data) {
      // Return the error message from the response or a generic error message
      throw new Error(error.response.data.error);
    } else {
      throw new Error('Signup failed');
    }
  }
};


