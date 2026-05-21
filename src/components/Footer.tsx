/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
// import { GoDash } from "react-icons/go";
import { BsDash } from 'react-icons/bs';
import Link from 'next/link';

const Footer = () => {
  const date: Date = new Date()
  const resources = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/aboutUs' },
    { name: 'Contact Us', path: '/Contacts' },
  ]

  const courseDomains = [
    { name: 'Hardware & Embedded', path: '/hardware' },
    { name: 'Programming Languages', path: '/programming' },
    { name: 'Analytics & AI', path: '/analytics' },
    { name: 'Software & Cyber', path: '/software' },
  ]

  const internships = [
    { name: 'Hardware & Embedded', path: '/internships/hardware-embedded' },
    { name: 'Programming', path: '/internships/programming' },
    { name: 'Data, AI & Analytics', path: '/internships/data-ai-analytics' },
    { name: 'Web, Security & Automation', path: '/internships/web-security-automation' },
  ]

  return (
    <footer className='bg-[#061e43] w-full h-auto mt-[2rem]'>
      <section className='pt-[110px] pb-[55px] flex justify-between items-start flex-wrap px-[6%] gap-y-[2rem]'>
        <div className='basis-[25%] pr-[2rem] max-lg:basis-[50%] max-sm:basis-[100%]'>
          <div className='flex items-center justify-start gap-[0.5rem] mb-[1.3rem]'>
            <img src="/logo.png" alt="MATT" className='mt-[5px] w-[40px] h-[40px] rounded-[50%] border-blue-400 border-[1px]' />
            <div className='font-semibold'>
              <h1 className='leading-[24px] text-[24px] text-[#b2bdcd] m-0'>MATT ACADEMY</h1>
            </div>
          </div>
          <p className='text-[#B2BDCD] text-[16px] mb-[1rem] leading-[1.7rem]'>
            3rd floor,Pillars Gate,<br></br>Vadasery,Kanyakumari Dist,<br></br>Tamil Nadu 629001
          </p>
          <h2 className='mb-[1rem] text-[16px]  text-[#b2bdcd]'>
            +91 7305197833
          </h2>
          <h2 className='mb-[1rem] text-[16px]  text-[#b2bdcd]'>
            +91 9486178103
          </h2>
          <h2 className='mb-[1rem]  text-[#b2bdcd] text-[16px]'>
            matt@mattengg.com
          </h2>
          <div className='flex justify-start gap-[1rem]  text-[#b2bdcd] text-[1.1rem] items-center'>
            <Link href='https://www.facebook.com/mattenggsolutions'>
              <FaFacebookF className='cursor-pointer duration-[1s] hover:text-blue-600' />
            </Link>
            <Link href=''>
              <FaWhatsapp className='cursor-pointer duration-[1s] hover:text-blue-600' />
            </Link>
            <Link href='https://www.instagram.com/mattengineering/'>
              <GrInstagram className='cursor-pointer duration-[1s] hover:text-blue-600' />
            </Link>
            <Link href='https://www.linkedin.com/company/mattengineeringsolutions/'>
              <FaLinkedinIn className='cursor-pointer duration-[1s] hover:text-blue-600' />
            </Link>
            <Link href='https://www.youtube.com/c/MattEngineeringEquipments'>
              <FaYoutube className='cursor-pointer duration-[1s] hover:text-blue-600' />
            </Link>
          </div>
        </div>

        <div className='basis-[15%] max-lg:basis-[50%] max-sm:basis-[100%]'>
          <h1 className='text-[24px] font-semibold mb-[28px]  text-[#b2bdcd]'>Resources</h1>
          <ul className='flex flex-col gap-[15px] text-[#B2BDCD] text-[16px] font-[600]'>
            {resources.map((item, index) => (
              <li key={index} className='pDashed flex items-center gap-[5px] cursor-pointer hover:text-[#1363DF] overflow-hidden'>
                <Link href={item.path} className="flex items-center gap-[5px] w-full">
                  <BsDash className='h-[10px] w-[15px] font-[900] dashed duration-[0.5s] ml-[-15px]' />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='basis-[20%] max-lg:basis-[50%] text-[#b2bdcd] max-sm:basis-[100%]'>
          <h1 className='text-[24px] font-semibold mb-[28px]'>Courses</h1>
          <ul className='flex flex-col gap-[15px] text-[#B2BDCD] text-[16px] font-[600]'>
            {courseDomains.map((item, index) => (
              <li key={index} className='pDashed flex items-center gap-[5px] cursor-pointer hover:text-[#1363DF] overflow-hidden'>
                <Link href={item.path} className="flex items-center gap-[5px] w-full">
                  <BsDash className='font-bold dashed duration-[0.5s] ml-[-15px]' />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='basis-[20%] max-lg:basis-[50%] text-[#b2bdcd] max-sm:basis-[100%]'>
          <h1 className='text-[24px] font-semibold mb-[28px]'>Internships</h1>
          <ul className='flex flex-col gap-[15px] text-[#B2BDCD] text-[16px] font-[600]'>
            {internships.map((item, index) => (
              <li key={index} className='pDashed flex items-center gap-[5px] cursor-pointer hover:text-[#1363DF] overflow-hidden'>
                <Link href={item.path} className="flex items-center gap-[5px] w-full">
                  <BsDash className='font-bold dashed duration-[0.5s] ml-[-15px]' />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='basis-[20%] max-lg:basis-[50%] max-sm:basis-[100%]  text-[#b2bdcd]'>
          <h1 className='text-[24px] font-semibold mb-[28px]'>Working Hours</h1>
          <div className='flex justify-between items-center pb-[16px] mb-[15px] text-[15px] border-b-[0.5px] border-b-[#2A4774]'>
            <h1 className='font-semibold'>Mon - Fri</h1>
            <p className='text-[#B2BDCD] font-[500]'>9:00 AM - 5:00 PM</p>
          </div>
          <div className='flex justify-between items-center pb-[15px] mb-[15px] text-[15px] border-b-[0.5px] border-b-[#2A4774]'>
            <h1 className='font-semibold'>Saturday</h1>
            <p className='text-[#B2BDCD] font-[500]'>10:00 AM - 4:00 PM</p>
          </div>
          <div className='flex justify-between items-center pb-[15px] mb-[15px] text-[15px]'>
            <h1 className='font-semibold'>Sunday</h1>
            <p className='text-[#B2BDCD] font-[500]'>Holiday</p>
          </div>
        </div>
      </section>

      <section className='border-t-[0.5px] border-t-[#2A4774] text-[15px] max-md:text-[12px] text-[#8798B3] flex justify-between items-center py-[30px] px-[6%] font-[550] max-md:flex-col gap-y-[1rem]'>
        <p>
          Copyright &copy; {date.getFullYear()} MATT. All Rights Reserved.
        </p>

        <div className='flex items-center justify-between gap-[8px]'>
          <span>
            Privacy Policy
          </span>
          <span>
            .
          </span>
          <span>
            Terms & Conditions
          </span>
        </div>
      </section>
    </footer>
  )
}

export default Footer