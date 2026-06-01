"use client";
import React, { useState, useEffect } from "react";
import { BookOpen, Video, Zap, Users } from "lucide-react";

interface PythonFullStackHeroProps {
  courseTitle?: string;
  learningOutcome?: string;
}

const PythonFullStackHero = ({ courseTitle, learningOutcome }: PythonFullStackHeroProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: BookOpen,
      label: "Comprehensive Curriculum",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Video,
      label: "Hands-on Learning",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Zap,
      label: "Job-Ready Skills",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: Users,
      label: "Interview Preparation",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <div className="relative overflow-hidden bg-white min-h-screen flex items-center mt-10 sm:mt-14 md:mt-16 lg:mt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#f8d4d6] rounded-full opacity-20 animate-float-slow" />
        <div className="absolute top-20 left-1/3 w-48 h-48 bg-[#f9d066] rounded-full opacity-30 animate-float-medium" />
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 bg-[#c1fbd7] rounded-full opacity-25 animate-float-fast" />
        <div className="absolute top-10 right-20 w-40 h-40 bg-[#f9d666] rounded-full opacity-40 animate-pulse-slow" />
        <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-r from-green-50 to-emerald-50 rounded-full opacity-30 animate-pulse-medium" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        {/* ✅ Flipped layout for mobile (content first, image below) */}
        <div className="flex flex-col-reverse lg:flex-row items-start justify-between gap-10">
          
          {/* Left Side - Image */}
          <div
            className={`w-full lg:w-1/2 transition-all duration-700 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="relative w-full max-w-[300px] mx-auto">
              <div className="aspect-[3/4] relative overflow-hidden group rounded-xl shadow-xl">
                <img
                  src="/image/aathil.jpg"
                  alt={courseTitle || "Python Programming"}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              <div className="absolute -top-5 -left-5 w-40 h-40 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-60 animate-spin-slow -z-10" />
            </div>
          </div>

          {/* Right Side - Content */}
          <div
            className={`w-full lg:w-1/2 flex flex-col items-start justify-start space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-left">
              What You'll{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Learn {courseTitle ? `in ${courseTitle}` : ""}
              </span>
            </h1>

            {/* Paragraph */}
            <div className="text-gray-600 text-base leading-relaxed space-y-3 text-left w-full">
              <p className="bg-white/50 rounded-lg border border-gray-100 p-3">
                {learningOutcome || "Python is a versatile language for web development, data science, and AI. Its scalability and rich libraries make it perfect for beginners and professionals alike."}
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group flex items-center space-x-5 px-2 md:px-5 py-5 bg-white/70 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 w-full"
                >
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${stat.color} shadow-sm`}
                  >
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-800 font-medium text-xs flex-1 text-left">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSlow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }

        @keyframes floatMedium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-8px); }
        }

        @keyframes floatFast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }

        @keyframes pulseSlow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.2; }
        }

        @keyframes pulseMedium {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.1; }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-float-slow { animation: floatSlow 8s ease-in-out infinite; }
        .animate-float-medium { animation: floatMedium 6s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 4s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulseSlow 4s ease-in-out infinite; }
        .animate-pulse-medium { animation: pulseMedium 3s ease-in-out infinite; }
        .animate-spin-slow { animation: spin 20s linear infinite; }
      `}</style>
    </div>
  );
};

export default PythonFullStackHero;
