'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, FileText, Users, Briefcase } from 'lucide-react';

const CareerSupportServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const careerServices = [
    {
      title: 'Resume Building',
      description: 'Get personalized resume feedback and optimization for top tech roles.',
      icon: FileText,
      color: 'bg-blue-500',
    },
    {
      title: 'Mock Interviews',
      description: 'Practice with industry experts and get real-time improvement tips.',
      icon: Users,
      color: 'bg-green-500',
    },
    {
      title: 'Placement Assistance',
      description: 'We connect you with hiring partners and provide job referrals.',
      icon: Briefcase,
      color: 'bg-purple-500',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="mb-16 mt-12 px-4 sm:px-6 lg:px-8 font-sans">
      <h2
        className="text-3xl sm:text-5xl font-extrabold text-center mb-12 
        bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent tracking-tight"
      >
        Career Support Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
        {careerServices.map((service, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg p-4 sm:p-5 shadow-md border border-gray-100 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-lg ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <div
              className={`${service.color} w-12 h-12 sm:w-14 sm:h-14 rounded-lg flex items-center justify-center mb-4 sm:mb-5 relative group`}
            >
              <service.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white transform group-hover:scale-110 transition-transform" />
              {index === 0 && (
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
                </div>
              )}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 font-sans">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-sans">
              {service.description}
            </p>
            <div className="mt-3 pt-3 border-t border-gray-100">
              <button className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors font-sans">
                Learn more →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerSupportServices;
