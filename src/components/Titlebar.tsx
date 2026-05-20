import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import { IoIosMailUnread } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

const TitleBar = () => {
  return (
    <section className='w-[100%] bg-[#082A5E] text-[#E6EAEF] flex items-center justify-between max-md:justify-center p-[1rem]'>
      <div className='text-[16px] flex items-center gap-[10px] max-md:hidden'>
        <SlLocationPin />
        <p className='text-[#E6EAEF]'>463 7th Ave, NY 10018, USA <span className='mx-[7px] text-[#E6EAEF]'>|</span></p>
        <IoIosMailUnread className='text-[20px]' />
        <p className='text-[#E6EAEF] text-[15px]'>info@gmail.com</p>
      </div>
      <div className='flex items-center justify-center gap-[10px]'>
        <p className='text-[#E6EAEF]'>
          Follow us on: 
        </p>
        <FaFacebookF className='text-[17px] cursor-pointer duration-[1s] hover:text-blue-600 font-semibold' />
        <FaWhatsapp className='text-[18px] cursor-pointer duration-[1s] hover:text-blue-600' />
        <GrInstagram className='text-[17px] cursor-pointer duration-[1s] hover:text-blue-600' />
        <FaLinkedinIn className='text-[17px] cursor-pointer duration-[1s] hover:text-blue-600' />
        <FaYoutube className='text-[18px] cursor-pointer duration-[1s] hover:text-blue-600' />
      </div>
    </section>
  )
}

export default TitleBar;