'use client'
import { FC, useState, useEffect, JSX } from 'react';
import SvgWave from './Svgwave';

// Define types for category data
interface Category {
  id: number;
  name: string;
  icon: JSX.Element;
  courses: number;
}

const BrowseCategories: FC = () => {
  // State for the rotating animation
  const [rotation, setRotation] = useState<number>(0);

  // Effect for rotating the green shape
  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setRotation((prev: number) => (prev + 0.2) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  // Category data with SVG icons
  const categories: Category[] = [
    {
      id: 1,
      name: 'Software Engineering',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26 16H16V26H26V16ZM30 16V26H36V16H30ZM26 32V26H16V32H26ZM30 32H36V26H30V32ZM10 8H36V32H10V8ZM7 5V35H39V5H7Z"
            stroke="#0066CC" strokeWidth="1.5" fill="none" />
        </svg>
      ),
      courses: 6
    },
    {
      id: 2,
      name: 'Hardware Engineering',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 12H8C6.9 12 6.01 12.9 6.01 14L6 26C6 27.1 6.9 28 8 28H32C33.1 28 34 27.1 34 26V14C34 12.9 33.1 12 32 12ZM32 26H8V16L20 21L32 16V26ZM20 19L8 14H32L20 19Z"
            stroke="#0066CC" strokeWidth="1.5" fill="none" />
        </svg>
      ),
      courses: 9
    },
    {
      id: 3,
      name: 'Networking & Security',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 29L19 17L27 25L37 15M37 15V22M37 15H30"
            stroke="#0066CC" strokeWidth="1.8" fill="none" />
          <circle cx="7" cy="29" r="2" stroke="#0066CC" strokeWidth="1.5" fill="white" />
          <circle cx="19" cy="17" r="2" stroke="#0066CC" strokeWidth="1.5" fill="white" />
          <circle cx="27" cy="25" r="2" stroke="#0066CC" strokeWidth="1.5" fill="white" />
          <circle cx="37" cy="15" r="2" stroke="#0066CC" strokeWidth="1.5" fill="white" />
        </svg>
      ),
      courses: 8
    },
    {
      id: 4,
      name: ' Creative & Digital Skills',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="7" y="7" width="26" height="26" rx="1" stroke="#0066CC" strokeWidth="1.5" fill="none" />
          <path d="M15 28H27M15 20H27M15 12H27" stroke="#0066CC" strokeWidth="1.5" />
        </svg>
      ),
      courses: 13
    },
    {
      id: 5,
      name: ' Future Tech',
      icon: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="15" stroke="#0066CC" strokeWidth="1.5" fill="none" />
          <path d="M20 10V20M20 20H30" stroke="#0066CC" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="2" stroke="#0066CC" strokeWidth="1.5" fill="white" />
        </svg>
      ),
      courses: 5
    }
  ];

  return (
    <div className="relative w-[100%] flex wrap max-lg:flex-col justify-between bg-white py-[10rem] px-[6%] overflow-hidden">
      {/* Rotating green swirl at top-left */}
      <div
        className="absolute left-0 top-0 w-24 h-24 opacity-80"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 0.05s linear'
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M40,10 C60,-10 90,20 90,50 C90,80 60,100 30,90 C10,80 0,60 10,40 C20,20 30,20 40,10 Z" fill="#9CFFC9" />
        </svg>
      </div>

      {/* Pink star at top-right */}
      <div className="absolute right-20 top-24 w-12 h-12 opacity-80">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,5 L60,35 L95,35 L65,55 L75,90 L50,70 L25,90 L35,55 L5,35 L40,35 Z"
            stroke="#FFD1DC"
            strokeWidth="2.5"
            fill="none" />
        </svg>
      </div>

      <section className="ONe w-[40%] max-lg:w-[100%] h-[100%] flex flex-col justify-center items-start">
        {/* Blue tag line */}
        <div className="inline-block bg-blue-50 text-blue-600 text-[16px] font-medium px-4 py-1 rounded mb-4 component">
          Unique online courses
        </div>

        {/* Main heading with underline */}
        <div className="mb-4 relative">
          <h2 className="component text-[36px] font-bold text-gray-800">
            Browse By <span className="text-blue-600 relative">
              Categories <SvgWave className=""/>
            </span>
          </h2>
        </div>

        {/* Description text */}
        <div className="text-gray-600 mb-8 max-w-lg text-[15px] leading-[30px] component">
          At Matt Engineering Solutions, our courses are thoughtfully organized into categories that align with
           real-world career tracks and industry needs. Whether youre passionate about software, intrigued by cutting-edge hardware, or eager to 
          explore emerging technologies, theres a clear path to follow — and a future to build.
        </div>

        {/* View all categories button */}
        <div className="mb-12">
          <button className= "component bg-blue-600 text-white px-6 py-3 rounded font-medium flex items-center hover:bg-blue-700 transition-colors text-[14px] duration-[0.5s] cursor-pointer">
            ALL CATEGORIES
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* Content container */}
      <div className="w-[55%] max-lg:w-[100%]">
        {/* Wavy line decoration */}
        <div className="absolute right-1/4 top-1/3 opacity-40">
          <svg width="200" height="30" viewBox="0 0 200 30" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,15 Q25,0 50,15 Q75,30 100,15 Q125,0 150,15 Q175,30 200,15"
              stroke="#4FD1C5"
              strokeWidth="2"
              fill="none" />
          </svg>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 -center">
          {categories.map((category) => (
            <div key={category.id} className="bg-gray-50 rounded-lg p-2 hover:shadow-md transition-shadow flex flex-col items-center">
              <div className="bg-white rounded-full mb-4 shadow-sm flex items-center justify-center w-20 h-20 duration-[0.5s] hover:bg-neutral-300 cursor-pointer component">
                {category.icon}
              </div>
              <h3 className="component text-[16px] font-bold text-gray-800 mb-2">{category.name}</h3>
              <p className="component text-gray-500 text-[15px]">{category.courses.toString().padStart(2, '0')} Courses</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom-left grid pattern */}
      {/* <div className="absolute left-0 bottom-0 w-16 opacity-20">
        <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
          <g stroke="#4FD1C5" strokeWidth="1" fill="none">
            <line x1="0" y1="10" x2="80" y2="10" />
            <line x1="0" y1="20" x2="80" y2="20" />
            <line x1="0" y1="30" x2="80" y2="30" />
            <line x1="0" y1="40" x2="80" y2="40" />
            <line x1="0" y1="50" x2="80" y2="50" />
            <line x1="0" y1="60" x2="80" y2="60" />
            <line x1="0" y1="70" x2="80" y2="70" />
            <line x1="10" y1="0" x2="10" y2="80" />
            <line x1="20" y1="0" x2="20" y2="80" />
            <line x1="30" y1="0" x2="30" y2="80" />
            <line x1="40" y1="0" x2="40" y2="80" />
            <line x1="50" y1="0" x2="50" y2="80" />
            <line x1="60" y1="0" x2="60" y2="80" />
            <line x1="70" y1="0" x2="70" y2="80" />
          </g>
        </svg>
      </div> */}
    </div>
  );
};

export default BrowseCategories;