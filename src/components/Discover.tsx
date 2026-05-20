"use client"

import type React from "react"
import { User, BookOpen, GraduationCap, Video } from "lucide-react"

const DiscoverInstructors: React.FC = () => {
  const stats = [
    {
      icon: User,
      number: "20000",
      label: "Expert Tutors",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: BookOpen,
      number: "1500",
      label: "Top Lessons",
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: GraduationCap,
      number: "18000",
      label: "Over Students",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Video,
      number: "3200",
      label: "Resources",
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
    },
  ]

  return (
    <div className="flex justify-center w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 bg-gray-50 relative">
      {/* Background elements */}
      <div className="absolute left-[-100px] sm:left-[-50px] md:left-[100px] top-[70%] transform -translate-y-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full bg-yellow-400 opacity-40 z-0" />

      <div className="absolute left-[-80px] sm:left-[-40px] md:left-[200px] top-[364px] transform -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 flex flex-wrap gap-2 z-0">
        {Array(16)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-500 opacity-50" />
          ))}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column with Images */}
          <div className="lg:col-span-5 relative">
            {/* Main image container with proper spacing for floating elements */}
            <div className="relative mt-16 sm:mt-20 md:mt-20 lg:mt-16 mb-8 sm:mb-12 md:mb-16 ml-8 sm:ml-12 md:ml-16 lg:ml-8 xl:ml-12">
              {/* Main large image */}
              <div className="shadow-xl rounded-3xl relative max-w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
                <img
                  src="aaa1.png"
                  alt="Male instructor with red t-shirt"
                  className="w-full h-full object-cover rounded-3xl"
                />

                {/* Experience badge - positioned outside top-left corner */}
                <div className="absolute -left-4 sm:-left-6 md:-left-8 lg:-left-10 -top-4 sm:-top-6 md:-top-8 lg:-top-10 bg-blue-600 text-white p-3 sm:p-4 rounded-xl z-30 shadow-lg w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 flex flex-col justify-center items-center text-center">
                  <div className="font-bold leading-tight" style={{ fontSize: "clamp(1.25rem, 4vw, 2rem)" }}>
                    10+
                  </div>
                  <div className="leading-tight" style={{ fontSize: "clamp(0.6rem, 2vw, 0.875rem)" }}>
                    Years of
                  </div>
                  <div className="leading-tight" style={{ fontSize: "clamp(0.6rem, 2vw, 0.875rem)" }}>
                    Experience
                  </div>
                </div>

                {/* Small image - positioned outside bottom-left corner */}
                <div className="absolute -left-4 sm:-left-6 md:-left-8 lg:-left-10 -bottom-4 sm:-bottom-6 md:-bottom-8 lg:-bottom-10 shadow-xl rounded-2xl w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 border-4 border-white z-30">
                  <img
                    src="fenil1.png"
                    alt="Female instructor with laptop"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column with Info */}
          <div className="lg:col-span-7 mt-8 lg:mt-0">
            <div className="max-w-full lg:max-w-2xl">
              {/* Badge */}
              <div className="inline-block bg-blue-50 rounded-2xl px-3 py-2 sm:px-4 sm:py-2 mb-4 sm:mb-6">
                <span className="text-blue-600 font-semibold" style={{ fontSize: "clamp(0.8rem, 2.5vw, 0.95rem)" }}>
                  Get To Know About Us
                </span>
              </div>

              {/* Main heading */}
              <h1
                className="text-black font-bold mb-4 sm:mb-6 leading-tight"
                style={{
                  fontSize: "clamp(1.75rem, 6vw, 2.5rem)",
                  lineHeight: "clamp(2rem, 7vw, 3rem)",
                }}
              >
                From Concept to Career{" "}
                <span className="text-blue-600 relative inline-block">
                  Engineering
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400 -z-10 rounded"></span>
                </span>{" "}
                Education that Delivers
              </h1>

              {/* Description */}
              <p
                className="mb-6 sm:mb-8 text-gray-600 max-w-full lg:max-w-2xl leading-relaxed"
                style={{
                  fontSize: "clamp(0.875rem, 2.5vw, 1rem)",
                  lineHeight: "clamp(1.25rem, 3vw, 1.5rem)",
                }}
              >
                At Matt Engineering Solutions, we empower the next generation of engineers through industry-aligned,
                hands-on education. With decades of combined expertise in software development, hardware innovation, and
                digital transformation, our mission is simple: Bridge the gap between academic theory and real-world
                engineering practice.
              </p>

              {/* Stats Grid - 2x2 layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="flex items-center bg-transparent rounded-xl">
                      <div
                        className={`flex items-center justify-center ${stat.bgColor} rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mr-3 sm:mr-4 flex-shrink-0`}
                      >
                        <IconComponent className={`${stat.iconColor} w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8`} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-gray-900" style={{ fontSize: "clamp(1.125rem, 3vw, 1.5rem)" }}>
                          {stat.number}
                        </div>
                        <div className="text-gray-600" style={{ fontSize: "clamp(0.75rem, 2vw, 0.875rem)" }}>
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiscoverInstructors
