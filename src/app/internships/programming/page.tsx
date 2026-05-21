import React from 'react';
import { Metadata } from 'next';
import { getAllInternships } from '@/lib/internship-data';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: "Programming Languages Internships | MATT ACADEMY",
  description: "Work on real-world projects and build industrial software architectures. Our programming track covers core Software Engineering and high-efficiency Python scripting.",
  keywords: [
    "programming internships", "software engineering internships", "Python developer training",
    "systems programming internship", "MATT ACADEMY coding track"
  ],
};

export default function ProgrammingInternshipsPage() {
  const allInternships = getAllInternships();
  
  const targetSlugs = [
    'software-engineer',
    'python-developer'
  ];
  
  const filteredInternships = allInternships.filter(internship => 
    targetSlugs.includes(internship.slug)
  );

  return (
    <CategoryPageLayout
      pageName="Programming Internships"
      image="/aboutMatt.jpeg"
      badgeText="Software & Core Languages Internships"
      title="Write Clean, Scalable Systems Code"
      description="Collaborate with experienced software leads to practice clean code writing, data structure optimizations, and robust API development workflows."
      items={filteredInternships}
      isInternship={true}
    />
  );
}
