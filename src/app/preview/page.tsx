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
//     const files = event.target.files;
//     if (!files || files.length === 0) return;
//     setAttachments((prev) => [...prev, ...Array.from(files)]);
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
//       <div
//         className={`fixed lg:static top-0 left-0 z-50 transition-transform duration-300 bg-white h-full lg:h-auto lg:block w-64 lg:w-auto ${
//           leftNavOpen ? 'translate-x-0' : '-translate-x-full'
//         } lg:translate-x-0`}
//       >
//         <Sidebar />
//         {/* Mobile TopNav buttons */}
//         <div className="lg:hidden p-4 space-y-3">
//           <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Dashboard</button>
//           <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Projects</button>
//           <button className="w-full py-2 px-4 bg-[#5598FF] text-white rounded-lg">Settings</button>
//         </div>
//       </div>

//       {/* Mobile sidebar toggle */}
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

//         {/* Stepper */}
//         <div
//           className="w-full px-4 sm:px-10 py-4 flex justify-center items-center sticky top-[90px] z-30 rounded-xl"
//           style={{
//             background: 'linear-gradient(178deg, rgba(255, 255, 255, 0.00) 1.93%, #FFFAFA 30.12%)',
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
//         <div className="flex justify-between items-start px-2 sm:px-4 relative">
//           {/* Image Preview */}
//           <div className="flex-1 mx-18 ml-50 bg-[#f2f2f5] rounded-t-4 shadow-sm px-4 sm:px-6 py-15 flex flex-wrap gap-6 sm:gap-8 justify-center min-h-[calc(100vh-190px)] max-w-[95%] relative overflow-hidden">
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

//             {/* Fullscreen */}
//             <div className="absolute bottom-6 -right-2">
//               <button className="w-10 h-10 flex items-center justify-center">
//                 <Image src="/assets/expand.svg" alt="Fullscreen" width={20} height={20} />
//               </button>
//             </div>

//             {/* Mobile Tool Slider */}
//             <div className="lg:hidden absolute top-4 right-4 flex flex-col items-end">
//               <button onClick={toggleTools}>
//                 <Image src="/assets/Slider.svg" alt="Tools" width={74} height={74} />
//               </button>
//             </div>
//           </div>

//           {/* Right Toolbar (Desktop) */}
//           <div className="hidden lg:flex flex-col justify-between items-center fixed top-[90px] right-6 z-40 h-[calc(100vh-110px)]">
//             <button onClick={toggleTools} className="w-10 h-10 flex items-center justify-center cursor-pointer">
//               <Image src="/assets/ToolSlider.svg" alt="Toggle Tools" width={74} height={74} />
//             </button>
//             <div className="flex flex-col items-center gap-5 ml-10 mb-4">
//               <Image src="/assets/export.svg" alt="Export" width={20} height={20} />
//               <Image src="/assets/cloud-upload.svg" alt="Upload" width={20} height={20} />
//               <Image src="/assets/save.svg" alt="Save" width={20} height={20} />
//             </div>
//           </div>
//         </div>

//         {/* Prompt Box */}
//         <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-center px-4 ml-30">
//           <div className="w-full max-w-3xl h-16 bg-white rounded-2xl shadow-md border border-[#E5E7EB] px-6 flex items-center justify-between">
//             <div className="flex items-center flex-1">
//               <Image src="/assets/Search.svg" alt="Search" width={18} height={18} className="mr-2" />
//               <input
//                 type="text"
//                 placeholder="Write a Prompt here...................."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//                 className="w-full bg-transparent outline-none text-[#6B7280] placeholder-[#6B7280] placeholder:font-medium placeholder:text-sm"
//               />
//             </div>
//             <div className="flex items-center gap-3 ml-3">
//               <label className="cursor-pointer">
//                 <Image src="/assets/Link.svg" alt="Attach" width={18} height={18} />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleFileUpload}
//                   className="hidden"
//                 />
//               </label>
//               <button onClick={handleSend}>
//                 <Image src="/assets/Send.svg" alt="Send" width={18} height={18} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Slide-in Tools Panel */}
//         {toolsOpen && (
//           <div className="fixed top-[90px] right-4 w-[300px] h-[calc(100vh-110px)] bg-white shadow-xl z-[100] p-6 rounded-2xl border border-gray-200">
//             <button
//               onClick={toggleTools}
//               className="absolute top-4 right-4 text-[#474C66] text-lg hover:text-red-500"
//             >
//               ✕
//             </button>
//             <h2 className="text-xl font-semibold text-[#474C66] mb-4">Edit Tools</h2>
//             <ul className="space-y-3">
//               <li className="text-[#474C66]">🖊️ Draw</li>
//               <li className="text-[#474C66]">🔤 Text</li>
//               <li className="text-[#474C66]">🎨 Filters</li>
//               <li className="text-[#474C66]">📐 Crop</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </main>
//   );
// }





'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import TopNav from '@/app/components/TopNavbar';
import Sidebar from '@/app/components/Sidebar';
import Image from 'next/image';
import { 
  Search, 
  Paperclip, 
  Send, 
  X, 
  Maximize, 
  ArrowRight,
  Plus,
  Sliders,
  Settings,
  RotateCw,
  Crop,
  Type,
  Palette
} from 'lucide-react';

export default function PreviewEditPage() {
  const route = useRouter();
  const [toolsOpen, setToolsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [activeStep, setActiveStep] = useState('Website');
  const [showBrandKit, setShowBrandKit] = useState(false);
  const [showMobileTools, setShowMobileTools] = useState(false);
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [imageFilters, setImageFilters] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    sepia: 0,
    hueRotate: 0
  });
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const sampleImages = [
    'https://picsum.photos/seed/preview1/600/400',
    'https://picsum.photos/seed/preview2/600/400',
  ];

  const tools = [
    { id: 'filters', name: 'Filters', icon: <Palette size={20} /> },
    { id: 'text', name: 'Text', icon: <Type size={20} /> },
    { id: 'crop', name: 'Crop', icon: <Crop size={20} /> },
    { id: 'rotate', name: 'Rotate', icon: <RotateCw size={20} /> },
  ];
  

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      const maxHeight = 5 * 24;
      textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + 'px';
    }
  }, [input]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    setAttachments((prev) => [...prev, ...Array.from(files)]);
  };

  const handleSend = () => {
    console.log('Send:', { input, attachments });
    setInput('');
    setAttachments([]);
  };

  const handleRemoveAttachment = (i: number) => {
    setAttachments((prev) => prev.filter((_, index) => index !== i));
  };

  const handleToolSelect = (toolId: string) => {
    setSelectedTool(toolId);
  };

  const applyFilter = (filterType: string, value: number) => {
    setImageFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const getFilterStyle = (imageIndex: number) => {
    if (selectedImageIndex !== imageIndex) return {};
    
    return {
      filter: `
        brightness(${imageFilters.brightness}%) 
        contrast(${imageFilters.contrast}%) 
        saturate(${imageFilters.saturation}%) 
        blur(${imageFilters.blur}px) 
        sepia(${imageFilters.sepia}%) 
        hue-rotate(${imageFilters.hueRotate}deg)
      `
    };
  };

  return (
    <main className="bg-[#FAF9FC] min-h-screen">
      {/* Desktop View */}
      <div className="hidden md:block">
        <div className="fixed top-0 z-40 w-full">
          <TopNav />
        </div>
        <Sidebar />

        {/* Desktop Stepper */}
        <div className="fixed top-22.5 left-0 right-0 z-0 px-4 sm:px-10 py-2 flex justify-center items-center bg-white/80 backdrop-blur-[22px] border-b border-gray-100">
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
            <Image src='./assets/arrow-right.svg' alt='' width={55} height={55}/>
          </div>
        </div>

        {/* Desktop Main Content - Prevent scroll up with min-height */}
        <div className="pl-56 pr-28 pt-[180px]">
          <div className="bg-[#f2f2f5] rounded-2xl shadow-sm px-6 py-8 min-h-[calc(100vh-180px)] relative bottom-0">
            <div className="flex flex-wrap gap-8 justify-center">
              {sampleImages.map((img, id) => (
                <div
                  key={id}
                  className={`w-[320px] h-[260px] bg-white rounded-[20px] shadow-md overflow-hidden cursor-pointer border-2 ${
                    selectedImageIndex === id ? 'border-[#5598FF]' : 'border-transparent'
                  }`}
                  onClick={() => setSelectedImageIndex(selectedImageIndex === id ? null : id)}
                >
                  <img
                    src={img}
                    alt={`Preview ${id}`}
                    className="w-full h-full object-cover transition-all duration-300"
                    style={getFilterStyle(id)}
                  />
                </div>
              ))}
            </div>

            <button className="absolute bottom-6 right-0 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-lg">
              <Image src='./assets/expand.svg' alt='' width={30} height={30}/>
            </button>
          </div>
        </div>

        {/* Desktop Right Toolbar */}
        <div className="hidden lg:flex flex-col justify-between items-center fixed top-[180px] right-6 z-40 h-[calc(100vh-200px)]">
          <button 
            onClick={() => setToolsOpen(!toolsOpen)} 
            className=""
          >
            <Image src='./assets/Button.svg' alt='' width={30} height={30}/>
          </button>
          
          <div className="flex flex-col items-center gap-5 mb-4">
            <button className="">
              <Image src='./assets/export.svg' alt='' width={30} height={30}/>
            </button>
            <button className="">
              <Image src='./assets/cloud-upload.svg' alt='' width={30} height={30}/>
            </button>
            <button className="">
              <Image src='./assets/Save.svg' alt='' width={30} height={30}/>
            </button>
          </div>
        </div>

        {/* Desktop Tools Panel */}
        {toolsOpen && (
          <div className="fixed top-[180px] right-20 w-[350px] h-[calc(100vh-200px)] bg-white shadow-xl z-[100] p-6 rounded-2xl border border-gray-200">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-[#474C66]">Edit Tools</h2>
              <button
                onClick={() => setToolsOpen(false)}
                className="text-gray-500 hover:text-red-500"
              >
                <Image src='./assets/Cross.svg' alt='' width={20} height={20}/>
              </button>
            </div>
            
            <div className="space-y-3 mb-6">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => handleToolSelect(tool.id)}
                  className={`w-full flex items-center gap-3 p-3 text-black rounded-lg text-left transition ${
                    selectedTool === tool.id ? 'bg-[#5598FF] text-white' : 'hover:bg-gray-100'
                  }`}
                >
                  {tool.icon}
                  <span>{tool.name}</span>
                </button>
              ))}
            </div>

            {/* Filter Controls */}
            {selectedTool === 'filters' && selectedImageIndex !== null && (
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-700">Filter Controls</h3>
                {Object.entries(imageFilters).map(([filter, value]) => (
                  <div key={filter} className="space-y-2 text-black">
                    <label className="text-sm text-black capitalize">{filter}</label>
                    <input
                      type="range"
                      min={filter === 'blur' ? 0 : filter === 'hueRotate' ? 0 : 0}
                      max={filter === 'blur' ? 10 : filter === 'hueRotate' ? 360 : 200}
                      value={value}
                      onChange={(e) => applyFilter(filter, parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 text-black rounded-lg appearance-none cursor-pointer"
                    />
                    <span className="text-xs text-gray-500">{value}{filter === 'hueRotate' ? '°' : filter === 'blur' ? 'px' : '%'}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Desktop Prompt Box */}
        <div className="fixed bottom-4 left-56 right-4 z-50 flex justify-center">
          <div className="w-full max-w-3xl h-16 bg-white rounded-2xl shadow-md border border-[#E5E7EB] px-6 flex items-center justify-between">
            <div className="flex items-center flex-1">
              <Image src='./assets/Search.svg' alt='' width={20} height={20}/>
              <input
                type="text"
                placeholder="Write a Prompt here...................."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full bg-transparent outline-none text-[#6B7280] placeholder-[#6B7280] placeholder:font-medium placeholder:text-sm ml-2"
              />
            </div>
            <div className="flex items-center gap-3 ml-3">
              <label className="cursor-pointer">
                <Paperclip size={18} className="text-gray-400" />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <button onClick={handleSend}>
                <Image src='./assets/Send.svg' alt='' width={20} height={20}/>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <TopNav />
        
        {/* Mobile Single Image View */}
        <div className="p-4 mt-20">
          <div
            className={`w-full aspect-[4/3] bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer border-2 ${
              selectedImageIndex === 0 ? 'border-[#5598FF]' : 'border-transparent'
            }`}
            onClick={() => setSelectedImageIndex(selectedImageIndex === 0 ? null : 0)}
          >
            <img
              src={sampleImages[0]}
              alt="Preview"
              className="w-full h-full object-cover transition-all duration-300"
              style={getFilterStyle(0)}
            />
          </div>
        </div>

        {/* Mobile Prompt Box with Tools Button */}
        <div className="fixed bottom-4 left-4 right-4 z-50">
          <div className="bg-white rounded-2xl shadow-md border border-[#E5E7EB] px-4 py-3 flex items-center gap-3">
            <Search size={16} className="text-gray-400" />
            <input
              type="text"
              placeholder="Write a Prompt here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-sm"
            />
            <label className="cursor-pointer">
              <Paperclip size={16} className="text-gray-400" />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            {!showMobileTools && (
              <button 
                onClick={() => setShowMobileTools(true)}
                className="p-1"
              >
                <Settings size={16} className="text-[#5598FF]" />
              </button>
            )}
            <button onClick={handleSend}>
              <Image src='./assets/Send.svg' alt='' width={15} height={15}/>
            </button>
          </div>
        </div>

        {/* Mobile Tools Popup - Redesigned */}
        {showMobileTools && (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t rounded-t-3xl p-4">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-lg font-semibold text-black">Tools</h3>
      <button
        onClick={() => setShowMobileTools(false)}
        className="w-8 h-8 flex items-center justify-center rounded-full text-black bg-gray-200"
      >
        <X size={16} />
      </button>
    </div>

    <div className="grid grid-cols-4 gap-2">
      {tools.map((tool) => (
        <div key={tool.id} className="flex flex-col items-center">
          <button
            onClick={() => handleToolSelect(tool.id)}
            className={`w-full flex flex-col items-center justify-center gap-1 px-2 py-2 rounded-xl transition ${
              selectedTool === tool.id
                ? 'bg-gradient-to-r from-[#5598FF] to-[#7EB1FF] text-black'
                : 'bg-gray-100 text-black'
            }`}
          >
            {tool.icon}
            <span className="text-xs font-medium">{tool.name}</span>
          </button>

          {/* Show filter sliders directly below the selected tool */}
          {selectedTool === tool.id && tool.id === 'filters' && selectedImageIndex !== null && (
  <div className="mt-4 w-full">
    <h4 className="text-sm font-semibold text-gray-700 mb-2">Adjustments</h4>
    <div className="space-y-5">
      {Object.entries(imageFilters).map(([filter, value]) => (
        <div key={filter} className="w-full">
          <div className="flex justify-between text-sm text-gray-600 mb-1">
            <span className="capitalize">{filter}</span>
            <span className="font-medium">
              {value}
              {filter === 'hueRotate' ? '°' : filter === 'blur' ? 'px' : '%'}
            </span>
          </div>
          <input
            type="range"
            min={filter === 'blur' ? 0 : filter === 'hueRotate' ? 0 : 0}
            max={filter === 'blur' ? 10 : filter === 'hueRotate' ? 360 : 200}
            value={value}
            onChange={(e) => applyFilter(filter, parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#5598FF]"
          />
        </div>
      ))}
    </div>
  </div>
)}

        </div>
      ))}
    </div>
  </div>
)}

      </div>
    </main>
  );
}
