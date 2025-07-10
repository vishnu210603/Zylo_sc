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
    <div className="fixed top-28 left-4.5 h-[calc(100vh-130px)] w-[65px] bg-white shadow-md rounded-2xl flex flex-col justify-between items-center py-2 z-30">
      {/* Icons */}
      <div className="flex flex-col gap-6 items-center mt-4">
        {sidebarItems.map((item, idx) => (
          <div
            key={idx}
            className="group w-10 h-10 rounded-[6px] flex items-center justify-center hover:bg-[#5598FF] transition cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={24}
              height={24}
              className="transition group-hover:invert group-hover:brightness-0"
            />
          </div>
        ))}
      </div>

      {/* Bottom circle */}
      <div className="w-10 h-10 bg-[#99DDDF]/50 rounded-full flex items-center justify-center mb-2">
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Sidebar;
