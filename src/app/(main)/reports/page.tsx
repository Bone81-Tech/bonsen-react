
// src/app/(main)/reports/page.tsx
import React from 'react';
import AttendanceReports from '@/components/AttendanceReports';

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
      <AttendanceReports />
    </div>
  );
}
