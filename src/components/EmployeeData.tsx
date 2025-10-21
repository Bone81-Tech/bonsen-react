
// src/components/EmployeeData.tsx
'use client';
import React from 'react';

// Mock data for employee data
const employeeData = [
  {
    id: 1,
    name: 'Andi',
    email: 'andi@bone.com',
    department: 'Teknologi',
    position: 'Frontend Developer',
  },
  {
    id: 2,
    name: 'Budi',
    email: 'budi@bone.com',
    department: 'Teknologi',
    position: 'Backend Developer',
  },
  {
    id: 3,
    name: 'Cici',
    email: 'cici@bone.com',
    department: 'HR',
    position: 'HR Staff',
  },
  {
    id: 4,
    name: 'Diana',
    email: 'diana@bone.com',
    department: 'Keuangan',
    position: 'Finance Staff',
  },
];

export default function EmployeeData() {
  const handleEdit = (id: number) => {
    alert(`Edit employee ${id}`);
  };

  const handleDelete = (id: number) => {
    alert(`Delete employee ${id}`);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Data Karyawan</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nama</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Departemen</th>
              <th className="py-2 px-4 border-b">Posisi</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2 px-4 border-b">{employee.name}</td>
                <td className="py-2 px-4 border-b">{employee.email}</td>
                <td className="py-2 px-4 border-b">{employee.department}</td>
                <td className="py-2 px-4 border-b">{employee.position}</td>
                <td className="py-2 px-4 border-b">
                  <div className="flex justify-center space-x-2">
                    <button 
                      onClick={() => handleEdit(employee.id)}
                      className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(employee.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Hapus
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
