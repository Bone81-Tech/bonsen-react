
// src/app/login/page.tsx
'use client';
import LoginForm from '@/components/LoginForm';
import RoleSelector from '@/components/RoleSelector';
import { useUser } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginPage() {
  const { user, setUser } = useUser();
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'employee' | 'admin' | 'big_boss' | null>(null);

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  const handleLogin = (userData: { name: string; role: string }) => {
    setUser(userData);
    localStorage.setItem('appUser', JSON.stringify(userData));
    router.push('/dashboard');
  };

  if (selectedRole) {
    return <LoginForm onLogin={handleLogin} selectedRole={selectedRole} onBack={() => setSelectedRole(null)} />;
  }

  return <RoleSelector onSelectRole={setSelectedRole} />;
}
