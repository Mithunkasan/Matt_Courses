import Abouthead from '@/components/Abouthead';
import React from 'react';
import Link from 'next/link';
import { Sparkles, Users, ArrowRight, ShieldCheck } from 'lucide-react';
import type { Course } from '@/types/course';

interface CategoryPageLayoutProps {
  pageName: string;
  image: string;
  badgeText: string;
  title: string;
  description: string;
  items: Course[];
  isInternship?: boolean;
}

export default function CategoryPageLayout({
  pageName,
  image,
  badgeText,
  title,
  description,
  items,
  isInternship = false,
}: CategoryPageLayoutProps) {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/20 to-slate-50">
      <Abouthead pageName={pageName} image={image} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/50 text-blue-700 text-sm font-semibold mb-4 border border-blue-200/50">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>{badgeText}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Dynamic Grid of Cards */}
        {items.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg font-medium">No roles available in this domain at the moment. Please check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <div 
                key={item.id}
                className="bg-white/80 backdrop-blur-md rounded-3xl p-6 border border-slate-100 shadow-xl shadow-slate-100/40 hover:shadow-2xl hover:shadow-blue-100/30 hover:border-blue-200/60 transition-all duration-300 flex flex-col group animate-fade-in"
              >
                {/* Card Header Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1.5 rounded-xl border border-blue-100">
                    {item.duration} Program
                  </span>
                  <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-lg">
                    <Users className="w-3.5 h-3.5" />
                    {item.enrolled ? item.enrolled : 120}+ Enrolled
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-200 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Key Skills Tags */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {item.keySkills.slice(0, 3).map((skill, index) => (
                    <span 
                      key={index} 
                      className="text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bottom Info & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-emerald-600 font-semibold text-xs">
                    <ShieldCheck className="w-4 h-4" />
                    <span>NACTET Certified</span>
                  </div>
                  <Link 
                    href={isInternship ? `/internships/${item.slug}` : `/courses/${item.slug}`}
                    className="inline-flex items-center justify-center gap-1.5 text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors"
                  >
                    <span>Explore {isInternship ? 'Internship' : 'Course'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
