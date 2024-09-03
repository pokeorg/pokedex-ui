import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/signUp';
import ForgotPassword from './pages/ForgotPasswordPopup';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path='/forgot-password' element={<ForgotPassword />}/>
      </Routes>
    </Router>
  );
};

export default App;
