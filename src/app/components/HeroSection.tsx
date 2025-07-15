'use client';

import TopNav from '@/app/components/TopNavbar';
import ParallaxBox from '@/app/components/ParallaxBox';
import Inspiration from '@/app/components/InspirationSection';
import YourWorks from '@/app/components/YourWorks';

const Greeting = () => (
  <div className="text-left w-full max-w-6xl md:px-0 mx-8 mt-6">
    <div className="text-[30px] md:text-[40px] font-bold leading-[54px] text-[#28293D]">
      Hello, Chitransh!
    </div>
    <p className="text-sm -mt-1 text-[#8E90A6]">Monday, 24 July 2025</p>
  </div>
);

export default function Index() {
  return (
    <main className="bg-gradient-to-br from-[#73DFE7]/15 to-[#0063F7]/15 min-h-screen">
      {/* Top Navigation */}
      <TopNav />

      {/* Shared layout for both views */}
      <div className="w-full md:px-8 pt-2">
        {/* Greeting is left-aligned, others centered in max-width container */}
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
