/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import SvgWave from './Svgwave'
import { TiArrowRight } from 'react-icons/ti'
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  author: string;
  date: string;
  image: string;
  location: string;
}

const Upcomingevents = () => {

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      category: 'FINANCE',
      title: 'when aeunkno printer took galley of scrambled',
      author: 'Eduvalt',
      date: 'June 22, 2023',
      image: '/blog1.jpg',
      location: 'Italy'
    },
    {
      id: 2,
      category: 'BUSINESS',
      title: 'Full Stack GraphQL With Next.js And Vercel',
      author: 'Eduvalt',
      date: 'June 22, 2023',
      image: '/blog2.jpg',
      location: 'Kenya'
    },
    {
      id: 3,
      category: 'DATA SCIENCE',
      title: 'What Leonardo Teach us About Web Design',
      author: 'Eduvalt',
      date: 'June 22, 2023',
      image: '/blog3.jpg',
      location: 'USA'
    }
  ];

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const handleCardMouseEnter = (id: number): void => {
    setHoveredCard(id);
  };

  const handleCardMouseLeave = (): void => {
    setHoveredCard(null);
  };

  return (
    <section className='px-[6%] bg-white py-[6rem]'>
      <div className='w-full flex justify-between items-center max-lg:flex-col gap-y-[1rem]'>
        <div className='flex flex-col items-start justify-center'>
          <p className="text-center text-blue-500 p-[0.3rem] text-[16px] font-[600] bg-[#E7EFFC] mb-4">
            Featured Events
          </p>
          <h2 className="text-[36px] font-bold inline-block text-[#082A5E]">
            Upcoming <span className="text-blue-500 relative">Events <SvgWave /> </span>
          </h2>
        </div>
        <div>
          <button className='flex items-center gap-2 text-blue-600 border border-blue-600 px-4 py-3 text-sm font-semibold rounded cursor-pointer hover:bg-blue-600 hover:text-white duration-500'>
            OUR ALL EVENTS <TiArrowRight className='text-xl' />
          </button>
        </div>
      </div>
      {/* Blog cards container */}
      <div className="flex flex-wrap justify-between max-md:justify-center gap-6 w-[100%] mt-[2rem]">
        {blogPosts.map((post: BlogPost) => (
          <div key={post.id} className="bg-white rounded shadow-md overflow-hidden w-full sm:w-96 md:w-80 lg:w-[31%] xl:w-90 flex flex-col h-[380px] justify-between">
            {/* Image container with hover effect */}
            <div
              className="relative overflow-hidden h-[65%]"
              onMouseEnter={() => handleCardMouseEnter(post.id)}
              onMouseLeave={handleCardMouseLeave}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-[100%] h-[100%] object-cover transition-transform duration-300 hover:scale-105 bg-[#1363df]"
              />

              <div className="absolute left-[10] top-[10px] bg-blue-600 text-white text-[14px] font-semibold py-2 px-3 rounded-[15px] duration-[0.8s] hover:bg-blue-600 hover:text-neutral-200 flex items-center justify-center gap-[10px]">
                {post.date} <FaRegCalendarAlt />
              </div>

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
            <div className="h-[35%] p-[1rem]">
              <h3 className="text-[20px] font-bold text-[#082A5E] hover:text-blue-500 transition-colors cursor-pointer">
                {post.title}
              </h3>
              <p className='text-[#5A7093] text-[15px] flex items-center mt-[5px]'> <IoLocationOutline />{post.location}</p>
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
    </section>
  )
}

export default Upcomingevents