import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Adjust the path as needed

interface PrivateRouteProps {
  element: JSX.Element; // Ensure the prop is defined here
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useAuth(); // Get authentication state from context

  // If authenticated, render the element, otherwise redirect to login
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;