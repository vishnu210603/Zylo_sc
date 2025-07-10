// 'use client';

// import {
//   useState,
//   useRef,
//   useEffect,
//   ChangeEvent,
//   MouseEvent,
// } from 'react';
// import Image from 'next/image';
// import TopNav from '@/app/components/TopNavbar';
// import Sidebar from '@/app/components/Sidebar';

// export default function PreviewEditPage() {
//   const [toolsOpen, setToolsOpen] = useState(false);
//   const [leftNavOpen, setLeftNavOpen] = useState(false);
//   const [input, setInput] = useState('');
//   const [attachments, setAttachments] = useState<File[]>([]);
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   const toggleTools = () => setToolsOpen((prev) => !prev);
//   const toggleLeftNav = () => setLeftNavOpen((prev) => !prev);

//   useEffect(() => {
//     const textarea = textareaRef.current;
//     if (textarea) {
//       textarea.style.height = 'auto';
//       const maxHeight = 5 * 24;
//       textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
//     }
//   }, [input]);

//   function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
//     if (event.target.files && event.target.files.length > 0) {
//       setAttachments((prev) => [...prev, ...Array.from(event.target.files)]);
//     }
//   }

//   function handleSend(event: MouseEvent<HTMLButtonElement>) {
//     console.log('Send:', { input, attachments });
//     setInput('');
//     setAttachments([]);
//   }

//   function handleRemoveAttachment(i: number) {
//     setAttachments((prev) => prev.filter((_, index) => index !== i));
//   }

//   return (
//     <main className="bg-[#FAF9FC] min-h-screen flex flex-col lg:flex-row overflow-hidden">
//       {/* Sidebar */}
//       <div className={`fixed lg:static top-0 left-0 z-50 transition-transform duration-300 bg-white h-full lg:h-auto lg:block w-64 lg:w-auto ${leftNavOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
//         <Sidebar />
//         {/* Mobile-specific TopNav buttons inside Sidebar */}
//         <div className="lg:hidden p-4 space-y-3">
//           <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Dashboard</button>
//           <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Projects</button>
//           <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Settings</button>
//         </div>
//       </div>

//       {/* Mobile sidebar toggle button */}
//       <button
//         onClick={toggleLeftNav}
//         className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md"
//       >
//         <Image src={`/assets/${leftNavOpen ? 'Close' : 'Menu'}.svg`} alt="Menu Toggle" width={24} height={24} />
//       </button>

//       {/* Main Content */}
//       <div className="flex-1 relative z-10 overflow-x-hidden">
//         {/* Top Navbar */}
//         <div className="hidden lg:block">
//           <TopNav />
//         </div>

//         {/* Stepper Bar */}
//         <div
//           className="w-full px-4 sm:px-10 py-4 mt-2 flex justify-center items-center sticky top-[90px] z-30 rounded-xl"
//           style={{
//             background:
//               'linear-gradient(178deg, rgba(255, 255, 255, 0.00) 1.93%, #FFFAFA 30.12%)',
//             backdropFilter: 'blur(22px)',
//           }}
//         >
//           <div className="flex items-center gap-4">
//             <button className="rounded-[24px] bg-[#5598FF] text-white font-medium shadow-md w-[90px] px-4 py-2 text-sm">
//               Website
//             </button>
//             <Image src="/assets/arrow-right.svg" alt="" width={20} height={20} />
//             <button className="rounded-[24px] bg-[#5598FF] text-white font-medium shadow-md w-[90px] px-4 py-2 text-sm">
//               Logo
//             </button>
//             <Image src="/assets/arrow-right.svg" alt="" width={20} height={20} />
//             <Image src="/assets/Add.svg" alt="" width={54} height={54} />
//             <Image src="/assets/arrow-right.svg" alt="" width={20} height={20} />
//           </div>
//         </div>

//         {/* Main Section */}
//         <div className="flex justify-between items-start px-2 sm:px-4 pt-6 relative">
//           {/* Image Preview Section */}
//           <div className="flex-1 mx-auto lg:mx-30 bg-[#f2f2f5] rounded-t-[40px] shadow-sm px-4 sm:px-6 py-15 flex flex-wrap gap-6 sm:gap-8 justify-center min-h-[calc(100vh-190px)] max-w-[95%] transition-all duration-300 relative overflow-hidden">
//             {[1, 2].map((id) => (
//               <div
//                 key={id}
//                 className="w-[280px] sm:w-[320px] h-[240px] sm:h-[260px] bg-white rounded-[20px] shadow-md overflow-hidden"
//               >
//                 <img
//                   src={`https://picsum.photos/seed/preview${id}/600/400`}
//                   alt={`Preview ${id}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}

//             {/* Fullscreen Button */}
//             <div className="absolute bottom-6 -right-2">
//               <button className="w-10 h-10 flex items-center justify-center">
//                 <Image src="/assets/expand.svg" alt="Fullscreen" width={20} height={20} />
//               </button>
//             </div>

//             {/* Right Toolbar (Mobile visible) */}
//             <div className="lg:hidden absolute top-4 right-4 flex flex-col items-end">
//               <button
//                 onClick={toggleTools}
//                 className=""
//               >
//                 <Image src="/assets/ToolSlider.svg" alt="Tools" width={38} height={38} />
//               </button>
//             </div>
//           </div>

//           {/* Right Toolbar */}
//          {/* Right Toolbar */}
// <div className="hidden lg:flex flex-col justify-between items-center fixed top-[90px] right-6 z-40 h-[calc(100vh-110px)]">
//   {/* Top — Slider Button */}
//   <button
//     onClick={toggleTools}
//     className="w-10 h-10 flex items-center justify-center cursor-pointer"
//   >
//     <Image src="/assets/ToolSlider.svg" alt="Toggle Tools" width={74} height={74} />
//   </button>

//   {/* Bottom — Action Icons */}
//   <div className="flex flex-col items-center gap-5 mb-4">
//     <Image src="/assets/export.svg" alt="Export" width={20} height={20} />
//     <Image src="/assets/cloud-upload.svg" alt="Upload" width={20} height={20} />
//     <Image src="/assets/save.svg" alt="Save" width={20} height={20} />
//   </div>
// </div>

//         </div>

//         {/* Prompt Box */}
//         <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
//   <div className="w-full max-w-3xl h-16 bg-white rounded-2xl shadow-md border border-[#E5E7EB] px-6 flex items-center justify-between">
    
//     {/* Left: Search Icon + Placeholder */}
//     <div className="flex items-center flex-1">
//       <Image
//         src="/assets/Search.svg"
//         alt="Search"
//         width={18}
//         height={18}
//         className="mr-2"
//       />
//       <input
//         type="text"
//         placeholder="Write a Prompt here...................."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         className="w-full bg-transparent outline-none text-[#6B7280] placeholder-[#6B7280] placeholder:font-medium placeholder:text-sm"
//       />
//     </div>

//     {/* Right: Attach + Send Icons */}
//     <div className="flex items-center gap-3 ml-3">
//       <label className="cursor-pointer">
//         <Image src="/assets/Link.svg" alt="Attach" width={18} height={18} />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileUpload}
//           className="hidden"
//         />
//       </label>
//       <button onClick={handleSend}>
//         <Image src="/assets/Send.svg" alt="Send" width={18} height={18} />
//       </button>
//     </div>
//   </div>
// </div>


//         {/* Slide-in Tools Panel */}
//         {toolsOpen && (
//   <div className="fixed top-[90px] right-4 w-[300px] h-[calc(100vh-110px)] bg-white shadow-xl z-[100] p-6 rounded-2xl border border-gray-200">
//     <button
//       onClick={toggleTools}
//       className="absolute top-4 right-4 text-[#474C66] text-lg hover:text-red-500"
//     >
//       ✕
//     </button>
//     <h2 className="text-xl font-semibold text-[#474C66] mb-4">Edit Tools</h2>
//     <ul className="space-y-3">
//       <li className="text-[#474C66]">🖊️ Draw</li>
//       <li className="text-[#474C66]">🔤 Text</li>
//       <li className="text-[#474C66]">🎨 Filters</li>
//       <li className="text-[#474C66]">📐 Crop</li>
//     </ul>
//   </div>
// )}

//       </div>
//     </main>
//   );
// }




'use client';

import {
  useState,
  useRef,
  useEffect,
  ChangeEvent,
  MouseEvent,
} from 'react';
import Image from 'next/image';
import TopNav from '@/app/components/TopNavbar';
import Sidebar from '@/app/components/Sidebar';

export default function PreviewEditPage() {
  const [toolsOpen, setToolsOpen] = useState(false);
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  const [input, setInput] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const toggleTools = () => setToolsOpen((prev) => !prev);
  const toggleLeftNav = () => setLeftNavOpen((prev) => !prev);

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const maxHeight = 5 * 24;
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
    }
  }, [input]);

  function handleFileUpload(event: ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    setAttachments((prev) => [...prev, ...Array.from(files)]);
  }

  function handleSend(event: MouseEvent<HTMLButtonElement>) {
    console.log('Send:', { input, attachments });
    setInput('');
    setAttachments([]);
  }

  function handleRemoveAttachment(i: number) {
    setAttachments((prev) => prev.filter((_, index) => index !== i));
  }

  return (
    <main className="bg-[#FAF9FC] min-h-screen flex flex-col lg:flex-row overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 z-50 transition-transform duration-300 bg-white h-full lg:h-auto lg:block w-64 lg:w-auto ${
          leftNavOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <Sidebar />
        {/* Mobile TopNav buttons */}
        <div className="lg:hidden p-4 space-y-3">
          <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Dashboard</button>
          <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Projects</button>
          <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Settings</button>
        </div>
      </div>

      {/* Mobile sidebar toggle */}
      <button
        onClick={toggleLeftNav}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-full shadow-md"
      >
        <Image src={`/assets/${leftNavOpen ? 'Close' : 'Menu'}.svg`} alt="Menu Toggle" width={24} height={24} />
      </button>

      {/* Main Content */}
      <div className="flex-1 relative z-10 overflow-x-hidden">
        {/* Top Navbar */}
        <div className="hidden lg:block">
          <TopNav />
        </div>

        {/* Stepper */}
        <div
          className="w-full px-4 sm:px-10 py-4 mt-2 flex justify-center items-center sticky top-[90px] z-30 rounded-xl"
          style={{
            background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.00) 1.93%, #FFFAFA 30.12%)',
            backdropFilter: 'blur(22px)',
          }}
        >
          <div className="flex items-center gap-4">
            <button className="rounded-[24px] bg-[#5598FF] text-white font-medium shadow-md w-[90px] px-4 py-2 text-sm">
              Website
            </button>
            <Image src="/assets/arrow-right.svg" alt="" width={20} height={20} />
            <button className="rounded-[24px] bg-[#5598FF] text-white font-medium shadow-md w-[90px] px-4 py-2 text-sm">
              Logo
            </button>
            <Image src="/assets/arrow-right.svg" alt="" width={20} height={20} />
            <Image src="/assets/Add.svg" alt="" width={54} height={54} />
            <Image src="/assets/arrow-right.svg" alt="" width={20} height={20} />
          </div>
        </div>

        {/* Main Section */}
        <div className="flex justify-between items-start px-2 sm:px-4 pt-6 relative">
          {/* Image Preview */}
          <div className="flex-1 mx-auto bg-[#f2f2f5] rounded-t-[40px] shadow-sm px-4 sm:px-6 py-15 flex flex-wrap gap-6 sm:gap-8 justify-center min-h-[calc(100vh-190px)] max-w-[95%] relative overflow-hidden">
            {[1, 2].map((id) => (
              <div
                key={id}
                className="w-[280px] sm:w-[320px] h-[240px] sm:h-[260px] bg-white rounded-[20px] shadow-md overflow-hidden"
              >
                <img
                  src={`https://picsum.photos/seed/preview${id}/600/400`}
                  alt={`Preview ${id}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            {/* Fullscreen */}
            <div className="absolute bottom-6 -right-2">
              <button className="w-10 h-10 flex items-center justify-center">
                <Image src="/assets/expand.svg" alt="Fullscreen" width={20} height={20} />
              </button>
            </div>

            {/* Mobile Tool Slider */}
            <div className="lg:hidden absolute top-4 right-4 flex flex-col items-end">
              <button onClick={toggleTools}>
                <Image src="/assets/ToolSlider.svg" alt="Tools" width={38} height={38} />
              </button>
            </div>
          </div>

          {/* Right Toolbar (Desktop) */}
          <div className="hidden lg:flex flex-col justify-between items-center fixed top-[90px] right-6 z-40 h-[calc(100vh-110px)]">
            <button onClick={toggleTools} className="w-10 h-10 flex items-center justify-center cursor-pointer">
              <Image src="/assets/ToolSlider.svg" alt="Toggle Tools" width={74} height={74} />
            </button>
            <div className="flex flex-col items-center gap-5 mb-4">
              <Image src="/assets/export.svg" alt="Export" width={20} height={20} />
              <Image src="/assets/cloud-upload.svg" alt="Upload" width={20} height={20} />
              <Image src="/assets/save.svg" alt="Save" width={20} height={20} />
            </div>
          </div>
        </div>

        {/* Prompt Box */}
        <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4">
          <div className="w-full max-w-3xl h-16 bg-white rounded-2xl shadow-md border border-[#E5E7EB] px-6 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <Image src="/assets/Search.svg" alt="Search" width={18} height={18} className="mr-2" />
              <input
                type="text"
                placeholder="Write a Prompt here...................."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent outline-none text-[#6B7280] placeholder-[#6B7280] placeholder:font-medium placeholder:text-sm"
              />
            </div>
            <div className="flex items-center gap-3 ml-3">
              <label className="cursor-pointer">
                <Image src="/assets/Link.svg" alt="Attach" width={18} height={18} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <button onClick={handleSend}>
                <Image src="/assets/Send.svg" alt="Send" width={18} height={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Slide-in Tools Panel */}
        {toolsOpen && (
          <div className="fixed top-[90px] right-4 w-[300px] h-[calc(100vh-110px)] bg-white shadow-xl z-[100] p-6 rounded-2xl border border-gray-200">
            <button
              onClick={toggleTools}
              className="absolute top-4 right-4 text-[#474C66] text-lg hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold text-[#474C66] mb-4">Edit Tools</h2>
            <ul className="space-y-3">
              <li className="text-[#474C66]">🖊️ Draw</li>
              <li className="text-[#474C66]">🔤 Text</li>
              <li className="text-[#474C66]">🎨 Filters</li>
              <li className="text-[#474C66]">📐 Crop</li>
            </ul>
          </div>
        )}
      </div>
    </main>
  );
}
