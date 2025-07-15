// 'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useState } from 'react';
// import TopNav from '@/app/components/TopNavbar';
// import Image from 'next/image';

// export default function DesignsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selected, setSelected] = useState<number | null>(null);
//   const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
//   const aspect = searchParams.get('aspect') || '1:1';

//   const getImagesByAspect = (aspect: string) => {
//     switch (aspect) {
//       case '1:1':
//         return [
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Classic square design—perfectly balanced for any layout.' },
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Bold and centered—ideal for Instagram and product shots.' },
//         ];
//       case '9:16':
//         return [
//           { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical elegance—tailored for reels and stories.' },
//           { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Stand tall—highlight your product’s full length.' },
//         ];
//       case '16:9':
//         return [
//           { src: '/resources/169.jpg', alt: 'Shaper_Cult', caption: 'Wide format—great for web banners and YouTube.' },
//           { src: '/resources/169.jpg', alt: 'Shaper_Cult', caption: 'Panoramic view—showcase more, scroll less.' },
//         ];
//       case '4:5':
//         return [
//           { src: '/resources/45.jpg', alt: 'Shaper_Cult', caption: 'Perfectly portrait—optimized for feed engagement.' },
//           { src: '/resources/45.jpg', alt: 'Shaper_Cult', caption: 'Focus in—capture detail with portrait perfection.' },
//         ];
//       default:
//         return [
//           { src: '/resources/11.jpg', alt: 'Shaper_Cult', caption: 'Default square layout.' },
//           { src: '/resources/11.jpg', alt: 'Shaper_Cult', caption: 'Square style with clean composition.' },
//         ];
//     }
//   };

//   const getAspectClass = () => {
//     switch (aspect) {
//       case '4:5':
//         return 'aspect-[4/5] w-[320px] h-[400px]';
//       case '9:16':
//         return 'aspect-[9/16] h-[460px]';
//       case '16:9':
//         return 'aspect-[16/9] h-[270px]'; // Wider but shorter
//       case '1:1':
//       default:
//         return 'aspect-square w-[360px]';
//     }
//   };

//   const images = getImagesByAspect(aspect);
//   const aspectClass = getAspectClass();

//   const handleSelect = (index: number) => {
//     setSelected(index === selected ? null : index);
//   };

//   const handlePreview = () => {
//     if (selected !== null) {
//       const imageQuery = encodeURIComponent(images[selected].src);
//       const captionQuery = encodeURIComponent(images[selected].caption);
//       const aspectQuery = encodeURIComponent(aspect);
//       router.push(`/preview?images=${imageQuery}&caption=${captionQuery}&aspect=${aspectQuery}`);
//     }
//   };

//   const goBackHome = () => {
//     router.push('/');
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] relative">
//       {/* Top Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] shadow-md">
//         <TopNav />
//       </div>

//       <div className="max-w-7xl mx-auto pt-28 pb-32 px-4 text-center">
//         {/* Back Button */}
//         <div className="relative mb-10 h-[40px]">
//           <div className="absolute left-0 top-1/2 -translate-y-1/2">
//             <button
//               onClick={goBackHome}
//               className="flex items-center gap-2 text-sm text-[#5598FF] font-medium bg-white border border-[#E0E0E0] px-2 py-2 rounded-full shadow-sm hover:bg-[#5598FF] hover:text-white transition"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//           </div>

//           <div className="flex justify-center items-center h-full">
//             <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50">
//               <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#555770]">
//                 Image Aspect Ratio: <span className="font-semibold">{aspect}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-col sm:flex-row justify-center items-stretch gap-10">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               onClick={() => handleSelect(index)}
//               className={`${
//                 aspect === '16:9' ? 'w-[480px]' : 'sm:w-[320px]'
//               } bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 p-4 ${
//                 selected === index ? 'border-2 border-[#5598FF] bg-[#EAF2FF]' : 'border border-transparent'
//               }`}
//             >
//               <div
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setZoomedIndex(index);
//                 }}
//                 className={`relative w-full rounded-xl overflow-hidden ${aspectClass}`}
//               >
//                 <Image src={img.src} alt={img.alt} fill className="object-cover rounded-xl" />
//               </div>
//               <p className="text-sm text-[#555770] font-medium text-left mt-4">{img.caption}</p>
//             </div>
//           ))}
//         </div>

//         {/* Preview Button */}
//         {selected !== null && (
//           <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
//             <button
//               onClick={handlePreview}
//               className="bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition"
//             >
//               Preview
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Zoomed Image Modal */}
//       {zoomedIndex !== null && (
//         <div
//           onClick={() => setZoomedIndex(null)}
//           className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
//         >
//           <div className="max-h-[90vh] max-w-[90vw] rounded-2xl overflow-hidden bg-white shadow-xl flex items-center justify-center">
//             <div className="relative w-full h-full flex justify-center items-center">
//               <Image
//                 src={images[zoomedIndex].src}
//                 alt="Zoomed"
//                 width={aspect === '9:16' ? 540 : aspect === '16:9' ? 960 : 600}
//                 height={aspect === '9:16' ? 960 : aspect === '16:9' ? 540 : 600}
//                 className="object-contain max-h-[80vh] w-auto h-auto rounded-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }





// 'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useState } from 'react';
// import TopNav from '@/app/components/TopNavbar';
// import Image from 'next/image';

// export default function DesignsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selected, setSelected] = useState<number | null>(null);
//   const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
//   const aspect = searchParams.get('aspect') || '1:1';

//   const getImagesByAspect = (aspect: string) => {
//     switch (aspect) {
//       case '1:1':
//         return [
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Classic square design—perfectly balanced for any layout.' },
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Bold and centered—ideal for Instagram and product shots.' },
//         ];
//       case '9:16':
//         return [
//           { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical elegance—tailored for reels and stories.' },
//           { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Stand tall—highlight your product’s full length.' },
//         ];
//       case '2:3':
//         return [
//           { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical Post—Great for mobile viewing.' },
//           { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Attention grabbing vertical format.' },
//         ];
//       case '3:2':
//         return [
//           { src: '/resources/SC10.png', alt: 'Shaper_Cult', caption: 'Horizontal Post—Wider scene coverage.' },
//           { src: '/resources/SC10.png', alt: 'Shaper_Cult', caption: 'Ideal for wide product or scenery shots.' },
//         ];
//       default:
//         return [
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Default layout.' },
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Clean and balanced view.' },
//         ];
//     }
//   };

//   const getAspectClass = () => {
//     switch (aspect) {
//       case '9:16':
//         return 'aspect-[9/16]';
//       case '2:3':
//         return 'aspect-[2/3]';
//       case '3:2':
//         return 'aspect-[3/2]';
//       case '1:1':
//       default:
//         return 'aspect-square';
//     }
//   };

//   const images = getImagesByAspect(aspect);
//   const aspectClass = getAspectClass();

//   const handleSelect = (index: number) => {
//     setSelected(index === selected ? null : index);
//   };

//   const handlePreview = () => {
//     if (selected !== null) {
//       const imageQuery = encodeURIComponent(images[selected].src);
//       const captionQuery = encodeURIComponent(images[selected].caption);
//       const aspectQuery = encodeURIComponent(aspect);
//       router.push(`/preview?images=${imageQuery}&caption=${captionQuery}&aspect=${aspectQuery}`);
//     }
//   };

//   const goBackHome = () => {
//     router.push('/');
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] relative">
//       {/* Top Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] shadow-md">
//         <TopNav />
//       </div>

//       <div className="max-w-7xl mx-auto pt-28 pb-32 px-4 text-center">
//         {/* Back Button */}
//         <div className="relative mb-10 h-[40px]">
//           <div className="absolute left-0 top-1/2 -translate-y-1/2">
//             <button
//               onClick={goBackHome}
//               className="flex items-center gap-2 text-sm text-[#5598FF] font-medium bg-white border border-[#E0E0E0] px-2 py-2 rounded-full shadow-sm hover:bg-[#5598FF] hover:text-white transition"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//           </div>

//           <div className="flex justify-center items-center h-full">
//             <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50">
//               <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#555770]">
//                 Image Aspect Ratio: <span className="font-semibold">{aspect}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Centered Cards with Large Size */}
//         <div className="flex flex-col sm:flex-row justify-center items-center flex-wrap gap-10">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               onClick={() => handleSelect(index)}
//               className={`w-full max-w-[420px] bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 p-4 ${
//                 selected === index ? 'border-2 border-[#5598FF] bg-[#EAF2FF]' : 'border border-transparent'
//               }`}
//             >
//               <div
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setZoomedIndex(index);
//                 }}
//                 className={`relative w-full ${aspectClass} rounded-xl overflow-hidden`}
//               >
//                 <Image src={img.src} alt={img.alt} fill className="object-cover rounded-xl" />
//               </div>
//               <p className="text-sm text-[#555770] font-medium text-left mt-4">{img.caption}</p>
//             </div>
//           ))}
//         </div>

//         {/* Preview Button */}
//         {selected !== null && (
//           <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
//             <button
//               onClick={handlePreview}
//               className="bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition"
//             >
//               Preview
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Zoomed Image Modal */}
//       {zoomedIndex !== null && (
//         <div
//           onClick={() => setZoomedIndex(null)}
//           className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
//         >
//           <div className="relative w-full max-w-[90vw] max-h-[90vh] rounded-2xl overflow-hidden bg-white shadow-xl flex items-center justify-center">
//             <Image
//               src={images[zoomedIndex].src}
//               alt="Zoomed"
//               fill
//               className="object-contain w-auto h-auto max-w-full max-h-full rounded-2xl"
//             />
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }




// 'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useState } from 'react';
// import TopNav from '@/app/components/TopNavbar';
// import Image from 'next/image';

// const ASPECT_CONFIG = {
//   '1:1': { aspectClass: 'aspect-square', maxW: 'max-w-[360px]', maxH: 'max-h-[360px]' },
//   '9:16': { aspectClass: 'aspect-[9/16]', maxW: 'max-w-[270px]', maxH: 'max-h-[480px]' },
//   '2:3': { aspectClass: 'aspect-[2/3]', maxW: 'max-w-[240px]', maxH: 'max-h-[360px]' },
//   '3:2': { aspectClass: 'aspect-[3/2]', maxW: 'max-w-[432px]', maxH: 'max-h-[288px]' },
// };

// export default function DesignsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selected, setSelected] = useState<number | null>(null);
//   const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
//   const aspect = searchParams.get('aspect') || '1:1';

//   const getImagesByAspect = (aspect) => {
//     switch (aspect) {
//       case '1:1':
//         return [
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Classic square design—perfectly balanced for any layout.' },
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Bold and centered—ideal for Instagram and product shots.' },
//         ];
//       case '9:16':
//         return [
//           { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical elegance—tailored for reels and stories.' },
//           { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Stand tall—highlight your product’s full length.' },
//         ];
//       case '2:3':
//         return [
//           { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical Post—Great for mobile viewing.' },
//           { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Attention grabbing vertical format.' },
//         ];
//       case '3:2':
//         return [
//           { src: '/resources/169.jpg', alt: 'Shaper_Cult', caption: 'Horizontal Post—Wider scene coverage.' },
//           { src: '/resources/169.jpg', alt: 'Shaper_Cult', caption: 'Ideal for wide product or scenery shots.' },
//         ];
//       default:
//         return [
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Default layout.' },
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Clean and balanced view.' },
//         ];
//     }
//   };

//   const { aspectClass, maxW, maxH } = ASPECT_CONFIG[aspect] || ASPECT_CONFIG['1:1'];
//   const images = getImagesByAspect(aspect);

//   const handleSelect = (index) => setSelected(index === selected ? null : index);

//   const handlePreview = () => {
//     if (selected !== null) {
//       const imageQuery = encodeURIComponent(images[selected].src);
//       const captionQuery = encodeURIComponent(images[selected].caption);
//       const aspectQuery = encodeURIComponent(aspect);
//       router.push(`/preview?images=${imageQuery}&caption=${captionQuery}&aspect=${aspectQuery}`);
//     }
//   };

//   const goBackHome = () => router.push('/');

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] relative">
//       {/* Top Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] shadow-md">
//         <TopNav />
//       </div>

//       <div className="max-w-7xl mx-auto pt-28 pb-32 px-4 text-center">
//         {/* Back Button */}
//         <div className="relative mb-10 h-[40px]">
//           <div className="absolute left-0 top-1/2 -translate-y-1/2">
//             <button
//               onClick={goBackHome}
//               className="flex items-center gap-2 text-sm text-[#5598FF] font-medium bg-white border border-[#E0E0E0] px-2 py-2 rounded-full shadow-sm hover:bg-[#5598FF] hover:text-white transition"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex justify-center items-center h-full">
//             <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50">
//               <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#555770]">
//                 Image Aspect Ratio: <span className="font-semibold">{aspect}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               onClick={() => handleSelect(index)}
//               className={`flex flex-col items-center bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 p-4
//                 ${selected === index ? 'border-2 border-[#5598FF] bg-[#EAF2FF]' : 'border border-transparent'}
//                 ${maxW} w-full sm:w-auto`}
//               style={{ flex: '0 1 auto' }}
//             >
//               <div
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setZoomedIndex(index);
//                 }}
//                 className={`relative w-full ${aspectClass} ${maxW} ${maxH} rounded-xl overflow-hidden flex items-center justify-center bg-white`}
//               >
//                 <Image src={img.src} alt={img.alt} fill className="object-cover rounded-xl" />
//               </div>
//               <p className="text-sm text-[#555770] font-medium text-left mt-4">{img.caption}</p>
//             </div>
//           ))}
//         </div>

//         {/* Preview Button */}
//         {selected !== null && (
//           <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
//             <button
//               onClick={handlePreview}
//               className="bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition"
//             >
//               Preview
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Zoomed Image Modal */}
//       {zoomedIndex !== null && (
//         <div
//           onClick={() => setZoomedIndex(null)}
//           className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2"
//         >
//           <div className="bg-transparent rounded-2xl flex items-center justify-center w-full h-full max-h-screen max-w-screen-lg">
//             <div
//               className={`relative w-full h-full flex items-center justify-center`}
//               style={{
//                 maxWidth: '90vw',
//                 maxHeight: '90vh',
//                 aspectRatio:
//                   aspect === '1:1'
//                     ? '1 / 1'
//                     : aspect === '9:16'
//                     ? '9 / 16'
//                     : aspect === '2:3'
//                     ? '2 / 3'
//                     : aspect === '3:2'
//                     ? '3 / 2'
//                     : '1 / 1',
//               }}
//             >
//               <Image
//                 src={images[zoomedIndex].src}
//                 alt="Zoomed"
//                 fill
//                 className="object-contain rounded-xl"
//                 sizes="(max-width: 800px) 90vw, 800px"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }






'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import TopNav from '@/app/components/TopNavbar';
import Image from 'next/image';

const ASPECT_CONFIG = {
  '1:1': { aspectClass: 'aspect-square', maxW: 'w-[360px]', maxH: 'h-[360px]' },
  '9:16': { aspectClass: 'aspect-[9/16]', maxW: 'w-[270px]', maxH: 'h-[480px]' },
  '2:3': { aspectClass: 'aspect-[2/3]', maxW: 'w-[240px]', maxH: 'h-[360px]' },
  '3:2': { aspectClass: 'aspect-[3/2]', maxW: 'w-[360px]', maxH: 'h-[240px]' },
};

const VALID_ASPECTS = Object.keys(ASPECT_CONFIG);

export default function DesignsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState<number | null>(null);
  const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
  const [aspect, setAspect] = useState<string>('1:1');

  useEffect(() => {
    const paramAspect = searchParams.get('aspect');
    if (paramAspect && VALID_ASPECTS.includes(paramAspect)) {
      setAspect(paramAspect);
    } else {
      router.replace(`?aspect=1:1`);
    }
  }, [searchParams, router]);

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
      case '2:3':
        return [
          { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical Post—Great for mobile viewing.' },
          { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Attention grabbing vertical format.' },
        ];
      case '3:2':
        return [
          { src: '/resources/SC11.png', alt: 'Shaper_Cult', caption: 'Horizontal Post—Wider scene coverage.' },
          { src: '/resources/SC12.png', alt: 'Shaper_Cult', caption: 'Ideal for wide product or scenery shots.' },
        ];
      default:
        return [
          { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Default layout.' },
          { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Clean and balanced view.' },
        ];
    }
  };

  const { aspectClass, maxW, maxH } = ASPECT_CONFIG[aspect] || ASPECT_CONFIG['1:1'];
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
    router.push(`/?aspect=${aspect}`);
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
        <div className="flex flex-wrap justify-center gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => handleSelect(index)}
              className={`flex flex-col items-center bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 p-4
                ${selected === index ? 'border-2 border-[#5598FF] bg-[#EAF2FF]' : 'border border-transparent'}
                ${maxW} w-full sm:w-auto`}
              style={{ flex: '0 1 auto' }}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomedIndex(index);
                }}
                className={`relative w-full ${aspectClass} ${maxW} ${maxH} rounded-xl overflow-hidden flex items-center justify-center bg-white`}
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
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2"
        >
          <div className="rounded-2xl flex items-center justify-center w-full h-full max-h-screen max-w-screen-lg">
            <div
              className={`relative w-full h-full flex items-center justify-center`}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                aspectRatio:
                  aspect === '1:1'
                    ? '1 / 1'
                    : aspect === '9:16'
                    ? '9 / 16'
                    : aspect === '2:3'
                    ? '2 / 3'
                    : aspect === '3:2'
                    ? '3 / 2'
                    : '1 / 1',
              }}
            >
              <Image
                src={images[zoomedIndex].src}
                alt="Zoomed"
                fill
                className="object-contain rounded-xl"
                sizes="(max-width: 800px) 90vw, 800px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </main>
  );
}






// 'use client';

// import { useSearchParams, useRouter } from 'next/navigation';
// import { useState } from 'react';
// import TopNav from '@/app/components/TopNavbar';
// import Image from 'next/image';

// const ASPECT_CONFIG = {
//   '1:1':   { aspectClass: 'aspect-square',      maxW: 'w-[360px]', maxH: 'h-[360px]' },
//   '9:16':  { aspectClass: 'aspect-[9/16]',      maxW: 'w-[270px]', maxH: 'h-[480px]' },
//   '2:3':   { aspectClass: 'aspect-[2/3]',       maxW: 'w-[240px]', maxH: 'h-[360px]' },
//   '3:2':   { aspectClass: 'aspect-[3/2]',       maxW: 'w-[360px]', maxH: 'h-[240px]' }, // updated for larger size
// };

// export default function DesignsPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [selected, setSelected] = useState<number | null>(null);
//   const [zoomedIndex, setZoomedIndex] = useState<number | null>(null);
//   const aspect = searchParams.get('aspect') || '1:1';

//   const getImagesByAspect = (aspect) => {
//     switch (aspect) {
//       case '1:1':
//         return [
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Classic square design—perfectly balanced for any layout.' },
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Bold and centered—ideal for Instagram and product shots.' },
//         ];
//       case '9:16':
//         return [
//           { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical elegance—tailored for reels and stories.' },
//           { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Stand tall—highlight your product’s full length.' },
//         ];
//       case '2:3':
//         return [
//           { src: '/resources/SC3.png', alt: 'Shaper_Cult', caption: 'Vertical Post—Great for mobile viewing.' },
//           { src: '/resources/SC1.png', alt: 'Shaper_Cult', caption: 'Attention grabbing vertical format.' },
//         ];
//       case '3:2':
//         return [
//           { src: '/resources/SC11.png', alt: 'Shaper_Cult', caption: 'Horizontal Post—Wider scene coverage.' },
//           { src: '/resources/SC12.png', alt: 'Shaper_Cult', caption: 'Ideal for wide product or scenery shots.' },
//         ];
//       default:
//         return [
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Default layout.' },
//           { src: '/resources/11.png', alt: 'Shaper_Cult', caption: 'Clean and balanced view.' },
//         ];
//     }
//   };

//   const { aspectClass, maxW, maxH } = ASPECT_CONFIG[aspect] || ASPECT_CONFIG['1:1'];
//   const images = getImagesByAspect(aspect);

//   const handleSelect = (index) => setSelected(index === selected ? null : index);

//   const handlePreview = () => {
//     if (selected !== null) {
//       const imageQuery = encodeURIComponent(images[selected].src);
//       const captionQuery = encodeURIComponent(images[selected].caption);
//       const aspectQuery = encodeURIComponent(aspect);
//       router.push(`/preview?images=${imageQuery}&caption=${captionQuery}&aspect=${aspectQuery}`);
//     }
//   };

//   const goBackHome = () => router.push('/');

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] relative">
//       {/* Top Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] shadow-md">
//         <TopNav />
//       </div>

//       <div className="max-w-7xl mx-auto pt-28 pb-32 px-4 text-center">
//         {/* Back Button */}
//         <div className="relative mb-10 h-[40px]">
//           <div className="absolute left-0 top-1/2 -translate-y-1/2">
//             <button
//               onClick={goBackHome}
//               className="flex items-center gap-2 text-sm text-[#5598FF] font-medium bg-white border border-[#E0E0E0] px-2 py-2 rounded-full shadow-sm hover:bg-[#5598FF] hover:text-white transition"
//             >
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                 <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//           </div>
//           <div className="flex justify-center items-center h-full">
//             <div className="p-[2px] rounded-full bg-gradient-to-r from-cyan-400/50 to-blue-500/50">
//               <div className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#555770]">
//                 Image Aspect Ratio: <span className="font-semibold">{aspect}</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Cards */}
//         <div className="flex flex-wrap justify-center gap-8">
//           {images.map((img, index) => (
//             <div
//               key={index}
//               onClick={() => handleSelect(index)}
//               className={`flex flex-col items-center bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] rounded-2xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 p-4
//                 ${selected === index ? 'border-2 border-[#5598FF] bg-[#EAF2FF]' : 'border border-transparent'}
//                 ${maxW} w-full sm:w-auto`}
//               style={{ flex: '0 1 auto' }}
//             >
//               <div
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setZoomedIndex(index);
//                 }}
//                 className={`relative w-full ${aspectClass} ${maxW} ${maxH} rounded-xl overflow-hidden flex items-center justify-center bg-white`}
//               >
//                 <Image src={img.src} alt={img.alt} fill className="object-cover rounded-xl" />
//               </div>
//               <p className="text-sm text-[#555770] font-medium text-left mt-4">{img.caption}</p>
//             </div>
//           ))}
//         </div>

//         {/* Preview Button */}
//         {selected !== null && (
//           <div className="fixed bottom-6 left-0 right-0 flex justify-center z-40">
//             <button
//               onClick={handlePreview}
//               className="bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:scale-105 transition"
//             >
//               Preview
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Zoomed Image Modal */}
//       {zoomedIndex !== null && (
//         <div
//           onClick={() => setZoomedIndex(null)}
//           className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-2"
//         >
//           <div className="rounded-2xl flex items-center justify-center w-full h-full max-h-screen max-w-screen-lg">
//             <div
//               className={`relative w-full h-full flex items-center justify-center`}
//               style={{
//                 maxWidth: '90vw',
//                 maxHeight: '90vh',
//                 aspectRatio:
//                   aspect === '1:1'
//                     ? '1 / 1'
//                     : aspect === '9:16'
//                     ? '9 / 16'
//                     : aspect === '2:3'
//                     ? '2 / 3'
//                     : aspect === '3:2'
//                     ? '3 / 2'
//                     : '1 / 1',
//               }}
//             >
//               <Image
//                 src={images[zoomedIndex].src}
//                 alt="Zoomed"
//                 fill
//                 className="object-contain rounded-xl"
//                 sizes="(max-width: 800px) 90vw, 800px"
//                 priority
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// }
