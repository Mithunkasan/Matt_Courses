// "use client"

// import { useState } from "react"
// import { FilterSection } from "./filtersection"
// import { CourseCard } from "./Coursepage"

// import { Course, courses, categoryOptions, tagOptions, levelOptions, priceOptions } from "../lib/types"




// export const CourseListing = () => {
//   const [sortOption, setSortOption] = useState("newest")
//   const [page, setPage] = useState(1)
//   const [searchQuery, setSearchQuery] = useState("")
  
//   // Filter states
//   const [selectedCategories, setSelectedCategories] = useState<string[]>([])
//   const [selectedTags, setSelectedTags] = useState<string[]>([])
//   const [selectedLevels, setSelectedLevels] = useState<string[]>([])
//   const [selectedPrices, setSelectedPrices] = useState<string[]>([])

//   const coursesPerPage = 6

//   // Filter toggle handlers
//   const toggleFilter = (filter: string, currentFilters: string[], setFilters: React.Dispatch<React.SetStateAction<string[]>>) => {
//     if (currentFilters.includes(filter)) {
//       setFilters(currentFilters.filter(f => f !== filter))
//     } else {
//       setFilters([...currentFilters, filter])
//     }
//   }

//   // Filter and sort courses
//   const filteredCourses = courses.filter(course => {
//     // Search filter
//     const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase())
    
//     // Category filter
//     const matchesCategories = selectedCategories.length === 0 || 
//       course.categories.some(cat => selectedCategories.includes(cat))
    
//     // Other filters would be added here...
    
//     return matchesSearch && matchesCategories
//   })

//   // Sort courses
//   const sortedCourses = [...filteredCourses].sort((a, b) => {
//     if (sortOption === "newest") return b.id - a.id
//     if (sortOption === "oldest") return a.id - b.id
//     if (sortOption === "popular") return b.enrollments - a.enrollments
//     return a.title.localeCompare(b.title)
//   })

//   // Pagination
//   const totalPages = Math.ceil(sortedCourses.length / coursesPerPage)
//   const paginatedCourses = sortedCourses.slice(
//     (page - 1) * coursesPerPage,
//     page * coursesPerPage
//   )

//   return (
//     <div className="container mx-auto py-8 px-4 text-gray-900">
//       <div className="flex flex-col md:flex-row gap-8">
//         {/* Filters Sidebar */}
//         <div className="w-full md:w-1/4">
//           {/* Search */}
//           <div className="relative mb-6">
//             <input
//               type="text"
//               placeholder="Search courses..."
//               className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <div className="absolute left-3 top-2.5 text-gray-400">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
//               </svg>
//             </div>
//           </div>

//           {/* Filter Sections */}
//           <FilterSection
//             title="Category"
//             options={categoryOptions}
//             selectedFilters={selectedCategories}
//             onFilterChange={(filter) => toggleFilter(filter, selectedCategories, setSelectedCategories)}
//           />

//           <FilterSection
//             title="Tag"
//             options={tagOptions}
//             selectedFilters={selectedTags}
//             onFilterChange={(filter) => toggleFilter(filter, selectedTags, setSelectedTags)}
//           />

//           <FilterSection
//             title="Level"
//             options={levelOptions}
//             selectedFilters={selectedLevels}
//             onFilterChange={(filter) => toggleFilter(filter, selectedLevels, setSelectedLevels)}
//           />

//           <FilterSection
//             title="Price"
//             options={priceOptions}
//             selectedFilters={selectedPrices}
//             onFilterChange={(filter) => toggleFilter(filter, selectedPrices, setSelectedPrices)}
//           />
//         </div>

//         {/* Courses Grid */}
//         <div className="w-full md:w-3/4">
//           {/* Sort Controls */}
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">
//               {filteredCourses.length} Courses Available
//             </h2>
//             <select
//               value={sortOption}
//               onChange={(e) => setSortOption(e.target.value)}
//               className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             >
//               <option value="newest">Newest First</option>
//               <option value="oldest">Oldest First</option>
//               <option value="popular">Most Popular</option>
//               <option value="title">Title A-Z</option>
//             </select>
//           </div>

//           {/* Courses Grid */}
//           {paginatedCourses.length > 0 ? (
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               {paginatedCourses.map(course => (
//                 <CourseCard key={course.id} course={course} />
//               ))}
//             </div>
//           ) : (
//             <div className="text-center py-12">
//               <h3 className="text-xl font-medium text-gray-600">No courses found matching your criteria</h3>
//               <button 
//                 onClick={() => {
//                   setSelectedCategories([])
//                   setSelectedTags([])
//                   setSelectedLevels([])
//                   setSelectedPrices([])
//                   setSearchQuery("")
//                 }}
//                 className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//               >
//                 Reset Filters
//               </button>
//             </div>
//           )}

//           {/* Pagination */}
//           {totalPages > 1 && (
//             <div className="flex justify-center mt-8">
//               <div className="flex space-x-2">
//                 {Array.from({ length: totalPages }, (_, i) => (
//                   <button
//                     key={i + 1}
//                     onClick={() => setPage(i + 1)}
//                     className={`px-4 py-2 rounded-lg ${page === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 hover:bg-gray-300'}`}
//                   >
//                     {i + 1}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }