import React from 'react';

const displayFont = { fontFamily: "'Bodoni Moda', 'Didot', 'Playfair Display', Georgia, serif" };

// Full-bleed black story band with an oversized monogram behind the copy.
export default function Sustainability() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 text-white">
      {/* Oversized monogram */}
      <div
        aria-hidden="true"
        style={displayFont}
        className="pointer-events-none select-none absolute inset-x-0 top-1/2 -translate-y-[58%] text-center leading-none text-white/[0.06] text-[70vw] sm:text-[52vw] lg:text-[38vw]"
      >
        C
      </div>

      <div className="relative px-5 sm:px-8 lg:px-12 py-28 lg:py-40 flex flex-col items-center text-center">
        <span style={displayFont} className="text-6xl sm:text-7xl text-[#d8c48f] leading-none">C</span>

        <h2 className="mt-10 font-serif text-3xl sm:text-4xl lg:text-[52px] font-normal tracking-tight leading-[1.15] max-w-3xl">
          Fostering water sustainability
          <br />
          <span className="italic">while celebrating global beauty</span>
        </h2>

        <p className="mt-8 text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-xl">
          The Hug for Universal Goodness diamond ring: responsibly made, and designed to honour the people and places behind every stone.
        </p>

        <a
          href="#collection"
          className="mt-10 inline-block px-8 py-3 border border-white/60 text-white hover:bg-white hover:text-neutral-950 text-xs tracking-wider uppercase font-medium transition duration-300"
        >
          View details
        </a>
      </div>
    </section>
  );
}
