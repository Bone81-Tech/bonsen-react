
// src/components/ApprovalQueue.tsx
'use client';
import React from 'react';

// Mock data for approval requests
const approvalData = [
  {
    id: 1,
    name: 'Diana',
    type: 'Cuti',
    startDate: '2025-10-20',
    endDate: '2025-10-22',
    reason: 'Keperluan keluarga',
  },
  {
    id: 2,
    name: 'Eko',
    type: 'Lembur',
    startDate: '2025-10-18',
    endDate: '2025-10-18',
    reason: 'Menyelesaikan laporan bulanan',
  },
  {
    id: 3,
    name: 'Fani',
    type: 'Ijin',
    startDate: '2025-10-19',
    endDate: '2025-10-19',
    reason: 'Sakit gigi',
  },
];

export default function ApprovalQueue() {
  const handleApprove = (id: number) => {
    alert(`Request ${id} approved!`);
    // Here you would typically update the request status in your backend
  };

  const handleReject = (id: number) => {
    alert(`Request ${id} rejected!`);
    // Here you would typically update the request status in your backend
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Antrian Persetujuan</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nama</th>
              <th className="py-2 px-4 border-b">Tipe</th>
              <th className="py-2 px-4 border-b">Tanggal</th>
              <th className="py-2 px-4 border-b">Alasan</th>
              <th className="py-2 px-4 border-b">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {approvalData.map((item) => (
              <tr key={item.id}>
                <td className="py-2 px-4 border-b text-center">{item.name}</td>
                <td className="py-2 px-4 border-b text-center">{item.type}</td>
                <td className="py-2 px-4 border-b text-center">{`${item.startDate} - ${item.endDate}`}</td>
                <td className="py-2 px-4 border-b">{item.reason}</td>
                <td className="py-2 px-4 border-b text-center">
                  <div className="flex justify-center space-x-2">
                    <button 
                      onClick={() => handleApprove(item.id)}
                      className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600"
                    >
                      Setuju
                    </button>
                    <button 
                      onClick={() => handleReject(item.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                    >
                      Tolak
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
