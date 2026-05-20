/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Jointoletter = () => {
  return (
    <section className='px-[6%] py-[55px] bg-white flex justify-between max-xl:justify-center gap-y-[2rem] items-center flex-wrap w-[100%]'>
      <div className='basis-[24%]max-xl:basis-[30%] flex justify-center items-center component'>
        <img src="/newsletter.png" alt='Write a letter' className='h-[200px] w-[280]'></img>
      </div>
      <div className='basis-[23%] max-xl:basis-[45%] max-sm:basis-[100%] flex justify-center items-center'>
        <h1 className='component leading-[1.2] text-[#082A5E] font-[700] text-[30px]'>
          Let’s Join To <br></br>Our Newsletters
        </h1>
      </div>
      <div className='basis-[45%] max-xl:basis-[100%] overflow-hidden'>
        <div className='flex justify-between items-center border-[1px] border-[#D0DFF7] rounded-[50px] bg-[#E7EFFC] py-[5px] pl-[28] pr-[5px] w-[100%] component'>
          <input
            type='email'
            required
            placeholder='Enter your email*'
            className='text-[black] font-medium text-[15px] border-none outline-none overflow-hidden max-sm:w-[23%]'
          />
          <button className='cursor-pointer duration-[0.5s] bg-[#1363DF] px-[25px] py-[16px] rounded-[50px] text-[14.5px] font-[600] hover:bg-blue-900'>
            SUBSCRIBE NOW
          </button>
        </div>
      </div>
    </section>
  )
}

export default Jointoletter