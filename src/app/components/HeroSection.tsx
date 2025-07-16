'use client';

import TopNav from '@/app/components/TopNavbar';
import ParallaxBox from '@/app/components/ParallaxBox';
import Inspiration from '@/app/components/InspirationSection';
import YourWorks from '@/app/components/YourWorks';

const Greeting = () => (
  <div className="w-full max-w-6xl mx-0 md:mx-8 mt-6 px-4 md:px-0 overflow-hidden text-left">
    <div className="text-[24px] leading-[32px] md:text-[40px] md:leading-[54px] font-bold text-[#28293D] break-words">
      Hello, Chitransh!
    </div>
    <p className="text-sm text-[#8E90A6] mt-1">Monday, 24 July 2025</p>
  </div>
);


export default function Index() {
  return (
    <main className="bg-gradient-to-br from-[#73DFE7]/15 to-[#0063F7]/15 min-h-screen">
      {/* Top Navigation */}
      <TopNav />

      {/* Shared layout for both views */}
      <div className="w-full md:px-8 pt-2">
        <Greeting />

        <div className="flex flex-col items-center mt-6">
          <ParallaxBox />
          <Inspiration />
          <YourWorks />
        </div>
      </div>
    </main>
  );
}
