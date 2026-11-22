import React from 'react';
import { collectionAssets, allImages } from '../assets';

const collections = [
  {
    id: 1,
    title: "WATCHES",
    image: collectionAssets[0] || allImages[4] || "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    desc: "Precision engineering meets timeless haute horlogerie.",
    linkText: "View Offer",
  },
  {
    id: 2,
    title: "JEWELRY",
    image: collectionAssets[1] || allImages[5] || "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=600&q=80",
    desc: "Sculpted solitaires and dazzling pavé diamond bands.",
    linkText: "View Offer",
  },
  {
    id: 3,
    title: "ACCESSORIES",
    image: collectionAssets[2] || allImages[6] || "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=600&q=80",
    desc: "Rare artisanal essences formulated for everlasting memory.",
    linkText: "View Offer",
  },
  {
    id: 4,
    title: "LUXURY DRESS",
    image: collectionAssets[3] || allImages[7] || "https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=600&q=80",
    desc: "Haute couture evening gowns crafted with refined handwork.",
    linkText: "View Offer",
  },
];

export default function Collection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
           Explore our collection
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-xl font-light leading-relaxed">
            Explore refined designs crafted with precision and premium materials. Timeless beauty made to be treasured for generations.
          </p>
        </div>

        <button className="self-start md:self-auto px-6 py-2.5 rounded-full border border-neutral-300 text-xs tracking-wider uppercase font-medium text-neutral-800 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300 shrink-0">
          View All Collection
        </button>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {collections.map((item) => (
          <div
            key={item.id}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4.2] bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Asset Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-[0.9] group-hover:brightness-[0.95]"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300" />

            {/* Content Bottom Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center">
              <h3 className="font-serif text-xl sm:text-2xl text-white font-normal tracking-wider drop-shadow-sm uppercase">
                {item.title}
              </h3>
              <p className="text-xs text-neutral-300 font-light mt-1.5 opacity-90 line-clamp-2 max-w-[200px]">
                {item.desc}
              </p>
              <button className="mt-4 px-5 py-1.5 rounded-full bg-white/20 hover:bg-white text-white hover:text-neutral-900 text-[11px] tracking-wider uppercase font-medium backdrop-blur-md border border-white/30 transition duration-300">
                {item.linkText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
