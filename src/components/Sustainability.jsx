import React from 'react';
import { sustainabilityAsset, allImages } from '../assets';

export default function Sustainability() {
  const bannerImage =
    sustainabilityAsset ||
    allImages[9] ||
    "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1920&q=85";

  return (
    <section className="px-5 sm:px-8 lg:px-12 py-10 lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-neutral-950 text-white overflow-hidden">
        {/* Copy */}
        <div className="flex flex-col justify-center gap-8 p-10 sm:p-14 lg:p-20 order-2 lg:order-1">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-[1.1] max-w-xl">
            Fostering water sustainability while celebrating global beauty
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-md">
            The Hug for Universal Goodness diamond ring: responsibly made, and designed to honour the people and places behind every stone.
          </p>
          <div>
            <a
              href="#collection"
              className="inline-block px-7 py-3 border border-white/60 text-white hover:bg-white hover:text-neutral-950 text-xs tracking-wider uppercase font-medium transition duration-300"
            >
              View details
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[520px] order-1 lg:order-2 overflow-hidden group">
          <img
            src={bannerImage}
            alt="Woman wearing statement crystal earrings"
            className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          />
        </div>
      </div>
    </section>
  );
}
