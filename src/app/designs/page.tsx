'use client';

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

  const getImagesByAspect = (aspect: string) => {
    switch (aspect) {
      case '1:1':
        return [
          { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Classic square design—perfectly balanced for any layout.' },
          { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Bold and centered—ideal for Instagram and product shots.' },
        ];
      case '9:16':
        return [
          { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical elegance—tailored for reels and stories.' },
          { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Stand tall—highlight your product’s full length.' },
        ];
      case '16:9':
        return [
          { src: '/resources/169.jpg', alt: 'Shaper_Cult', caption: 'Wide format—great for web banners and YouTube.' },
          { src: '/resources/169.jpg', alt: 'Shaper_Cult', caption: 'Panoramic view—showcase more, scroll less.' },
        ];
      case '4:5':
        return [
          { src: '/resources/45.jpg', alt: 'Shaper_Cult', caption: 'Perfectly portrait—optimized for feed engagement.' },
          { src: '/resources/45.jpg', alt: 'Shaper_Cult', caption: 'Focus in—capture detail with portrait perfection.' },
        ];
      default:
        return [
          { src: '/resources/11.jpg', alt: 'Shaper_Cult', caption: 'Default square layout.' },
          { src: '/resources/11.jpg', alt: 'Shaper_Cult', caption: 'Square style with clean composition.' },
        ];
    }
  };

  const getAspectClass = () => {
    switch (aspect) {
      case '4:5':
        return 'aspect-[4/5] w-[320px] h-[400px]';
      case '9:16':
        return 'aspect-[9/16] h-[460px]';
      case '16:9':
        return 'aspect-[16/9] h-[270px]'; // Wider but shorter
      case '1:1':
      default:
        return 'aspect-square w-[360px]';
    }
  };

  const images = getImagesByAspect(aspect);
  const aspectClass = getAspectClass();

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
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] shadow-md">
        <TopNav />
      </div>

      <div className="max-w-7xl mx-auto pt-28 pb-32 px-4 text-center">
        {/* Back Button */}
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
        <div className="flex flex-col sm:flex-row justify-center items-stretch gap-10">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`${
                aspect === '16:9' ? 'w-[480px]' : 'sm:w-[320px]'
              } bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 p-4 ${
                selected === index ? 'border-2 border-[#5598FF] bg-[#EAF2FF]' : 'border border-transparent'
              }`}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedIndex(index);
                }}
                className={`relative w-full rounded-xl overflow-hidden ${aspectClass}`}
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover rounded-xl" />
              </div>
              <p className="text-sm text-[#555770] font-medium text-left mt-4">{img.caption}</p>
            </div>
          ))}
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

      {/* Zoomed Image Modal */}
      {zoomedIndex !== null && (
        <div
          onClick={() => setZoomedIndex(null)}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="max-h-[90vh] max-w-[90vw] rounded-2xl overflow-hidden bg-white shadow-xl flex items-center justify-center">
            <div className="relative w-full h-full flex justify-center items-center">
              <Image
                src={images[zoomedIndex].src}
                alt="Zoomed"
                width={aspect === '9:16' ? 540 : aspect === '16:9' ? 960 : 600}
                height={aspect === '9:16' ? 960 : aspect === '16:9' ? 540 : 600}
                className="object-contain max-h-[80vh] w-auto h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}