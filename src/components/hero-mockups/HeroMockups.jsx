import React from 'react';
import heroVideo from '../../assets/WhatsApp Video 2026-11-22 at 7.00.26 PM.mp4';
import butterflyRing from '../../assets/WhatsApp Image 2026-11-22 at 7.00.25 PM.jpeg';
import diamondNecklace from '../../assets/WhatsApp Image 2026-11-22 at 7.00.26 PM.jpeg';
import tennisBracelet from '../../assets/WhatsApp Image 2026-11-22 at 7.00.24 PM (2).jpeg';

/* ---------- shared pieces ---------- */

// Layout: one large tile on the left, two medium tiles stacked on the right.
function BentoGrid({ big, top, bottom, gap = 'gap-3 sm:gap-4' }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
      <div
        className={`grid ${gap} grid-cols-1 md:grid-cols-[1.6fr_1fr] md:grid-rows-2 md:h-[min(calc(100svh-210px),720px)] md:min-h-[520px]`}
      >
        <div className="relative overflow-hidden rounded-3xl h-[68vh] min-h-[440px] md:h-auto md:row-span-2">
          {big}
        </div>
        <div className="relative overflow-hidden rounded-3xl h-[300px] md:h-auto">{top}</div>
        <div className="relative overflow-hidden rounded-3xl h-[300px] md:h-auto">{bottom}</div>
      </div>
    </section>
  );
}

function Media({ src, video, className = '' }) {
  return video ? (
    <video autoPlay loop muted playsInline className={`absolute inset-0 w-full h-full object-cover ${className}`}>
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    <img src={src} alt="" className={`absolute inset-0 w-full h-full object-cover ${className}`} />
  );
}

const Arrow = ({ className = 'w-4 h-4' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 17L17 7M9 7h8v8" />
  </svg>
);

/* ---------- A · Frosted caption cards ---------- */
// Soft frosted panels tucked into the bottom-left corner of each tile.

export function HeroBentoA() {
  return (
    <BentoGrid
      big={
        <>
          <Media src={heroVideo} video />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
          <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:bottom-6 sm:right-auto max-w-md rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 p-6 sm:p-8 text-white">
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Worn like light
            </h1>
            <p className="mt-4 text-sm text-white/85 font-light leading-relaxed max-w-sm">
              Fine jewelry set by hand in 18k gold, made to be lived in every day.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="px-6 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-white/90 transition">
                Shop Now
              </button>
              <button className="px-6 py-2.5 rounded-full border border-white/50 text-white text-sm hover:bg-white/10 transition">
                Explore
              </button>
            </div>
          </div>
        </>
      }
      top={
        <>
          <Media src={butterflyRing} className="object-[50%_45%]" />
          <a href="#" className="group absolute left-4 bottom-4 right-4 sm:right-auto flex items-center gap-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 px-5 py-4 text-white">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl leading-none">Rings</h3>
              <p className="mt-1.5 text-xs text-white/80">Emerald &amp; sapphire statements</p>
            </div>
            <span className="ml-auto w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-neutral-900 transition">
              <Arrow />
            </span>
          </a>
        </>
      }
      bottom={
        <>
          <Media src={diamondNecklace} className="object-[50%_40%]" />
          <a href="#" className="group absolute left-4 bottom-4 right-4 sm:right-auto flex items-center gap-4 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 px-5 py-4 text-white">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl leading-none">Necklaces</h3>
              <p className="mt-1.5 text-xs text-white/80">Diamond drops &amp; lariats</p>
            </div>
            <span className="ml-auto w-9 h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-neutral-900 transition">
              <Arrow />
            </span>
          </a>
        </>
      }
    />
  );
}

/* ---------- B · Top-aligned editorial ---------- */
// Big serif headline at the top of the large tile on a barely-there tint;
// side tiles carry a slim translucent pill label up top.

export function HeroBentoB() {
  return (
    <BentoGrid
      gap="gap-2 sm:gap-3"
      big={
        <>
          <Media src={heroVideo} video />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/20" />
          <div className="absolute inset-x-0 top-0 p-6 sm:p-10 text-white">
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tight max-w-xl">
              Quiet gold,
              <br />
              <em className="font-normal">loud stones.</em>
            </h1>
          </div>
          <div className="absolute inset-x-4 bottom-4 sm:inset-x-6 sm:bottom-6 flex flex-col sm:flex-row sm:items-end gap-4 sm:justify-between">
            <p className="max-w-xs text-sm text-white/90 font-light leading-relaxed rounded-xl bg-black/15 backdrop-blur-sm px-4 py-3">
              New pieces in yellow, rose and white gold. Each one finished by hand.
            </p>
            <button className="self-start sm:self-auto flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-white text-sm font-medium hover:bg-white hover:text-neutral-900 transition">
              Shop the collection <Arrow />
            </button>
          </div>
        </>
      }
      top={
        <>
          <Media src={tennisBracelet} className="object-center bg-white" />
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
            <div className="rounded-xl bg-neutral-900/10 backdrop-blur-sm px-4 py-2.5">
              <h3 className="font-serif text-2xl text-neutral-900 leading-none">Tennis Bracelets</h3>
            </div>
            <a href="#" className="shrink-0 w-10 h-10 rounded-full bg-neutral-900/10 backdrop-blur-sm text-neutral-900 flex items-center justify-center hover:bg-neutral-900 hover:text-white transition">
              <Arrow />
            </a>
          </div>
        </>
      }
      bottom={
        <>
          <Media src={butterflyRing} className="object-[50%_50%]" />
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
            <div className="rounded-xl bg-white/15 backdrop-blur-sm px-4 py-2.5">
              <h3 className="font-serif text-2xl text-white leading-none">Cocktail Rings</h3>
            </div>
            <a href="#" className="shrink-0 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center hover:bg-white hover:text-neutral-900 transition">
              <Arrow />
            </a>
          </div>
        </>
      }
    />
  );
}

/* ---------- C · Glass band ---------- */
// A full-width translucent strip runs along the bottom of every tile,
// so all three read as one system.

function Band({ title, sub, children, size = 'sm' }) {
  return (
    <div
      className={`absolute inset-x-0 bottom-0 bg-white/20 backdrop-blur-lg border-t border-white/30 text-white ${
        size === 'lg' ? 'px-6 py-6 sm:px-8 sm:py-7' : 'px-5 py-4'
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-end gap-4 sm:justify-between">
        <div>
          {size === 'lg' ? (
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-tight">{title}</h1>
          ) : (
            <h3 className="font-serif text-2xl sm:text-3xl leading-none">{title}</h3>
          )}
          {sub && (
            <p className={`text-white/85 font-light ${size === 'lg' ? 'mt-3 text-sm max-w-md' : 'mt-1.5 text-xs'}`}>{sub}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}

export function HeroBentoC() {
  return (
    <BentoGrid
      big={
        <>
          <Media src={heroVideo} video />
          <Band size="lg" title="The Gold Edit" sub="Heirloom craft, modern proportions. Discover this season's pieces.">
            <div className="flex gap-3 shrink-0">
              <button className="px-6 py-2.5 rounded-full bg-white text-neutral-900 text-sm font-medium hover:bg-white/90 transition">
                Shop Now
              </button>
              <button className="px-6 py-2.5 rounded-full border border-white/60 text-white text-sm hover:bg-white/15 transition">
                Lookbook
              </button>
            </div>
          </Band>
        </>
      }
      top={
        <>
          <Media src={diamondNecklace} className="object-[50%_40%]" />
          <Band title="Lariat Set" sub="Diamond drops in white gold">
            <a href="#" className="hidden sm:flex w-9 h-9 rounded-full border border-white/60 items-center justify-center hover:bg-white hover:text-neutral-900 transition">
              <Arrow />
            </a>
          </Band>
        </>
      }
      bottom={
        <>
          <Media src={butterflyRing} className="object-[50%_45%]" />
          <Band title="Papillon Ring" sub="Emeralds &amp; pink sapphires">
            <a href="#" className="hidden sm:flex w-9 h-9 rounded-full border border-white/60 items-center justify-center hover:bg-white hover:text-neutral-900 transition">
              <Arrow />
            </a>
          </Band>
        </>
      }
    />
  );
}
