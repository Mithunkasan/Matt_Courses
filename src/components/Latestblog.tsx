/* eslint-disable @next/next/no-img-element */
'use client'
import { useState, useEffect } from 'react';
import SvgWave from './Svgwave';

// Define interface for blog post data
interface BlogPost {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
}

const LatestBlog: React.FC = () => {
  // Data for blog cards
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'SOFTWARE',
      title: 'Full Stack GraphQL With Next.js And Vercel',
      author: 'Matt',
      date: 'Jan 22, 2025',
      image: '/blog1.jpg'
    },
    {
      id: 2,
      category: 'HARDWARE',
      title: 'Bridging Hardware with Cloud',
      author: 'Matt',
      date: 'Feb 14, 2025',
      image: '/blog2.jpg'
    },
    {
      id: 3,
      category: 'RESEARCH',
      title: 'Insights from Emerging Research',
      author: 'Matt',
      date: 'Mar 03, 2025',
      image: '/blog3.jpg'
    }
  ];

  // State for managing hover effects
  const [, setIsHeadingHovered] = useState<boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [rotation, setRotation] = useState<number>(0);
  
  // Effect for rotating the green shape
  useEffect(() => {
    const interval: NodeJS.Timeout = setInterval(() => {
      setRotation((prev: number) => (prev + 0.2) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  // Event handlers with proper typing
  const handleHeadingMouseEnter = (): void => {
    setIsHeadingHovered(true);
  };

  const handleHeadingMouseLeave = (): void => {
    setIsHeadingHovered(false);
  };

  const handleCardMouseEnter = (id: number): void => {
    setHoveredCard(id);
  };

  const handleCardMouseLeave = (): void => {
    setHoveredCard(null);
  };

  return (
    <div className="relative w-full py-[6rem] px-[6%] overflow-hidden items-center flex flex-col justify-center bg-[#F5F7FB]">
      {/* Logo on the left */}
      <div className="absolute left-8 top-24">
        <svg width="90" height="50" viewBox="0 0 90 50" xmlns="http://www.w3.org/2000/svg">
          <path d="M10,10 C30,5 40,15 60,10 M15,20 C35,15 45,25 65,20 M20,30 C40,25 50,35 70,30" 
                stroke="#FF9966" 
                strokeWidth="6" 
                fill="none" 
                strokeLinecap="round" />
        </svg>
      </div>
      
      {/* Green rotating shape in background */}
      <div 
        className="absolute right-8 top-2/3 w-24 h-24 opacity-70 z-[-1] "
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: 'transform 1s linear'
        }}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M40,10 C60,-10 90,20 90,50 C90,80 60,100 30,90 C10,80 0,60 10,40 C20,20 30,20 40,10 Z" fill="#8AE7B1" />
        </svg>
      </div>
      
      {/* Top header text */}
      <div className="component text-center text-blue-500 p-[0.3rem] text-[16px] font-[600] bg-[#E7EFFC] mb-4">Always Smart To Hear News</div>
      
      {/* Main heading with animated underline */}
      <div className="text-center mb-3 relative">
        <h2 
          className="component text-[36px] font-bold inline-block text-[#082A5E]"
          onMouseEnter={handleHeadingMouseEnter}
          onMouseLeave={handleHeadingMouseLeave}
        >
          Latest <span className="text-blue-500 relative"><SvgWave className=""/> News</span> & Blog
        </h2>
      </div>
      
      {/* Plumbing text */}
      <div className="component text-center text-[#39557E] my-[20px] max-w-3xl mx-auto font-[400] leading-[1.75] text-[16px]">
        At Matt, we share expert knowledge, tech updates, and success stories that inspire and inform. Whether youre a developer, business owner, or tech enthusiast — our blogs keep you ahead in the digital world.
      </div>
      
      {/* Blog cards container */}
      <div className="flex flex-wrap justify-evenly gap-6 w-[100%]">
        {blogPosts.map((post: BlogPost) => (
          <div key={post.id} className="component bg-white rounded shadow-md overflow-hidden w-full sm:w-96 md:w-80 lg:w-[31%] xl:w-90 flex flex-col ">
            {/* Image container with hover effect */}
            <div 
              className="relative overflow-hidden h-48"
              onMouseEnter={() => handleCardMouseEnter(post.id)}
              onMouseLeave={handleCardMouseLeave}
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              
              {/* Diagonal white shade animation */}
              {hoveredCard === post.id && (
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-70"
                  style={{
                    animation: 'diagonalSweep 1s ease-out forwards'
                  }}
                />
              )}
            </div>
            
            {/* Card content */}
            <div className="p-5 flex-grow">
              <div className="bg-blue-50 text-blue-600 text-xs font-semibold py-2 px-3 rounded-[15px] inline-block mb-3 cursor-pointer duration-[0.8s] hover:bg-blue-600 hover:text-neutral-200">
                {post.category}
              </div>
              
              <h3 className="text-[24px] font-bold mb-4 text-[#082A5E] hover:text-blue-500 transition-colors cursor-pointer">
                {post.title}
              </h3>
              
              <div className="flex items-center text-gray-500 text-[15px] justify-between">
                <div className="flex items-center mr-4 cursor-pointer">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
                  </svg>
                  By {post.author}
                </div>
                
                <div className="flex items-center text-[15px]">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
                  </svg>
                  {post.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* CSS for animations */}
      <style jsx>{`
        @keyframes diagonalSweep {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(100%) translateY(100%);
          }
        }
      `}</style>
      
      {/* Scroll to top button that appears in original design */}
      {/* <div className="fixed bottom-6 right-6 bg-blue-600 text-white rounded p-2 shadow-lg hover:bg-blue-700 transition-colors z-50">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </div> */}
    </div>
  );
};

export default LatestBlog;