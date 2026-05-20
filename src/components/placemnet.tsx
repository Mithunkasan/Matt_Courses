'use client'
import React, { useState, useEffect } from 'react';
import { Briefcase, Users, TrendingUp, Award, Sparkles } from 'lucide-react';

interface PlacementCareerSupportProps {
    courseTitle?: string;
    keySkills?: string[];
}

export default function PlacementCareerSupport({ courseTitle, keySkills }: PlacementCareerSupportProps = {}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const stats = [
        { number: "100%", label: "Placement Support", icon: Briefcase, color: "bg-blue-400", border: "border-blue-500" },
        { number: "500+", label: "Hiring Partners", icon: Users, color: "bg-yellow-400", border: "border-yellow-500" },
        { number: "95%", label: "Success Rate", icon: TrendingUp, color: "bg-green-400", border: "border-green-500" },
        { number: "₹8L", label: "Average Package", icon: Award, color: "bg-pink-400", border: "border-pink-500" }
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Hero Section */}
                <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 ">
                        <Sparkles className="w-5 h-5" />
                        <span>Gen AI Powered Learning</span>
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                        <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                            100% Placement Guarantee
                        </span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-700 mb-4">
                        {courseTitle ? `${courseTitle} Career Support` : "Python Full Stack Development Career Support"}
                    </p>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        {keySkills && keySkills.length > 0
                            ? `Master ${keySkills.slice(0, 5).join(", ")}, and modern industry standards with `
                            : "Master Django, Flask, FastAPI, React, and cloud technologies with "
                        }
                        <span className="font-bold text-blue-600">Gen AI-powered learning</span> and comprehensive career assistance
                    </p>
                </div>

                {/* Stats Grid: Four cards in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-xl p-6 text-center transform transition-all duration-700 hover:shadow-2xl overflow-hidden group ${stat.border} border-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            {/* Animated background highlight */}
                            <div className={`absolute inset-0 bg-gradient-to-br from-blue-50 to-white border-2 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-105 ${stat.border}`}></div>

                            {/* Card Content */}
                            <div className="relative transform transition-all duration-700 group-hover:-translate-y-2">
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${stat.color} shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110`}>
                                    <stat.icon className="w-7 h-7 text-white" />
                                </div>

                                <div className="text-3xl font-bold text-gray-900 mb-2 relative">
                                    {stat.number}
                                    <div className="absolute inset-0 bg-blue-500 rounded-full opacity-0 group-hover:opacity-5 blur-md transition-opacity duration-500"></div>
                                </div>

                                <div className="text-sm text-gray-600 font-medium uppercase tracking-wider mb-3">
                                    {stat.label}
                                </div>

                                <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto transform origin-left transition-all duration-500 group-hover:scale-x-150 group-hover:from-blue-600 group-hover:to-indigo-700"></div>
                            </div>

                            {/* Corner accents */}
                            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" style={{ borderColor: stat.border.replace("border-", "") }}></div>
                            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" style={{ borderColor: stat.border.replace("border-", "") }}></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" style={{ borderColor: stat.border.replace("border-", "") }}></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200" style={{ borderColor: stat.border.replace("border-", "") }}></div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
        </div>
    );
}
