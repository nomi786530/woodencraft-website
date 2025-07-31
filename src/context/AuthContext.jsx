/* eslint-disable react-refresh/only-export-components */
// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Auth Context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('woodencraftUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Login function
  const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(
      (u) => u.email === email && u.password === password
    );

    if (existingUser) {
      setUser(existingUser);
      localStorage.setItem('woodencraftUser', JSON.stringify(existingUser));
      return true;
    }

    return false;
  };

  // Register function
  const register = (email, password) => {
    const newUser = { email, password };
    setUser(newUser);
    localStorage.setItem('woodencraftUser', JSON.stringify(newUser));
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('woodencraftUser');
  };

  // On mount, restore user if found
  useEffect(() => {
    const storedUser = localStorage.getItem('woodencraftUser');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
