import React from 'react';
import { Metadata } from 'next';
import AllCourses from '../../components/allcourses';

export const metadata: Metadata = {
  title: "All Courses & Job-Oriented Training Programs | MATT ACADEMY",
  description: "Browse our comprehensive list of job-oriented certified training programs. Explore professional courses in Robotics, Embedded Systems, IoT, MERN Stack, Python Full Stack, and PCB Designing.",
  keywords: ["all engineering courses", "career programs Kerala", "technical training courses", "MATT ACADEMY catalog", "Robotics and IoT training"],
};

export default function AllCoursesPage() {
  return (
    <div className="w-full">
      <AllCourses />
    </div>
  );
}