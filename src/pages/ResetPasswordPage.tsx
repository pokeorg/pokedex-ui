/** @format */

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResetPasswordPage: React.FC = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const location = useLocation();

  // Helper function to extract the query parameter (token)
  const getQueryParam = (param: string) => {
    return new URLSearchParams(location.search).get(param);
  };

  const token = getQueryParam('token'); // Extract token from the query parameter

  useEffect(() => {
    console.log('Token:', token); // Debug: Check if the token is being received
    if (!token) {
      setError('Invalid or missing token');
    }
  }, [token]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) {
      setError('Token is missing');
      return;
    }

    try {
      await axios.post('http://localhost:3000/auth/reset-password', {
        token,
        newPassword,
      });
      setSuccess('Password has been reset successfully. You can now log in.');
      setError(null);
      setNewPassword(''); // Clear the password field
      setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
    } catch (err: any) {
      setError(err.response?.data.error || 'An error occurred');
      setSuccess(null);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={handlePasswordChange}
              className="border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
              placeholder="Enter your new password"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
          <button
            type="submit"
            className="bg-green-900 text-white rounded-lg py-2 w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPasswordPage;