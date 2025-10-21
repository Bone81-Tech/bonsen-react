
// src/components/LiveTrackingMap.tsx
'use client';
import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

// IMPORTANT: Replace with your actual Google Maps API Key
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_GOOGLE_MAPS_API_KEY';

// Mock employee locations
const employeeLocations = [
  { id: 1, name: 'Andi', lat: -6.2088, lng: 106.8456 }, // Jakarta
  { id: 2, name: 'Budi', lat: -6.9175, lng: 107.6191 }, // Bandung
  { id: 3, name: 'Cici', lat: -7.2575, lng: 112.7521 }, // Surabaya
];

export default function LiveTrackingMap() {
  const position = { lat: -6.2088, lng: 106.8456 }; // Default center (Jakarta)

  return (
    <div className="bg-white p-6 rounded-lg shadow-md h-[600px]"> {/* Fixed height for map container */}
      <h2 className="text-xl font-bold mb-4">Live Tracking Karyawan</h2>
      {GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY' ? (
        <div className="text-red-500">
          Peringatan: Harap ganti 'YOUR_GOOGLE_MAPS_API_KEY' dengan kunci API Google Maps Anda yang sebenarnya di file .env.
        </div>
      ) : (
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
          <Map
            defaultCenter={position}
            defaultZoom={10}
            mapId={"YOUR_MAP_ID"} // Replace with your actual Map ID
            style={{ width: '100%', height: '100%' }}
          >
            {employeeLocations.map(employee => (
              <Marker key={employee.id} position={{ lat: employee.lat, lng: employee.lng }} title={employee.name} />
            ))}
          </Map>
        </APIProvider>
      )}
    </div>
  );
}
