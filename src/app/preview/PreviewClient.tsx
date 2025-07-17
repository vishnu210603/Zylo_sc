'use client';
export const dynamic = 'force-dynamic';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TopNav from '@/app/components/TopNavbar';
import Image from 'next/image';
import {
  FaWhatsapp, FaSquareSnapchat, FaXTwitter, FaFacebookF,
  FaTiktok, FaInstagram, FaLinkedinIn
} from 'react-icons/fa6';
import { PiThreadsLogoFill } from 'react-icons/pi';
import { X } from 'lucide-react';

export default function PreviewClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const imageUrl = searchParams.get('images') || '';
  const caption = searchParams.get('caption') || 'Click here to edit your caption ✨';
  const aspect = searchParams.get('aspect') || '1:1';

  const [isEditing, setIsEditing] = useState(false);
  const [captionHtml, setCaptionHtml] = useState(caption);
  const [openPopup, setOpenPopup] = useState<string | null>(null);
  const [showExpandedImage, setShowExpandedImage] = useState(false);
  const [showScheduler, setShowScheduler] = useState(false);
  const [isScheduled, setIsScheduled] = useState(false);
const [scheduledDate, setScheduledDate] = useState<string>('');
const [scheduledTime, setScheduledTime] = useState<string>('');

  const captionRef = useRef<HTMLDivElement>(null);
  const exportRef = useRef<HTMLDivElement>(null);
  const cloudRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (captionRef.current && captionRef.current.innerHTML.trim() === '') {
      captionRef.current.innerHTML = captionHtml;
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        (openPopup === 'export' && exportRef.current && !exportRef.current.contains(e.target as Node)) ||
        (openPopup === 'cloud' && cloudRef.current && !cloudRef.current.contains(e.target as Node))
      ) {
        setOpenPopup(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openPopup]);

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
      <div className="fixed top-0 left-0 right-0 z-50">

        <TopNav />
      </div>

      <div className="hidden lg:flex flex-col justify-between items-center fixed top-[140px] right-6 z-40 h-[calc(100vh-200px)]">
        <button onClick={() => router.push('/designs')} className='cursor-pointer'>
          <Image src="/assets/Button.svg" alt="Back" width={30} height={30} />
        </button>

        <div className="flex flex-col items-center gap-4 mt-6">
          <div className="relative">
            <button onClick={() => setOpenPopup(openPopup === 'export' ? null : 'export')}>
              <Image src="/assets/export.svg" alt="Export" width={30} height={30} className='cursor-pointer' />
            </button>
            {openPopup === 'export' && (
              <div
                ref={exportRef}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-xl p-3 shadow-xl border flex flex-col gap-5 animate-fadeIn z-[9999] w-12 items-center"
              >
                {[{ title: 'WhatsApp', icon: <FaWhatsapp size={22} /> },
                  { title: 'Pinterest', icon: <FaSquareSnapchat size={22} /> },
                  { title: 'Twitter', icon: <FaXTwitter size={22} /> },
                  { title: 'Threads', icon: <PiThreadsLogoFill size={22} /> },
                  { title: 'Facebook', icon: <FaFacebookF size={22} /> },
                  { title: 'Messenger', icon: <FaTiktok size={22} /> },
                  { title: 'Instagram', icon: <FaInstagram size={22} /> },
                  { title: 'LinkedIn', icon: <FaLinkedinIn size={22} className="text-[#0077B5]" /> },
                ].map(({ title, icon }) => (
                  <button
                    key={title}
                    onClick={() => title === 'LinkedIn' && goToForm(title)}
                    disabled={title !== 'LinkedIn'}
                    className={`hover:scale-105 transition-all cursor-pointer ${
                      title !== 'LinkedIn' ? 'text-gray-400 cursor-not-allowed' : ''
                    }`}
                  >
                    {icon}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="relative">
            <button onClick={() => setOpenPopup(openPopup === 'cloud' ? null : 'cloud')} className='cursor-pointer'>
              <Image src="/assets/cloud-upload.svg" alt="Cloud Upload" width={30} height={30} />
            </button>
            {openPopup === 'cloud' && (
              <div
                ref={cloudRef}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-xl border p-2 animate-fadeIn z-[9999] w-12 items-center cursor-pointer"
              >
                <Image src="/resources/gdrive.png" alt="Cloud Upload" width={30} height={30} />
              </div>
            )}
          </div>

          <button onClick={handleSaveImage}>
            <Image src="/assets/Save.svg" alt="Save" width={30} height={30} className='cursor-pointer' />
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-gradient-to-br from-[#e0f7fa] via-[#f5f7ff] to-[#d9e6ff] flex justify-center items-start lg:items-center pt-[120px] lg:pt-0">

        <div className="flex flex-col lg:flex-row items-center gap-4 bg-white p-2 rounded-2xl shadow-xl border">
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

          <div className={`relative ${getAspectClass()} bg-[#f4f6fb] rounded-xl p-4 shadow border flex flex-col justify-between`}>
            <div className="mb-3 text-gray-700 font-medium flex justify-between items-center">
              <span className="font-bold text-gray-900">Caption</span>
              {/* Schedule Post Button */}
              <button
                onClick={() => setShowScheduler(true)}
                className="transition-all hover:scale-105 cursor-pointer"
                title={isScheduled ? 'Edit Schedule' : 'Schedule Post'}
              >
                {isScheduled ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 11l6.586-6.586a2 2 0 012.828 0l.172.172a2 2 0 010 2.828L12 17H9v-3z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
            <div
              ref={captionRef}
              contentEditable
              suppressContentEditableWarning
              className="w-full h-full bg-white rounded-md px-4 py-3 text-sm leading-relaxed text-gray-800 border border-dashed border-[#d0d7e5] focus:outline-none overflow-auto whitespace-pre-wrap break-words"
              onClick={() => setIsEditing(true)}
              onInput={() => setCaptionHtml(captionRef.current?.innerHTML || '')}
              onBlur={() => setIsEditing(false)}
            />
            {isEditing && (
              <div className="mt-4 flex justify-end">
                <button onClick={() => setIsEditing(false)} className="text-sm bg-[#5598FF] text-white px-4 py-2 rounded-md cursor-pointer hover:scale-105">
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Schedule Modal */}
      {showScheduler && (
  <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
    <div className="bg-white p-6 rounded-xl w-full max-w-sm text-black">
      <div className="text-lg font-semibold mb-4 text-center text-black">📅 Schedule Your Post</div>
      
      <input
        type="date"
        className="w-full border p-2 rounded mb-3 text-black"
        value={scheduledDate}
        onChange={(e) => setScheduledDate(e.target.value)}
      />
      <input
        type="time"
        className="w-full border p-2 rounded mb-4 text-black"
        value={scheduledTime}
        onChange={(e) => setScheduledTime(e.target.value)}
      />
      
      <div className="flex justify-end gap-2">
        <button
          onClick={() => setShowScheduler(false)}
          className="text-sm px-3 py-1 rounded hover:bg-gray-100 text-black"
        >
          Cancel
        </button>
        <button
          onClick={() => {
            setShowScheduler(false);
            setIsScheduled(true);
          }}
          className="text-sm px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </div>
  </div>
)}


      {showExpandedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur">
          <button onClick={() => setShowExpandedImage(false)} className="absolute top-7 right-10 z-50 bg-white rounded-full p-2 shadow text-black cursor-pointer">
            <X size={28} />
          </button>
          <div className="relative z-40" style={{
            height: '80vh',
            aspectRatio: getAspectRatio(),
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
    </main>
  );
}