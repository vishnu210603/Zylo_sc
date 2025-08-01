'use client';

import { useState, useRef, useEffect } from 'react';
import { ArrowUp, X, ChevronDown, PaperclipIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PromptBoxProps {
  onSubmit: (input: string, attachments: File[], aspectRatio: string) => void;
}

const aspectRatios = [
  { value: '1:1', label: 'Instagram Square (1:1)' },
  { value: '2:3', label: 'Vertical Post' },
  { value: '3:2', label: 'Horizontal Post' },
];

const PromptBox = ({ onSubmit }: PromptBoxProps) => {
  const [input, setInput] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);
  const [aspectRatio, setAspectRatio] = useState(aspectRatios[0].value);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 90)}px`;
    }
  }, [input]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const handleSend = () => {
    if (input.trim() === '' && attachments.length === 0) return;
    onSubmit(input, attachments, aspectRatio);
    setInput('');
    setAttachments([]);
    router.push(`/designs?aspect=${encodeURIComponent(aspectRatio)}`);
  };

  const isSendDisabled = input.trim() === '' && attachments.length === 0;

  return (
    <div className="relative z-10 w-full max-w-3xl bg-white border border-gray-200 rounded-2xl px-3 py-2 shadow-sm">
      {/* Prompt Input */}
      <textarea
        ref={textAreaRef}
        rows={1}
        placeholder="Enter the prompt. Upload the reference image"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full resize-none overflow-hidden text-sm bg-transparent outline-none text-gray-800 placeholder:text-gray-400 px-2 py-1 rounded-md"
      />

      {/* Bottom Controls */}
      <div className="flex items-center justify-between mt-2">
        {/* Left: Dropdown */}
        <div className="relative z-10" ref={dropdownRef}>
          <button
            type="button"
            className="flex items-center justify-between gap-1 text-xs border border-gray-300 rounded-md px-3 py-[6px] bg-white text-gray-700 focus:outline-none w-full max-w-[140px]"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>{aspectRatio}</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </button>

          {dropdownOpen && (
            <ul className="absolute top-full left-0 mt-1 w-full text-black bg-white border border-gray-300 rounded-md shadow-lg z-50">
              {aspectRatios.map((ratio) => {
                const isSelected = ratio.value === aspectRatio;
                return (
                  <li
                    key={ratio.value}
                    className={`px-4 py-1 text-sm cursor-pointer relative hover:bg-gray-100 rounded-sm ${
                      isSelected
                        ? 'bg-gradient-to-br from-[#73DFE7] to-[#0063F7] text-white hover:bg-blue-700'
                        : ''
                    }`}
                    onClick={() => {
                      setAspectRatio(ratio.value);
                      setDropdownOpen(false);
                    }}
                    onMouseEnter={() => setHoveredItem(ratio.value)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {ratio.value}
                    {hoveredItem === ratio.value && ratio.label !== ratio.value && (
                      <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow z-50 whitespace-nowrap">
                        {ratio.label}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Right: Upload + Send */}
        <div className="flex items-center gap-2 relative z-10">
          <label className="cursor-pointer flex items-center justify-center w-9 h-9 border-gray-300 rounded-full hover:bg-gray-100">
            <PaperclipIcon className="w-4 h-4 text-gray-600" />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>

          <button
            onClick={handleSend}
            disabled={isSendDisabled}
            className={`flex items-center justify-center h-9 w-9 rounded-full transition 
              ${
                isSendDisabled
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gradient-to-br from-[#73DFE7] to-[#0063F7] hover:opacity-90 cursor-pointer'
              }`}
          >
            <ArrowUp
              className={`w-4 h-4 ${
                isSendDisabled ? 'text-gray-500' : 'text-white'
              }`}
            />
          </button>
        </div>
      </div>

      {/* Image Previews */}
      {attachments.length > 0 && (
        <div className="flex gap-5 flex-wrap mt-2 z-0 relative">
          {attachments.map((file, i) => (
            <div
              key={i}
              className="relative w-[83px] h-[83px] rounded-2xl overflow-visible z-10"
            >
              <img
                src={URL.createObjectURL(file)}
                alt={`attachment-${i}`}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
              <button
                type="button"
                onClick={() => handleRemoveAttachment(i)}
                className="absolute top-[-4px] right-[-4px] bg-red-500 cursor-pointer rounded-full w-5 h-5 flex items-center justify-center z-[999]"
              >
                <X className="w-3.5 h-3.5 text-white" strokeWidth={3} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromptBox;
