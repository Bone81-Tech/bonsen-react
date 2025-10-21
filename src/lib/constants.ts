// src/lib/constants.ts
export const APP_CONFIG = {
  appName: 'Absensi Realtime',
  version: '1.0.0',
  apiBaseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
  geofenceRadius: 100, // meters
  attendanceTimeout: 8 * 60 * 60 * 1000, // 8 hours in milliseconds
  overtimeRate: 1.5 // 1.5x regular rate
};

export const USER_ROLES = {
  EMPLOYEE: 'employee',
  MANAGER: 'manager',
  ADMIN: 'admin',
  BIG_BOSS: 'big_boss'
};

export const ATTENDANCE_STATUS = {
  PRESENT: 'present',
  ABSENT: 'absent',
  LATE: 'late',
  EARLY_LEAVE: 'early_leave'
};

export const NOTIFICATION_TYPES = {
  ATTENDANCE_REMINDER: 'attendance_reminder',
  LOCATION_ALERT: 'location_alert',
  PAYROLL_UPDATE: 'payroll_update'
};
