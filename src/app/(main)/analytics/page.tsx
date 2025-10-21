
// src/app/(main)/analytics/page.tsx
import React from 'react';
import EmployeeStats from '@/components/EmployeeStats';

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
      <EmployeeStats />
    </div>
  );
}
