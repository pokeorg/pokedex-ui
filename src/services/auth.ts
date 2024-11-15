//auth.ts

import api from './api'; // Import the API instance
import { isAxiosError } from 'axios';


const validatePasswordStrength = (password: string) => {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar && password.length >= 8;
};

// Login function
export const login = async (usernameOrEmail: string, password: string) => {
  try {
    const response = await api.post('/auth/login', {
      usernameOrEmail,
      password,
    });

    const { token } = response.data;
    return { token };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Login failed');
    } else {
      throw new Error('Login failed');
    }
  }
};

// Signup function with password validation (Updated)
export const signup = async (username: string, email: string, password: string) => {
  if (!validatePasswordStrength(password)) {
    throw new Error('Password must be at least 8 characters long, with uppercase, lowercase, numbers, and special characters.');
  }

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

    const { message } = response.data;
    return { message };
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error || 'Failed to send reset password link');
    } else {
      throw new Error('Failed to send reset password link');
    }
  }
};