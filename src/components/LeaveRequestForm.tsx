
// src/components/LeaveRequestForm.tsx
'use client';
import React, { useState } from 'react';

export default function LeaveRequestForm() {
  const [requestType, setRequestType] = useState('Cuti');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      requestType,
      startDate,
      endDate,
      notes,
    });
    // Here you would typically send the data to your backend
    alert('Pengajuan telah dikirim!');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Pengajuan Cuti/Ijin</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Tipe</label>
          <div className="flex items-center space-x-4 mt-1">
            <label className="flex items-center">
              <input
                type="radio"
                name="requestType"
                value="Cuti"
                checked={requestType === 'Cuti'}
                onChange={() => setRequestType('Cuti')}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Cuti</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="requestType"
                value="Ijin"
                checked={requestType === 'Ijin'}
                onChange={() => setRequestType('Ijin')}
                className="form-radio h-4 w-4 text-blue-600"
              />
              <span className="ml-2">Ijin</span>
            </label>
          </div>
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">Tanggal Mulai</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">Tanggal Selesai</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          />
        </div>
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700">Keterangan</label>
          <textarea
            id="notes"
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Ajukan
        </button>
      </form>
    </div>
  );
}
