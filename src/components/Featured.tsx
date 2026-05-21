/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import { Cpu, Terminal, BrainCircuit, Layers, Users, BookOpen, Star, ArrowRight, Award } from 'lucide-react';
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
  const [selectedCourseDomain, setSelectedCourseDomain] = useState<string>("Hardware & Embedded");
  const [selectedInternshipDomain, setSelectedInternshipDomain] = useState<string>("Hardware & Embedded");

  const router = useRouter();
  const allCourses = getAllCourses();
  const allInternships = getAllInternships();

  // Find active domain configs
  const activeCourseConfig = courseDomains.find(d => d.category === selectedCourseDomain) || courseDomains[0];
  const activeInternshipConfig = internshipDomains.find(d => d.category === selectedInternshipDomain) || internshipDomains[0];

  // Resolve dynamic course details from database
  const getEnrichedCourses = () => {
    return activeCourseConfig.courses.map((c, index) => {
      const dbCourse = allCourses.find(item => 
        item.title.toLowerCase() === c.title.toLowerCase() ||
        item.slug === c.path.split('/').pop()
      );

      return {
        id: dbCourse?.id || `course-${index}`,
        title: dbCourse?.title || c.title,
        slug: dbCourse?.slug || c.path.split('/').pop() || "",
        path: c.path,
        description: dbCourse?.description || "Master job-oriented skills with hands-on labs and dual NACTET/IAO certifications.",
        image: dbCourse?.id === "1" ? "/pythonfull.jpg" : dbCourse?.id === "2" ? "/mernfull.jpg" : activeCourseConfig.image,
        lessons: dbCourse?.modules ? dbCourse.modules.length * 3 : 15,
        duration: dbCourse?.duration || "3 Months",
        students: dbCourse?.enrolled || (700 + (index * 150)),
        rating: 5,
        reviewsCount: dbCourse?.reviews ? dbCourse.reviews.length : 40 + (index * 15),
        trainer: dbCourse?.trainers && dbCourse.trainers.length > 0 ? dbCourse.trainers[0].name : "Senior Expert"
      };
    });
  };

  // Resolve dynamic internship details from database
  const getEnrichedInternships = () => {
    return activeInternshipConfig.courses.map((c, index) => {
      const dbIntern = allInternships.find(item => 
        item.title.toLowerCase() === c.title.toLowerCase() ||
        item.slug === c.path.split('/').pop()
      );

      return {
        id: dbIntern?.id || `intern-${index}`,
        title: dbIntern?.title || c.title,
        slug: dbIntern?.slug || c.path.split('/').pop() || "",
        path: c.path,
        description: dbIntern?.description || "Work on live enterprise deployment plans under core engineers with mock interview training.",
        image: activeInternshipConfig.image,
        lessons: dbIntern?.modules ? dbIntern.modules.length : 5,
        duration: dbIntern?.duration || "3-6 Months",
        students: dbIntern?.enrolled || (400 + (index * 120)),
        rating: 5,
        reviewsCount: dbIntern?.reviews ? dbIntern.reviews.length : 25 + (index * 8),
        trainer: dbIntern?.trainers && dbIntern.trainers.length > 0 ? dbIntern.trainers[0].name : "Industry Architect"
      };
    });
  };

  const handleCourseClick = (path: string) => {
    router.push(path);
  };

  const handleInternshipClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="w-full bg-slate-50/50 py-12 sm:py-16 md:py-20 relative overflow-hidden font-sans">
      
      {/* SECTION 1: EXPLORE OUR COURSES */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 tracking-tight mb-4">
            Explore Our <span className="text-blue-600 px-2 py-1 relative inline-block">
              Courses
              <SvgWave className="absolute bottom-[-10px] left-0 w-full" />
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mt-4">
            Transform your technical capability with Kerala&apos;s premier certified syllabus. Choose a specialized core domain below and master schema design, programming structures, or intelligent AI models.
          </p>
        </div>

        {/* Domain Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {courseDomains.map((domain) => {
            const IconComponent = domain.icon;
            const isActive = selectedCourseDomain === domain.category;
            return (
              <div
                key={domain.id}
                onClick={() => setSelectedCourseDomain(domain.category)}
                className={`group cursor-pointer relative rounded-xl border p-5 sm:p-6 transition-all duration-500 overflow-hidden flex flex-col justify-between h-[220px] sm:h-[240px] ${domain.borderColor} ${domain.bgGradient} ${domain.shadow} ${
                  isActive 
                    ? 'ring-2 ring-blue-600 ring-offset-2 scale-[1.02] border-blue-400 bg-white' 
                    : 'hover:scale-[1.01]'
                }`}
              >
                {/* Background graphic */}
                <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 sm:w-28 sm:h-28 bg-slate-100/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 text-slate-200 group-hover:text-slate-300 transition-colors duration-500`} />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-gradient-to-r ${domain.color} text-white`}>
                      {domain.courses.length} Courses
                    </span>
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-blue-600' : 'text-slate-400'}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                    {domain.category}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-medium">
                    {domain.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-blue-600 mt-4 relative z-10">
                  View Programs <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Domain Header */}
        <div className="bg-white/80 border border-slate-200/60 rounded-xl p-5 sm:p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
              {selectedCourseDomain} Learning Programs
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Currently displaying {activeCourseConfig.courses.length} specialized job-oriented tracks. Fully compliant with NACTET standards.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-blue-50/50 border border-blue-100 rounded-lg px-3 py-1.5 self-start md:self-auto">
            <Award className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-blue-800 uppercase tracking-wide">NACTET & IAO Certified</span>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {getEnrichedCourses().map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseClick(course.path)}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer h-full"
            >
              {/* Cover */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-slate-900/0"></div>
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {selectedCourseDomain}
                </span>
                <span className="absolute bottom-4 right-4 bg-blue-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {course.duration}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-600 text-xs font-bold mb-2 flex-wrap gap-2">
                    <div className="flex items-center">
                      <BookOpen className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {course.lessons} Modules
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {course.students.toLocaleString()}+ Students
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300 min-h-[48px] sm:min-h-[54px] flex items-center leading-snug">
                    {course.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2 mt-1 mb-3">
                    {course.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center mr-2">
                      <span className="text-blue-600 text-[10px] font-bold">{course.trainer.charAt(0)}</span>
                    </div>
                    <span className="text-slate-700 text-xs font-bold">{course.trainer}</span>
                  </div>
                  <div className="flex items-center bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500 mr-1" />
                    <span className="text-[10px] font-black text-amber-800">5.0</span>
                    <span className="text-slate-600 text-[9px] font-medium ml-1">({course.reviewsCount})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
              <SvgWave className="absolute bottom-[-10px] left-0 w-full" />
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium mt-4">
            Engage with professional systems inside industrial-grade sandboxes. Our specialized 3-6 months internships prepare firmware architects, software engineers, and machine learning specialists with live project capabilities.
          </p>
        </div>

        {/* Domain Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {internshipDomains.map((domain) => {
            const IconComponent = domain.icon;
            const isActive = selectedInternshipDomain === domain.category;
            return (
              <div
                key={domain.id}
                onClick={() => setSelectedInternshipDomain(domain.category)}
                className={`group cursor-pointer relative rounded-xl border p-5 sm:p-6 transition-all duration-500 overflow-hidden flex flex-col justify-between h-[220px] sm:h-[240px] ${domain.borderColor} ${domain.bgGradient} ${domain.shadow} ${
                  isActive 
                    ? 'ring-2 ring-pink-600 ring-offset-2 scale-[1.02] border-pink-400 bg-white' 
                    : 'hover:scale-[1.01]'
                }`}
              >
                {/* Background graphic */}
                <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 sm:w-28 sm:h-28 bg-slate-100/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className={`w-10 h-10 sm:w-12 sm:h-12 text-slate-200 group-hover:text-slate-300 transition-colors duration-500`} />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className={`px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-gradient-to-r ${domain.color} text-white`}>
                      {domain.courses.length} Roles
                    </span>
                    <IconComponent className={`w-5 h-5 ${isActive ? 'text-pink-600' : 'text-slate-400'}`} />
                  </div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-800 group-hover:text-pink-600 transition-colors duration-300">
                    {domain.category}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed font-medium">
                    {domain.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-bold text-pink-600 mt-4 relative z-10">
                  View Roles <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Domain Header */}
        <div className="bg-white/80 border border-slate-200/60 rounded-xl p-5 sm:p-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h4 className="text-lg sm:text-xl font-extrabold text-slate-800 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-pink-600 rounded-full"></span>
              {selectedInternshipDomain} Professional Roles
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Currently displaying {activeInternshipConfig.courses.length} specialized internship roles. Complete with double certifications.
            </p>
          </div>
          <div className="flex items-center gap-2 bg-pink-50/50 border border-pink-100 rounded-lg px-3 py-1.5 self-start md:self-auto">
            <Award className="w-4 h-4 text-pink-600" />
            <span className="text-xs font-bold text-pink-800 uppercase tracking-wide">Double Certification Program</span>
          </div>
        </div>

        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {getEnrichedInternships().map((internship) => (
            <div
              key={internship.id}
              onClick={() => handleInternshipClick(internship.path)}
              className="group bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-400 cursor-pointer h-full"
            >
              {/* Cover */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <img
                  src={internship.image}
                  alt={internship.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-slate-900/0"></div>
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm shadow-sm text-slate-800 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {selectedInternshipDomain}
                </span>
                <span className="absolute bottom-4 right-4 bg-pink-600/90 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {internship.duration}
                </span>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-slate-600 text-xs font-bold mb-2 flex-wrap gap-2">
                    <div className="flex items-center">
                      <BookOpen className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {internship.lessons} Core Modules
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3.5 h-3.5 mr-1 text-slate-400" />
                      {internship.students.toLocaleString()}+ Enrolled
                    </div>
                  </div>

                  <h3 className="font-extrabold text-base sm:text-lg text-slate-800 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300 min-h-[48px] sm:min-h-[54px] flex items-center leading-snug">
                    {internship.title} Internship
                  </h3>
                  
                  <p className="text-xs text-slate-600 leading-relaxed font-medium line-clamp-2 mt-1 mb-3">
                    {internship.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center">
                    <div className="w-7 h-7 rounded-full bg-pink-50 border border-pink-100 flex items-center justify-center mr-2">
                      <span className="text-pink-600 text-[10px] font-bold">{internship.trainer.charAt(0)}</span>
                    </div>
                    <span className="text-slate-700 text-xs font-bold">{internship.trainer}</span>
                  </div>
                  <div className="flex items-center bg-amber-50 px-2 py-0.5 rounded border border-amber-100">
                    <Star className="w-3 h-3 text-amber-500 fill-amber-500 mr-1" />
                    <span className="text-[10px] font-black text-amber-800">5.0</span>
                    <span className="text-slate-600 text-[9px] font-medium ml-1">({internship.reviewsCount})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};

export default FeaturedCourses;