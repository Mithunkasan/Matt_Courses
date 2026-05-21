import React from 'react';
import { Metadata } from 'next';
import { getAllInternships } from '@/lib/internship-data';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: "Data Science, AI & Analytics Internships | MATT ACADEMY",
  description: "Work on advanced intelligence projects, big data analytics, and high-fidelity mathematical simulations. Master machine learning, deep neural nets, and analytical reports.",
  keywords: [
    "data science internships", "AI engineering internship", "machine learning internship",
    "business intelligence training", "MATLAB simulation internship", "MATT ACADEMY analytics track"
  ],
};

export default function DataAiAnalyticsInternshipsPage() {
  const allInternships = getAllInternships();
  
  const targetSlugs = [
    'ml-ai-engineer',
    'data-scientist',
    'business-intelligence-analyst',
    'simulation-modelling-engineer'
  ];
  
  const filteredInternships = allInternships.filter(internship => 
    targetSlugs.includes(internship.slug)
  );

  return (
    <CategoryPageLayout
      pageName="Data & AI Internships"
      image="/aboutMatt.jpeg"
      badgeText="Advanced Intelligent System Internships"
      title="Solve Industrial Problems with Data"
      description="Deploy supervised learning, deep neural networks, predictive calculations, Star schema reports, and feedback systems in live cloud sandboxes."
      items={filteredInternships}
      isInternship={true}
    />
  );
}
