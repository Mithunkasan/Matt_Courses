// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable jsx-a11y/alt-text */
// import { instructors } from '@/types/type';
// import React from 'react'
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa6'
// import { IoShareSocialOutline } from 'react-icons/io5'

// type props = {
//   instructors : instructors[];
// }

// const CardInstructor:React.FC<props> = ({instructors}) => {
//   return (
//     <div className='flex justify-between max-sm:justify-center flex-wrap w-full items-center gap-y-[10rem] pt-[3.5rem]'>
//       {
//         instructors.map((item) => (
//           <div key={item.id} className='component mainDiv basis-[18%] max-lg:basis-[40%] max-md:basis-[48%] max-sm:basis-[100%] group relative'>
//             <div className={item.border}>
//               <img src={item.image} className='absolute h-[100%] w-[120%] bottom-0' />

//               {/* Social Icons - hidden initially, revealed on hover */}
//               <div className='iconBox flex flex-col gap-[10px] items-center justify-between absolute right-0 text-white text-[2.1rem] bottom-[-100%] opacity-[0] group-hover:opacity-[1] group-hover:bottom-0 duration-500'>
//                 <FaTwitter className='rounded-full duration-500 p-2 text-white bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500' />
//                 <FaFacebookF className='rounded-full duration-500 p-2 text-white bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500' />
//                 <FaLinkedinIn className='rounded-full duration-500 p-2 text-white bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500' />
//                 <FaInstagram className='rounded-full duration-500 p-2 text-white bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500' />
//               </div>
//             </div>

//             <div className='subTwo flex justify-between items-center mt-2'>
//               <div>
//                 <p className='text-[#5A7093] text-[14px] font-medium'>
//                   {item.profession}
//                 </p>
//                 <h1 className='text-[#082A5E] text-[17px] font-semibold cursor-pointer hover:text-blue-600'>
//                   {item.name}
//                 </h1>
//               </div>
//               <button className='shareIcon duration-500 rounded-full bg-[#E7EFFC] text-blue-400 p-2 cursor-pointer hover:bg-blue-500 hover:text-white'>
//                 <IoShareSocialOutline className='font-bold text-[20px]' />
//               </button>
//             </div>
//           </div>
//         ))
//       }

//     </div>
//   )
// }

// export default CardInstructor;

"use client"

import type React from "react"
// Removed unused social media icon imports
// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6"
// import { IoShareSocialOutline } from "react-icons/io5"
import type { instructors } from "@/types/type" // Using your specified type path
import Image from "next/image"

type props = {
  instructors: instructors[]
}

const CardInstructor: React.FC<props> = ({ instructors }) => {
  return (
    <div className="flex justify-center lg:justify-between flex-wrap w-full items-center gap-y-16 sm:gap-y-20 md:gap-y-24 lg:gap-y-32 xl:gap-y-40">
      {instructors.map((item, index) => (
        <div
          key={item.id}
          className="component mainDiv group relative w-full xs:w-[90%] sm:w-[48%] md:w-[45%] lg:w-[32%] xl:w-[18%] max-w-[320px] sm:max-w-none mx-auto sm:mx-0"
        >
          <div
            className={`${item.border} relative overflow-hidden transition-all duration-300 group-hover:scale-105 ${
              index === 0
                ? "bg-[#E2FAFF] rounded-tl-[60px] xs:rounded-tl-[70px] sm:rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[130px]"
                : index === 1
                  ? "bg-[#FFE2E2] rounded-tl-[60px] xs:rounded-tl-[70px] sm:rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[135px] rounded-tr-[40px] xs:rounded-tr-[50px] sm:rounded-tr-[60px] md:rounded-tr-[80px] lg:rounded-tr-[115px] rounded-br-[40px] xs:rounded-br-[50px] sm:rounded-br-[60px] md:rounded-br-[80px] lg:rounded-br-[115px]"
                  : index === 2
                    ? "bg-[#E8EDFF] rounded-tl-[60px] xs:rounded-tl-[70px] sm:rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[135px]"
                    : index === 3
                      ? "bg-[#E4FFE2] rounded-tl-[60px] xs:rounded-tl-[70px] sm:rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[135px] rounded-tr-[40px] xs:rounded-tr-[50px] sm:rounded-tr-[60px] md:rounded-tr-[80px] lg:rounded-tr-[115px] rounded-br-[40px] xs:rounded-br-[50px] sm:rounded-br-[60px] md:rounded-br-[80px] lg:rounded-br-[115px]"
                      : "bg-[#E2FAFF] rounded-tl-[60px] xs:rounded-tl-[70px] sm:rounded-tl-[80px] md:rounded-tl-[100px] lg:rounded-tl-[130px]"
            } h-[120px] xs:h-[130px] sm:h-[140px] md:h-[160px] lg:h-[180px]`}
          >
            <Image
              src={item.image || "/placeholder.svg"}
              className="absolute h-full w-[120%] bottom-0 left-1/2 transform -translate-x-1/2 object-contain"
              alt={item.name}
              width={1000}
              height={1000}
            />
            {/* Social Icons - hidden initially, revealed on hover */}
            {/*
            <div className="iconBox flex flex-col gap-1 xs:gap-2 sm:gap-2 md:gap-3 items-center justify-end absolute right-1 xs:right-2 sm:right-2 md:right-3 lg:right-4 bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-1 xs:group-hover:bottom-2 sm:group-hover:bottom-2 md:group-hover:bottom-3 lg:group-hover:bottom-4 transition-all duration-500 z-10">
              <FaTwitter className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full duration-500 p-1 xs:p-1.5 sm:p-2 text-white bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500" />
              <FaFacebookF className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full duration-500 p-1 xs:p-1.5 sm:p-2 text-white bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500" />
              <FaLinkedinIn className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full duration-500 p-1 xs:p-1.5 sm:p-2 text-white bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500" />
              <FaInstagram className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full duration-500 p-1 xs:p-1.5 sm:p-2 text-white bg-blue-500 cursor-pointer hover:bg-white hover:text-blue-500" />
            </div>
            */}
          </div>
          <div className="subTwo flex justify-between items-center mt-2 xs:mt-3 sm:mt-3 md:mt-4 lg:mt-6 px-1">
            <div>
              <p className="text-[#5A7093] text-[10px] xs:text-xs sm:text-xs md:text-sm lg:text-base font-medium mb-1 truncate">
                {item.profession}
              </p>
              <h1 className="text-[#082A5E] text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg font-semibold cursor-pointer hover:text-blue-600 transition-colors duration-300 truncate">
                {item.name}
              </h1>
            </div>
            {/* Share Button */}
            {/*
            <button
              className="shareIcon flex-shrink-0 ml-1 xs:ml-2 sm:ml-2 md:ml-3 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full bg-[#E7EFFC] text-blue-400 p-1 xs:p-1.5 sm:p-2 cursor-pointer hover:bg-blue-500 hover:text-white duration-500 flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110"
              aria-label="Share instructor profile"
            >
              <IoShareSocialOutline className="font-bold text-sm xs:text-base sm:text-lg md:text-xl lg:text-[20px]" />
            </button>
            */}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardInstructor
