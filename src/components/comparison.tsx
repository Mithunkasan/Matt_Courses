'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

interface GenAIFullPageProps {
  courseTitle?: string;
}

const GenAIFullPage = ({ courseTitle }: GenAIFullPageProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const displayTitle = courseTitle || "Python";

  // Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Comparison data: Learning traditional vs Gen AI
  const comparison = [
    {
      aspect: "Learning Speed",
      traditional: "Fixed pace for all students, which may be too slow or too fast for some learners.",
      genAI: "Adaptive pace personalized for each student's learning speed and retention.",
      color: "bg-blue-400"
    },
    {
      aspect: "Doubt Resolution",
      traditional: "Students must wait for the instructor or next class to clarify doubts.",
      genAI: "Instant 24/7 AI support resolves questions immediately.",
      color: "bg-green-400"
    },
    {
      aspect: "Code Feedback",
      traditional: "Manual weekly review of assignments and projects.",
      genAI: "Real-time AI feedback on assignments and exercises with suggestions for improvements.",
      color: "bg-pink-400"
    },
    {
      aspect: "Practice Opportunities",
      traditional: "Limited pre-defined exercises and projects.",
      genAI: "Unlimited AI-generated exercises and projects tailored to skill level.",
      color: "bg-orange-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      {/* Gen AI vs Traditional Section */}
      <section ref={sectionRef} className="mb-16 px-4 sm:px-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4" 
          style={{ 
            fontFamily: "'SF Pro Display', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text"
          }}>
          {displayTitle} Learning: Traditional vs Gen AI
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover how Gen AI transforms {displayTitle} education with personalized learning, instant feedback, and unlimited practice.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {comparison.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 shadow-lg transform transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`${item.color} inline-block px-4 py-2 rounded-full text-white font-bold text-sm mb-4`}>
                {item.aspect}
              </div>
              <div className="space-y-4">
                {/* Traditional Method */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mt-2"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-1">Traditional Method</p>
                    <p className="text-gray-700">{item.traditional}</p>
                  </div>
                </div>
                {/* Gen AI Method */}
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-600 mb-1">With Gen AI</p>
                    <p className="text-gray-900 font-medium">{item.genAI}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GenAIFullPage;
