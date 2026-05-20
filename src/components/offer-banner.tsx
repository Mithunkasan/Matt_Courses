"use client"

import type React from "react"
import { useEffect, useState } from "react"

// Type definitions
interface OfferItem {
  id: string
  title: string
  description: string
  badge: string
  validUntil?: string
}

interface OfferBannerProps {
  offers?: OfferItem[]
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

// Utility function to get next batch date
const getNextBatchDate = (): string => {
  const today = new Date()
  const currentDay = today.getDate()
  const currentMonth = today.getMonth()

  let nextBatchMonth = currentMonth

  if (currentDay >= 5) {
    nextBatchMonth = currentMonth + 1
    if (nextBatchMonth > 11) {
      nextBatchMonth = 0
    }
  }
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  return `${monthNames[nextBatchMonth]} 5th`
}

// Default offers for MATT ACADEMY
const getDefaultOffers = (): OfferItem[] => {
  const nextBatch = getNextBatchDate()
  return [
    {
      id: "1",
      title: "🎓 MATT ACADEMY",
      description: "Live Classes with Industry Mentors",
      badge: `Next Batch: ${nextBatch}`,
      validUntil: "Limited Seats",
    },
    {
      id: "2",
      title: "💼 Live Projects",
      description: "Work on Real Industry Projects",
      badge: "Hands-on Experience",
      validUntil: "Portfolio Ready",
    },
    {
      id: "3",
      title: "🏆 Certificates",
      description: "Industry Recognized Certification",
      badge: "Career Boost",
      validUntil: "Job Ready",
    },
    {
      id: "4",
      title: "🌐 Flexible Mode",
      description: "Online + Offline Classes Available",
      badge: "Your Choice",
      validUntil: "Same Quality",
    },
    {
      id: "5",
      title: "👨‍💻 Expert Mentors",
      description: "Learn from Working Professionals",
      badge: "Industry Experience",
      validUntil: "Real Guidance",
    },
    {
      id: "6",
      title: "📅 Monthly Batches",
      description: "New Batch Every 5th of Month",
      badge: "Always Available",
      validUntil: `Next: ${nextBatch}`,
    },
  ]
}

const OfferBanner: React.FC<OfferBannerProps> = ({ offers, speed = 30, pauseOnHover = true, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [currentOffers, setCurrentOffers] = useState<OfferItem[]>([])

  useEffect(() => {
    setMounted(true)
    setCurrentOffers(offers || getDefaultOffers())
  }, [offers])

  if (!mounted) {
    return null
  }

  // Duplicate offers for seamless loop
  const duplicatedOffers = [...currentOffers, ...currentOffers]

  return (
    <div className={`banner-container ${className}`}>
      <div
        className="banner-track"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animationPlayState: isHovered && pauseOnHover ? "paused" : "running",
          animationDuration: `${speed}s`,
        }}
      >
        {duplicatedOffers.map((offer, index) => (
          <div key={`${offer.id}-${index}`} className="banner-item">
            <span className="banner-title">{offer.title}</span>
            <span className="banner-separator">•</span>
            <span className="banner-description">{offer.description}</span>
            <span className="banner-badge">{offer.badge}</span>
            {offer.validUntil && (
              <>
                <span className="banner-separator">•</span>
                <span className="banner-validity">{offer.validUntil}</span>
              </>
            )}
          </div>
        ))}
      </div>
      <style jsx>{`
        .banner-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(90deg, #1976d2, #2196f3, #1565c0);
          color: white;
          overflow: hidden;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }
        .banner-track {
          display: flex;
          align-items: center;
          height: 100%;
          animation: scroll ${speed}s linear infinite;
          white-space: nowrap;
        }
        .banner-item {
          display: flex;
          align-items: center;
          padding: 0 3rem;
          height: 100%;
          flex-shrink: 0;
          font-size: 14px;
          gap: 0.5rem;
        }
        .banner-title {
          font-weight: 700;
          color: #ffffff;
        }
        .banner-description {
          font-weight: 500;
          color: #e3f2fd;
        }
        .banner-badge {
          background: #ffd700;
          color: #1976d2;
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          margin-left: 0.5rem;
        }
        .banner-validity {
          font-size: 12px;
          color: #bbdefb;
          font-weight: 500;
        }
        .banner-separator {
          color: #90caf9;
          font-weight: 600;
          margin: 0 0.3rem;
        }
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* Mobile Phones (up to 480px) */
        @media (max-width: 480px) {
          .banner-container {
            height: 35px;
          }
          .banner-item {
            padding: 0 2rem;
            font-size: 12px;
            gap: 0.3rem;
          }
          .banner-title {
            font-size: 12px;
          }
          .banner-description {
            font-size: 11px;
          }
          .banner-badge {
            font-size: 10px;
            padding: 0.15rem 0.4rem;
            margin-left: 0.3rem;
          }
          .banner-validity {
            display: none;
          }
          .banner-separator {
            margin: 0 0.2rem;
          }
        }
        /* Small Tablets (481px to 768px) */
        @media (min-width: 481px) and (max-width: 768px) {
          .banner-container {
            height: 38px;
          }
          .banner-item {
            padding: 0 2.5rem;
            font-size: 13px;
            gap: 0.4rem;
          }
          .banner-title {
            font-size: 13px;
          }
          .banner-description {
            font-size: 12px;
          }
          .banner-badge {
            font-size: 11px;
            padding: 0.18rem 0.5rem;
            margin-left: 0.4rem;
          }
          .banner-validity {
            font-size: 11px;
          }
        }
        /* Medium Tablets (769px to 1024px) */
        @media (min-width: 769px) and (max-width: 1024px) {
          .banner-container {
            height: 40px;
          }
          .banner-item {
            padding: 0 2.8rem;
            font-size: 14px;
          }
          .banner-badge {
            font-size: 12px;
            padding: 0.2rem 0.6rem;
          }
        }
        /* Large Screens (1025px to 1440px) */
        @media (min-width: 1025px) and (max-width: 1440px) {
          .banner-container {
            height: 42px;
          }
          .banner-item {
            padding: 0 3.2rem;
            font-size: 15px;
          }
          .banner-title {
            font-size: 15px;
          }
          .banner-description {
            font-size: 14px;
          }
          .banner-badge {
            font-size: 13px;
            padding: 0.22rem 0.7rem;
          }
          .banner-validity {
            font-size: 13px;
          }
        }
        /* Extra Large Screens (1441px and up) */
        @media (min-width: 1441px) {
          .banner-container {
            height: 45px;
          }
          .banner-item {
            padding: 0 3.5rem;
            font-size: 16px;
          }
          .banner-title {
            font-size: 16px;
          }
          .banner-description {
            font-size: 15px;
          }
          .banner-badge {
            font-size: 14px;
            padding: 0.25rem 0.8rem;
          }
          .banner-validity {
            font-size: 14px;
          }
        }
        /* Hover Effects */
        .banner-container:hover {
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        .banner-badge:hover {
          transform: scale(1.05);
          transition: transform 0.2s ease;
        }
        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .banner-track {
            animation-duration: ${speed * 3}s;
          }
        }
        /* High Contrast Mode */
        @media (prefers-contrast: high) {
          .banner-container {
            background: #000080;
            border-bottom: 2px solid white;
          }
          .banner-title,
          .banner-description,
          .banner-validity,
          .banner-separator {
            color: white;
          }
          .banner-badge {
            background: white;
            color: #000080;
            border: 1px solid #000080;
          }
        }
        /* Print Styles */
        @media print {
          .banner-container {
            position: static;
            height: auto;
            background: none;
            color: black;
            box-shadow: none;
            border: 1px solid black;
          }
          .banner-track {
            animation: none;
          }
          .banner-item {
            display: inline-block;
            margin-right: 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default OfferBanner
