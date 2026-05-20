"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, MessageCircleQuestion, CheckCircle2, Award, Download, Infinity, RefreshCw } from "lucide-react"
import SvgWave from "./Svgwave"

type props = {
  title: string
}

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
  index: number
  icon: React.ReactNode
}

const FAQItem = ({ question, answer, isOpen, onClick, index, icon }: FAQItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0)
    }
  }, [isOpen])

  return (
    <div
      className={`mb-4 md:mb-6 overflow-hidden rounded-2xl transition-all duration-500 group w-full backdrop-blur-sm ${
        isOpen
          ? "shadow-2xl shadow-blue-300/40 border-2 border-blue-300 bg-white/95"
          : "shadow-lg hover:shadow-xl border border-blue-200/60 hover:border-blue-300 bg-white/90 hover:bg-white/95"
      }`}
      style={{
        transform: `translateY(0)`,
        animation: `fadeIn 0.8s ease-out forwards ${index * 0.1}s`,
      }}
    >
      <div
        className={`flex cursor-pointer items-center justify-between p-4 md:p-6 lg:p-7 transition-all duration-300 ${
          isOpen
            ? "bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white"
            : "bg-gradient-to-r from-white to-blue-50/50 text-gray-800 hover:from-blue-50 hover:to-blue-100"
        }`}
        onClick={onClick}
        style={{
          borderTopLeftRadius: "0.75rem",
          borderTopRightRadius: "0.75rem",
          borderBottomLeftRadius: isOpen ? "0" : "0.75rem",
          borderBottomRightRadius: isOpen ? "0" : "0.75rem",
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className={`p-2 md:p-3 rounded-full transition-all duration-300 shadow-sm ${
              isOpen ? "bg-white/30 shadow-white/20" : "bg-blue-100 group-hover:bg-blue-200 shadow-blue-200/50"
            }`}
          >
            {icon}
          </div>
          <h3 className="text-base md:text-lg lg:text-xl font-bold leading-tight">{question}</h3>
        </div>
        <div className="relative">
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-white" : "text-blue-600 group-hover:rotate-12"
            }`}
          />
        </div>
      </div>
      <div
        style={{
          height: `${height}px`,
          transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
        className="bg-gradient-to-b from-blue-50/80 via-white to-blue-50/40 rounded-b-2xl relative overflow-hidden border-t-2 border-blue-200/60"
      >
        {/* Decorative elements */}
        {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] opacity-20" />
        <div className="absolute top-0 left-0 w-1/3 h-1 bg-gradient-to-r from-[#1976d2] to-[#64b5f6]" /> */}

        <div ref={contentRef} className="p-4 md:p-6 lg:p-8 text-gray-700 relative leading-relaxed">
          <p className="leading-relaxed text-sm sm:text-base">{answer}</p>

          {/* Decorative accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-400" />
        </div>
      </div>
    </div>
  )
}

export default function FAQ({ title }: props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const faqs = [
    {
      question: "Are your courses beginner-friendly?",
      answer:
        "Yes, absolutely! Our courses are designed with different skill levels in mind. Each course clearly indicates the level (beginner, intermediate, advanced) so you can choose what's right for you. Beginner courses start with fundamentals and gradually build your knowledge with no prior experience required.",
      icon: <MessageCircleQuestion className="h-5 w-5 text-[#1976d2]" />,
    },
    {
      question: "Do I need prior experience?",
      answer:
        "It depends on the course. Beginner courses require no prior experience, while intermediate and advanced courses may require some foundational knowledge. Each course page specifies any prerequisites needed. If you're unsure, we recommend starting with our introductory courses to build a solid foundation.",
      icon: <CheckCircle2 className="h-5 w-5 text-[#1976d2]" />,
    },
    {
      question: "Will I get a certificate?",
      answer:
        "Yes! Upon successful completion of a course, you'll receive a digital certificate that you can share on your resume, LinkedIn profile, or other professional platforms. Our certificates are recognized by many employers and demonstrate your commitment to continuous learning and skill development.",
      icon: <Award className="h-5 w-5 text-[#1976d2]" />,
    },
    {
      question: "Can I access the content offline?",
      answer:
        "Yes, our mobile app allows you to download course materials for offline viewing. This feature is available on both iOS and Android devices. Simply look for the download icon next to the course content you want to access offline. Note that quizzes and interactive elements may require an internet connection.",
      icon: <Download className="h-5 w-5 text-[#1976d2]" />,
    },
    {
      question: "How long do I have access to a course?",
      answer:
        "Once you purchase a course, you have lifetime access to the content. This includes any future updates or additional materials added to the course. You can revisit the material as many times as you need, making it easy to refresh your knowledge whenever necessary.",
      icon: <Infinity className="h-5 w-5 text-[#1976d2]" />,
    },
    {
      question: "Do you offer refunds if I'm not satisfied?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for all our courses. If you're not completely satisfied with your purchase, you can request a full refund within 30 days of enrollment. No questions asked. Your satisfaction is our priority.",
      icon: <RefreshCw className="h-5 w-5 text-[#1976d2]" />,
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  // CSS keyframes as string for style tag
  const keyframesStyle = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px) perspective(1000px) rotateY(0) rotateX(0); }
      to { opacity: 1; transform: translateY(0) perspective(1000px) rotateY(-2deg) rotateX(1deg); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 0.6; }
      50% { opacity: 1; }
    }
    
    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
    
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `

  return (
    <div className="w-full px-[6%] py-8 md:py-12 relative overflow-hidden bg-gradient-to-br from-blue-50/30 via-white to-blue-50/30 rounded-2xl shadow-xl border border-blue-100/50">
      <style dangerouslySetInnerHTML={{ __html: keyframesStyle }} />

      {/* Background with mesh grid */}
      <div className="absolute inset-0 bg-white -z-20" />
      <div className="absolute inset-0 -z-10" style={{ display: "none" }} />

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-br from-blue-200/30 to-blue-400/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-tr from-blue-200/20 to-blue-300/10 rounded-full blur-3xl -z-10 animate-pulse" />

      {/* Decorative circles */}
      <div className="absolute top-8 md:top-12 right-8 md:right-12 w-4 md:w-6 h-4 md:h-6 rounded-full bg-blue-200/60 animate-float" />
      <div
        className="absolute top-16 md:top-24 right-16 md:right-24 w-3 md:w-4 h-3 md:h-4 rounded-full bg-blue-300/50 animate-float"
        style={{ animationDelay: "0.5s" }}
      />
      <div
        className="absolute bottom-12 md:bottom-16 left-12 md:left-16 w-5 md:w-8 h-5 md:h-8 rounded-full bg-blue-200/60 animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* Modern heading with gradient text - PRESERVED AS REQUESTED */}
      <div className="relative mb-8 md:mb-12 lg:mb-16 flex justify-center items-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 text-center leading-tight">
          Frequently Asked
          <span className="text-blue-600 px-2 py-1 relative inline-block">
            {title}
            <SvgWave className="" />
          </span>
        </h2>
      </div>

      {/* FAQ items with enhanced styling */}
      <div className="mt-6 sm:mt-8 space-y-4 relative w-full">
        {/* Decorative line */}
        <div
          className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-100 via-blue-200/50 to-transparent"
          style={{ display: "none" }}
        />

        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onClick={() => toggleFAQ(index)}
            index={index}
            icon={faq.icon}
          />
        ))}
      </div>

      {/* Support message with enhanced styling */}
      {/* <div className="mt-8 md:mt-12 lg:mt-16 rounded-2xl p-6 md:p-8 lg:p-10 text-center relative overflow-hidden bg-gradient-to-br from-blue-100/60 via-white to-blue-100/40 border-2 border-blue-200/60 shadow-xl backdrop-blur-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-blue-500/5 -z-10" />
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 md:mb-6 shadow-lg border-2 border-blue-300/30">
            <MessageCircleQuestion className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
          </div>
          <p className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Still have questions?</p>
          <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-md">
            We're here to help! Our support team is ready to assist you with any questions or concerns.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 hover:from-blue-700 hover:via-blue-600 hover:to-blue-700 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-blue-300/50 transform hover:-translate-y-1 hover:scale-105 border border-blue-400/30"
          >
            Contact our support team
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </div>
      </div> */}
      
    </div>
  )
}
