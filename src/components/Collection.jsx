import React from 'react';
import { collectionAssets, allImages } from '../assets';

const collections = [
  {
    id: 1,
    title: "Watches",
    image: collectionAssets[0] || allImages[4] || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
    desc: "Timeless haute horlogerie.",
  },
  {
    id: 2,
    title: "Jewelry",
    image: collectionAssets[1] || allImages[5] || "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=80",
    desc: "Solitaires and pavé bands.",
  },
  {
    id: 3,
    title: "Accessories",
    image: collectionAssets[2] || allImages[6] || "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=900&q=80",
    desc: "Rare artisanal essences.",
  },
  {
    id: 4,
    title: "Luxury dress",
    image: collectionAssets[3] || allImages[7] || "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80",
    desc: "Hand-finished evening gowns.",
  },
];

export default function Collection() {
  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
      {/* Centred header */}
      <div className="text-center max-w-2xl mx-auto mb-14 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#171717] tracking-tight leading-[1.15]">
          Explore our collection.
          <br />
          <span className="italic">Discover the detail in every piece.</span>
        </h2>
        <a
          href="#collection"
          className="mt-8 inline-block px-7 py-3 border border-[#171717] text-xs tracking-wider uppercase font-medium text-[#171717] hover:bg-[#171717] hover:text-white transition duration-300"
        >
          View the catalogue
        </a>
      </div>

      {/* Category grid: framed images, details slide up on hover */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
        {collections.map((item) => (
          <a
            key={item.id}
            href="#collection"
            aria-label={`${item.title}: ${item.desc}`}
            className="group relative block aspect-[4/5] bg-neutral-200 overflow-hidden outline outline-[10px] outline-white outline-offset-0 focus-visible:ring-1 focus-visible:ring-[#171717] focus-visible:ring-offset-[14px]"
          >
            {/* Slight zoom crops the black bars baked into some photos */}
            <img
              src={item.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover scale-[1.12]"
            />

            {/* Hover panel (always shown on touch screens) */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0 [@media(hover:none)]:translate-y-0 transition-transform duration-300 ease-out">
              <div className="bg-neutral-950 text-white px-6 py-5 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="font-serif text-xl leading-snug truncate">{item.title}</h3>
                  <p className="text-xs text-neutral-400 font-light mt-1 truncate">{item.desc}</p>
                </div>
                <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14m-5-5l5 5-5 5" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
