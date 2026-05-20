'use client'
import React from 'react';
import OurInstructors from "@/components/OurInstructors";
import ReviewsCard from "@/components/ReviewsCard";
import HeroSection from "@/components/Herosection";
import MarqueeSection from "@/components/Marqueesection";
import DiscoverInstructors from "@/components/Discover";
import FeaturedCourses from "@/components/Featured";
import useScrollTransition from "../../lib/usescrolltransition";
import ImageCarousel from "@/components/insta";
import YouTubeFeed from "@/components/youtube";

export default function HomeClient() {
  useScrollTransition();
  return (
    <div className="w-full flex flex-col items-center justify-center h-auto overflow-hidden">
      <HeroSection />
      <MarqueeSection />
      <DiscoverInstructors />
      <FeaturedCourses title="featured" />
      <ReviewsCard />
      <OurInstructors />
      <ImageCarousel />
      <YouTubeFeed />
    </div>
  );
}
