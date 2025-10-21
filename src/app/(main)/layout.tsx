
// src/app/(main)/layout.tsx
'use client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { useUser } from '@/context/UserContext';

export default function MainLayout({
  children,
}: { 
  children: React.ReactNode 
}) {
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If user is null (not logged in), redirect to login page
    if (!user) {
      router.push('/');
    }
  }, [user, router]);

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('appUser'); // Clear stored user
    router.push('/');
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        user={user} 
        onLogout={handleLogout} 
      />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
