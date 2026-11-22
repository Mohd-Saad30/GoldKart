import React, { useState } from 'react';

const reviews = [
  {
    id: 1,
    quote:
      "I was genuinely impressed by the quality and attention to detail. The jewelry looks even more beautiful in person, with a timeless charm that elevates its design. It has quickly become one of my favorite pieces to wear!",
    name: "Sarah Jane",
    role: "Fashion Designer",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "From the elegant packaging to the exceptional craftsmanship, every detail exceeded my expectations. The piece is truly luxurious, comfortable, and perfect for both everyday wear and special occasions.",
    name: "Sophia Bennett",
    role: "Chief Executive Officer",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "Visiting the store was a wonderful experience. The team took the time to show me every piece I'd seen in the catalogue, and the quality is outstanding. I've received so many compliments and will definitely be back!",
    name: "Olivia Caldwell",
    role: "Interior Decorator",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];


// Blush band with one large centred quote at a time.
export default function Review() {
  const [index, setIndex] = useState(0);
  const item = reviews[index];
  const go = (step) => setIndex((i) => (i + step + reviews.length) % reviews.length);

  return (
    <section className="bg-white text-neutral-900 px-5 sm:px-8 lg:px-12 py-28 lg:py-40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-xs tracking-[0.3em] uppercase text-[#171717]/70 font-sans font-medium">
          What our customers say
        </h2>

        <figure className="mt-10" aria-live="polite">
          <blockquote
            key={item.id}
            className="font-serif italic text-2xl sm:text-3xl lg:text-[40px] leading-[1.35] tracking-tight animate-[fadeIn_600ms_ease-out]"
          >
            “{item.quote}”
          </blockquote>

          <figcaption className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="w-10 h-10 border border-[#171717]/40 flex items-center justify-center hover:bg-[#171717] hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5m5 5l-5-5 5-5" />
              </svg>
            </button>

            <div className="flex items-center gap-3 text-left">
              <img src={item.avatar} alt="" className="w-11 h-11 rounded-full object-cover" />
              <div>
                <div className="font-serif text-lg leading-tight">{item.name}</div>
                <div className="text-xs text-[#171717]/70">{item.role}</div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="w-10 h-10 border border-[#171717]/40 flex items-center justify-center hover:bg-[#171717] hover:text-white transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-5-5l5 5-5 5" />
              </svg>
            </button>
          </figcaption>

          <div className="mt-8 flex justify-center gap-2">
            {reviews.map((r, i) => (
              <button
                key={r.id}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show review ${i + 1}`}
                aria-current={i === index}
                className={`h-[3px] transition-all duration-300 ${i === index ? 'w-10 bg-[#171717]' : 'w-5 bg-[#171717]/30'}`}
              />
            ))}
          </div>
        </figure>
      </div>
    </section>
  );
}
