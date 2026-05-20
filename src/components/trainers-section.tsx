"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Code, Briefcase, GraduationCap, ExternalLink, ArrowRight } from "lucide-react"

interface Trainer {
  name: string
  designation: string
  experience: string
}

interface TrainersSectionProps {
  trainers?: Trainer[]
}

export function TrainersSection({ trainers }: TrainersSectionProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const element = document.getElementById("trainers-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  if (!trainers || trainers.length === 0) {
    return null
  }

  return (
    <div
      id="trainers-section"
      className={`py-20 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#1976d2]/10 text-[#1976d2] px-6 py-2 text-sm font-medium mb-4">
            <Users className="h-4 w-4 mr-2" />
            Meet Our Faculty
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
            Expert Trainers
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Learn from industry experts with years of real-world experience
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Trainer Card Content */}
              <div className="p-8 text-center">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-[#1976d2] to-[#1565c0] flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>

                {/* Trainer Info */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#1976d2] transition-colors duration-300">
                  {trainer.name}
                </h3>

                <p className="text-[#1976d2] font-semibold text-sm mb-4">{trainer.designation}</p>

                {/* Company Icons Placeholder */}
                <div className="flex justify-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <Code className="h-4 w-4 text-gray-600" />
                  </div>
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                  </div>
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 text-orange-600" />
                  </div>
                </div>

                {/* Teaches Section */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">Teaches</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-800">Basics of C++ with DSA</p>
                    <p className="text-sm font-medium text-gray-800">Data Science & Machine Learning</p>
                    <p className="text-sm font-medium text-gray-800">{trainer.experience}</p>
                  </div>
                </div>

                {/* LinkedIn Profile Link */}
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#1976d2] text-[#1976d2] hover:bg-[#1976d2] hover:text-white transition-all duration-300 group-hover:scale-105 bg-transparent"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  LinkedIn profile
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1976d2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
