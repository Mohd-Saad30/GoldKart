import React from 'react';

const advantages = [
  {
    id: 1,
    title: "Free worldwide shipping",
    description: "Complimentary express delivery & insurance on all orders over $150.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6 0a2 2 0 104 0m-4 0a2 2 0 114 0m10-1a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Certified authentic",
    description: "Every diamond and gemstone is ethically sourced with certified grading.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "24/7 concierge support",
    description: "Dedicated jewelry specialists available around the clock to assist you.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "30-day easy returns",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
          Online store advantages
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-500 font-light leading-relaxed max-w-xl">
          From secure checkout to reliable delivery, enjoy a smooth shopping journey with transparent policies and exceptional care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 border-y border-neutral-200 py-12">
        {advantages.map((item) => (
          <div
            key={item.id}
            className="group flex flex-col items-center text-center px-6 lg:border-r lg:last:border-r-0 border-neutral-200"
          >
            <div className="text-neutral-900 mb-5 transition-transform duration-500 group-hover:-translate-y-1">
              {item.icon}
            </div>
            <h3 className="font-serif text-sm tracking-[0.18em] uppercase text-neutral-900 mb-2">
              {item.title}
            </h3>
            <p className="text-xs text-neutral-500 font-light leading-relaxed max-w-[240px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
