// src/pages/ThankYou.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center h-[70vh] px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="text-lg mb-6">We appreciate your purchase. Your items will be processed shortly.</p>
      <button
        onClick={handleGoHome}
        className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ThankYou;
