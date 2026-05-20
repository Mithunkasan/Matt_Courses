

import React from 'react'
import CardInstructor from './CardInstructor'
import { instructors } from '@/types/type'

const Allinstructors = () => {
  const instructors: instructors[] = [
    {
      id: "1",
      name: "Mohammed Shaheer",
      profession: "Managing Director",
      image: "/instructor01.png",
      border: 'subMain bg-[#E2FAFF] rounded-tl-[130px] h-[180px] relative'
    },
    {
      id: "2",
      name: "Praveen Mathias",
      profession: "Administrator",
      image: "/instructor02.png",
      border: 'subMain bg-[#FFE2E2] rounded-tl-[135px] rounded-tr-[115] rounded-br-[115] h-[180px] relative'
    },
    {
      id: "3",
      name: "Mohamed Azharuddin",
      profession: "Project Manager",
      image: "/instructor03.png",
      border: 'subMain bg-[#E4FFE2] rounded-tl-[135px] rounded-tr-[115] rounded-br-[115] h-[180px] relative'
    },
    {
      id: "4",
      name: "Aneesh P kunjappy",
      profession: "Software Head",
      image: "/instructor04.png",
      border: 'subMain bg-[#E8EDFF] rounded-tl-[135px] h-[180px] relative'
    },
    {
      id: "5",
      name: "Ragunathan",
      profession: "Hardware Head",
      image: "/instructor05.png",
      border: 'subMain bg-[#E2FAFF] rounded-tl-[130px] h-[180px] relative'
    }
  ]
  return (
    <div className='bg-white px-[6%] py-[0rem] flex flex-wrap'>
      <CardInstructor instructors={instructors} />
    </div>
  )
}

export default Allinstructors