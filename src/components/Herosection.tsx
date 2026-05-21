/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { useEffect, useState } from "react"
import type React from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { getAllCourses } from "../lib/course-data"

// Load and map MATT ACADEMY's premium engineering courses dynamically
const rawCourses = getAllCourses()
const courses = rawCourses.map((course) => {
  // Choose beautiful premium tech images dynamically depending on course content
  let imageUrl = "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=400"; // Default hardware
  
  const slugLower = course.slug.toLowerCase();
  if (slugLower.includes("fullstack") || slugLower.includes("stack") || slugLower.includes("mern")) {
    imageUrl = "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400";
  } else if (slugLower.includes("python") || slugLower.includes("programming") || slugLower.includes("c-") || slugLower.includes("java")) {
    imageUrl = "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400";
  } else if (slugLower.includes("robot") || slugLower.includes("drone")) {
    imageUrl = "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400";
  } else if (slugLower.includes("design") || slugLower.includes("pcb")) {
    imageUrl = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400";
  } else if (slugLower.includes("data") || slugLower.includes("power") || slugLower.includes("learning") || slugLower.includes("intelligence")) {
    imageUrl = "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=400";
  }

  // Determine technical subjects
  let subject = "Hardware & Embedded Systems";
  if (
    slugLower.includes("stack") || 
    slugLower.includes("programming") || 
    slugLower.includes("web") || 
    slugLower.includes("development") || 
    slugLower.includes("marketing")
  ) {
    subject = "Software & Web Development";
  } else if (
    slugLower.includes("data") || 
    slugLower.includes("power") || 
    slugLower.includes("learning") || 
    slugLower.includes("intelligence") || 
    slugLower.includes("rpa")
  ) {
    subject = "Data Science & AI";
  }

  return {
    id: Number(course.id),
    title: course.title,
    categories: [subject, ...course.keySkills.slice(0, 3)],
    image: imageUrl,
    path: `/courses/${course.slug}`
  };
})

// Enhanced search suggestions representing the most popular course from each domain
const searchSuggestions = [
  { 
    text: "Embedded Systems", 
    category: "Hardware & Embedded", 
    color: "#3b82f6", 
    path: "embedded-systems",
    description: "Program microcontrollers (AVR, PIC, ARM7) and write reliable custom firmware for real-time hardware applications."
  },
  { 
    text: "Python Programming", 
    category: "Programming Languages", 
    color: "#10b981", 
    path: "python-programming",
    description: "The most versatile language today. Master Python data structures, OOP, web scrapers, data analysis, and script automation."
  },
  { 
    text: "Artificial Intelligence", 
    category: "Analytics & AI", 
    color: "#f59e0b", 
    path: "artificial-intelligence",
    description: "Explore the frontier of AI. Master smart agent architectures, generative AI models, prompt engineering, and ethical AI development."
  },
  { 
    text: "MERN Stack Development", 
    category: "Software & Cyber", 
    color: "#ec4899", 
    path: "Mern-stack",
    description: "Build dynamic, high-performance web applications using MongoDB, Express.js, React.js, and Node.js. Master fullstack javascript development."
  },
]

export default function HeroSection() {
  const [showSearchResults, setShowSearchResults] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [windowWidth, setWindowWidth] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [selectedSuggestion, setSelectedSuggestion] = useState<any>(null)
  const [animationStyle] = useState(0) // 0: floating, 1: wave, 2: carousel
  const router = useRouter()

  // Track window dimensions for ultra-responsive design
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Cycle through different animation styles
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setAnimationStyle((prev) => (prev + 1) % 3)
  //   }, 15000) // Change animation every 15 seconds

  //   return () => clearInterval(interval)
  // }, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([])
      return
    }

    const results = courses.filter(
      (course): course is (typeof courses)[0] =>
        course?.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course?.categories?.some((cat) => cat?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        false,
    )
    setSearchResults(results)
  }, [searchQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
      setSearchQuery("")
      setShowSearchResults(false)
    }
  }

  const handleSuggestionClick = (suggestion: any) => {
    setSelectedSuggestion(suggestion)
  }

  // Responsive breakpoint functions
  const isXs = windowWidth < 600
  const isSm = windowWidth >= 600 && windowWidth < 960
  const isMd = windowWidth >= 960 && windowWidth < 1280
  const isLg = windowWidth >= 1280 && windowWidth < 1920
  const isXl = windowWidth >= 1920
  const isMobile = windowWidth < 960

  // Dynamic sizing functions
  const getContainerPadding = () => {
    if (isXs) return "0% 6%"
    if (isSm) return "0% 6%"
    if (isMd) return "0% 6%"
    if (isLg) return "0% 6%"
    if (isXl) return "0% 6%"
    return "2% 15%"
  }

  const getMainHeadingSize = () => {
    if (isXs) return "2rem"
    if (isSm) return "2.5rem"
    if (isMd) return "3rem"
    if (isLg) return "3rem"
    if (isXl) return "3rem"
    return "4.8rem"
  }

  const getDescriptionSize = () => {
    if (isXs) return "0.95rem"
    if (isSm) return "1rem"
    if (isMd) return "1.05rem"
    if (isLg) return "1.15rem"
    return "1.25rem"
  }

  const getImageHeight = () => {
    if (isXs) return "300px"
    if (isSm) return "350px"
    if (isMd) return "400px"
    if (isLg) return "500px"
    if (isXl) return "550px"
    return "600px"
  }

  const getStatCardSize = () => {
    if (isXs) return { width: "100px", padding: "12px" }
    if (isSm) return { width: "110px", padding: "14px" }
    if (isMd) return { width: "120px", padding: "16px" }
    if (isLg) return { width: "140px", padding: "20px" }
    return { width: "150px", padding: "22px" }
  }

  const getDecorationScale = () => {
    if (isXs) return 0.7
    if (isSm) return 0.8
    if (isMd) return 0.9
    if (isLg) return 1.1
    return 1.2
  }

  const getGridSpacing = () => {
    if (isXs) return "24px"
    if (isSm) return "32px"
    if (isMd) return "48px"
    if (isLg) return "64px"
    return "80px"
  }

  const getMinHeight = () => {
    if (isMobile) return "auto"
    if (windowHeight < 600) return "100vh"
    if (windowHeight < 800) return "90vh"
    return "85vh"
  }

  const statCardSize = getStatCardSize()
  const decorationScale = getDecorationScale()

  // Animation variants for different styles
  const floatingVariants = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 3 + i * 0.2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
        delay: i * 0.1,
      },
    }),
  }

  const waveVariants = {
    animate: (i: number) => ({
      y: [0, -15, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut" as const,
        delay: i * 0.15,
      },
    }),
  }

  const carouselVariants = {
    animate: {
      x: [0, -100],
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear" as const,
      },
    },
  }

  return (
    <div
      style={{
        position: "relative",
        background: "linear-gradient(135deg, #f8f9fa 0%, #f0f8ff 100%)",
        overflow: "visible",
        minHeight: getMinHeight(),
        width: "100%",
        display: "flex",
        alignItems: "center",
        paddingTop: isMobile ? "60px" : "40px",
        paddingBottom: isMobile ? "60px" : "40px",
      }}
    >
      {/* Enhanced Background Decorations */}
      <div
        style={{
          position: "absolute",
          left: isXs ? "-80px" : isSm ? "-90px" : isLg ? "-120px" : "-100px",
          bottom: isXs ? "-80px" : isSm ? "-90px" : isLg ? "-120px" : "-100px",
          width: isXs ? "200px" : isSm ? "250px" : isLg ? "400px" : "300px",
          height: isXs ? "200px" : isSm ? "250px" : isLg ? "400px" : "300px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #7FFFD4 0%, #98FB98 100%)",
          opacity: isXs ? 0.3 : isSm ? 0.4 : 0.5,
          zIndex: 0,
          transform: `scale(${decorationScale})`,
        }}
      />

      <div
        style={{
          position: "absolute",
          right: isXs ? "-30px" : isSm ? "-40px" : isLg ? "-60px" : "-50px",
          bottom: isXs ? "30px" : isSm ? "40px" : isLg ? "85px" : "50px",
          width: isXs ? "120px" : isSm ? "160px" : isLg ? "200px" : "200px",
          height: isXs ? "120px" : isSm ? "160px" : isLg ? "200px" : "200px",
          background: "linear-gradient(135deg, #FFA500 0%, #FFD700 100%)",
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          opacity: isXs ? 0.4 : isSm ? 0.5 : 0.6,
          zIndex: 0,
          transform: `scale(${decorationScale})`,
        }}
      />

      {isLg && (
        <>
          <div
            style={{
              position: "absolute",
              top: "10%",
              left: "15%",
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, #FF6B6B 0%, #FF8E8E 100%)",
              opacity: 0.3,
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "60%",
              right: "25%",
              width: "40px",
              height: "40px",
              background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 100%)",
              clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
              opacity: 0.4,
              zIndex: 0,
            }}
          />
        </>
      )}

      {/* Decorative Icons */}
      {!isXs && (
        <div
          style={{
            position: "absolute",
            top: isXs ? "12%" : isSm ? "15%" : "15%",
            right: isXs ? "35%" : isSm ? "38%" : "40%",
            zIndex: 1,
            transform: `scale(${decorationScale})`,
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30">
            <g fill="#FF6B6B">
              <circle cx="5" cy="5" r="2" />
              <circle cx="15" cy="5" r="2" />
              <circle cx="25" cy="5" r="2" />
              <circle cx="5" cy="15" r="2" />
              <circle cx="15" cy="15" r="2" />
              <circle cx="25" cy="15" r="2" />
              <circle cx="5" cy="25" r="2" />
              <circle cx="15" cy="25" r="2" />
              <circle cx="25" cy="25" r="2" />
            </g>
          </svg>
        </div>
      )}

      {!isMobile && (
        <div
          style={{
            position: "absolute",
            top: isXs ? "10%" : isSm ? "12%" : "15%",
            right: isXs ? "15%" : isSm ? "18%" : "20%",
            zIndex: 1,
            transform: `scale(${decorationScale})`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="8" y="5" width="24" height="30" rx="2" stroke="#9C27B0" strokeWidth="2" />
            <line x1="14" y1="5" x2="14" y2="35" stroke="#9C27B0" strokeWidth="2" />
            <line x1="8" y1="12" x2="32" y2="12" stroke="#9C27B0" strokeWidth="2" />
            <line x1="8" y1="20" x2="32" y2="20" stroke="#9C27B0" strokeWidth="2" />
            <line x1="8" y1="28" x2="32" y2="28" stroke="#9C27B0" strokeWidth="2" />
          </svg>
        </div>
      )}

      {!isXs && (
        <div
          style={{
            position: "absolute",
            top: isXs ? "25%" : isSm ? "28%" : "30%",
            right: isXs ? "8%" : isSm ? "9%" : "10%",
            zIndex: 1,
            transform: `scale(${decorationScale})`,
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20,5 L35,30 L5,30 Z" stroke="#00BCD4" strokeWidth="2" fill="none" />
          </svg>
        </div>
      )}

      {/* Main Container */}
      <div
        style={{
          position: "relative",
          width: "100%",

          margin: "1rem auto",
          padding: getContainerPadding(),
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: getGridSpacing(),
            alignItems: "center",
            minHeight: isMobile ? "auto" : "70vh",
          }}
        >
          {/* Left side content */}
          <div style={{ position: "relative", zIndex: showSearchResults ? 50 : 5 }}>
            {/* Guarantee badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                display: "inline-flex",
                padding: isXs ? "8px 12px" : isSm ? "10px 16px" : isLg ? "14px 24px" : "12px 20px",
                borderRadius: isXs ? "16px" : isSm ? "18px" : "20px",
                background: "linear-gradient(135deg, rgba(230, 244, 255, 0.9) 0%, rgba(240, 248, 255, 0.8) 100%)",
                color: "#0066cc",
                fontWeight: "600",
                fontSize: isXs ? "0.75rem" : isSm ? "0.8rem" : isLg ? "0.95rem" : "0.875rem",
                marginBottom: isXs ? "12px" : isSm ? "16px" : isLg ? "24px" : "20px",
                boxShadow: "0 4px 12px rgba(0, 102, 204, 0.15)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(0, 102, 204, 0.2)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 6px 20px rgba(0, 102, 204, 0.25)",
                y: -2,
              }}
            >
              ✨ Learn. Build. Excel.
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                fontWeight: isXs ? "700" : isSm ? "750" : "750",
                marginTop: "0",
                marginLeft: "0",
                marginRight: "0",
                marginBottom: isXs ? "16px" : isSm ? "20px" : isLg ? "32px" : "24px",
                fontSize: getMainHeadingSize(),
                color: "#0A2647",
                lineHeight: isXs ? "1.1" : isSm ? "1.3" : "1.2",
                letterSpacing: isXs ? "-0.01em" : isSm ? "-0.015em" : "-0.02em",
                maxWidth: isLg ? "90%" : "100%",
              }}
            >
              Engineering the{" "}
              <span
                style={{
                  color: "#1976d2",
                  position: "relative",
                }}
              >
                Future
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                  style={{
                    content: '""',
                    position: "absolute",
                    bottom: isXs ? "-3px" : isSm ? "-4px" : isLg ? "-6px" : "-5px",
                    left: "0",
                    height: isXs ? "6px" : isSm ? "7px" : isLg ? "10px" : "8px",
                    background: "linear-gradient(90deg, #1976d2 0%, #64B5F6 100%)",
                    borderRadius: isXs ? "3px" : isSm ? "3.5px" : "4px",
                    zIndex: -1,
                    display: "block",
                  }}
                />
              </span>{" "}
              <br />
              One Skill at a Time
            </motion.h1>

            {/* Description text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                color: "#546E7A",
                marginTop: "0",
                marginLeft: "0",
                marginRight: "0",
                marginBottom: isXs ? "24px" : isSm ? "28px" : isLg ? "40px" : "32px",
                maxWidth: isXs ? "100%" : isSm ? "90%" : isLg ? "85%" : "550px",
                fontSize: getDescriptionSize(),
                lineHeight: isXs ? "1.5" : isSm ? "1.6" : "1.65",
                fontWeight: isXs ? "400" : isSm ? "450" : "500",
              }}
            >
              Master Tomorrow's Technologies Today — With Expert-Led Courses in Software, Hardware, and Emerging Tech.
            </motion.p>

            {/* Enhanced Search Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: isXs ? "100%" : isSm ? "500px" : isLg ? "700px" : "600px",
              }}
            >
              <form
                onSubmit={handleSearch}
                style={{
                  borderRadius: isXs ? "25px" : isSm ? "30px" : "50px",
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  display: "flex",
                  alignItems: "center",
                  padding: isXs ? "12px 16px" : isSm ? "14px 20px" : isLg ? "20px 28px" : "16px 24px",
                  zIndex: 2,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                  border: "2px solid transparent",
                  marginBottom: "20px",
                  backgroundClip: "padding-box",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.15)"
                  e.currentTarget.style.borderColor = "#e3f2fd"
                  e.currentTarget.style.transform = "translateY(-2px)"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.1)"
                  e.currentTarget.style.borderColor = "transparent"
                  e.currentTarget.style.transform = "translateY(0)"
                }}
              >
                <motion.svg
                  whileHover={{ scale: 1.1, rotate: 15 }}
                  width={isXs ? "20" : isSm ? "22" : isLg ? "26" : "24"}
                  height={isXs ? "20" : isSm ? "22" : isLg ? "26" : "24"}
                  viewBox="0 0 24 24"
                  fill="none"
                  style={{ marginRight: isXs ? "8px" : isSm ? "10px" : isLg ? "16px" : "12px", color: "#5f6368" }}
                >
                  <path
                    d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </motion.svg>
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value)
                    setShowSearchResults(true)
                    setSelectedSuggestion(null)
                  }}
                  onFocus={() => setShowSearchResults(true)}
                  style={{
                    color: "#202124",
                    width: "100%",
                    fontSize: isXs ? "0.9rem" : isSm ? "0.95rem" : isLg ? "1.1rem" : "1rem",
                    fontWeight: "500",
                    padding: "0",
                    border: "none",
                    outline: "none",
                    backgroundColor: "transparent",
                  }}
                />
              </form>

              {/* Enhanced Animated Search Suggestions */}
              {searchQuery === "" ? (
                <>
                  <div style={{ marginBottom: isXs ? "16px" : isSm ? "20px" : "24px", overflow: "hidden" }}>
                    <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    style={{
                      fontSize: isXs ? "0.8rem" : isSm ? "0.85rem" : "0.9rem",
                      color: "#5f6368",
                      marginBottom: "12px",
                      fontWeight: "600",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" as const }}
                      style={{ fontSize: "1.2em" }}
                    >
                      🔥
                    </motion.span>
                    Popular searches:
                  </motion.div>

                  <div
                    style={{
                      width: "100%",
                      position: "relative",
                      height: isXs ? "80px" : isSm ? "90px" : "110px",
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {animationStyle === 0 && (
                        <motion.div
                          key="floating"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: isXs ? "8px" : isSm ? "10px" : "12px",
                            width: "100%",
                          }}
                        >
                          {searchSuggestions.map((suggestion, index) => (
                            <motion.button
                              key={`floating-${index}`}
                              custom={index}
                              variants={floatingVariants}
                              animate="animate"
                              onClick={() => handleSuggestionClick(suggestion)}
                              whileHover={{
                                scale: 1.1,
                                y: -5,
                                boxShadow: `0 8px 25px ${suggestion.color}40`,
                                borderColor: suggestion.color,
                              }}
                              whileTap={{ scale: 0.95 }}
                              style={{
                                padding: isXs ? "8px 14px" : isSm ? "10px 18px" : "12px 22px",
                                borderRadius: isXs ? "20px" : isSm ? "22px" : "25px",
                                border: `2px solid ${suggestion.color}30`,
                                background: `linear-gradient(135deg, ${suggestion.color}15 0%, ${suggestion.color}25 100%)`,
                                color: "#2c3e50",
                                fontSize: isXs ? "0.75rem" : isSm ? "0.8rem" : "0.85rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                boxShadow: `0 4px 15px ${suggestion.color}20`,
                                whiteSpace: "nowrap",
                                backdropFilter: "blur(10px)",
                                position: "relative",
                                overflow: "hidden",
                              }}
                            >
                              <motion.span
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: "-100%",
                                  width: "100%",
                                  height: "100%",
                                  background: `linear-gradient(90deg, transparent, ${suggestion.color}30, transparent)`,
                                  zIndex: 1,
                                }}
                                animate={{
                                  left: ["100%", "-100%"],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: index * 0.2,
                                }}
                              />
                              <span style={{ position: "relative", zIndex: 2 }}>{suggestion.text}</span>
                            </motion.button>
                          ))}
                        </motion.div>
                      )}

                      {animationStyle === 1 && (
                        <motion.div
                          key="wave"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: isXs ? "8px" : isSm ? "10px" : "12px",
                            width: "100%",
                          }}
                        >
                          {searchSuggestions.map((suggestion, index) => (
                            <motion.button
                              key={`wave-${index}`}
                              custom={index}
                              variants={waveVariants}
                              animate="animate"
                              onClick={() => handleSuggestionClick(suggestion)}
                              whileHover={{
                                scale: 1.15,
                                rotate: 5,
                                background: `linear-gradient(135deg, ${suggestion.color}40 0%, ${suggestion.color}60 100%)`,
                              }}
                              style={{
                                padding: isXs ? "8px 14px" : isSm ? "10px 18px" : "12px 22px",
                                borderRadius: isXs ? "15px" : isSm ? "18px" : "20px",
                                border: "none",
                                background: `linear-gradient(135deg, ${suggestion.color}20 0%, ${suggestion.color}35 100%)`,
                                color: "#2c3e50",
                                fontSize: isXs ? "0.75rem" : isSm ? "0.8rem" : "0.85rem",
                                fontWeight: "600",
                                cursor: "pointer",
                                boxShadow: `0 6px 20px ${suggestion.color}25`,
                                whiteSpace: "nowrap",
                                position: "relative",
                              }}
                            >
                              <motion.div
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: "50%",
                                  width: "4px",
                                  height: "4px",
                                  borderRadius: "50%",
                                  background: suggestion.color,
                                  transform: "translate(-50%, -50%)",
                                }}
                                animate={{
                                  scale: [0, 1.5, 0],
                                  opacity: [0, 1, 0],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Number.POSITIVE_INFINITY,
                                  delay: index * 0.1,
                                }}
                              />
                              {suggestion.text}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}

                      {animationStyle === 2 && (
                        <motion.div
                          key="carousel"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          style={{
                            position: "relative",
                            height: "100%",
                            overflow: "hidden",
                          }}
                        >
                          <motion.div
                            variants={carouselVariants}
                            animate="animate"
                            style={{
                              display: "flex",
                              gap: isXs ? "12px" : isSm ? "16px" : "20px",
                              width: "fit-content",
                              position: "absolute",
                              top: "50%",
                              transform: "translateY(-50%)",
                            }}
                          >
                            {[...searchSuggestions, ...searchSuggestions].map((suggestion, index) => (
                              <motion.button
                                key={`carousel-${index}`}
                                onClick={() => handleSuggestionClick(suggestion)}
                                whileHover={{
                                  scale: 1.1,
                                  rotateY: 15,
                                  boxShadow: `0 10px 30px ${suggestion.color}40`,
                                }}
                                style={{
                                  padding: isXs ? "10px 16px" : isSm ? "12px 20px" : "14px 24px",
                                  borderRadius: isXs ? "25px" : isSm ? "30px" : "35px",
                                  border: `3px solid ${suggestion.color}`,
                                  background: `linear-gradient(135deg, #ffffff 0%, ${suggestion.color}10 100%)`,
                                  color: "#2c3e50",
                                  fontSize: isXs ? "0.8rem" : isSm ? "0.85rem" : "0.9rem",
                                  fontWeight: "700",
                                  cursor: "pointer",
                                  boxShadow: `0 8px 25px ${suggestion.color}30`,
                                  whiteSpace: "nowrap",
                                  minWidth: "fit-content",
                                  flexShrink: 0,
                                  position: "relative",
                                  overflow: "hidden",
                                }}
                              >
                                <motion.div
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "2px",
                                    background: `linear-gradient(90deg, ${suggestion.color}, transparent, ${suggestion.color})`,
                                  }}
                                  animate={{
                                    x: ["-100%", "100%"],
                                  }}
                                  transition={{
                                    duration: 1.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    delay: index * 0.1,
                                  }}
                                />
                                {suggestion.text}
                              </motion.button>
                            ))}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Premium Glassmorphic Animated Preview Card */}
                <AnimatePresence>
                  {selectedSuggestion && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, y: -15, scale: 0.95 }}
                      animate={{ opacity: 1, height: "auto", y: 0, scale: 1 }}
                      exit={{ opacity: 0, height: 0, y: -15, scale: 0.95 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{
                        overflow: "hidden",
                        width: "100%",
                        maxWidth: isXs ? "100%" : isSm ? "500px" : isLg ? "700px" : "600px",
                        marginTop: "20px",
                        marginBottom: "24px",
                        borderRadius: isXs ? "16px" : "24px",
                        border: `2px solid ${selectedSuggestion.color}35`,
                        background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, ${selectedSuggestion.color}08 100%)`,
                        backdropFilter: "blur(20px)",
                        boxShadow: `0 20px 40px rgba(0, 0, 0, 0.04), 0 8px 24px ${selectedSuggestion.color}15`,
                        position: "relative",
                        zIndex: 10,
                        padding: isXs ? "20px" : "28px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        textAlign: "left",
                      }}
                    >
                      {/* Close button */}
                      <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0, 0, 0, 0.08)" }}
                        whileTap={{ scale: 0.9 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSuggestion(null);
                        }}
                        style={{
                          position: "absolute",
                          top: isXs ? "16px" : "20px",
                          right: isXs ? "16px" : "20px",
                          width: "32px",
                          height: "32px",
                          borderRadius: "50%",
                          background: "rgba(0, 0, 0, 0.04)",
                          border: "none",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          cursor: "pointer",
                          color: "#5f6368",
                        }}
                        aria-label="Close preview"
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </motion.button>

                      {/* Category badge */}
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <span
                          style={{
                            padding: "6px 14px",
                            borderRadius: "20px",
                            background: `${selectedSuggestion.color}15`,
                            color: selectedSuggestion.color,
                            fontSize: isXs ? "0.75rem" : "0.8rem",
                            fontWeight: "700",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                          }}
                        >
                          {selectedSuggestion.category}
                        </span>
                      </div>

                      {/* Text details */}
                      <div>
                        <h3
                          style={{
                            fontSize: isXs ? "1.35rem" : "1.65rem",
                            fontWeight: "750",
                            color: "#0A2647",
                            margin: "0 0 10px 0",
                            fontFamily: "'Outfit', sans-serif",
                            lineHeight: "1.25",
                          }}
                        >
                          {selectedSuggestion.text}
                        </h3>
                        <p
                          style={{
                            fontSize: isXs ? "0.9rem" : "1rem",
                            color: "#546E7A",
                            lineHeight: "1.6",
                            margin: 0,
                            fontWeight: "450",
                          }}
                        >
                          {selectedSuggestion.description}
                        </p>
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "4px" }}>
                        <motion.button
                          whileHover={{ 
                            scale: 1.03, 
                            boxShadow: `0 12px 28px ${selectedSuggestion.color}40`,
                            y: -2 
                          }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => router.push(`/courses/${selectedSuggestion.path}`)}
                          style={{
                            padding: isXs ? "10px 20px" : "14px 28px",
                            borderRadius: "50px",
                            background: `linear-gradient(135deg, ${selectedSuggestion.color} 0%, ${selectedSuggestion.color}dd 100%)`,
                            color: "#ffffff",
                            fontWeight: "700",
                            fontSize: isXs ? "0.85rem" : "0.95rem",
                            border: "none",
                            cursor: "pointer",
                            boxShadow: `0 8px 20px ${selectedSuggestion.color}25`,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "8px",
                          }}
                        >
                          Explore Course Details
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: "2px" }}>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : null}

              {/* Enhanced Search Results */}
              {/* <AnimatePresence>
                {showSearchResults && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      right: "0",
                      background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                      zIndex: 100,
                      maxHeight: isXs ? "300px" : isSm ? "350px" : "400px",
                      overflowY: "auto",
                      marginTop: isXs ? "8px" : isSm ? "10px" : "12px",
                      borderRadius: isXs ? "12px" : isSm ? "16px" : "20px",
                      border: "2px solid #e3f2fd",
                      backdropFilter: "blur(20px)",
                    }}
                    onMouseLeave={() => setShowSearchResults(false)}
                  >
                    {searchResults.map((course, index) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => {
                          router.push(
                            course.path || `/courses/${course.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                          )
                          setShowSearchResults(false)
                          setSearchQuery("")
                        }}
                        whileHover={{
                          backgroundColor: "#f0f8ff",
                          x: 8,
                          scale: 1.02,
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: isXs ? "12px" : isSm ? "16px" : "20px",
                          padding: isXs ? "14px 18px" : isSm ? "16px 20px" : "18px 24px",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          borderBottom: "1px solid #f0f0f0",
                          position: "relative",
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          style={{
                            width: isXs ? "44px" : isSm ? "48px" : "52px",
                            height: isXs ? "44px" : isSm ? "48px" : "52px",
                            borderRadius: isXs ? "8px" : isSm ? "10px" : "12px",
                            overflow: "hidden",
                            flexShrink: 0,
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                          }}
                        >
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </motion.div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontWeight: "600",
                              color: "#202124",
                              fontSize: isXs ? "0.95rem" : isSm ? "1rem" : "1.05rem",
                              marginBottom: "4px",
                            }}
                          >
                            {course.title}
                          </div>
                          <div
                            style={{
                              color: "#5f6368",
                              fontSize: isXs ? "0.8rem" : isSm ? "0.85rem" : "0.9rem",
                              fontWeight: "500",
                            }}
                          >
                            {course.categories.join(", ")}
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          style={{
                            color: "#1976d2",
                            fontSize: "1.2rem",
                          }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence> */}
              <AnimatePresence>
                {showSearchResults && searchResults.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      right: "0",
                      background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.15)",
                      zIndex: 100,
                      maxHeight: isXs ? "300px" : isSm ? "350px" : "400px",
                      overflowY: "auto",
                      marginTop: isXs ? "8px" : isSm ? "10px" : "12px",
                      borderRadius: isXs ? "12px" : isSm ? "16px" : "20px",
                      border: "2px solid #e3f2fd",
                      backdropFilter: "blur(20px)",
                    }}
                    onMouseLeave={() => setShowSearchResults(false)}
                  >
                    {searchResults.map((course, index) => (
                      <motion.div
                        key={course.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        onClick={() => {
                          router.push(
                            course.path || `/courses/${course.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
                          )
                          setShowSearchResults(false)
                          setSearchQuery("")
                        }}
                        whileHover={{
                          backgroundColor: "#f0f8ff",
                          x: 8,
                          scale: 1.02,
                        }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: isXs ? "12px" : isSm ? "16px" : "20px",
                          padding: isXs ? "14px 18px" : isSm ? "16px 20px" : "18px 24px",
                          transition: "all 0.3s ease",
                          cursor: "pointer",
                          borderBottom: "1px solid #f0f0f0",
                          position: "relative",
                        }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          style={{
                            width: isXs ? "44px" : isSm ? "48px" : "52px",
                            height: isXs ? "44px" : isSm ? "48px" : "52px",
                            borderRadius: isXs ? "8px" : isSm ? "10px" : "12px",
                            overflow: "hidden",
                            flexShrink: 0,
                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                          }}
                        >
                          <img
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                          />
                        </motion.div>
                        <div style={{ flex: 1 }}>
                          <div
                            style={{
                              fontWeight: "600",
                              color: "#202124",
                              fontSize: isXs ? "0.95rem" : isSm ? "1rem" : "1.05rem",
                              marginBottom: "4px",
                            }}
                          >
                            {course.title}
                          </div>
                          <div
                            style={{
                              color: "#5f6368",
                              fontSize: isXs ? "0.8rem" : isSm ? "0.85rem" : "0.9rem",
                              fontWeight: "500",
                            }}
                          >
                            {course.categories.join(", ")}
                          </div>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          style={{
                            color: "#1976d2",
                            fontSize: "1.2rem",
                          }}
                        >
                          →
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right side content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            style={{ position: "relative", marginTop: isMobile ? "24px" : "0", zIndex: 1 }}
          >
            <div
              style={{
                position: "relative",
                height: getImageHeight(),
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* Instructor image */}
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src="/banner_img-1.png"
                alt="Instructor"
                style={{
                  height: "100%",
                  maxWidth: "100%",
                  objectFit: "contain",
                  objectPosition: "center",
                  position: "relative",
                  zIndex: 2,
                  filter: "drop-shadow(0 15px 35px rgba(0,0,0,0.15))",
                }}
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Enhanced Total Students stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  rotate: 2,
                }}
                style={{
                  position: "absolute",
                  top: isXs ? "25%" : isSm ? "28%" : "30%",
                  left: isXs ? "5%" : isSm ? "8%" : isLg ? "0%" : "5%",
                  padding: statCardSize.padding,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: isXs ? "16px" : isSm ? "18px" : "20px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  width: statCardSize.width,
                  zIndex: 3,
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  border: "2px solid rgba(76, 175, 80, 0.1)",
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" as const }}
                  style={{
                    width: isXs ? "44px" : isSm ? "48px" : isLg ? "56px" : "52px",
                    height: isXs ? "44px" : isSm ? "48px" : isLg ? "56px" : "52px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%)",
                    marginBottom: isXs ? "8px" : isSm ? "10px" : "12px",
                    boxShadow: "0 8px 20px rgba(76, 175, 80, 0.3)",
                  }}
                >
                  <svg
                    width={isXs ? "20" : isSm ? "22" : isLg ? "28" : "26"}
                    height={isXs ? "20" : isSm ? "22" : isLg ? "28" : "26"}
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ color: "#4CAF50" }}
                  >
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
                <div
                  style={{
                    color: "#78909C",
                    fontSize: isXs ? "0.7rem" : isSm ? "0.75rem" : isLg ? "0.85rem" : "0.8rem",
                    textAlign: "center",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  Total Students
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  style={{
                    fontWeight: "600",
                    color: "#0A2647",
                    fontSize: isXs ? "1rem" : isSm ? "1.2rem" : isLg ? "1.4rem" : "1.1rem",
                    lineHeight: 1,
                  }}
                >
                  15k+
                </motion.div>
              </motion.div>

              {/* Enhanced Complete Graduation stat card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                  rotate: -2,
                }}
                style={{
                  position: "absolute",
                  bottom: isXs ? "15%" : isSm ? "18%" : "20%",
                  right: isXs ? "5%" : isSm ? "8%" : isLg ? "0%" : "5%",
                  padding: statCardSize.padding,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: isXs ? "16px" : isSm ? "18px" : "20px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.15)",
                  background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
                  width: statCardSize.width,
                  zIndex: 3,
                  transition: "all 0.4s ease",
                  cursor: "pointer",
                  border: "2px solid rgba(63, 81, 181, 0.1)",
                }}
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" as const }}
                  style={{
                    width: isXs ? "44px" : isSm ? "48px" : isLg ? "56px" : "52px",
                    height: isXs ? "44px" : isSm ? "48px" : isLg ? "56px" : "52px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "linear-gradient(135deg, #e8eaf6 0%, #c5cae9 100%)",
                    marginBottom: isXs ? "8px" : isSm ? "10px" : "12px",
                    boxShadow: "0 8px 20px rgba(63, 81, 181, 0.3)",
                  }}
                >
                  <svg
                    width={isXs ? "20" : isSm ? "22" : isLg ? "28" : "26"}
                    height={isXs ? "20" : isSm ? "22" : isLg ? "28" : "26"}
                    viewBox="0 0 24 24"
                    fill="none"
                    style={{ color: "#3F51B5" }}
                  >
                    <path
                      d="M22 10V6L12 2L2 6V10L12 14L22 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 12V17C6 18.0609 6.42143 19.0783 7.17157 19.8284C7.92172 20.5786 8.93913 21 10 21H14C15.0609 21 16.0783 20.5786 16.8284 19.8284C17.5786 19.0783 18 18.0609 18 17V12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>
                <div
                  style={{
                    color: "#78909C",
                    fontSize: isXs ? "0.7rem" : isSm ? "0.75rem" : isLg ? "0.85rem" : "0.8rem",
                    textAlign: "center",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  Complete Graduation
                </div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, delay: 0.5 }}
                  style={{
                    fontWeight: "600",
                    color: "#0A2647",
                    fontSize: isXs ? "1rem" : isSm ? "1.2rem" : isLg ? "1.4rem" : "1.1rem",
                    lineHeight: 1,
                  }}
                >
                  34k+
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
