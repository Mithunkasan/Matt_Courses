'use client'
import React, { useEffect } from 'react';
import Header from './Header';
import { Showca } from '@/components/showca';
import { useIsVisible } from '@/hooks/useIsVisible';
import Softwarehero from '@/components/softwarehero';
import PopularTopics from '@/components/popular-topics';
import FAQ from '@/components/faq';

export default function SoftwareClient() {
  const { isVisible } = useIsVisible<HTMLDivElement>();

  useEffect(() => {
    function handleScroll() {
      // Scroll handling logic if needed in the future
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <div className="w-full overflow-hidden">
      <Softwarehero />
      <Showca title='Your Style' />
      <Header />
      <PopularTopics title='Topics' />
      <FAQ title="Questions" />
    </div>
  );
}
