/** @format */
import React from "react";
import { Link } from "react-router-dom";


interface ForgotPasswordPopupProps {
  onClose: () => void;
  isPopupOpen: boolean;
}

const ForgotPasswordPopup: React.FC<ForgotPasswordPopupProps> = ({
  onClose,
  isPopupOpen,
}) => {
  if (!isPopupOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[480px]  p-6 relative mb-[10px]" >
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
        <div className="">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Forgot Password?
        </h2>
        <h5 className="text-sm text-gray-600 mb-6">
          Remember your password?{" "}
          <Link to="/login" onClick={(onClose)} className="text-blue-600 hover:underline">
            Login here
          </Link>
        </h5>
        <form>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-lg p-2 w-full text-sm focus:border-green-700 focus:ring-2 focus:ring-green-700"
              placeholder="Enter your email"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-900 text-white rounded-lg py-2 w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            Reset Password
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPopup;
