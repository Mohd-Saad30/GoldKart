import React from 'react';

export default function Sustainability() {
  return (
    <section className="relative w-full overflow-hidden my-12 bg-neutral-950">
      {/* Background Banner Image */}
      <div className="relative h-[380px] sm:h-[460px] lg:h-[520px] w-full">
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1920&q=85"
          alt="Woman wearing statement chandelier crystal earrings"
          className="w-full h-full object-cover object-[center_35%] brightness-[0.85]"
        />

        {/* Gradient dark overlay for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        {/* Content Box */}
        <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
          <div className="max-w-xl text-white">
            <span className="text-xs uppercase tracking-widest text-amber-300 font-medium">
              Empowering communities worldwide
            </span>

            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-tight drop-shadow-md">
              Fostering Water Sustainability While Celebrating Global Beauty.
            </h2>

            <div className="mt-8">
              <button className="px-7 py-3 rounded-full bg-white/10 hover:bg-white text-white hover:text-neutral-950 text-xs tracking-wider uppercase font-medium backdrop-blur-md border border-white/40 transition duration-300">
                Read Our Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
