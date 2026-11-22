import React from 'react';
import { craftsmanshipAsset, allImages } from '../assets';

export default function Craftsmanship() {
  const imageSrc =
    craftsmanshipAsset ||
    allImages[8] ||
    "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1400&q=80";

  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
        {/* Story and stat */}
        <div className="flex flex-col justify-between gap-12 lg:py-4">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
              Timeless craftsmanship
            </h2>
            <p className="mt-5 text-sm sm:text-base text-neutral-500 font-light leading-relaxed max-w-lg">
              Every piece we create is a reflection of artistry and precision. Our jewellery is crafted using ethically sourced materials and designed to celebrate life's most meaningful moments. From concept to creation, we focus on delivering elegance that lasts forever.
            </p>
          </div>

          <div>
            <div className="flex items-end gap-4 pb-8 border-b border-neutral-200 max-w-lg">
              <span className="font-serif text-7xl sm:text-8xl font-normal text-neutral-900 leading-none tracking-tight">
                15+
              </span>
              <span className="pb-2 text-sm text-neutral-500 font-light leading-snug">
                Years of
                <br />
                experience
              </span>
            </div>
            <a
              href="#collection"
              className="mt-8 inline-block px-7 py-3 bg-neutral-900 hover:bg-neutral-800 text-white text-xs tracking-wider uppercase font-medium transition duration-300"
            >
              See more
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px] overflow-hidden bg-neutral-900 group">
          <img
            src={imageSrc}
            alt="Gold hoop earring resting on a textured stone"
            className="absolute inset-0 w-full h-full object-cover scale-[1.3]"
          />
        </div>
      </div>
    </section>
  );
}
