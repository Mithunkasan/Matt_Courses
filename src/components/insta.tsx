/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */

// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { Instagram } from 'lucide-react';

// const InstagramFeed = () => {
//   const [position, setPosition] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [containerWidth, setContainerWidth] = useState(0);
//   const containerRef = useRef<HTMLDivElement>(null);
  
//   // Sample Instagram-style posts data
//   const posts = [
//     {
//       id: 1,
//       image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop',
//       title: 'BACK 2 SCHOOL',
//       subtitle: 'New Collection',
//       category: 'Education'
//     },
//     {
//       id: 2,
//       image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop',
//       title: 'DEVELOPER',
//       subtitle: 'B.Com விளம் Sanjay ஏறி',
//       category: 'Career'
//     },
//     {
//       id: 3,
//       image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop',
//       title: 'ANGULAR DEVELOPER',
//       subtitle: 'Congrats ROHAN THOMAS ABRAHAM',
//       category: 'Achievement'
//     },
//     {
//       id: 4,
//       image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=500&fit=crop',
//       title: 'SUCCESS STORY',
//       subtitle: 'Malayalam Content',
//       category: 'Success'
//     },
//     {
//       id: 5,
//       image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
//       title: 'WEB DEVELOPMENT',
//       subtitle: 'Full Stack Course',
//       category: 'Technology'
//     },
//     {
//       id: 6,
//       image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
//       title: 'DATA SCIENCE',
//       subtitle: 'Machine Learning',
//       category: 'Analytics'
//     }
//   ];

//   // Duplicate posts for seamless loop
//   const duplicatedPosts = [...posts, ...posts, ...posts];

//   // Update container width on mount and window resize
//   useEffect(() => {
//     const updateWidth = () => {
//       if (containerRef.current) {
//         setContainerWidth(containerRef.current.getBoundingClientRect().width);
//       }
//     };

//     updateWidth();
//     window.addEventListener('resize', updateWidth);

//     return () => {
//       window.removeEventListener('resize', updateWidth);
//     };
//   }, []);

//   useEffect(() => {
//     let animationFrameId: number;
//     let lastTimestamp = 0;
//     const speed = 0.05; // Pixels per millisecond - slower for better viewing

//     const animate = (timestamp: number) => {
//       if (!lastTimestamp) lastTimestamp = timestamp;
//       const elapsed = timestamp - lastTimestamp;
      
//       if (!isPaused) {
//         setPosition(prev => {
//           const cardWidth = 320; // Card width + gap
//           const totalWidth = cardWidth * posts.length;
//           const newPosition = prev + speed * elapsed;
          
//           // Reset position when reaching the end
//           if (newPosition >= totalWidth) {
//             return 0;
//           }
//           return newPosition;
//         });
//       }
      
//       lastTimestamp = timestamp;
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameId) {
//         cancelAnimationFrame(animationFrameId);
//       }
//     };
//   }, [isPaused, posts.length]);

//   return (
//     <div className="w-full bg-gradient-to-b from-gray-50 to-white py-16">
//       {/* Header Section */}
//       <div className="text-center mb-12 px-4">
//         <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//           <span className="text-gray-800">Our Instagram </span>
//           <span className="text-purple-600 relative">
//             Feed
//             <Instagram className="inline-block ml-2 w-8 h-8 md:w-10 md:h-10" />
//           </span>
//         </h2>
//         <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
//           Follow us on{' '}
//           <a href="#" className="text-purple-600 hover:text-purple-700 font-semibold underline">
//             Instagram
//           </a>{' '}
//           for the latest updates and behind-the-scenes content. Stay connected with us and explore our latest posts.
//         </p>
//       </div>

//       {/* Instagram Feed Carousel */}
//       <div className="w-full px-4">
//         <div 
//           ref={containerRef}
//           className="relative overflow-hidden rounded-2xl"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//         >
//           <div 
//             className="flex gap-6"
//             style={{ 
//               transform: `translateX(-${position}px)`,
//               transition: isPaused ? 'transform 0.3s ease-out' : 'none'
//             }}
//           >
//             {duplicatedPosts.map((post, index) => (
//               <div 
//                 key={`${post.id}-${index}`}
//                 className="min-w-[300px] flex-shrink-0 group cursor-pointer"
//               >
//                 <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
//                   {/* Image */}
//                   <img
//                     src={post.image}
//                     alt={post.title}
//                     className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   />
                  
//                   {/* Overlay */}
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
//                   {/* Content */}
//                   <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                     <div className="mb-2">
//                       <span className="inline-block px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
//                         {post.category}
//                       </span>
//                     </div>
//                     <h3 className="text-xl font-bold mb-2 leading-tight">
//                       {post.title}
//                     </h3>
//                     <p className="text-gray-200 text-sm leading-relaxed">
//                       {post.subtitle}
//                     </p>
//                   </div>
                  
//                   {/* Instagram Icon Overlay */}
//                   <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     <Instagram className="w-5 h-5 text-white" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="text-center mt-12 px-4">
//         <button className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
//           <Instagram className="w-6 h-6" />
//           Follow Us on Instagram
//         </button>
//       </div>
//     </div>
//   );
// };

// export default InstagramFeed;

"use client";
import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

const PerfectCarousel3D = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const images = [
    {
      id: 1,
      url: '/image/Mernstack.jpg',
      title: 'MERN Stack Development',
      category: 'Software',
      description: 'Master frontend and backend engineering using MongoDB, Express, React, and Node.js.',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      url: '/pythonfull.jpg',
      title: 'Python Fullstack Development',
      category: 'Software',
      description: 'Build robust, scalable web applications with Python, Django, and modern frontend tools.',
      color: 'from-indigo-500 to-purple-400'
    },
    {
      id: 3,
      url: '/image/embeded.jpg',
      title: 'Embedded Systems',
      category: 'Hardware',
      description: 'Learn to design, program, and integrate microcontrollers and real-time operating systems.',
      color: 'from-green-500 to-emerald-400'
    },
    {
      id: 4,
      url: '/image/AI.jpg',
      title: 'Artificial Intelligence',
      category: 'AI',
      description: 'Explore neural networks, deep learning models, natural language processing, and computer vision.',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 5,
      url: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=600',
      title: 'Machine Learning',
      category: 'AI',
      description: 'Master predictive modeling, classification, regression, and data clustering techniques.',
      color: 'from-teal-500 to-blue-400'
    },
    {
      id: 6,
      url: '/image/Programming.jpg',
      title: 'Python Programming',
      category: 'Programming',
      description: 'Begin coding by mastering core Python concepts, data structures, and algorithms.',
      color: 'from-orange-500 to-red-400'
    }
  ];

  // Auto-rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsTransitioning(false), 700);
  };

interface DotClickHandler {
    (index: number): void;
}

const handleDotClick: DotClickHandler = (index) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 700);
};

  const getImageAtPosition = (offset: number) => {
    const index = (currentIndex + offset + images.length) % images.length;
    return images[index];
  };

  return (
    <div className="w-full bg-white relative overflow-hidden py-8">
      {/* Clean Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-br from-pink-50 to-orange-50 rounded-full blur-3xl opacity-25" />
        <div className="absolute bottom-20 left-1/3 w-44 h-44 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full blur-3xl opacity-20" />
      </div>

      {/* Header */}
     <div className="w-full bg-white relative overflow-hidden py-8">
  {/* Clean Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-30" />
    <div className="absolute top-32 right-32 w-48 h-48 bg-gradient-to-br from-pink-50 to-orange-50 rounded-full blur-3xl opacity-25" />
    <div className="absolute bottom-20 left-1/3 w-44 h-44 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-full blur-3xl opacity-20" />
  </div>

  {/* Header with Instagram Logo */}
  <div className="relative z-10 text-center py-8 px-4">
    <div className="flex justify-center items-center gap-3 mb-4">
      <h2 className="text-4xl md:text-[45px] font-bold">
        <span className="bg-gradient-to-t from-yellow-600 to-red-600 bg-clip-text text-transparent" >Our Instagram </span>
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Feed
        </span>
      </h2>
      {/* Instagram Icon Link */}
      <a
        href="https://www.instagram. com/matt_training_hub"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <img
          src="insta.png" // Replace with actual path to your icon
          alt="Instagram"
          className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
        />
      </a>
    </div>
    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
      Experience our content in stunning 3D perspective
    </p>
  </div>
</div>


      {/* 3D Carousel Container - Responsive Height */}
      <div className="relative w-full max-w-[90%] mx-auto px-4 mb-12">
        <div 
          className="relative w-full h-[400px] md:h-[500px]"
          style={{ perspective: '1200px' }}
        >
          {/* Left Image - BLURRED */}
          <div 
            className={`absolute left-0 md:left-8 top-1/2 -translate-y-1/2 w-48 h-64 md:w-[300px] md:h-[400px] transition-all duration-700 ease-out cursor-pointer group ${
              isTransitioning ? 'scale-90 opacity-40' : 'hover:scale-95 opacity-60'
            }`}
            style={{
              transform: 'translateY(-50%) translateX(10px) rotateY(45deg) scale(0.8)',
              transformOrigin: 'center right',
              zIndex: 1,
              filter: 'blur(2px)'  // BLUR APPLIED HERE
            }}
            onClick={handlePrev}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src={getImageAtPosition(-1).url}
                alt={getImageAtPosition(-1).title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className={`absolute inset-0 bg-gradient-to-br ${getImageAtPosition(-1).color} opacity-20`} />
            </div>
          </div>

          {/* Center Image (Main) - CRYSTAL CLEAR */}
          <div 
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 md:w-80 md:h-96 transition-all duration-700 ease-out ${
              isTransitioning ? 'scale-105' : 'hover:scale-102'
            }`}
            style={{
              zIndex: 5,
              filter: 'none',  // NO BLUR - CRYSTAL CLEAR
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
            }}
          >
            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={getImageAtPosition(0).url}
                alt={getImageAtPosition(0).title}
                className="w-full h-full object-cover"
                style={{ imageRendering: 'crisp-edges' }}
              />
              
              {/* Clean gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              {/* Content Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${getImageAtPosition(0).color} text-white text-xs font-semibold rounded-full`}>
                    {getImageAtPosition(0).category}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-1.5 leading-tight">
                  {getImageAtPosition(0).title}
                </h3>
                <p className="text-xs md:text-sm text-gray-200 line-clamp-2 leading-relaxed opacity-90">
                  {getImageAtPosition(0).description}
                </p>
              </div>

              {/* Clean border */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-white/20" />
            </div>
          </div>

          {/* Right Image - BLURRED */}
          <div 
            className={`absolute right-0 md:right-8 top-1/2 -translate-y-1/2 w-48 h-64 md:w-[300px] md:h-[400px] transition-all duration-700 ease-out cursor-pointer group ${
              isTransitioning ? 'scale-90 opacity-40' : 'hover:scale-95 opacity-60'
            }`}
            style={{
              transform: 'translateY(-50%) translateX(-10px) rotateY(-45deg) scale(0.8)',
              transformOrigin: 'center left',
              zIndex: 1,
              filter: 'blur(2px)'  // BLUR APPLIED HERE
            }}
            onClick={handleNext}
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
              <img
                src={getImageAtPosition(1).url}
                alt={getImageAtPosition(1).title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className={`absolute inset-0 bg-gradient-to-bl ${getImageAtPosition(1).color} opacity-20`} />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        {/* <button
          onClick={handlePrev}
          disabled={isTransitioning}
          className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-20 border border-gray-200"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={handleNext}
          disabled={isTransitioning}
          className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 hover:scale-110 disabled:opacity-50 z-20 border border-gray-200"
        >
          <ChevronRight className="w-6 h-6" />
        </button> */}
      </div>

      {/* Dots Indicator */}
      <div className="relative z-10 flex justify-center gap-3 mb-8">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="group relative"
          >
            <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? `bg-gradient-to-r ${image.color} scale-125`
                : 'bg-gray-300 hover:bg-gray-400'
            }`} />
          </button>
        ))}
      </div>

      {/* Auto-rotation indicator */}
      {/* <div className="fixed bottom-6 right-6 flex items-center gap-2 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg border border-gray-200 text-sm">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="text-gray-700 font-medium">Auto</span>
      </div> */}
    </div>
  );
};

export default PerfectCarousel3D;