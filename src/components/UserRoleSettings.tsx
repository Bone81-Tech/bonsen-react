
// src/components/UserRoleSettings.tsx
'use client';
import React, { useState } from 'react';

// Mock data for user roles
const userData = [
  { id: 1, name: 'Andi', email: 'andi@bone.com', role: 'employee' },
  { id: 2, name: 'Budi', email: 'budi@bone.com', role: 'employee' },
  { id: 3, name: 'Cici', email: 'cici@bone.com', role: 'admin' },
  { id: 4, name: 'Diana', email: 'diana@bone.com', role: 'big_boss' },
];

const roles = ['employee', 'admin', 'big_boss'];

export default function UserRoleSettings() {
  const [users, setUsers] = useState(userData);

  const handleRoleChange = (id: number, newRole: string) => {
    setUsers(users.map(user => user.id === id ? { ...user, role: newRole } : user));
  };

  const handleSave = (id: number) => {
    const user = users.find(u => u.id === id);
    alert(`Saved role for ${user?.name} as ${user?.role}`);
    // Here you would typically send the updated role to your backend
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Pengaturan User & Role</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nama</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Role</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                  <select 
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </td>
                <td className="py-2 px-4 border-b text-center">
                  <button 
                    onClick={() => handleSave(user.id)}
                    className="bg-blue-600 text-white px-3 py-1 rounded-md hover:bg-blue-700"
                  >
                    Simpan
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
