/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from 'react';
import {  Users, Search } from 'lucide-react';
import coursesData from '../app/coursescategory.json';
import SvgWave from './Svgwave';
import { useRouter } from 'next/navigation';

type Props = {
  title: string;
  showSearch?: boolean; // New prop to control search bar visibility
};

const FeaturedCourses: React.FC<Props> = ({ title, showSearch = false }) => {
  const [activeCategory] = useState<string>("Software Courses");
  const [showAllCourses, setShowAllCourses] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const { courses } = coursesData;
  const router = useRouter();
   

  // Filter courses by active category and search query
  const filteredCourses = courses.filter(course => {
    const matchesCategory = activeCategory === "All Courses" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (showSearch ? matchesSearch : true);
  });
console.log(filteredCourses);

  React.useEffect(() => {
    setShowAllCourses(false);
  }, [activeCategory, searchQuery]);

  const displayedCourses = showAllCourses
    ? filteredCourses
    : filteredCourses.slice(0, 6);

  const handleRoute = (path: string): void => {
    router.push(`courses/${path}`);
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? "text-yellow-400" : "text-gray-300"}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="w-[100%] px-[6%] py-8 bg-gray-50 mb-[2rem]">
      {/* Header section with title and category tabs */}
      <div className="flex items-center justify-between mb-8 flex-wrap">
        <h2 className="text-[34px] font-bold text-gray-800">
          Our <span className="text-blue-600 px-2 py-1 relative">{title}
            <SvgWave className="" />
          </span> Courses
        </h2>

        <div className="flex gap-4 mt-4 sm:mt-7 flex-wrap my-[2rem]">
          <button className={`px-3 py-1 text-[16px] transition-colors duration-200 hover:bg-blue-100 rounded cursor-pointer bg-blue-100 text-blue-600 font-medium`}>
            Software Courses
          </button>
        </div>
      </div>

      {/* Search bar (conditionally rendered) */}
     {showSearch && (
  <div className="mb-8 w-full max-w-2xl mx-auto">
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search courses or instructors..."
        className="block w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-black placeholder-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base
                  transition-all duration-200 shadow-sm hover:border-gray-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery && (
        <button
          onClick={() => setSearchQuery("")}
          className="absolute inset-y-0 right-0 pr-3 flex items-center"
        >
          <svg
            className="h-5 w-5 text-gray-500 hover:text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  </div>
)}

      {/* Course grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedCourses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 hover:cursor-pointer" 
            onClick={()=> handleRoute(course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}>
            {/* Course image */}
            <div className="relative">
              <img
                src={`/${course.image}`}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-4 left-4 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {course.category}
              </span>
            </div>

            {/* Course details */}
            <div className="p-4">
              <div className="flex items-center justify-between text-gray-500 text-sm mb-2 flex-wrap gap-2">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  {course.lessons} Lessons
                </div>

                {/* <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div> */}

                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students} Students
                </div>
              </div>

              <h3 className="font-bold text-lg mb-2 text-gray-800 line-clamp-2">{course.title}</h3>

              <div className="flex items-center mb-4">
                {renderStars(course.rating)}
                <span className="text-gray-500 text-sm ml-1">({course.reviews})</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                    <span className="text-blue-500 text-xs">{course.instructor.charAt(0)}</span>
                  </div>
                  <span className="text-blue-600 text-sm">{course.instructor}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show more button or no courses message */}
      {/* {filteredCourses.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">No courses found {searchQuery && `for "${searchQuery}"`}</p>
        </div>
      ) : (
        filteredCourses.length > 6 && !showAllCourses && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllCourses(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 hover:cursor-pointer"
            >
              Show More Courses
            </button>
          </div>
        )
      )} */}
    </div>
  );
};

export default FeaturedCourses;