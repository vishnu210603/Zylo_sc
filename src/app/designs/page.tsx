// // 'use client';

// // import { useState } from 'react';
// // import Image from 'next/image';
// // import { useRouter } from 'next/navigation';
// // import TopNav from '@/app/components/TopNavbar';
// // import Sidebar from '@/app/components/Sidebar';
// // import { FiChevronRight } from 'react-icons/fi';

// // const generateImages = () => {
// //   return Array.from({ length: 6 }).map(
// //     (_, i) => `https://picsum.photos/seed/${i + 1}/500/390`
// //   );
// // };

// // export default function DesignsPage() {
// //   const router = useRouter();
// //   const [selected, setSelected] = useState<number[]>([]);
// //   const [activeStep, setActiveStep] = useState('Website');
// //   const [showBrandKit, setShowBrandKit] = useState(false);
// //   const [showModal, setShowModal] = useState(false);
// //   const [showSidebar, setShowSidebar] = useState(false);
// //   const [currentIndex, setCurrentIndex] = useState(0);
// //   const images = generateImages();

// //   const toggleSelect = (index: number) => {
// //     if (selected.includes(index)) {
// //       setSelected((prev) => prev.filter((i) => i !== index));
// //     } else if (selected.length < 3) {
// //       setSelected((prev) => [...prev, index]);
// //     }
// //   };

// //   const handlePreviewEdit = () => {
// //     const selectedImages = selected.map((i) => encodeURIComponent(images[i]));
// //     const query = selectedImages.join(',');
// //     router.push(`/preview?images=${query}`);
// //   };

// //   return (
// //     <main className="bg-[#FAF9FC] min-h-screen flex flex-col sm:flex-row">
// //       {/* Desktop Sidebar */}
// //       <div className="hidden sm:block">
// //         <Sidebar />
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 w-full">
// //         {/* Desktop Top Navbar */}
// //         <div className="hidden sm:block">
// //           <TopNav />
// //         </div>

// //         {/* Mobile Top Header */}
// //         <div className="sm:hidden flex justify-center items-center py-3 border-b border-gray-300 bg-white relative">
// //           <Image src="/assets/ZyloLogo.svg" alt="Zylo Logo" width={100} height={40} />
// //           <button
// //             onClick={() => setShowSidebar(true)}
// //             className="absolute left-4 text-2xl"
// //           >
// //             ☰
// //           </button>
// //         </div>

// //         {/* Mobile Sidebar Drawer */}
// //         {showSidebar && (
// //           <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex sm:hidden">
// //             <div className="w-64 bg-white p-4 space-y-4">
// //               <div className="flex justify-between items-center mb-4">
// //                 <h2 className="text-xl font-semibold">Menu</h2>
// //                 <button onClick={() => setShowSidebar(false)} className="text-xl">×</button>
// //               </div>
// //               <div className="flex items-center gap-3">
// //                 <Image src="/assets/profile.png" alt="Profile" width={40} height={40} className="rounded-full" />
// //                 <span className="font-medium">Dashboard</span>
// //               </div>
// //               <nav className="space-y-2">
// //                 <button className="block w-full text-left px-2 py-1 text-gray-700">Home</button>
// //                 <button className="block w-full text-left px-2 py-1 text-gray-700">Prices</button>
// //                 <button className="block w-full text-left px-2 py-1 text-gray-700">Blog</button>
// //                 <button className="block w-full text-left px-2 py-1 text-gray-700">Explore AI</button>
// //               </nav>
// //             </div>
// //             <div className="flex-1" onClick={() => setShowSidebar(false)} />
// //           </div>
// //         )}

// //         {/* Desktop Cards */}
// //         <div className="hidden sm:block pl-56 pr-3 pt-9">
// //           <div className="flex flex-wrap gap-4 justify-start">
// //             {images.map((img, index) => (
// //               <div
// //                 key={index}
// //                 onClick={() => toggleSelect(index)}
// //                 className={`rounded-[30px] shadow-md cursor-pointer transition-all duration-200 overflow-hidden border-2 ${
// //                   selected.includes(index)
// //                     ? 'bg-[#C3DBFF]'
// //                     : 'bg-white border-transparent'
// //                 }`}
// //                 style={{
// //                   width: 'calc((100% - 64px) / 3)',
// //                   height: '473.33px',
// //                   paddingTop: '20px',
// //                   paddingLeft: '16px',
// //                   paddingRight: '15px',
// //                 }}
// //               >
// //                 <div className="h-[384px] w-full">
// //                   <img
// //                     src={img}
// //                     alt={`Design ${index + 1}`}
// //                     className="w-full h-full object-cover rounded-2xl"
// //                   />
// //                 </div>
// //                 <div className="text-center text-[#555770] font-bold text-3xl py-4">
// //                   Description
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Mobile Image Grid */}
// //         <div className="sm:hidden grid grid-cols-2 gap-3 p-4">
// //           {images.map((img, idx) => (
// //             <div
// //               key={idx}
// //               onClick={() => {
// //                 setCurrentIndex(idx);
// //                 setShowModal(true);
// //               }}
// //               className="aspect-square w-full bg-gray-100 rounded-xl overflow-hidden"
// //             >
// //               <img
// //                 src={img}
// //                 alt={`Design ${idx}`}
// //                 className="w-full h-full object-cover cursor-pointer"
// //               />
// //             </div>
// //           ))}
// //         </div>

// //         {/* Modal for Enlarged Image */}
// //         {showModal && (
// //           <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
// //             <div className="bg-white rounded-xl overflow-hidden w-11/12 max-w-md relative">
// //               <img src={images[currentIndex]} className="w-full h-[300px] object-cover" />
// //               <div className="flex justify-between px-4 py-2">
// //                 <button
// //                   onClick={() =>
// //                     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
// //                   }
// //                   className="text-[#5598FF] font-bold"
// //                 >
// //                   Prev
// //                 </button>
// //                 <button
// //                   onClick={() =>
// //                     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
// //                   }
// //                   className="text-[#5598FF] font-bold"
// //                 >
// //                   Next
// //                 </button>
// //               </div>
// //               <button
// //                 onClick={() => setShowModal(false)}
// //                 className="absolute top-3 right-4 text-white text-2xl"
// //               >
// //                 ×
// //               </button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Bottom Navigation */}
// //         <div
// //   className="fixed bottom-0 left-[150px] right-0 h-24 z-0 flex items-center justify-between px-8 py-4 rounded-t-xl"
// //   style={{
// //     background:
// //       'linear-gradient(178deg, rgba(255, 255, 255, 0.00) 1.93%, #FFFAFA 30.12%)',
// //     backdropFilter: 'blur(22px)',
// //     boxShadow: '0px -2px 6px rgba(0,0,0,0.05)',
// //   }}
// // >
// //   {/* Back Arrow */}
// //   <button className="bg-[#5598FF] hover:bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md">
// //     <Image src="/assets/Button.svg" alt="Back" width={45} height={45} />
// //   </button>

// //   {/* Step Buttons */}
// //   <div className="flex items-center gap-4">
// //     {/* Website */}
// //     <button
// //       onClick={() => setActiveStep('Website')}
// //       className={`rounded-[24px] font-medium shadow-md w-[90px] px-4 py-2 text-sm text-white ${
// //         activeStep === 'Website' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
// //       }`}
// //     >
// //       Website
// //     </button>

// //     <Image src="/assets/arrow-right.svg" alt="arrow" width={40} height={40} />

// //     {/* Logo */}
// //     <button
// //       onClick={() => setActiveStep('Logo')}
// //       className={`rounded-[24px] font-medium shadow-md w-[90px] px-4 py-2 text-sm text-white ${
// //         activeStep === 'Logo' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
// //       }`}
// //     >
// //       Logo
// //     </button>

// //     <Image src="/assets/arrow-right.svg" alt="arrow" width={40} height={40} />

// //     {/* + / - Button */}
// //     <button
// //       onClick={() => setShowBrandKit(!showBrandKit)}
// //       className="w-[54px] h-[54px] flex items-center justify-center transition-transform hover:scale-105"
// //     >
// //       <Image
// //         src={
// //           showBrandKit
// //             ? '/assets/CancelAction.svg'
// //             : '/assets/Add.svg'
// //         }
// //         alt="Toggle Brand Kit"
// //         width={54}
// //         height={54}
// //       />
// //     </button>

// //     {/* Brand Kit */}
// //     {showBrandKit && (
// //       <>
// //         <Image src="/assets/arrow-right.svg" alt="arrow" width={40} height={40} />
// //         <button
// //           onClick={() => setActiveStep('Brand Kit')}
// //           className={`rounded-[24px] font-medium shadow-md w-[110px] px-4 py-2 text-sm text-white ${
// //             activeStep === 'Brand Kit' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
// //           }`}
// //         >
// //           Brand Kit
// //         </button>
// //       </>
// //     )}
// //   </div>

// //   {/* Preview Edit Button */}
// //   <button
// //     onClick={handlePreviewEdit}
// //     disabled={selected.length === 0}
// //     className="bg-[#5598FF] hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed shadow"
// //   >
// //     <span>Preview Edit</span>
// //     <FiChevronRight className="text-lg" />
// //   </button>
// // </div>


// //         {/* Mobile Bottom Nav */}
// //         <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 space-y-3 z-50">
// //           <button
// //             onClick={() => setActiveStep('Website')}
// //             className={`w-full py-2 rounded-full font-semibold text-sm ${
// //               activeStep === 'Website' ? 'bg-[#5598FF] text-white' : 'bg-[#A9CFFF] text-white'
// //             }`}
// //           >
// //             Website
// //           </button>

// //           <button
// //             onClick={() => setActiveStep('Logo')}
// //             className={`w-full py-2 rounded-full font-semibold text-sm ${
// //               activeStep === 'Logo' ? 'bg-[#5598FF] text-white' : 'bg-[#A9CFFF] text-white'
// //             }`}
// //           >
// //             Logo
// //           </button>

// //           <button
// //             onClick={() => setShowBrandKit(!showBrandKit)}
// //             className="w-full py-2 rounded-full bg-[#A9CFFF] text-white font-semibold text-sm"
// //           >
// //             {showBrandKit ? 'Remove Brand Kit' : 'Add Brand Kit'}
// //           </button>

// //           {showBrandKit && (
// //             <button
// //               onClick={() => setActiveStep('Brand Kit')}
// //               className={`w-full py-2 rounded-full font-semibold text-sm ${
// //                 activeStep === 'Brand Kit' ? 'bg-[#5598FF] text-white' : 'bg-[#A9CFFF] text-white'
// //               }`}
// //             >
// //               Brand Kit
// //             </button>
// //           )}

// //           <button
// //             onClick={handlePreviewEdit}
// //             disabled={selected.length === 0}
// //             className="w-full py-2 rounded-full bg-[#5598FF] text-white font-semibold text-sm disabled:opacity-50"
// //           >
// //             Preview Edit
// //           </button>
// //         </div>
// //       </div>
// //     </main>
// //   );
// // }





// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';
// import TopNav from '@/app/components/TopNavbar';
// import Sidebar from '@/app/components/Sidebar';
// import { FiChevronRight } from 'react-icons/fi';

// const generateImages = () => {
//   return Array.from({ length: 6 }).map(
//     (_, i) => `https://picsum.photos/seed/${i + 1}/500/390`
//   );
// };

// export default function DesignsPage() {
//   const router = useRouter();
//   const [selected, setSelected] = useState<number[]>([]);
//   const [activeStep, setActiveStep] = useState('Website');
//   const [showBrandKit, setShowBrandKit] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [showSidebar, setShowSidebar] = useState(false);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = generateImages();

//   const toggleSelect = (index: number) => {
//     if (selected.includes(index)) {
//       setSelected((prev) => prev.filter((i) => i !== index));
//     } else if (selected.length < 3) {
//       setSelected((prev) => [...prev, index]);
//     }
//   };

//   const handlePreviewEdit = () => {
//     const selectedImages = selected.map((i) => encodeURIComponent(images[i]));
//     const query = selectedImages.join(',');
//     router.push(`/preview?images=${query}`);
//   };

//   return (
//     <main className="bg-[#FAF9FC] min-h-screen flex flex-col sm:flex-row">
//       {/* Desktop Sidebar */}
//       <div className="hidden sm:block">
//         <Sidebar />
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 w-full">
//         {/* Desktop Top Navbar - Fixed */}
//         <div className="hidden sm:block fixed top-0 z-40 w-full">
//           <TopNav />
//         </div>

//         {/* Mobile Top Header */}
//         <div className="sm:hidden flex justify-center items-center py-3 border-b border-gray-300 bg-white relative">
//           <Image src="/assets/ZyloLogo.svg" alt="Zylo Logo" width={100} height={40} />
//           <button
//             onClick={() => setShowSidebar(true)}
//             className="absolute left-4 text-2xl"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Mobile Sidebar Drawer */}
//         {showSidebar && (
//           <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex sm:hidden">
//             <div className="w-64 bg-white p-4 space-y-4">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-xl font-semibold">Menu</h2>
//                 <button onClick={() => setShowSidebar(false)} className="text-xl">×</button>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Image src="/assets/profile.png" alt="Profile" width={40} height={40} className="rounded-full" />
//                 <span className="font-medium">Dashboard</span>
//               </div>
//               <nav className="space-y-2">
//                 <button className="block w-full text-left px-2 py-1 text-gray-700">Home</button>
//                 <button className="block w-full text-left px-2 py-1 text-gray-700">Prices</button>
//                 <button className="block w-full text-left px-2 py-1 text-gray-700">Blog</button>
//                 <button className="block w-full text-left px-2 py-1 text-gray-700">Explore AI</button>
//               </nav>
//             </div>
//             <div className="flex-1" onClick={() => setShowSidebar(false)} />
//           </div>
//         )}

//         {/* Desktop Cards with top padding for fixed TopNav */}
//         <div className="hidden sm:block pl-56 pr-3 pt-[130px] pb-100">
//           <div className="flex flex-wrap gap-4 justify-start">
//             {images.map((img, index) => (
//               <div
//                 key={index}
//                 onClick={() => toggleSelect(index)}
//                 className={`rounded-[30px] shadow-md cursor-pointer transition-all duration-200 overflow-hidden border-2 ${
//                   selected.includes(index)
//                     ? 'bg-[#C3DBFF]'
//                     : 'bg-white border-transparent'
//                 }`}
//                 style={{
//                   width: 'calc((100% - 64px) / 3)',
//                   height: '473.33px',
//                   paddingTop: '20px',
//                   paddingLeft: '16px',
//                   paddingRight: '15px',
//                 }}
//               >
//                 <div className="h-[384px] w-full">
//                   <img
//                     src={img}
//                     alt={`Design ${index + 1}`}
//                     className="w-full h-full object-cover rounded-2xl"
//                   />
//                 </div>
//                 <div className="text-center text-[#555770] font-bold text-3xl py-4">
//                   Description
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Mobile Image Grid */}
//         <div className="sm:hidden grid grid-cols-2 gap-3 p-4">
//           {images.map((img, idx) => (
//             <div
//               key={idx}
//               onClick={() => {
//                 setCurrentIndex(idx);
//                 setShowModal(true);
//               }}
//               className="aspect-square w-full bg-gray-100 rounded-xl overflow-hidden"
//             >
//               <img
//                 src={img}
//                 alt={`Design ${idx}`}
//                 className="w-full h-full object-cover cursor-pointer"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Modal for Enlarged Image */}
//         {showModal && (
//           <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
//             <div className="bg-white rounded-xl overflow-hidden w-11/12 max-w-md relative">
//               <img src={images[currentIndex]} className="w-full h-[300px] object-cover" />
//               <div className="flex justify-between px-4 py-2">
//                 <button
//                   onClick={() =>
//                     setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
//                   }
//                   className="text-[#5598FF] font-bold"
//                 >
//                   Prev
//                 </button>
//                 <button
//                   onClick={() =>
//                     setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
//                   }
//                   className="text-[#5598FF] font-bold"
//                 >
//                   Next
//                 </button>
//               </div>
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="absolute top-3 right-4 text-white text-2xl"
//               >
//                 ×
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Bottom Navigation (Desktop) */}
//         <div
//           className="fixed bottom-0 left-[150px] right-0 h-24 z-0 flex items-center justify-between px-8 py-4 rounded-t-xl"
//           style={{
//             background:
//               'linear-gradient(178deg, rgba(255, 255, 255, 0.00) 1.93%, #FFFAFA 30.12%)',
//             backdropFilter: 'blur(22px)',
//             boxShadow: '0px -2px 6px rgba(0,0,0,0.05)',
//           }}
//         >
//           <button className="bg-[#5598FF] hover:bg-blue-600 text-white w-9 h-9 rounded-full flex items-center justify-center shadow-md">
//             <Image src="/assets/Button.svg" alt="Back" width={45} height={45} />
//           </button>

//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setActiveStep('Website')}
//               className={`rounded-[24px] font-medium shadow-md w-[90px] px-4 py-2 text-sm text-white ${
//                 activeStep === 'Website' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
//               }`}
//             >
//               Website
//             </button>

//             <Image src="/assets/arrow-right.svg" alt="arrow" width={40} height={40} />

//             <button
//               onClick={() => setActiveStep('Logo')}
//               className={`rounded-[24px] font-medium shadow-md w-[90px] px-4 py-2 text-sm text-white ${
//                 activeStep === 'Logo' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
//               }`}
//             >
//               Logo
//             </button>

//             <Image src="/assets/arrow-right.svg" alt="arrow" width={40} height={40} />

//             <button
//               onClick={() => setShowBrandKit(!showBrandKit)}
//               className="w-[54px] h-[54px] flex items-center justify-center transition-transform hover:scale-105"
//             >
//               <Image
//                 src={
//                   showBrandKit
//                     ? '/assets/CancelAction.svg'
//                     : '/assets/Add.svg'
//                 }
//                 alt="Toggle Brand Kit"
//                 width={54}
//                 height={54}
//               />
//             </button>

//             {showBrandKit && (
//               <>
//                 <Image src="/assets/arrow-right.svg" alt="arrow" width={40} height={40} />
//                 <button
//                   onClick={() => setActiveStep('Brand Kit')}
//                   className={`rounded-[24px] font-medium shadow-md w-[110px] px-4 py-2 text-sm text-white ${
//                     activeStep === 'Brand Kit' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
//                   }`}
//                 >
//                   Brand Kit
//                 </button>
//               </>
//             )}
//           </div>

//           <button
//             onClick={handlePreviewEdit}
//             disabled={selected.length === 0}
//             className="bg-[#5598FF] hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed shadow"
//           >
//             <span>Preview Edit</span>
//             <FiChevronRight className="text-lg" />
//           </button>
//         </div>

//         {/* Bottom Navigation (Mobile) */}
//         <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-4 space-y-3 z-50">
//           <button
//             onClick={() => setActiveStep('Website')}
//             className={`w-full py-2 rounded-full font-semibold text-sm ${
//               activeStep === 'Website' ? 'bg-[#5598FF] text-white' : 'bg-[#A9CFFF] text-white'
//             }`}
//           >
//             Website
//           </button>

//           <button
//             onClick={() => setActiveStep('Logo')}
//             className={`w-full py-2 rounded-full font-semibold text-sm ${
//               activeStep === 'Logo' ? 'bg-[#5598FF] text-white' : 'bg-[#A9CFFF] text-white'
//             }`}
//           >
//             Logo
//           </button>

//           <button
//             onClick={() => setShowBrandKit(!showBrandKit)}
//             className="w-full py-2 rounded-full bg-[#A9CFFF] text-white font-semibold text-sm"
//           >
//             {showBrandKit ? 'Remove Brand Kit' : 'Add Brand Kit'}
//           </button>

//           {showBrandKit && (
//             <button
//               onClick={() => setActiveStep('Brand Kit')}
//               className={`w-full py-2 rounded-full font-semibold text-sm ${
//                 activeStep === 'Brand Kit' ? 'bg-[#5598FF] text-white' : 'bg-[#A9CFFF] text-white'
//               }`}
//             >
//               Brand Kit
//             </button>
//           )}

//           <button
//             onClick={handlePreviewEdit}
//             disabled={selected.length === 0}
//             className="w-full py-2 rounded-full bg-[#5598FF] text-white font-semibold text-sm disabled:opacity-50"
//           >
//             Preview Edit
//           </button>
//         </div>
//       </div>
//     </main>
//   );
// }







'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import TopNav from '@/app/components/TopNavbar';
import Sidebar from '@/app/components/Sidebar';
import Image from 'next/image';


const generateImages = () => {
  return Array.from({ length: 6 }).map(
    (_, i) => `https://picsum.photos/seed/${i + 1}/500/390`
  );
};

export default function DesignsPage() {
  const route = useRouter();
  const [selected, setSelected] = useState<number[]>([]);
  const [activeStep, setActiveStep] = useState('Website');
  const [showBrandKit, setShowBrandKit] = useState(false);
  const [showMobileOptions, setShowMobileOptions] = useState(false);
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
    route.push(`/preview?images=${query}`);
  };

  return (
    <main className="bg-[#FAF9FC] min-h-screen">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="fixed top-0 z-40 w-full">
          <TopNav />
        </div>
        <Sidebar />
        
        <div className="pl-56 pr-3 pt-[130px] pb-32">
          <div className="flex flex-wrap gap-4 justify-start">
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
                }}
              >
                <div className="h-[384px] w-full">
                  <img
                    src={img}
                    alt={`Design ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="text-center text-[#555770] font-bold text-xl py-4">
                  Description
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Bottom Navigation */}
        <div className="fixed bottom-0 left-[150px] right-0 h-24 z-30 flex items-center justify-between px-8 py-4 rounded-t-xl bg-white/80 backdrop-blur-[22px] border-t border-gray-200">
          <button 
            onClick={() => route.back()}
            className="bg-[#5598FF] hover:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md"
          >
          <Image src='./assets/Button.svg' alt='' width={46} height={46}/>
          </button>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setActiveStep('Website')}
              className={`rounded-[24px] font-medium shadow-md w-[90px] px-4 py-2 text-sm text-white ${
                activeStep === 'Website' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
              }`}
            >
              Website
            </button>

            <Image src='./assets/arrow-right.svg' alt='' width={55} height={55}/>

            <button
              onClick={() => setActiveStep('Logo')}
              className={`rounded-[24px] font-medium shadow-md w-[90px] px-4 py-2 text-sm text-white ${
                activeStep === 'Logo' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
              }`}
            >
              Logo
            </button>

            <Image src='./assets/arrow-right.svg' alt='' width={55} height={55}/>

            <button
  onClick={() => setShowBrandKit(!showBrandKit)}
  className="w-[54px] h-[54px] flex items-center justify-center transition-transform hover:scale-105"
>
  <Image
    src={showBrandKit ? '/assets/Cross.svg' : '/assets/Add.svg'}
    alt="Toggle Brand Kit"
    width={40}
    height={40}
  />
</button>

            {showBrandKit && (
              <>
                <Image src='./assets/arrow-right.svg' alt='' width={55} height={55}/>

                <button
                  onClick={() => setActiveStep('Brand Kit')}
                  className={`rounded-[24px] font-medium shadow-md w-[110px] px-4 py-2 text-sm text-white ${
                    activeStep === 'Brand Kit' ? 'bg-[#5598FF]' : 'bg-[#7EB1FF]'
                  }`}
                >
                  Brand Kit
                </button>
              </>
            )}
          </div>

          <button
            onClick={handlePreviewEdit}
            disabled={selected.length === 0}
            className="bg-[#5598FF] hover:bg-blue-600 text-white px-6 py-3 rounded-full text-sm font-medium flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed shadow"
          >
            <span>Preview Edit</span>
            <Image src='./assets/next.svg' alt='' width={10} height={10}/>

          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <TopNav />
        
        <div className="p-4 mt-8 grid grid-cols-2 gap-4 pb-28">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => toggleSelect(idx)}
              className={`relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-200 bg-white p-2 ${
                selected.includes(idx)
                  ? ' bg-[#7EB1FF]'
                  : 'hover:shadow-lg'
              }`}
            >
              <img
                src={img}
                alt={`Design ${idx}`}
                className="w-full h-[85%] object-cover rounded-lg"
              />
              {selected.includes(idx) && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-[#5598FF] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
              )}
              <div className="p-1 text-center">
                <p className="text-xs font-medium text-gray-700">Design {idx + 1}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Preview Button - Only shows when images are selected */}
        {selected.length > 0 && (
          <div className="fixed bottom-4 left-4 right-4 z-0">
            <button
              onClick={handlePreviewEdit}
              className="w-[70%] h-auto bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-white py-4 px-4 rounded-4xl font-bold shadow-lg flex items-center justify-center gap-2"
            >
              <span>Preview Edit</span>
              <Image src='./assets/next.svg' alt='' width={10} height={10}/>

            </button>
          </div>
        )}

        {/* Mobile Settings Button */}
        {!showMobileOptions && (
          <button
            onClick={() => setShowMobileOptions(true)}
            className="fixed bottom-4 right-4 w-14 h-14 bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] rounded-full flex items-center justify-center shadow-lg z-50"
          >
           <Image src='./assets/AddMore.svg' alt='' width={55} height={55}/>

          </button>
        )}

        {/* Mobile Options Popup - Redesigned */}
        {showMobileOptions && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
            <div 
              className="bg-white rounded-t-3xl w-full p-6 space-y-6 text-black"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-800">Design Options</h3>
                <button 
                  onClick={() => setShowMobileOptions(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200"
                >
                  <Image src='./assets/next.svg' alt='' width={10} height={10}/>

                </button>
              </div>

              <div className="space-y-3">
                {[
                  { id: 'Website', icon: '🌐', label: 'Website' },
                  { id: 'Logo', icon: '🎨', label: 'Logo' },
                  { id: 'Brand Kit', icon: '📦', label: 'Brand Kit' }
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setActiveStep(option.id);
                      if (option.id === 'Brand Kit') setShowBrandKit(true);
                    }}
                    className={`w-full flex items-center gap-4 py-4 px-4 rounded-md transition ${
                      activeStep === option.id ? 'ring-2 ring-[#84caf0] text-black' : 'bg-gray-100'
                    }`}
                  >
                    <span className="text-2xl">{option.icon}</span>
                    <span className="font-semibold">{option.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div 
              className="absolute inset-0 -z-10"
              onClick={() => setShowMobileOptions(false)}
            />
          </div>
        )}
      </div>
    </main>
  );
}
