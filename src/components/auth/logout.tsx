import React from 'react';
import { useAuth } from '/Users/hemant/pokedex-ui/src/contexts/AuthContext'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
  const { logout } = useAuth();
  const navigate = useNavigate(); // Hook for navigation

  const handleLogout = () => {
    logout();
    navigate('/login'); // Navigate to the login page after logging out
  };

  return (
    <button 
      onClick={handleLogout} 
      className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
    >
      Logout
    </button>
  );
};

export default Logout;