import { notFound } from "next/navigation";
import { getCourseBySlug } from "../../../lib/course-data";
import DynamicCourseDetail from "../../../components/DynamicCourseDetail";
import React from 'react';
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;

  const course = await getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": course.title,
    "description": course.description,
    "provider": {
      "@type": "Organization",
      "name": "MATT ACADEMY",
      "sameAs": "https://mattcourses.com"
    },
    "coursePrerequisites": "Basic high school or diploma engineering background",
    "educationalLevel": "Intermediate to Advanced",
    "offers": {
      "@type": "Offer",
      "price": course.admissionFee ? course.admissionFee : "0",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <DynamicCourseDetail course={course} />
    </>
  );
}

export async function generateStaticParams() {
  return [
    { slug: "python-fullstack-development" },
    { slug: "Mern-stack" },
    { slug: "basic-electronics" },
    { slug: "pcb-designing" },
    { slug: "robotics" },
    { slug: "iot" },
    { slug: "drone-technology" },
    { slug: "embedded-systems" },
    { slug: "c-programming" },
    { slug: "cpp-programming" },
    { slug: "java-programming" },
    { slug: "python-programming" },
    { slug: "data-analysis" },
    { slug: "data-science" },
    { slug: "machine-learning" },
    { slug: "artificial-intelligence" },
    { slug: "power-bi" },
    { slug: "matlab" },
    { slug: "full-stack-development" },
    { slug: "cyber-security" },
    { slug: "linux" },
    { slug: "rpa" },
    { slug: "digital-marketing" }
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = await getCourseBySlug(slug);

  return {
    title: `${course?.title || "Course Not Found"} | MATT ACADEMY`,
    description: course?.description || "",
    keywords: [
      course?.title || "Engineering Course",
      "MATT ACADEMY",
      "job-oriented training",
      "NACTET certified",
      "IAO certified diploma"
    ],
  };
}
