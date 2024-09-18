// auth.ts
import api from './api'; // Import the API instance
import { isAxiosError } from 'axios';

// Login function
export const login = async (usernameOrEmail: string, password: string) => {
  try {
    const response = await api.post('/auth/login', {
      usernameOrEmail,
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

// Signup function
export const signup = async (username: string, email: string, password: string) => {
  try {
    const response = await api.post('/auth/signup', {
      username,
      email,
      password,
    });

    const { token } = response.data;
    return { token };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      // Return the error message from the response or a generic error message
      throw new Error(error.response.data.error || 'Signup failed');
    } else {
      throw new Error('Signup failed');
    }
  }
};

// Forgot password function
export const forgotPassword = async (email: string) => {
  try {
    const response = await api.post('/auth/forgot-password', {
      email,
    });

    // Extract the success message from the response
    const { message } = response.data;
    return { message };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      // Return the error message from the response or a generic error message
      throw new Error(error.response.data.error || 'Failed to send reset password link');
    } else {
      throw new Error('Failed to send reset password link');
    }
  }
};