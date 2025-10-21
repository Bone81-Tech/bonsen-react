
// src/components/RealtimeAttendance.tsx
'use client';
import React from 'react';
import Image from 'next/image';

// Mock data for real-time attendance
const realtimeData = [
  {
    id: 1,
    name: 'Andi',
    clockIn: '07:55',
    location: 'Kantor Pusat',
    selfieUrl: '/placeholder-selfie.png', // Placeholder image
  },
  {
    id: 2,
    name: 'Budi',
    clockIn: '08:05',
    location: 'Cabang A',
    selfieUrl: '/placeholder-selfie.png',
  },
  {
    id: 3,
    name: 'Cici',
    clockIn: '07:50',
    location: 'Remote (Rumah)',
    selfieUrl: '/placeholder-selfie.png',
  },
];

export default function RealtimeAttendance() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Monitoring Absensi Real-time</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nama</th>
              <th className="py-2 px-4 border-b">Jam Masuk</th>
              <th className="py-2 px-4 border-b">Lokasi</th>
              <th className="py-2 px-4 border-b">Validasi Selfie</th>
            </tr>
          </thead>
          <tbody>
            {realtimeData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b text-center">{item.name}</td>
                <td className="py-2 px-4 border-b text-center">{item.clockIn}</td>
                <td className="py-2 px-4 border-b text-center">{item.location}</td>
                <td className="py-2 px-4 border-b text-center">
                  <Image
                    src={item.selfieUrl}
                    alt={`Selfie of ${item.name}`}
                    width={40}
                    height={40}
                    className="rounded-full mx-auto"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
