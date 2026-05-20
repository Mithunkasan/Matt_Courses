// blue-50/40}

"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { ChevronDown, Sparkles, Star } from "lucide-react"
import LearnDropdown from "./learn-dropdown"
import { useRouter } from "next/navigation"

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const learnButtonRef = useRef<HTMLButtonElement>(null)
  const Router = useRouter()

  // Optimized scroll handler with throttling
  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY
    setIsSticky(scrollPosition > 100)
  }, [])

  useEffect(() => {
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", throttledScroll, { passive: true })
    return () => window.removeEventListener("scroll", throttledScroll)
  }, [handleScroll])

  // Optimized click outside handler
  useEffect(() => {
    if (!isSidebarOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node) &&
        event.target !== learnButtonRef.current
      ) {
        setIsSidebarOpen(false)
      }
    }

    // Use capture phase for better performance
    document.addEventListener("mousedown", handleClickOutside, true)
    return () => document.removeEventListener("mousedown", handleClickOutside, true)
  }, [isSidebarOpen])

  // Fast toggle function
  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev)
  }, [])

  // Memoized categories to prevent re-renders
  const categories = useMemo(() => ["FullStack", "Cloud", "Cybersecurity"], [])

  // Memoized category handlers
  const handleCategoryEnter = useCallback((category: string) => {
    setActiveCategory(category)
  }, [])

  const handleCategoryLeave = useCallback(() => {
    setActiveCategory(null)
  }, [])

  return (
    <header
      className={`w-full transition-all duration-300 ease-out z-40 bg-blue-50/40 ${
        isSticky
          ? "fixed top-0 left-0 right-0 backdrop-blur-xl border-b border-[rgb(25,118,210)]/20 shadow-xl py-[0.5rem]"
          : "relative"
      }`}
      ref={headerRef}
    >
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient overlay for depth */}
        <div
          className={`absolute inset-0 bg-gradient-to-r from-blue-100/30 via-transparent to-blue-100/30 transition-all duration-500 ${
            isSticky ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Floating orbs */}
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[rgb(25,118,210)]/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-blue-400/8 rounded-full blur-xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Learn Button with updated styling for blue-50/40 background */}
          <div className="flex items-center">
            <div className="relative">
              <button
                ref={learnButtonRef}
                onClick={toggleSidebar}
                className={`relative flex items-center px-6 py-3 rounded-2xl font-bold transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[rgb(25,118,210)]/40 overflow-hidden ${
                  isSidebarOpen
                    ? "bg-white text-[rgb(25,118,210)] border-2 border-[rgb(25,118,210)] shadow-lg"
                    : "bg-gradient-to-r from-[rgb(25,118,210)] to-blue-600 text-white shadow-lg hover:shadow-xl"
                }`}
                aria-expanded={isSidebarOpen}
              >
                {/* Background animation only when not open */}
                {!isSidebarOpen && (
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-[rgb(25,118,210)] opacity-0 hover:opacity-100 transition-opacity duration-200" />
                )}

                {/* Content */}
                <Sparkles
                  className={`w-5 h-5 mr-3 relative z-10 ${isSidebarOpen ? "text-[rgb(25,118,210)]" : "text-white"}`}
                />
                <span className="text-sm sm:text-base relative z-10 tracking-wide">Learn</span>
                <ChevronDown
                  className={`w-5 h-5 ml-3 relative z-10 transition-transform duration-200 ${
                    isSidebarOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Immediate dropdown rendering */}
              {isSidebarOpen && (
                <div className="absolute top-full left-0 mt-4 z-50">
                  <LearnDropdown />
                </div>
              )}
            </div>
          </div>

          {/* Categories Navigation with styling for blue-50/40 background */}
          <nav className="flex-1 flex items-center justify-center max-w-3xl mx-4 sm:mx-8">
            {/* Desktop Categories */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-3 bg-white/70 backdrop-blur-lg rounded-2xl p-2 border border-[rgb(25,118,210)]/15 shadow-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onMouseEnter={() => handleCategoryEnter(category)}
                  onMouseLeave={handleCategoryLeave}
                  onClick={() => Router.push(`software/${category}`)}
                  className={`relative px-5 py-2.5 text-sm lg:text-base font-semibold rounded-xl transition-all duration-200 group ${
                    activeCategory === category
                      ? "text-white bg-gradient-to-r from-[rgb(25,118,210)] to-blue-600 shadow-lg transform scale-105"
                      : isSticky
                        ? "text-gray-700 hover:text-[rgb(25,118,210)] hover:bg-white/80"
                        : "text-gray-800 hover:text-[rgb(25,118,210)] hover:bg-white hover:scale-102"
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    {category}
                    {activeCategory === category && <Star className="w-4 h-4 ml-2 text-yellow-300" />}
                  </span>

                  {/* Underline */}
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-[rgb(25,118,210)] transition-all duration-200 ${
                      activeCategory === category ? "w-3/4 -translate-x-1/2" : "w-0 -translate-x-1/2"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Mobile Categories */}
            <div className="md:hidden flex items-center space-x-3 overflow-x-auto scrollbar-hide w-full">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`flex-shrink-0 px-4 py-2 text-xs font-semibold rounded-xl transition-all duration-200 whitespace-nowrap border ${
                    isSticky
                      ? "text-gray-700 hover:text-white hover:bg-[rgb(25,118,210)] border-[rgb(25,118,210)]/30 bg-white/80"
                      : "text-gray-800 hover:text-white hover:bg-[rgb(25,118,210)] bg-white/90 border-[rgb(25,118,210)]/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </nav>

          {/* Decorative Element */}
          <div className="flex items-center">
            <div className="hidden sm:flex items-center space-x-1.5">
              <div className="w-2.5 h-8 bg-gradient-to-b from-[rgb(25,118,210)] to-blue-400 rounded-full" />
              <div className="w-2 h-6 bg-gradient-to-b from-blue-500 to-[rgb(25,118,210)] rounded-full" />
              <div className="w-1.5 h-4 bg-gradient-to-b from-[rgb(25,118,210)] to-blue-500 rounded-full" />
            </div>
          </div>
        </div>

        {/* Mobile Categories Alternative Layout */}
        <div className="md:hidden border-t border-[rgb(25,118,210)]/15 py-2">
          <div className="flex items-center justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={`mobile-${category}`}
                className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  isSticky ? "text-gray-600 hover:text-[rgb(25,118,210)]" : "text-gray-700 hover:text-[rgb(25,118,210)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgb(25,118,210)] to-transparent transition-opacity duration-300 ${
          isSticky ? "opacity-100" : "opacity-60"
        }`}
      />
    </header>
  )
}

