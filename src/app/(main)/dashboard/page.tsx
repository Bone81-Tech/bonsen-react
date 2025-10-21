
// src/app/(main)/dashboard/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import LocationStatus from '@/components/LocationStatus';
import LiveMap from '@/components/LiveMap';
import EmployeeStats from '@/components/EmployeeStats';
import AttendanceClock from '@/components/AttendanceClock';
import CameraCapture from '@/components/CameraCapture';
import { useUser } from '@/context/UserContext';

export default function DashboardPage() {
  const { user } = useUser();
  const [location, setLocation] = useState('Office HQ');
  const [accuracy, setAccuracy] = useState(15);

  useEffect(() => {
    // Simulate location updates
    const locationInterval = setInterval(() => {
      const locations = ['Office HQ', 'Branch Office', 'Remote', 'Field Work'];
      setLocation(locations[Math.floor(Math.random() * locations.length)]);
      setAccuracy(Math.floor(Math.random() * 50) + 10);
    }, 30000);

    return () => clearInterval(locationInterval);
  }, []);

  if (!user) {
    return null; // Or a loading spinner
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <LocationStatus location={location} accuracy={accuracy} />
      </div>
      
      {user.role === 'admin' || user.role === 'big_boss' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <LiveMap />
          <EmployeeStats />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AttendanceClock 
            onClockIn={() => console.log('Clock in')}
            onClockOut={() => console.log('Clock out')}
            isClockedIn={false}
            clockInTime={null}
          />
          <CameraCapture onCapture={(image) => console.log('Captured:', image)} />
        </div>
      )}
    </div>
  );
}
