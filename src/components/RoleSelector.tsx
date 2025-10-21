
// src/components/RoleSelector.tsx
'use client';
import React from 'react';
import { User, Shield, Crown } from 'lucide-react';

interface RoleSelectorProps {
  onSelectRole: (role: 'employee' | 'admin' | 'big_boss') => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ onSelectRole }) => {
  const roles = [
    { id: 'employee', name: 'Karyawan', icon: User, description: 'Login sebagai karyawan biasa.' },
    { id: 'admin', name: 'Admin', icon: Shield, description: 'Login sebagai administrator sistem.' },
    { id: 'big_boss', name: 'Big Boss', icon: Crown, description: 'Login sebagai pimpinan dengan hak khusus.' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Pilih Peran Anda</h2>
          <p className="mt-2 text-sm text-gray-600">Lanjutkan untuk masuk ke aplikasi</p>
        </div>

        <div className="mt-8 space-y-4">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => onSelectRole(role.id as 'employee' | 'admin' | 'big_boss')}
              className="group relative w-full flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-sm"
            >
              <role.icon className="h-6 w-6 text-blue-600 mr-3" />
              <span>{role.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleSelector;
