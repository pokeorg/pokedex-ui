/** @format */

import React from "react";
import GoogleLogo from "../assets/images/google-icon-logo-svgrepo-com.svg";
import AppleLogo from "../assets/images/apple-logo-svgrepo-com.svg";

const Login: React.FC = () => {
  return (
    <div className='flex h-[100vh]'>
      <div className='w-1/2 bg-white flex justify-center items-center'>
        {" "}
        <div className='flex justify-center items-center bg-white'>
          <div className='flex flex-col bg-white  w-[475px]'>
            <div className='flex flex-col'>
              <h2 className='text-[32px] font-bold'>Welcome back!</h2>
              <h5 className='text=[16px] mb-6'>
                Enter your Credentials to access your account
              </h5>
            </div>
            <form className='flex flex-col justify-center '>
              <div className='flex flex-col'>
                <label
                  htmlFor='email'
                  className='mb-1 text-sm font-medium text-gray-700'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  className='border bg-white border-gray-300 rounded-lg p-2 focus:outline-none mb-6 focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your email'
                  required
                />
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='password'
                    className='mb-1 text-sm font-medium text-gray-700'>
                    Password
                  </label>
                  <a
                    href='#'
                    className='text-sm text-blue-700 hover:underline text-center'>
                    forgot Password?
                  </a>
                </div>
                <input
                  type='password'
                  id='password'
                  className='border bg-white border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your password'
                  required
                />
              </div>
              <div className='flex items-center mt-4 mb-4'>
                <input
                  type='checkbox'
                  id='remember'
                  className='peer h-4 w-4 text-custom-green border-gray-300 rounded accent-custom-green'
                />
                <label
                  htmlFor='remember'
                  className='ml-2 text-sm text-gray-700 peer-checked:text-custom-green peer-checked:font-medium peer-focus:text-custom-green hover:text-custom-green'>
                  Remember me for 30 days
                </label>
              </div>
              <button
                type='submit'
                className='bg-green-900 text-white rounded-lg py-2 hover:bg-custom-green focus:outline-none focus:ring-2 focus:ring-blue-500'>
                Login
              </button>
              <div className='flex  mt-4 mb-4'>
                <div className='border-b-2 border-black border border-opacity-50'></div>
                <div>Or</div>
                <div className='border-b-2'></div>
              </div>
              <div className=''>
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
              </div>
              <div className='text-center mt-4'>
                <span className='text-gray-700 text-sm'>
                  Don’t have an account?{" "}
                </span>
                <a href='#' className='text-blue-500 text-sm font-medium'>
                  Sign Up
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='w-1/2 bg-black'>Bye</div>
    </div>
  );
};

export default Login;
