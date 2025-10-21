// src/utils/helpers.ts
interface AttendanceRecord {
  clockIn: string;
  clockOut: string;
  [key: string]: any;
}

export const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const formatTime = (dateString: string): string => {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

export const calculateHours = (start: string, end: string): number => {
  const startTime = new Date(start).getTime();
  const endTime = new Date(end).getTime();
  const diffMs = endTime - startTime;
  return diffMs / (1000 * 60 * 60);
};

export const generateAttendanceReport = (attendanceRecords: AttendanceRecord[]) => {
  return attendanceRecords.map(record => ({
    ...record,
    hoursWorked: calculateHours(record.clockIn, record.clockOut),
    overtime: Math.max(0, calculateHours(record.clockIn, record.clockOut) - 8)
  }));
};

export const validateLocation = (currentLocation: {lat: number, lng: number}, expectedLocation: {lat: number, lng: number}, radius: number = 100): boolean => {
  // Simplified distance calculation (in real app, use haversine formula)
  const distance = Math.sqrt(
    Math.pow(currentLocation.lat - expectedLocation.lat, 2) +
    Math.pow(currentLocation.lng - expectedLocation.lng, 2)
  ) * 111000; // Approximate meters per degree
  
  return distance <= radius;
};
