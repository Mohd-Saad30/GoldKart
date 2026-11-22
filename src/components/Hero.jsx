// import React from 'react';

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#e8e4df] min-h-[580px] lg:min-h-[680px] flex items-center">
//       {/* Background warm aesthetic lighting & model container */}
//       <div className="absolute inset-0">
//         <img
//           src="https://cdn.dribbble.com/userupload/48928952/file/5458da640a16112106a40dd9b6adeec8.jpg?resize=1024x683&vertical=center"
//           alt="Luxury Jewelry Model"
//           className="w-full h-full object-cover object-[70%_25%] lg:object-right opacity-95"
//         />
//         {/* Soft gradient wash over left side to keep text supremely legible */}
//         <div className="absolute inset-0 bg-gradient-to-r from-[#e8e4df] via-[#e8e4df]/85 to-transparent sm:via-[#e8e4df]/60" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
//         <div className="max-w-xl lg:max-w-2xl">
//           {/* Main Giant Serif Header: "amateur" / artistic statement */}
//           <h1 className="font-serif text-6xl sm:text-7xl lg:text-9xl font-normal text-neutral-900 tracking-tight leading-[0.95] drop-shadow-xs">
//             amateur
//           </h1>

//           {/* Subtitle */}
//           <p className="mt-6 text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-md">
//             Exclusive handcrafted jewelry made from premium materials and sustainable gemstones. Embrace timeless elegance and individuality with our latest collection.
//           </p>

//           {/* Action buttons */}
//           <div className="mt-8 flex items-center gap-4">
//             <button className="px-7 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium tracking-wide transition duration-300 shadow-md">
//               Shop Now
//             </button>
//             <button className="px-7 py-3 rounded-full bg-white/70 hover:bg-white text-neutral-900 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm border border-neutral-300/80 transition duration-300">
//               Explore
//             </button>
//           </div>

//           {/* Floating mini Products card in bottom left */}
//           <div className="mt-14 inline-block bg-white/60 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/60 shadow-lg max-w-sm">
//             <div className="flex items-center justify-between mb-3">
//               <span className="font-serif text-lg font-medium text-neutral-900">
//                 Products
//               </span>
//               <div className="flex gap-1.5">
//                 <button className="w-6 h-6 rounded-full bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center text-xs transition">
//                   ‹
//                 </button>
//                 <button className="w-6 h-6 rounded-full bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center text-xs transition">
//                   ›
//                 </button>
//               </div>
//             </div>

//             {/* Thumbnail cards */}
//             <div className="flex items-center gap-3">
//               {[
//                 {
//                   id: 1,
//                   img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80",
//                   alt: "Diamond Pendant",
//                 },
//                 {
//                   id: 2,
//                   img: "https://images.unsplash.com/photo-1611591475879-11277a16f272?auto=format&fit=crop&w=200&q=80",
//                   alt: "Gold Choker",
//                 },
//                 {
//                   id: 3,
//                   img: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=200&q=80",
//                   alt: "Rope Bracelet",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.id}
//                   className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-neutral-100 border border-white/80 shadow-xs"
//                 >
//                   <img
//                     src={item.img}
//                     alt={item.alt}
//                     className="w-full h-full object-cover hover:scale-110 transition duration-300"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating circular scroll badge in bottom right */}
//       <div className="absolute right-6 sm:right-12 bottom-6 sm:bottom-10">
//         <a
//           href="#best-selling"
//           aria-label="Scroll down"
//           className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition hover:scale-105 duration-300 backdrop-blur-sm"
//         >
//           <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
//           </svg>
//         </a>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';

/*
  Add this once to your index.html <head> (or import it in your CSS):
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&display=swap" rel="stylesheet">
*/

const displayFont = { fontFamily: "'Bodoni Moda', 'Didot', 'Playfair Display', Georgia, serif" };

const PRODUCTS = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80',
    alt: 'Diamond pendant',
  },
  {
    id: 2,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxqFERZP6NN_J93cPsDXTwLMC5I6TSlIdFJu5BgkyUWA&s=10',
    alt: 'Gold choker',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=300&q=80',
    alt: 'Rope bracelet',
  },
];

export default function Hero() {
  const [offset, setOffset] = useState(0);

  const rotate = (dir) =>
    setOffset((o) => (o + dir + PRODUCTS.length) % PRODUCTS.length);

  const visible = PRODUCTS.map((_, i) => PRODUCTS[(i + offset) % PRODUCTS.length]);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#d6d4d1] via-[#c4c2bf] to-[#b3b1ae] min-h-[640px] lg:min-h-[100svh] lg:max-h-[860px]">
      {/* Model photo, pinned right and faded into the grey on its left edge */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%]">
        <img
          src="https://cdn.dribbble.com/userupload/48928952/file/5458da640a16112106a40dd9b6adeec8.jpg?resize=1024x683&vertical=center"
          alt="Model wearing a gold pendant necklace and square gold earring"
          className="h-full w-full object-cover object-[72%_20%] lg:object-[60%_15%]"
          style={{
            WebkitMaskImage:
              'linear-gradient(to right, transparent 0%, #000 28%)',
            maskImage: 'linear-gradient(to right, transparent 0%, #000 28%)',
          }}
        />
      </div>

      {/* Soft legibility wash for the left text column on small screens */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#b3b1ae]/90 via-transparent to-transparent lg:hidden" />

      {/* Giant wordmark: sits above the photo so it overlaps the model */}
      <h1
        style={displayFont}
        className="pointer-events-none absolute left-[3%] top-[4%] z-20 select-none whitespace-nowrap text-[clamp(5.5rem,22vw,17rem)] font-normal leading-[0.9] tracking-[-0.04em] text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.12)]"
      >
        amateur
      </h1>

      {/* Content column */}
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1400px] flex-col justify-end px-6 pb-10 pt-[34vw] sm:px-10 lg:min-h-[inherit] lg:pt-[22vw] xl:pt-[300px]">
        <div className="max-w-[420px]">
          <p className="text-[13px] leading-relaxed text-neutral-800 sm:text-sm">
            Handcrafted necklaces, earrings and rings made from recycled gold
            and responsibly sourced gemstones. See what just arrived in the
            new collection.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#shop"
              className="bg-neutral-950 px-6 py-3 text-sm text-white transition-colors hover:bg-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
            >
              Shop now
            </a>
            <a
              href="#collection"
              className="inline-flex items-center gap-2 border border-neutral-900/60 bg-white/10 px-5 py-3 text-sm text-neutral-900 backdrop-blur-sm transition-colors hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950"
            >
              Explore collection
              <span
                aria-hidden="true"
                className="flex h-5 w-5 items-center justify-center rounded-full border border-neutral-900/70 text-[10px]"
              >
                ›
              </span>
            </a>
          </div>

          {/* Products strip */}
          <div className="mt-10 sm:mt-12">
            <div className="flex items-center gap-5">
              <h2
                style={displayFont}
                className="text-5xl font-normal tracking-tight text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.15)] sm:text-5xl"
              >
                Products
              </h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => rotate(-1)}
                  aria-label="Previous products"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:bg-white hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => rotate(1)}
                  aria-label="Next products"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/80 text-white transition-colors hover:bg-white hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  ›
                </button>
              </div>
            </div>

            <ul className="mt-4 flex gap-2">
              {visible.map((item) => (
                <li
                  key={item.id}
                  className="h-20 w-20 overflow-hidden bg-neutral-200 sm:h-24 sm:w-24"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </li>
              ))}
            </ul>

            <p className="mt-3 max-w-[340px] text-[13px] leading-relaxed text-black-800">
              From pendants to statement earrings, every piece is made by hand
              and finished to last.
            </p>
          </div>
        </div>
      </div>

      {/* Round scroll button */}
      <a
        href="#best-selling"
        aria-label="Scroll down to best sellers"
        className="absolute bottom-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-white text-neutral-900 shadow-lg transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950 sm:bottom-10 sm:right-10 sm:h-14 sm:w-14"
      >
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 4v16m0 0l-6-6m6 6l6-6" />
        </svg>
      </a>
    </section>
  );
}
