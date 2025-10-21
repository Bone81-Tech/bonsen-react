
// src/components/LocationStatus.tsx
import React from 'react';
import { MapPin } from 'lucide-react';

interface LocationStatusProps {
  location: string;
  accuracy: number;
}

const LocationStatus: React.FC<LocationStatusProps> = ({ location, accuracy }) => {
  return (
    <div className="flex items-center space-x-2 bg-green-50 text-green-700 px-3 py-2 rounded-lg">
      <MapPin className="h-4 w-4" />
      <span className="text-sm font-medium">{location}</span>
      <span className="text-xs opacity-75">±{accuracy}m</span>
    </div>
  );
};

export default LocationStatus;
