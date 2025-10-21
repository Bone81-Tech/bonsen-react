
// src/components/Providers.tsx
'use client';
import React from 'react';
import { UserProvider } from '@/context/UserContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UserProvider>
      {children}
    </UserProvider>
  );
}
