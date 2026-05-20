import React from 'react'
import { GrFormNext } from "react-icons/gr";

type props ={
  pageName :string;
  image: string;
}
const Abouthead:React.FC<props> = ({pageName, image}) => {
  return (
    <div className='h-[300px] bg-no-repeat bg-cover bg-center bg-origin-border' style={{ backgroundImage: `url(${image})` }}>
      <div className='h-[100%] w-[100%] bg-[rgba(0,0,0,0.5)] py-[105px] px-[6%]'>
        <h1 className='text-[44px] font-bold'>
          {pageName}
        </h1>
        <p className='flex items-center justify-start text-[16px] font-semibold'>
          Matt <GrFormNext className='text-[#B6CFF5] text-[18px] mx-[5px]' />
          <span className='text-[#B6CFF6]'>
            {pageName}
          </span>
        </p>
      </div>
    </div>
  )
}

export default Abouthead