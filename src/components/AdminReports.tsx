
// src/components/AdminReports.tsx
'use client';
import React, { useState } from 'react';

// Mock data for attendance summary report
const attendanceSummaryData = [
  { id: 1, name: 'Andi', present: 20, absent: 1, leave: 1 },
  { id: 2, name: 'Budi', present: 22, absent: 0, leave: 0 },
  { id: 3, name: 'Cici', present: 19, absent: 0, leave: 3 },
  { id: 4, name: 'Diana', present: 21, absent: 1, leave: 0 },
];

const tabs = ['Rekap Absensi', 'Keterlambatan', 'Lembur', 'Biaya Lembur'];

export default function AdminReports() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const renderContent = () => {
    switch (activeTab) {
      case 'Rekap Absensi':
        return (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Nama</th>
                  <th className="py-2 px-4 border-b">Hadir</th>
                  <th className="py-2 px-4 border-b">Absen</th>
                  <th className="py-2 px-4 border-b">Cuti</th>
                </tr>
              </thead>
              <tbody>
                {attendanceSummaryData.map((employee) => (
                  <tr key={employee.id}>
                    <td className="py-2 px-4 border-b">{employee.name}</td>
                    <td className="py-2 px-4 border-b text-center">{employee.present}</td>
                    <td className="py-2 px-4 border-b text-center">{employee.absent}</td>
                    <td className="py-2 px-4 border-b text-center">{employee.leave}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'Keterlambatan':
        return <p>Laporan keterlambatan akan ditampilkan di sini.</p>;
      case 'Lembur':
        return <p>Laporan lembur akan ditampilkan di sini.</p>;
      case 'Biaya Lembur':
        return <p>Laporan biaya lembur akan ditampilkan di sini.</p>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Laporan</h2>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-6">{renderContent()}</div>
    </div>
  );
}
