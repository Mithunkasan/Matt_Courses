'use client'
import React from 'react';

const NACTETCertification3D = () => {
  return (
    <>
      <div className="min-h-screen p-4 sm:p-8 flex items-center justify-center bg-gray-50">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* 3D Rotating Certificate */}
          <div className="flex-shrink-0">
            <div className="perspective-1000">
              <div className="certificate-container w-[clamp(200px,25vw,320px)] h-[clamp(240px,30vw,384px)]">
                {/* Front Side */}
                <div className="certificate-face certificate-front">
                  <div className="w-full h-full rounded-lg shadow-2xl overflow-hidden">
                    <img className='h-full w-full object-fit-cover ' src="/Certificate.jpg" alt="NACTET Certificate"/>
                  </div>
                </div>

                {/* Back Side */}
                <div className="certificate-face certificate-back">
                  <div className="w-full h-full rounded-lg shadow-2xl overflow-hidden">
                    <img className='h-full w-full object-fit-cover' src="/Certificate.jpg" alt="NACTET Certificate"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 max-w-lg text-center lg:text-left">
            {/* Medal Icon */}
            <div className="mb-6 flex justify-center lg:justify-start">
              <div className="relative inline-block">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center relative shadow-lg">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-full border-4 border-yellow-700 flex items-center justify-center shadow-inner">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-sm"></div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-6 sm:w-10 sm:h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 relative">
                      <div className="absolute bottom-0 left-0 w-0 h-0 border-l-4 sm:border-l-5 border-r-0 border-t-6 sm:border-t-8 border-l-transparent border-t-yellow-700"></div>
                      <div className="absolute bottom-0 right-0 w-0 h-0 border-r-4 sm:border-r-5 border-l-0 border-t-6 sm:border-t-8 border-r-transparent border-t-yellow-700"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-2 w-3 h-3 sm:w-4 sm:h-4 bg-purple-500 rounded-full shadow-sm"></div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 leading-snug">
              CERTIFICATION BY<br />
              NATIONAL COUNCIL FOR<br />
              TECHNOLOGY & TRAINING
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              The Course is Certified by National Council for Technology & Training. 
              <span className="text-blue-600 font-semibold"> NACTET</span> certificates have high credibility among employers in India and abroad, especially in the Middle East and other parts of the world. All certificates issued by NACTET can be attested by the Ministry of External Affairs - Govt. of India and by the embassies of almost all countries.
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        .certificate-container {
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3d 9s infinite linear;
        }

        .certificate-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 8px;
        }

        .certificate-front {
          transform: rotateY(0deg);
        }

        .certificate-back {
          transform: rotateY(180deg);
        }

        @keyframes rotate3d {
          from {
            transform: rotateY(0deg) rotateX(10deg);
          }
          to {
            transform: rotateY(360deg) rotateX(5deg);
          }
        }
      `}</style>
    </>
  );
};

export default NACTETCertification3D;
