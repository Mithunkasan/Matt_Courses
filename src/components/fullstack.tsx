/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { ArrowRight, PlayCircle, Award, Users, Clock } from 'lucide-react';
import { CourseData } from '../data/fullstack-data';

interface HeroProps {
  courseData: CourseData;
}

const Hero: React.FC<HeroProps> = ({ courseData }) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30"></div>
        <img 
          src={courseData.heroImage}
          alt="Coding Background" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-blue-600/20 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-blue-400/30">
              🚀 #1 {courseData.title} Training in Chennai
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Master
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> {courseData.title} </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {courseData.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>Enroll Now</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="group px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full text-white font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2 border border-white/20">
              <PlayCircle className="h-5 w-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-full mb-3">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="text-2xl font-bold text-white">{courseData.stats.studentsPlaced}+</div>
              <div className="text-gray-300">Students Trained</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-full mb-3">
                <Award className="h-6 w-6 text-purple-400" />
              </div>
              <div className="text-2xl font-bold text-white">{courseData.stats.placementRate}%</div>
              <div className="text-gray-300">Placement Rate</div>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-full mb-3">
                <Clock className="h-6 w-6 text-green-400" />
              </div>
              <div className="text-2xl font-bold text-white">{courseData.duration}</div>
              <div className="text-gray-300">Duration</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;