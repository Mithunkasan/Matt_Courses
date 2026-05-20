/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { CourseData } from '../data/fullstack-data';

interface TestimonialsProps {
  courseData: CourseData;
}

const Testimonials: React.FC<TestimonialsProps> = ({ courseData }) => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            What Our Students Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful graduates have to say 
            about their journey with HejexTechnology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courseData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-1"
            >
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-blue-100"
                />
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {testimonial.name}
                  </h4>
                  <p className="text-blue-600 text-sm font-medium">{testimonial.role}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-gray-500 text-xs">{testimonial.company}</span>
                    <span className="text-green-600 text-xs font-semibold">{testimonial.salary}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>Verified Graduate</span>
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full">
                    Placed
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Stats */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our Placement Success
            </h3>
            <p className="text-green-100 max-w-2xl mx-auto">
              We're proud of our students' achievements and committed to your career success
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{courseData.stats.placementRate}%</div>
              <div className="text-green-100">Placement Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{courseData.stats.averagePackage}</div>
              <div className="text-green-100">Average Package</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{courseData.stats.hiringPartners}+</div>
              <div className="text-green-100">Hiring Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-2">{courseData.stats.studentsPlaced}+</div>
              <div className="text-green-100">Placed Students</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;