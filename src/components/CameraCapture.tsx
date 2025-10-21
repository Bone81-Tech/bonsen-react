
// src/components/CameraCapture.tsx
'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'lucide-react';

interface CameraCaptureProps {
  onCapture: (imageData: string) => void;
}

const CameraCapture: React.FC<CameraCaptureProps> = ({ onCapture }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  useEffect(() => {
    const getCameraPermission = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
        setHasPermission(true);
      } catch (error) {
        console.error('Camera permission denied:', error);
        setHasPermission(false);
      }
    };

    getCameraPermission();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      if (context) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        const imageData = canvas.toDataURL('image/png');
        setCapturedImage(imageData);
        onCapture(imageData);
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Selfie Attendance</h3>
      
      {!hasPermission ? (
        <div className="text-center py-8">
          <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-600">Camera access required for attendance</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Request Permission
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="w-full h-64 object-cover rounded-lg bg-black"
            />
            <canvas ref={canvasRef} className="hidden" />
          </div>
          
          {!capturedImage ? (
            <button
              onClick={capturePhoto}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <Camera className="h-5 w-5" />
              <span>Capture Selfie</span>
            </button>
          ) : (
            <div className="space-y-4">
              <img
                src={capturedImage}
                alt="Captured selfie"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="flex space-x-3">
                <button
                  onClick={() => setCapturedImage(null)}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Retake
                </button>
                <button
                  onClick={() => onCapture(capturedImage)}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  Confirm
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
