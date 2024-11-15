import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ForgotPasswordPopup from "./pages/ForgotPasswordPopup";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import Home from "./pages/Home";
import BigCard from "./components/ui/CardComponents/BigCard";
import Backdrop from "./components/ui/CardComponents/Backdrop";
import PokemonDetails from "./components/ui/CardComponents/PokemonDetails";
import TextInputWithCounter from "./TextInputWithCounter";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "../src/contexts/PrivateRoute"; 

const App: React.FC = () => {
  const [bigCardIsOpen, setBigCardIsOpen] = useState<boolean>(false);
  const [bigCardData, setBigCardData] = useState<{
    id: number | null;
    image: string | null;
    name: string | null;
    weight: number | null;
    height: number | null;
  }>({ id: null, image: null, name: null, weight: null, height: null });

  const [isForgotPasswordPopupOpen, setIsForgotPasswordPopupOpen] = useState(false);
  
  // Use the location hook to get current route
  const location = useLocation();

  const closeBigCard = () => {
    setBigCardIsOpen(false);
  };

  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<TextInputWithCounter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        {/* Protect the Home route */}
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
      
      {bigCardIsOpen && <Backdrop closeBigCard={closeBigCard} />}
      {bigCardIsOpen && bigCardData.id && bigCardData.image && bigCardData.name && bigCardData.weight && bigCardData.height && (
        <BigCard
          closeBigCard={closeBigCard}
          id={bigCardData.id}
          image={bigCardData.image}
          name={bigCardData.name}
          weight={bigCardData.weight}
          height={bigCardData.height}
        />
      )}

      <ForgotPasswordPopup
        isPopupOpen={isForgotPasswordPopupOpen}
        onClose={() => setIsForgotPasswordPopupOpen(false)}
      />

      {/* Logout Button: Only visible on Home page */}
      {location.pathname === '/home' && (
        <button
          onClick={() => {
            // Call your logout function here
          }}
          className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          Logout
        </button>
      )}
    </AuthProvider>
  );
};

export default App;