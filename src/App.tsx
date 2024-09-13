import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import { AuthProvider } from './contexts/AuthContext';
import SignUp from './pages/SignUp';


const App: React.FC = () => {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
