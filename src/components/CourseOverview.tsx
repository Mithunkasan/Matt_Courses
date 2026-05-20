/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Code2, Database, Globe, Smartphone, Server, Zap } from 'lucide-react';
import { CourseData } from '../data/fullstack-data';

interface CourseOverviewProps {
  courseData: CourseData;
}

const iconMap = {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  Zap
};

const CourseOverview: React.FC<CourseOverviewProps> = ({ courseData }) => {
  return (
    <section id="course" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            Comprehensive Training
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What You ll Learn
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our {courseData.title} course covers everything you need to build modern web applications 
            from scratch. Get hands-on experience with the latest technologies and frameworks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courseData.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                Why Choose Our {courseData.title} Course?
              </h3>
              <div className="space-y-4">
                {courseData.whyChoose.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <p>{reason}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Students Learning" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-white text-gray-800 p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold text-blue-600">100%</div>
                <div className="text-sm">Job Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseOverview;