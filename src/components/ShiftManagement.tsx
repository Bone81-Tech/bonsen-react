
// src/components/ShiftManagement.tsx
'use client';
import React from 'react';

// Mock data for shift schedule
const shiftData = [
  {
    employee: 'Andi',
    shifts: ['08:00 - 17:00', '08:00 - 17:00', '08:00 - 17:00', '08:00 - 17:00', '08:00 - 17:00', 'Off', 'Off'],
  },
  {
    employee: 'Budi',
    shifts: ['Off', '09:00 - 18:00', '09:00 - 18:00', '09:00 - 18:00', '09:00 - 18:00', '09:00 - 18:00', 'Off'],
  },
  {
    employee: 'Cici',
    shifts: ['13:00 - 22:00', '13:00 - 22:00', 'Off', 'Off', '13:00 - 22:00', '13:00 - 22:00', '13:00 - 22:00'],
  },
];

const daysOfWeek = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

export default function ShiftManagement() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Manajemen Shift</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Edit Jadwal
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Karyawan</th>
              {daysOfWeek.map(day => (
                <th key={day} className="py-2 px-4 border-b">{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shiftData.map((row) => (
              <tr key={row.employee}>
                <td className="py-2 px-4 border-b font-semibold">{row.employee}</td>
                {row.shifts.map((shift, index) => (
                  <td key={index} className="py-2 px-4 border-b text-center">{shift}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
