import React from 'react';
import { Metadata } from 'next';
import { getAllInternships } from '@/lib/internship-data';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: "Web, Cyber Security & Automation Internships | MATT ACADEMY",
  description: "Work on enterprise-grade web development, penetration testing security pipelines, robotic process automations, and Linux cloud systems admin tasks.",
  keywords: [
    "web development internships", "cyber security internship", "RPA developer training",
    "digital marketing industrial internship", "Linux administration internship", "MATT ACADEMY web track"
  ],
};

export default function WebSecurityAutomationInternshipsPage() {
  const allInternships = getAllInternships();
  
  const targetSlugs = [
    'full-stack-developer',
    'cyber-security-analyst',
    'rpa-developer',
    'digital-marketing-analyst',
    'linux-systems-administrator'
  ];
  
  const filteredInternships = allInternships.filter(internship => 
    targetSlugs.includes(internship.slug)
  );

  return (
    <CategoryPageLayout
      pageName="Web & Security Internships"
      image="/aboutMatt.jpeg"
      badgeText="Systems, Cloud & Automation Internships"
      title="Build and Secure Distributed Infrastructure"
      description="Work on high-throughput backend APIs, simulate secure firewall hardening scripts, construct RPA triggers, and run Google/GA4 growth campaigns."
      items={filteredInternships}
      isInternship={true}
    />
  );
}
