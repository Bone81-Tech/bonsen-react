
// src/app/(main)/attendance/page.tsx
'use client';
import React, { useState } from 'react';
import AttendanceClock from '@/components/AttendanceClock';
import CameraCapture from '@/components/CameraCapture';
import SalaryCalculator from '@/components/SalaryCalculator';

export default function AttendancePage() {
  const [clockInTime, setClockInTime] = useState<Date | null>(null);
  const [clockOutTime, setClockOutTime] = useState<Date | null>(null);
  const [isClockedIn, setIsClockedIn] = useState(false);

  const handleClockIn = () => {
    const now = new Date();
    setClockInTime(now);
    setIsClockedIn(true);
    setClockOutTime(null); // Reset clock out time
  };

  const handleClockOut = () => {
    const now = new Date();
    setClockOutTime(now);
    setIsClockedIn(false);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AttendanceClock 
          onClockIn={handleClockIn}
          onClockOut={handleClockOut}
          isClockedIn={isClockedIn}
          clockInTime={clockInTime}
        />
        <div className="space-y-6">
          <CameraCapture onCapture={(image) => console.log('Attendance selfie captured')} />
          <SalaryCalculator clockInTime={clockInTime} clockOutTime={clockOutTime} />
        </div>
      </div>
    </div>
  );
}
