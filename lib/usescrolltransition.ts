'use client';

import { useEffect } from 'react';

const useScrollTransition = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Cache elements and observer for cleanup
    let observer: IntersectionObserver;
    const observedElements: Element[] = [];

    // Use requestAnimationFrame for smoother performance
    const initObserver = () => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            // Use classList.toggle for cleaner code
            (entry.target as HTMLElement).classList.toggle(
              'visible',
              entry.isIntersecting
            );
          });
        },
        {
          threshold: 0.3,
          rootMargin: '0px 0px -20% 0px',
          // Consider using passive for better scroll performance
        }
      );

      const elements = document.querySelectorAll('.component, .component1');
      elements.forEach((el) => {
        observer.observe(el);
        observedElements.push(el);
      });
    };

    // Delay initialization slightly to avoid blocking main thread
    const rafId = requestAnimationFrame(initObserver);

    return () => {
      cancelAnimationFrame(rafId);
      if (observer) {
        // Only disconnect if we have elements to unobserve
        observedElements.forEach((el) => observer.unobserve(el));
        observer.disconnect();
      }
    };
  }, []);
};

export default useScrollTransition;