// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  if (!email || !password || !confirmPass) {
    setError('Please fill in all fields');
    return;
  }

  if (password !== confirmPass) {
    setError('Passwords do not match');
    return;
  }

  // Save user to localStorage
  const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
  const isUserExists = existingUsers.find((user) => user.email === email);
  if (isUserExists) {
    setError('User already exists');
    return;
  }

  const newUser = { email, password };
  localStorage.setItem('users', JSON.stringify([...existingUsers, newUser]));

  navigate('/login');
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#f5f2ef] px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-[#e2d5c3]">
        <h2 className="text-2xl font-bold text-center text-[#5a3e2b] mb-6">Create your Woodencraft account</h2>
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
          <div>
            <label className="block text-sm text-[#5a3e2b] mb-1">Confirm Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-[#d8cbb9] rounded focus:outline-none focus:ring-2 focus:ring-[#8b5e3c]"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#8b5e3c] hover:bg-[#734b2f] text-white font-semibold rounded transition"
          >
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-[#5a3e2b]">
          Already have an account? <a href="/login" className="text-[#8b5e3c] underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
