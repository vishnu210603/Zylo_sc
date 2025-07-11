// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const generateImageUrls = (colIndex: number) =>
//   Array.from({ length: 6 }).map(
//     (_, i) => `https://picsum.photos/300/300?random=${colIndex * 10 + i}`
//   );

// const Column = ({
//   images,
//   direction,
// }: {
//   images: string[];
//   direction: 'up' | 'down';
// }) => (
//   <motion.div
//     className="flex flex-col gap-4"
//     initial={{ y: direction === 'up' ? '0%' : '-50%' }}
//     animate={{ y: direction === 'up' ? '-50%' : '0%' }}
//     transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//   >
//     {[...images, ...images].map((url, i) => (
//       <div
//         key={i}
//         className="w-full h-[300px] rounded-2xl overflow-hidden shadow-md opacity-70"
//       >
//         <img src={url} alt={`img-${i}`} className="w-full h-full object-cover" />
//       </div>
//     ))}
//   </motion.div>
// );

// const ParallaxBox = () => {
//   const router = useRouter();
//   const columns = Array.from({ length: 5 });
//   const [input, setInput] = useState('');
//   const [attachments, setAttachments] = useState<File[]>([]);

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) setAttachments((prev) => [...prev, file]);
//   };

//   const handleRemoveAttachment = (index: number) => {
//     setAttachments((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleSend = () => {
//     if (!input && attachments.length === 0) return;
//     setInput('');
//     setAttachments([]);
//     router.push('/designs'); // Redirect to new page
//   };

//   return (
//     <div className="relative w-full h-[300px] mt-6 overflow-hidden rounded-xl px-8 z-30">
//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="flex w-[calc(100%+160px)] -translate-x-[80px] h-full gap-4"
//           style={{
//             background:
//               'linear-gradient(120deg, #F3E0DB, #E9BFF6, #93B7FD, #99DDDF)',
//           }}
//         >
//           {columns.map((_, i) => (
//             <div key={i} className="w-full overflow-hidden h-[436px] flex-1">
//               <Column
//                 images={generateImageUrls(i)}
//                 direction={i % 2 === 0 ? 'up' : 'down'}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Foreground Content */}
//       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4">
//         <h2
//           className="text-center font-bold text-[40px] leading-[54px] text-white mb-6 bg-amber-200"
//           style={{
//             textShadow:
//               '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
//             WebkitTextStrokeWidth: '1px',
//             WebkitTextStrokeColor: '#C7C8D9',
//           }}
//         >
//           Create Smarter, Faster, Better.
//         </h2>

//         {/* Main Input Card */}
//         <div className="relative bg-white backdrop-blur-xl shadow-xl rounded-xl w-[600px] max-w-[90%] px-4 py-4 flex flex-col">
//           {/* Input with icon */}
//           <div className="relative w-full mb-4">
//             <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//               <Image src="/assets/Search.svg" alt="Search" width={16} height={16} />
//             </div>
//             <input
//               type="text"
//               placeholder="Improvise your Social Media with AI... Create. Edit. Upload!"
//               className="bg-transparent outline-none w-full text-sm placeholder:text-gray-600 text-gray-800 pl-10"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//             />
//           </div>

//           {/* Uploaded Attachments */}
//           {attachments.length > 0 && (
//             <div className="flex gap-2 flex-wrap mb-4">
//               {attachments.map((file, i) => (
//                 <div
//                   key={i}
//                   className="relative w-20 h-20 rounded-md overflow-hidden border shadow-sm"
//                 >
//                   <img
//                     src={URL.createObjectURL(file)}
//                     alt="preview"
//                     className="w-full h-full object-cover"
//                   />
//                   <button
//                     onClick={() => handleRemoveAttachment(i)}
//                     className="absolute top-1 right-1 bg-white text-red-500 rounded-full text-xs p-1"
//                   >
//                     ✕
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Attach & Send Buttons */}
//           <div className="absolute bottom-4 right-4 flex gap-2">
//             <label className="cursor-pointer hover:bg-gray-200 rounded-full p-2 transition">
//               <Image src="/assets/Link.svg" alt="Attach" width={20} height={20} />
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />
//             </label>
//             <button
//               onClick={handleSend}
//               className="p-2 hover:bg-blue-200 rounded-full transition"
//             >
//               <Image src="/assets/Send.svg" alt="Send" width={20} height={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParallaxBox;






// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const generateImageUrls = (colIndex: number) =>
//   Array.from({ length: 6 }).map(
//     (_, i) => `https://picsum.photos/300/300?random=${colIndex * 10 + i}`
//   );

// const Column = ({
//   images,
//   direction,
// }: {
//   images: string[];
//   direction: 'up' | 'down';
// }) => (
//   <motion.div
//     className="flex flex-col gap-4"
//     initial={{ y: direction === 'up' ? '0%' : '-50%' }}
//     animate={{ y: direction === 'up' ? '-50%' : '0%' }}
//     transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//   >
//     {[...images, ...images].map((url, i) => (
//       <div
//         key={i}
//         className="w-full h-[300px] rounded-2xl overflow-hidden shadow-md opacity-70"
//       >
//         <img src={url} alt={`img-${i}`} className="w-full h-full object-cover" />
//       </div>
//     ))}
//   </motion.div>
// );

// const ParallaxBox = () => {
//   const router = useRouter();
//   const columns = Array.from({ length: 5 });
//   const [input, setInput] = useState('');
//   const [attachments, setAttachments] = useState<File[]>([]);

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) setAttachments((prev) => [...prev, file]);
//   };

//   const handleRemoveAttachment = (index: number) => {
//     setAttachments((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleSend = () => {
//     if (!input && attachments.length === 0) return;
//     setInput('');
//     setAttachments([]);
//     router.push('/designs');
//   };

//   return (
//     <div className="relative w-full h-[350px] mt-6 overflow-hidden rounded-xl px-8 z-30">
//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="flex w-[calc(100%+160px)] -translate-x-[80px] h-full gap-4"
//           style={{
//             background:
//               'linear-gradient(120deg, #F3E0DB, #E9BFF6, #93B7FD, #99DDDF)',
//           }}
//         >
//           {columns.map((_, i) => (
//             <div key={i} className="w-full overflow-hidden h-[436px] flex-1  backdrop-blur-2xl">
//               <Column
//                 images={generateImageUrls(i)}
//                 direction={i % 2 === 0 ? 'up' : 'down'}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Foreground Content */}
//       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-4">
//         <div className="flex flex-col items-center gap-8">
//           {/* Heading */}
//           <div
//             className="text-center font-bold text-[40px] leading-[54px] text-white"
//             style={{
//               textShadow:
//                 '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
//               WebkitTextStrokeWidth: '1px',
//               WebkitTextStrokeColor: '#C7C8D9',
//             }}
//           >
//             Create Smarter, Faster, Better.
//           </div>

//           {/* Main Input Card */}
//           <div className="relative bg-white backdrop-blur-xl shadow-xl rounded-xl w-[600px] max-w-[100%] px-4 py-4 flex flex-col">
//             {/* Input with icon */}
//             <div className="relative w-full mb-4">
//               <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
//                 <Image src="/assets/Search.svg" alt="Search" width={16} height={16} />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Improvise your Social Media with AI... Create. Edit. Upload!"
//                 className="bg-transparent outline-none w-full text-sm placeholder:text-[16px] placeholder:leading-[24px] placeholder:text-[#8E90A6] pl-10 text-gray-800"
//                 style={{
//                   fontFamily: 'Inter',
//                   fontSize: '16px',
//                   fontWeight: 400,
//                   lineHeight: '24px',
//                 }}
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//               />
//             </div>

//             {/* Uploaded Attachments */}
//             {attachments.length > 0 && (
//               <div className="flex gap-2 flex-wrap mb-4">
//                 {attachments.map((file, i) => (
//                  <div
//                  key={i}
//                  className="relative"
//                  style={{
//                    width: '83px',
//                    height: '83px',
//                    flexShrink: 0,
//                    borderRadius: '16px',
//                    boxShadow:
//                      '0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)',
//                    background: `url(${URL.createObjectURL(file)}) lightgray 50% / cover no-repeat`,
//                    overflow: '',
//                  }}
//                >
//                  <button
//                    onClick={() => handleRemoveAttachment(i)}
//                    className="absolute -top-2 -right-2 bg-white rounded-full p-[2px] z-50 shadow-md"
//                  >
//                    <Image src="/assets/CancelUpload.svg" alt="Cancel" width={20} height={20} />
//                  </button>
//                </div>
               
                
//                 ))}
//               </div>
//             )}

//             {/* Attach & Send Buttons */}
//             <div className="absolute bottom-4 right-4 flex gap-2">
//               <label className="cursor-pointer hover:bg-gray-200 rounded-full p-2 transition">
//                 <Image src="/assets/Link.svg" alt="Attach" width={20} height={20} />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileUpload}
//                   className="hidden"
//                 />
//               </label>
//               <button
//                 onClick={handleSend}
//                 className="p-2 hover:bg-blue-200 rounded-full transition"
//               >
//                 <Image src="/assets/Send.svg" alt="Send" width={20} height={20} />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParallaxBox;






// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { motion } from 'framer-motion';
// import Image from 'next/image';

// const generateImageUrls = (colIndex: number) =>
//   Array.from({ length: 6 }).map(
//     (_, i) => `https://picsum.photos/300/300?random=${colIndex * 10 + i}`
//   );

// const Column = ({
//   images,
//   direction,
// }: {
//   images: string[];
//   direction: 'up' | 'down';
// }) => (
//   <motion.div
//     className="flex flex-col gap-4"
//     initial={{ y: direction === 'up' ? '0%' : '-50%' }}
//     animate={{ y: direction === 'up' ? '-50%' : '0%' }}
//     transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
//   >
//     {[...images, ...images].map((url, i) => (
//       <div
//         key={i}
//         className="w-full h-[300px] rounded-2xl overflow-hidden shadow-md opacity-70"
//       >
//         <img src={url} alt={`img-${i}`} className="w-full h-full object-cover" />
//       </div>
//     ))}
//   </motion.div>
// );

// const ParallaxBox = () => {
//   const router = useRouter();
//   const columns = Array.from({ length: 5 });
//   const [input, setInput] = useState('');
//   const [attachments, setAttachments] = useState<File[]>([]);

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) setAttachments((prev) => [...prev, file]);
//   };

//   const handleRemoveAttachment = (index: number) => {
//     setAttachments((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleSend = () => {
//     if (!input && attachments.length === 0) return;
//     setInput('');
//     setAttachments([]);
//     router.push('/designs');
//   };

//   return (
//     <div className="relative w-full h-[350px] mt-3 overflow-hidden rounded-xl px-8 z-30">
//       {/* Background */}
//       <div className="absolute inset-0 overflow-hidden ml-1 rounded-2xl">
//         <div
//           className="flex w-[calc(100%+160px)] -translate-x-[80px] h-full gap-4"
//           style={{
//             background:
//               'linear-gradient(120deg, #F3E0DB, #E9BFF6, #93B7FD, #99DDDF)',
//           }}
//         >
//           {columns.map((_, i) => (
//             <div
//               key={i}
//               className="w-full overflow-hidden h-[436px] flex-1 backdrop-blur-2xl"
//             >
//               <Column
//                 images={generateImageUrls(i)}
//                 direction={i % 2 === 0 ? 'up' : 'down'}
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Foreground Content */}
//       <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
//         <div className="flex flex-col items-center gap-8 justify-center w-200">
//           {/* Heading */}
//           <div className="relative inline-block text-[30px] md:text-[40px] leading-[54px] font-bold text-center">
//   {/* Outline Layer */}
//   <span
//     className="absolute inset-0"
//     style={{
//       color: 'transparent',
//       WebkitTextStroke: '2px #C7C8D9',
//       zIndex: 0,
//     }}
//   >
//     Create Smarter, Faster, Better.
//   </span>

//   {/* Fill Layer */}
//   <span
//     className="relative text-white"
//     style={{
//       textShadow:
//         '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
//     }}
//   >
//     Create Smarter, Faster, Better.
//   </span>
// </div>


//           {/* Main Input Card */}
//           <div className="relative bg-white backdrop-blur-xl shadow-xl rounded-xl w-80 md:w-200 max-w-full px-4 py-4 flex flex-col">
//   {/* Top Row: Search + Input + Buttons */}
//   <div className={`flex items-center w-full gap-2 ${attachments.length > 0 ? 'mb-4' : ''}`}>
//     {/* Search Icon */}
//     <div className="relative">
//       <Image src="/assets/Search.svg" alt="Search" width={16} height={16} className="ml-1" />
//     </div>

//     {/* Input Field */}
//     <input
//       type="text"
//       placeholder="Improvise your Social Media with AI... Create. Edit. Upload!"
//       className="bg-transparent outline-none flex-1 text-[#8E90A6] placeholder:text-[#8E90A6] placeholder:text-[16px] placeholder:leading-[24px] text-sm"
//       style={{
//         fontFamily: 'Inter',
//         fontSize: '16px',
//         fontWeight: 400,
//         lineHeight: '24px',
//       }}
//       value={input}
//       onChange={(e) => setInput(e.target.value)}
//     />

//     {/* Buttons (Inline if no attachments) */}
//     {attachments.length === 0 && (
//       <div className="flex gap-2">
//         <label className="cursor-pointer hover:bg-gray-200 rounded-full p-2 transition">
//           <Image src="/assets/Link.svg" alt="Attach" width={20} height={20} />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileUpload}
//             className="hidden"
//           />
//         </label>
//         <button
//           onClick={handleSend}
//           className="p-2 hover:bg-blue-200 rounded-full transition"
//         >
//           <Image src="/assets/Send.svg" alt="Send" width={20} height={20} />
//         </button>
//       </div>
//     )}
//   </div>

//   {/* Uploaded Attachments */}
//   {attachments.length > 0 && (
//     <>
//       <div className="flex gap-5 flex-wrap mb-6 mt-1">
//         {attachments.map((file, i) => (
//           <div
//             key={i}
//             className="relative"
//             style={{
//               width: '83px',
//               height: '83px',
//               flexShrink: 0,
//               borderRadius: '16px',
//               boxShadow:
//                 '0px 0px 1px rgba(40, 41, 61, 0.04), 0px 2px 4px rgba(96, 97, 112, 0.16)',
//               background: `url(${URL.createObjectURL(file)}) lightgray 50% / cover no-repeat`,
//             }}
//           >
//             <button
//               onClick={() => handleRemoveAttachment(i)}
//               className="absolute -top-2 -right-2 bg-white rounded-full z-50 shadow-md"
//             >
//               <Image
//                 src="/assets/CancelUpload.svg"
//                 alt="Cancel"
//                 width={20}
//                 height={20}
//               />
//             </button>
//           </div>
//         ))}
//       </div>

//       {/* Buttons move to bottom right when images exist */}
//       <div className="absolute bottom-4 right-4 flex gap-2">
//         <label className="cursor-pointer hover:bg-gray-200 rounded-full p-2 transition">
//           <Image src="/assets/Link.svg" alt="Attach" width={20} height={20} />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileUpload}
//             className="hidden"
//           />
//         </label>
//         <button
//           onClick={handleSend}
//           className="p-2 hover:bg-blue-200 rounded-full transition"
//         >
//           <Image src="/assets/Send.svg" alt="Send" width={20} height={20} />
//         </button>
//       </div>
//     </>
//   )}
// </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default ParallaxBox;









'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Paperclip, Send, X } from 'lucide-react';

const generateImageUrls = (colIndex: number) =>
  Array.from({ length: 6 }).map(
    (_, i) => `https://picsum.photos/300/300?random=${colIndex * 10 + i}`
  );

const Column = ({
  images,
  direction,
}: {
  images: string[];
  direction: 'up' | 'down';
}) => (
  <motion.div
    className="flex flex-col gap-4"
    initial={{ y: direction === 'up' ? '0%' : '-50%' }}
    animate={{ y: direction === 'up' ? '-50%' : '0%' }}
    transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
  >
    {[...images, ...images].map((url, i) => (
      <div
        key={i}
        className="w-full h-[300px] rounded-2xl overflow-hidden shadow-md opacity-70"
      >
        <img src={url} alt={`img-${i}`} className="w-full h-full object-cover" />
      </div>
    ))}
  </motion.div>
);

const ParallaxBox = () => {
  const route = useRouter();
  const columns = Array.from({ length: 5 });
  const [input, setInput] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setAttachments((prev) => [...prev, file]);
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSend = () => {
    if (!input && attachments.length === 0) return;
    setInput('');
    setAttachments([]);
    route.push('/designs');
  };

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block relative w-full h-[350px] mt-3 overflow-hidden rounded-xl px-8 z-30">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden ml-1 rounded-2xl">
          <div
            className="flex w-[calc(100%+160px)] -translate-x-[80px] h-full gap-4"
            style={{
              background:
                'linear-gradient(120deg, #F3E0DB, #E9BFF6, #93B7FD, #99DDDF)',
            }}
          >
            {columns.map((_, i) => (
              <div
                key={i}
                className="w-full overflow-hidden h-[436px] flex-1 backdrop-blur-2xl"
              >
                <Column
                  images={generateImageUrls(i)}
                  direction={i % 2 === 0 ? 'up' : 'down'}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Foreground Content */}
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center gap-8 justify-center w-200">
            {/* Heading */}
            <div className="relative inline-block text-[40px] leading-[54px] font-bold text-center">
              <span
                className="absolute inset-0"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px #C7C8D9',
                  zIndex: 0,
                }}
              >
                Create Smarter, Faster, Better.
              </span>
              <span
                className="relative text-white"
                style={{
                  textShadow:
                    '0px 2px 4px rgba(40, 41, 61, 0.04), 0px 8px 16px rgba(96, 97, 112, 0.16)',
                }}
              >
                Create Smarter, Faster, Better.
              </span>
            </div>

            {/* Main Input Card */}
            <div className="relative bg-white backdrop-blur-xl shadow-xl rounded-xl w-200 max-w-full px-4 py-4 flex flex-col">
              <div className={`flex items-center w-full gap-2 ${attachments.length > 0 ? 'mb-4' : ''}`}>
                <Search size={16} className="ml-1 text-gray-400" />
                <input
                  type="text"
                  placeholder="Improvise your Social Media with AI... Create. Edit. Upload!"
                  className="bg-transparent outline-none flex-1 text-[#8E90A6] placeholder:text-[#8E90A6] placeholder:text-[16px] placeholder:leading-[24px] text-sm"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />

                {attachments.length === 0 && (
                  <div className="flex gap-2">
                    <label className="cursor-pointer hover:bg-gray-200 rounded-full p-2 transition">
                      <Paperclip size={20} className="text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={handleSend}
                      className="p-2 hover:bg-blue-200 rounded-full transition"
                    >
                      <Send size={20} className="text-[#5598FF]" />
                    </button>
                  </div>
                )}
              </div>

              {attachments.length > 0 && (
                <>
                  <div className="flex gap-5 flex-wrap mb-6 mt-1">
                    {attachments.map((file, i) => (
                      <div
                        key={i}
                        className="relative w-[83px] h-[83px] rounded-2xl overflow-hidden shadow-md"
                        style={{
                          background: `url(${URL.createObjectURL(file)}) lightgray 50% / cover no-repeat`,
                        }}
                      >
                        <button
                          onClick={() => handleRemoveAttachment(i)}
                          className="absolute -top-2 -right-2 bg-white rounded-full z-50 shadow-md w-5 h-5 flex items-center justify-center"
                        >
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>

                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <label className="cursor-pointer hover:bg-gray-200 rounded-full p-2 transition">
                      <Paperclip size={20} className="text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <button
                      onClick={handleSend}
                      className="p-2 hover:bg-blue-200 rounded-full transition"
                    >
                      <Send size={20} className="text-[#5598FF]" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View - Centered */}
      <div className="md:hidden mt-8 px-4">
        <div className="relative h-[300px] overflow-hidden rounded-xl">
          {/* Background */}
          <div
            className="absolute inset-0 rounded-xl"
            style={{
              background: 'linear-gradient(120deg, #F3E0DB, #E9BFF6, #93B7FD, #99DDDF)',
            }}
          >
            <div className="flex w-full h-full gap-2 overflow-hidden">
              {columns.slice(0, 3).map((_, i) => (
                <div key={i} className="flex-1 overflow-hidden">
                  <Column
                    images={generateImageUrls(i)}
                    direction={i % 2 === 0 ? 'up' : 'down'}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Foreground Content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
            <div className="text-center mb-6">
              <h1 className="text-2xl font-bold text-white mb-2" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.3)' }}>
                Create Smarter, Faster, Better.
              </h1>
            </div>

            <div className="bg-white/95 backdrop-blur-xl rounded-xl p-4 w-full max-w-sm">
              <div className={`flex items-center gap-2 ${attachments.length > 0 ? 'mb-3' : ''}`}>
                <Search size={16} className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Create with AI..."
                  className="flex-1 text-sm bg-transparent outline-none text-gray-700 placeholder:text-gray-500"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                
                {attachments.length === 0 && (
                  <div className="flex gap-1">
                    <label className="cursor-pointer p-1">
                      <Paperclip size={16} className="text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <button onClick={handleSend} className="p-1">
                      <Send size={16} className="text-[#5598FF]" />
                    </button>
                  </div>
                )}
              </div>

              {attachments.length > 0 && (
                <>
                  <div className="flex gap-2 mb-3">
                    {attachments.map((file, i) => (
                      <div
                        key={i}
                        className="relative w-12 h-12 rounded-lg overflow-hidden"
                        style={{
                          background: `url(${URL.createObjectURL(file)}) center/cover`,
                        }}
                      >
                        <button
                          onClick={() => handleRemoveAttachment(i)}
                          className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-end gap-1">
                    <label className="cursor-pointer p-1">
                      <Paperclip size={16} className="text-gray-400" />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="hidden"
                      />
                    </label>
                    <button onClick={handleSend} className="p-1">
                      <Send size={16} className="text-[#5598FF]" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParallaxBox;
