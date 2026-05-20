import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from 'react';
import { fullStackCourseData } from "../../../data/fullstack-data";
import FullStackPageClient from "@/components/FullStackPageClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "FullStack" }
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const courseData = fullStackCourseData.find((course) => course.slug === slug);

  return {
    title: `${courseData?.title || "Software Course"} | MATT ACADEMY`,
    description: courseData?.description || "Master professional software development, full stack web apps, Cloud computing, and cybersecurity at MATT ACADEMY.",
    keywords: [
      courseData?.title || "Software",
      courseData?.subtitle || "Software Training",
      "MATT ACADEMY", "placement assistance", "certified coding courses"
    ],
  };
}

export default async function FullStackPage({ params }: Props) {
  const { slug } = await params;
  const courseData = fullStackCourseData.find((course) => course.slug === slug);

  if (!courseData) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": courseData.title,
    "description": courseData.description,
    "provider": {
      "@type": "Organization",
      "name": "MATT ACADEMY",
      "sameAs": "https://mattcourses.com"
    },
    "coursePrerequisites": "Basic understanding of computers",
    "educationalLevel": "Intermediate",
    "offers": {
      "@type": "Offer",
      "price": courseData.fee.replace(/[^\d]/g, ""),
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <FullStackPageClient courseData={courseData} />
    </>
  );
}
