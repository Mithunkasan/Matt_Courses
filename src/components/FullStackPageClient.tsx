'use client'
import React from 'react';
import Hero from "@/components/fullstack";
import CourseOverview from "@/components/CourseOverview";
import Curriculum from "@/components/Curriculum";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonialss";
import Contact from "@/components/Contact";


interface Props {
  courseData: any; // We can use any or the specific interface from the data file
}

export default function FullStackPageClient({ courseData }: Props) {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Hero courseData={courseData} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <CourseOverview courseData={courseData} />
        <Curriculum courseData={courseData} />
        <Instructors courseData={courseData} />
        <Testimonials courseData={courseData} />
        <Contact courseData={courseData} />
      </div>
    </div>
  );
}
