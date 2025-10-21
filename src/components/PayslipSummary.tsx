
// src/components/PayslipSummary.tsx
import React from 'react';

// Mock data for payslip summary
const payslipData = {
  basicSalary: 5000000,
  allowances: 1000000,
  deductions: 500000,
  overtimePay: 750000,
};

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(amount);
};

export default function PayslipSummary() {
  const { basicSalary, allowances, deductions, overtimePay } = payslipData;
  const totalPay = basicSalary + allowances + overtimePay - deductions;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Ringkasan Gaji (Bulan Ini)</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Gaji Pokok</span>
          <span>{formatCurrency(basicSalary)}</span>
        </div>
        <div className="flex justify-between">
          <span>Tunjangan</span>
          <span>{formatCurrency(allowances)}</span>
        </div>
        <div className="flex justify-between">
          <span>Lembur</span>
          <span>{formatCurrency(overtimePay)}</span>
        </div>
        <div className="flex justify-between text-red-600">
          <span>Potongan</span>
          <span>({formatCurrency(deductions)})</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <span>Total Gaji</span>
          <span>{formatCurrency(totalPay)}</span>
        </div>
      </div>
      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Unduh Slip Gaji
      </button>
    </div>
  );
}
