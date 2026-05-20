/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import React from 'react'
import SvgWave from './Svgwave'
import { FaArrowRightLong } from "react-icons/fa6";

const Whoweare = () => {
  return (
    <div className='bg-white px-[6%] py-[2.5rem] flex max-lg:flex-col gap-y-[4rem] justify-between items-center'>
      <div className='flex flex-col w-[38%] max-lg:w-[100%] items-start'>
        <p className="text-center text-blue-500 p-[0.3rem] px-[0.35rem] text-[16px] font-[600] bg-[#E7EFFC] mb-4 rounded-[5px]">
          Who We Are
        </p>
        <div className="mb-4 relative">
          <h2 className="text-[36px] font-bold text-[#082A5E]">
            Where Young Minds Meet &zwnj;
            <span className="text-blue-600 relative">
              Real-World <SvgWave className="top-[5px]"/>
            </span>
            IT Excellence
          </h2>
        </div>

        <h1 className='component text-[18px] text-[#082A5E] mb-[15px] leading-[28px] font-[600]'>
          At MATT Engineering Solutions, we believe in bridging the gap between education and industry.
        </h1>
        <p className='component text-[16px] text-[#39557E] mb-[15px] leading-[26px]'>
          Offering IT courses that deliver real-world skills. Guided by experienced professionals, our programs empower students, researchers, and career seekers to thrive in the ever-evolving IT landscape.
        </p>

        <button className='component mt-[35px] text-[15px] hover:bg-blue-950 duration-[0.8s] font-bold px-[24px] py-[16px] rounded-[5px] bg-blue-600 text-white flex items-center justify-center gap-[10px] cursor-pointer'>
          Explore Courses <FaArrowRightLong />
        </button>
      </div>

      <div className='component flex w-[53%] max-lg:w-[100%] h-[500px] max-lg:h-[400px] max-sm:h-[250px] justify-between max-lg:justify-evenly items-center relative'>
        <div className='flex justify-center items-center h-[100%] w-[50%] max-lg:w-[45%] z-[100]'>
          <img src="/Explore1.jpeg" className='component h-[70%] w-[100%] rounded-[8px]'></img>
        </div>

        <img src="/dotted2.png" className='component absolute h-[125px] w-[120px] left-[-10%] bottom-[0%]' />

        <div className='flex flex-col justify-between items-center w-[45%] max-lg:w-[40%] h-[100%]'>
          <img src="/Explore3.jpg" className='component h-[47%] w-[100%] rounded-[8px]'></img>
          <img src="/Explore2.jpeg" className='component h-[47%] w-[100%] rounded-[8px]'></img>
        </div>
      </div>
    </div>
  )
}

export default Whoweare