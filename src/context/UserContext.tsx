
// src/context/UserContext.tsx
'use client';
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  name: string;
  role: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  // In a real app, you would check for an auth token in localStorage here
  useEffect(() => {
    // Simulate fetching user from a token or session
    const storedUser = localStorage.getItem('appUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // For now, we'll set a mock user if none is found, 
      // but in a real app, this would redirect to login
      // const mockUser = { name: 'Guest', role: 'employee' };
      // setUser(mockUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
