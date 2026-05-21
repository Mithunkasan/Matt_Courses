import React from 'react';
import { Metadata } from 'next';
import { getAllCourses } from '@/lib/course-data';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: "Software Development & Cyber Security | MATT ACADEMY",
  description: "Accelerate your software career with our premium full-stack and modern web technology programs. Master Python Fullstack, MERN Stack, Cyber Security, Linux Administration, and Digital Marketing.",
  keywords: [
    "software engineering courses", "cyber security academy", "full stack web development",
    "Linux systems administration", "RPA automation course", "digital marketing training"
  ],
};

export default function SoftwareCyberPage() {
  const allCourses = getAllCourses();
  
  const targetSlugs = [
    'python-fullstack-development',
    'Mern-stack',
    'full-stack-development',
    'cyber-security',
    'linux',
    'rpa',
    'digital-marketing'
  ];
  
  const filteredCourses = allCourses.filter(course => 
    targetSlugs.includes(course.slug)
  );

  return (
    <CategoryPageLayout
      pageName="Software & Cyber"
      image="/aboutMatt.jpeg"
      badgeText="Advanced Software & Systems"
      title="Engineer Modern Distributed Applications"
      description="Build robust web applications, design secure systems architectures, automate repetitive manual processes, and drive global growth with modern digital marketing suites."
      items={filteredCourses}
      isInternship={false}
    />
  );
}