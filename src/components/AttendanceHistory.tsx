
// src/components/AttendanceHistory.tsx
import React from 'react';

// Mock data for attendance history
const attendanceData = [
  { date: '2025-10-01', status: 'Hadir', clockIn: '08:00', clockOut: '17:00', notes: '-' },
  { date: '2025-10-02', status: 'Terlambat', clockIn: '08:30', clockOut: '17:00', notes: 'Rapat pagi' },
  { date: '2025-10-03', status: 'Cuti', clockIn: '-', clockOut: '-', notes: 'Cuti tahunan' },
  { date: '2025-09-29', status: 'Hadir', clockIn: '08:00', clockOut: '17:00', notes: '-' },
  { date: '2025-09-30', status: 'Sakit', clockIn: '-', clockOut: '-', notes: 'Surat dokter terlampir' },
];

export default function AttendanceHistory() {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const filteredData = attendanceData.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate.getMonth() === currentMonth && itemDate.getFullYear() === currentYear;
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Riwayat Absensi (Bulan Ini)</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Tanggal</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Jam Masuk</th>
              <th className="py-2 px-4 border-b">Jam Pulang</th>
              <th className="py-2 px-4 border-b">Keterangan</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b text-center">{item.date}</td>
                <td className="py-2 px-4 border-b text-center">{item.status}</td>
                <td className="py-2 px-4 border-b text-center">{item.clockIn}</td>
                <td className="py-2 px-4 border-b text-center">{item.clockOut}</td>
                <td className="py-2 px-4 border-b text-center">{item.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-sm text-gray-500 mt-4">
        * Hanya riwayat absensi untuk bulan ini yang ditampilkan.
      </p>
    </div>
  );
}
