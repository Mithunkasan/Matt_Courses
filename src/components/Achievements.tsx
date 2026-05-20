/* eslint-disable @typescript-eslint/no-explicit-any */
import SvgWave from './Svgwave'
import { PiStudentFill } from "react-icons/pi";
import CountUp from './Countup';
import { GoTrophy } from "react-icons/go";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";

type cardtype = {
  id: number;
  icon: any;
  value: number;
  suffix?: string;
  title: string
}
const Achievements = () => {

  const cardDetails: cardtype[] = [
    {
      id: 1,
      icon: <PiStudentFill />,
      value: 1000,
      suffix: '+',
      title: 'Students Enrolled'
    },
    {
      id: 2,
      icon: <LuClipboardList />,
      value: 40,
      title: 'Top Class Courses'
    },
    {
      id: 3,
      icon: <BsGlobeCentralSouthAsia />,
      value: 2,
      title: 'Our Branches'
    },
    {
      id: 4,
      icon: <GoTrophy />,
      value: 95,
      title: 'Awards We Received'
    }
  ]
  return (
    <div className='w-[100%] flex flex-col items-center justify-center bg-white px-[6%] bg-cover bg-center py-[110px]' style={{
      backgroundImage: 'url(/Factbg.jpg)'
    }}>
      <p className="component text-center text-blue-500 p-[0.3rem] px-[0.35rem] text-[16px] font-[600] bg-[#E7EFFC] mb-4 rounded-[5px]">
        Our Achievements
      </p>
      <div className="component mb-4 relative w-[45%] max-lg:w-[68%] max-md:w-[80%] max-sm:w-[100%] text-center">
        <h2 className="text-[36px] font-bold text-[#082A5E]">
          Grow Your &zwnj;
          <span className="text-blue-600 relative z-[100]">
            Skills <SvgWave className="wave-svg" />
          </span>
          To Advance Your Career Path
        </h2>
      </div>

      <div className='flex justify-between items-center flex-wrap w-[100%] mt-[3rem] gap-y-[4rem]'>
        {cardDetails.map((item) => (
          <div key={item.id} className='py-[50px] px-[40px] flex flex-col items-center justify-center bg-white basis-[23%] max-lg:basis-[45%] max-sm:basis-[100%] max-xl:py-[40px] max-xl:px-[30px] max-lg:py-[50px] max-lg:px-[40px] rounded-[8px]'>
            <div className='component text-[5rem] text-blue-600'>
              {item.icon}
            </div>
            <div className='font-bold text-[30px] text-[#082A5E] my-[0.5rem]'>
              <CountUp
                from={0}
                to={item.value}
                separator=","
                direction="up"
                duration={1}
                className="component count-up-text"
              />
              {item.suffix}
            </div>
            <p className='component text-[16px] text-[#39557e] leading-[25px]'>
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements