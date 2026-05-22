import Abouthead from "@/components/Abouthead";
import EnrollClient from "@/components/EnrollClient";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Enroll Now & Register for Certified Courses | MATT ACADEMY",
  description: "Secure your seat for Robotics, Embedded Systems, IoT, MERN Stack, and Python Full Stack training at MATT ACADEMY. Gain dual NACTET & IAO certification.",
  keywords: [
    "enroll MATT ACADEMY", 
    "course registration", 
    "internship registration", 
    "certified course registration", 
    "engineering training admission"
  ],
  alternates: {
    canonical: "https://mattcourses.com/enroll",
  },
  openGraph: {
    title: "Enroll Now | MATT ACADEMY",
    description: "Register for specialized certified courses in Robotics, Embedded Systems, IoT, MERN Stack, and Python Full Stack at MATT ACADEMY.",
    url: "https://mattcourses.com/enroll",
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
    title: "Enroll Now | MATT ACADEMY",
    description: "Register for specialized certified courses in Robotics, Embedded Systems, IoT, MERN Stack, and Python Full Stack at MATT ACADEMY.",
    images: ["/logo.png"],
  },
};

export default function EnrollPage() {
  const enrollBreadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mattcourses.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Enroll",
        "item": "https://mattcourses.com/enroll"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enrollBreadcrumbSchema) }}
      />
      <Abouthead pageName="Enroll Now" image="/breadcrumb_bg.jpg" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <EnrollClient />
      </div>
    </>
  );
}
