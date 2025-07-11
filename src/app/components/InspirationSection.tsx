
// import React from 'react';

// const Inspiration = () => {
//   const inspirationImages = [
//     'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&h=200&fit=crop',
//     'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
//     'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
//     'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
    
//   ];

//   return (
//     <div className="mt-12">
//       <div className="max-w-7xl">
//         <div className="text-left mb-9">
//           <h2 className="text-2xl font-bold text-[#555770]">Inspiration</h2>
//           <p className="text-[#8E90A6] font-normal">Inspire. Explore. Create</p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {inspirationImages.map((image, index) => (
//             <div
//               key={index}
//               className="group cursor-pointer overflow-hidden rounded-xl aspect-[4/3] hover-scale"
//             >
//               <div
//                 className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
//                 style={{
//                   backgroundImage: `url(${image})`,
//                 }}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Inspiration;






import React from 'react';

const Inspiration = () => {
  const inspirationImages = [
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop',
    'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=300&h=200&fit=crop',
  ];

  return (
    <>
      {/* Desktop View */}
      <div className="hidden md:block mt-8">
        <div className="max-w-7xl">
          <div className="text-left mb-9">
            <h2 className="text-2xl font-bold text-[#555770]">Inspiration</h2>
            <p className="text-[#8E90A6] font-normal">Inspire. Explore. Create</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inspirationImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl aspect-[4/3] transition-transform duration-300 hover:scale-105"
              >
                <div
                  className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden mt-8 px-4">
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-[#555770]">Inspiration</h2>
          <p className="text-[#8E90A6] font-normal">Inspire. Explore. Create</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {inspirationImages.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${image})`,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Inspiration;
