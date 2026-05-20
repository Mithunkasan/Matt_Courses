import React from 'react';
import { Metadata } from 'next';
import HomeClient from "@/components/HomeClient";

export const metadata: Metadata = {
  title: "MATT ACADEMY | Leading Engineering & Software Training Institute",
  description: "MATT ACADEMY is Kerala's premier educational center offering job-oriented training in Robotics, IoT, PCB Designing, MERN Stack, Python Full Stack Development, and Embedded Systems. Gain dual certification and placement support.",
  keywords: [
    "MATT ACADEMY", "Engineering training institute", "Robotics courses in Kerala", "PCB Designing training",
    "IoT training Kerala", "MERN Stack development course", "Python Full Stack course", "Embedded Systems course",
    "job placement training", "certified engineering courses", "NACTET certification"
  ],
  alternates: {
    canonical: "https://mattcourses.com",
  },
  openGraph: {
    title: "MATT ACADEMY | Leading Engineering & Software Training Institute",
    description: "Kerala's premier training center offering professional certified courses in Robotics, IoT, PCB Design, MERN Stack, Python Full Stack, and Embedded Systems.",
    url: "https://mattcourses.com",
    siteName: "MATT ACADEMY",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "MATT ACADEMY Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MATT ACADEMY | Engineering & Software Training",
    description: "Job-oriented training courses in Robotics, IoT, PCB Designing, MERN Stack, Python Full Stack, and Embedded Systems.",
    images: ["/logo.png"],
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MATT ACADEMY",
    "alternateName": "MATT Engineering Solutions",
    "url": "https://mattcourses.com",
    "logo": "https://mattcourses.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9876543210",
      "contactType": "Admissions & Support",
      "areaServed": "IN",
      "availableLanguage": ["English", "Malayalam", "Tamil"]
    },
    "sameAs": [
      "https://www.facebook.com/mattacademy",
      "https://www.instagram.com/mattacademy",
      "https://www.youtube.com/mattacademy"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "MATT ACADEMY",
    "url": "https://mattcourses.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://mattcourses.com/allcourses?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeClient />
    </>
  );
}
