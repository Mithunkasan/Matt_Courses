'use client'
import React from 'react';
import Abouthead from '@/components/Abouthead';
import Allinstructors from '@/components/Allinstructors';
import QuickAction from '@/components/QuickAction';
import TitleBar from '@/components/Titlebar';
import useScrollTransition from "../../lib/usescrolltransition";

export default function OurInstructorsClient() {
  useScrollTransition();
  return (
    <div className="w-full overflow-hidden">
      <TitleBar />
      <Abouthead pageName='Top Class Instructors' image='/breadcrumb_bg.jpg' />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Allinstructors />
        <QuickAction />
      </div>
    </div>
  );
}
