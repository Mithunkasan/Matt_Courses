import { notFound } from "next/navigation";
import { getInternshipBySlug, getAllInternships } from "../../../lib/internship-data";
import DynamicCourseDetail from "../../../components/DynamicCourseDetail";
import React from 'react';
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function InternshipPage({ params }: Props) {
  const { slug } = await params;

  const internship = await getInternshipBySlug(slug);

  if (!internship) {
    notFound();
  }

  const internshipSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": `${internship.title} Internship`,
    "description": internship.description,
    "provider": {
      "@type": "Organization",
      "name": "MATT ACADEMY",
      "sameAs": "https://mattcourses.com"
    },
    "coursePrerequisites": "Basic high school or diploma engineering background",
    "educationalLevel": "Intermediate to Advanced",
    "offers": {
      "@type": "Offer",
      "price": internship.admissionFee ? internship.admissionFee : "0",
      "priceCurrency": "INR"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(internshipSchema) }}
      />
      <DynamicCourseDetail course={internship} />
    </>
  );
}

export async function generateStaticParams() {
  const internships = getAllInternships();
  return internships.map((internship) => ({
    slug: internship.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const internship = await getInternshipBySlug(slug);

  return {
    title: `${internship?.title || "Internship Not Found"} | Professional Internship Role | MATT ACADEMY`,
    description: internship?.description || "",
    keywords: [
      internship?.title || "Engineering Internship",
      "MATT ACADEMY",
      "job-oriented training",
      "industry mentorship",
      "NACTET certified",
      "IAO certified diploma",
      "hands-on experience"
    ],
  };
}
