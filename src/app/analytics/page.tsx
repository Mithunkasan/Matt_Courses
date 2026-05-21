import React from 'react';
import { Metadata } from 'next';
import { getAllCourses } from '@/lib/course-data';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: "Data Science, Analytics & AI Courses | MATT ACADEMY",
  description: "Accelerate your career in artificial intelligence and big data. Specialize in Data Analysis, Data Science, Machine Learning, Deep Learning, Power BI, and MATLAB.",
  keywords: [
    "data science training", "artificial intelligence academy", "machine learning course",
    "Power BI data analytics", "MATLAB simulation", "MATT ACADEMY AI track"
  ],
};

export default function AnalyticsAIPage() {
  const allCourses = getAllCourses();
  
  const targetSlugs = [
    'data-analysis',
    'data-science',
    'machine-learning',
    'artificial-intelligence',
    'power-bi',
    'matlab'
  ];
  
  const filteredCourses = allCourses.filter(course => 
    targetSlugs.includes(course.slug)
  );

  return (
    <CategoryPageLayout
      pageName="Analytics & AI"
      image="/aboutMatt.jpeg"
      badgeText="Advanced Intelligence & Analytics"
      title="Step into the Future of Enterprise Data"
      description="Learn statistical data manipulation, predictive machine learning models, custom dashboard reporting, and high-fidelity mathematical simulations from industry leaders."
      items={filteredCourses}
      isInternship={false}
    />
  );
}
