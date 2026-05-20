'use client'
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Sparkles, ArrowRight, Star, Zap, Target, Users, Clock, Calendar, Monitor, Award } from 'lucide-react';
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
  const [isVisible, setIsVisible] = useState(false);
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

  const overviewRef = useRef<HTMLDivElement>(null);
  const moduleRef = useRef<HTMLDivElement>(null);
  const programStructureRef = useRef<HTMLDivElement>(null);
  const instractorref = useRef<HTMLDivElement>(null);
  const reviewref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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

  const features = [
    { icon: Sparkles, title: 'Comprehensive Curriculum', color: 'green' },
    { icon: Target, title: 'Interview Preparation', color: 'green' },
    { icon: Zap, title: 'Hands-on Projects', color: 'blue' },
    { icon: Users, title: 'Industry Mentorship', color: 'blue' },
    { icon: Star, title: 'Career Guidance', color: 'orange' },
    { icon: Award, title: 'Portfolio Development', color: 'orange' }
  ];

  const stats = [
    { icon: Clock, label: 'Duration', value: '7 Months' },
    { icon: Clock, label: 'Session Duration', value: '2 Hours/day' },
    { icon: Calendar, label: 'Class Schedule', value: 'Monday to Friday' },
    { icon: Monitor, label: 'Mode', value: 'Offline/Online' },
    { icon: Users, label: 'Enrolled', value: '1800+' }
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

    const sections: Record<string, React.RefObject<HTMLDivElement | null>> = {
      'Overview': overviewRef,
      'Modules': moduleRef,
      'Features': programStructureRef,
      'Trainers': instractorref,
      'Review': reviewref,
    };

    
  const path ={
    id:"Overview",
    path :"/"
  }

    const sectionRef = sections[tab];
    if (sectionRef?.current) {
      const offset = 120;
      const elementPosition = sectionRef.current.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    // Page entrance animation
    setIsVisible(true);

    const calculateSectionProgress = () => {
      const sections = [
        { ref: overviewRef, tab: 'Overview' },
        { ref: moduleRef, tab: 'Modules' },
        { ref: programStructureRef, tab: 'Features' },
        { ref: instractorref, tab: 'Trainers' },
        { ref: reviewref, tab: 'Review' }
      ];

      const progress: Record<string, number> = {};
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      sections.forEach(({ ref, tab }) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          const sectionHeight = rect.height;
          
          // Calculate how much of this section is visible
          const start = sectionTop - windowHeight * 0.3;
          const end = sectionTop + sectionHeight - windowHeight * 0.3;
          const scrollPosition = window.scrollY;
          
          let sectionProgress = 0;
          if (scrollPosition >= start && scrollPosition <= end) {
            sectionProgress = (scrollPosition - start) / (end - start);
          } else if (scrollPosition > end) {
            sectionProgress = 1;
          }
          
          progress[tab] = Math.max(0, Math.min(1, sectionProgress));
        }
      });

      setSectionProgress(progress);
    };

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const progress = scrollPosition / (documentHeight - windowHeight);
      setScrollProgress(progress);

      calculateSectionProgress();

      const sections = [
        { ref: overviewRef, tab: 'Overview' },
        { ref: moduleRef, tab: 'Modules' },
        { ref: programStructureRef, tab: 'Features' },
        { ref: instractorref, tab: 'Trainers' },
        { ref: reviewref, tab: 'Review' }
      ];

      let activeSection = 'Overview';

      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          const triggerPoint = windowHeight * 0.3;

          if (rect.top <= triggerPoint) {
            activeSection = section.tab;
          }
        }
      }

      setActiveTab(activeSection);
    };

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

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-blue-50" ref={containerRef}>
        <style jsx global>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
            50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
          }
          
          @keyframes slideInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-glow {
            animation: glow 2s ease-in-out infinite;
          }
          
          .animate-slide-in-up {
            animation: slideInUp 0.6s ease-out;
          }
          
          .animate-fade-in {
            animation: fadeIn 0.8s ease-out;
          }
          
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          
          .gradient-text {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          
          .premium-card {
            background: linear-gradient(145deg, #ffffff 0%, #f8fafc 100%);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 
              0 20px 40px rgba(0, 0, 0, 0.1),
              0 0 0 1px rgba(255, 255, 255, 0.3);
          }
          
          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }
          
          .hover-lift:hover {
            transform: translateY(-5px);
            box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
          }

          .progress-line {
            background: linear-gradient(90deg, #3b82f6 0%, #1e40af 50%, #3b82f6 100%);
          }
        `}</style>
        
        {/* Animated Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        {/* Sticky Navigation */}
        <div className="sticky z-50" style={{ top: '120px' }}>
          <div className="flex justify-end pr-[3.5px] pt-4">
            <div className="premium-card rounded-[500px] relative overflow-hidden w-[900px] animate-slide-in-up">
              {/* Main Progress Line */}
              <div
                className="absolute top-0 left-0 h-1 progress-line transition-all duration-100 ease-out z-10"
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>

              {/* Section Progress Indicators */}
              <div className="absolute top-0 left-0 h-1 w-full flex">
                {tabs.map((tab, index) => {
                  const progress = sectionProgress[tab] || 0;
                  const isActive = activeTab === tab;
                  const isCompleted = index < tabs.indexOf(activeTab);
                  
                  return (
                    <div
                      key={tab}
                      className={`h-full transition-all duration-300 ${
                        isActive 
                          ? 'bg-blue-600' 
                          : isCompleted 
                            ? 'bg-blue-400' 
                            : 'bg-blue-200'
                      }`}
                      style={{ 
                        width: `${100 / tabs.length}%`,
                        opacity: isActive ? 1 : isCompleted ? 0.7 : 0.4
                      }}
                    />
                  );
                })}
              </div>

              <div className="overflow-x-auto scrollbar-hide">
                <nav className="flex items-center justify-center min-w-max px-0 py-[10px]">
                  <div className="flex space-x-22">
                    {tabs.map((tab, index) => (
                      <button
                        key={tab}
                        onClick={() => scrollToSection(tab)} 
                        className={`flex-shrink-0 py-3 px-6 text-[14px] font-semibold transition-all duration-300 relative rounded-[500px] whitespace-nowrap hover-lift group ${
                          activeTab === tab
                            ? 'text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-2xl transform scale-105'
                            : 'text-gray-700 bg-white/80 hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 hover:text-white'
                        }`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <span className="relative z-1">{tab}</span>
                        {activeTab === tab && (
                          <>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-[500px]"></div>
                            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          </>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 rounded-[500px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    ))}
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className={`max-w-7xl mx-auto px-4 py-8 relative z-10 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex gap-8">
            {/* Sticky Left Sidebar */}
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-[110px]">
                <div className="premium-card rounded-2xl p-6 hover-lift animate-slide-in-up">
                  <button 
                    onClick={() => scrollToSection('Overview')}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-2xl mb-4 hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover-lift group relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      APPLY NOW
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>

                  <div className="text-center mb-6">
                    <span className="text-sm gradient-text font-semibold">
                      🏆 100% Placement assistance 🏆
                    </span>
                  </div>

                  <div className="space-y-4">
                    {stats.map((stat, index) => (
                      <div 
                        key={stat.label}
                        className="flex justify-between items-center py-1 border-b border-gray-100/50 transition-all duration-300 hover:bg-white/50 hover:px-3 hover:rounded-lg"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center space-x-3">
                          <stat.icon className="h-4 w-4 text-blue-500" />
                          <span className="text-gray-600 font-medium">{stat.label}</span>
                        </div>
                        <span className="text-gray-900 font-semibold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                          {stat.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setShowMoreLeft(!showMoreLeft)}
                    className="w-full mt-6 flex items-center justify-center gradient-text font-semibold hover:scale-105 transition-transform duration-200 group"
                  >
                    {showMoreLeft ? 'Show Less' : 'Show More'}
                    <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                      showMoreLeft ? 'rotate-180' : ''
                    } group-hover:translate-y-0.5`} />
                  </button>

                  {showMoreLeft && (
                    <div className="mt-4 pt-4 border-t border-gray-100/50 animate-slide-in-up">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center py-2 hover:bg-white/50 hover:px-3 hover:rounded-lg transition-all duration-300">
                          <span className="text-gray-600 font-medium">Certification</span>
                          <span className="text-gray-900 font-semibold gradient-text">Industry Recognized</span>
                        </div>
                        <div className="flex justify-between items-center py-2 hover:bg-white/50 hover:px-3 hover:rounded-lg transition-all duration-300">
                          <span className="text-gray-600 font-medium">Project Work</span>
                          <span className="text-gray-900 font-semibold gradient-text">5+ Live Projects</span>
                        </div>
                        <div className="flex justify-between items-center py-2 hover:bg-white/50 hover:px-3 hover:rounded-lg transition-all duration-300">
                          <span className="text-gray-600 font-medium">Mentorship</span>
                          <span className="text-gray-900 font-semibold gradient-text">1:1 Support</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 space-y-8">
              {/* Overview Section */}
              <div  ref={overviewRef} className="premium-card rounded-2xl p-8 hover-lift animate-slide-in-up">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-2 h-8 rounded-full"></div>
                  <h1 className="text-3xl font-bold gradient-text">What you'll learn</h1>
                </div>
                
                <div className="prose prose-lg max-w-none mb-8 animate-fade-in">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Machine learning is a data analysis method that is used to automate analytical model
                    building. It is a subset of Artificial Intelligence (AI) and focuses on analyzing structures and
                    patterns in data to allow reasoning, learning, and decision-making without human
                    interactions. In simple terms, Machine learning will let the user feed large volumes of data
                    to a computer algorithm and make the device process the data to offer recommendations
                    that are data-driven and decisions that are only based on the data offered.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => {
                    const IconComponent = feature.icon;
                    return (
                      <div 
                        key={feature.title}
                        className="group p-6 rounded-xl border border-gray-100 bg-white/50 hover-lift transition-all duration-300 animate-slide-in-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg bg-${feature.color}-100 group-hover:scale-110 transition-transform duration-300`}>
                            <IconComponent className={`h-6 w-6 text-${feature.color}-500`} />
                          </div>
                          <span className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                            {feature.title}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Course Content Section */}
              <div ref={moduleRef} className="premium-card rounded-2xl p-8 hover-lift animate-slide-in-up">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                  <h2 className="text-3xl font-bold gradient-text">Course Content</h2>
                </div>

                <div className="space-y-4">
                  {courseModules.map((module, index) => (
                    <div 
                      key={module.id} 
                      className="border border-gray-200 rounded-xl overflow-hidden hover-lift transition-all duration-300 group animate-slide-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between p-6 bg-white group-hover:bg-gray-50 transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            <span className="text-2xl font-bold gradient-text">
                              {String(index + 1).padStart(2, '0')}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:gradient-text transition-all duration-300">
                            {module.title}
                          </h3>
                        </div>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-500 transition-all duration-300 group-hover:scale-110 ${
                            expandedModules[module.id] ? 'rotate-180 text-blue-500' : ''
                          }`}
                        />
                      </button>

                      {(expandedModules[module.id] || module.id === '') && (
                        <div className="px-6 pb-6 bg-gradient-to-r from-gray-50 to-blue-50 animate-slide-in-up">
                          <p className="text-gray-700 leading-relaxed">
                            {module.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Program Structure Section */}
              <div ref={programStructureRef}  className="premium-card rounded-2xl p-8 hover-lift animate-slide-in-up">
                <div className="flex flex-row gap-8">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full"></div>
                      <h2 className="text-xl font-bold gradient-text">Program Structure</h2>
                    </div>
                    <div className="space-y-4">
                      {[
                        'Designed for freshers and early career professionals',
                        '100+ Hours of Expert Video Content',
                        'Dedicated Program Support',
                        'Network with people of similar interests',
                        'Comprehensive curriculum and hands-on learning'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 group animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-6">
                      <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-teal-500 rounded-full"></div>
                      <h2 className="text-xl font-bold gradient-text">Dedicated Career Support</h2>
                    </div>
                    <div className="space-y-4">
                      {[
                        '1:1 mock interviews with industry experts',
                        'Career mentorship with industry experts',
                        'Access to 150+ job postings every month',
                        'Personalised Resume & LinkedIn Review',
                        'Break into in-demand Data Science roles with guaranteed job opportunities'
                      ].map((item, index) => (
                        <div key={index} className="flex items-start space-x-3 group animate-slide-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                          <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300"></div>
                          <p className="text-gray-700 group-hover:text-gray-900 transition-colors">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Section */}
              <div  ref={reviewref} className="premium-card rounded-2xl p-8 hover-lift animate-slide-in-up">
                <div className="text-center mb-8">
                  <h1 className="text-3xl font-bold gradient-text mb-2">
                    For Enquiry You Can Contact
                  </h1>
                  <p className="text-gray-600">Get in touch with our experts for personalized guidance</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="animate-slide-in-up" style={{ animationDelay: '100ms' }}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div className="animate-slide-in-up" style={{ animationDelay: '200ms' }}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
                        placeholder="Enter your email address"
                      />
                    </div>

                    <div className="animate-slide-in-up" style={{ animationDelay: '300ms' }}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Phone No.</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div className="animate-slide-in-up" style={{ animationDelay: '400ms' }}>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Your Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50"
                        placeholder="Enter the subject"
                      />
                    </div>
                  </div>

                  <div className="animate-slide-in-up" style={{ animationDelay: '500ms' }}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/50 resize-none"
                      placeholder="Enter your message or enquiry details..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover-lift animate-slide-in-up"
                    style={{ animationDelay: '600ms' }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Submitting...
                      </div>
                    ) : (
                      <>
                        CONTACT NOW
                        <ArrowRight className="inline ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Instructor Profile Section */}
              <InstructorProfile instructor={instractorref} review={reviewref} />
            </div>
          </div>
        </div>
      </div>
      <MarqueeGallery />
    </>
  );
}