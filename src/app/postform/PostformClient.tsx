'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Eye, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const popupVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
  exit: {
    opacity: 0,
    scale: 0.9,
    y: 30,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
  },
};

export default function PostFormPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const platform = decodeURIComponent(searchParams.get('platform') || 'Platform');
  const image = decodeURIComponent(searchParams.get('image') || '');
  const caption = decodeURIComponent(searchParams.get('caption') || '');

  const [description] = useState(caption || '');
  const [tags] = useState('');
  const [linkedin] = useState('');
  const [confirmPost, setConfirmPost] = useState(false);

  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [suggestions, setSuggestions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!confirmPost) return;
    setShowFeedback(true);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4">
      <AnimatePresence mode="wait">
        {!showFeedback && (
          <motion.div
            key="post-form"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white max-w-md w-full rounded-2xl shadow-xl px-6 py-6 relative"
          >
            <button onClick={() => router.back()} className="absolute top-4 right-4 text-gray-400 hover:text-black cursor-pointer">
              <X />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#0077B5] rounded-md p-1.5">
                <Image src="/resources/LinkedIn-logo.png" alt="LinkedIn" width={50} height={50} />
              </div>
              <h1 className="text-2xl font-semibold text-gray-900">LinkedIn</h1>
            </div>
            <p className="text-gray-500 text-sm mb-6">Please enter your details to continue</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client ID</label>
                <div className="relative">
                  <input
                    type="password"
                    value="86frwq********"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-400 bg-gray-50 cursor-pointer"
                    
                  />
                  <Eye className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 cursor-pointer" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Client Secret</label>
                <div className="relative">
                  <input
                    type="password"
                    value="API Key"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-400 bg-gray-50 cursor-pointer"
                    
                  />
                  <Eye className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 cursor-pointer" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">OAuth Redirect URL</label>
                <div className="relative">
                  <input
                    type="text"
                    value="https://oauth.n8n********"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-400 bg-gray-50 "
                    
                  />
                  <Eye className="absolute right-3 top-2.5 text-gray-400 h-5 w-5 cursor-pointer" />
                </div>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="confirm-post"
                  checked={confirmPost}
                  onChange={(e) => setConfirmPost(e.target.checked)}
                  className="accent-[#0063F7] w-4 h-4 cursor-pointer"
                  required
                />
                <label htmlFor="confirm-post" className="text-sm text-gray-700">
                  Are you sure you want to post?
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#5598FF] hover:bg-[#347fe0] text-white rounded-md font-medium transition text-sm cursor-pointer"
              >
                Post
              </button>
            </form>
          </motion.div>
        )}

        {showFeedback && (
          <motion.div
            key="feedback-form"
            variants={popupVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white max-w-lg w-full rounded-2xl shadow-xl px-6 py-6 relative"
          >
            <button onClick={() => setShowFeedback(false)} className="absolute top-4 right-4 text-gray-400 hover:text-black">
              <X />
            </button>

            <div className="flex flex-col items-center mb-6">
              <div className="relative w-20 h-20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full rounded-full border-[6px] border-green-400 border-t-green-600 animate-spin-slow"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-md">
                  <svg
                    className="w-10 h-10 text-green-600 animate-draw-reset"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 13l4 4L19 7" className="check-path" />
                  </svg>
                </div>
              </div>

              <h2 className="text-xl font-bold text-gray-800 mt-4">Thank you for posting!</h2>
              <p className="text-[#0063F7] text-sm font-medium mt-1 animate-pulse">
                We’d love your feedback ✨
              </p>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="flex flex-col gap-4 mt-2" noValidate>
              <div>
                <label className="text-sm font-medium text-gray-700">What did you like?</label>
                <textarea
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  defaultValue=" "
                  className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="The design, speed, ease of use..."
                  required={false}
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">Any suggestions?</label>
                <textarea
                  value={suggestions}
                  onChange={(e) => setSuggestions(e.target.value)}
                  className="w-full px-4 py-2 text-gray-500 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Add more export options, improve editor..."
                  required={false}
                  />
              </div>

              <button
                type="submit"
                className="w-full py-2 bg-[#5598FF] hover:bg-[#347fe0] text-white rounded-md font-medium transition"
              >
                Submit Feedback
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
