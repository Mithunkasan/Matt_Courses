/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client';

import React from 'react';
import { TiArrowRight } from "react-icons/ti";
import { IoShareSocialOutline } from "react-icons/io5";
// import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
// import { ImInsertTemplate } from 'react-icons/im';
// import BecomeInstructor from './BecomeInstructor';
import { LuUsersRound } from "react-icons/lu";
import SvgWave from './Svgwave';
import { FaStar } from "react-icons/fa6";


type instructors = {
  id: string;
  name: string;
  profession: string;
  image: string;
  bgColor: string;
  students: string;
  rating: string;
}

const Topmentors = () => {
  const instructors: instructors[] = [
    {
      id: "1",
      name: "Mohammed Shaheer",
      profession: "Managing Director",
      image: "/instructor01.png",
      bgColor: 'bg-[#64df59]',
      students: '1K+',
      rating: '(5.0)'
    },
    {
      id: "2",
      name: "Praveen Mathias",
      profession: "Administrator",
      image: "/instructor02.png",
      bgColor: 'bg-[#59c7df]',
      students: '1K+',
      rating: '(5.0)'
    },
    {
      id: "3",
      name: "Mohamed Azharuddin",
      profession: "Project Manager",
      image: "/instructor03.png",
      bgColor: 'bg-[#eadb52]',
      students: '1K+',
      rating: '(5.0)'
    },
    {
      id: "4",
      name: "Aneesh P kunjappy",
      profession: "Software Head",
      image: "/instructor04.png",
      bgColor: 'bg-[#59dfaf]',
      students: '1K+',
      rating: '(5.0)'
    }
  ]

  return (
    <section className='px-[6%] w-full py-[7rem] bg-[#f1f2f8] relative'>
      <div className='w-full flex justify-between items-center max-md:flex-col max-md:justify-center gap-y-[2rem]'>
        <div className='flex flex-col items-start max-sm:items-center justify-center'>
          <p className="text-center text-blue-500 p-[0.3rem] text-[16px] font-[600] bg-[#E7EFFC] mb-4">
            Our Qualified People Matter
          </p>
          <h2 className="text-[36px] font-bold inline-block text-[#082A5E]">
            Top <span className="text-blue-500 relative">Class <SvgWave className="wave-animation" /> </span> Mentors
          </h2>
        </div>
        <div>
          <button className='flex items-center gap-2 text-[15px] text-blue-600 border border-blue-600 px-4 py-3 text-sm font-semibold rounded cursor-pointer hover:bg-blue-600 hover:text-white duration-500'>
            ALL INSTRUCTORS <TiArrowRight className='text-xl' />
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className='flex justify-between max-sm:justify-center flex-wrap gap-y-[2rem] w-full items-center mt-[3rem]'>
        {
          instructors.map((item) => (
            <div className='border-[1px] border-[#D7DCE3] basis-[24.5%] max-lg:basis-[32%] max-md:basis-[47%] max-sm:basis-[80%] bg-white pt-[1.5rem] flex flex-col items-center justify-center rounded-[10px] shadow-[0px_0px_20px_rgba(0,0,0,0.06)] relative' key={item.id}>
              <button className='absolute right-[10px] top-[10px] shareIcon duration-500 rounded-full bg-[#E7EFFC] text-blue-400 p-2 cursor-pointer hover:bg-blue-500 hover:text-white'>
                <IoShareSocialOutline className='font-bold text-[20px]' />
              </button>
              <section className={`relative overflow-hidden text-center rounded-[50%] h-[200px] w-[200px] mb-[0.5rem] ${item.bgColor}`}>
                <img src={item.image} className=' absolute bottom-[0] w-[100%] h-[95%]'></img>
              </section>
              <h1 className='text-[22px] text-[#082A5E] font-semibold cursor-pointer hover:text-blue-500 duration-[0.5s]'>
                {item.name}
              </h1>
              <p className='text-[15px] text-[#39557E]'>
                {item.profession}
              </p>
              <div className='border-[1px]  text-[#39557E] mt-[1rem] border-[#D7DCE3] text-[16px] w-[100%] flex max-xl:flex-col justify-between items-center p-[1rem]'>
                <div className='flex items-center text-[16px]'>
                  <LuUsersRound /> &ensp; {item.students}&ensp;Students
                </div>
                <div className='flex items-center text-[16px]'>
                  <FaStar className='text-yellow-400' /> &ensp;{item.rating}
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Topmentors