"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Star, ExternalLink } from "lucide-react"

interface Review {
  name: string
  rating: number
  comment: string
}

interface ReviewsSectionProps {
  reviews?: Review[]
}

export function ReviewsSection({ reviews }: ReviewsSectionProps) {
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

    const element = document.getElementById("reviews-section")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  if (!reviews || reviews.length === 0) {
    return null
  }

  return (
    <div
      id="reviews-section"
      className={`py-20 bg-gradient-to-br from-gray-50 to-[#1976d2]/5 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#1976d2]/10 text-[#1976d2] px-6 py-2 text-sm font-medium mb-4">
            <Star className="h-4 w-4 mr-2" />
            Student Success Stories
          </Badge>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4 sm:mb-6">
            Student Reviews
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our students have to say about their learning experience
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Orange top border */}
              <div className="h-1 bg-gradient-to-r from-orange-400 to-orange-500"></div>
              {/* Review Content */}
              <div className="p-8">
                {/* Profile and Rating */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full bg-gradient-to-br from-[#1976d2] to-[#1565c0] flex items-center justify-center text-white font-bold">
                      {review.name.charAt(0)}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-800 text-lg mb-1 group-hover:text-[#1976d2] transition-colors duration-300">
                      {review.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2">CRM Manager at TOPV LIMITED</p>
                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className={`h-4 w-4 ${
                            starIndex < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          } transition-all duration-300`}
                        />
                      ))}
                    </div>
                  </div>
                  {/* LinkedIn Icon */}
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <ExternalLink className="h-4 w-4 text-blue-600" />
                  </div>
                </div>
                {/* Review Text */}
                <p className="text-gray-700 leading-relaxed text-sm mb-4">&ldquo;{review.comment}&rdquo;</p>
              </div>
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1976d2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"></div>
            </div>
          ))}
        </div>
        {/* Navigation Dots */}
        <div className="flex justify-center mt-12 gap-2">
          <div className="w-3 h-3 bg-[#1976d2] rounded-full"></div>
          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
