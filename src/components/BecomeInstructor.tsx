/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import SvgWave from './Svgwave';

const BecomeInstructor = () => {
  return (
    <section className='component overflow-hidden bg-[#1363DF] w-[100%] my-[5rem] py-[28px] px-[60px] rounded-[8px] applyBG'>
      <div className='w-[100%] h-[100%] relative'>
        <img src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2023/07/cta_shape01-1.svg" className='h-[70px] absolute top-[-70px] left-[-40px]'></img>
        <img src="https://ifingerstudio.com/eduvalt/wp-content/uploads/2025/03/cta_shape02-new.svg" className='h-[70px] absolute bottom-[-50px] right-[-65px]'></img>
        <div className='flex items-center justify-between w-[100%]'>
          <h1 className='text-[30px] font-bold text-white w-[25%]'>
            Join Us & <span className='relative'>Spread <SvgWave className="svg-wave"/> </span>Experiences
          </h1>
          <p className='text-[16px] text-white w-[40%] leading-[30px]'>
           Join our passionate community of instructors and turn your expertise into opportunities.
          </p>
          <button className='flex bg-white gap-[10px] items-center text-[#082A5E] text-[15px] font-semibold rounded-[5px] py-[16px] px-[24px] cursor-pointer hover:bg-white hover:text-blue-500 duration-[0.5s] hover:border-[2px] border-white'>
            BECOME AN INSTRUCTOR <FaArrowRightLong />
          </button>
        </div>
      </div>
    </section>
  )
}

export default BecomeInstructor