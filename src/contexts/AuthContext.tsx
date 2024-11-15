/** @format */
import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  token: string | null;
  login: (token: string) => void;
  signUp: (token: string) => void;
  logout: () => void;
}
// Create AuthContext
export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

// AuthProvider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const isBrowser = typeof window !== 'undefined'; // Check for browser

  const login = (newToken: string) => {
    setToken(newToken);
    if (isBrowser) {
      window.localStorage.setItem('token', newToken); // Store token in localStorage
    }
  };

  const signUp = (newToken: string) => {
    setToken(newToken);
    if (isBrowser) {
      window.localStorage.setItem('token', newToken); // Store token in localStorage
    }
  };

  const logout = () => {
    setToken(null);
    if (isBrowser) {
      window.localStorage.removeItem('token'); // Remove token from localStorage
    }
  };

  return (
    <AuthContext.Provider value={{ token, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
