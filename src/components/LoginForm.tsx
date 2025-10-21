
// src/components/LoginForm.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { Clock, ArrowLeft } from 'lucide-react';

interface LoginFormProps {
  onLogin: (user: { name: string; role: string }) => void;
  selectedRole: 'employee' | 'admin' | 'big_boss';
  onBack: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, selectedRole, onBack }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Pre-fill email based on selected role for convenience
    switch (selectedRole) {
      case 'employee':
        setEmail('employee@bone.com');
        break;
      case 'admin':
        setEmail('developer@bone.com');
        break;
      case 'big_boss':
        setEmail('bigboss@bone.com');
        break;
      default:
        setEmail('');
    }
    setPassword(''); // Clear password on role change
    setError(null); // Clear error on role change
  }, [selectedRole]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    setTimeout(() => {
      let userRole: string = selectedRole;
      let userName: string = '';
      let isAuthenticated = false;

      if (email === 'employee@bone.com' && password === 'employee777') {
        userName = 'Karyawan';
        userRole = 'employee';
        isAuthenticated = true;
      } else if (email === 'developer@bone.com' && password === 'developer777') {
        userName = 'Developer777';
        userRole = 'admin';
        isAuthenticated = true;
      } else if (email === 'bigboss@bone.com' && password === 'bigboss777') {
        userName = 'Big Boss';
        userRole = 'big_boss';
        isAuthenticated = true;
      }

      if (isAuthenticated) {
        onLogin({ name: userName, role: userRole });
      } else {
        setError('Kredensial tidak valid.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <button onClick={onBack} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <ArrowLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div className="flex-grow text-center">
            <Clock className="mx-auto h-12 w-12 text-blue-600 mb-2" />
            <h1 className="text-xl md:text-4xl font-extrabold text-blue-600">BONE-SEN-REACT</h1>
          </div>
          <div className="w-10"></div> {/* Spacer */}
        </div>

        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Masuk sebagai {selectedRole === 'employee' ? 'Karyawan' : selectedRole === 'admin' ? 'Admin' : 'Big Boss'}</h2>
          <p className="mt-2 text-sm text-gray-600">Gunakan kredensial Anda untuk melanjutkan</p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Alamat Email</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Alamat Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Kata Sandi</label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Kata Sandi"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Ingat saya
              </label>
            </div>

            <div className="text-sm">
              <button type="button" className="font-medium text-blue-600 hover:text-blue-500">
                Lupa kata sandi?
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
            >
              {isLoading ? 'Masuk...' : 'Masuk'}
            </button>
          </div>
          {error && <p className="mt-2 text-sm text-red-600 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
