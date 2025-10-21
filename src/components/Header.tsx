
// src/components/Header.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Clock, User, LogOut, Home, BarChart3, FileText, Settings } from 'lucide-react';

interface User {
  name?: string;
  [key: string]: any;
}

interface HeaderProps {
  user: User | null;
  onLogout: () => void;
}

const pages = [
  { name: 'Dashboard', icon: Home, path: '/dashboard' },
  { name: 'Attendance', icon: Clock, path: '/attendance' },
  { name: 'Reports', icon: FileText, path: '/reports' },
  { name: 'Analytics', icon: BarChart3, path: '/analytics' },
];

const Header: React.FC<HeaderProps> = ({ user, onLogout }) => {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Absensi Realtime</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              {pages.map((page) => (
                <Link
                  key={page.path}
                  href={page.path}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === page.path
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <page.icon className="h-4 w-4" />
                  <span>{page.name}</span>
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-medium text-gray-700">{user?.name || 'User'}</span>
            </div>
            <button
              onClick={onLogout}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
