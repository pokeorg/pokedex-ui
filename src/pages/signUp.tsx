/** @format */
<<<<<<< HEAD
import GoogleLogo from "../assets/images/google-icon-logo-svgrepo-com.svg";
import AppleLogo from "../assets/images/apple-logo-svgrepo-com.svg";
import React from "react";
import { Link } from "react-router-dom";
import cbs from "../assets/images/cbs.png"

const SignUp: React.FC = () => {
  return (
    <div className='flex h-[100vh]'>
      <div className='w-1/2 bg-white flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white'>
          <div className='flex flex-col bg-white w-[475px] p-6'>
            <div className='flex flex-col mb-6'>
              <h3 className='text-[32px] font-bold'>Get Started Now</h3>
            </div>
            <form className='flex flex-col'>
              <div className='flex flex-col mb-6'>
                <label
                  htmlFor='name'
                  className='mb-1 text-sm font-medium text-gray-700'>
                  Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                  placeholder='Enter your name'
                  required
                />
              </div>
              <div className='flex flex-col mb-6'>
                <label
                  htmlFor='mail'
                  className='mb-1 text-sm font-medium text-gray-700'>
                  Email Address
                </label>
                <input
                  type='email'
                  id='mail'
                  className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                  placeholder='Enter your email'
                  required
                />
              </div>
              <div className='flex flex-col mb-6'>
                <label
                  htmlFor='pass'
                  className='mb-1 text-sm font-medium text-gray-700'>
                  Password
                </label>
                <input
                  type='password'
                  id='pass'
                  className='border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700'
                  placeholder='Enter your password'
                  required
                />
              </div>
              <div className='flex items-center my-4'>
                <input
                  type='checkbox'
                  id='agree'
                  className='peer h-4 w-4 text-green-700 border-gray-300 rounded accent-green-700'
                />
                <label
                  htmlFor='agree'
                  className='ml-2 text-sm text-gray-700 peer-checked:text-green-700 peer-checked:font-medium peer-focus:text-green-700 hover:text-green-700'>
                  I agree to the terms & policy
                </label>
              </div>
              <button
                type='submit'
                className='bg-green-900 text-white rounded-lg py-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700'>
                Sign Up
              </button>
              <div className='flex items-center my-8'>
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
                  Sign up with Google
                </button>
                <button className='w-1/2 flex items-center justify-center bg-white border border-gray-300 text-black py-2 rounded-lg'>
                  <img
                    src={AppleLogo}
                    alt='Apple Logo'
                    className='w-5 h-5 mr-2'
                  />
                  Sign up with Apple
                </button>
              </div>
              <div className='text-center mt-4'>
                <span className='text-gray-700 text-sm'>
                  Have an account?{" "}
                </span>
                <Link to='/login' className='text-blue-500 text-sm font-medium'>
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='w-1/2 bg-black flex items-center justify-center'>
      <img  src={cbs}
              alt="Pokemon Image"
              className="object-cover"
            />
      </div>
    </div>
  );
};

export default SignUp;
=======

import React from "react";
const signUp: React.FC = () => {
  return (
    <div className=' flex h-[100vh]'>
      <div className='w-1/2 bg-white flex justify-center items-center '></div>
      <div className='w-1/2 bg-custom-gradient-left'>Animation</div>
    </div>
  );
};
export default signUp;
>>>>>>> origin/SCRUM-21-page-forgot-password
