import React from 'react';

const advantages = [
  {
    id: 1,
    title: "Free Worldwide Shipping",
    description: "Complimentary express delivery & insurance on all orders over $150.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a2 2 0 104 0m-4 0a2 2 0 114 0m10-1a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "100% Certified Authentic",
    description: "Every diamond and gemstone is ethically sourced with certified grading.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "24/7 Concierge Support",
    description: "Dedicated jewelry specialists available around the clock to assist you.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "30-Day Hassle-Free Returns",
    description: "Enjoy effortless returns or exchanges with prepaid insured shipping labels.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

export default function Advantages() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-neutral-200/60">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-normal text-neutral-900 tracking-tight">
          Online Store Advantages
        </h2>
        <p className="mt-3 text-sm text-neutral-500 font-light leading-relaxed">
          From secure checkout to reliable delivery, enjoy a smooth shopping journey with transparent policies and exceptional care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
        {advantages.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-full bg-neutral-100 border border-neutral-200/80 flex items-center justify-center text-neutral-800 group-hover:bg-neutral-900 group-hover:text-amber-300 group-hover:border-neutral-900 transition-all duration-300 mb-5">
              {item.icon}
            </div>
            <h3 className="font-serif text-lg font-medium text-neutral-900 tracking-wide mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-[220px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
