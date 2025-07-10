'use client';

import TopNav from '@/app/components/TopNavbar';
import Sidebar from '@/app/components/Sidebar';
import ParallaxBox from '@/app/components/ParallaxBox';
import Inspiration from './InspirationSection';
import YourWorks from './YourWorks';

const Greeting = () => (
  <div>
    <div
      className="text-[40px] font-bold mt-2 leading-[54px] text-[#28293D]"
    >
      Hello, Chitransh!
    </div>
    <p className="text-sm text-[#8E90A6]">Monday, 24 July 2025</p>
  </div>
);

export default function HeroSection() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <TopNav />
      <Sidebar />

      {/* Content shifted by sidebar (65px) + spacing (77px) = 142px */}
      <div className="mt-2 ml-[142px] pr-8 z-30 relative">
        <Greeting />
        <ParallaxBox />
        <Inspiration/>
        <YourWorks/>
      </div>
    </main>
  );
}
