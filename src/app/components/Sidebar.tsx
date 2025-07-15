'use client';

import Image from 'next/image';
import React from 'react';

const sidebarItems = [
  { src: '/assets/Home.svg', alt: 'Home' },
  { src: '/assets/Stack.svg', alt: 'Stack' },
  { src: '/assets/Ai.svg', alt: 'AI' },
  { src: '/assets/Table.svg', alt: 'Table' },
  { src: '/assets/Files.svg', alt: 'Files' },
];

const Sidebar = () => {
  return (
    <div className="hidden md:flex fixed top-28 left-4 h-[calc(100vh-125px)] w-32 bg-white shadow-md rounded-2xl flex-col justify-between items-center py-2 z-30">
      {/* Top icon section */}
      <div className="flex flex-col gap-10 items-center mt-4">
        {sidebarItems.map((item, idx) => (
          <div
            key={idx}
            className="group w-10 h-10 rounded-[6px] flex items-center justify-center hover:bg-[#5598FF] transition cursor-pointer"
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={30}
              height={30}
              className="transition group-hover:invert group-hover:brightness-0"
            />
          </div>
        ))}
      </div>

      {/* Bottom status circle */}
      <div className="w-10 h-10 bg-[#99DDDF]/50 rounded-full flex items-center justify-center mb-2">
        <div className="w-4 h-4 bg-white rounded-full" />
      </div>
    </div>
  );
};

export default Sidebar;




















<svg xmlns="http://www.w3.org/2000/svg" width="139" height="68" viewBox="0 0 139 68" fill="none">
  <g filter="url(#filter0_d_429_6024)">
    <path d="M14.3916 8.41016C15.9774 8.41017 17.4278 9.01428 18.5449 10.0137C18.8029 10.2445 19.1297 10.3916 19.4758 10.3916H48.417C53.1267 10.3918 55.5813 15.9984 52.3867 19.459L27.4842 46.4325C26.7388 47.2398 27.3115 48.5479 28.4103 48.5479H53.3841C53.7599 48.5479 54.1112 48.375 54.3756 48.1079C55.5253 46.9467 57.0903 46.2314 58.8154 46.2314C62.3451 46.2316 65.2069 49.2223 65.207 52.9111C65.207 56.6001 62.3452 59.5907 58.8154 59.5908C57.3798 59.5908 56.0558 59.0951 54.9891 58.2597C54.7417 58.0659 54.442 57.9443 54.1278 57.9443H16.4082C11.6984 57.9443 9.24381 52.3376 12.4385 48.877L37.341 21.9034C38.0864 21.0961 37.5137 19.7881 36.4149 19.7881H19.4769C19.1307 19.7881 18.8038 19.9352 18.5458 20.1661C17.4286 21.1657 15.9777 21.7695 14.3916 21.7695C10.8617 21.7695 8 18.7789 8 15.0898C8.00011 11.4008 10.8618 8.41016 14.3916 8.41016Z" fill="url(#paint0_linear_429_6024)"/>
  </g>
<g style={{ mixBlendMode: 'darken' }}>
    <path d="M14.3916 8.41016C15.9774 8.41017 17.4278 9.01428 18.5449 10.0137C18.8029 10.2445 19.1297 10.3916 19.4758 10.3916H48.417C53.1267 10.3918 55.5813 15.9984 52.3867 19.459L27.4842 46.4325C26.7388 47.2398 27.3115 48.5479 28.4103 48.5479H53.3841C53.7599 48.5479 54.1112 48.375 54.3756 48.1079C55.5253 46.9467 57.0903 46.2314 58.8154 46.2314C62.3451 46.2316 65.2069 49.2223 65.207 52.9111C65.207 56.6001 62.3452 59.5907 58.8154 59.5908C57.3798 59.5908 56.0558 59.0951 54.9891 58.2597C54.7417 58.0659 54.442 57.9443 54.1278 57.9443H16.4082C11.6984 57.9443 9.24381 52.3376 12.4385 48.877L37.341 21.9034C38.0864 21.0961 37.5137 19.7881 36.4149 19.7881H19.4769C19.1307 19.7881 18.8038 19.9352 18.5458 20.1661C17.4286 21.1657 15.9777 21.7695 14.3916 21.7695C10.8617 21.7695 8 18.7789 8 15.0898C8.00011 11.4008 10.8618 8.41016 14.3916 8.41016Z" fill="url(#paint1_linear_429_6024)"/>
  </g>
  <g filter="url(#filter1_d_429_6024)">
    <path d="M121.049 37.2773C121.409 37.2773 121.701 36.9853 121.701 36.6252V19.2054C121.701 18.8453 121.409 18.5533 121.049 18.5533H118.444C118.084 18.5533 117.792 18.8453 117.792 19.2054V36.6252C117.792 36.9853 118.084 37.2773 118.444 37.2773H121.049ZM110.225 45.4285C109.373 45.4285 108.682 44.7375 108.682 43.8851V11.2934C108.682 10.441 109.373 9.75 110.225 9.75H128.722C129.574 9.75 130.265 10.441 130.265 11.2934V43.8851C130.265 44.7375 129.574 45.4285 128.722 45.4285H110.225Z" fill="#6AA5FF"/>
  </g>
  <g filter="url(#filter2_d_429_6024)">
    <path d="M94.904 58.6572C93.9298 58.6572 93.1401 57.8675 93.1401 56.8934V11.5138C93.1401 10.5397 93.9298 9.75 94.904 9.75H103.766C104.74 9.75 105.53 10.5397 105.53 11.5138V46.4972C105.53 47.4714 106.32 48.2611 107.294 48.2611H108.939H129.064C130.038 48.2611 130.828 49.0508 130.828 50.0249V56.8934C130.828 57.8675 130.038 58.6572 129.064 58.6572H94.904Z" fill="#6AA5FF"/>
  </g>
  <g filter="url(#filter3_d_429_6024)">
    <path d="M71.7093 58.6221C70.29 58.6221 69.1395 57.4716 69.1395 56.0524V50.2573C69.1395 46.1518 65.8114 42.8237 61.7059 42.8237C60.5022 42.8237 59.5264 41.8478 59.5264 40.6441V12.2846C59.5264 10.8653 60.6769 9.71484 62.0961 9.71484H68.6944C70.1136 9.71484 71.2641 10.8653 71.2641 12.2846V31.8154C71.2641 32.3556 71.702 32.7935 72.2422 32.7935H77.2811C77.8213 32.7935 78.2592 32.3556 78.2592 31.8154V12.2846C78.2592 10.8653 79.4097 9.71484 80.8289 9.71484H87.1012C88.5204 9.71484 89.6709 10.8653 89.6709 12.2846V40.6419C89.6709 41.8469 88.6941 42.8237 87.4891 42.8237C83.3796 42.8237 80.0481 46.1552 80.0481 50.2647V56.0524C80.0481 57.4716 78.8976 58.6221 77.4784 58.6221H71.7093Z" fill="#6AA5FF"/>
  </g>
  <defs>
    <filter id="filter0_d_429_6024" x="0.174841" y="0.584998" width="72.8573" height="66.831" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="3.91258"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.39 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_429_6024"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_429_6024" result="shape"/>
    </filter>
    <filter id="filter1_d_429_6024" x="100.856" y="1.92484" width="37.2333" height="51.329" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="3.91258"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.39 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_429_6024"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_429_6024" result="shape"/>
    </filter>
    <filter id="filter2_d_429_6024" x="85.315" y="1.92484" width="53.3378" height="64.5575" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="3.91258"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.39 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_429_6024"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_429_6024" result="shape"/>
    </filter>
    <filter id="filter3_d_429_6024" x="51.7012" y="1.88969" width="45.7948" height="64.5575" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset/>
      <feGaussianBlur stdDeviation="3.91258"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.39 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_429_6024"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_429_6024" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear_429_6024" x1="-10.4784" y1="24.942" x2="20.9492" y2="79.3183" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5B8DEF"/>
      <stop offset="1" stop-color="#0063F7"/>
    </linearGradient>
    <linearGradient id="paint1_linear_429_6024" x1="-10.4784" y1="24.942" x2="20.9492" y2="79.3183" gradientUnits="userSpaceOnUse">
      <stop stop-color="#5B8DEF"/>
      <stop offset="1" stop-color="#0063F7"/>
    </linearGradient>
  </defs>
</svg>