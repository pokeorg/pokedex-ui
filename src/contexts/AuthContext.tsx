/** @format */
import React, { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  const login = (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('token', newToken); // Optional: Store token in localStorage
  };

  const SignUp = (newToken: string) =>{
    setToken(newToken);
    localStorage.setItem('token', newToken);
  }

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token'); // Optional: Remove token from localStorage
  };

  return (
    <AuthContext.Provider value={{ token, login, SignUp, logout }}>
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
