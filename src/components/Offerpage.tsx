/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const Offerpage = () => {
  return (
    <div className='h-[100vh]'>
      <div className='relative px-[6%] py-[5rem] h-[100%] w-[100%] flex flex-col items-center justify-center gap-[0.5rem]' style={{ backgroundColor: 'rgba(37, 68, 150, 0.8)' }}>
        <img src="/dotted.png" className='absolute h-[125px] w-[120px] left-[10%] top-[40%] max-sm:top-[60%] left-[30%]'></img>
        <img src="/lolipop.svg" className='absolute h-[250px] w-[200px] right-[0%] bottom-[0%] max-lg:h-[200px] max-lg:w-[150px] max-md:h-[100px] max-md:w-[100px]'></img>
        <p className='text-[16px] font-[550]'>
          ARE YOU READY FOR THIS OFFER
        </p>
        <h1 className='text-[48px] font-bold max-md:text-[34px] max-sm:text-[28px] text-center'>
          50% Offer For Very First 50
        </h1>
        <h4 className='text-[28px] font-[500] max-sm:text-[30px]'>
          Student’s & Mentors
        </h4>
        <button className='mt-[35px] text-[15px] hover:bg-blue-950 duration-[0.8s] font-bold px-[24px] py-[16px] rounded-[5px] bg-blue-600 text-white flex items-center justify-center gap-[10px] cursor-pointer z-[100]'>
          BECOME A STUDENT <FaArrowRightLong />
        </button>
      </div>
    </div>
  )
}

export default Offerpage