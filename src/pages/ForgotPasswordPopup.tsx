/** @format */
import React, { useState } from "react";
import { Link } from "react-router-dom";

interface ForgotPasswordPopupProps {
  onClose: () => void;
  isPopupOpen: boolean;
}

const ForgotPasswordPopup: React.FC<ForgotPasswordPopupProps> = ({
  onClose,
  isPopupOpen,
}) => {
  const [email, setEmail] = useState<string>(""); // State to store email
  const [message, setMessage] = useState<string>(""); // State to store success or error messages
  const [loading, setLoading] = useState<boolean>(false); // State to manage loading state

  if (!isPopupOpen) return null;

  // Handle email input change
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  // Handle form submission to send reset email
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Reset password link sent to your email.");
      } else {
        setMessage(data.error || "An error occurred. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred. Please check your connection and try again.");
    }

    setLoading(false);
  };

  const handlePopupContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg w-[480px] p-6 relative mb-[10px]"
        onClick={handlePopupContentClick}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Forgot Password?
          </h2>
          <h5 className="text-sm text-gray-600 mb-6">
            Remember your password?{" "}
            <Link
              to="/login"
              onClick={onClose}
              className="text-blue-600 hover:underline"
            >
              Login here
            </Link>
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fmail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email Address
              </label>
              <input
                type="email"
                id="fmail"
                className="border border-gray-300 rounded-lg p-2 w-full text-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-900 text-white rounded-lg py-2 w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
              disabled={loading}
            >
              {loading ? "Sending..." : "Reset Password"}
            </button>
          </form>

          {message && (
            <p className="mt-4 text-sm text-center text-gray-600">{message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;