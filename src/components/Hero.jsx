import React from 'react';
import { heroVideo, allVideos, allImages } from '../assets';

export default function Hero() {
  const videoSrc = heroVideo || allVideos[0];
  const thumb1 = allImages[0] || "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=200&q=80";
  const thumb2 = allImages[1] || "https://images.unsplash.com/photo-1611591475879-11277a16f272?auto=format&fit=crop&w=200&q=80";
  const thumb3 = allImages[2] || "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=200&q=80";

  return (
    <section className="relative overflow-hidden bg-[#ded8cf] min-h-[580px] lg:min-h-[680px] flex items-center">
      {/* Background warm aesthetic lighting & model container or video */}
      <div className="absolute inset-0">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover object-[75%_25%] lg:object-right opacity-90"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1920&q=85"
            alt="Luxury Jewelry Model"
            className="w-full h-full object-cover object-[70%_25%] lg:object-right opacity-95"
          />
        )}
        {/* Soft gradient wash over left side to keep text supremely legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ded8cf] via-[#ded8cf]/90 to-transparent sm:via-[#ded8cf]/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="max-w-xl lg:max-w-2xl">
          {/* Main Giant Serif Header: "amateur" */}
          <h1 className="font-serif text-6xl sm:text-7xl lg:text-9xl font-normal text-neutral-900 tracking-tight leading-[0.95] drop-shadow-xs">
            amateur
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-sm sm:text-base text-neutral-700 font-light leading-relaxed max-w-md">
            The latest collection of world luxury, new names and trends. This section contains those decorations that have not appeared in Li Veblall.
          </p>

          {/* Action buttons */}
          <div className="mt-8 flex items-center gap-4">
            <button className="px-7 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium tracking-wide transition duration-300 shadow-md">
              Shop Now
            </button>
            <button className="px-7 py-3 rounded-full bg-white/70 hover:bg-white text-neutral-900 text-xs sm:text-sm font-medium tracking-wide backdrop-blur-sm border border-neutral-300/80 transition duration-300">
              Explore
            </button>
          </div>

          {/* Floating mini Products card in bottom left */}
          <div className="mt-14 inline-block bg-white/70 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/70 shadow-lg max-w-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="font-serif text-lg font-medium text-neutral-900">
                Products
              </span>
              <div className="flex gap-1.5">
                <button className="w-6 h-6 rounded-full bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center text-xs transition">
                  ‹
                </button>
                <button className="w-6 h-6 rounded-full bg-white/80 hover:bg-white text-neutral-700 flex items-center justify-center text-xs transition">
                  ›
                </button>
              </div>
            </div>

            {/* Thumbnail cards using local assets */}
            <div className="flex items-center gap-3">
              {[
                { id: 1, img: thumb1, alt: "Product thumbnail 1" },
                { id: 2, img: thumb2, alt: "Product thumbnail 2" },
                { id: 3, img: thumb3, alt: "Product thumbnail 3" },
              ].map((item) => (
                <div
                  key={item.id}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden bg-neutral-100 border border-white/80 shadow-xs"
                >
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-110 transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating circular scroll badge in bottom right */}
      <div className="absolute right-6 sm:right-12 bottom-6 sm:bottom-10">
        <a
          href="#best-selling"
          aria-label="Scroll down"
          className="w-12 h-12 rounded-full bg-white/80 hover:bg-white text-neutral-900 shadow-md flex items-center justify-center transition hover:scale-105 duration-300 backdrop-blur-sm"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
