import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../redux/actions/authAction';
import { setPermissions } from '../redux/actions/roleAction';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ email: '', password: '', global: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = { email: '', password: '', global: '' };

    if (!email) {
      newErrors.email = 'Please enter your email.';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Please enter your password.';
    }

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) return;

    try {
      
      const response = await axios.post('http://localhost:3001/api/login', {
        email,
        password,
      });

      const { token, permissions,user } = response.data;
      // console.log(response.data.role ,res.data.permissions)
      // console.log(role)
      localStorage.setItem('token', token);
      localStorage.setItem('permissions', JSON.stringify(permissions));

      dispatch(loginSuccess(user, token));
      dispatch(setPermissions(permissions));

      navigate('/home');
    } catch (err) {
      setErrors((prev) => ({
        ...prev,
        global: err.response?.data?.message || 'Login failed. Please try again.',
      }));
    }
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Section (Illustration) */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-indigo-900 to-purple-600 items-center justify-center">
        {/* You can add an illustration here */}
      </div>

      {/* Right Section (Login Form) */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center">
        <form onSubmit={handleLogin} className="w-96 max-w-full mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-700 mb-8 text-center">
            Super Admin Sign In
          </h2>

          {/* Global Error */}
          {errors.global && (
            <div className="text-red-600 mb-4 text-center" aria-live="assertive">
              {errors.global}
            </div>
          )}

          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-600 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <div className="text-red-500 text-sm mt-1" aria-live="assertive">
                {errors.email}
              </div>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium mb-2"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 bg-gray-100 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && (
              <div className="text-red-500 text-sm mt-1" aria-live="assertive">
                {errors.password}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          >
            Sign In
          </button>

          {/* Terms and Privacy */}
          <p className="mt-6 text-xs text-gray-500 text-center">
            By continuing, you agree to the{' '}
            <a href="#" className="text-indigo-500 hover:underline">
              Terms of Use
            </a>{' '}
            and{' '}
            <a href="#" className="text-indigo-500 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
