'use client';
export const dynamic = 'force-dynamic';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import TopNav from '@/app/components/TopNavbar';
import Image from 'next/image';

export default function DesignsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<number | null>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const aspect = searchParams.get('aspect') || '1:1';

  // Allowed aspect ratios
  const allowedAspects = ['1:1', '2:3', '3:2'];

  // Redirect to default if aspect is invalid
  if (!allowedAspects.includes(aspect)) {
    router.push('/designs?aspect=1:1');
    return null;
  }

  const getImagesByAspect = (aspect: string) => {
    switch (aspect) {
      case '1:1':
        return [
          {
            src: '/resources/11.png',
            alt: 'Shaper_Cult',
            caption: 'Classic square design—perfectly balanced for any layout.',
          },
          {
            src: '/resources/SC13.png',
            alt: 'Shaper_Cult',
            caption: 'Bold and centered—ideal for Instagram and product shots.',
          },
        ];
      case '2:3':
        return [
          {
            src: '/resources/SC14.png',
            alt: 'Shaper_Cult',
            caption: 'Tall format—great for posters and vertical storytelling.',
          },
          {
            src: '/resources/SC15.png',
            alt: 'Shaper_Cult',
            caption: 'Highlight your product vertically in stunning proportion.',
          },
        ];
      case '3:2':
        return [
          {
            src: '/resources/SC10.png',
            alt: 'Shaper_Cult',
            caption: 'Landscape format—perfect for cinematic and print visuals.',
          },
          {
            src: '/resources/SC11.png',
            alt: 'Shaper_Cult',
            caption: 'Wide yet focused—balanced for all screens.',
          },
        ];
      default:
        return [];
    }
  };

  const images = getImagesByAspect(aspect);

  const handleSelect = (index: number) => {
    setSelected(index === selected ? null : index);
  };

  const handlePreview = () => {
    if (selected !== null) {
      const imageQuery = encodeURIComponent(images[selected].src);
      const captionQuery = encodeURIComponent(images[selected].caption);
      const aspectQuery = encodeURIComponent(aspect);
      router.push(`/preview?images=${imageQuery}&caption=${captionQuery}&aspect=${aspectQuery}`);
    }
  };

  const goBackHome = () => {
    router.push('/');
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] relative">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] shadow-md">
        <TopNav />
      </div>

      <div className="max-w-7xl mx-auto pt-28 pb-32 px-4 text-center">
        {/* Back Button and Aspect Label */}
        <div className="relative mb-10 h-[40px]">
          <div className="absolute left-0 top-1/2 -translate-y-1/2">
            <button
              onClick={goBackHome}
              className="flex items-center gap-2 text-sm text-[#5598FF] font-medium bg-white border border-[#E0E0E0] px-2 py-2 rounded-full shadow-sm hover:bg-[#5598FF] hover:text-white transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center items-center h-full">
            <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50">
              <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#555770]">
                Image Aspect Ratio: <span className="font-semibold">{aspect}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 items-stretch">
          {images.map((img, index) => {
            const isActive = selected === index;
            return (
              <div
                key={index}
                onClick={() => handleSelect(index)}
                className={`flex flex-col rounded-2xl shadow-md overflow-hidden border w-full max-w-md max-h-[80vh] transition-colors duration-300 cursor-pointer ${
                  isActive
  ? 'bg-blue-500 border-2 border-blue-500 ring-4 ring-blue-500'
  : 'bg-white border-gray-200'

                }`}
                style={isActive ? { boxShadow: '0 6px 34px #c0dbfc55' } : {}}
              >
                <div
                  className="w-full flex justify-center bg-white relative cursor-zoom-in"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedIndex(index);
                  }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={300}
                    height={300}
                    className="object-contain pointer-events-auto"
                  />
                </div>
                <div className="flex-1 min-h-[60px] bg-[#F6F8FC] p-4 flex items-stretch">
                  <div
                    className={`w-full rounded-xl text-sm font-medium text-left min-h-[80px] max-h-[220px] overflow-y-auto px-4 py-3 transition-all ${
                      isActive ? 'text-black' : 'bg-white text-gray-800'
                    }`}
                  >
                    <span className="whitespace-pre-wrap block">{img.caption}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Preview Button */}
        {selected !== null && (
          <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
            <button
              onClick={handlePreview}
              className="bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition"
            >
              Preview
            </button>
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {zoomedIndex !== null && (
        <div
          onClick={() => setZoomedIndex(null)}
          className="fixed inset-0 z-50 bg-white/70 backdrop-blur-lg flex items-center justify-center"
        >
          <div className="relative flex items-center justify-center bg-white rounded-2xl shadow-lg p-4">
            <Image
              src={images[zoomedIndex].src}
              alt="Zoomed"
              width={600}
              height={600}
              className="object-contain rounded-2xl"
              style={{ maxHeight: '80vh', maxWidth: '90vw', width: 'auto', height: 'auto' }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
