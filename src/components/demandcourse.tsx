'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';

interface CareerAndTechSectionProps {
  courseTitle?: string;
  keySkills?: string[];
}

const CareerAndTechSection = ({ courseTitle, keySkills }: CareerAndTechSectionProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const colors = ['bg-blue-400', 'bg-green-400', 'bg-pink-400', 'bg-yellow-400', 'bg-blue-500', 'bg-orange-400'];

  const defaultTechStack = [
    { name: 'Python', color: 'bg-blue-400' },
    { name: 'Django', color: 'bg-green-400' },
    { name: 'Flask', color: 'bg-pink-400' },
    { name: 'FastAPI', color: 'bg-yellow-400' },
    { name: 'React', color: 'bg-blue-500' },
    { name: 'PostgreSQL', color: 'bg-orange-400' },
    { name: 'MongoDB', color: 'bg-green-400' },
    { name: 'Redis', color: 'bg-pink-400' },
    { name: 'Docker', color: 'bg-blue-400' },
    { name: 'AWS', color: 'bg-yellow-400' },
    { name: 'Git', color: 'bg-orange-400' },
    { name: 'REST APIs', color: 'bg-blue-500' },
  ];

  const techStack = keySkills && keySkills.length > 0
    ? keySkills.map((skill, index) => ({
        name: skill,
        color: colors[index % colors.length]
      }))
    : defaultTechStack;

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
    <div ref={sectionRef} className="px-4 sm:px-6 lg:px-8 mt-6 mb-24 space-y-20">
      <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-2xl">
        <h2 className="text-4xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-900 bg-clip-text text-transparent text-center p-1">
          {courseTitle ? `Master In-Demand ${courseTitle} Technologies` : "Master In-Demand Technologies"}
        </h2>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className={`${tech.color} text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-base sm:text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer float-animation`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default CareerAndTechSection;
