/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useState, useMemo } from 'react';
import { Search, Filter, ChevronDown, Star, Clock, Users, BookOpen, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getAllCourses } from '@/lib/course-data';

interface DisplayCourse {
  id: string;
  slug: string;
  title: string;
  institution: string;
  instructor: string;
  description: string;
  image: string;
  level: 'Introductory' | 'Intermediate' | 'Advanced';
  subject: string;
  duration: string;
  students: string;
  rating: number;
  reviews: number;
  price: string;
  isPaid: boolean;
  certificateAvailable: boolean;
}

export default function AllCourses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedSubject, setSelectedSubject] = useState('All');
  const [selectedPrice, setSelectedPrice] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('Enrollment');

  // Load and map MATT ACADEMY's premium engineering courses dynamically
  const displayCourses: DisplayCourse[] = useMemo(() => {
    const rawCourses = getAllCourses();
    return rawCourses.map((course) => {
      // Choose beautiful premium tech images dynamically depending on course content
      let imageUrl = "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400"; // Default hardware
      
      const slugLower = course.slug.toLowerCase();
      if (slugLower.includes("fullstack") || slugLower.includes("stack") || slugLower.includes("mern")) {
        imageUrl = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400";
      } else if (slugLower.includes("python") || slugLower.includes("programming") || slugLower.includes("c-") || slugLower.includes("java")) {
        imageUrl = "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400";
      } else if (slugLower.includes("robot") || slugLower.includes("drone")) {
        imageUrl = "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400";
      } else if (slugLower.includes("design") || slugLower.includes("pcb")) {
        imageUrl = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400";
      } else if (slugLower.includes("data") || slugLower.includes("power") || slugLower.includes("learning") || slugLower.includes("intelligence")) {
        imageUrl = "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400";
      }

      // Determine technical subjects
      let subject = "Hardware & Embedded Systems";
      if (
        slugLower.includes("stack") || 
        slugLower.includes("programming") || 
        slugLower.includes("web") || 
        slugLower.includes("development") || 
        slugLower.includes("marketing")
      ) {
        subject = "Software & Web Development";
      } else if (
        slugLower.includes("data") || 
        slugLower.includes("power") || 
        slugLower.includes("learning") || 
        slugLower.includes("intelligence") || 
        slugLower.includes("rpa")
      ) {
        subject = "Data Science & AI";
      }

      // Determine level
      let level: 'Introductory' | 'Intermediate' | 'Advanced' = 'Intermediate';
      if (slugLower.includes("basic") || slugLower.includes("programming") || slugLower.includes("c-")) {
        level = 'Introductory';
      } else if (slugLower.includes("advanced") || slugLower.includes("system") || slugLower.includes("hdi") || slugLower.includes("aerospace")) {
        level = 'Advanced';
      }

      const trainerName = course.trainers && course.trainers.length > 0
        ? course.trainers[0].name
        : "Senior Tech Consultant";

      return {
        id: course.id,
        slug: course.slug,
        title: course.title,
        institution: "MATT ACADEMY",
        instructor: trainerName,
        description: course.description,
        image: imageUrl,
        level: level,
        subject: subject,
        duration: course.duration,
        students: course.enrolled ? course.enrolled.toLocaleString() : "450",
        rating: 4.8,
        reviews: Math.floor((course.enrolled || 120) * 0.15) || 28,
        price: course.admissionFee ? `₹${parseInt(course.admissionFee).toLocaleString()}` : "Free",
        isPaid: !!course.admissionFee && parseInt(course.admissionFee) > 0,
        certificateAvailable: true
      };
    });
  }, []);

  const filteredCourses = useMemo(() => {
    return displayCourses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;
      const matchesSubject = selectedSubject === 'All' || course.subject === selectedSubject;
      const matchesPrice = selectedPrice === 'All' || 
                          (selectedPrice === 'Free' && !course.isPaid) ||
                          (selectedPrice === 'Paid' && course.isPaid);
      
      return matchesSearch && matchesLevel && matchesSubject && matchesPrice;
    }).sort((a, b) => {
      if (sortBy === 'Rating') return b.rating - a.rating;
      if (sortBy === 'Enrollment') {
        return parseInt(b.students.replace(/,/g, '')) - parseInt(a.students.replace(/,/g, ''));
      }
      return 0; // Most Relevant / Newest (as defined in dataset)
    });
  }, [displayCourses, searchQuery, selectedLevel, selectedSubject, selectedPrice, sortBy]);

  const subjects = ['All', 'Hardware & Embedded Systems', 'Software & Web Development', 'Data Science & AI'];
  const levels = ['All', 'Introductory', 'Intermediate', 'Advanced'];
  const priceOptions = ['All', 'Free', 'Paid'];
  const sortOptions = ['Most Relevant', 'Rating', 'Enrollment'];

  const coursesPerPage = 6;
  const totalPages = Math.max(1, Math.ceil(filteredCourses.length / coursesPerPage));
  
  // Reset page when filters change to avoid empty views
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedLevel, selectedSubject, selectedPrice, sortBy]);

  const paginatedCourses = useMemo(() => {
    const startIndex = (currentPage - 1) * coursesPerPage;
    return filteredCourses.slice(startIndex, startIndex + coursesPerPage);
  }, [filteredCourses, currentPage]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            Find Your Professional Engineering Path
          </h1>
          <p className="text-xl max-w-2xl mx-auto text-blue-100 leading-relaxed">
            Acquire certified hands-on skills in Robotics, Embedded Systems, PCB Designing, and Web Technologies under industry mentors.
          </p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search courses, modules, skills or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-slate-700 font-medium"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex w-full md:w-auto items-center justify-center px-6 py-3.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-bold shadow-lg shadow-blue-600/20"
            >
              <Filter className="h-5 w-5 mr-2" />
              <span>{showFilters ? 'Hide Filters' : 'Show Filters'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Filters Sidebar */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-72 flex-shrink-0`}>
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm sticky top-8 space-y-8">
              <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-800">Filter Courses</h3>
                <button 
                  onClick={() => {
                    setSelectedLevel('All');
                    setSelectedSubject('All');
                    setSelectedPrice('All');
                    setSearchQuery('');
                  }}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800"
                >
                  Reset All
                </button>
              </div>
              
              {/* Level Filter */}
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3">Skill Level</h4>
                <div className="flex flex-wrap gap-2">
                  {levels.map(level => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        selectedLevel === level 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject Filter */}
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3">Category</h4>
                <div className="flex flex-col gap-2">
                  {subjects.map(subject => (
                    <button
                      key={subject}
                      onClick={() => setSelectedSubject(subject)}
                      className={`text-left px-3 py-2 text-xs font-semibold rounded-lg border transition-all ${
                        selectedSubject === subject 
                          ? 'bg-blue-50 text-blue-700 border-blue-200' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {subject}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="text-sm font-bold text-slate-800 mb-3">Enrolment Type</h4>
                <div className="flex gap-2">
                  {priceOptions.map(price => (
                    <button
                      key={price}
                      onClick={() => setSelectedPrice(price)}
                      className={`flex-1 px-3 py-1.5 text-xs font-semibold rounded-lg border text-center transition-all ${
                        selectedPrice === price 
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/10' 
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {price}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Courses List */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-2xl border border-slate-200/80 p-4 mb-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  {filteredCourses.length} {filteredCourses.length === 1 ? 'Program' : 'Programs'} Found
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 bg-white focus:ring-2 focus:ring-blue-500"
                >
                  {sortOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Course Grid */}
            {paginatedCourses.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {paginatedCourses.map(course => (
                  <div 
                    key={course.id} 
                    className="bg-white rounded-3xl border border-slate-200/80 hover:border-blue-200/60 shadow-md hover:shadow-xl hover:shadow-blue-50/20 transition-all duration-300 overflow-hidden flex flex-col group"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-blue-700 bg-white/90 backdrop-blur-sm px-2.5 py-1.5 rounded-lg shadow-sm border border-white/20">
                          {course.subject}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                          {course.institution}
                        </span>
                        <div className="flex items-center text-xs font-bold text-amber-500">
                          <Star className="h-4.5 w-4.5 text-amber-400 fill-current mr-1" />
                          <span>{course.rating}</span>
                          <span className="text-slate-400 font-medium ml-1">({course.reviews})</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-200 leading-snug line-clamp-1">
                        {course.title}
                      </h3>
                      
                      <p className="text-xs text-slate-500 mb-4 line-clamp-2 leading-relaxed">
                        {course.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-xs font-semibold text-slate-500 mb-6 mt-auto">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-slate-400" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4 text-slate-400" />
                          <span>{course.students} students</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                        <div>
                          <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                            Admission
                          </span>
                          <span className="text-base font-extrabold text-slate-800">
                            {course.price}
                          </span>
                        </div>
                        <Link 
                          href={`/courses/${course.slug}`}
                          className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-blue-600/10 group-hover:scale-102"
                        >
                          <span>Explore Details</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center shadow-sm">
                <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-slate-800 mb-1">No programs found</h3>
                <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6 leading-relaxed">
                  We couldn&apos;t find any programs matching your filters. Try resetting the criteria.
                </p>
                <button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedLevel('All');
                    setSelectedSubject('All');
                    setSelectedPrice('All');
                  }}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl transition-colors shadow-md shadow-blue-600/10"
                >
                  Reset All Filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredCourses.length > coursesPerPage && (
              <div className="mt-12 flex items-center justify-center">
                <nav className="flex items-center gap-1 bg-white border border-slate-200 p-1.5 rounded-xl shadow-sm">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg hover:bg-slate-50 text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent"
                  >
                    <ChevronDown className="h-5 w-5 rotate-90" />
                  </button>
                  
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-9 h-9 text-xs font-bold rounded-lg transition-all ${
                        currentPage === i + 1 
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-600/10' 
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg hover:bg-slate-50 text-slate-500 disabled:opacity-40 disabled:hover:bg-transparent"
                  >
                    <ChevronDown className="h-5 w-5 -rotate-90" />
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}