/** @format */
import GoogleLogo from "../assets/images/google-icon-logo-svgrepo-com.svg";
import AppleLogo from "../assets/images/apple-logo-svgrepo-com.svg";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../contexts/AuthContext'; // Adjust the path to where your context is defined
import { signup } from "../services/auth"; 
import cbs from "../assets/images/cbs.png";

// Reusable form input component for better readability and reusability
const FormInput: React.FC<{
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  errorMessage?: string;                              //to add errorMessage prop
}> = ({ label, type, id, value, onChange, placeholder,errorMessage }) => (
  <div className='flex flex-col mb-6'>
    <label htmlFor={id} className='mb-1 text-sm font-medium text-gray-700'>
      {label}
    </label>
    <input
      type={type}
      id={id}
      className={`border ${errorMessage ? 'border-red-500' : 'border-gray-300'} rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-700`}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
    {errorMessage && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
  </div>
);

const SignUp: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setUsernameError('');
    setEmailError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setLoading(true); // Show a loading state while processing the signup
    try {
      const { token } =  await signup(username, email, password);
      console.log("Registration successful. Token generated:", token); // Call signup function
      login(token);
      setSuccess('Signup successful! Redirecting to login...');
      setTimeout(() => navigate('/login'), 2000); // Redirect to login after successful signup
    } catch (err: any) {
      if (err.message.includes("Email is already in use")) {
        setEmailError('Email is already in use. Please login or use a different email.');
      } else if (err.message.includes("Username is already in use")) {
        setUsernameError('Username is already in use. Please choose a different username.');
      } else {
      setError('Signup failed. Please check your details.');
       }

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex h-[100vh]'>
      <div className='w-1/2 bg-white flex justify-center items-center'>
        <div className='flex justify-center items-center bg-white'>
          <div className='flex flex-col bg-white w-[475px] p-6'>
            <div className='flex flex-col mb-6'>
              <h3 className='text-[32px] font-bold'>Get Started Now</h3>
            </div>
            <form className='flex flex-col' onSubmit={handleSubmit}>
              {error && <p className="text-red-500">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              
              {/* Form inputs */}
              <FormInput
                label="Userame"
                type="text"
                id="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                errorMessage={usernameError} 
              />
              <FormInput
                label="Email Address"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                errorMessage={emailError} 
              />
              <FormInput
                label="Password"
                type="password"
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
              <FormInput
                label="Confirm Password"
                type="password"
                id="cpass"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
              />

              <div className='flex items-center my-4'>
                <input
                  type='checkbox'
                  id='agree'
                  className='peer h-4 w-4 text-green-700 border-gray-300 rounded accent-green-700'
                  required
                />
                <label
                  htmlFor='agree'
                  className='ml-2 text-sm text-gray-700 peer-checked:text-green-700 peer-checked:font-medium peer-focus:text-green-700 hover:text-green-700'>
                  I agree to the terms & policy
                </label>
              </div>

              <button
                type='submit'
                className='bg-green-900 text-white rounded-lg py-2 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-700'
                disabled={loading} // Disable the button while loading
              >
                {loading ? 'Signing Up...' : 'Sign Up'}
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
        <img src={cbs} alt="Pokemon Image" className="object-cover" />
      </div>
    </div>
  );
};

export default SignUp;
