/** @format */
import GoogleLogo from "../assets/images/google-icon-logo-svgrepo-com.svg";
import AppleLogo from "../assets/images/apple-logo-svgrepo-com.svg";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ForgotPasswordPopup from './ForgotPasswordPopup'; 
import cbs from "../assets/images/cbs.png";
import { useAuth } from '../contexts/AuthContext';
import { login } from '../services/auth'; 

const Login: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { login: authLogin } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Login form submitted'); 
    try {
      const { token } = await login(email, password); // if
      console.log('Token received:', token); 
      authLogin(token); 
      console.log("Welcome to Pokedex!");
    } catch (err) {
      console.error('Login error:', err); 
      setError('Login failed. Please check your credentials.');
    }
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className={`flex h-[100vh] ${isPopupOpen ? 'blur-sm' : ''}`}>
        <div className='w-1/2 bg-white flex justify-center items-center'>
          <div className='flex justify-center items-center bg-white'>
            <div className='flex flex-col bg-white w-[475px] p-6'>
              <div className='flex flex-col mb-6'>
                <h2 className='text-[32px] font-bold'>Welcome back!</h2>
                <h5 className='text-[16px] mb-6'>
                  Enter your credentials to access your account
                </h5>
              </div>
              <form className='flex flex-col' onSubmit={handleSubmit}>
                <div className='flex flex-col mb-6'>
                  <label
                    htmlFor='email or username'
                    className='mb-1 text-sm font-medium text-gray-700'>
                    Email Address or username
                  </label>
                  <input
                    type='email or username'
                    id='email'
                    className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='flex flex-col mb-6'>
                  <div className='flex justify-between'>
                    <label
                      htmlFor='password'
                      className='mb-1 text-sm font-medium text-gray-700'>
                      Password
                    </label>
                    <button
                      type='button'
                      onClick={openPopup}
                      className='text-sm text-blue-700 hover:underline'>
                      Forgot Password?
                    </button>
                  </div>
                  <input
                    type='password'
                    id='password'
                    className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className='flex items-center my-4'>
                  <input
                    type='checkbox'
                    id='remember'
                    className='peer h-4 w-4 text-green-700 border-gray-300 rounded accent-green-700'
                  />
                  <label
                    htmlFor='remember'
                    className='ml-2 text-sm text-gray-700 peer-checked:text-green-700 peer-checked:font-medium peer-focus:text-green-700 hover:text-green-700'>
                    Remember me for 30 days
                  </label>
                </div>
                <button
                  type='submit'
                  className='bg-green-900 text-white rounded-lg py-2 w-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700'>
                  Login
                </button>
                <div className='flex items-center mt-4 mb-4'>
                  <div className='flex-grow border-t-2 border-gray-300'></div>
                  <span className='mx-2 text-gray-800'>Or</span>
                  <div className='flex-grow border-t-2 border-gray-300'></div>
                </div>
                <div className='flex justify-center items-center gap-5 mt-4'>
                  <button className='w-1/2 flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded-lg'>
                    <img
                      src={GoogleLogo}
                      alt='Google Logo'
                      className='w-5 h-5 mr-2'
                    />
                    Sign in with Google
                  </button>
                  <button className='w-1/2 flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded-lg'>
                    <img
                      src={AppleLogo}
                      alt='Apple Logo'
                      className='w-5 h-5 mr-2'
                    />
                    Sign in with Apple
                  </button>
                </div>
                <div className='text-center mt-4'>
                  <span className='text-gray-700 text-sm'>
                    Don’t have an account?{' '}
                  </span>
                  <Link to='/signup' className='text-blue-500 text-sm font-medium'>
                    Sign Up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className='w-1/2 bg-black flex items-center justify-center'>
          <img src={cbs} alt="Pokemon Image" className="object-cover" />
        </div>
      </div>
      {isPopupOpen && <ForgotPasswordPopup onClose={closePopup} isPopupOpen={isPopupOpen} />}
    </>
  );
};

export default Login;
