'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Clock, BookOpen } from 'lucide-react';
import { CourseData } from '../data/fullstack-data';

interface CurriculumProps {
  courseData: CourseData;
}

const Curriculum: React.FC<CurriculumProps> = ({ courseData }) => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setOpenModule(openModule === index ? null : index);
  };

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Course Structure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Detailed Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our carefully structured curriculum takes you from basics to advanced concepts, 
            ensuring you build a strong foundation in {courseData.title.toLowerCase()}.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Duration</h3>
              <p className="text-blue-600 font-semibold">{courseData.duration}</p>
              <p className="text-gray-600 text-sm">Intensive Training</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Modules</h3>
              <p className="text-purple-600 font-semibold">{courseData.modules.length} Modules</p>
              <p className="text-gray-600 text-sm">Comprehensive Coverage</p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Projects</h3>
              <p className="text-green-600 font-semibold">10+ Projects</p>
              <p className="text-gray-600 text-sm">Hands-on Practice</p>
            </div>
          </div>

          <div className="space-y-4">
            {courseData.modules.map((module, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 rounded-2xl transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-500">{module.duration}</p>
                    </div>
                  </div>
                  {openModule === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  )}
                </button>
                
                {openModule === index && (
                  <div className="px-6 pb-6">
                    <div className="pl-14">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {module.topics.map((topic, topicIndex) => (
                          <div
                            key={topicIndex}
                            className="flex items-start space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;