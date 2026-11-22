import React from 'react';
import { allImages } from '../assets';

export default function Giveaway() {
  const necklace = allImages[2] || "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80";

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] bg-[#0f3b38] text-white overflow-hidden">
        {/* Product image */}
        <div className="relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px] overflow-hidden group">
          <img
            src={necklace}
            alt="Diamond pendant necklace"
            className="absolute inset-0 w-full h-full object-cover scale-[1.12] group-hover:scale-[1.18] transition-transform duration-1000 ease-out"
          />
        </div>

        {/* Copy */}
        <div className="flex flex-col justify-center gap-6 p-8 sm:p-12 lg:p-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.05]">
            The ultimate diamond <span className="font-script text-5xl sm:text-6xl lg:text-7xl text-[#e9d9b4] whitespace-nowrap">Giveaway</span>
          </h2>
          <p className="text-sm text-white/70 font-light leading-relaxed max-w-xl">
            Enter to win our handcrafted designer necklace worth $5,000. Plus, all orders over $250 receive a complimentary matching gift.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="px-5 py-3 border border-white/30 text-xs tracking-wider text-white/80">
              Use code <span className="text-white font-medium tracking-[0.2em] ml-1">DIAMOND</span> at checkout
            </div>
            <a
              href="#collection"
              className="px-7 py-3 bg-white text-[#0f3b38] hover:bg-[#e9d9b4] text-xs tracking-wider uppercase font-medium text-center transition duration-300"
            >
              Claim offer
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
