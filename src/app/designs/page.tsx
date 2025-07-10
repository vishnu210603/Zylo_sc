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
    <main className="bg-[#FAF9FC] min-h-screen flex">
      <Sidebar />
      <div className="flex-1">
        <TopNav />

        {/* Cards Grid */}
        <div className="pt-12 px-12 pb-36 pl-24"> {/* space from sidebar */}
          <div className="flex flex-wrap gap-x-[32px] gap-y-10 justify-start">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => toggleSelect(index)}
                className={`rounded-[30px] shadow-md cursor-pointer transition-all duration-200 overflow-hidden border-2 ${
                  selected.includes(index)
                    ? 'bg-[#C3DBFF]'
                    : 'bg-white border-transparent'
                }`}
                style={{
                  width: 'calc((100% - 64px) / 3)',
                  height: '473.33px',
                  paddingTop: '20px',
                  paddingLeft: '16px',
                  paddingRight: '15px',
                  paddingBottom: '69.33px',
                }}
                
              >
                <div className="h-[384px] w-full">
                  <img
                    src={img}
                    alt={`Design ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="text-center text-[#474C66] font-semibold text-xl py-4">
                  Description
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div
  className="fixed bottom-0 left-[70px] h-[100px] w-full right-6 z-0 flex justify-between items-center px-30 rounded-xl"
  style={{
    background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.00) 1.93%, #FFFAFA 30.12%)',
    backdropFilter: 'blur(22px)', // optional for elevation effect
  }}
>

          {/* Back Arrow */}
          <button className="bg-[#5598FF] hover:bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center">
            <Image src="./assets/Button.svg" alt="" width={45} height={45}/>
          </button>

          {/* Step Buttons */}
          <div className="flex items-center gap-4">
  {['Website', 'Logo'].map((label, idx) => (
    <div key={idx} className="flex items-center gap-4">
      <button
        className={`flex items-center justify-center gap-[4px] rounded-[24px] bg-[#5598FF] text-white font-medium shadow-md ${
          label === '+' ? 'text-xl px-3 py-2' : 'w-[90px] px-4 py-2 text-sm'
        }`}
      >
        {label}
      </button>
      {idx < 2 && (
       <Image src="./assets/arrow-right.svg" alt="" width={55} height={55}/>
      )}
    </div>
  ))}
  <Image src="./assets/Add.svg" alt="" width={55} height={55}/>
</div>


          {/* Preview Edit */}
          {/* <button
            onClick={handlePreviewEdit}
            disabled={selected.length === 0}
            className="bg-[#5598FF] hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Preview Edit 
          </button> */}

<button onClick={handlePreviewEdit}
            disabled={selected.length === 0}
            className="bg-[#5598FF] hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 disabled:cursor-not-allowed"
          >
  <span>Preview Edit</span>
  <FiChevronRight className="text-lg" />
</button>

        </div>
      </div>
    </main>
  );
}
