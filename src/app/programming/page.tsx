import React from 'react';
import { Metadata } from 'next';
import { getAllCourses } from '@/lib/course-data';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: "Programming Languages Academy | MATT ACADEMY",
  description: "Learn core software engineering languages with our professional certified courses. Specialize in C, C++, Java, and Python Programming with expert mentors.",
  keywords: [
    "programming courses", "coding academy", "C programming training",
    "Java programming course", "Python coding bootcamp", "MATT ACADEMY languages track"
  ],
};

export default function ProgrammingLanguagesPage() {
  const allCourses = getAllCourses();
  
  const targetSlugs = [
    'c-programming',
    'cpp-programming',
    'java-programming',
    'python-programming'
  ];
  
  const filteredCourses = allCourses.filter(course => 
    targetSlugs.includes(course.slug)
  );

  return (
    <CategoryPageLayout
      pageName="Programming Languages"
      image="/aboutMatt.jpeg"
      badgeText="Professional Language Certification"
      title="Build a Solid Coding Foundation"
      description="Master industry-standard programming languages from scratch. Understand data structures, algorithms, object-oriented concepts, and clean coding principles that tech companies demand."
      items={filteredCourses}
      isInternship={false}
    />
  );
}
