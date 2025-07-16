// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { onAuthStateChanged, signOut, User } from 'firebase/auth';
// import { auth } from '@/app/lib/firebase';
// import Image from 'next/image';
// const ZyloTopNavbar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [userInitials, setUserInitials] = useState<string | null>(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
//       if (user) {
//         if (user.displayName) {
//           const names = user.displayName.split(' ');
//           const initials = names.map((n) => n[0]).join('').toUpperCase().slice(0, 2);
//           setUserInitials(initials);
//         } else {
//           // Default for phone auth users
//           setUserInitials('U');
//         }
//       } else {
//         setUserInitials(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleSignInClick = () => {
//     router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUserInitials(null);
//     setDropdownOpen(false);
//     router.refresh();
//   };

//   const goToProfile = () => {
//     setDropdownOpen(false);
//     router.push('/profile');
//   };

//   return (
//     <div className="w-full h-20 px-6 py-3 bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm flex items-center justify-between z-50 relative">
//       {/* Logo */}
//       <Image src='/assets/Zylo.svg' alt='' width={123} height={51}/>

//       {/* Right Side - Profile or Sign In */}
//       <div className="relative" ref={dropdownRef}>
//         {userInitials ? (
//           <div>
//             <div
//               className="w-10 h-10 bg-gradient-to-r from-[#73DFE7] to-[#0063F7] text-white flex items-center justify-center rounded-full text-lg font-bold cursor-pointer"
//               onClick={() => setDropdownOpen((prev) => !prev)}
//             >
//               {userInitials}
//             </div>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <button
//                   onClick={goToProfile}
//                   className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 text-left"
//                 >
//                   Profile
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="p-[2px] rounded-full bg-gradient-to-r from-[#73DFE7] via-[#0063F7] to-[#73DFE7] group-hover:bg-gradient-to-l transition-all duration-500">
//             <button
//               className="bg-white cursor-pointer text-black px-6 py-2 rounded-full font-semibold"
//               onClick={handleSignInClick}
//             >
//               Sign In
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ZyloTopNavbar;




// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { onAuthStateChanged, signOut, User } from 'firebase/auth';
// import { auth } from '@/app/lib/firebase';
// import Image from 'next/image';

// const ZyloTopNavbar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [userInitials, setUserInitials] = useState<string | null>(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
//       if (user) {
//         if (user.displayName) {
//           const names = user.displayName.split(' ');
//           const initials = names.map((n) => n[0]).join('').toUpperCase().slice(0, 2);
//           setUserInitials(initials);
//         } else {
//           setUserInitials('U');
//         }
//       } else {
//         setUserInitials(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleSignInClick = () => {
//     router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUserInitials(null);
//     setDropdownOpen(false);
//     router.refresh();
//   };

//   const goToProfile = () => {
//     setDropdownOpen(false);
//     router.push('/profile');
//   };

//   return (
//     <div className="w-full h-20 px-2 lg:px-6 py-3 bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm flex items-center justify-between z-50 relative">
//       {/* Logo (moved slightly more to left by reducing padding) */}
//       <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} />

//       {/* Right Section */}
//       <div className="flex items-center gap-1 relative" ref={dropdownRef}>
//         {/* Mobile Navbar Icon (only mobile) */}
    
//         {/* Authenticated User Circle OR Sign In Icon */}
//         {userInitials ? (
//           <div>
//             <div
//               className="w-10 h-10 bg-gradient-to-r from-[#73DFE7] to-[#0063F7] text-white flex items-center justify-center rounded-full text-lg font-bold cursor-pointer"
//               onClick={() => setDropdownOpen((prev) => !prev)}
//             >
//               {userInitials}
//             </div>

//             {dropdownOpen && (
//               <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                 <button
//                   onClick={goToProfile}
//                   className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 text-left"
//                 >
//                   Profile
//                 </button>
//                 <button
//                   onClick={handleLogout}
//                   className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
//                 >
//                   Logout
//                 </button>
//               </div>
//             )}
//           </div>
//         ) : (
//           <>
//             {/* Mobile Sign In Icon */}
//             <button
//               onClick={handleSignInClick}
//               className="block lg:hidden w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center"
//               aria-label="Sign In"
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-6 w-6 text-white"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 strokeWidth={2}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.8 4.121 2.062M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//             </button>

//             {/* Desktop Sign In Button */}
//             <div className="hidden lg:block p-[2px] rounded-full bg-gradient-to-r from-[#73DFE7] via-[#0063F7] to-[#73DFE7]">
//               <button
//                 className="bg-white cursor-pointer text-black px-6 py-2 rounded-full font-semibold"
//                 onClick={handleSignInClick}
//               >
//                 Sign In
//               </button>
//             </div>
//           </>
//         )}

//          <button className="block lg:hidden w-10 h-10 rounded-full flex items-center justify-center" aria-label="Menu">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 text-gray-700"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ZyloTopNavbar;




// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { useRouter, usePathname } from 'next/navigation';
// import { onAuthStateChanged, signOut, User } from 'firebase/auth';
// import { auth } from '@/app/lib/firebase';
// import Image from 'next/image';
// import {
//   FaWhatsapp, FaPinterestP, FaXTwitter, FaFacebookF,
//   FaFacebookMessenger, FaInstagram, FaLinkedinIn
// } from 'react-icons/fa6';
// import { PiThreadsLogoFill } from 'react-icons/pi';

// const ZyloTopNavbar = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [userInitials, setUserInitials] = useState<string | null>(null);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [shareOpen, setShareOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
//       if (user) {
//         if (user.displayName) {
//           const names = user.displayName.split(' ');
//           const initials = names.map((n) => n[0]).join('').toUpperCase().slice(0, 2);
//           setUserInitials(initials);
//         } else {
//           setUserInitials('U');
//         }
//       } else {
//         setUserInitials(null);
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleSignInClick = () => {
//     router.push(`/login?redirect=${encodeURIComponent(pathname)}`);
//   };

//   const handleLogout = async () => {
//     await signOut(auth);
//     setUserInitials(null);
//     setDropdownOpen(false);
//     router.refresh();
//   };

//   const goToProfile = () => {
//     setDropdownOpen(false);
//     router.push('/profile');
//   };

//   const goToForm = (platform: string) => {
//     const imageUrl = '';
//     const captionHtml = '';
//     router.push(`/postform?platform=${encodeURIComponent(platform)}&image=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(captionHtml)}`);
//   };

//   return (
//     <>
//       <div className="w-full h-20 px-2 lg:px-6 py-3 bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm flex items-center justify-between z-50 relative">
//         <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} />

//         <div className="flex items-center gap-1 relative" ref={dropdownRef}>
//           {userInitials ? (
//             <div>
//               <div
//                 className="w-10 h-10 bg-gradient-to-r from-[#73DFE7] to-[#0063F7] text-white flex items-center justify-center rounded-full text-lg font-bold cursor-pointer"
//                 onClick={() => setDropdownOpen((prev) => !prev)}
//               >
//                 {userInitials}
//               </div>
//               {dropdownOpen && (
//                 <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-md shadow-lg z-50">
//                   <button onClick={goToProfile} className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 text-left">
//                     Profile
//                   </button>
//                   <button onClick={handleLogout} className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left">
//                     Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <>
//               <button onClick={handleSignInClick} className="block lg:hidden w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center" aria-label="Sign In">
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.8 4.121 2.062M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                 </svg>
//               </button>
//               <div className="hidden lg:block p-[2px] rounded-full bg-gradient-to-r from-[#73DFE7] via-[#0063F7] to-[#73DFE7]">
//                 <button className="bg-white cursor-pointer text-black px-6 py-2 rounded-full font-semibold" onClick={handleSignInClick}>
//                   Sign In
//                 </button>
//               </div>
//             </>
//           )}

//           <button onClick={() => setShareOpen(true)} className="block lg:hidden w-10 h-10 rounded-full flex items-center justify-center" aria-label="Menu">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
//               <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {shareOpen && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-end lg:hidden">
//           <div className="w-full bg-white p-4 rounded-t-xl shadow-xl">
//             <div className="flex justify-between items-center mb-4">
//               <span className="text-lg font-semibold">Share</span>
//               <button onClick={() => setShareOpen(false)} className="text-gray-600">✕</button>
//             </div>
//             <div className="grid grid-cols-4 gap-4 text-gray-700">
//               {[{ title: 'WhatsApp', icon: <FaWhatsapp size={24} /> },
//                 { title: 'Pinterest', icon: <FaPinterestP size={24} /> },
//                 { title: 'Twitter', icon: <FaXTwitter size={24} /> },
//                 { title: 'Threads', icon: <PiThreadsLogoFill size={24} /> },
//                 { title: 'Facebook', icon: <FaFacebookF size={24} /> },
//                 { title: 'Messenger', icon: <FaFacebookMessenger size={24} /> },
//                 { title: 'Instagram', icon: <FaInstagram size={24} /> },
//                 { title: 'LinkedIn', icon: <FaLinkedinIn size={24} className="text-[#0077B5]" /> },
//               ].map(({ title, icon }) => (
//                 <button
//                   key={title}
//                   onClick={() => {
//                     if (title === 'LinkedIn') goToForm(title);
//                   }}
//                   disabled={title !== 'LinkedIn'}
//                   className={`flex flex-col items-center ${title !== 'LinkedIn' ? 'opacity-40 cursor-not-allowed' : ''}`}
//                 >
//                   {icon}
//                   <span className="text-xs mt-1">{title}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default ZyloTopNavbar;





'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/app/lib/firebase';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaWhatsapp, FaPinterestP, FaXTwitter, FaFacebookF,
  FaFacebookMessenger, FaInstagram, FaLinkedinIn, FaGoogleDrive,
} from 'react-icons/fa6';
import { PiThreadsLogoFill } from 'react-icons/pi';
import { MdDownload } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

const ZyloTopNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [userInitials, setUserInitials] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        if (user.displayName) {
          const names = user.displayName.split(' ');
          const initials = names.map((n) => n[0]).join('').toUpperCase().slice(0, 2);
          setUserInitials(initials);
        } else {
          setUserInitials('U');
        }
      } else {
        setUserInitials(null);
      }
    });

    return () => unsubscribe();
  }, []);

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

  const goToForm = (platform: string) => {
    const imageUrl = '';
    const captionHtml = '';
    router.push(`/postform?platform=${encodeURIComponent(platform)}&image=${encodeURIComponent(imageUrl)}&caption=${encodeURIComponent(captionHtml)}`);
  };

  const saveToLocal = () => {
    const content = 'Caption content here';
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'caption.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const uploadToGDrive = () => {
    alert('Google Drive upload logic goes here.');
  };

  return (
    <>
      <div className="w-full h-20 px-2 lg:px-6 py-3 bg-white/60 backdrop-blur-md border-b border-gray-200 shadow-sm flex items-center justify-between z-50 relative">
        
 <Link href="/">
  <Image src="/assets/Zylo.svg" alt="Zylo Logo" width={123} height={51} className="cursor-pointer" />
</Link>

        <div className="flex items-center gap-1 relative" ref={dropdownRef}>
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
                  <button onClick={goToProfile} className="w-full px-4 py-2 text-sm text-black hover:bg-gray-100 text-left">
                    Profile
                  </button>
                  <button onClick={handleLogout} className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left">
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button onClick={handleSignInClick} className="block lg:hidden w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center" aria-label="Sign In">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A4.992 4.992 0 0112 15c1.657 0 3.156.8 4.121 2.062M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </button>
              <div className="hidden lg:block p-[2px] rounded-full bg-gradient-to-r from-[#73DFE7] via-[#0063F7] to-[#73DFE7]">
                <button className="bg-white cursor-pointer text-black px-6 py-2 rounded-full font-semibold" onClick={handleSignInClick}>
                  Sign In
                </button>
              </div>
            </>
          )}

          <button
            onClick={() => setShareOpen((prev) => !prev)}
            className="block lg:hidden w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out"
            aria-label="Menu"
          >
            {shareOpen ? (
              <IoClose className="h-6 w-6 text-gray-700" />
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className={`fixed inset-0 z-[9999] flex items-end lg:hidden transition-transform duration-300 ease-in-out ${shareOpen ? 'translate-y-0' : 'translate-y-full'} bg-black/40 backdrop-blur-sm`}>
        <div className="w-full bg-white p-4 rounded-t-xl shadow-xl">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Share</span>
            <button onClick={() => setShareOpen(false)} className="text-gray-600">✕</button>
          </div>
          <div className="grid grid-cols-4 gap-4 text-gray-700">
            {[{ title: 'LinkedIn', icon: <FaLinkedinIn size={24} className="text-[#0077B5]" /> },
              { title: 'WhatsApp', icon: <FaWhatsapp size={24} /> },
              { title: 'Pinterest', icon: <FaPinterestP size={24} /> },
              { title: 'Twitter', icon: <FaXTwitter size={24} /> },
              { title: 'Threads', icon: <PiThreadsLogoFill size={24} /> },
              { title: 'Facebook', icon: <FaFacebookF size={24} /> },
              { title: 'Messenger', icon: <FaFacebookMessenger size={24} /> },
              { title: 'Instagram', icon: <FaInstagram size={24} /> },
              { title: 'GDrive', icon: <FaGoogleDrive size={24} className="text-[#0F9D58]" /> },
              { title: 'Download', icon: <MdDownload size={24} className="text-black" /> },
            ].map(({ title, icon }) => (
              <button
                key={title}
                onClick={() => {
                  if (title === 'LinkedIn') goToForm(title);
                  if (title === 'Download') saveToLocal();
                  if (title === 'GDrive') uploadToGDrive();
                }}
                disabled={title !== 'LinkedIn' && title !== 'Download' && title !== 'GDrive'}
                className={`flex flex-col items-center ${title !== 'LinkedIn' && title !== 'Download' && title !== 'GDrive' ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                {icon}
                <span className="text-xs mt-1 text-center">{title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ZyloTopNavbar;
