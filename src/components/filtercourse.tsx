/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  
 
  ChevronLeftIcon,
  ChevronRightIcon,
  StarIcon,
  UsersIcon,
  ClockIcon,
} from "../components/icons"
import type {  Courses } from "../types/course"
import { mockCourses } from "../data/course"


const mainCategories = [
  { id: "all", label: "All Courses", color: "#6B7280" },
  { id: "software", label: "Software", color: "#3B82F6" },
  { id: "hardware", label: "Hardware", color: "#84CC16" },
  { id: "fullstack", label: "Fullstack", color: "#8B5CF6" },
  { id: "digital-marketing", label: "Digital Marketing", color: "#DC2626" },
]

const technologyFilters = [
  // Programming Languages & Frameworks
  { id: "python", label: "Python", category: "software", color: "#3776AB" },
  { id: "java", label: "Java", category: "software", color: "#ED8B00" },
  { id: "javascript", label: "JavaScript", category: "software", color: "#F7DF1E" },
  { id: "react", label: "React", category: "fullstack", color: "#61DAFB" },
  { id: "nodejs", label: "Node.js", category: "fullstack", color: "#339933" },
  { id: "mern", label: "MERN Stack", category: "fullstack", color: "#61DAFB" },
  { id: "mean", label: "MEAN Stack", category: "fullstack", color: "#DD0031" },
  { id: "php", label: "PHP", category: "software", color: "#777BB4" },

  // Frontend Technologies
  { id: "html-css", label: "HTML/CSS", category: "software", color: "#E34F26" },
  { id: "vue", label: "Vue.js", category: "software", color: "#4FC08D" },
  { id: "angular", label: "Angular", category: "software", color: "#DD0031" },
  { id: "ui-ux", label: "UI/UX Design", category: "software", color: "#FF6B6B" },

  // Backend & Database
  { id: "database", label: "Database", category: "software", color: "#336791" },
  { id: "api", label: "API Development", category: "software", color: "#FF6B35" },
  { id: "microservices", label: "Microservices", category: "software", color: "#4ECDC4" },

  // Cloud & DevOps
  { id: "cloud", label: "Cloud Computing", category: "software", color: "#FF9900" },
  { id: "aws", label: "AWS", category: "software", color: "#FF9900" },
  { id: "docker", label: "Docker", category: "software", color: "#2496ED" },
  { id: "kubernetes", label: "Kubernetes", category: "software", color: "#326CE5" },
  { id: "devops", label: "DevOps", category: "software", color: "#326CE5" },

  // Data & AI
  { id: "data-science", label: "Data Science", category: "software", color: "#FF6B6B" },
  { id: "machine-learning", label: "Machine Learning", category: "software", color: "#FF6B6B" },
  { id: "ai", label: "Artificial Intelligence", category: "software", color: "#FF6B6B" },
  { id: "blockchain", label: "Blockchain", category: "software", color: "#F7931A" },

  // Testing & Security
  { id: "testing", label: "Testing", category: "software", color: "#25D366" },
  { id: "cybersecurity", label: "Cybersecurity", category: "software", color: "#FF4757" },
  { id: "ethical-hacking", label: "Ethical Hacking", category: "software", color: "#FF4757" },

  // Hardware Technologies
  { id: "embedded", label: "Embedded Systems", category: "hardware", color: "#84CC16" },
  { id: "microcontroller", label: "Microcontrollers", category: "hardware", color: "#84CC16" },
  { id: "arduino", label: "Arduino", category: "hardware", color: "#00979D" },
  { id: "raspberry-pi", label: "Raspberry Pi", category: "hardware", color: "#C51A4A" },
  { id: "pcb", label: "PCB Design", category: "hardware", color: "#228B22" },
  { id: "vlsi", label: "VLSI", category: "hardware", color: "#4B0082" },
  { id: "fpga", label: "FPGA", category: "hardware", color: "#4B0082" },
  { id: "robotics", label: "Robotics", category: "hardware", color: "#FF6B35" },
  { id: "iot", label: "IoT", category: "hardware", color: "#00CED1" },
  { id: "electronics", label: "Electronics", category: "hardware", color: "#FFD700" },
  { id: "networking-hardware", label: "Network Hardware", category: "hardware", color: "#FF7F50" },

  // Digital Marketing
  { id: "digital-marketing-basic", label: "Digital Marketing", category: "digital-marketing", color: "#DC2626" },
  { id: "seo", label: "SEO", category: "digital-marketing", color: "#4285F4" },
  { id: "social-media", label: "Social Media", category: "digital-marketing", color: "#1DA1F2" },
  { id: "content-marketing", label: "Content Marketing", category: "digital-marketing", color: "#FF6B6B" },
  { id: "email-marketing", label: "Email Marketing", category: "digital-marketing", color: "#34495E" },
  { id: "ppc", label: "PPC Advertising", category: "digital-marketing", color: "#F39C12" },
  { id: "analytics", label: "Analytics", category: "digital-marketing", color: "#E67E22" },
  { id: "video-editing", label: "Video Editing", category: "digital-marketing", color: "#9B59B6" },
  { id: "graphic-design", label: "Graphic Design", category: "digital-marketing", color: "#E74C3C" },
]

const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"]
const durations = ["All Durations", "1-2 months", "3-4 months", "5-6 months", "6+ months"]

export default function FilterCourse() {
  const [selectedMainCategory, setSelectedMainCategory] = useState("all")
  const [selectedTechFilters, setSelectedTechFilters] = useState<string[]>([])
  const [filteredCourses, setFilteredCourses] = useState<Courses[]>(mockCourses)
  const [currentPage, setCurrentPage] = useState(0)
  const [coursesPerPage] = useState(8)

  const filterScrollRef = useRef<HTMLDivElement>(null)
  const courseGridRef = useRef<HTMLDivElement>(null)

  // Get technology filters based on selected main category
  const getAvailableTechFilters = () => {
    if (selectedMainCategory === "all") {
      return technologyFilters
    }
    return technologyFilters.filter((filter) => filter.category === selectedMainCategory)
  }

  // Toggle technology filter
  const toggleTechFilter = (filterId: string) => {
    setSelectedTechFilters((prev) =>
      prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId],
    )
  }

  // Filter courses based on selected filters
  useEffect(() => {
    let filtered = mockCourses

    // Filter by main category
    if (selectedMainCategory !== "all") {
      const categoryMapping: { [key: string]: string[] } = {
        software: ["Data, Cloud & Technologies", "Cybersecurity & Ethical Hacking"],
        hardware: ["Embedded & Hardware Design", "Networking & Security", "Emerging Technologies"],
        fullstack: ["FullStack Development"],
        "digital-marketing": ["Digital Marketing"],
      }

      const relevantCategories = categoryMapping[selectedMainCategory] || []
      filtered = filtered.filter((course) => relevantCategories.includes(course.category))
    }

    // Filter by technology filters
    if (selectedTechFilters.length > 0) {
      filtered = filtered.filter((course) => {
        const courseTitle = course.title.toLowerCase()
        const courseSubcategory = course.subcategory.toLowerCase()

        return selectedTechFilters.some((filterId) => {
          const filter = technologyFilters.find((f) => f.id === filterId)
          if (!filter) return false

          const filterLabel = filter.label.toLowerCase()
          return (
            courseTitle.includes(filterLabel) ||
            courseSubcategory.includes(filterLabel) ||
            (filterId === "mern" && (courseTitle.includes("mern") || courseSubcategory.includes("mern"))) ||
            (filterId === "mean" && (courseTitle.includes("mean") || courseSubcategory.includes("mean"))) ||
            (filterId === "python" && (courseTitle.includes("python") || courseSubcategory.includes("python"))) ||
            (filterId === "java" && (courseTitle.includes("java") || courseSubcategory.includes("java"))) ||
            (filterId === "ui-ux" &&
              (courseTitle.includes("ui") ||
                courseTitle.includes("ux") ||
                courseSubcategory.includes("ui") ||
                courseSubcategory.includes("ux"))) ||
            (filterId === "cybersecurity" &&
              (courseTitle.includes("security") ||
                courseTitle.includes("cyber") ||
                courseSubcategory.includes("security"))) ||
            (filterId === "ethical-hacking" &&
              (courseTitle.includes("hacking") ||
                courseTitle.includes("ethical") ||
                courseSubcategory.includes("hacking"))) ||
            (filterId === "robotics" && (courseTitle.includes("robot") || courseSubcategory.includes("robot"))) ||
            (filterId === "ai" &&
              (courseTitle.includes("artificial") ||
                courseTitle.includes("intelligence") ||
                courseSubcategory.includes("artificial"))) ||
            (filterId === "digital-marketing-basic" &&
              (courseTitle.includes("marketing") || courseSubcategory.includes("marketing")))
          )
        })
      })
    }

    setFilteredCourses(filtered)
    setCurrentPage(0)
  }, [selectedMainCategory, selectedTechFilters])

  // Reset tech filters when main category changes
  useEffect(() => {
    setSelectedTechFilters([])
  }, [selectedMainCategory])

  const scrollFilters = (direction: "left" | "right") => {
    if (filterScrollRef.current) {
      const scrollAmount = 200
      filterScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const scrollCourses = (direction: "left" | "right") => {
    if (direction === "left" && currentPage > 0) {
      setCurrentPage(currentPage - 1)
    } else if (direction === "right" && (currentPage + 1) * coursesPerPage < filteredCourses.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const getCurrentCourses = () => {
    const startIndex = currentPage * coursesPerPage
    const endIndex = startIndex + coursesPerPage
    return filteredCourses.slice(startIndex, endIndex)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const formatStudents = (students: number) => {
    if (students >= 1000) {
      return `${(students / 1000).toFixed(1)}k`
    }
    return students.toString()
  }

  return (
    <div className="w-full bg-gray-50 py-8 px-[6%] sm:px-[6%] lg:px-[6%]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Trending Courses</h1>
          <p className="text-gray-600 text-lg">Discover our most popular courses across all categories</p>
        </div>

        {/* Main Category Tabs */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {mainCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedMainCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  selectedMainCategory === category.id
                    ? "text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200 hover:border-gray-300"
                }`}
                style={{
                  backgroundColor: selectedMainCategory === category.id ? category.color : undefined,
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Technology Filter Section */}
        <div className="mb-8">
          <div className="relative">
            {/* Scroll buttons for filters */}
            <button
              onClick={() => scrollFilters("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Scroll filters left"
            >
              <ChevronLeftIcon />
            </button>
            <button
              onClick={() => scrollFilters("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              aria-label="Scroll filters right"
            >
              <ChevronRightIcon />
            </button>

            {/* Technology filter buttons container */}
            <div
              ref={filterScrollRef}
              className="flex gap-3 overflow-x-auto scrollbar-hide px-8 py-2"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {getAvailableTechFilters().map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => toggleTechFilter(filter.id)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full border transition-all duration-200 font-medium ${
                    selectedTechFilters.includes(filter.id)
                      ? "text-white border-transparent shadow-md transform scale-105"
                      : "bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:shadow-sm"
                  }`}
                  style={{
                    backgroundColor: selectedTechFilters.includes(filter.id) ? filter.color : undefined,
                  }}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active filters display */}
        {selectedTechFilters.length > 0 && (
          <div className="mb-6">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm text-gray-600 font-medium">Active filters:</span>
              {selectedTechFilters.map((filterId) => {
                const filter = technologyFilters.find((f) => f.id === filterId)
                return filter ? (
                  <span
                    key={filterId}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium text-white"
                    style={{ backgroundColor: filter.color }}
                  >
                    {filter.label}
                    <button
                      onClick={() => toggleTechFilter(filterId)}
                      className="ml-1 hover:bg-black hover:bg-opacity-20 rounded-full p-0.5"
                    >
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                ) : null
              })}
              <button
                onClick={() => setSelectedTechFilters([])}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all
              </button>
            </div>
          </div>
        )}

        {/* Results count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {getCurrentCourses().length} of {filteredCourses.length} courses
            {selectedMainCategory !== "all" && (
              <span className="ml-2 text-sm">
                in{" "}
                <span className="font-medium">{mainCategories.find((c) => c.id === selectedMainCategory)?.label}</span>
              </span>
            )}
          </p>
        </div>

        {/* Course Grid */}
        <div className="relative">
          {/* Navigation arrows */}
          {currentPage > 0 && (
            <button
              onClick={() => scrollCourses("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              aria-label="Previous courses"
            >
              <ChevronLeftIcon />
            </button>
          )}
          {(currentPage + 1) * coursesPerPage < filteredCourses.length && (
            <button
              onClick={() => scrollCourses("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
              aria-label="Next courses"
            >
              <ChevronRightIcon />
            </button>
          )}

          {/* Course cards */}
          <div ref={courseGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-8">
            {getCurrentCourses().map((course) => (
              <Link key={course.id} href={course.link}>
                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
                  {/* Course image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {course.isPopular && (
                      <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Popular
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
                      {course.level}
                    </div>
                  </div>

                  {/* Course content */}
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {course.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3">{course.institution}</p>

                    {/* Course stats */}
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <StarIcon />
                        <span>{course.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <UsersIcon />
                        <span>{formatStudents(course.students)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ClockIcon />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    {/* Price and category */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{formatPrice(course.price)}</span>
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {course.subcategory}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No courses found */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">No courses found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>

        {/* Pagination info */}
        {filteredCourses.length > coursesPerPage && (
          <div className="mt-8 flex justify-center items-center gap-4">
            <span className="text-gray-600">
              Page {currentPage + 1} of {Math.ceil(filteredCourses.length / coursesPerPage)}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}
