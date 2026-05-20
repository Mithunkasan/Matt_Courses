import React from 'react';
import { Metadata } from 'next';
import AboutUsClient from "@/components/AboutUsClient";

export const metadata: Metadata = {
  title: "About Us | MATT ACADEMY",
  description: "Learn more about MATT ACADEMY, our mission, industrial engineering achievements, our top class instructors, and our incubation cell supporting the next generation of engineers.",
  keywords: ["About MATT ACADEMY", "DMI incubation center", "engineering academy profile", "our achievements", "mentors in Kerala"],
};

export default function AboutUsPage() {
  return <AboutUsClient />;
}