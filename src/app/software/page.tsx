import React from 'react';
import { Metadata } from 'next';
import SoftwareClient from "@/components/SoftwareClient";

export const metadata: Metadata = {
  title: "Software Development Hub | MATT ACADEMY",
  description: "Accelerate your software career with our premium full-stack and modern web technology programs. Master Full Stack Development, Cloud Computing, and Cybersecurity with industry experts.",
  keywords: ["software hub", "coding bootcamps Kerala", "FullStack development training", "Cloud computing certification", "Cybersecurity courses"],
};

export default function SoftwareHubPage() {
  return <SoftwareClient />;
}