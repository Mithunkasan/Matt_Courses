"use client"
import type React from "react"
import { useState, useRef, useEffect } from "react"
import { X, Calendar, Users, Video, BookOpen, Award, ArrowRight } from "lucide-react"

type Props = {
  closeFormPopup: () => void
}

export default function EducationPopup({ closeFormPopup }: Props) {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)
  // const [rotate, setRotate] = useState({ x: 0, y: 0 })
  const [nextBatchMonth, setNextBatchMonth] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Calculate next month for batch start date
    const now = new Date()
    const currentDay = now.getDate()
    let targetMonth = now.getMonth()
    let targetYear = now.getFullYear()

    // If we're past the 5th of current month, show next month  
    if (currentDay >= 5) {
      targetMonth += 1
      if (targetMonth > 11) {
        targetMonth = 0
        targetYear += 1
      }
    }

    const nextBatchDate = new Date(targetYear, targetMonth, 5)
    const monthName = nextBatchDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })
    setNextBatchMonth(monthName)

    // Start auto-flip interval only when not hovered
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setIsFlipped((prev) => !prev)
      }, 4000)
    }

    // Cleanup interval on unmount or when hovered state changes
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
        intervalRef.current = null
      }
    }
  }, [isHovered])

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  const handleEnrollClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    // Redirect to enrollment page
    window.location.href = "/enroll"
  }

  return (
    <div className="flex items-center justify-center">
      {/* 3D Course Card with Parallax */}
      <div
        ref={cardRef}
        className={`relative w-full max-w-md h-[28rem] perspective-1000 cursor-pointer transition-transform duration-300`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Close Button */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            closeFormPopup()
          }}
          className="absolute -top-4 -right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Close form"
        >
          <X size={24} className="text-gray-600" />
        </button>

        {/* Card Container */}
        <div
          className={`relative w-full h-full preserve-3d transition-transform duration-700 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side - Course Information */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-blue-400 rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-400 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-pink-400 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-500"></div>
            </div>

            {/* Floating Icons */}
            <div className="absolute top-8 right-8 opacity-30">
              <BookOpen size={32} className="text-white animate-bounce" />
            </div>
            <div className="absolute bottom-20 left-8 opacity-30">
              <Award size={28} className="text-yellow-300 animate-pulse" />
            </div>

            {/* Card Content */}
            <div className="p-6 h-full flex flex-col relative z-10">
              <div>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 text-white text-xs font-semibold rounded-full mb-3 backdrop-blur-sm">
                  <Calendar size={14} />
                  NEW BATCH: {nextBatchMonth} 5th
                </span>
                <h2 className="text-3xl font-bold text-white mb-2 leading-tight">
                  Live Learning
                  <span className="block text-xl text-purple-200 font-medium">Excellence</span>
                </h2>
                <p className="text-blue-100 font-medium text-base mb-4">
                  Transform Your Future with Expert-Led Classes
                </p>
              </div>

              <div className="space-y-3 my-4">
                <div className="flex items-center">
                  <div className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                    <Video size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm">100% Live Classes</span>
                    <span className="text-purple-200 text-xs block">Real-time interaction</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                    <Users size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm">Expert Instructors</span>
                    <span className="text-purple-200 text-xs block">Industry professionals</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-9 h-9 bg-white/30 rounded-full flex items-center justify-center mr-3 backdrop-blur-sm">
                    <BookOpen size={18} className="text-white" />
                  </div>
                  <div>
                    <span className="text-white font-semibold text-sm">Flexible Learning</span>
                    <span className="text-purple-200 text-xs block">Online & Offline options</span>
                  </div>
                </div>
              </div>

              {/* Enroll Button */}
              <div className="mt-auto">
                <button
                  className="w-full py-4 px-6 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] backdrop-blur-sm flex items-center justify-center gap-2"
                  onClick={handleEnrollClick}
                >
                  Enroll Now
                  <ArrowRight size={20} />
                </button>
                <p className="text-center text-purple-200 text-xs mt-2">
                  Limited seats available • Early bird discounts
                </p>
              </div>
            </div>
          </div>

          {/* Back Side - Course Features & Benefits */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 rounded-2xl shadow-2xl overflow-hidden border-2 border-white/20 rotate-y-180 p-6">
            {/* Animated Tech Pattern Background */}
            <div className="absolute inset-0 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                {[...Array(15)].map((_, i) => (
                  <line
                    key={`line-${i}`}
                    x1={Math.random() * 100}
                    y1={Math.random() * 100}
                    x2={Math.random() * 100}
                    y2={Math.random() * 100}
                    stroke="white"
                    strokeWidth="0.3"
                    className="animate-pulse"
                    style={{
                      animationDelay: `${Math.random() * 3}s`,
                      animationDuration: `${2 + Math.random() * 2}s`,
                    }}
                  />
                ))}
                {[...Array(20)].map((_, i) => (
                  <circle
                    key={`circle-${i}`}
                    cx={Math.random() * 100}
                    cy={Math.random() * 100}
                    r="0.5"
                    fill="white"
                    className="animate-ping"
                    style={{
                      animationDelay: `${Math.random() * 4}s`,
                      animationDuration: `${3 + Math.random() * 2}s`,
                    }}
                  />
                ))}
              </svg>

              {/* Additional animated web lines */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={`web-${i}`}
                    className="absolute bg-gradient-to-r from-transparent via-white to-transparent h-px animate-pulse opacity-20"
                    style={{
                      top: `${10 + i * 12}%`,
                      left: "0%",
                      right: "0%",
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: "4s",
                    }}
                  />
                ))}
                {[...Array(6)].map((_, i) => (
                  <div
                    key={`web-v-${i}`}
                    className="absolute bg-gradient-to-b from-transparent via-white to-transparent w-px animate-pulse opacity-20"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: "0%",
                      bottom: "0%",
                      animationDelay: `${i * 0.7}s`,
                      animationDuration: "3s",
                    }}
                  />
                ))}
              </div>

              {/* Glowing connection points */}
              <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={`glow-${i}`}
                    className="absolute w-1 h-1 bg-white rounded-full animate-ping opacity-30"
                    style={{
                      top: `${Math.random() * 80 + 10}%`,
                      left: `${Math.random() * 80 + 10}%`,
                      animationDelay: `${Math.random() * 5}s`,
                      animationDuration: `${2 + Math.random() * 3}s`,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="h-full flex flex-col relative z-10">
              <div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Why Choose Us?</h3>

                <div className="space-y-3 text-white">
                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/20">
                    <h4 className="font-bold text-green-400 mb-1 flex items-center gap-2 text-sm">
                      <Video size={16} />
                      Live Interactive Sessions
                    </h4>
                    <p className="text-xs text-gray-300">
                      Every class is live with real-time Q&A and hands-on practice.
                    </p>
                  </div>

                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/20">
                    <h4 className="font-bold text-blue-400 mb-1 flex items-center gap-2 text-sm">
                      <Calendar size={16} />
                      Monthly Batch System
                    </h4>
                    <p className="text-xs text-gray-300">
                      New batches start every 5th of the month with consistent scheduling.
                    </p>
                  </div>

                  <div className="bg-white/10 p-3 rounded-lg backdrop-blur-sm border border-white/20">
                    <h4 className="font-bold text-purple-400 mb-1 flex items-center gap-2 text-sm">
                      <Users size={16} />
                      Dual Learning Mode
                    </h4>
                    <p className="text-xs text-gray-300">Choose online convenience or offline classroom experience.</p>
                  </div>
                  
                </div>
              </div>

              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4 p-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg backdrop-blur-sm">
                  <div>
                    <div className="text-yellow-400 font-bold text-lg">Next Batch</div>
                    <div className="text-white text-sm">{nextBatchMonth} 5th</div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold text-lg">Register Now</div>
                    <div className="text-white/70 text-sm">Limited seats</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Learning Icon */}
        {!isFlipped && (
          <div className="absolute -bottom-8 -right-8 w-24 h-24 opacity-20 transition-all duration-500">
            <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <BookOpen size={32} className="text-white" />
            </div>
          </div>
        )}
      </div>

      {/* Custom styles for 3D effect */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .animate-web-pulse {
          animation: webPulse 3s ease-in-out infinite;
        }

        @keyframes webPulse {
          0%, 100% { 
            opacity: 0.1;
            filter: blur(0px);
          }
          50% { 
            opacity: 0.3;
            filter: blur(0.5px);
          }
          100% { 
            opacity: 0.1;
            filter: blur(0px);
          }
        }

        .animate-connection {
          animation: connection 4s linear infinite;
        }

        @keyframes connection {
          0% { 
            stroke-dasharray: 0, 100;
            opacity: 0.1;
          }
          50% { 
            stroke-dasharray: 50, 100;
            opacity: 0.4;
          }
          100% { 
            stroke-dasharray: 100, 100;
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  )
}
