/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState, useEffect, useRef } from "react"
import SvgWave from "./Svgwave"

type props = {
  title: string
}

export default function PopularTopics({ title }: props) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  const topics = [
    {
      title: "Artificial Intelligence",
      courses: 24,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M30 15C30.8284 15 31.5 15.6716 31.5 16.5C31.5 17.3284 30.8284 18 30 18C29.1716 18 28.5 17.3284 28.5 16.5C28.5 15.6716 29.1716 15 30 15Z"
            fill="currentColor"
          />
          <path
            d="M19.5 28.5C19.5 27.6716 18.8284 27 18 27C17.1716 27 16.5 27.6716 16.5 28.5C16.5 29.3284 17.1716 30 18 30C18.8284 30 19.5 29.3284 19.5 28.5Z"
            fill="currentColor"
          />
          <path
            d="M18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18C17.3284 18 18 17.3284 18 16.5Z"
            fill="currentColor"
          />
          <path
            d="M42 28.5C42 27.6716 41.3284 27 40.5 27C39.6716 27 39 27.6716 39 28.5C39 29.3284 39.6716 30 40.5 30C41.3284 30 42 29.3284 42 28.5Z"
            fill="currentColor"
          />
          <path
            d="M40.5 15C41.3284 15 42 15.6716 42 16.5C42 17.3284 41.3284 18 40.5 18C39.6716 18 39 17.3284 39 16.5C39 15.6716 39.6716 15 40.5 15Z"
            fill="currentColor"
          />
          <path
            d="M30 42C30.8284 42 31.5 41.3284 31.5 40.5C31.5 39.6716 30.8284 39 30 39C29.1716 39 28.5 39.6716 28.5 40.5C28.5 41.3284 29.1716 42 30 42Z"
            fill="currentColor"
          />
          <path
            d="M30 45C38.2843 45 45 38.2843 45 30C45 21.7157 38.2843 15 30 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M30 15C21.7157 15 15 21.7157 15 30C15 38.2843 21.7157 45 30 45"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path d="M30 15V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M40.5 18L42.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M45 30H48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M40.5 42L42.5 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 45V48" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19.5 42L17.5 44" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 30H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M19.5 18L17.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Leadership",
      courses: 18,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="7.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          <path d="M30 15V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 37.5V45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M45 30H37.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22.5 30H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M40.6066 19.3934L35.3033 24.6967" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24.6967 35.3033L19.3934 40.6066" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M40.6066 40.6066L35.3033 35.3033" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M24.6967 24.6967L19.3934 19.3934" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Supply Chain",
      courses: 12,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" r="7.5" fill="currentColor" />
          <path
            d="M30 22.5C30 18.3579 33.3579 15 37.5 15C41.6421 15 45 18.3579 45 22.5C45 26.6421 41.6421 30 37.5 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M30 37.5C30 41.6421 26.6421 45 22.5 45C18.3579 45 15 41.6421 15 37.5C15 33.3579 18.3579 30 22.5 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M37.5 37.5C37.5 41.6421 34.1421 45 30 45"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M22.5 22.5C22.5 18.3579 25.8579 15 30 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Computer Programming",
      courses: 32,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="15" width="30" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <rect
            x="19.5"
            y="19.5"
            width="6"
            height="6"
            rx="1"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <rect x="19.5" y="27" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="19.5" y="34.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="27" y="19.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="27" y="27" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="27" y="34.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="34.5" y="19.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="34.5" y="27" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="34.5" y="34.5" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "Probability",
      courses: 8,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 30L30 45" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <rect x="30" y="15" width="7.5" height="7.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          <rect
            x="37.5"
            y="37.5"
            width="7.5"
            height="7.5"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
    {
      title: "Python",
      courses: 28,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 15H37.5V37.5H15V15Z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="45" cy="45" r="7.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M45 41.25V45H48.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Machine Learning",
      courses: 22,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15 37.5H45V42C45 43.6569 43.6569 45 42 45H18C16.3431 45 15 43.6569 15 42V37.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M18.75 37.5V33.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M41.25 37.5V33.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M15 30H45V37.5H15V30Z" stroke="currentColor" strokeWidth="1.5" />
          <path d="M18.75 30V26.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M41.25 30V26.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path
            d="M15 18.75C15 17.0931 16.3431 15.75 18 15.75H42C43.6569 15.75 45 17.0931 45 18.75V30H15V18.75Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="30" cy="22.5" r="3.75" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      title: "Computer Science",
      courses: 19,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 15H37.5V37.5H15V15Z" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="45" cy="45" r="7.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M45 41.25V45H48.75"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="45" cy="45" r="7.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          <path d="M41.25 45H48.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M45 41.25V48.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Writing",
      courses: 15,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.75 15H41.25C42.0784 15 42.75 15.6716 42.75 16.5V43.5C42.75 44.3284 42.0784 45 41.25 45H18.75C17.9216 45 17.25 44.3284 17.25 43.5V16.5C17.25 15.6716 17.9216 15 18.75 15Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M22.5 22.5H37.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22.5 30H37.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22.5 37.5H30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Statistics",
      courses: 11,
      icon: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 45V37.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M22.5 45V30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M30 45V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M37.5 45V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="45" cy="30" r="7.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M42.1967 27.1967L45 30L47.8033 27.1967"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ]

  // CSS keyframes as string for style tag
  const keyframesStyle = `
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes gentleFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes subtleGlow {
  0%, 100% { box-shadow: 0 4px 12px rgba(25, 118, 210, 0.1); }
  50% { box-shadow: 0 8px 24px rgba(25, 118, 210, 0.2); }
}
`

  // Container styles with glassmorphism effect
  const containerStyle = {
    width: "100%",
    margin: "0",
    padding: "3rem 6% 5rem",
    position: "relative" as const,
    overflow: "hidden" as const,
    backgroundColor: "white",
    borderRadius: "1rem",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
  }

  // Background with gradient and mesh
  const backgroundStyle = {
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "white",
    zIndex: -2,
    overflow: "hidden" as const,
  }

  // Mesh grid background
  const meshGridStyle = {
    display: "none",
  }

  // Spotlight effect that follows mouse
  const spotlightStyle = {
    display: "none",
  }

  // Modern heading with gradient text
  const headingContainerStyle = {
    position: "relative" as const,
    marginBottom: "3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #1976d2 0%, #64b5f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    textFillColor: "transparent",
    position: "relative" as const,
    zIndex: 1,
    letterSpacing: "-0.03em",
    marginBottom: "0.5rem",
  }

  const headingUnderlineStyle = {
    position: "absolute" as const,
    bottom: "-0.5rem",
    left: 0,
    height: "0.25rem",
    width: "60%",
    background: "linear-gradient(90deg, #1976d2 0%, rgba(100, 181, 246, 0.5) 100%)",
    borderRadius: "9999px",
  }

  // Search bar with modern styling
  const searchContainerStyle = {
    position: "relative" as const,
    marginBottom: "2rem",
    maxWidth: "500px",
  }

  const searchInputStyle = {
    width: "100%",
    padding: "1rem 1.5rem",
    paddingLeft: "3rem",
    fontSize: "1rem",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    border: "1px solid rgba(25, 118, 210, 0.2)",
    borderRadius: "9999px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
    outline: "none",
    transition: "all 0.3s ease",
  }

  const searchIconStyle = {
    position: "absolute" as const,
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: "#1976d2",
    width: "1.25rem",
    height: "1.25rem",
  }

  // Grid with responsive layout
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "2rem",
    position: "relative" as const,
    zIndex: 1,
  }

  // Ultra-modern card with glassmorphism and advanced hover effects
  const cardStyle = (index: number) => {
    const isHovered = hoveredIndex === index

    return {
      position: "relative" as const,
      backgroundColor: isHovered ? "rgba(25, 118, 210, 0.05)" : "rgba(255, 255, 255, 0.95)",
      borderRadius: "1rem",
      padding: "2rem",
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center" as const,
      justifyContent: "center" as const,
      transition: "all 0.3s ease",
      aspectRatio: "1/1",
      transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
      boxShadow: isHovered
        ? "0 12px 32px rgba(25, 118, 210, 0.25), 0 4px 12px rgba(25, 118, 210, 0.15)"
        : "0 4px 12px rgba(0, 0, 0, 0.08)",
      border: isHovered ? "1px solid rgba(25, 118, 210, 0.3)" : "1px solid rgba(0, 0, 0, 0.1)",
      animation: mounted ? `fadeIn 0.6s ease-out forwards ${index * 0.1}s` : "none",
      opacity: mounted ? 1 : 0,
      overflow: "hidden" as const,
    }
  }

  // Card content container
  const cardContentStyle = {
    position: "relative" as const,
    zIndex: 1,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center" as const,
    justifyContent: "center" as const,
    width: "100%",
    height: "100%",
  }

  // Card background gradient effect
  const cardBackgroundGradientStyle = (index: number) => {
    const isHovered = hoveredIndex === index

    return {
      position: "absolute" as const,
      inset: 0,
      background: isHovered
        ? "linear-gradient(135deg, rgba(25, 118, 210, 0.08) 0%, rgba(33, 150, 243, 0.05) 50%, rgba(25, 118, 210, 0.08) 100%)"
        : "transparent",
      borderRadius: "1rem",
      transition: "all 0.3s ease",
      zIndex: 0,
    }
  }

  // Modern icon container with 3D effect and gradient
  const iconContainerStyle = (index: number) => {
    const isHovered = hoveredIndex === index

    return {
      marginBottom: "1.5rem",
      width: "4rem",
      height: "4rem",
      display: "flex",
      alignItems: "center" as const,
      justifyContent: "center" as const,
      borderRadius: "0.75rem",
      background: isHovered
        ? "linear-gradient(135deg, #1976d2 0%, #1565c0 50%, #0d47a1 100%)"
        : "linear-gradient(135deg, #e3f2fd 0%, #bbdefb 50%, #90caf9 100%)",
      color: isHovered ? "white" : "#1976d2",
      transition: "all 0.3s ease",
      boxShadow: isHovered
        ? "0 8px 20px rgba(25, 118, 210, 0.4), 0 4px 8px rgba(25, 118, 210, 0.2)"
        : "0 2px 8px rgba(25, 118, 210, 0.15)",
      transform: isHovered ? "scale(1.1)" : "scale(1)",
    }
  }

  // Modern title with gradient on hover
  const titleStyle = (index: number) => {
    const isHovered = hoveredIndex === index

    return {
      textAlign: "center" as const,
      fontWeight: 700,
      fontSize: "1.25rem",
      color: isHovered ? "#1976d2" : "#374151",
      transition: "all 0.3s ease",
      marginBottom: "0.5rem",
      textShadow: isHovered ? "0 1px 2px rgba(25, 118, 210, 0.1)" : "none",
    }
  }

  // Course count badge
  const courseBadgeStyle = (index: number) => {
    const isHovered = hoveredIndex === index

    // REVERSED: Default state is now the previous hover state
    return {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "0.25rem 0.75rem",
      borderRadius: "9999px",
      fontSize: "0.75rem",
      fontWeight: 600,
      background: isHovered
        ? "linear-gradient(135deg, #f0f8ff 0%, #e6f0fa 100%)"
        : "linear-gradient(135deg, #1976d2 0%, #2196f3 100%)",
      color: isHovered ? "#1976d2" : "white",
      boxShadow: isHovered
        ? "0 1px 2px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(25, 118, 210, 0.1)"
        : "0 2px 4px rgba(25, 118, 210, 0.2)",
      transition: "all 0.3s ease",
      transform: isHovered ? "translateZ(5px)" : "translateZ(25px) scale(1.1)",
    }
  }

  // Media query styles using inline styles and useEffect
  useEffect(() => {
    const handleResize = () => {
      const grid = document.getElementById("topics-grid")
      if (grid) {
        if (window.innerWidth < 640) {
          grid.style.gridTemplateColumns = "repeat(1, 1fr)"
        } else if (window.innerWidth < 768) {
          grid.style.gridTemplateColumns = "repeat(2, 1fr)"
        } else if (window.innerWidth < 1024) {
          grid.style.gridTemplateColumns = "repeat(3, 1fr)"
        } else if (window.innerWidth < 1280) {
          grid.style.gridTemplateColumns = "repeat(4, 1fr)"
        } else {
          grid.style.gridTemplateColumns = "repeat(5, 1fr)"
        }
      }
    }

    if (mounted) {
      handleResize()
      window.addEventListener("resize", handleResize)
    }

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [mounted])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />
      <div style={containerStyle} ref={containerRef}>
        {/* Background with mesh grid */}
        <div style={backgroundStyle} />
        <div style={meshGridStyle} />

        {/* Spotlight effect that follows mouse */}
        <div style={spotlightStyle} />

        {/* Modern heading with gradient text */}
        <div style={headingContainerStyle}>
          {/* <h2 style={headingStyle}>Popular topics</h2> */}
          {/* <div style={headingUnderlineStyle} /> */}
          <h2 className="text-[36px] font-bold text-gray-800">
            Popular
            <span className="text-blue-600 px-2 py-1 relative">
              {title}
              <SvgWave className="" />
            </span>
          </h2>
        </div>

        {/* Search bar */}
        {/* <div style={searchContainerStyle}>
          <input type="text" placeholder="Search topics..." style={searchInputStyle} />
          <div style={searchIconStyle}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div> */}

        {/* Topics grid */}
        <div id="topics-grid" style={gridStyle}>
          {topics.map((topic, index) => (
            <div
              key={index}
              style={cardStyle(index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
            >
              {/* Card background gradient */}
              <div style={cardBackgroundGradientStyle(index)} />
              {/* Card content */}
              <div style={cardContentStyle}>
                {/* Icon container with 3D effect */}
                <div style={iconContainerStyle(index)}>
                  {/* Icon */}
                  {topic.icon}
                </div>

                {/* Title with 3D effect */}
                <h3 style={titleStyle(index)}>{topic.title}</h3>

                {/* Course count badge */}
                {/* <div style={courseBadgeStyle(index)}>
                  {topic.courses} {topic.courses === 1 ? "Course" : "Courses"}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
