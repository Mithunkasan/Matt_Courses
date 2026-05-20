'use client'
import React, { useState, useRef, useEffect } from 'react';
import { Camera, Code, Database, Globe, Server, Terminal } from 'lucide-react';
import NACTETCertification3D from './Certificate';

import { Module } from '@/types/course';

interface PythonMarqueeGalleryProps {
  courseTitle?: string;
  modules?: Module[];
}

const PythonMarqueeGallery = ({ courseTitle, modules }: PythonMarqueeGalleryProps = {}) => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);

  const icons = [
    <Code className="w-10 h-10" />,
    <Terminal className="w-10 h-10" />,
    <Database className="w-10 h-10" />,
    <Server className="w-10 h-10" />,
    <Globe className="w-10 h-10" />,
    <Camera className="w-10 h-10" />
  ];

  const gradients = [
    { gradient: "from-green-400 to-emerald-600", bgGradient: "from-green-50 to-emerald-100" },
    { gradient: "from-blue-400 to-cyan-600", bgGradient: "from-blue-50 to-cyan-100" },
    { gradient: "from-indigo-400 to-purple-600", bgGradient: "from-indigo-50 to-purple-100" },
    { gradient: "from-orange-400 to-red-600", bgGradient: "from-orange-50 to-red-100" },
    { gradient: "from-pink-400 to-rose-600", bgGradient: "from-pink-50 to-rose-100" },
    { gradient: "from-violet-400 to-fuchsia-600", bgGradient: "from-violet-50 to-fuchsia-100" }
  ];

  const defaultTechStack = [
    { id: 1, title: "Django Framework", subtitle: "High-level Python Web Framework", icon: <Code className="w-10 h-10" />, gradient: "from-green-400 to-emerald-600", bgGradient: "from-green-50 to-emerald-100" },
    { id: 2, title: "Flask Development", subtitle: "Lightweight WSGI Framework", icon: <Terminal className="w-10 h-10" />, gradient: "from-blue-400 to-cyan-600", bgGradient: "from-blue-50 to-cyan-100" },
    { id: 3, title: "PostgreSQL", subtitle: "Advanced Database System", icon: <Database className="w-10 h-10" />, gradient: "from-indigo-400 to-purple-600", bgGradient: "from-indigo-50 to-purple-100" },
    { id: 4, title: "RESTful APIs", subtitle: "Backend Integration", icon: <Server className="w-10 h-10" />, gradient: "from-orange-400 to-red-600", bgGradient: "from-orange-50 to-red-100" },
    { id: 5, title: "React Frontend", subtitle: "Modern UI Development", icon: <Globe className="w-10 h-10" />, gradient: "from-pink-400 to-rose-600", bgGradient: "from-pink-50 to-rose-100" },
    { id: 6, title: "Full-Stack Projects", subtitle: "End-to-End Solutions", icon: <Camera className="w-10 h-10" />, gradient: "from-violet-400 to-fuchsia-600", bgGradient: "from-violet-50 to-fuchsia-100" }
  ];

  const techStack = modules && modules.length > 0
    ? modules.map((mod, index) => {
        const iconIndex = index % icons.length;
        const gradIndex = index % gradients.length;
        return {
          id: index + 1,
          title: mod.title,
          subtitle: mod.description,
          icon: icons[iconIndex],
          gradient: gradients[gradIndex].gradient,
          bgGradient: gradients[gradIndex].bgGradient
        };
      })
    : defaultTechStack;

  const duplicatedTech = [...techStack, ...techStack, ...techStack];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={contactRef} className="min-h-screen bg-[#ffffff] py-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden px-6">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-60 h-60 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-200/10 to-blue-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
          <span className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg inline-block mb-4">
            {courseTitle || "Python Full-Stack Development"}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent">
            {courseTitle ? `Master ${courseTitle}` : "Master Modern Web Development"}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Learn cutting-edge technologies and build production-ready applications
          </p>
        </div>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div
            className="overflow-hidden py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className={`flex ${isPaused ? 'animate-marquee-paused' : 'animate-marquee-smooth'}`}>
              {duplicatedTech.map((tech, index) => (
                <div
                  key={`${tech.id}-${index}`}
                  className="flex-shrink-0 mx-3 group cursor-pointer"
                  onMouseEnter={() => setHoveredCard(`${tech.id}-${index}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className={`relative w-64 h-80 transition-all duration-500 ease-out ${hoveredCard === `${tech.id}-${index}` ? 'scale-105 z-20' : 'scale-100'}`}>
                    {/* Glow */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${tech.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500`}></div>

                    {/* Card */}
                    <div className={`relative h-full bg-gradient-to-br ${tech.bgGradient} rounded-3xl shadow-xl border border-white/30 overflow-hidden transition-all duration-500`}>
                      <div className="relative h-full flex flex-col items-center justify-center p-6">
                        {/* Icon */}
                        <div className={`mb-6 p-4 bg-gradient-to-br ${tech.gradient} rounded-2xl shadow-2xl transform transition-all duration-500 ${hoveredCard === `${tech.id}-${index}` ? 'scale-110 rotate-3' : 'scale-100 rotate-0'}`}>
                          <div className="text-white">{tech.icon}</div>
                        </div>
                        {/* Text */}
                        <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">{tech.title}</h3>
                        <p className="text-gray-600 text-center mb-4 text-sm leading-snug max-h-12 overflow-hidden">{tech.subtitle}</p>

                        {/* Stats */}
                        <div className="flex gap-3 mb-4">
                          <div className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm text-center">
                            <div className="text-xs text-gray-600">Students</div>
                            <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">500+</div>
                          </div>
                          <div className="px-3 py-1 bg-white/60 backdrop-blur-sm rounded-lg shadow-sm text-center">
                            <div className="text-xs text-gray-600">Projects</div>
                            <div className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">200+</div>
                          </div>
                        </div>

                        {/* Learn More */}
                        <button className={`px-5 py-2 bg-gradient-to-r ${tech.gradient} text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform ${hoveredCard === `${tech.id}-${index}` ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                          Learn More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      {/* Styles */}
      <style jsx>{`
        @keyframes marquee-smooth {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-marquee-smooth {
          animation: marquee-smooth 50s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-marquee-paused {
          animation: marquee-smooth 50s linear infinite paused;
          display: flex;
          width: max-content;
        }
      `}</style>
    </div>
  );
};

export default PythonMarqueeGallery;
