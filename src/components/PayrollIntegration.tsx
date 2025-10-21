// src/components/PayrollIntegration.tsx
'use client';
import React from 'react';

// Mock data for payroll summary
const payrollData = [
  { id: 1, name: 'Andi', totalHours: 160, overtimeHours: 10, deductions: 50000 },
  { id: 2, name: 'Budi', totalHours: 168, overtimeHours: 8, deductions: 25000 },
  { id: 3, name: 'Cici', totalHours: 160, overtimeHours: 0, deductions: 0 },
  { id: 4, name: 'Diana', totalHours: 170, overtimeHours: 12, deductions: 75000 },
];

export default function PayrollIntegration() {
  const handleExport = () => {
    const csvHeader = 'Employee ID,Name,Total Hours,Overtime Hours,Deductions\n';
    const csvRows = payrollData.map(d => `${d.id},${d.name},${d.totalHours},${d.overtimeHours},${d.deductions}`).join('\n');
    const csvContent = csvHeader + csvRows;

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'payroll_export.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Integrasi Payroll</h2>
        <button 
          onClick={handleExport}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          Export ke CSV
        </button>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Ekspor data absensi bulan ini untuk perhitungan gaji.
      </p>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Nama</th>
              <th className="py-2 px-4 border-b">Total Jam</th>
              <th className="py-2 px-4 border-b">Jam Lembur</th>
              <th className="py-2 px-4 border-b">Potongan</th>
            </tr>
          </thead>
          <tbody>
            {payrollData.map((employee) => (
              <tr key={employee.id}>
                <td className="py-2 px-4 border-b">{employee.name}</td>
                <td className="py-2 px-4 border-b text-center">{employee.totalHours}</td>
                <td className="py-2 px-4 border-b text-center">{employee.overtimeHours}</td>
                <td className="py-2 px-4 border-b text-center">{employee.deductions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}