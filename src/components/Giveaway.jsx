import React from 'react';

export default function Giveaway() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0a231c] via-[#0f2e26] to-[#0a231c] border border-emerald-900/40 shadow-2xl">
        {/* Subtle decorative gold sparkle / ambient light */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center p-8 sm:p-12 lg:p-16">
          {/* Left Column: Sparking Diamonds Display */}
          <div className="md:col-span-5 flex items-center justify-center gap-6">
            <div className="relative flex flex-col items-center">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-black/40 backdrop-blur-md p-3 border border-white/10 flex items-center justify-center shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=400&q=80"
                  alt="Diamond Solitaire Necklace"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="relative flex flex-col items-center">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-black/40 backdrop-blur-md p-3 border border-white/10 flex items-center justify-center shadow-inner group">
                <img
                  src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=400&q=80"
                  alt="Diamond Stud Earrings"
                  className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Promotional Copy */}
          <div className="md:col-span-7 text-center md:text-left">
            <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-800/40 border border-emerald-500/30 text-[11px] font-medium tracking-widest uppercase text-emerald-300 mb-4">
              Limited Time Event
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
              The Ultimate Diamond <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-amber-300 font-normal ml-1">Giveaway</span>
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-emerald-100/80 font-light leading-relaxed max-w-lg">
              Enter to win our handcrafted designer necklace WORTH $5,000. Plus, all orders over $250 receive a complimentary matching gift.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
              <div className="px-5 py-2.5 rounded-full bg-emerald-950/70 border border-emerald-600/40 text-xs tracking-wider text-amber-200 font-medium">
                Use code: <span className="font-bold text-white tracking-widest">DIAMOND</span> at checkout
              </div>
              <button className="px-6 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-wider transition duration-300 shadow-md">
                Claim Offer
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
