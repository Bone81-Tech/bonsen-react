
// src/components/AttendanceClock.tsx
'use client';
import React, { useState, useEffect } from 'react';

interface AttendanceClockProps {
  onClockIn: () => void;
  onClockOut: () => void;
  isClockedIn: boolean;
  clockInTime: Date | null;
}

const formatTime = (date: Date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

const getCurrentTime = () => {
  return new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });
};

const getCurrentDate = () => {
  return new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const AttendanceClock: React.FC<AttendanceClockProps> = ({ onClockIn, onClockOut, isClockedIn, clockInTime }) => {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-900 mb-2">{currentTime}</div>
        <div className="text-gray-600 mb-6">{getCurrentDate()}</div>
        
        {isClockedIn && clockInTime ? (
          <div className="space-y-4">
            <div className="bg-green-100 text-green-800 px-4 py-2 rounded-lg inline-block">
              <span className="font-medium">Clocked In</span> at {formatTime(clockInTime)}
            </div>
            <button
              onClick={onClockOut}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Clock Out
            </button>
          </div>
        ) : (
          <button
            onClick={onClockIn}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            Clock In
          </button>
        )}
      </div>
    </div>
  );
};

export default AttendanceClock;
