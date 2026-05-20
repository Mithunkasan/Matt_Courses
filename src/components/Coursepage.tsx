// "use client"

// import { useState } from "react"
// import { Course } from "../lib/types"
// import { useRouter } from "next/navigation"
// import Link from "next/link"

// export const CourseCard = ({ course }: { course: Course }) => {
//   const router = useRouter()
//   const getCategoryColor = (category: string) => {
//     const colors: Record<string, string> = {
//       "Software Courses": "bg-blue-100 text-blue-800",
//       "Hardware Courses": "bg-green-100 text-green-800",
//       "Technology Courses": "bg-purple-100 text-purple-800",
//       "Creative, Digital Courses": "bg-orange-100 text-orange-800",
//       "Visual Studio Code": "bg-cyan-100 text-cyan-800",
//       "Adobe Photoshop": "bg-lime-100 text-lime-800",
//       "UI Design": "bg-indigo-100 text-indigo-800",
//       "UX Design": "bg-pink-100 text-pink-800",
//       // Add more categories as needed
//     }
//     return colors[category] || "bg-gray-100 text-gray-800"
//   }

//   const [hoveredCard, setHoveredCard] = useState<number | null>(null);
//   const handleCardMouseEnter = (id: number): void => {
//     setHoveredCard(id);
//   };

//   const handleCardMouseLeave = (): void => {
//     setHoveredCard(null);
//   };

//   const handleRoute = (path: string): void => {
//     router.push(path)
//   }

//   return (
//     <div 
//       className="relative group overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
//       onMouseEnter={() => handleCardMouseEnter(course.id)}
//       onMouseLeave={handleCardMouseLeave}
//     >
//       <Link href={course.path || `/courses/${course.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
//         <div className="relative h-48 overflow-hidden">
//           <img
//             src={course.image}
//             alt={course.title}
//             className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//           />

//           {hoveredCard === course.id && (
//             <div 
//               className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent opacity-70"
//               style={{
//                 animation: 'diagonalSweep 1s ease-out forwards'
//               }}
//             />
//           )}
          
//           {/* Instructor Avatar */}
//           <div className="absolute bottom-3 right-3 w-10 h-10 rounded-full border-2 border-white overflow-hidden">
//             <img
//               src={course.instructor.avatar}
//               alt={course.instructor.name}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </Link>

//       {/* Course Content */}
//       <div className="p-4">
//         {/* Categories */}
//         <div className="flex flex-wrap gap-2 mb-3">
//           {course.categories.slice(0, 3).map((category, index) => (
//             <span
//               key={index}
//               className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(category)}`}
//             >
//               {category}
//             </span>
//           ))}
//         </div>

//         {/* Title */}
//         <h3 className="font-semibold text-lg mb-3 line-clamp-2">
//           {course.title}
//         </h3>

//         {/* Meta Info */}
//         <div className="flex justify-between text-sm text-gray-600 mb-4">
//           <div className="flex items-center gap-1">
//             <BookOpenIcon className="w-4 h-4" />
//             <span>{course.lessons} lessons</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <ClockIcon className="w-4 h-4" />
//             <span>{course.duration}</span>
//           </div>
//           <div className="flex items-center gap-1">
//             <UsersIcon className="w-4 h-4" />
//             <span>{course.enrollments}</span>
//           </div>
//         </div>

//         {/* Price */}
//         <div className="text-blue-600 font-bold">
//           {course.price}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes diagonalSweep {
//           0% {
//             transform: translateX(-100%) translateY(-100%);
//           }
//           100% {
//             transform: translateX(100%) translateY(100%);
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

// // Simple icon components (replace with actual icons if needed)
// const BookOpenIcon = ({ className }: { className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
//   </svg>
// )

// const ClockIcon = ({ className }: { className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//   </svg>
// )

// const UsersIcon = ({ className }: { className?: string }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={className}>
//     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
//   </svg>
// )