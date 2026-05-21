'use client';

import { useState, useEffect, useRef } from 'react';

interface ProgramSectionsProps {
  programStructure?: string[];
  careerSupport?: string[];
  courseTitle?: string;
  keySkills?: string[];
}

const getDynamicStructureAndSupport = (
  title: string,
  keySkills: string[] = [],
  customStructure?: string[],
  customSupport?: string[]
) => {
  if (customStructure && customSupport && customStructure.length > 0 && customSupport.length > 0) {
    return {
      programStructure: customStructure,
      careerSupport: customSupport,
    };
  }

  const name = title || "Selected Program";
  const skillText1 = keySkills[0] || "Core Fundamentals";
  const skillText2 = keySkills[1] || "Practical Implementations";
  const skillText3 = keySkills[2] || "Advanced Concepts";

  const lowerTitle = name.toLowerCase();
  const isHardware = lowerTitle.includes("embedded") || 
                    lowerTitle.includes("electronics") || 
                    lowerTitle.includes("pcb") || 
                    lowerTitle.includes("robotics") || 
                    lowerTitle.includes("iot") || 
                    lowerTitle.includes("drone") || 
                    lowerTitle.includes("hardware") ||
                    lowerTitle.includes("firmware") ||
                    lowerTitle.includes("vlsi") ||
                    lowerTitle.includes("autonomous");

  const isAIData = lowerTitle.includes("ai") || 
                   lowerTitle.includes("machine learning") || 
                   lowerTitle.includes("data") || 
                   lowerTitle.includes("analytics") || 
                   lowerTitle.includes("power bi") || 
                   lowerTitle.includes("matlab") || 
                   lowerTitle.includes("simulation") ||
                   lowerTitle.includes("modelling") ||
                   lowerTitle.includes("intelligence");

  let generatedStructure: string[] = [];
  let generatedSupport: string[] = [];

  if (isHardware) {
    generatedStructure = [
      `Beginner-friendly, designed for students and working professionals aspiring to enter the ${name} industry`,
      `120+ hours of hands-on laboratory content covering ${skillText1}, ${skillText2}, and ${skillText3}`,
      `Step-by-step learning path from basic circuit design/schematics to advanced hardware deployment`,
      `Live hardware testing sessions, real-world prototyping projects, and weekly lab challenges`,
      `Dedicated lab mentor and hardware/software troubleshooting support`,
      `Learn to design, test, and debug complete physical prototypes and systems`,
      `Access to exclusive engineering community for peer learning and professional networking`
    ];

    generatedSupport = [
      `1:1 mock technical interviews with senior system and hardware engineers`,
      `Career mentorship focused on Embedded, VLSI, IoT, and hardware design roles`,
      `Access to 100+ hardware engineering and core domain job listings every month`,
      `Resume, GitHub, and professional portfolio review by hardware experts`,
      `Assistance with hardware project documentation and Git code repository setup`,
      `Interview preparation for design, firmware, and validation engineer roles in top core firms`,
      `Guaranteed internship and job referrals with partner hardware and system design companies`
    ];
  } else if (isAIData) {
    generatedStructure = [
      `Beginner-friendly, designed for students and working professionals aiming for ${name} roles`,
      `120+ hours of hands-on project content covering ${skillText1}, ${skillText2}, and ${skillText3}`,
      `Step-by-step learning path from data handling basics to advanced model deployment`,
      `Live dataset exploration sessions, real-world case studies, and analytics challenges`,
      `Dedicated mentor and doubt-clearing support for complex mathematical & coding queries`,
      `Learn to build, deploy, and scale analytical pipelines and intelligent systems`,
      `Access to exclusive data and AI community for peer learning and industry networking`
    ];

    generatedSupport = [
      `1:1 mock technical interviews with senior data scientists and AI research engineers`,
      `Career mentorship focused on Data Analysis, ML, and Business Intelligence roles`,
      `Access to 150+ analytics and data science job listings every month`,
      `Resume, Kaggle, and LinkedIn profile review by industry analytics experts`,
      `Assistance with research portfolio, live dashboard deployment, and model hosting`,
      `Interview preparation for data scientist, BI analyst, and ML engineering roles`,
      `Guaranteed internship and job referrals with partner data-driven tech companies`
    ];
  } else {
    // Software & Programming default
    generatedStructure = [
      `Beginner-friendly, designed for students and working professionals aiming for ${name} roles`,
      `120+ hours of hands-on video content covering ${skillText1}, ${skillText2}, and ${skillText3}`,
      `Step-by-step learning path from programming basics to advanced architecture concepts`,
      `Live coding sessions, real-world software projects, and weekly coding challenges`,
      `Dedicated mentor and code doubt-clearing support`,
      `Learn to build, deploy, and scale complete software solutions`,
      `Access to exclusive developer community for peer learning and networking`
    ];

    generatedSupport = [
      `1:1 mock technical interviews with senior software and DevOps engineers`,
      `Career mentorship focused on frontend, backend, security, and full-stack roles`,
      `Access to 200+ software developer and programming job listings every month`,
      `Resume, GitHub, and LinkedIn profile review by tech industry experts`,
      `Assistance with portfolio and live project deployment on GitHub & cloud services`,
      `Interview preparation for professional software developer and engineer roles`,
      `Guaranteed internship and job referrals with partner technology companies`
    ];
  }

  return {
    programStructure: customStructure && customStructure.length > 0 ? customStructure : generatedStructure,
    careerSupport: customSupport && customSupport.length > 0 ? customSupport : generatedSupport,
  };
};

const ProgramSections = ({
  programStructure: customStructure,
  careerSupport: customSupport,
  courseTitle = "Python Fullstack Development",
  keySkills = []
}: ProgramSectionsProps) => {
  const [sectionsVisible, setSectionsVisible] = useState(false);
  const containerRef = useRef(null);

  const { programStructure, careerSupport } = getDynamicStructureAndSupport(
    courseTitle,
    keySkills,
    customStructure,
    customSupport
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setSectionsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-[50vh] flex items-center justify-center px-3 py-6 sm:py-8 md:py-12 relative overflow-hidden mb-12 sm:mb-16 lg:mb-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -right-10 sm:-top-16 sm:-right-16 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-lg animate-float"></div>
        <div className="absolute -bottom-10 -left-10 sm:-bottom-16 sm:-left-16 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-lg animate-float-delayed"></div>
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Program Structure */}
          <div className={`relative group cursor-pointer transition-all duration-600 ${sectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-lg blur-sm group-hover:blur-md transition-all duration-400"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-sm border border-white/60 group-hover:border-blue-200/60 group-hover:shadow-md transition-all duration-400 h-full">
              <div className="flex items-center mb-3">
                <div className="w-2 h-5 sm:w-2.5 sm:h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                <h2 className="text-sm sm:text-base font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent ml-2">
                  Program Structure
                </h2>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {programStructure.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-2 transition-all duration-400 ${sectionsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                    style={{ transitionDelay: `${100 + index * 60}ms` }}
                  >
                    <div className="flex-shrink-0 mt-3 relative">
                      <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 border border-dashed border-blue-500 rounded-full group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                          <div className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-white/80 to-blue-50/30 rounded p-2 sm:p-2.5 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-50/50 group-hover:to-white/80 group-hover:shadow-xs">
                      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed group-hover:text-gray-900 transition-all duration-300">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Career Support */}
          <div className={`relative group cursor-pointer transition-all duration-600 ${sectionsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-lg blur-sm group-hover:blur-md transition-all duration-400"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-lg p-4 sm:p-5 shadow-sm border border-white/60 group-hover:border-pink-200/60 group-hover:shadow-md transition-all duration-400 h-full">
              <div className="flex items-center mb-3">
                <div className="w-2 h-5 sm:w-2.5 sm:h-6 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full"></div>
                <h2 className="text-sm sm:text-base font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent ml-2">
                  Career Support
                </h2>
              </div>
              <div className="space-y-2 sm:space-y-3">
                {careerSupport.map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start space-x-2 transition-all duration-400 ${sectionsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                    style={{ transitionDelay: `${200 + index * 60}ms` }}
                  >
                    <div className="flex-shrink-0 mt-3 relative">
                      <div className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 border border-dashed border-pink-500 rounded-full group-hover:scale-110 transition-all duration-300 flex items-center justify-center">
                          <div className="w-1 h-1 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-white/80 to-pink-50/30 rounded p-2 sm:p-2.5 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-pink-50/50 group-hover:to-white/80 group-hover:shadow-xs">
                      <p className="text-gray-800 text-xs sm:text-sm leading-relaxed group-hover:text-gray-900 transition-all duration-300">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float { 0%,100%{transform:translateY(0px);}50%{transform:translateY(-8px);} }
        @keyframes float-delayed { 0%,100%{transform:translateY(0px);}50%{transform:translateY(8px);} }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default ProgramSections;
