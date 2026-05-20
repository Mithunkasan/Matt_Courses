"use client"

import { useState, useCallback, useMemo, useEffect } from "react"
import Link from "next/link"
import {
  ChevronRight,
  X,
  BookOpen,
  Award,
  TrendingUp,
  Users,
  Brain,
  Database,
  DollarSign,
  Building,
  Shield,
  Code,
  Sparkles,

  Star,
  ArrowRight,
  Zap,
} from "lucide-react"

const sidebarItems = {
  byGoal: [
    { id: "take-course", label: "Take a course", href: "/courses", icon: BookOpen, color: "from-blue-500 to-blue-600" },
    {
      id: "earn-certificate",
      label: "Earn a certificate",
      href: "/certificates",
      icon: Award,
      color: "from-amber-500 to-orange-500",
    },
    {
      id: "grow-skills",
      label: "Grow career skills",
      href: "/skills",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "earn-degree",
      label: "Earn a degree",
      href: "/degrees",
      icon: Users,
      color: "from-purple-500 to-violet-500",
    },
  ],
  byTopic: [
    {
      id: "artificial-intelligence",
      label: "Artificial Intelligence",
      href: "/topic/ai",
      icon: Brain,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: "data-science",
      label: "Data Science",
      href: "/topic/data-science",
      icon: Database,
      color: "from-cyan-500 to-blue-500",
    },
    { id: "finance", label: "Finance", href: "/topic/finance", icon: DollarSign, color: "from-green-500 to-teal-500" },
    {
      id: "business-administration",
      label: "Business Administration",
      href: "/topic/business",
      icon: Building,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "cybersecurity",
      label: "Cybersecurity",
      href: "/topic/cybersecurity",
      icon: Shield,
      color: "from-red-500 to-pink-500",
    },
    {
      id: "computer-science",
      label: "Computer Science",
      href: "/topic/computer-science",
      icon: Code,
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: "view-all-topics",
      label: "View all topics",
      href: "/topics",
      icon: Sparkles,
      color: "from-violet-500 to-purple-500",
    },
  ],
  careerResources: [
    {
      id: "career-resources",
      label: "Career resources",
      href: "/career",
      icon: Star,
      color: "from-yellow-500 to-amber-500",
    },
  ],
  schoolsPartners: [
    {
      id: "schools-partners",
      label: "Schools & Partners",
      href: "/partners",
      icon: Users,
      color: "from-teal-500 to-cyan-500",
    },
  ],
}

const popupContent = {
  "take-course": {
    title: "Courses",
    subtitle: "Discover thousands of courses from world-class institutions",
    buttons: [
      { label: "View all courses", href: "/allcourses", primary: true },
      { label: "Courses with certificates", href: "/Certificate", primary: false },
    ],
    sections: [
      {
        title: "Browse by topic",
        icon: BookOpen,
        links: [
          { label: "AI courses", href: "/courses/ai", popular: true },
          { label: "Cybersecurity courses", href: "/courses/cybersecurity", popular: true },
          { label: "Data science courses", href: "/courses/data-science", popular: true },
          { label: "Analytics courses", href: "/courses/analytics" },
          { label: "Excel courses", href: "/courses/excel" },
          { label: "Programming courses", href: "/courses/programming", popular: true },
          { label: "SQL courses", href: "/courses/sql" },
          { label: "Finance courses", href: "/courses/finance" },
          { label: "Digital marketing courses", href: "/courses/digital-marketing" },
          { label: "Computer science courses", href: "/courses/computer-science" },
          { label: "Coding courses", href: "/courses/coding" },
          { label: "Leadership courses", href: "/courses/leadership" },
          { label: "Accounting courses", href: "/courses/accounting" },
          { label: "Google courses", href: "/courses/google", popular: true },
        ],
      },
      {
        title: "Browse by skill",
        icon: TrendingUp,
        links: [
          { label: "AI in healthcare courses", href: "/skills/ai-healthcare", popular: true },
          { label: "Python data science courses", href: "/skills/python-data-science", popular: true },
          { label: "AI for business courses", href: "/skills/ai-business" },
          { label: "HR analytics courses", href: "/skills/hr-analytics" },
          { label: "Python machine learning courses", href: "/skills/python-ml", popular: true },
          { label: "AI marketing courses", href: "/skills/ai-marketing" },
          { label: "Business marketing courses", href: "/skills/business-marketing" },
          { label: "AI and machine learning courses", href: "/skills/ai-ml" },
          { label: "Business management courses", href: "/skills/business-management" },
          { label: "HTML css courses", href: "/skills/html-css" },
        ],
      },
      {
        title: "Browse by difficulty",
        icon: Zap,
        links: [
          { label: "Excel courses for beginners", href: "/difficulty/excel-beginners", popular: true },
          { label: "Advanced Excel courses", href: "/difficulty/excel-advanced" },
          { label: "Python courses for beginners", href: "/difficulty/python-beginners", popular: true },
          { label: "Accounting courses for beginners", href: "/difficulty/accounting-beginners" },
          { label: "AI courses for beginners", href: "/difficulty/ai-beginners", popular: true },
          { label: "Data analytics courses for beginners", href: "/difficulty/data-analytics-beginners" },
          { label: "Cybersecurity courses for beginners", href: "/difficulty/cybersecurity-beginners" },
          { label: "HR courses for beginners", href: "/difficulty/hr-beginners" },
          { label: "Finance courses for beginners", href: "/difficulty/finance-beginners" },
          { label: "Coding courses for beginners", href: "/difficulty/coding-beginners", popular: true },
          { label: "IT courses for beginners", href: "/difficulty/it-beginners" },
          { label: "Bookkeeping courses for beginners", href: "/difficulty/bookkeeping-beginners" },
          { label: "Computer programming courses for beginners", href: "/difficulty/programming-beginners" },
          { label: "Project management courses for beginners", href: "/difficulty/project-management-beginners" },
        ],
      },
      {
        title: "Browse by partner",
        icon: Star,
        links: [
          { label: "Google AI courses", href: "/partners/google-ai", popular: true },
          { label: "MIT AI courses", href: "/partners/mit-ai", popular: true },
          { label: "Harvard AI courses", href: "/partners/harvard-ai", popular: true },
          { label: "IBM data science courses", href: "/partners/ibm-data-science" },
          { label: "Google python courses", href: "/partners/google-python" },
        ],
      },
    ],
  },
  "earn-certificate": {
    title: "Certificates",
    subtitle: "Earn industry-recognized certificates to advance your career",
    buttons: [
      { label: "View all certificates", href: "/certificates", primary: true },
      { label: "Professional certificates", href: "/certificates/professional", primary: false },
    ],
    sections: [
      {
        title: "Popular certificates",
        icon: Award,
        links: [
          { label: "Data Science Certificate", href: "/certificates/data-science", popular: true },
          { label: "Digital Marketing Certificate", href: "/certificates/digital-marketing", popular: true },
          { label: "Cybersecurity Certificate", href: "/certificates/cybersecurity", popular: true },
          { label: "AI Certificate", href: "/certificates/ai", popular: true },
          { label: "Business Analytics Certificate", href: "/certificates/business-analytics" },
        ],
      },
      {
        title: "By provider",
        icon: Building,
        links: [
          { label: "Harvard certificates", href: "/certificates/harvard", popular: true },
          { label: "MIT certificates", href: "/certificates/mit", popular: true },
          { label: "Google certificates", href: "/certificates/google", popular: true },
          { label: "IBM certificates", href: "/certificates/ibm" },
          { label: "Microsoft certificates", href: "/certificates/microsoft" },
        ],
      },
    ],
  },
  "artificial-intelligence": {
    title: "Artificial Intelligence",
    subtitle: "Master the future of technology with AI courses",
    buttons: [
      { label: "View all AI courses", href: "/topic/ai", primary: true },
      { label: "AI certificates", href: "/topic/ai/certificates", primary: false },
    ],
    sections: [
      {
        title: "AI specializations",
        icon: Brain,
        links: [
          { label: "Machine Learning", href: "/topic/ai/machine-learning", popular: true },
          { label: "Deep Learning", href: "/topic/ai/deep-learning", popular: true },
          { label: "Natural Language Processing", href: "/topic/ai/nlp", popular: true },
          { label: "Computer Vision", href: "/topic/ai/computer-vision" },
          { label: "AI Ethics", href: "/topic/ai/ethics" },
        ],
      },
      {
        title: "AI applications",
        icon: Sparkles,
        links: [
          { label: "AI in Healthcare", href: "/topic/ai/healthcare", popular: true },
          { label: "AI in Business", href: "/topic/ai/business", popular: true },
          { label: "AI in Finance", href: "/topic/ai/finance" },
          { label: "AI in Marketing", href: "/topic/ai/marketing" },
        ],
      },
    ],
  },
  "data-science": {
    title: "Data Science",
    subtitle: "Turn data into insights with comprehensive data science training",
    buttons: [
      { label: "View all Data Science courses", href: "/topic/data-science", primary: true },
      { label: "Data Science certificates", href: "/topic/data-science/certificates", primary: false },
    ],
    sections: [
      {
        title: "Core skills",
        icon: Database,
        links: [
          { label: "Python for Data Science", href: "/topic/data-science/python", popular: true },
          { label: "R Programming", href: "/topic/data-science/r" },
          { label: "SQL for Data Science", href: "/topic/data-science/sql", popular: true },
          { label: "Statistics", href: "/topic/data-science/statistics" },
          { label: "Data Visualization", href: "/topic/data-science/visualization", popular: true },
        ],
      },
      {
        title: "Advanced topics",
        icon: TrendingUp,
        links: [
          { label: "Big Data", href: "/topic/data-science/big-data" },
          { label: "Data Engineering", href: "/topic/data-science/engineering", popular: true },
          { label: "Business Analytics", href: "/topic/data-science/business-analytics" },
        ],
      },
    ],
  },
}

export default function LearnDropdown() {
  const [activePopup, setActivePopup] = useState<string | null>(null)
  const [searchQuery] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  // Check for mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Custom scrollbar styling for webkit browsers
  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
    .learn-dropdown-sidebar::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .learn-dropdown-sidebar::-webkit-scrollbar-track {
      background: rgb(239 246 255 / 0.5);
      border-radius: 9999px;
    }
    .learn-dropdown-sidebar::-webkit-scrollbar-thumb {
      background: rgb(25 118 210 / 0.6);
      border-radius: 9999px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .learn-dropdown-sidebar:hover::-webkit-scrollbar-thumb {
      background: rgb(25 118 210 / 0.8);
    }
    
    .learn-dropdown-popup::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    .learn-dropdown-popup::-webkit-scrollbar-track {
      background: rgb(30 64 175 / 0.3);
      border-radius: 9999px;
    }
    .learn-dropdown-popup::-webkit-scrollbar-thumb {
      background: rgb(255 255 255 / 0.3);
      border-radius: 9999px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .learn-dropdown-popup:hover::-webkit-scrollbar-thumb {
      background: rgb(255 255 255 / 0.5);
    }
  `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const handleSidebarItemClick = useCallback((itemId: string) => {
    setActivePopup((prev) => (prev === itemId ? null : itemId))
  }, [])

  const closePopup = useCallback(() => {
    setActivePopup(null)
  }, [])

  // Memoized popup content to prevent re-renders
  const currentPopupContent = useMemo(() => {
    return activePopup ? popupContent[activePopup as keyof typeof popupContent] : null
  }, [activePopup])

  // Filter sidebar items based on search
  const filteredSidebarItems = useMemo(() => {
    if (!searchQuery) return sidebarItems

    const filtered = { ...sidebarItems }
    Object.keys(filtered).forEach((key) => {
      filtered[key as keyof typeof filtered] = filtered[key as keyof typeof filtered].filter((item) =>
        item.label.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    })
    return filtered
  }, [searchQuery])

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden" onClick={closePopup} />}

      <div
        className={`fixed top-[81px] left-0 z-50 flex h-[calc(100vh-4rem)] animate-in slide-in-from-left duration-300 ${
          isMobile ? "w-full" : ""
        }`}
      >
        {/* Sidebar with enhanced design */}
        <div
          className={`bg-white/98 backdrop-blur-2xl border-r border-[rgb(25,118,210)]/15 shadow-2xl h-full overflow-y-auto ${
            isMobile ? "w-full max-w-sm" : "w-80"
          } learn-dropdown-sidebar`}
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgb(25 118 210 / 0.6) rgb(239 246 255 / 0.5)",
          }}
          onMouseEnter={(e) => {
            const target = e.currentTarget
            target.style.scrollbarColor = "rgb(25 118 210 / 0.8) rgb(239 246 255 / 0.5)"
          }}
          onMouseLeave={(e) => {
            const target = e.currentTarget
            target.style.scrollbarColor = "rgb(25 118 210 / 0.6) rgb(239 246 255 / 0.5)"
          }}
        >

          {/* By Goal Section */}
          <div className="p-4">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-[rgb(25,118,210)] to-blue-600 rounded-xl flex items-center justify-center mr-3">
                <TrendingUp className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[rgb(25,118,210)]">By Goal</h3>
            </div>
            <ul className="space-y-2">
              {filteredSidebarItems.byGoal.map((item) => {
                const IconComponent = item.icon
                return (
                  <li key={item.id}>
                    <div
                      className={`group flex items-center justify-between py-3 sm:py-4 px-3 sm:px-4 text-xs sm:text-sm cursor-pointer rounded-2xl transition-all duration-300 transform hover:scale-[1.02] ${
                        activePopup === item.id
                          ? "bg-gradient-to-r from-[rgb(25,118,210)] to-blue-600 text-white shadow-xl scale-[1.02]"
                          : "text-gray-700 hover:bg-gradient-to-r hover:from-[rgb(25,118,210)]/10 hover:to-blue-50 hover:text-[rgb(25,118,210)] hover:shadow-lg"
                      }`}
                      onClick={() => handleSidebarItemClick(item.id)}
                    >
                      <div className="flex items-center flex-1">
                        <div
                          className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center mr-3 sm:mr-4 transition-all duration-300 ${
                            activePopup === item.id
                              ? "bg-white/20 backdrop-blur-sm"
                              : `bg-gradient-to-r ${item.color} shadow-lg group-hover:shadow-xl`
                          }`}
                        >
                          <IconComponent
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${activePopup === item.id ? "text-white" : "text-white"}`}
                          />
                        </div>
                        <div>
                          <span className="font-semibold block text-xs sm:text-sm">{item.label}</span>
                          <span
                            className={`text-xs ${activePopup === item.id ? "text-blue-100" : "text-gray-500"} hidden sm:block`}
                          >
                            Explore options
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 sm:h-5 sm:w-5 transition-all duration-300 ${
                          activePopup === item.id
                            ? "rotate-90 text-white"
                            : "text-gray-400 group-hover:text-[rgb(25,118,210)] group-hover:translate-x-1"
                        }`}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* By Topic Section */}
          <div className="p-4 border-t border-[rgb(25,118,210)]/10">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3">
                <Brain className="w-4 h-4 text-white" />
              </div>
              <h3 className="font-bold text-sm sm:text-base text-[rgb(25,118,210)]">By Topic</h3>
            </div>
            <ul className="space-y-2">
              {filteredSidebarItems.byTopic.map((item) => {
                const IconComponent = item.icon
                return (
                  <li key={item.id}>
                    <div
                      className={`group flex items-center justify-between py-2.5 sm:py-3 px-3 sm:px-4 text-xs sm:text-sm cursor-pointer rounded-xl transition-all duration-300 transform hover:scale-[1.01] ${
                        activePopup === item.id
                          ? "bg-gradient-to-r from-[rgb(25,118,210)] to-blue-600 text-white shadow-lg scale-[1.01]"
                          : "text-gray-700 hover:bg-[rgb(25,118,210)]/8 hover:text-[rgb(25,118,210)] hover:shadow-md"
                      }`}
                      onClick={() => handleSidebarItemClick(item.id)}
                    >
                      <div className="flex items-center flex-1">
                        <div
                          className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center mr-2.5 sm:mr-3 transition-all duration-300 ${
                            activePopup === item.id
                              ? "bg-white/20"
                              : `bg-gradient-to-r ${item.color} shadow-md group-hover:shadow-lg`
                          }`}
                        >
                          <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        </div>
                        <span className="font-medium text-xs sm:text-sm">{item.label}</span>
                      </div>
                      <ChevronRight
                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-all duration-300 ${
                          activePopup === item.id
                            ? "rotate-90 text-white"
                            : "text-gray-400 group-hover:text-[rgb(25,118,210)] group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Career Resources & Schools Section */}
          <div className="p-4 border-t border-[rgb(25,118,210)]/10">
            <ul className="space-y-2">
              {[...filteredSidebarItems.careerResources, ...filteredSidebarItems.schoolsPartners].map((item) => {
                const IconComponent = item.icon
                return (
                  <li key={item.id}>
                    <div
                      className={`group flex items-center justify-between py-3 px-4 text-sm cursor-pointer rounded-xl transition-all duration-300 transform hover:scale-[1.01] ${
                        activePopup === item.id
                          ? "bg-gradient-to-r from-[rgb(25,118,210)] to-blue-600 text-white shadow-lg scale-[1.01]"
                          : "text-gray-700 hover:bg-[rgb(25,118,210)]/8 hover:text-[rgb(25,118,210)] hover:shadow-md"
                      }`}
                      onClick={() => handleSidebarItemClick(item.id)}
                    >
                      <div className="flex items-center flex-1">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 ${
                            activePopup === item.id
                              ? "bg-white/20"
                              : `bg-gradient-to-r ${item.color} shadow-md group-hover:shadow-lg`
                          }`}
                        >
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium">{item.label}</span>
                      </div>
                      <ChevronRight
                        className={`h-4 w-4 transition-all duration-300 ${
                          activePopup === item.id
                            ? "rotate-90 text-white"
                            : "text-gray-400 group-hover:text-[rgb(25,118,210)] group-hover:translate-x-0.5"
                        }`}
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Browse Catalog Section */}
          <div className="p-3 sm:p-4 border-t border-[rgb(25,118,210)]/10 bg-gradient-to-r from-blue-50/60 to-[rgb(25,118,210)]/5">
            <div className="text-center">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-[rgb(25,118,210)] to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="font-bold text-xs sm:text-sm text-[rgb(25,118,210)] mb-1 sm:mb-2">Still looking?</h3>
              <p className="text-xs text-gray-600 mb-3 sm:mb-4 px-2">
                Explore our complete catalog of courses and programs
              </p>
              <Link
                href="/catalog"
                className="inline-flex items-center bg-gradient-to-r from-[rgb(25,118,210)] to-blue-600 text-white rounded-2xl px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold hover:from-blue-600 hover:to-[rgb(25,118,210)] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
              >
                Browse Now
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

        {/* Dynamic Popup with enhanced design */}
        {currentPopupContent && (
          <div
            className={`bg-white border-l border-[#1976d2]/20 shadow-2xl h-full overflow-y-auto animate-in slide-in-from-right duration-300 ${
              isMobile ? "hidden" : "w-full max-w-8xl"
            } learn-dropdown-popup`}
            style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#1976d2 rgb(248 250 252)",
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget
              target.style.scrollbarColor = "#1976d2 rgb(241 245 249)"
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget
              target.style.scrollbarColor = "#1976d2 rgb(248 250 252)"
            }}
          >
            {/* Header Section with #1976d2 background */}
            <div className="bg-[#1976d2] text-white p-6 sm:p-8">
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
                    {currentPopupContent.title}
                  </h2>
                  <p className="text-blue-100 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed max-w-3xl">
                    {currentPopupContent.subtitle}
                  </p>
                </div>
                <button
                  className="text-white hover:text-blue-200 transition-all duration-200 p-2 sm:p-3 hover:bg-white/10 rounded-2xl group flex-shrink-0 ml-4"
                  onClick={closePopup}
                  aria-label="Close popup"
                >
                  <X className="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-90 transition-transform duration-300" />
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {currentPopupContent.buttons.map((button, index) => (
                  <Link
                    key={index}
                    href={button.href}
                    className={`inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 transform hover:scale-105 group ${
                      button.primary
                        ? "bg-white text-[#1976d2] hover:bg-blue-50 shadow-lg hover:shadow-xl"
                        : "bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1976d2] backdrop-blur-sm"
                    }`}
                  >
                    {button.label}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Content Grid with white background */}
            <div className="bg-white p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                {currentPopupContent.sections.map((section, index) => {
                  const IconComponent = section.icon
                  return (
                    <div
                      key={index}
                      className="bg-white border-2 border-gray-100 hover:border-[#1976d2]/30 rounded-2xl p-4 sm:p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] group"
                    >
                      {/* Section Header */}
                      <div className="flex items-center mb-4 sm:mb-6">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1976d2] rounded-xl flex items-center justify-center mr-3 sm:mr-4 group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 text-base sm:text-lg lg:text-xl leading-tight">
                          {section.title}
                        </h3>
                      </div>

                      {/* Links List */}
                      <ul className="space-y-2 sm:space-y-3">
                        {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <Link
                              href={link.href}
                              className="flex items-center text-gray-700 hover:text-[#1976d2] text-sm sm:text-base transition-all duration-200 py-2 sm:py-2.5 px-3 sm:px-4 -mx-3 sm:-mx-4 rounded-xl hover:bg-[#1976d2]/5 group/link"
                            >
                              <span className="flex-1 font-medium leading-relaxed">{link.label}</span>
                              {/* {link.popular && (
                                <span className="bg-[#1976d2]/10 text-[#1976d2] text-xs font-semibold px-2 sm:px-3 py-1 rounded-full ml-2 border border-[#1976d2]/20">
                                  Popular
                                </span>
                              )} */}
                              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 opacity-0 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all duration-300 text-[#1976d2]" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>

              {/* Bottom CTA Section */}
              <div className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#1976d2]/5 to-[#1976d2]/10 rounded-2xl border border-[#1976d2]/20 text-center">
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#1976d2] rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Sparkles className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl text-gray-900 mb-3 sm:mb-4">
                    Ready to get started?
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                    Join millions of learners worldwide and advance your career with our comprehensive courses and
                    programs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                    <Link
                      href="/get-started"
                      className="inline-flex items-center justify-center bg-[#1976d2] text-white rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold hover:bg-[#1565c0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                    >
                      Get Started Today
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <Link
                      href="/browse-all"
                      className="inline-flex items-center justify-center bg-white text-[#1976d2] border-2 border-[#1976d2] rounded-2xl px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold hover:bg-[#1976d2] hover:text-white transition-all duration-300 transform hover:scale-105 group"
                    >
                      Browse All Courses
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
