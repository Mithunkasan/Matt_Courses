/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { Cpu, Terminal, BrainCircuit, Layers, Users, BookOpen, Star, ArrowRight, Award, ChevronDown } from 'lucide-react';
import SvgWave from './Svgwave';
import { useRouter } from 'next/navigation';
import { getAllCourses } from '../lib/course-data';
import { getAllInternships } from '../lib/internship-data';

type Props = {
  title: string;
  showSearch?: boolean;
};

// Course Categories and Domains Structure
const courseDomains = [
  {
    id: "c-hw",
    category: "Hardware & Embedded",
    icon: Cpu,
    color: "from-blue-600 to-indigo-700",
    shadow: "shadow-blue-500/10 hover:shadow-blue-500/20",
    borderColor: "border-blue-200 hover:border-blue-400",
    bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50/30",
    description: "Learn electronic schematic design, multi-layer PCB layout routing, RTOS programming, autonomous robotics, and drone systems in high-tech laboratories.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
    courses: [
      { title: "Basic Electronics", path: "/courses/basic-electronics" },
      { title: "PCB Designing", path: "/courses/pcb-designing" },
      { title: "Robotics", path: "/courses/robotics" },
      { title: "Internet of Things (IoT)", path: "/courses/iot" },
      { title: "Drone Technology", path: "/courses/drone-technology" },
      { title: "Embedded Systems", path: "/courses/embedded-systems" },
    ]
  },
  {
    id: "c-pr",
    category: "Programming Languages",
    icon: Terminal,
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/10 hover:shadow-amber-500/20",
    borderColor: "border-amber-200 hover:border-amber-400",
    bgGradient: "bg-gradient-to-br from-amber-50 to-orange-50/30",
    description: "Build a strong programming foundation from absolute scratch. Master core concepts in C, OOP design in C++, enterprise applications in Java, and versatile scripting in Python.",
    image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600",
    courses: [
      { title: "C Programming", path: "/courses/c-programming" },
      { title: "C++ Programming", path: "/courses/cpp-programming" },
      { title: "Java Programming", path: "/courses/java-programming" },
      { title: "Python Programming", path: "/courses/python-programming" },
    ]
  },
  {
    id: "c-ai",
    category: "Analytics & AI",
    icon: BrainCircuit,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/10 hover:shadow-emerald-500/20",
    borderColor: "border-emerald-200 hover:border-emerald-400",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50/30",
    description: "Dive deep into data modeling, statistical distributions, predictive algorithms, industrial artificial intelligence pipelines, and interactive BI visual dashboards.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
    courses: [
      { title: "Data Analysis", path: "/courses/data-analysis" },
      { title: "Data Science", path: "/courses/data-science" },
      { title: "Machine Learning", path: "/courses/machine-learning" },
      { title: "Artificial Intelligence", path: "/courses/artificial-intelligence" },
      { title: "Power BI", path: "/courses/power-bi" },
      { title: "MATLAB", path: "/courses/matlab" },
    ]
  },
  {
    id: "c-sw",
    category: "Software & Cyber",
    icon: Layers,
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/10 hover:shadow-pink-500/20",
    borderColor: "border-pink-200 hover:border-pink-400",
    bgGradient: "bg-gradient-to-br from-pink-50 to-rose-50/30",
    description: "Engineer high-performance modern web apps with MERN stack, secure network topologies against exploits, deploy Linux servers, or master digital conversion campaigns.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    courses: [
      { title: "Python Full Stack", path: "/courses/python-fullstack-development" },
      { title: "MERN Stack", path: "/courses/Mern-stack" },
      { title: "Fullstack Development", path: "/courses/full-stack-development" },
      { title: "Cyber Security", path: "/courses/cyber-security" },
      { title: "Linux Administration", path: "/courses/linux" },
      { title: "RPA (Automation)", path: "/courses/rpa" },
      { title: "Digital Marketing", path: "/courses/digital-marketing" },
    ]
  }
];

// Internship Categories and Domains Structure
const internshipDomains = [
  {
    id: "i-hw",
    category: "Hardware & Embedded",
    icon: Cpu,
    color: "from-blue-600 to-indigo-700",
    shadow: "shadow-blue-500/10 hover:shadow-blue-500/20",
    borderColor: "border-blue-200 hover:border-blue-400",
    bgGradient: "bg-gradient-to-br from-blue-50 to-indigo-50/30",
    description: "Work on live system prototyping projects, bare-metal microcontroller drivers, connected smart home architectures, and robot kinetics navigation controllers.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=600",
    courses: [
      { title: "Firmware Engineer", path: "/internships/firmware-engineer" },
      { title: "IoT Solutions Engineer", path: "/internships/iot-solutions-engineer" },
      { title: "Autonomous Systems Engineer", path: "/internships/autonomous-systems-engineer" },
      { title: "Hardware Design Engineer", path: "/internships/hardware-design-engineer" },
    ]
  },
  {
    id: "i-pr",
    category: "Programming",
    icon: Terminal,
    color: "from-amber-500 to-orange-600",
    shadow: "shadow-amber-500/10 hover:shadow-amber-500/20",
    borderColor: "border-amber-200 hover:border-amber-400",
    bgGradient: "bg-gradient-to-br from-amber-50 to-orange-50/30",
    description: "Adopt enterprise software development cycles, build high-integrity software products, and deploy structured script workflows in active staging sandboxes.",
    image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=600",
    courses: [
      { title: "Software Engineer", path: "/internships/software-engineer" },
      { title: "Python Developer", path: "/internships/python-developer" },
    ]
  },
  {
    id: "i-ai",
    category: "Data, AI & Analytics",
    icon: BrainCircuit,
    color: "from-emerald-500 to-teal-600",
    shadow: "shadow-emerald-500/10 hover:shadow-emerald-500/20",
    borderColor: "border-emerald-200 hover:border-emerald-400",
    bgGradient: "bg-gradient-to-br from-emerald-50 to-teal-50/30",
    description: "Orchestrate real-world machine learning algorithms, train deep neural networks, design predictive analytics pipelines, and construct enterprise reporting boards.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
    courses: [
      { title: "ML / AI Engineer", path: "/internships/ml-ai-engineer" },
      { title: "Data Scientist", path: "/internships/data-scientist" },
      { title: "Business Intelligence Analyst", path: "/internships/business-intelligence-analyst" },
      { title: "Simulation & Modelling Engineer", path: "/internships/simulation-modelling-engineer" },
    ]
  },
  {
    id: "i-sw",
    category: "Web, Security & Automation",
    icon: Layers,
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/10 hover:shadow-pink-500/20",
    borderColor: "border-pink-200 hover:border-pink-400",
    bgGradient: "bg-gradient-to-br from-pink-50 to-rose-50/30",
    description: "Deploy robust containerized websites on cloud structures, audit live systems for security vulnerabilities, orchestrate RPA scripts, or audit digital conversion campaigns.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    courses: [
      { title: "Full Stack Developer", path: "/internships/full-stack-developer" },
      { title: "Cyber Security Analyst", path: "/internships/cyber-security-analyst" },
      { title: "RPA Developer", path: "/internships/rpa-developer" },
      { title: "Digital Marketing Analyst", path: "/internships/digital-marketing-analyst" },
      { title: "Linux Systems Administrator", path: "/internships/linux-systems-administrator" },
    ]
  }
];

const FeaturedCourses: React.FC<Props> = () => {
  const [openCourseDomainId, setOpenCourseDomainId] = useState<string | null>(null);
  const [openInternshipDomainId, setOpenInternshipDomainId] = useState<string | null>(null);

  const router = useRouter();

  const handleCourseClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full bg-slate-50/50 py-12 sm:py-16 md:py-20 relative overflow-hidden font-sans">
      
      {/* SECTION 1: EXPLORE OUR COURSES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4 animate-fade-in">
            Explore Our <span className="text-blue-600 px-2 py-1 relative inline-block">
              Courses
              <SvgWave className="absolute bottom-[-10px] left-0 w-full animate-pulse" />
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mt-4">
            Transform your technical capability with Kerala&apos;s premier certified syllabus. Choose a specialized core domain below and master schema design, programming structures, or intelligent AI models.
          </p>
        </div>

        {/* Domain Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {courseDomains.map((domain) => {
            const IconComponent = domain.icon;
            const isOpen = openCourseDomainId === domain.id;
            return (
              <div key={domain.id} className="relative">
                {/* Domain Card */}
                <div
                  onClick={() => {
                    setOpenCourseDomainId(isOpen ? null : domain.id);
                    setOpenInternshipDomainId(null); // Close other open dropdowns
                  }}
                  className={`group cursor-pointer relative rounded-2xl border bg-white transition-all duration-500 flex flex-col justify-between h-[390px] ${
                    isOpen 
                      ? 'ring-2 ring-blue-600 ring-offset-2 scale-[1.02] border-blue-400 shadow-lg shadow-blue-500/5' 
                      : 'border-slate-200/80 hover:border-blue-400 hover:shadow-xl hover:scale-[1.01] shadow-sm shadow-slate-100/50'
                  }`}
                >
                  {/* Visual Image at the top */}
                  <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-slate-100">
                    <img
                      src={domain.image}
                      alt={domain.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm text-slate-800">
                      <IconComponent className="w-5 h-5 text-blue-600" />
                    </div>

                    {/* Course Count Badge */}
                    <div className="absolute bottom-4 left-4 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-blue-600 text-white shadow-md">
                      {domain.courses.length} Courses
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-800 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                        {domain.category}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed font-semibold">
                        {domain.description}
                      </p>
                    </div>

                    {/* Dropdown Action Area */}
                    <div className="mt-4">
                      <div 
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border rounded-xl transition-all duration-300 ${
                          isOpen 
                            ? 'border-blue-400 bg-blue-50/30 text-blue-600 ring-2 ring-blue-500/10' 
                            : 'border-slate-200 text-slate-600 group-hover:border-blue-300 group-hover:bg-blue-50/10'
                        }`}
                      >
                        <span className="text-xs font-extrabold uppercase tracking-wide">
                          {isOpen ? 'Close Programs' : 'Select Program'}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-600' : 'text-slate-400 group-hover:text-blue-500'}`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dropdown List */}
                {isOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 bg-transparent" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenCourseDomainId(null);
                      }} 
                    />
                    <div className="absolute left-0 right-0 top-[102%] mt-1 bg-white border border-slate-200/80 rounded-2xl shadow-xl z-50 overflow-hidden py-1.5 animate-in fade-in slide-in-from-top-2 duration-250">
                      {domain.courses.map((course) => (
                        <button
                          key={course.path}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenCourseDomainId(null);
                            handleCourseClick(course.path);
                          }}
                          className="w-full text-left px-4 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-slate-50 last:border-b-0 group/item"
                        >
                          <span className="pr-2">{course.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-blue-600 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>

      {/* SECTION 2: OUR INTERNSHIP PROGRAM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Divider graphic */}
        <div className="w-full h-px bg-slate-200/80 mb-16 sm:mb-24"></div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
            Our Internship <span className="text-pink-600 px-2 py-1 relative inline-block">
              Program
              <SvgWave className="absolute bottom-[-10px] left-0 w-full animate-pulse" />
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mt-4">
            Engage with professional systems inside industrial-grade sandboxes. Our specialized 3-6 months internships prepare firmware architects, software engineers, and machine learning specialists with live project capabilities.
          </p>
        </div>

        {/* Domain Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
          {internshipDomains.map((domain) => {
            const IconComponent = domain.icon;
            const isOpen = openInternshipDomainId === domain.id;
            return (
              <div key={domain.id} className="relative">
                {/* Domain Card */}
                <div
                  onClick={() => {
                    setOpenInternshipDomainId(isOpen ? null : domain.id);
                    setOpenCourseDomainId(null); // Close other open dropdowns
                  }}
                  className={`group cursor-pointer relative rounded-2xl border bg-white transition-all duration-500 flex flex-col justify-between h-[390px] ${
                    isOpen 
                      ? 'ring-2 ring-pink-600 ring-offset-2 scale-[1.02] border-pink-400 shadow-lg shadow-pink-500/5' 
                      : 'border-slate-200/80 hover:border-pink-400 hover:shadow-xl hover:scale-[1.01] shadow-sm shadow-slate-100/50'
                  }`}
                >
                  {/* Visual Image at the top */}
                  <div className="relative w-full h-44 overflow-hidden rounded-t-2xl bg-slate-100">
                    <img
                      src={domain.image}
                      alt={domain.category}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Decorative Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm text-slate-800">
                      <IconComponent className="w-5 h-5 text-pink-600" />
                    </div>

                    {/* Role Count Badge */}
                    <div className="absolute bottom-4 left-4 px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider rounded-md bg-pink-600 text-white shadow-md">
                      {domain.courses.length} Roles
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-800 group-hover:text-pink-600 transition-colors duration-300 leading-snug">
                        {domain.category}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed font-semibold">
                        {domain.description}
                      </p>
                    </div>

                    {/* Dropdown Action Area */}
                    <div className="mt-4">
                      <div 
                        className={`w-full flex items-center justify-between px-3.5 py-2.5 bg-slate-50 border rounded-xl transition-all duration-300 ${
                          isOpen 
                            ? 'border-pink-400 bg-pink-50/30 text-pink-600 ring-2 ring-pink-500/10' 
                            : 'border-slate-200 text-slate-600 group-hover:border-pink-300 group-hover:bg-pink-50/10'
                        }`}
                      >
                        <span className="text-xs font-extrabold uppercase tracking-wide">
                          {isOpen ? 'Close Roles' : 'Select Role'}
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-pink-600' : 'text-slate-400 group-hover:text-pink-500'}`} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Dropdown List */}
                {isOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-40 bg-transparent" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenInternshipDomainId(null);
                      }} 
                    />
                    <div className="absolute left-0 right-0 top-[102%] mt-1 bg-white border border-slate-200/80 rounded-2xl shadow-xl z-50 overflow-hidden py-1.5 animate-in fade-in slide-in-from-top-2 duration-250">
                      {domain.courses.map((role) => (
                        <button
                          key={role.path}
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenInternshipDomainId(null);
                            router.push(role.path);
                          }}
                          className="w-full text-left px-4 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:bg-pink-50 hover:text-pink-600 transition-colors flex items-center justify-between border-b border-slate-50 last:border-b-0 group/item"
                        >
                          <span className="pr-2">{role.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-pink-600 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </div>
  );
};

export default FeaturedCourses;