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
      "This was one of the best online shopping experiences I've had. The jewelry arrived beautifully presented, and the quality is outstanding. I've received so many compliments and will definitely purchase again!",
    name: "Olivia Caldwell",
    role: "Interior Decorator",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
  },
];

export default function Review() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
          What our customers say about us
        </h2>
        <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-2xl font-light leading-relaxed">
          Discover our carefully crafted jewelry designed to bring joy and elegance to your everyday life. Trusted by customers worldwide for superior quality, unmatched detail, and exceptional service.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {reviews.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white rounded-xl p-8 sm:p-9 border border-neutral-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.08)] hover:border-neutral-300 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top quote mark */}
            <div className="flex justify-end mb-4">
              <span className="text-neutral-800 text-3xl font-serif leading-none select-none">
                <svg
                  className="w-8 h-8 text-neutral-800 fill-current opacity-90"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </span>
            </div>

            {/* Quote content */}
            <p className="text-neutral-600 text-[14.5px] leading-relaxed font-light mb-8 italic">
              "{item.quote}"
            </p>

            {/* Author info */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-100">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-neutral-100"
              />
              <div>
                <h4 className="text-sm font-semibold text-neutral-900 tracking-wide">
                  {item.name}
                </h4>
                <p className="text-xs text-neutral-400 font-light mt-0.5">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
