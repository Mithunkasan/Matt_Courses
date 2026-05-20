// 'use client';

// import React from 'react';

// type props = {
//   className : string;
// }

// const SvgWave: React.FC<props> = ({className}) => {

//   return (
//     <div className={`${className} m-[0] p-[0] w-[105%] h-[100px] absolute bottom-[-55px] left-[0] duration-[0.5s] z-[0]`}>
//       <svg
//         width="100%"
//         height="100%"
//         viewBox="0 0 145 25"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="text-yellow-500"
//       >
//         <path
//           d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
//           stroke="currentColor"
//           strokeWidth="4"
//           style={{
//             strokeDasharray: '146, 148',
//             strokeDashoffset: 0,
//           }}
//         />
//         <path
//           d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
//           stroke="currentColor"
//           strokeWidth="2"
//           style={{
//             strokeDasharray: '106, 108',
//             strokeDashoffset: 0,
//           }}
//         />
//       </svg>
//     </div>
//   );
// };

// export default SvgWave;

"use client"

import type React from "react"

type SvgWaveProps = {
  className?: string
}

const SvgWave: React.FC<SvgWaveProps> = ({ className = "" }) => {
  return (
    // Changed w-[105%] to w-full to prevent horizontal scrollbar
    <div
      className={`${className} m-0 p-0 w-full h-[60px] sm:h-[80px] lg:h-[100px] absolute bottom-[-30px] sm:bottom-[-45px] lg:bottom-[-55px] left-0 duration-500 z-0`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 145 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-yellow-500"
      >
        <path
          d="M1.00016 15.2711C18.1407 8.34427 70.832 -1.93441 144.473 12.3652"
          stroke="currentColor"
          strokeWidth="4"
          className="svg-path-1" // Class for animation targeting
        />
        <path
          d="M26.2943 14.0041C38.9177 9.44643 77.3772 3.50055 130.227 16.1786"
          stroke="currentColor"
          strokeWidth="2"
          className="svg-path-2" // Class for animation targeting
        />
      </svg>

      <style jsx>{`
        .svg-path-1 {
          stroke-dasharray: 146, 148;
          stroke-dashoffset: 0; /* Always visible by default */
        }
        .svg-path-2 {
          stroke-dasharray: 106, 108;
          stroke-dashoffset: 0; /* Always visible by default */
        }

        /* Animation to redraw on hover */
        .group:hover .svg-path-1 {
          animation: redraw-path-1 2s ease-in-out forwards;
        }
        .group:hover .svg-path-2 {
          animation: redraw-path-2 2s ease-in-out 0.3s forwards;
        }

        @keyframes redraw-path-1 {
          0% {
            stroke-dashoffset: 146; /* Start from fully undrawn */
          }
          100% {
            stroke-dashoffset: 0; /* End fully drawn */
          }
        }

        @keyframes redraw-path-2 {
          0% {
            stroke-dashoffset: 106; /* Start from fully undrawn */
          }
          100% {
            stroke-dashoffset: 0; /* End fully drawn */
          }
        }
      `}</style>
    </div>
  )
}

export default SvgWave
