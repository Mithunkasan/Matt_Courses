import React from 'react';
import { Metadata } from 'next';
import CertificateProgram from '@/components/ui/certi';

export const metadata: Metadata = {
  title: "Verify NACTET & IAO 3D Certifications | MATT ACADEMY",
  description: "Verify your dual professional engineering and software certifications issued by MATT ACADEMY, certified by NACTET & IAO. Gain global career recognition with our validated diplomas.",
  keywords: ["certificate verification", "NACTET certification Kerala", "IAO certified academy", "MATT ACADEMY credentials", "industrial engineering diploma"],
};

export default function CertificatePage() {
  return (
    <div className="w-full">
      <CertificateProgram />
    </div>
  );
}