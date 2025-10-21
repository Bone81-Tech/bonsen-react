
// src/app/(main)/dashboard/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import LocationStatus from '@/components/LocationStatus';
import LiveMap from '@/components/LiveMap';
import EmployeeStats from '@/components/EmployeeStats';
import AttendanceClock from '@/components/AttendanceClock';
import CameraCapture from '@/components/CameraCapture';
import { useUser } from '@/context/UserContext';
import AttendanceHistory from '@/components/AttendanceHistory';
import OvertimeSummary from '@/components/OvertimeSummary';
import PayslipSummary from '@/components/PayslipSummary';
import LeaveRequestForm from '@/components/LeaveRequestForm';
import RealtimeAttendance from '@/components/RealtimeAttendance';
import ApprovalQueue from '@/components/ApprovalQueue';
import ShiftManagement from '@/components/ShiftManagement';
import EmployeeData from '@/components/EmployeeData';
import PayrollIntegration from '@/components/PayrollIntegration';
import AdminReports from '@/components/AdminReports';
import UserRoleSettings from '@/components/UserRoleSettings';

export default function DashboardPage() {
  const { user } = useUser();
  const searchParams = useSearchParams();
  const [location, setLocation] = useState('Office HQ');
  const [accuracy, setAccuracy] = useState(15);

  const adminTabs = [
    { name: 'Monitoring Absensi Real-time', component: <RealtimeAttendance key="realtime" /> },
    { name: 'Antrian Persetujuan', component: <ApprovalQueue key="approval" /> },
    { name: 'Manajemen Shift', component: <ShiftManagement key="shift" /> },
    { name: 'Data Karyawan', component: <EmployeeData key="employee" /> },
    { name: 'Laporan Admin', component: <AdminReports key="reports" /> },
    { name: 'Integrasi Payroll', component: <PayrollIntegration key="payroll" /> },
    { name: 'Pengaturan User & Role', component: <UserRoleSettings key="userrole" /> },
  ];

  const getInitialTab = () => {
    const tabParam = searchParams.get('tab');
    const defaultTab = 'Monitoring Absensi Real-time';
    if (tabParam && adminTabs.some(tab => tab.name === tabParam)) {
      return tabParam;
    }
    return defaultTab;
  };

  const [activeAdminTab, setActiveAdminTab] = useState(getInitialTab);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam && adminTabs.some(tab => tab.name === tabParam)) {
      setActiveAdminTab(tabParam);
    } else {
      setActiveAdminTab('Monitoring Absensi Real-time');
    }
  }, [searchParams]);

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
        <div className="space-y-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {adminTabs.map((tab) => (
                <button
                  key={tab.name}
                  onClick={() => setActiveAdminTab(tab.name)}
                  className={`${
                    activeAdminTab === tab.name
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
          </div>
          <div className="mt-6">
            {adminTabs.map((tab) => (
              activeAdminTab === tab.name && (
                <div key={tab.name} className="space-y-6">
                  {tab.component}
                </div>
              )
            ))}
          </div>
          {/* <LiveMap /> */}
          {/* <EmployeeStats /> */}
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AttendanceClock 
            onClockIn={() => console.log('Clock in')}
            onClockOut={() => console.log('Clock out')}
            isClockedIn={false}
            clockInTime={null}
          />
          <CameraCapture onCapture={(image) => console.log('Captured:', image)} />
          <AttendanceHistory />
          <OvertimeSummary />
          <PayslipSummary />
          <LeaveRequestForm />
        </div>
      )}
    </div>
  );
}
