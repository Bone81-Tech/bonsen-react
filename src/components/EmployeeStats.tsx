
// src/components/EmployeeStats.tsx
import React from 'react';

const EmployeeStats = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Employee Statistics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-600 font-medium">Total Employees</p>
          <p className="text-2xl font-bold text-blue-900">42</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <p className="text-sm text-green-600 font-medium">Present Today</p>
          <p className="text-2xl font-bold text-green-900">28</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <p className="text-sm text-purple-600 font-medium">Attendance Rate</p>
          <p className="text-2xl font-bold text-purple-900">94%</p>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">John Doe</span>
          <div className="w-24 bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '95%' }}></div>
          </div>
          <span className="text-sm font-medium text-gray-900">95%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Jane Smith</span>
          <div className="w-24 bg-gray-200 rounded-full h-2">
            <div className="bg-green-600 h-2 rounded-full" style={{ width: '88%' }}></div>
          </div>
          <span className="text-sm font-medium text-gray-900">88%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Mike Johnson</span>
          <div className="w-24 bg-gray-200 rounded-full h-2">
            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <span className="text-sm font-medium text-gray-900">75%</span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeStats;
