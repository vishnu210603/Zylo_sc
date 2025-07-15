'use client';
import React, { useState } from 'react';

const YourWorks = () => {
  const inspirationData = [
    { image: './resources/SC1.png', prompt: 'Use the product sample (bra) in the image to create Vogue styled photoshoot with beach background and a pet dog with the model. Do not make any changes to the product. Use Indian models' },
  { image: './resources/SC2.png', prompt: 'Refer to the image provided and generate better result for instagram result (no adult content) and use indian models' },
  { image: './resources/SC3.png', prompt: 'Cool photoshoot model in the sense of vogue style to attract female audience and use indian model with a bit healthy and curvy body' },
  { image: './resources/SC4.png', prompt: 'Use the product sample (bra) in the image to create Vogue styled photoshoot with beach background and a pet dog with the model. Do not make any changes to the product. Use Indian models' },
  
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).id === 'popup-background') {
      setSelectedIndex(null);
    }
  };

  return (
    <>
      {/* Grid Display */}
      <div className="mt-2 px-4 md:px-8 mb-10">
        <div className="text-left mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#555770]">Your Works</h2>
          <p className="text-[#8E90A6] font-normal">Access Your Projects</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {inspirationData.map((data, index) => (
            <div
              key={index}
              onClick={() => setSelectedIndex(index)}
              className="cursor-pointer overflow-hidden rounded-xl aspect-[4/3] md:aspect-[1/1] shadow-md transition-transform hover:scale-105"
            >
              <img
                src={data.image}
                alt={`Inspiration ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Popup View */}
      {selectedIndex !== null && (
        <div
          id="popup-background"
          className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={handleBackgroundClick}
        >
          <div className="bg-gradient-to-br from-[#73DFE7] to-[#0063F7] p-[2px] rounded-2xl shadow-2xl w-full max-w-md">
            <div className="bg-gradient-to-br from-[#73DFE7] to-[#0063F7] rounded-2xl p-4">
              <img
                src={inspirationData[selectedIndex].image}
                alt={`Inspiration Full ${selectedIndex + 1}`}
                className="w-full rounded-lg mb-4 object-cover"
              />

              {/* White Prompt Box */}
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
    </>
  );
};

export default YourWorks;
