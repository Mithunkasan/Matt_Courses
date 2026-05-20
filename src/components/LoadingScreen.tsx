import React from 'react';

const LoadingScreen = () => {
  return (
    <div 
      role="status" 
      aria-label="Loading course content" 
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/80"
    >
      <div className="text-center space-y-8 max-w-md px-4">
        {/* Animated book opening illustration */}
        <div className="relative mx-auto w-32 h-32">
          {/* Book cover */}
          <div className="absolute left-0 top-0 w-16 h-24 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg shadow-lg transform origin-right transition-all duration-1000 animate-[bookOpen_2s_infinite]">
            <div className="absolute top-2 left-1 w-14 h-20 bg-white/10 rounded-sm"></div>
          </div>
          
          {/* Book pages */}
          <div className="absolute left-8 top-0 w-16 h-24 bg-white border border-gray-200 rounded-r-lg shadow-sm overflow-hidden">
            {/* Page content animation */}
            <div className="h-full flex flex-col p-2 space-y-1">
              <div className="h-2 bg-gray-200 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="h-2 bg-gray-200 rounded-full animate-pulse w-3/4" style={{ animationDelay: '0.2s' }}></div>
              <div className="h-2 bg-gray-200 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="h-2 bg-gray-200 rounded-full animate-pulse w-5/6" style={{ animationDelay: '0.4s' }}></div>
              <div className="h-2 bg-gray-200 rounded-full animate-pulse w-2/3" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          {/* Pencil writing animation */}
          <div className="absolute left-20 top-4 w-8 h-2 bg-yellow-500 rounded-full transform rotate-12 origin-left animate-[pencilWrite_2s_infinite]">
            <div className="absolute -right-1 top-0 w-2 h-2 bg-gray-700 rounded-full"></div>
          </div>
        </div>
        
        {/* Progress indicator with educational theme */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-900">Preparing Your Learning Materials</h3>
          <p className="text-gray-700 text-sm">Just a moment while we gather the latest course content for you</p>
          
          {/* Animated progress bar with page flip effect */}
          <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2.5 rounded-full animate-[progressLoad_2s_infinite] origin-left"></div>
          </div>
          
          {/* Subject icons animation */}
          <div className="flex justify-center space-x-6 pt-4">
            {[
              'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
              'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
              'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
              'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
            ].map((path, index) => (
              <div 
                key={index} 
                className="text-gray-600 animate-bounce" 
                style={{ animationDelay: `${0.1 + index * 0.2}s` }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path}></path>
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;