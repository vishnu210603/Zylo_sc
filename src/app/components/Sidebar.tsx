// // 'use client';

// // import Image from 'next/image';
// // import React from 'react';

// // const sidebarItems = [
// //   { src: '/assets/Home.svg', alt: 'Home' },
// //   { src: '/assets/Stack.svg', alt: 'Stack' },
// //   { src: '/assets/Ai.svg', alt: 'AI' },
// //   { src: '/assets/Table.svg', alt: 'Table' },
// //   { src: '/assets/Files.svg', alt: 'Files' },
// // ];

// // const Sidebar = () => {
// //   return (
// //     <div className="fixed top-28 left-4.5 h-[calc(100vh-125px)] w-32 bg-white shadow-md rounded-2xl flex flex-col justify-between items-center py-2 z-30">
// //       {/* Icons */}
// //       <div className="flex flex-col gap-10 items-center mt-4">
// //         {sidebarItems.map((item, idx) => (
// //           <div
// //             key={idx}
// //             className="group w-10 h-10 rounded-[6px] flex items-center justify-center hover:bg-[#5598FF] transition cursor-pointer"
// //           >
// //             <Image
// //               src={item.src}
// //               alt={item.alt}
// //               width={30}
// //               height={30}
// //               className="transition group-hover:invert group-hover:brightness-0"
// //             />
// //           </div>
// //         ))}
// //       </div>

// //       {/* Bottom circle */}
// //       <div className="w-10 h-10 bg-[#99DDDF]/50 rounded-full flex items-center justify-center mb-2">
// //         <div className="w-4 h-4 bg-white rounded-full" />
// //       </div>
// //     </div>
// //   );
// // };

// // export default Sidebar;




// 'use client';

// import React, { useState } from 'react';
// import Image from 'next/image';
// import { FiMenu, FiX } from 'react-icons/fi';

// const sidebarItems = [
//   { src: '/assets/Home.svg', alt: 'Home' },
//   { src: '/assets/Stack.svg', alt: 'Stack' },
//   { src: '/assets/Ai.svg', alt: 'AI' },
//   { src: '/assets/Table.svg', alt: 'Table' },
//   { src: '/assets/Files.svg', alt: 'Files' },
// ];

// const Sidebar = () => {
//   const [isMobileOpen, setIsMobileOpen] = useState(false);

//   return (
//     <>
//       {/* Desktop Sidebar */}
//       <div className="hidden sm:flex fixed top-28 left-4.5 h-[calc(100vh-125px)] w-32 bg-white shadow-md rounded-2xl flex-col justify-between items-center py-2 z-30">
//         {/* Icons */}
//         <div className="flex flex-col gap-10 items-center mt-4">
//           {sidebarItems.map((item, idx) => (
//             <div
//               key={idx}
//               className="group w-10 h-10 rounded-[6px] flex items-center justify-center hover:bg-[#5598FF] transition cursor-pointer"
//             >
//               <Image
//                 src={item.src}
//                 alt={item.alt}
//                 width={30}
//                 height={30}
//                 className="transition group-hover:invert group-hover:brightness-0"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Bottom circle */}
//         <div className="w-10 h-10 bg-[#99DDDF]/50 rounded-full flex items-center justify-center mb-2">
//           <div className="w-4 h-4 bg-white rounded-full" />
//         </div>
//       </div>

//       {/* Mobile Toggle Button (you can place this where you want the trigger) */}
//       <div className="sm:hidden fixed top-4 left-4 z-40">
//         <button
//           onClick={() => setIsMobileOpen(true)}
//           className="text-3xl text-black bg-white p-2 rounded-md shadow-md"
//         >
//           <FiMenu />
//         </button>
//       </div>

//       {/* Mobile Sidebar Drawer */}
//       {isMobileOpen && (
//         <div className="sm:hidden fixed inset-0 z-50 bg-black bg-opacity-40 flex">
//           <div className="w-72 bg-white p-4 flex flex-col justify-between rounded-r-2xl shadow-md">
//             <div className="space-y-6">
//               {/* Header */}
//               <div className="flex justify-between items-center mb-2">
//                 <div className="flex items-center gap-3">
//                   <Image
//                     src="/assets/profile.png"
//                     alt="Profile"
//                     width={40}
//                     height={40}
//                     className="rounded-full"
//                   />
//                   <span className="font-semibold text-lg">Dashboard</span>
//                 </div>
//                 <button
//                   onClick={() => setIsMobileOpen(false)}
//                   className="text-2xl"
//                 >
//                   <FiX />
//                 </button>
//               </div>

//               {/* Icon Menu Items */}
//               <div className="grid grid-cols-3 gap-4 mt-4">
//                 {sidebarItems.map((item, idx) => (
//                   <div
//                     key={idx}
//                     className="group w-14 h-14 rounded-md flex items-center justify-center hover:bg-[#5598FF] transition cursor-pointer"
//                   >
//                     <Image
//                       src={item.src}
//                       alt={item.alt}
//                       width={30}
//                       height={30}
//                       className="transition group-hover:invert group-hover:brightness-0"
//                     />
//                   </div>
//                 ))}
//               </div>

//               {/* Additional Menu Items */}
//               <div className="flex flex-col gap-3 mt-6">
//                 <button className="w-full text-left py-2 px-3 rounded-lg bg-gray-100 text-sm font-medium hover:bg-[#E0EFFF]">
//                   Prices
//                 </button>
//                 <button className="w-full text-left py-2 px-3 rounded-lg bg-gray-100 text-sm font-medium hover:bg-[#E0EFFF]">
//                   Blog
//                 </button>
//                 <button className="w-full text-left py-2 px-3 rounded-lg bg-gray-100 text-sm font-medium hover:bg-[#E0EFFF]">
//                   Explore AI
//                 </button>
//               </div>
//             </div>

//             {/* Get Zylo Plus */}
//             <div className="mt-8">
//               <button className="w-full py-2 px-4 bg-[#5598FF] text-white font-bold rounded-full shadow hover:bg-blue-600">
//                 Get Zylo Plus
//               </button>
//             </div>
//           </div>

//           {/* Overlay Click to Close */}
//           <div
//             className="flex-1"
//             onClick={() => setIsMobileOpen(false)}
//           ></div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Sidebar;









'use client';

import Image from 'next/image';
import React from 'react';

const sidebarItems = [
  { src: '/assets/Home.svg', alt: 'Home' },
  { src: '/assets/Stack.svg', alt: 'Stack' },
  { src: '/assets/Ai.svg', alt: 'AI' },
  { src: '/assets/Table.svg', alt: 'Table' },
  { src: '/assets/Files.svg', alt: 'Files' },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex fixed top-28 left-4 h-[calc(100vh-125px)] w-32 bg-white shadow-md rounded-2xl flex-col justify-between items-center py-2 z-30">
      {/* Top icon section */}
      <div className="flex flex-col gap-10 items-center mt-4">
        {sidebarItems.map((item, idx) => (
          <div
            key={idx}
            className="group w-10 h-10 rounded-[6px] flex items-center justify-center hover:bg-[#5598FF] transition cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={30}
              height={30}
              className="transition group-hover:invert group-hover:brightness-0"
            />
          </div>
        ))}
      </div>

      {/* Bottom status circle */}
      <div className="w-10 h-10 bg-[#99DDDF]/50 rounded-full flex items-center justify-center mb-2">
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Sidebar;
