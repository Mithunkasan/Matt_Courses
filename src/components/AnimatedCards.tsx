'use client'

import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import SvgWave from "./Svgwave"
import type { Testimonial } from "@/types/testimonial"

const testimonials: Testimonial[] = [
  {
    quote:
      '"The course offered strong Python foundations, front-end skills, and backend expertise with Django. Real-world projects made learning practical. I now confidently build complete, scalable web applications. Highly recommended!"',
    name: "Jones",
    designation: "Python Developer",
    src: "/testimonial01.jpeg",
  },
  {
    quote:
      '"The Full Stack Development course at MATT is a complete package for aspiring developers. It covers both front-end and back-end technologies, allowing students to build robust, scalable web applications from scratch."',
    name: "Aathira",
    designation: "Fullstack Developer",
    src: "/testimonial02.jpeg",
  },
]

const AnimatedTestimonialsDemo = () => {
  const [active, setActive] = useState<Testimonial>(testimonials[0])

  const handleprev = () => {
    const currentIndex = testimonials.indexOf(active)
    const length = testimonials.length
    const prevIndex = (currentIndex - 1 + length) % length
    setActive(testimonials[prevIndex])
  }

  const handlenext = () => {
    const currentIndex = testimonials.indexOf(active)
    const length = testimonials.length
    const nextIndex = (currentIndex + 1) % length
    setActive(testimonials[nextIndex])
  }

  const isActive = (index: number) => testimonials[index] === active

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10

  return (
    <section className="bg-[#061e43] py-12 sm:py-16 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
        
        {/* Mobile Image Container */}
        <div className="relative h-[200px] xs:h-[250px] sm:h-[300px] w-full mx-auto md:hidden mb-6">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isActive(index) ? 1 : 0, scale: isActive(index) ? 1 : 0.95 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 flex justify-center"
              >
                <Image
                  src={testimonial.src || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={300}
                  height={300}
                  draggable={false}
                  className="rounded-[8px] h-full w-auto object-contain object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Desktop Image Container */}
        <div className="relative h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] w-full mx-auto hidden md:block">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, z: -100, rotateY: randomRotateY() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index) ? 999 : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, z: 100, rotate: randomRotateY() }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0 origin-bottom"
              >
                <Image
                  src={testimonial.src || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="rounded-[8px] h-full w-full object-contain object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div className="flex flex-col py-4 md:py-6 lg:py-8">
          <div className="text-center md:text-left">
            <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[32px] text-white font-semibold leading-tight">
              What Our{" "}
              <span className="relative ml-[5px] inline-block group">
                Students<SvgWave className="w-full" />{" "}
              </span>
              <br className="hidden sm:block" />
              Say About Us
            </h1>

            <Image 
              src="/quote.png" 
              width={80} 
              height={80} 
              className="my-4 sm:my-6 mx-auto md:mx-0" 
              alt="quotesimage" 
            />

            <motion.div
              key={active.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <motion.p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-[18px] mb-4 sm:mb-6 text-gray-400 mt-4 sm:mt-6 font-bold leading-relaxed">
                {active.quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                    animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut", delay: 0.02 * index }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>

              {/* Reviewer info */}
              <div className="flex items-center mt-4 sm:mt-6 justify-center md:justify-start">
                <Image
                  src={active.src || "/placeholder.svg"}
                  alt={active.name}
                  width={50}
                  height={50}
                  className="w-10 h-10 xs:w-12 xs:h-12 rounded-full object-cover mr-3 md:hidden"
                />
                <Image
                  src={active.src || "/placeholder.svg"}
                  alt={active.name}
                  width={60}
                  height={60}
                  className="w-12 h-12 rounded-full object-cover mr-4 hidden md:block"
                />
                <div>
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-[20px] font-bold text-white">{active.name}</h3>
                  <p className="text-xs xs:text-sm md:text-base lg:text-[14px] text-[#B2BDCD]">{active.designation}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-3 sm:gap-4 md:gap-6 pt-4 sm:pt-5 md:pt-6 justify-center md:justify-start">
            <button
              className="p-2 sm:p-3 md:p-4 rounded-[5px] bg-[#24406b] hover:bg-blue-500 cursor-pointer text-white transition-colors duration-200"
              onClick={handleprev}
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
            <button
              className="p-2 sm:p-3 md:p-4 rounded-[5px] bg-[#24406b] hover:bg-blue-500 cursor-pointer text-white transition-colors duration-200"
              onClick={handlenext}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AnimatedTestimonialsDemo
