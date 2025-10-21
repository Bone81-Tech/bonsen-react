
// src/components/AttendanceReports.tsx
import React from 'react';

const mockAttendanceData = [
  { date: '2024-01-15', status: 'Present', hours: 8, overtime: 1 },
  { date: '2024-01-16', status: 'Present', hours: 7.5, overtime: 0 },
  { date: '2024-01-17', status: 'Late', hours: 7, overtime: 0.5 },
  { date: '2024-01-18', status: 'Present', hours: 8, overtime: 2 },
  { date: '2024-01-19', status: 'Absent', hours: 0, overtime: 0 },
];

const AttendanceReports = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Attendance Reports</h3>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
          Export CSV
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hours</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Overtime</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {mockAttendanceData.map((record, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{record.date}</td>
                <td className="px-4 py-3 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    record.status === 'Present' ? 'bg-green-100 text-green-800' :
                    record.status === 'Late' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {record.status}
                  </span>
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{record.hours}h</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{record.overtime}h</td>
                <td className="px-4 py-3 whitespace-nowrap text-sm text-blue-600">
                  <button className="hover:text-blue-800">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceReports;
