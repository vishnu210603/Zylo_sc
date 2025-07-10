// 'use client';

// import React from 'react';
// import Image from 'next/image';

// const TopNavBar = () => {
//   return (
//     <div className="w-full h-[90px] px-10 flex items-center justify-between  sticky top-0 z-100">
//       {/* Left Section */}
//       <div className="flex items-center space-x-11">
//         {/* Logo */}
//         <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} />

//         {/* Nav Items */}
//         <div className="flex items-center">
//         {['Prices', 'Blog', 'Explore AI'].map((item) => (
//   <button
//     key={item}
//     className="flex items-center gap-[10px] px-[24px] py-[12px] rounded-[24px] hover:bg-gray-100 transition"
//   >
//     <span
//       className="text-center text-7.5 leading-[28px] font-semibold"
//       style={{
//         color: 'var(--Dark-Dark-3, #8E90A6)',
//         fontFamily: 'Inter',
//       }}
//     >
//       {item}
//     </span>
//     <Image
//       src="/assets/chevron-down.svg"
//       alt="Dropdown"
//       width={12}
//       height={12}
//     />
//   </button>
// ))}
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-4">
//         <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm shadow">
//           Dashboard
//         </button>
//         <img
//           src="https://i.pravatar.cc/40"
//           alt="user"
//           className="w-8 h-8 rounded-full"
//         />
//       </div>
//     </div>
//   );
// };

// export default TopNavBar;





'use client';

import { FiChevronRight } from 'react-icons/fi';
import React from 'react';
import Image from 'next/image';

const TopNavBar = () => {
  return (
    <div
      className="w-full h-[90px] px-6 flex items-center justify-between sticky top-0 z-[100]"
      style={{
        background: 'linear-gradient(180deg, #FFF 67.31%, rgba(255, 255, 255, 0.00) 100%)',
        backdropFilter: 'blur(22px)',
        WebkitBackdropFilter: 'blur(22px)', // Safari support
      }}
    >
      {/* Left Section */}
      <div className="flex items-center space-x-11">
        {/* Logo */}
        <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} />

        {/* Nav Items */}
        <div className="flex items-center">
          {['Prices', 'Blog', 'Explore AI'].map((item) => (
            <button
              key={item}
              className="flex items-center gap-[10px] px-[24px] py-[12px] rounded-[24px] hover:bg-gray-100 transition"
            >
              <span
                className="text-[16px] leading-[28px] font-semibold text-center"
                style={{
                  color: 'var(--Dark-Dark-3, #8E90A6)',
                  fontFamily: 'Inter',
                }}
              >
                {item}
              </span>
              <Image
                src="/assets/chevron-down.svg"
                alt="Dropdown"
                width={12}
                height={12}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
      <button className="flex items-center justify-center gap-1 px-6 py-3 rounded-[24px] bg-[#5598FF] text-white text-sm font-medium shadow">
  <span>Dashboard</span>
  <FiChevronRight className="text-lg" />
</button>
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default TopNavBar;


