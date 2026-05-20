/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import { 
  Play, 
  Clock, 
  Users, 
  
  Star, 
  Globe, 
 
  Target,
  ChevronDown,
  ChevronUp,
  
  Brain,
  TrendingUp,
  MessageSquare
} from 'lucide-react';

function CertificateProgram() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleModule = (moduleIndex: number) => {
    setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex);
  };

  const toggleFaq = (faqIndex: number) => {
    setActiveFaq(activeFaq === faqIndex ? null : faqIndex);
  };

  const skills = [
    "AI Strategy Development",
    "Product Management",
    "Machine Learning Fundamentals",
    "Data Analysis",
    "User Experience Design",
    "Agile Methodologies",
    "Business Intelligence",
    "Ethics in AI"
  ];

  const modules = [
    {
      title: "Introduction to AI Product Management",
      duration: "15 hours",
      lessons: 12,
      description: "Learn the fundamentals of AI product management, including key concepts, frameworks, and methodologies."
    },
    {
      title: "AI Strategy and Business Value",
      duration: "18 hours", 
      lessons: 14,
      description: "Understand how to identify AI opportunities, develop business cases, and create strategic roadmaps."
    },
    {
      title: "Technical Foundations for AI PMs",
      duration: "22 hours",
      lessons: 16,
      description: "Gain essential technical knowledge about machine learning, data science, and AI technologies."
    },
    {
      title: "Building AI-Powered Products",
      duration: "20 hours",
      lessons: 18,
      description: "Learn end-to-end product development processes specific to AI and machine learning products."
    },
    {
      title: "AI Ethics and Responsible Development",
      duration: "12 hours",
      lessons: 10,
      description: "Explore ethical considerations, bias mitigation, and responsible AI development practices."
    },
    {
      title: "Capstone Project",
      duration: "25 hours",
      lessons: 8,
      description: "Apply your skills to a real-world AI product management challenge and build a comprehensive portfolio."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Product Manager at Tech Corp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "This program completely transformed my approach to AI product management. The practical skills I gained landed me a senior role within 6 months."
    },
    {
      name: "Michael Chen",
      role: "AI Product Lead at Innovation Labs",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The combination of technical depth and business strategy in this certificate is unmatched. Highly recommended for anyone serious about AI products."
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, AI Startup",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      quote: "The capstone project gave me the confidence to launch my own AI company. The mentorship and feedback were invaluable."
    }
  ];

  const faqs = [
    {
      question: "What background do I need for this program?",
      answer: "While prior product management experience is helpful, it's not required. We recommend basic familiarity with technology concepts and business fundamentals."
    },
    {
      question: "How long does it take to complete?",
      answer: "Most learners complete the program in 4-6 months, studying 5-10 hours per week. You can go at your own pace and have up to 12 months to finish."
    },
    {
      question: "Will I receive a certificate?",
      answer: "Yes, upon successful completion, you'll receive a Professional Certificate from Microsoft that you can share on LinkedIn and add to your resume."
    },
    {
      question: "Are there prerequisites?",
      answer: "No specific prerequisites are required, but we recommend having basic computer skills and an interest in technology and business."
    },
    {
      question: "Can I get financial aid?",
      answer: "Financial aid is available for qualifying learners. You can apply for aid during the enrollment process."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src="https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=60" 
                     alt="Microsoft" className="w-8 h-8 rounded" />
                <span className="text-gray-600 font-medium">Microsoft</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Microsoft AI Product Manager Professional Certificate
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Launch your career in AI product management. Master the skills to build, launch, and scale 
                AI-powered products that deliver real business value.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">4-6 months</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Beginner level</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">English subtitles</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                  Enroll for Free
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Preview</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600" 
                   alt="AI Product Management" 
                   className="rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-gray-600">Career advancement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">112k+</div>
              <div className="text-gray-600">Learners enrolled</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.7</div>
              <div className="text-gray-600 flex items-center justify-center space-x-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>Average rating</span>
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600">Course series</div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What you'll learn</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Develop the strategic and technical skills needed to excel as an AI product manager
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Strategy</h3>
              <p className="text-gray-600">Learn to identify AI opportunities and develop comprehensive product strategies</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Product Development</h3>
              <p className="text-gray-600">Master the end-to-end process of building AI-powered products</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Analysis</h3>
              <p className="text-gray-600">Analyze data to drive product decisions and measure success</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ethics & Responsibility</h3>
              <p className="text-gray-600">Understand ethical considerations and responsible AI development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills you'll gain</h2>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Certificate - 6 course series</h2>
            <p className="text-xl text-gray-600">
              Comprehensive curriculum designed by Microsoft experts
            </p>
          </div>
          
          <div className="space-y-4">
            {modules.map((module, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{module.title}</h3>
                      <div className="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                        <span>{module.duration}</span>
                        <span>•</span>
                        <span>{module.lessons} lessons</span>
                      </div>
                    </div>
                  </div>
                  {expandedModule === index ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </button>
                
                {expandedModule === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 ml-14">{module.description}</p>
                    <div className="mt-4 ml-14">
                      <button className="text-blue-600 hover:text-blue-700 font-medium">
                        View course details →
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Learn from industry experts</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300" 
                   alt="Instructor" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900">Dr. Sarah Johnson</h3>
              <p className="text-blue-600 mb-2">Senior Product Manager, Microsoft AI</p>
              <p className="text-gray-600 text-sm">15+ years in product management and AI strategy</p>
            </div>
            
            <div className="text-center">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300" 
                   alt="Instructor" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900">Michael Chen</h3>
              <p className="text-blue-600 mb-2">Principal Program Manager, Azure AI</p>
              <p className="text-gray-600 text-sm">Expert in machine learning and cloud platforms</p>
            </div>
            
            <div className="text-center">
              <img src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300" 
                   alt="Instructor" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
              <h3 className="text-lg font-semibold text-gray-900">Emily Rodriguez</h3>
              <p className="text-blue-600 mb-2">Director of AI Ethics, Microsoft</p>
              <p className="text-gray-600 text-sm">Leading expert in responsible AI development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What learners are saying</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <img src={testimonial.image} alt={testimonial.name} 
                       className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to launch your AI product management career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of learners who have transformed their careers with this certificate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              View Pricing
            </button>
          </div>
          <p className="text-blue-100 mt-4 text-sm">
            7-day free trial • Financial aid available • Certificate included
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {activeFaq === index ? 
                    <ChevronUp className="w-5 h-5 text-gray-400" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  }
                </button>
                
                {activeFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>
  );
}

export default CertificateProgram;