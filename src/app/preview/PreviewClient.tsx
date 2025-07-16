// 'use client';
// export const dynamic = 'force-dynamic';
// import { useSearchParams, useRouter } from 'next/navigation';
// import { useEffect, useRef, useState } from 'react';
// import TopNav from '@/app/components/TopNavbar';
// import Image from 'next/image';
// import {
//   FaWhatsapp,
//   FaPinterestP,
//   FaXTwitter,
//   FaFacebookF,
//   FaFacebookMessenger,
//   FaInstagram,
//   FaLinkedinIn,
// } from 'react-icons/fa6';
// import { PiThreadsLogoFill } from 'react-icons/pi';
// import { X } from 'lucide-react';

// export default function PreviewPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const imageUrl = decodeURIComponent(searchParams.get('images') || '');
//   const caption = decodeURIComponent(
//     searchParams.get('caption') || 'Click here to edit your caption ✨'
//   );
//   const aspect = searchParams.get('aspect') || '1:1';

//   const [isEditing, setIsEditing] = useState(false);
//   const [captionHtml, setCaptionHtml] = useState(caption);
//   const [openPopup, setOpenPopup] = useState<string | null>(null);
//   const [showExpandedImage, setShowExpandedImage] = useState(false);

//   const captionRef = useRef<HTMLDivElement>(null);

//   // Aspect ratio class for container
//   const getAspectClass = () => {
//     switch (aspect) {
//       case '4:5': return 'aspect-[4/5] w-[320px] md:w-[320px]';
//       case '9:16': return 'aspect-[9/16] w-[270px] md:w-[270px]';
//       case '16:9': return 'aspect-[16/9] w-[400px] md:w-[400px]';
//       case '2:3': return 'aspect-[2/3] w-[300px] md:w-[300px]';
//       case '3:2': return 'aspect-[3/2] w-[400px] md:w-[400px]';
//       case '1:1':
//       default: return 'aspect-square w-[360px]';
//     }
//   };

//   const getAspectRatio = () => {
//     switch (aspect) {
//       case '4:5': return '4 / 5';
//       case '9:16': return '9 / 16';
//       case '16:9': return '16 / 9';
//       case '2:3': return '2 / 3';
//       case '3:2': return '3 / 2';
//       case '1:1':
//       default: return '1 / 1';
//     }
//   };

//   const aspectClass = getAspectClass();
//   const aspectRatio = getAspectRatio();

//   useEffect(() => {
//     if (captionRef.current) {
//       captionRef.current.innerHTML = captionHtml;
//     }
//   }, [captionHtml]);

//   const goToForm = (platform: string) => {
//     router.push(
//       `/postform?platform=${encodeURIComponent(platform)}&image=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(captionHtml)}`
//     );
//   };

//   const handleSaveImage = async () => {
//     const response = await fetch(imageUrl);
//     const blob = await response.blob();
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'image.jpg';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff]">
//       {/* Top Navbar */}
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <TopNav />
//       </div>

//       {/* Right Sidebar */}
//       <div className="hidden lg:flex flex-col justify-between items-center fixed top-[140px] right-6 z-40 h-[calc(100vh-200px)]">
//         <button onClick={() => router.push('/designs')}>
//           <Image src="/assets/Button.svg" alt="Back" width={30} height={30} />
//         </button>
//         <div className="flex flex-col items-center gap-4 mt-6">
//           {/* Export Popup */}
//           <div className="relative">
//             <button
//               onClick={() => setOpenPopup(openPopup === 'export' ? null : 'export')}
//               className="p-2 rounded-full transition"
//               title="Export"
//             >
//               <Image src="/assets/export.svg" alt="Export" width={30} height={30} />
//             </button>
//             {openPopup === 'export' && (
//               <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-xl p-3 shadow-xl border flex flex-col gap-4 animate-fadeIn z-[9999] w-12 items-center">
//                 {[
//                   { title: 'WhatsApp', icon: <FaWhatsapp size={22} className="text-gray-500" /> },
//                   { title: 'Pinterest', icon: <FaPinterestP size={22} className="text-gray-500" /> },
//                   { title: 'Twitter', icon: <FaXTwitter size={22} className="text-gray-500" /> },
//                   { title: 'Threads', icon: <PiThreadsLogoFill size={22} className="text-gray-500" /> },
//                   { title: 'Facebook', icon: <FaFacebookF size={22} className="text-gray-500" /> },
//                   { title: 'Messenger', icon: <FaFacebookMessenger size={22} className="text-gray-500" /> },
//                   { title: 'Instagram', icon: <FaInstagram size={22} className="text-gray-500" /> },
//                   { title: 'LinkedIn', icon: <FaLinkedinIn size={22} className="text-[#0077B5]" /> },
//                 ].map(({ title, icon }) => (
//                   <button key={title} title={title} onClick={() => goToForm(title)} className="hover:scale-110 transition">
//                     {icon}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Upload to Cloud */}
//           <div className="relative">
//             <button
//               onClick={() => setOpenPopup(openPopup === 'cloud' ? null : 'cloud')}
//               className="p-2 rounded-full transition"
//               title="Upload to Cloud"
//             >
//               <Image src="/assets/cloud-upload.svg" alt="Cloud Upload" width={30} height={30} />
//             </button>
//             {openPopup === 'cloud' && (
//               <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl border flex flex-col gap-3 animate-fadeIn z-[9999] py-2 w-12 items-center">
//                 <Image src="/resources/gdrive.png" alt="Cloud Upload" width={30} height={30} />
//               </div>
//             )}
//           </div>

//           {/* Save */}
//           <button
//             onClick={handleSaveImage}
//             className="p-2 rounded-full transition"
//             title="Download Image"
//           >
//             <Image src="/assets/Save.svg" alt="Save" width={30} height={30} />
//           </button>
//         </div>
//       </div>

//       {/* Main area */}
//       <div className="pt-32 pb-20 flex justify-center items-center min-h-screen">
//         <div className="flex flex-col lg:flex-row gap-6 items-center bg-white shadow-xl border rounded-2xl p-6 w-full max-w-6xl mx-4">
          
//           {/* Left: Image */}
//           <div className={`relative rounded-xl overflow-hidden ${aspectClass} mx-auto flex-shrink-0 border bg-white shadow`}>
//             <Image
//               src={imageUrl}
//               alt="Preview"
//               fill
//               className="object-cover rounded-xl"
//               onClick={() => setShowExpandedImage(true)}
//               draggable={false}
//             />
//           </div>

//           {/* Right: Caption */}
//           <div className="flex-1 min-w-[280px] w-full h-full bg-[#f4f6fb] border border-gray-200 rounded-xl p-4 shadow">
//             <div className="flex items-center gap-2 mb-3 text-gray-700 text-sm font-medium">
//               <span className="font-bold text-gray-900">✏️ Post Preview</span>
//             </div>
//             <div
//               ref={captionRef}
//               contentEditable
//               suppressContentEditableWarning
//               className="min-h-[250px] max-h-[500px] overflow-y-auto bg-white rounded-md px-4 py-3 text-[15px] leading-[1.6] text-gray-800 border border-dashed border-[#d0d7e5] focus:outline-none whitespace-pre-wrap"
//               onClick={() => setIsEditing(true)}
//               onInput={() => setCaptionHtml(captionRef.current?.innerHTML || '')}
//               onBlur={() => setIsEditing(false)}
//             />
//             {isEditing && (
//               <div className="mt-4 flex justify-end">
//                 <button
//                   onClick={() => setIsEditing(false)}
//                   className="text-sm bg-[#5598FF] text-white px-4 py-2 rounded-md hover:scale-105 transition"
//                 >
//                   Done
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Image Expansion Modal */}
//         {showExpandedImage && (
//           <div
//             style={{
//               position: 'fixed',
//               inset: 0,
//               zIndex: 50,
//               width: '100vw',
//               height: '100vh',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               overflow: 'hidden',
//             }}
//           >
//             <div
//               style={{
//                 position: 'absolute',
//                 inset: 0,
//                 background: 'rgba(0,0,0,0.25)',
//                 backdropFilter: 'blur(18px)',
//                 WebkitBackdropFilter: 'blur(18px)',
//               }}
//               aria-hidden="true"
//             />
//             <button
//               onClick={() => setShowExpandedImage(false)}
//               style={{
//                 position: 'absolute',
//                 top: 28,
//                 right: 36,
//                 zIndex: 52,
//               }}
//               className="bg-white rounded-full p-2 text-black shadow hover:bg-gray-200"
//               aria-label="Close"
//             >
//               <X size={28} />
//             </button>
//             <div
//               style={{
//                 zIndex: 51,
//                 maxHeight: '80vh',
//                 height: '80vh',
//                 aspectRatio: aspectRatio,
//                 maxWidth: '90vw',
//                 background: '#fff',
//                 borderRadius: 20,
//                 overflow: 'hidden',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//               }}
//             >
//               <Image
//                 src={imageUrl}
//                 alt="Expanded"
//                 fill
//                 className="object-contain"
//                 sizes="(max-width: 800px) 90vw, 800px"
//                 priority
//                 draggable={false}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }













'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TopNav from '@/app/components/TopNavbar';
import Image from 'next/image';
import {
  FaWhatsapp, FaPinterestP, FaXTwitter, FaFacebookF,
  FaFacebookMessenger, FaInstagram, FaLinkedinIn
} from 'react-icons/fa6';
import { PiThreadsLogoFill } from 'react-icons/pi';
import { X } from 'lucide-react';

export default function PreviewClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const imageUrl = decodeURIComponent(searchParams.get('images') || '');
  const caption = decodeURIComponent(searchParams.get('caption') || 'Click here to edit your caption ✨');
  const aspect = searchParams.get('aspect') || '1:1';

  const [isEditing, setIsEditing] = useState(false);
  const [captionHtml, setCaptionHtml] = useState(caption);
  const [openPopup, setOpenPopup] = useState<string | null>(null);
  const [showExpandedImage, setShowExpandedImage] = useState(false);
  const captionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (captionRef.current) captionRef.current.innerHTML = captionHtml;
  }, [captionHtml]);

  const goToForm = (platform: string) => {
    router.push(`/postform?platform=${encodeURIComponent(platform)}&image=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(captionHtml)}`);
  };

  const handleSaveImage = async () => {
    const response = await fetch(imageUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'image.jpg';
    a.click();
    URL.revokeObjectURL(url);
  };

  const getAspectClass = () => {
    switch (aspect) {
      case '4:5': return 'aspect-[4/5] w-[320px]';
      case '9:16': return 'aspect-[9/16] w-[270px]';
      case '16:9': return 'aspect-[16/9] w-[400px]';
      case '2:3': return 'aspect-[2/3] w-[300px]';
      case '3:2': return 'aspect-[3/2] w-[400px]';
      default: return 'aspect-square w-[360px]';
    }
  };

  const getAspectRatio = () => {
    switch (aspect) {
      case '4:5': return '4 / 5';
      case '9:16': return '9 / 16';
      case '16:9': return '16 / 9';
      case '2:3': return '2 / 3';
      case '3:2': return '3 / 2';
      default: return '1 / 1';
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff]">
      <div className="fixed top-0 left-0 right-0 z-50"><TopNav /></div>

      <div className="hidden lg:flex flex-col justify-between items-center fixed top-[140px] right-6 z-40 h-[calc(100vh-200px)]">
        <button onClick={() => router.push('/designs')}>
          <Image src="/assets/Button.svg" alt="Back" width={30} height={30} />
        </button>

        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Export */}
          <div className="relative">
            <button onClick={() => setOpenPopup(openPopup === 'export' ? null : 'export')}>
              <Image src="/assets/export.svg" alt="Export" width={30} height={30} />
            </button>
            {openPopup === 'export' && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-xl p-3 shadow-xl border flex flex-col gap-4 animate-fadeIn z-[9999] w-12 items-center">
                {[
                  { title: 'WhatsApp', icon: <FaWhatsapp size={22} /> },
                  { title: 'Pinterest', icon: <FaPinterestP size={22} /> },
                  { title: 'Twitter', icon: <FaXTwitter size={22} /> },
                  { title: 'Threads', icon: <PiThreadsLogoFill size={22} /> },
                  { title: 'Facebook', icon: <FaFacebookF size={22} /> },
                  { title: 'Messenger', icon: <FaFacebookMessenger size={22} /> },
                  { title: 'Instagram', icon: <FaInstagram size={22} /> },
                  { title: 'LinkedIn', icon: <FaLinkedinIn size={22} /> },
                ].map(({ title, icon }) => (
                  <button key={title} onClick={() => goToForm(title)}>{icon}</button>
                ))}
              </div>
            )}
          </div>

          {/* Cloud Upload */}
          <div className="relative">
            <button onClick={() => setOpenPopup(openPopup === 'cloud' ? null : 'cloud')}>
              <Image src="/assets/cloud-upload.svg" alt="Cloud Upload" width={30} height={30} />
            </button>
            {openPopup === 'cloud' && (
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl border p-2 animate-fadeIn z-[9999] w-12 items-center">
                <Image src="/resources/gdrive.png" alt="Cloud Upload" width={30} height={30} />
              </div>
            )}
          </div>

          {/* Save */}
          <button onClick={handleSaveImage}>
            <Image src="/assets/Save.svg" alt="Save" width={30} height={30} />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-20 flex justify-center items-center min-h-screen">
        <div className="flex flex-col lg:flex-row gap-6 items-center bg-white shadow-xl border rounded-2xl p-6 w-full max-w-6xl mx-4">
          <div className={`relative ${getAspectClass()} rounded-xl overflow-hidden border bg-white shadow`}>
            <Image
              src={imageUrl}
              alt="Preview"
              fill
              className="object-cover"
              onClick={() => setShowExpandedImage(true)}
              draggable={false}
            />
          </div>

          <div className="flex-1 min-w-[280px] bg-[#f4f6fb] rounded-xl p-4 shadow border">
            <div className="mb-3 text-gray-700 font-medium">
              <span className="font-bold text-gray-900">✏️ Post Preview</span>
            </div>
            <div
              ref={captionRef}
              contentEditable
              suppressContentEditableWarning
              className="min-h-[250px] max-h-[500px] overflow-y-auto bg-white rounded-md px-4 py-3 text-sm leading-relaxed text-gray-800 border border-dashed border-[#d0d7e5] focus:outline-none whitespace-pre-wrap"
              onClick={() => setIsEditing(true)}
              onInput={() => setCaptionHtml(captionRef.current?.innerHTML || '')}
              onBlur={() => setIsEditing(false)}
            />
            {isEditing && (
              <div className="mt-4 flex justify-end">
                <button onClick={() => setIsEditing(false)} className="text-sm bg-[#5598FF] text-white px-4 py-2 rounded-md hover:scale-105">
                  Done
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Expanded Image Modal */}
        {showExpandedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur">
            <button onClick={() => setShowExpandedImage(false)} className="absolute top-7 right-10 z-50 bg-white rounded-full p-2 shadow">
              <X size={28} />
            </button>
            <div className="relative z-40" style={{
              height: '80vh',
              aspectRatio: getAspectRatio(),
              background: '#fff',
              borderRadius: 20,
              overflow: 'hidden'
            }}>
              <Image
                src={imageUrl}
                alt="Expanded"
                fill
                className="object-contain"
                sizes="(max-width: 800px) 90vw, 800px"
                draggable={false}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
