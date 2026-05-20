'use client'
import React from 'react';
import { BookOpen, Users, Award, ArrowRight } from 'lucide-react';
import PythonFullStackLanding from './entrypage';
import PythonMarqueeGallery from './Marquee1';
import PythonFullStackHero from './learn';
import CareerProgramSection from './benifits';
import Home from './enquiry';
import FeaturedCourses from './Featured';
import AnimatedTestimonialsDemo from './AnimatedCards';
import NACTETCertification3D from './Certificate';
import ContactSection2 from './contactsection';
import PlacementCareerSupport from './placemnet';
import CareerSupportServices from './careersupport';
import CareerAndTechSection from './demandcourse';
import GenAILearningSection from './genai';
import GenAIFullPage from './comparison';

export default function LandingPage() {
  return (
    <>
      <div className="relative min-h-[500px] lg:h-[600px] overflow-hidden px-4 sm:px-6 lg:pl-10 bg-gradient-to-br from-cyan-100 via-yellow-100 to-pink-200">
        {/* Main Content */}
        <div className="relative z-0 w-full mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-6 pt-16 lg:pt-32">
              <div className="space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black tracking-tight leading-tight mb-4 sm:mb-6">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-700 to-cyan-800 animate-gradient">
                    PYTHON FULL STACK
                  </span>
                  <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-800 animate-gradient">
                    DEVELOPMENT
                  </span>
                  <span className="block w-full h-1.5 sm:h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 rounded mt-2"></span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 max-w-xl">
                  Master Python, Django, React, and modern web technologies with expert-led courses,
                  flexible schedules, and comprehensive learning paths.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg text-sm sm:text-base">
                  Start Learning Now
                  <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                
              </div>
            </div>

            {/* Right Side - Image and Stats */}
            <div className="relative flex justify-center  lg:justify-end items-start lg:items-center">
              <div className="relative w-full max-w-[220px] sm:max-w-[300px] lg:max-w-[380px] xl:max-w-[420px]">
                {/* Main Image */}
                <img
                  src="/riswan.png"
                  alt="Python Full Stack Development"
                  className="w-full h-auto object-cover rounded-lg transform scale-100  lg:pt-10 lg:pr-8 xl:pr-16"
                />

                {/* Floating Stats Cards with increased spacing on mobile */}
                {/* 8000+ Courses */}
                <div className="absolute top-16 -left-6 sm:top-20 sm:-left-8 lg:top-24 lg:-left-10 bg-white rounded-xl shadow-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 animate-float">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-yellow-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">8000+</div>
                    <div className="text-xs text-gray-600 whitespace-nowrap">Online Courses</div>
                  </div>
                </div>

                {/* 8M+ Certificates - Increased top spacing for mobile */}
                <div className="absolute top-44 -right-6 sm:top-52 sm:-right-8 lg:top-60 lg:-right-10 bg-white rounded-xl shadow-xl p-2 sm:p-3 flex items-center gap-2 sm:gap-3 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-orange-400 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">8M+</div>
                    <div className="text-xs text-gray-600 whitespace-nowrap">Certificates Awarded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Curve - Made smaller */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 sm:h-16 lg:h-20 xl:h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,64 C240,96 480,112 720,96 C960,80 1200,32 1440,48 L1440,120 L0,120 Z"
              fill="white"
              className="transition-all duration-300"
            />
          </svg>
        </div>

        <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }
      `}</style>
      </div>
      <PythonFullStackHero />
      <PlacementCareerSupport />
      <CareerProgramSection />
      <AnimatedTestimonialsDemo />
      <PythonMarqueeGallery />
      <CareerAndTechSection />

      <GenAILearningSection />
      <GenAIFullPage />
      <CareerSupportServices />
      <NACTETCertification3D />
      <Home />

      <FeaturedCourses title="featured" />
      {/* <ContactSection2 /> */}
    </>
  );
}