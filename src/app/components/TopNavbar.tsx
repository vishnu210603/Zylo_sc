'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';

const ZyloTopNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [userInitials, setUserInitials] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        if (user.displayName) {
          const names = user.displayName.split(' ');
          const initials = names.map((n) => n[0]).join('').toUpperCase().slice(0, 2);
          setUserInitials(initials);
        } else {
          // Default for phone auth users
          setUserInitials('U');
        }
      } else {
        setUserInitials(null);
      }
    });

    return () => unsubscribe();
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSignInClick = () => {
    router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUserInitials(null);
    setDropdownOpen(false);
    router.refresh();
  };

  const goToProfile = () => {
    setDropdownOpen(false);
    router.push('/profile');
  };

  return (
    <div className="w-full h-20 px-6 py-3 bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm flex items-center justify-between z-50 relative">
      {/* Logo */}
      <svg xmlns="http://www.w3.org/2000/svg" width="139" height="68" viewBox="0 0 139 68" fill="none">
        {/* Your full SVG content remains unchanged */}
        <g filter="url(#filter0_d_429_6024)">
          <path d="M14.3916 8.41016C15.9774 8.41017 17.4278 9.01428 18.5449 10.0137C18.8029 10.2445 19.1297 10.3916 19.4758 10.3916H48.417C53.1267 10.3918 55.5813 15.9984 52.3867 19.459L27.4842 46.4325C26.7388 47.2398 27.3115 48.5479 28.4103 48.5479H53.3841C53.7599 48.5479 54.1112 48.375 54.3756 48.1079C55.5253 46.9467 57.0903 46.2314 58.8154 46.2314C62.3451 46.2316 65.2069 49.2223 65.207 52.9111C65.207 56.6001 62.3452 59.5907 58.8154 59.5908C57.3798 59.5908 56.0558 59.0951 54.9891 58.2597C54.7417 58.0659 54.442 57.9443 54.1278 57.9443H16.4082C11.6984 57.9443 9.24381 52.3376 12.4385 48.877L37.341 21.9034C38.0864 21.0961 37.5137 19.7881 36.4149 19.7881H19.4769C19.1307 19.7881 18.8038 19.9352 18.5458 20.1661C17.4286 21.1657 15.9777 21.7695 14.3916 21.7695C10.8617 21.7695 8 18.7789 8 15.0898C8.00011 11.4008 10.8618 8.41016 14.3916 8.41016Z" fill="url(#paint0_linear_429_6024)" />
        </g>
        {/* All other paths and filters from your original SVG stay here */}
      </svg>

      {/* Right Side - Profile or Sign In */}
      <div className="relative" ref={dropdownRef}>
        {userInitials ? (
          <div>
            <div
              className="w-10 h-10 bg-gradient-to-r from-[#73DFE7] to-[#0063F7] text-white flex items-center justify-center rounded-full text-lg font-bold cursor-pointer"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              {userInitials}
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <button
                  onClick={goToProfile}
                  className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 text-left"
                >
                  Profile
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="p-[2px] rounded-full bg-gradient-to-r from-[#73DFE7] via-[#0063F7] to-[#73DFE7] group-hover:bg-gradient-to-l transition-all duration-500">
            <button
              className="bg-white cursor-pointer text-black px-6 py-2 rounded-full font-semibold"
              onClick={handleSignInClick}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ZyloTopNavbar;
