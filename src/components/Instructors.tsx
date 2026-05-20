/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';
import { Star, Award, Users, Calendar } from 'lucide-react';
import { CourseData } from '../data/fullstack-data';

interface InstructorsProps {
  courseData: CourseData;
}

const Instructors: React.FC<InstructorsProps> = ({ courseData }) => {
  return (
    <section id="instructors" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-medium mb-4">
            Expert Instructors
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Learn from Industry Experts
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our instructors are experienced professionals from top tech companies, 
            bringing real-world insights and industry best practices to your learning journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courseData.instructors.map((instructor, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2"
            >
              <div className="relative mb-6">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300"
                />
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {instructor.experience}
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                  {instructor.name}
                </h3>
                <p className="text-blue-600 font-medium mb-2">{instructor.role}</p>
                <p className="text-gray-500 text-sm">{instructor.company}</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="font-medium">{instructor.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Users className="h-4 w-4" />
                    <span>{instructor.students}+ students</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium hover:bg-blue-100 hover:text-blue-600 transition-colors"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Award className="h-3 w-3" />
                    <span>Certified</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-3 w-3" />
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructor Stats */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Why Our Instructors Stand Out
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">20+</div>
              <div className="text-white/80">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{courseData.stats.studentsPlaced}+</div>
              <div className="text-white/80">Students Mentored</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instructors;