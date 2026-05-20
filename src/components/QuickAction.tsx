// import { div } from 'framer-motion/client'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6';

type cardDetails = {
  image: string;
  title: string;
  buttonText: string;
}

const QuickAction = () => {
  const cardDetails: cardDetails[] = [
    {
      image: '/quickAction_1.jpg',
      title: 'Best Instructors To Elevate Your Career',
      buttonText: 'Register Now'
    },
    {
      image: '/quickAction_2.jpg',
      title: 'Wide Range Of Courses Designed To Empower You.',
      buttonText: 'Discover Now'
    }
  ]
  return (
    <div className='flex justify-between max-lg:justify-center flex-wrap items-center px-[6%] py-[5rem] bg-white gap-[2rem]'>
      {
        cardDetails.map((item,index) => (
          <div key={index} style={{ backgroundImage: `url(${item.image})` }} className='rounded-[10px] bg-contain basis-[48%] max-lg:basis-[80%] max-md:basis-[85%] max-sm:basis-[100%] p-[3rem] flex flex-col items-start justify-between bg-no-repeat bg-cover bg-center'>
            <h2 className='text-[26px] max-md:text-[24px] font-bold mb-[24px] w-[50%] max-xl:w-[65%] max-sm:w-[100%]'>
              {item.title}
            </h2>
            <button className='py-[16] px-[24px] flex items-center gap-[10px] bg-white uppercase text-[#082A5E] rounded-[5px] text-[15px] font-bold cursor-pointer'>
              {item.buttonText}
              <FaArrowRightLong className='text-[15px]' />
            </button>
          </div>
        ))
      }
    </div>
  )
}

export default QuickAction