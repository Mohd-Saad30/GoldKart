import React from 'react';

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

export default function Review() {
  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
      {/* Section Header */}
      <div className="mb-12 lg:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
          What our customers say about us
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-2xl font-light leading-relaxed">
          Discover our carefully crafted jewelry designed to bring joy and elegance to your everyday life. Trusted by customers worldwide for superior quality, unmatched detail, and exceptional service.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
        {reviews.map((item) => (
          <figure
            key={item.id}
            className="group relative bg-white p-8 sm:p-10 border border-neutral-200 hover:border-neutral-900 transition-colors duration-300 flex flex-col justify-between min-h-[340px]"
          >
            {/* Top quote mark */}
            <div className="flex justify-end mb-6">
              <svg className="w-9 h-9 text-neutral-900 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Quote content */}
            <blockquote className="text-neutral-700 text-[15px] leading-relaxed font-light mb-10">
              “{item.quote}”
            </blockquote>

            {/* Author info */}
            <figcaption className="flex items-center gap-3.5 pt-5 border-t border-neutral-200">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <div>
                <h4 className="font-serif text-base text-neutral-900">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-500 font-light mt-0.5">
                  {item.role}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
