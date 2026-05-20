'use client';

import React from 'react';
import { Zap, Brain, Sparkles, Target } from 'lucide-react';

interface GenAILearningSectionProps {
  courseTitle?: string;
}

const GenAILearningSection = ({ courseTitle }: GenAILearningSectionProps = {}) => {
  const displayTitle = courseTitle || "Python";
  const genAIBenefits = [
    { title: "Instant Code Review", description: `Get real-time feedback on your ${displayTitle} code with AI-powered analysis`, icon: Zap, color: "bg-yellow-400" },
    { title: "Personalized Learning", description: "AI adapts to your pace and identifies knowledge gaps automatically", icon: Brain, color: "bg-pink-400" },
    { title: "24/7 AI Mentor", description: `Ask questions anytime and get instant explanations for ${displayTitle} and core concepts`, icon: Sparkles, color: "bg-blue-400" },
    { title: "Smart Project Guidance", description: "AI helps debug errors and suggests optimal solutions for your projects", icon: Target, color: "bg-green-400" }
  ];

  return (
    <section className="mb-12 flex justify-center">
      <div className="w-full max-w-6xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
        {/* Section Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 mb-3">
            <Sparkles className="w-7 h-7 animate-pulse" />
            <h2 className="text-xl sm:text-2xl font-bold">Master {displayTitle} with Gen AI</h2>
            <Sparkles className="w-7 h-7 animate-pulse" />
          </div>
          <p className="text-sm sm:text-base opacity-90 max-w-2xl mx-auto">
            Learn {displayTitle} efficiently with Gen AI support, personalized feedback, and 24/7 AI mentorship
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
          {genAIBenefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-transparent backdrop-blur-md rounded-lg p-3 flex items-center gap-3 transform transition-all duration-500 hover:scale-105 border border-white border-opacity-20 max-w-[220px] w-full"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div className={`w-8 h-8 flex items-center justify-center rounded-full ${benefit.color} bg-opacity-80 flex-shrink-0`}>
                <benefit.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">{benefit.title}</h3>
                <p className="text-xs opacity-90 leading-snug">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GenAILearningSection;
