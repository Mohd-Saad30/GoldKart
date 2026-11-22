import React from 'react';

const ITEMS = [
  'Fine jewellery',
  'Handcrafted pieces',
  'Bespoke designs',
  'Visit our store',
  'Browse the catalogue',
  'Book an appointment',
];

function Sparkle() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0z" />
    </svg>
  );
}

// A slow, endless strip of short phrases between two sections.
export default function Marquee() {
  const row = (hidden) => (
    <div className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <React.Fragment key={item}>
          <span className="whitespace-nowrap text-xs tracking-[0.25em] uppercase">{item}</span>
          <Sparkle />
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden bg-[#faf9f6] text-[#171717] border-y border-[#171717]/15 py-5">
      <div className="marquee-track flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
