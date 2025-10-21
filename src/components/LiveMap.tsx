
// src/components/LiveMap.tsx
import React from 'react';
import { MapPin } from 'lucide-react';

const mockEmployees = [
  { id: 1, name: 'John Doe', position: 'Developer', status: 'present', location: 'Office HQ', lastSeen: '2 minutes ago' },
  { id: 2, name: 'Jane Smith', position: 'Designer', status: 'absent', location: 'Remote', lastSeen: '1 hour ago' },
  { id: 3, name: 'Mike Johnson', position: 'Manager', status: 'present', location: 'Branch Office', lastSeen: '5 minutes ago' },
];

const LiveMap = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Employee Locations</h3>
      <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-2" />
          <p className="text-gray-600">Real-time location tracking</p>
          <p className="text-sm text-gray-500 mt-2">3 employees currently active</p>
        </div>
      </div>
      
      <div className="mt-4 space-y-3">
        {mockEmployees.map((employee) => (
          <div key={employee.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className={`w-3 h-3 rounded-full ${
                employee.status === 'present' ? 'bg-green-500' : 'bg-red-500'
              }`}></div>
              <div>
                <p className="font-medium text-gray-900">{employee.name}</p>
                <p className="text-sm text-gray-600">{employee.position}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-gray-900">{employee.location}</p>
              <p className="text-xs text-gray-500">{employee.lastSeen}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveMap;
