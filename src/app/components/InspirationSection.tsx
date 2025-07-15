'use client';

import React, { useEffect, useRef, useState } from 'react';

const inspirationData = [
  {
    image: './resources/SC1.png',
    prompt:
      'Use the product sample (bra) in the image to create Vogue styled photoshoot with beach background and a pet dog with the model. Do not make any changes to the product. Use Indian models',
  },
  {
    image: './resources/SC2.png',
    prompt:
      'Refer to the image provided and generate better result for instagram result (no adult content) and use indian models',
  },
  {
    image: './resources/SC3.png',
    prompt:
      'Cool photoshoot model in the sense of vogue style to attract female audience and use indian model with a bit healthy and curvy body',
  },
  {
    image: './resources/SC4.png',
    prompt:
      'Use the product sample (bra) in the image to create Vogue styled photoshoot with beach background and a pet dog with the model. Do not make any changes to the product. Use Indian models',
  },
  {
    image: './resources/SC5.png',
    prompt:
      'Use the product sample (bra) in the image to create Vogue styled photoshoot with beach background and a pet dog with the model. Do not make any changes to the product. Use Indian models',
  },
];

const InspirationParallax = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 0.5;
      }
    };

    const interval = setInterval(scroll, 15);
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index: number) => {
    setSelectedIndex(index % inspirationData.length);
  };

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'popup-background') {
      setSelectedIndex(null);
    }
  };

  const doubledData = [...inspirationData, ...inspirationData];

  return (
    <section className="w-full py-10 bg-[#DEEEFE]/5 overflow-hidden">
      <div className="px-4 md:px-10">
        {/* Heading */}
        <div className="text-left mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#555770]">Inspiration</h2>
          <p className="text-[#8E90A6] font-normal">Inspire. Explore. Create</p>
        </div>

        {/* Scrollable Image Row */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-hidden whitespace-nowrap"
          style={{ width: '100%', paddingBottom: '10px' }}
        >
          {doubledData.map((item, index) => (
            <div
              key={`inspiration-${index}`}
              onClick={() => handleImageClick(index)}
              className="flex-shrink-0 w-[350px] h-[350px] rounded-xl shadow-md overflow-hidden cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={item.image}
                alt={`Inspiration ${index}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedIndex !== null && (
        <div
          id="popup-background"
          className="fixed inset-0 z-[100] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackgroundClick}
        >
          <div className="bg-gradient-to-br from-[#73DFE7] to-[#0063F7] p-[2px] rounded-2xl shadow-2xl w-full max-w-md">
            <div className="bg-gradient-to-br from-[#73DFE7] to-[#0063F7] rounded-2xl p-4">
              {/* Image stays fully visible */}
              <img
                src={inspirationData[selectedIndex].image}
                alt={`Inspiration Full ${selectedIndex + 1}`}
                className="w-full rounded-lg mb-4 object-cover"
              />

              {/* Scrollable Prompt Box with only 2 visible lines */}
              <div className="bg-white p-3 rounded-xl shadow-md max-h-[3.5rem] overflow-y-auto">
                <p className="text-sm text-gray-800 leading-snug whitespace-pre-wrap break-words">
                  <span className="font-semibold text-black">Prompt:</span>{' '}
                  {inspirationData[selectedIndex].prompt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InspirationParallax;
