
// src/components/OvertimeSummary.tsx
import React from 'react';

// Mock data for overtime requests
const overtimeData = [
  { date: '2025-10-05', duration: 2, status: 'Approved' },
  { date: '2025-10-10', duration: 3, status: 'Pending' },
  { date: '2025-10-12', duration: 1, status: 'Rejected' },
  { date: '2025-09-28', duration: 4, status: 'Approved' },
];

export default function OvertimeSummary() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const filteredData = overtimeData.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
  });

  const totalOvertimeHours = filteredData
    .filter(item => item.status === 'Approved')
    .reduce((total, item) => total + item.duration, 0);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Lembur (Bulan Ini)</h2>
      <div className="mb-4">
        <p className="text-lg">Total Jam Lembur (Disetujui): <span className="font-bold">{totalOvertimeHours} jam</span></p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Riwayat Pengajuan Lembur</h3>
        <ul>
          {filteredData.map((item, index) => (
            <li key={index} className="flex justify-between items-center py-2 border-b">
              <span>{item.date} - {item.duration} jam</span>
              <span className={`px-2 py-1 text-xs font-semibold rounded-full 
                ${item.status === 'Approved' ? 'bg-green-200 text-green-800' : ''}
                ${item.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : ''}
                ${item.status === 'Rejected' ? 'bg-red-200 text-red-800' : ''}
              `}>
                {item.status}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
