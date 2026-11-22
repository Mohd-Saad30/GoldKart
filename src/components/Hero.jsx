import React from 'react';
import { allVideos, heroVideo, allImages } from '../assets';

const displayFont = { fontFamily: "'Bodoni Moda', 'Didot', 'Playfair Display', Georgia, serif" };

export default function Hero() {
  const currentVideo = allVideos[1] || allVideos[0] || heroVideo;
  const thumb1 = allImages[0] || "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=300&q=80";
  const thumb2 = allImages[1] || "https://images.unsplash.com/photo-1611591475879-11277a16f272?auto=format&fit=crop&w=300&q=80";
  const thumb3 = allImages[2] || "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=300&q=80";

  return (
    <section
      className="relative overflow-hidden bg-[#ded8cf] flex flex-col"
      style={{ minHeight: '100vh' }}
    >
      {/* ── Layer 0: Video background ── */}
      <div className="absolute inset-0 z-0">
        {currentVideo ? (
          <video
            autoPlay loop muted playsInline preload="auto"
            className="w-full h-full object-cover object-center lg:object-right contrast-[1.05] saturate-[1.05] brightness-[1.01]"
          >
            <source src={currentVideo} type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=85"
            alt="Luxury Jewelry Model"
            className="w-full h-full object-cover object-[70%_25%] lg:object-right"
          />
        )}
        {/* Left gradient for legibility */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-gradient-to-r from-[#ded8cf]/90 via-[#ded8cf]/50 to-transparent pointer-events-none" />
      </div>

      {/* ── Layer 1: Giant "GoldKart" title ── */}
      <h1
        style={displayFont}
        className="pointer-events-none relative z-10 select-none whitespace-nowrap text-[clamp(5rem,20vw,16rem)] font-normal leading-[0.9] tracking-[-0.04em] text-[#c48c26] drop-shadow-[0_2px_24px_rgba(0,0,0,0.12)] mt-[3vh] ml-[2%]"
      >
        GoldKart
      </h1>

      {/* ── Layer 2: Content — pushed below title by flex, never overlaps ── */}
      <div className="relative z-20 flex-1 flex flex-col justify-end pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start gap-5">

          {/* Subtitle — clearly below the title in flow */}
          <p className="text-sm sm:text-base text-neutral-800 font-light leading-relaxed max-w-xs sm:max-w-sm">
            The latest collection of world luxury, new names and trends.
            Exclusive pieces that have not appeared in Li Veblall.
          </p>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <button className="px-6 py-2.5 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium tracking-wide transition duration-300 shadow-md">
              Shop Now
            </button>
            <button className="px-6 py-2.5 rounded-full bg-white/70 hover:bg-white text-neutral-900 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm border border-neutral-300/80 transition duration-300">
              Explore
            </button>
          </div>

          {/* Products floating card */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/80 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <span style={displayFont} className="text-xl sm:text-2xl font-medium text-neutral-900 tracking-wide">
                Products
              </span>
              <div className="flex gap-2 ml-6">
                <button aria-label="Previous" className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center text-sm transition duration-200">
                  ‹
                </button>
                <button aria-label="Next" className="w-7 h-7 rounded-full bg-neutral-100 hover:bg-neutral-900 hover:text-white text-neutral-700 flex items-center justify-center text-sm transition duration-200">
                  ›
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              {[
                { id: 1, img: thumb1, alt: "Product 1" },
                { id: 2, img: thumb2, alt: "Product 2" },
                { id: 3, img: thumb3, alt: "Product 3" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-neutral-100 border border-white/90 shadow-sm group/thumb flex-shrink-0"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover/thumb:scale-110 transition duration-500 ease-out"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── Scroll badge ── */}
      <div className="absolute right-6 sm:right-12 bottom-6 sm:bottom-10 z-30">
        <a
          href="#best-selling"
          aria-label="Scroll down"
          className="w-12 h-12 rounded-full bg-white/85 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition hover:scale-105 duration-300 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>

    </section>
  );
}
