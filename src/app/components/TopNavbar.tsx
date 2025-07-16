'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import Image from 'next/image';
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
      <Image src='/assets/Zylo.svg' alt='' width={123} height={51}/>

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
