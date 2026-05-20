//     import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// const InstructorProfile = () => {
//   const [currentInstructor, setCurrentInstructor] = useState(0);

//   const instructors = [
//     {
//       id: 1,
//       name: "Sabir K",
//       title: "R & D - Engineer - Big Data",
//       subtitle: "Data Science",
//       image: "4.webp", // Placeholder for instructor image
//       rating: 5.0,
//       reviews: {
//         5: 97,
//         4: 3,
//         3: 0,
//         2: 0,
//         1: 0
//       }
//     }
//     // Add more instructors here if needed
//   ];

//   const currentInst = instructors[currentInstructor];

//   const nextInstructor = () => {
//     setCurrentInstructor((prev) => (prev + 1) % instructors.length);
//   };

//   const prevInstructor = () => {
//     setCurrentInstructor((prev) => (prev - 1 + instructors.length) % instructors.length);
//   };

//   const StarRating = ({ filled, total = 5 }) => {
//     return (
//       <div className="flex items-center space-x-1 ">
//         {[...Array(total)].map((_, index) => (
//           <Star
//             key={index}
//             size={16}
//             className={`${
//               index < filled
//                 ? 'text-orange-400 fill-orange-400'
//                 : 'text-gray-300'
//             }`}
//           />
//         ))}
//       </div>
//     );
//   };

//   const RatingBar = ({ stars, percentage }) => {
//     return (
//       <div className="flex items-center  space-x-3 mb-2">
//         <StarRating filled={stars} />
//         <div className="flex-1 bg-gray-200 rounded-full h-2">
//           <div
//             className="bg-orange-400 h-2 rounded-full transition-all duration-300"
//             style={{ width: `${percentage}%` }}
//           ></div>
//         </div>
//         <span className="text-sm text-gray-600 w-8">{percentage}%</span>
//       </div>
//     );
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white mt-8">
//       {/* Instructors Section */}
//       <div className="mb-12">
//         <h2 className="text-2xl font-bold text-gray-900 mb-8">Instructors</h2>

//         <div className="relative">
//           {/* Navigation Arrows */}
//           {instructors.length > 1 && (
//             <>
//               <button
//                 onClick={prevInstructor}
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 shadow-lg transition-all duration-200"
//               >
//                 <ChevronLeft size={20} />
//               </button>

//               <button
//                 onClick={nextInstructor}
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 shadow-lg transition-all duration-200"
//               >
//                 <ChevronRight size={20} />
//               </button>
//             </>
//           )}

//           {/* Instructor Card */}
//           <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8 py-8">
//             {/* Profile Image */}
//             {/* <div className="relative">
//               <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full p-1">
//                 <div className="w-full h-full rounded-full overflow-hidden"> */}
//                   {/* Mock profile image */}
//                   {/* <div className="w-full h-full flex items-center justify-center">
//                     <div className="w-32 h-32  rounded-full flex items-center justify-center">
//                       <div className="w-full h=full rounded-full "><img className='rounded-full w-80 h-50 flex items-center justify-center object-cover ' src="/4.webp" alt="" /></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div> */}
//              <div className="flex items-center justify-center min-h-screen bg-white">
//       <div className="relative w-64 h-64">
//         {/* Background Shape */}
//         {/* <div className="absolute inset-1">
//           <svg viewBox="0 0 200 200" className="w-full h-full">
//             <path
//               fill="#A855F7" // Tailwind purple-500
//               d="M0,100 Q100,0 200,100 Q100,200 0,100"
//             />
//           </svg>
//         </div> */}

//         {/* Foreground Image */}
//         <img
//           src="/image/inst1.png"
//           alt=""
//           className="absolute inset-0 w-70 h-70 object-contain z-0x rounded-[80%]"
//         />
//       </div>
//     </div>

//             {/* Instructor Info */}
//             <div className="text-center md:text-left">
//               <h3 className="text-2xl font-bold text-gray-900 mb-2">
//                 {currentInst.name}
//               </h3>
//               <p className="text-lg text-gray-700 mb-1">
//                 {currentInst.title}
//               </p>
//               <p className="text-md text-gray-600">
//                 {currentInst.subtitle}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Student Review Section */}
//       <div className=''>
//         <h2 className="text-2xl font-bold text-gray-900  mb-8">Student Review</h2>

//         <div className="grid md:grid-cols-2 gap-8 items-start">
//           {/* Rating Score */}
//           <div className="text-center md:text-left">
//             <div className="text-6xl font-bold text-gray-900 mb-2">
//               {currentInst.rating.toFixed(1)}
//             </div>
//             <div className="mb-3">
//               <StarRating filled={Math.floor(currentInst.rating)} />
//             </div>
//             <p className="text-orange-500 font-medium">Course Rating</p>
//           </div>

//           {/* Rating Breakdown */}
//           <div className="space-y-2">
//             <RatingBar stars={5} percentage={currentInst.reviews[5]} />
//             <RatingBar stars={4} percentage={currentInst.reviews[4]} />
//             <RatingBar stars={3} percentage={currentInst.reviews[3]} />
//             <RatingBar stars={2} percentage={currentInst.reviews[2]} />
//             <RatingBar stars={1} percentage={currentInst.reviews[1]} />
//           </div>
//         </div>


//       {/* Additional Stats */}
//       <div className="mt-8 p-6 bg-gray-50 rounded-lg">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
//           <div>
//             <div className="text-2xl font-bold text-purple-600">500+</div>
//             <div className="text-gray-600">Students Enrolled</div>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-purple-600">50+</div>
//             <div className="text-gray-600">Courses Created</div>
//           </div>
//           <div>
//             <div className="text-2xl font-bold text-purple-600">5 Years</div>
//             <div className="text-gray-600">Experience</div>
//           </div>
//         </div>
//       </div>
//        </div>
//     </div>

//   );
// };

// export default InstructorProfile;











// new








// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import StudentReview from './review';

// export default function ProfileCarousel({instructor,review}) {
//   const profiles = [
//     {
//       id: 1,
//       name: "Sarang T K",
//       role: "R & D Engineer",
//       department: "Data Science",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
//     },
//     {
//       id: 2,
//       name: "Priya Sharma",
//       role: "Software Developer",
//       department: "Frontend Team",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
//     },
//     {
//       id: 3,
//       name: "Rahul Verma",
//       role: "DevOps Engineer",
//       department: "Infrastructure",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
//     },
//     {
//       id: 4,
//       name: "Anita Patel",
//       role: "UI/UX Designer",
//       department: "Design Team",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
//     }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextProfile = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === profiles.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevProfile = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex === 0 ? profiles.length - 1 : prevIndex - 1
//     );
//   };

//   const currentProfile = profiles[currentIndex];

//   return (
//     <div className="flex flex-col items-center justify-center w-[100%]  min-h-screen p-4 mt-8" ref={instructor}>
//       <div className="relative flex items-center max-w-4xl w-full">

//         {/* Left Navigation Button */}
//         <button
//           onClick={prevProfile}
//           className="absolute left-0 z-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
//           aria-label="Previous profile"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>

//         {/* Profile Card */}
//         <div className="flex-1 mx-16 bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-300">
//           <div className="flex flex-col md:flex-row">

//             {/* Profile Image Section */}
//             <div className="relative md:w-1/2 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 p-8 flex items-center justify-center">
//               <div className="relative">
//                 {/* Background decorative circle */}
//                 <div className="absolute -inset-4 bg-purple-300 bg-opacity-30 rounded-full blur-xl"></div>

//                 {/* Profile Image */}
//                 <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-transform duration-300 hover:scale-105">
//                   <img
//                     src={currentProfile.image}
//                     alt={currentProfile.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Profile Info Section */}
//             <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
//               <div className="space-y-4">
//                 <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
//                   {currentProfile.name}
//                 </h1>

//                 <h2 className="text-lg md:text-xl font-semibold text-blue-600">
//                   {currentProfile.role}
//                 </h2>

//                 <p className="text-lg text-gray-600 font-medium">
//                   {currentProfile.department}
//                 </p>

//                 {/* Profile indicator dots */}
//                 <div className="flex space-x-2 pt-4">
//                   {profiles.map((_, index) => (
//                     <div
//                       key={index}
//                       className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
//                           ? 'bg-blue-600 scale-125'
//                           : 'bg-gray-300 hover:bg-gray-400'
//                         }`}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Navigation Button */}
//         <button
//           onClick={nextProfile}
//           className="absolute right-0 z-0 bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 shadow-lg transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
//           aria-label="Next profile"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>

//       {/* Navigation hints */}
//       <div className="  p-3 text-gray-500  text-sm">
//         Profile {currentIndex + 1} of {profiles.length}
    
//       </div>
//           <StudentReview review={review} />
//     </div>

//   );
// }
"use client"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import SvgWave from "./Svgwave"
import type { Testimonial } from "@/types/testimonial" // Import the new Testimonial type

const testimonials: Testimonial[] = [
  {
    quote:
      '"The course offered strong Python foundations, front-end skills, and backend expertise with Django. Real-world projects made learning practical. I now confidently build complete, scalable web applications. Highly recommended!"',
    name: "Jones",
    designation: "Python Developer",
    src: "/testimonial01.jpeg",
  },
  {
    quote:
      '"The Full Stack Development course at MATT is a complete package for aspiring developers. It covers both front-end and back-end technologies, allowing students to build robust, scalable web applications from scratch."',
    name: "Aathira",
    designation: "Fullstack Developer",
    src: "/testimonial02.jpeg",
  },
]

const AnimatedTestimonialsDemo = ({ instructor, review }: { instructor?: React.Ref<HTMLDivElement>; review?: React.Ref<HTMLDivElement> } = {}) => {
  const [active, setActive] = useState<Testimonial>(testimonials[0])

  const handleprev = () => {
    const currentIndex = testimonials.indexOf(active)
    const length = testimonials.length
    const prevIndex = (currentIndex - 1 + length) % length
    setActive(testimonials[prevIndex])
  }

  const handlenext = () => {
    const currentIndex = testimonials.indexOf(active)
    const length = testimonials.length
    const nextIndex = (currentIndex + 1) % length
    setActive(testimonials[nextIndex])
  }

  const isActive = (index: number) => {
    return testimonials[index] === active
  }

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10
  }

  return (
    <>
      <div ref={instructor} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-1000  mx-auto max-h-full m-10 p-10 bg-[#061e43]">
        {/* Large image container - hidden on small screens, visible on medium and up */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full  mx-auto hidden md:block">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotateY: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
                key={index}
              >
                <Image
                  src={testimonial.src || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="rounded-[8px] h-[500] w-[500] object-contain object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div>
          <div className="flex flex-col py-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[32px] text-white font-semibold leading-tight text-start">
              What Our{" "}
              <span className="relative ml-[5px] inline-block group">
                Students<SvgWave className="w-full" />{" "}
              </span>&nbsp;
              <br className="hidden sm:block" />
              Say About Us
            </h1>
            <Image src="/quote.png" width={100} height={100} className="my-4 sm:my-6" alt="quotesimage" />
            <motion.div
              key={active.name}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <motion.p className="text-base sm:text-lg md:text-xl lg:text-[18px] mb-6 text-gray-400 mt-6 font-bold">
                {active.quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
              {/* Reviewer info with small circular image on mobile */}
              <div className="flex items-center mt-4">
                <Image
                  src={active.src || "/placeholder.svg"}
                  alt={active.name}
                  width={40}
                  height={40}
                  className="w-8 h-8 rounded-full object-cover mr-3 md:hidden" // Visible on mobile, hidden on md and up
                />
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[20px] mb-2 font-bold text-white">
                    {active.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[14px] text-[#B2BDCD]">{active.designation}</p>
                </div>
              </div>
            </motion.div>
          </div>
          <div className="flex gap-4 sm:gap-6 pt-5">
            <button
              className="p-3 sm:p-4 rounded-[5px] bg-[#24406b] hover:bg-blue-500 cursor-pointer text-white"
              onClick={handleprev}
            >
              <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            <button
              className="p-3 sm:p-4 rounded-[5px] bg-[#24406b] hover:bg-blue-500 cursor-pointer text-white"
              onClick={handlenext}
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AnimatedTestimonialsDemo
