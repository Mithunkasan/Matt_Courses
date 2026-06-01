"use client"

import type React from "react"
import { Users } from "lucide-react"
import SvgWave from "@/components/Svgwave"
import CardInstructor from "@/components/CardInstructor"

type Instructor = {
  id: string;
  name: string;
  profession: string;
  image: string;
  border: string; // This will be used for the card background
} 

const OurInstructors: React.FC = () => {
  const instructors: Instructor[] = [
    {
      id: "1",
      name: "Arun G",
      profession: "Hardware Team Lead",
      image: "/image/arung.png",
      border: "subMain bg-[#E2FAFF] rounded-tl-[130px] h-[180px] relative",
    },
    {
      id: "2",
      name: "Adarsh P",
      profession: "Software Team Lead",
      image: "/image/adarsh.png",
      border: "subMain bg-[#FFE2E2] rounded-tl-[130px] rounded-tr-[115] rounded-br-[115] h-[180px] relative",
    },
    {
      id: "3",
      name: "Mina Farveen S",
      profession: "Software Trainer",
      image: "/image/mina.png",
      border: "subMain bg-[#E8EDFF] rounded-tl-[135px] h-[180px] relative",
    },
    {
      id: "4",
      name: "Kavin A V",
      profession: "Web Developer",
      image: "/image/Kavin.png",
      border: "subMain bg-[#E4FFE2] rounded-tl-[135px] rounded-tr-[115] rounded-br-[115] h-[180px] relative",
    },
    {
      id: "5",
      name: "Jawid Sulthan",
      profession: "Software Developer",
      image: "/image/jawid.png",
      border: "subMain bg-[#E2FAFF] rounded-tl-[130px] h-[180px] relative",
    },
  ]

  return (
    <section className="px-4 sm:px-6 lg:px-[6%] py-8 sm:py-12 lg:py-[3%] w-full pt-16 sm:pt-20 lg:pt-[6rem] bg-white relative">
      {/* Header Section */}
      <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
        <div className="flex flex-col items-start justify-center flex-1">
          {/* Badge */}
          <div className="inline-block bg-[#e3f2fd] rounded-full px-4 py-2 mb-4 sm:mb-6">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-500" />
              <span className="text-blue-500 font-semibold text-sm sm:text-base">Our Qualified People Matter</span>
            </div>
          </div>

          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[36px] font-bold text-[#082A5E] leading-tight">
            Top{" "}
            <span className="text-blue-500 relative inline-block group cursor-pointer">
              Class
              <SvgWave className="absolute -bottom-1 left-0 w-full h-3 sm:h-4 text-yellow-500" />
            </span>{" "}
            Instructors
          </h2>
        </div>

        {/* CTA Button - Hidden on mobile, shown on larger screens */}
        <div className="hidden lg:block">
          {/* <button className="flex items-center gap-2 text-blue-600 border-2 border-blue-600 px-6 py-3 text-sm font-semibold rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105">
            ALL INSTRUCTORS
            <ArrowRight className="w-5 h-5" />
          </button> */}
        </div>
      </div>

      {/* Mobile CTA Button */}
      <div className="lg:hidden mb-8">
        {/* <button className="w-full sm:w-auto flex items-center justify-center gap-2 text-blue-600 border-2 border-blue-600 px-6 py-3 text-sm font-semibold rounded-lg cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300">
          ALL INSTRUCTORS
          <ArrowRight className="w-5 h-5" />
        </button> */}
      </div>

      {/* Cards Section */}
      <CardInstructor instructors={instructors} />

      {/* Become Instructor Section */}
      {/* <BecomeInstructor /> */}
    </section>
  )
}

export default OurInstructors
