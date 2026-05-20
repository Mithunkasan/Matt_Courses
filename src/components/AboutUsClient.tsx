'use client'
import React from 'react';
import Abouthead from '@/components/Abouthead';
import Whoweare from '@/components/Whoweare';
import Achievements from '@/components/Achievements';
import Topmentors from '@/components/Topmentors';
import useScrollTransition from "../../lib/usescrolltransition";

export default function AboutUsClient() {
  useScrollTransition();
  return (
    <div className='w-full bg-cover bg-center bg-fixed overflow-hidden' style={{ backgroundImage: 'url(/Fixedbg.jpg)' }}>
      <Abouthead pageName='About Us' image='/aboutMatt.jpeg' />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        <Whoweare />
        <Achievements />
        <Topmentors />
      </div>
    </div>
  );
}
