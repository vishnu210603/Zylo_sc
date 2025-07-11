// // 'use client';

// // import React from 'react';
// // import Image from 'next/image';

// // const TopNavBar = () => {
// //   return (
// //     <div className="w-full h-[90px] px-10 flex items-center justify-between  sticky top-0 z-100">
// //       {/* Left Section */}
// //       <div className="flex items-center space-x-11">
// //         {/* Logo */}
// //         <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} />

// //         {/* Nav Items */}
// //         <div className="flex items-center">
// //         {['Prices', 'Blog', 'Explore AI'].map((item) => (
// //   <button
// //     key={item}
// //     className="flex items-center gap-[10px] px-[24px] py-[12px] rounded-[24px] hover:bg-gray-100 transition"
// //   >
// //     <span
// //       className="text-center text-7.5 leading-[28px] font-semibold"
// //       style={{
// //         color: 'var(--Dark-Dark-3, #8E90A6)',
// //         fontFamily: 'Inter',
// //       }}
// //     >
// //       {item}
// //     </span>
// //     <Image
// //       src="/assets/chevron-down.svg"
// //       alt="Dropdown"
// //       width={12}
// //       height={12}
// //     />
// //   </button>
// // ))}
// //         </div>
// //       </div>

// //       {/* Right Section */}
// //       <div className="flex items-center space-x-4">
// //         <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm shadow">
// //           Dashboard
// //         </button>
// //         <img
// //           src="https://i.pravatar.cc/40"
// //           alt="user"
// //           className="w-8 h-8 rounded-full"
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TopNavBar;





// 'use client';

// import { FiChevronRight } from 'react-icons/fi';
// import React from 'react';
// import Image from 'next/image';

// const TopNavBar = () => {
//   return (
//     <div
//       className="w-full h-[90px] pl-10 pr-11 flex items-center justify-between sticky top-0 z-[100]"
//       style={{
//         background: 'linear-gradient(180deg, #FFF 67.31%, rgba(255, 255, 255, 0.00) 100%)',
//         backdropFilter: 'blur(22px)',
//         WebkitBackdropFilter: 'blur(22px)', // Safari support
//       }}
//     >
//       {/* Left Section */}
//       <div className="flex items-center space-x-10">
//         {/* Logo */}
//         <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} />

//         {/* Nav Items */}
//         <div className="flex items-center text-[#8E90A6] ">
//           {['Prices', 'Blog', 'Explore AI'].map((item) => (
//             <button
//               key={item}
//               className="flex items-center gap-[10px] px-[24px] py-[12px] rounded-[24px] hover:bg-gray-100 transition"
//             >
//               <span
//                 className="text-[16px] leading-[28px] font-semibold text-center"
//                 style={{
//                   color: 'var(--Dark-Dark-3, #8E90A6)',
//                   fontFamily: 'Inter',
//                 }}
//               >
//                 {item}
//               </span>
//               <Image
//                 src="/assets/chevron-down.svg"
//                 alt="Dropdown"
//                 width={12}
//                 height={12}
//               />
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-4">
//         <div className="flex items-center space-x-4">
//       <button className="flex items-center justify-center gap-1 px-6 py-3 rounded-[24px] bg-[#5598FF] text-white text-sm font-medium shadow">
//   <span>Dashboard</span>
//   <FiChevronRight className="text-lg" />
// </button>
//         <img
//           src="https://i.pravatar.cc/40"
//           alt="user"
//           className="w-10 h-10 rounded-full"
//         />
//       </div>
//       </div>
//     </div>
//   );
// };

// export default TopNavBar;







'use client';

import { useState } from 'react';
import { ChevronRight, ChevronDown, Menu } from 'lucide-react';
import React from 'react';
import Image from 'next/image';
const TopNavBar = () => {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <>
      {/* Desktop Navbar - Fixed and properly positioned */}
      <div className="hidden md:flex w-full h-[90px] pl-10 pr-11 items-center justify-between fixed top-0 z-[100] bg-white/90 backdrop-blur-[22px] border-b border-gray-100">
  {/* Left side: Logo + Links */}
  <div className="flex items-center space-x-10">
    {/* Logo */}
    <div>
      <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} />
    </div>

    {/* Nav Buttons */}
    <div className="flex items-center text-[#8E90A6]">
      {['Prices', 'Blog', 'Explore AI'].map((item) => (
        <button
          key={item}
          className="flex items-center gap-[10px] px-[24px] py-[12px] rounded-[24px] hover:bg-gray-100 transition"
        >
          <span className="text-[16px] leading-[28px] font-semibold">{item}</span>
          <ChevronDown size={12} />
        </button>
      ))}
    </div>
  </div>

  {/* Right side: Dashboard + Profile */}
  <div className="flex items-center gap-4">
    <button className="flex items-center justify-center gap-1 px-6 py-3 rounded-[24px] bg-[#5598FF] text-white text-sm font-medium shadow">
      <span>Dashboard</span>
      <ChevronRight className="text-lg" />
    </button>
    <div className="w-10 h-10 bg-gray-300 rounded-full" />
  </div>
</div>

      {/* Mobile Navbar - Sticky */}
      <div className="md:hidden sticky top-0 z-[100] bg-white/90 backdrop-blur-[22px] border-b border-gray-200 flex justify-between items-center py-3 px-4">
        <button
          onClick={() => setShowMobileSidebar(true)}
          className="p-2"
        >
          <Menu size={24} color="#5598FF" />
        </button>
        
        <div className="">
        <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} />
        </div>
        
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
      </div>

      {/* Mobile Sidebar - Redesigned */}
      {showMobileSidebar && (
        <div className="md:hidden fixed inset-0 z-50 bg-black bg-opacity-50 flex">
          <div className="w-80 bg-gradient-to-br from-white to-gray-50 p-6 flex flex-col justify-between shadow-2xl">
            <div className="space-y-8">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#5598FF] to-[#99DDDF] rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <div>
                    <span className="font-bold text-lg text-gray-800">Dashboard</span>
                    <p className="text-sm text-gray-500">Welcome back!</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowMobileSidebar(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition"
                >
                  ×
                </button>
              </div>

              <div className="space-y-3">
                {[
                  { icon: '🏠', label: 'Home', active: true },
                  { icon: '📊', label: 'Dashboard', active: false },
                  { icon: '📚', label: 'Stack', active: false },
                  { icon: '🤖', label: 'AI', active: false },
                  { icon: '📋', label: 'Table', active: false },
                  { icon: '📁', label: 'Files', active: false }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition ${
                      item.active 
                        ? 'bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white shadow-lg' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
                
                <div className="border-t pt-3 mt-6">
                  {['💰 Prices', '📝 Blog', '🔍 Explore AI'].map((item, idx) => (
                    <button
                      key={idx}
                      className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-gray-100 text-gray-700 transition"
                    >
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="w-full py-4 px-6 bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition">
                Get Zylo Plus ✨
              </button>
            </div>
          </div>

          <div
            className="flex-1"
            onClick={() => setShowMobileSidebar(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default TopNavBar;
