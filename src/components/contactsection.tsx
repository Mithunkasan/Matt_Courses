'use client';
import React, { useRef, useEffect, useState } from 'react';

export default function ContactSection2() {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={contactRef}
      className={`relative flex flex-col items-center justify-center px-4 sm:px-6 py-12 min-h-[50vh] transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-yellow-300 to-green-400 w-fit shadow-md">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-6 border border-gray-100 w-[90vw] max-w-2xl">
          <div className="flex flex-col items-center text-center gap-4">
            {/* Title & Description */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
                Ready to Start Your Journey?
              </h2>
              <p className="text-gray-600 text-sm sm:text-base">
                Get in touch with our experts today for personalized guidance and program details.
              </p>
            </div>

            {/* Contact Methods - Row Layout */}
            <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
              <ContactCard
                gradient="from-blue-400 to-blue-600"
                label="Call us anytime"
                value="+91 7305197833"
                iconPath="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
              <ContactCard
                gradient="from-green-400 to-green-600"
                label="Send us an email"
                value="matt@mattengg.com"
                iconPath="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface ContactCardProps {
  gradient: string;
  label: string;
  value: string;
  iconPath: string;
}

function ContactCard({ gradient, label, value, iconPath }: ContactCardProps) {
  return (
    <div className="group relative w-full sm:w-[48%]">
      <div
        className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      ></div>
      <div className="relative bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100 transform group-hover:scale-[1.02] transition-all duration-200 w-full flex items-center gap-3">
        <div className={`p-2 bg-gradient-to-br ${gradient} rounded-lg shadow-md flex-shrink-0`}>
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d={iconPath} />
          </svg>
        </div>
        <div className="text-left">
          <p className="text-gray-500 text-xs font-medium">{label}</p>
          <p className="text-base font-semibold text-gray-900">{value}</p>
        </div>
      </div>
    </div>
  );
}
