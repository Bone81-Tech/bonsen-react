// src/components/LandingPage.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import { Clock, CheckCircle, Code, Shield, Smartphone, BarChart, Users, MapPin } from 'lucide-react';

const keyFeatures = [
  {
    title: "Absensi Real-time & Akurat",
    description: "Clock-In/Out dengan selfie dan pelacakan lokasi GPS (geofencing) untuk verifikasi akurat.",
    icon: Clock,
  },
  {
    title: "Dashboard Interaktif",
    description: "Tampilan khusus untuk Karyawan, Admin, dan Big Boss dengan informasi relevan.",
    icon: BarChart,
  },
  {
    title: "Manajemen Peran Fleksibel",
    description: "Mendukung peran Karyawan, Admin, dan Big Boss dengan hak akses yang berbeda.",
    icon: Users,
  },
  {
    title: "Persetujuan Cuti Big Boss",
    description: "Mekanisme persetujuan izin, sakit, atau cuti karyawan dengan password khusus Big Boss.",
    icon: CheckCircle,
  },
  {
    title: "Laporan & Analitik Lengkap",
    description: "Menampilkan riwayat absensi, statistik karyawan, dan opsi ekspor data.",
    icon: BarChart,
  },
  {
    title: "PWA & Hybrid App Ready",
    description: "Aplikasi web progresif yang dapat diinstal, siap dibungkus menjadi aplikasi native (APK).",
    icon: Smartphone,
  },
];

const technologies = [
  { name: "React & Next.js", icon: Code, description: "Frontend modern dengan TypeScript." },
  { name: "Tailwind CSS", icon: Code, description: "Styling cepat dan responsif." },
  { name: "Capacitor (Rencana)", icon: Smartphone, description: "Pembungkus web ke native." },
];

const securityHighlights = [
  { name: "Otentikasi Aman", icon: Shield, description: "Rekomendasi Backend API, HTTPS, Password Hashing." },
  { name: "Validasi Data", icon: CheckCircle, description: "Input divalidasi di klien & server." },
  { name: "Geofencing Server-Side", icon: MapPin, description: "Verifikasi lokasi absensi yang kuat." },
];

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl w-full space-y-12 bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <Clock className="mx-auto h-16 w-16 text-blue-600 mb-4" />
          <h1 className="text-5xl font-extrabold text-gray-900 mb-2 leading-tight">Absensi Realtime PWA</h1>
          <p className="text-xl text-gray-600">Sistem Absensi Karyawan Modern & Fleksibel</p>
        </div>

        {/* Features Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Fitur Utama Aplikasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md flex items-start space-x-4">
                <feature.icon className="h-8 w-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Teknologi yang Digunakan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-lg shadow-md text-center">
                <tech.icon className="mx-auto h-8 w-8 text-green-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-700">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Keamanan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {securityHighlights.map((sec, index) => (
              <div key={index} className="bg-purple-50 p-6 rounded-lg shadow-md text-center">
                <sec.icon className="mx-auto h-8 w-8 text-purple-600 mb-3" />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{sec.name}</h3>
                <p className="text-sm text-gray-700">{sec.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Login Button */}
        <div className="mt-10 text-center">
          <Link href="/login">
            <button className="inline-flex items-center justify-center px-10 py-4 border border-transparent text-lg font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-105">
              Masuk ke Aplikasi
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;