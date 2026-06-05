'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface User {
  email: string;
  hashedEmail: string;
}

interface AuthContextType {
  isLoggedIn: boolean;
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple hash function for POC (not for production!)
const simpleHash = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(36);
};

// Cookie utilities
const setCookie = (name: string, value: string, days = 7) => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

const getCookie = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize auth state from cookies on mount
  useEffect(() => {
    const storedEmail = getCookie('userEmail');
    const storedHash = getCookie('userHash');

    if (storedEmail && storedHash) {
      // Verify the hash matches (basic security for POC)
      if (storedHash === simpleHash(storedEmail)) {
        setUser({ email: storedEmail, hashedEmail: storedHash });
        setIsLoggedIn(true);
      } else {
        // Hash doesn't match, clear cookies
        logout();
      }
    }
    setIsInitialized(true);
  }, []);

  const login = (email: string) => {
    const hashedEmail = simpleHash(email);
    const userData = { email, hashedEmail };

    // Set cookies (no need for isLoggedIn flag)
    setCookie('userEmail', email);
    setCookie('userHash', hashedEmail);

    // Update state
    setUser(userData);
    setIsLoggedIn(true);
  };

  const logout = () => {
    // Clear cookies
    deleteCookie('userEmail');
    deleteCookie('userHash');

    // Clear state
    setUser(null);
    setIsLoggedIn(false);
  };

  const value = {
    isLoggedIn,
    user,
    login,
    logout,
  };

  // Don't render until initialized to prevent hydration issues
  if (!isInitialized) {
    return null;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};