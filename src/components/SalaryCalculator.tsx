
// src/components/SalaryCalculator.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

interface SalaryCalculatorProps {
  clockInTime: Date | null;
  clockOutTime: Date | null;
}

const SalaryCalculator: React.FC<SalaryCalculatorProps> = ({ clockInTime, clockOutTime }) => {
  const [hoursWorked, setHoursWorked] = useState(0);
  const [overtimeHours, setOvertimeHours] = useState(0);
  const [dailySalary, setDailySalary] = useState(0);

  useEffect(() => {
    if (clockInTime && clockOutTime) {
      const inTime = new Date(clockInTime);
      const outTime = new Date(clockOutTime);
      const diffMs = outTime.getTime() - inTime.getTime();
      const diffHours = diffMs / (1000 * 60 * 60);
      
      const regularHours = Math.min(diffHours, 8);
      const overtime = Math.max(0, diffHours - 8);
      
      setHoursWorked(diffHours);
      setOvertimeHours(overtime);
      setDailySalary((regularHours * 25) + (overtime * 37.5)); // Example rates
    }
  }, [clockInTime, clockOutTime]);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Salary Calculator</h3>
      
      {clockInTime && clockOutTime ? (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-sm text-blue-600 font-medium">Hours Worked</p>
              <p className="text-2xl font-bold text-blue-900">{hoursWorked.toFixed(1)}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-sm text-purple-600 font-medium">Overtime</p>
              <p className="text-2xl font-bold text-purple-900">{overtimeHours.toFixed(1)}</p>
            </div>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-sm text-green-600 font-medium">Daily Salary</p>
            <p className="text-3xl font-bold text-green-900">${dailySalary.toFixed(2)}</p>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-500">
          <Clock className="h-12 w-12 mx-auto mb-4" />
          <p>Clock in and out to calculate your salary</p>
        </div>
      )}
    </div>
  );
};

export default SalaryCalculator;
