// src/pages/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

 const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError('Please fill in all fields');
    return;
  }

  const isLoginSuccess = login(email, password);

  if (isLoginSuccess) {
    navigate('/');
  } else {
    const storedUser = JSON.parse(localStorage.getItem('woodencraftUser'));
    if (!storedUser) {
      setError('No user found. Please register first.');
    } else {
      setError('Invalid email or password');
    }
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f2ef] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-[#e2d5c3]">
        <h2 className="text-2xl font-bold text-center text-[#5a3e2b] mb-6">Login to Woodencraft</h2>
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-[#5a3e2b] mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-[#d8cbb9] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm text-[#5a3e2b] mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-[#d8cbb9] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#8b5e3c] hover:bg-[#734b2f] text-white font-semibold rounded transition"
          >
            Login
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-[#5a3e2b]">
          Don't have an account? <a href="/register" className="text-[#8b5e3c] underline">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
