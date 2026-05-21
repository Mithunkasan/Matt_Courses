import React from 'react';
import { Metadata } from 'next';
import { getAllInternships } from '@/lib/internship-data';
import CategoryPageLayout from '@/components/CategoryPageLayout';

export const metadata: Metadata = {
  title: "Hardware & Embedded Systems Internships | MATT ACADEMY",
  description: "Get real hands-on experience in low-level coding and physical design. Our Hardware & Embedded track covers Firmware, IoT Solutions, Autonomous Systems, and multi-layer PCBs with double certifications.",
  keywords: [
    "hardware internships", "embedded system internship", "firmware engineer training",
    "IoT industrial internship", "robotics engineering internships", "MATT ACADEMY hardware track"
  ],
};

export default function HardwareEmbeddedInternshipsPage() {
  const allInternships = getAllInternships();
  
  const targetSlugs = [
    'firmware-engineer',
    'iot-solutions-engineer',
    'autonomous-systems-engineer',
    'hardware-design-engineer'
  ];
  
  const filteredInternships = allInternships.filter(internship => 
    targetSlugs.includes(internship.slug)
  );

  return (
    <CategoryPageLayout
      pageName="Hardware & Embedded Internships"
      image="/aboutMatt.jpeg"
      badgeText="Technical Hands-on Internships"
      title="Engage with Physical Systems"
      description="Work on professional microcontrollers, custom PCB routing tools, robotic perception algorithms, and connected sensor grids under direct real-world guidance."
      items={filteredInternships}
      isInternship={true}
    />
  );
}
