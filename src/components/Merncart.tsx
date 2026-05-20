'use client'
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import InstructorProfile from './instructor';
import MarqueeGallery from './Marquee1';

export default function Mernstackcontent() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [showMoreLeft, setShowMoreLeft] = useState(false);
  const [showMoreRight, setShowMoreRight] = useState(false);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaChecked, setCaptchaChecked] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const overviewRef = useRef<HTMLDivElement>(null);
  const moduleRef = useRef<HTMLDivElement>(null);
  const programStructureRef = useRef<HTMLDivElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);
  const instractorref = useRef<HTMLDivElement>(null);
  const reviewref = useRef<HTMLDivElement>(null);

  const tabs = ['Overview', 'Modules', 'Features', 'Trainers', 'Review'];

  const courseModules = [
    {
      id: 'MERN STACK',
      title: 'MERN STACK',
      content: 'PyCharm, Language Fundamentals, Input-Output, Operators, Conditional Statements, Looping, Control Statements, Functions, Modules, String Manipulation, Lists, Tuple, Set, Dictionaries, File Operations, OOPS Concepts, Regular Expressions, Functional Programming, Map, Reduce, Filter, Iter tools, list comprehension'
    },
    { id: 'sql', title: 'SQL', content: 'Database fundamentals, SQL queries, joins, subqueries, stored procedures, and database optimization techniques.' },
    { id: 'eda', title: 'EDA & Data Visualization', content: 'Exploratory Data Analysis, statistical analysis, data cleaning, matplotlib, seaborn, plotly for creating interactive visualizations.' },
    { id: 'supervised', title: 'Supervised Learning', content: 'Linear regression, logistic regression, decision trees, random forests, SVM, ensemble methods, and model evaluation.' },
    { id: 'unsupervised', title: 'Unsupervised Learning', content: 'K-means clustering, hierarchical clustering, PCA, t-SNE, association rules, and anomaly detection.' },
    { id: 'nlp', title: 'Natural Language Processing & Model Deployment', content: 'Text preprocessing, tokenization, sentiment analysis, NER, model deployment using Flask, Docker, and cloud platforms.' },
    { id: 'deep', title: 'Deep Learning & AI', content: 'Neural networks, CNN, RNN, LSTM, transfer learning, and building AI applications with TensorFlow and PyTorch.' },
    { id: 'gen', title: 'Gen AI', content: 'Generative AI, GPT models, prompt engineering, fine-tuning, and building AI-powered applications.' }
  ];

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isRobot) {
      console.log('Form submitted:', formData);
      alert('Thank you for your enquiry! We will get back to you soon.');
    }
  };

  const scrollToSection = (tab: string) => {
    setActiveTab(tab);

    const sections = {
      'Overview': overviewRef,
      'Modules': moduleRef,
      'Features': programStructureRef,
      'Trainers': instractorref,
      'Review': reviewref
    };

    const sectionRef = sections[tab as keyof typeof sections];
    if (sectionRef?.current) {
      const offset = 120; // Adjust this value based on your header height
      const elementPosition = sectionRef.current.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Calculate scroll progress
      const progress = scrollPosition / (documentHeight - windowHeight);
      setScrollProgress(progress);

      // Define sections with their refs and thresholds
      const sections = [
        { ref: overviewRef, tab: 'Overview', threshold: 0.1 }, // 10% of section height
        { ref: moduleRef, tab: 'Modules', threshold: 0.1 },
        { ref: programStructureRef, tab: 'Features', threshold: 0.1 },
        { ref: instractorref, tab: 'Trainers', threshold: 0.1 },
        { ref: reviewref, tab: 'Review', threshold: 0.1 }
      ];

      // Find the current active section
      let activeSection = 'Overview';

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = rect.height;
          const triggerPoint = sectionTop - windowHeight * 0.3; // Trigger when 30% from top

          if (scrollPosition >= triggerPoint) {
            activeSection = section.tab;
          }
        }
      }

      setActiveTab(activeSection);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive scroll listener for better performance
    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <style jsx global>{`
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .scrollable-nav {
            scroll-behavior: smooth;
          }
          
          .sticky-nav {
            position: -webkit-sticky;
            position: sticky;
            top: 0px;
            z-index: 40;
            transition: all 0.3s ease;
          }

          .nav-progress {
            transition: width 0.1s ease-out;
          }
        `}</style>
        
        {/* Sticky Scrollable Navigation Header - Top Right */}
        <div className="sticky-nav" style={{ top: '120px' }}>
          <div className="flex justify-end pr-[110px] pt-4">
            <div className="bg-white border-none shadow-lg border rounded-[500px] relative overflow-hidden max-w-4xl">
              {/* Progress indicator */}
              <div
                className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 nav-progress z-10 rounded-t-2xl"
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>

              {/* Scrollable Navigation */}
              <div className="overflow-x-auto scrollbar-hide scrollable-nav">
                <nav className="flex items-center justify-start min-w-max px-4 py-2">
                  <div className="flex space-x-2">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => scrollToSection(tab)}
                        className={`flex-shrink-0 py-2 px-6 text-sm font-medium transition-all duration-200 relative rounded-[500px] whitespace-nowrap ${
                          activeTab === tab
                            ? 'text-white bg-[#1668c3] shadow-lg transform scale-105'
                            : 'text-gray-700 bg-[#f5f5f5] rounded-[500px] hover:text-white hover:bg-[#1668c3] hover:scale-102'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                        )}
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Sticky Left Sidebar */}
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-[130px]">
                <div className="bg-white rounded-2xl shadow-lg p-6 border-4 border-2 border-[#1668c3]">
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-6 rounded-2xl mb-4 hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg">
                    APPLY NOW
                  </button>

                  <div className="text-center mb-6">
                    <span className="text-sm text-gray-600">
                      🏆 100% Placement assistance 🏆
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Duration</span>
                      <span className="text-gray-900 font-semibold">7 Months</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Session Duration</span>
                      <span className="text-gray-900 font-semibold">2 Hours/day</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Class Schedule</span>
                      <span className="text-gray-900 font-semibold">Monday to Friday</span>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-gray-600 font-medium">Mode</span>
                      <span className="text-gray-900 font-semibold">Offline/Online</span>
                    </div>

                    <div className="flex justify-between items-center py-3">
                      <span className="text-gray-600 font-medium">Enrolled</span>
                      <span className="text-gray-900 font-semibold">1800+</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setShowMoreLeft(!showMoreLeft)}
                    className="w-full mt-6 flex items-center justify-center text-blue-500 font-medium hover:text-blue-600 transition-colors"
                  >
                    Show More
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showMoreLeft ? 'rotate-180' : ''}`} />
                  </button>

                  {showMoreLeft && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">Certification</span>
                          <span className="text-gray-900 font-semibold">Industry Recognized</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">Project Work</span>
                          <span className="text-gray-900 font-semibold">5+ Live Projects</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600 font-medium">Mentorship</span>
                          <span className="text-gray-900 font-semibold">1:1 Support</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Overview Section */}
              <div ref={overviewRef} className="bg-white rounded-2xl shadow-lg p-8 border mb-8">
                <h1 className="text-3xl font-bold text-gray-900">What you'll learn</h1>
                <hr className='mb-3 mt-3 border-gray-300' />
                <div className="prose prose-lg max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed">
                    Machine learning is a data analysis method that is used to automate analytical model
                    building. It is a subset of Artificial Intelligence (AI) and focuses on analyzing structures and
                    patterns in data to allow reasoning, learning, and decision-making without human
                    interactions. In simple terms, Machine learning will let the user feed large volumes of data
                    to a computer algorithm and make the device process the data to offer recommendations
                    that are data-driven and decisions that are only based on the data offered.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="text-green-500 text-xl">≫</div>
                    <span className="text-gray-600 font-medium">Comprehensive Curriculum</span>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-xl border border-green-100">
                    <div className="text-green-500 text-xl">≫</div>
                    <span className="text-gray-600 font-medium">Interview Preparation</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-blue-500 text-xl">≫</div>
                    <span className="text-gray-600 font-medium">Hands-on Projects</span>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <div className="text-blue-500 text-xl">≫</div>
                    <span className="text-gray-600 font-medium">Industry Mentorship</span>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="text-orange-500 text-xl">≫</div>
                    <span className="text-gray-600 font-medium">Career Guidance</span>
                  </div>

                  <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-xl border border-orange-100">
                    <div className="text-orange-500 text-xl">≫</div>
                    <span className="text-gray-600 font-medium">Portfolio Development</span>
                  </div>
                </div>
              </div>

              {/* Course Content Section */}
              <div ref={moduleRef} className="bg-white rounded-2xl shadow-lg p-8 border mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Content</h2>

                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div key={module.id} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-[#1e8ae6]">
                            {String(index + 1).padStart(2, '0')}
                          </span>

                          <h3 className={`text-lg hover:text-[#8001bc] font-semibold text-left ${
                            module.id === 'courseModules' ? 'text-blue-600' : 'text-gray-900'
                          }`}>
                            {module.title}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                            expandedModules[module.id] ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {(expandedModules[module.id] || module.id === '') && (
                        <div className="px-6 pb-6 bg-gray-50">
                          <p className="text-gray-700 leading-relaxed">
                            {module.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Structure & Career Support Section */}
              <div ref={programStructureRef} className="bg-white rounded-2xl shadow-lg p-8 border mb-8">
                <div className="flex flex-row gap-16">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Program Structure</h2>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">Designed for freshers and early career professionals</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">100+ Hours of Expert Video Content</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">Dedicated Program Support</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">Network with people of similar interests</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">Comprehensive curriculum and hands-on learning</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">Dedicated Career Support</h2>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">1:1 mock interviews with industry experts</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">Career mentorship with industry experts</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">Access to 150+ job postings every month</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">Personalised Resume & LinkedIn Review</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="text-blue-500 text-lg mt-0.5">≫</div>
                        <div>
                          <p className="text-gray-700 text-sm">Break into in-demand Data Science roles with guaranteed job opportunities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div ref={instractorref} className="min-h-screen py-8 w-full mb-8">
                <div className="w-[100%]">
                  <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 w-[100%]">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-8">
                      For Enquiry You Can Contact
                    </h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter your email address"
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone No.
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                          Your Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500"
                          placeholder="Enter the subject of your enquiry"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 text-gray-900 placeholder-gray-500 resize-none"
                          placeholder="Enter your message or enquiry details..."
                        />
                      </div>

                      {/* Terms and Privacy Policy */}
                      <div className="text-sm text-gray-600 leading-relaxed">
                        By registering I accept the{' '}
                        <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                          TnC
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-500 hover:text-blue-600 underline">
                          Privacy Policy
                        </a>{' '}
                        of the website and give my consent to send me updates via Messages/Email *
                      </div>

                      {/* reCAPTCHA Mock */}
                      <div className="flex items-start space-x-3 w-80 p-2 border border-gray-200 rounded-md bg-gray-50">
                        <div className="flex mt-5">
                          <input
                            type="checkbox"
                            id="captcha"
                            checked={captchaChecked}
                            onChange={(e) => setCaptchaChecked(e.target.checked)}
                            className="h-5 w-5 rounded border-2 border-gray-300 focus:ring-blue-500"
                          />
                          <label htmlFor="captcha" className="ml-3 text-sm text-gray-700">
                            I'm not a robot
                          </label>
                        </div>
                        <div className="ml-auto flex flex-col items-center justify-center">
                          <div className="w-7 h-7 mb-1 bg-[#1e8ae6] rounded flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="text-xs text-gray-500">
                            <div>reCAPTCHA</div>
                            <div>Privacy - Terms</div>
                          </div>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting || !captchaChecked}
                        className="w-full bg-[#1e8ae6] text-white font-semibold py-4 px-6 rounded-md shadow-lg hover:from-white-100 hover:to-blue-700 hover:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Submitting...
                          </div>
                        ) : (
                          <>
                            CONTACT NOW
                            <span className="ml-2">→</span>
                          </>
                        )}
                      </button>
                    </form>
                  </div>
                  <InstructorProfile instructor={instractorref} review={reviewref} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MarqueeGallery />
    </>
  );
}