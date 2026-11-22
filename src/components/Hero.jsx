import React from 'react';
import { heroMainAsset, heroSideAssets } from '../assets';

const FALLBACK_MAIN = "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1600&q=85";
const FALLBACK_TOP = "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80";
const FALLBACK_BOTTOM = "https://images.unsplash.com/photo-1611591475879-11277a16f272?auto=format&fit=crop&w=900&q=80";

// Side panel: image only; the title fades in on hover (always shown on touch screens).
function SidePanel({ img, alt, title, subtitle, href }) {
  return (
    <a
      href={href}
      aria-label={`${title}: ${subtitle}`}
      className="group relative block overflow-hidden min-h-[220px] lg:min-h-0 outline-none focus-visible:ring-1 focus-visible:ring-neutral-900 focus-visible:ring-offset-4"
    >
      <img
        src={img}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity duration-500" />
      <div className="relative h-full flex items-end p-6 sm:p-8 pt-28 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0 transition duration-500 ease-out">
        <div>
          <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight">
            {title}
          </h3>
          <p className="mt-1 text-sm text-white/85">{subtitle}</p>
        </div>
      </div>
    </a>
  );
}

export default function Hero() {
  const imgMain = heroMainAsset || FALLBACK_MAIN;
  const imgTop = heroSideAssets[0] || FALLBACK_TOP;
  const imgBottom = heroSideAssets[1] || FALLBACK_BOTTOM;

  return (
    <section className="bg-[#faf9f6] pb-3">
      <div className="grid grid-cols-1 lg:grid-cols-[2.3fr_1fr] gap-3 lg:h-[90svh] lg:min-h-[600px] lg:max-h-[860px]">
        {/* Main panel: model image */}
        <div className="group relative overflow-hidden min-h-[75svh] lg:min-h-0">
          <img
            src={imgMain}
            alt="Model wearing a diamond necklace, drop earring and bracelet"
            className="absolute inset-0 w-full h-full object-cover object-[35%_58%]"
          />
          {/* Shade and text appear on hover or keyboard focus; always shown on touch screens */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 [@media(hover:none)]:opacity-100 transition-opacity duration-500" />

          <div className="relative h-full flex items-end p-6 sm:p-10 lg:p-14 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0 [@media(hover:none)]:opacity-100 [@media(hover:none)]:translate-y-0 transition duration-500 ease-out">
            <div className="max-w-xl">
              <h1 className="font-serif font-normal text-white tracking-tight leading-tight text-3xl sm:text-4xl lg:text-5xl">
                Fine jewellery, made by hand
              </h1>
              <p className="mt-4 text-sm text-white/85 font-light leading-relaxed max-w-md">
                Explore the catalogue, then see every piece in person at our store.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#collection"
                  className="px-7 py-3 bg-white hover:bg-neutral-100 text-neutral-900 text-xs sm:text-sm font-medium tracking-wide transition duration-300"
                >
                  View the catalogue
                </a>
                <a
                  href="#contact"
                  className="px-7 py-3 border border-white/70 hover:bg-white/10 text-white text-xs sm:text-sm font-medium tracking-wide transition duration-300"
                >
                  Visit the store
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stacked side panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:grid-rows-2 gap-3 min-h-0">
          <SidePanel
            img={imgTop}
            alt="Butterfly ring set with emeralds and pink stones"
            title="New arrivals"
            subtitle="Fresh from the workshop"
            href="#collection"
          />
          <SidePanel
            img={imgBottom}
            alt="Pink pear-shaped gemstone ring with a diamond halo"
            title="Signature rings"
            subtitle="Crafted to last"
            href="#collection"
          />
        </div>
      </div>
    </section>
  );
}
