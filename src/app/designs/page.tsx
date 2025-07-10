'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TopNav from '@/app/components/TopNavbar';
import Sidebar from '@/app/components/Sidebar';
import { FiChevronRight } from 'react-icons/fi';

const generateImages = () => {
  return Array.from({ length: 6 }).map(
    (_, i) => `https://picsum.photos/seed/${i + 1}/500/390`
  );
};

export default function DesignsPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<number[]>([]);
  const images = generateImages();

  const toggleSelect = (index: number) => {
    if (selected.includes(index)) {
      setSelected((prev) => prev.filter((i) => i !== index));
    } else if (selected.length < 3) {
      setSelected((prev) => [...prev, index]);
    }
  };

  const handlePreviewEdit = () => {
    const selectedImages = selected.map((i) => encodeURIComponent(images[i]));
    const query = selectedImages.join(',');
    router.push(`/preview?images=${query}`);
  };

  return (
    <main className="bg-[#FAF9FC] min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex-1">
        <TopNav />

        {/* Grid */}
        <div className="pt-6 pb-36 px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => toggleSelect(index)}
                className={`rounded-[30px] shadow-md cursor-pointer transition-all duration-200 overflow-hidden border-2 ${
                  selected.includes(index)
                    ? 'bg-[#C3DBFF]'
                    : 'bg-white border-transparent'
                }`}
              >
                <div className="h-[260px] sm:h-[300px] w-full">
                  <img
                    src={img}
                    alt={`Design ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="text-center text-[#474C66] font-semibold text-base sm:text-lg py-3">
                  Description
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Nav */}
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-4 sm:px-10 lg:left-[70px] lg:right-6 h-[100px] flex flex-col sm:flex-row items-center justify-between gap-4 bg-gradient-to-b from-transparent to-[#FFFAFA] backdrop-blur-md"
        >
          {/* Back Arrow */}
          <button className="bg-[#5598FF] hover:bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center">
            <Image src="/assets/Button.svg" alt="Back" width={40} height={40} />
          </button>

          {/* Step Buttons */}
          <div className="flex items-center gap-3 overflow-x-auto">
            {['Website', 'Logo'].map((label, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <button className="rounded-[24px] bg-[#5598FF] text-white text-sm font-medium shadow-md px-4 py-2 w-[90px]">
                  {label}
                </button>
                {idx < 2 && (
                  <Image src="/assets/arrow-right.svg" alt="Next" width={30} height={30} />
                )}
              </div>
            ))}
            <Image src="/assets/Add.svg" alt="Add" width={40} height={40} />
          </div>

          {/* Preview Edit */}
          <button
            onClick={handlePreviewEdit}
            disabled={selected.length === 0}
            className="bg-[#5598FF] hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>Preview Edit</span>
            <FiChevronRight className="text-lg" />
          </button>
        </div>
      </div>
    </main>
  );
}
