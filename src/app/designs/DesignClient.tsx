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
            caption: 'Own your power, dance in your vibe. This is ShaperCult. #womenempowerment',
          },
          {
            src: '/resources/SC13.png',
            alt: 'Shaper_Cult',
            caption: 'New from ShaperCult: Bra and Stockings that lift more than just curves. Step into comfort, own your power. women body positivity ',
          },
        ];
      case '2:3':
        return [
          {
            src: '/resources/SC14.png',
            alt: 'Shaper_Cult',
            caption: 'Use the product sample (bra) in the image to create Vogue styled photoshoot with beach background and a pet dog with the model. Do not make any changes to the product. Use Indian models',
          },
          {
            src: '/resources/SC15.png',
            alt: 'Shaper_Cult',
            caption: 'Own your power, dance in your vibe. This is ShaperCult. #womenempowerment',
          },
        ];
      case '3:2':
        return [
          {
            src: '/resources/SC10.png',
            alt: 'Shaper_Cult',
            caption: 'Own your power, dance in your vibe. This is ShaperCult. #womenempowerment',
          },
          {
            src: '/resources/SC11.png',
            alt: 'Shaper_Cult',
            caption: 'New from ShaperCult: Bra and Stockings that lift more than just curves. Step into comfort, own your power. women body positivity',
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
  onDoubleClick={() => setSelected(null)} // 👈 double-click unselects
  className={`flex flex-col rounded-2xl shadow-md overflow-hidden border w-full max-w-md max-h-[80vh] transition-colors duration-300 cursor-pointer ${
    isActive
      ? 'bg-blue-500 border-3 border-[#a7def5] ring-4 '
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
                <div className="flex-1 min-h-[60px] bg-[#b7e0f1] p-4 flex items-stretch">
                  <div
  className={`w-full h-[100px] rounded-xl text-sm font-medium text-left overflow-y-auto px-4 py-3 transition-all scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 ${
    isActive ? 'text-black bg-white' : 'bg-white text-gray-800'
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
        <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
  <button
    onClick={handlePreview}
    disabled={selected === null}
    className={`font-bold py-3 px-6 rounded-full shadow-lg transition transform ${
      selected !== null
        ? 'bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white hover:scale-105'
        : 'bg-gray-400 text-white cursor-not-allowed'
    }`}
  >
    Preview
  </button>
</div>

      </div>

      {/* Zoom Modal */}
      {zoomedIndex !== null && (
  <div className="fixed inset-0 z-50 bg-white/70 backdrop-blur-lg flex items-center justify-center">
    {/* Close icon */}
    <button
      onClick={() => setZoomedIndex(null)}
      className="absolute top-6 right-6 md:top-8 md:right-8 z-50 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition"
      aria-label="Close zoomed image"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    {/* Zoomed image */}
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
