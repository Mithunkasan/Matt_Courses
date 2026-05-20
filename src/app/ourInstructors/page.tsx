import React from 'react';
import { Metadata } from 'next';
import OurInstructorsClient from "@/components/OurInstructorsClient";

export const metadata: Metadata = {
  title: "Our Instructors | MATT ACADEMY",
  description: "Meet our top-class industrial trainers, subject matter experts, and research guides at MATT ACADEMY. Learn from professionals with extensive experience in Robotics, Embedded Systems, and Web Technologies.",
  keywords: ["engineering mentors", "coding instructors Kerala", "technical mentors", "MATT ACADEMY trainers", "learn from industry experts"],
};

export default function OurInstructorsPage() {
  return <OurInstructorsClient />;
}