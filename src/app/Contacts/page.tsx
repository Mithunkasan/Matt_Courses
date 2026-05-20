import Abouthead from "@/components/Abouthead";
import ContactForm from "@/components/getin";
import GoogleMapEmbed from "@/components/map";
import React from "react";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us & Find MATT ACADEMY Location | Nagercoil & Kerala",
  description: "Get in touch with MATT ACADEMY. Contact our admissions and support office in Nagercoil. View our location map, call us, or email your training enquiries directly.",
  keywords: ["contact MATT ACADEMY", "admissions help desk", "engineering institute location", "MATT Nagercoil contact", "office hours engineering academy"],
};

export default function Contacts() {
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MATT ACADEMY",
    "description": "Contact MATT ACADEMY admissions and student support team.",
    "mainEntity": {
      "@type": "EducationalOrganization",
      "name": "MATT ACADEMY",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "MATT ENGINEERING SOLUTIONS, Near Scott Christian College",
        "addressLocality": "Nagercoil",
        "addressRegion": "Tamil Nadu",
        "postalCode": "629001",
        "addressCountry": "IN"
      },
      "telephone": "+91 9876543210",
      "email": "info@mattcourses.com",
      "openingHours": "Mo-Sa 09:00-18:00"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <Abouthead pageName="Contact Us" image="/breadcrumb_bg.jpg" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <ContactForm />
        <GoogleMapEmbed mapUrl={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.139676762256!2d77.42837141066326!3d8.188681601542136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04f0dac87385e3%3A0x360b5a2f4fa023f1!2sMATT%20ENGINEERING%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1747203402791!5m2!1sen!2sin" } />
      </div>
    </>
  );
}