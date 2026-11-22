import React, { useState } from 'react';
import { bestSellingAssets, allImages } from '../assets';

const products = [
  {
    id: 1,
    name: "Happy diamonds horse",
    subtitle: "Pendant, ethical rose gold, diamonds, sapphire",
    price: "$4,420.00",
    image: bestSellingAssets[0] || allImages[0] || "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80",
    isLiked: false,
  },
  {
    id: 2,
    name: "Happy diamonds fish",
    subtitle: "Pendant, ethical rose gold, diamonds, sapphire",
    price: "$3,420.00",
    image: bestSellingAssets[1] || allImages[1] || "https://images.unsplash.com/photo-1611591475879-11277a16f272?auto=format&fit=crop&w=900&q=80",
    isLiked: false,
  },
  {
    id: 3,
    name: "Happy diamonds fish",
    subtitle: "Pendant, ethical white gold, diamonds, sapphire",
    price: "$3,420.00",
    image: bestSellingAssets[2] || allImages[2] || "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80",
    isLiked: false,
  },
  {
    id: 4,
    name: "Happy gold ring",
    subtitle: "Pendant, ethical rose gold, diamonds, sapphire",
    price: "$2,890.00",
    image: bestSellingAssets[3] || allImages[3] || "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=80",
    isLiked: true,
  },
];

export default function BestSelling() {
  const [items, setItems] = useState(products);

  const toggleLike = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isLiked: !item.isLiked } : item
      )
    );
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      {/* Header with title and view-all link */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
            Best selling products
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-xl font-light leading-relaxed">
            Elevate your style with our best-selling jewelry collection. Timeless designs, premium quality, and unmatched craftsmanship.
          </p>
        </div>

        <a
          href="#collection"
          className="self-start md:self-auto px-7 py-3 border border-neutral-900 text-xs tracking-wider uppercase font-medium text-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300 shrink-0"
        >
          View all collection
        </a>
      </div>

      {/* Product grid: large full-bleed images, square corners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-3">
        {items.map((product) => (
          <article key={product.id} className="group flex flex-col">
            <div className="relative aspect-[4/5] bg-neutral-200 overflow-hidden">
              {/* Slight zoom crops the black bars baked into some photos */}
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover scale-[1.12] group-hover:scale-[1.18] transition-transform duration-700 ease-out"
              />

              <button
                onClick={() => toggleLike(product.id)}
                aria-label={product.isLiked ? 'Remove from wishlist' : 'Add to wishlist'}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 flex items-center justify-center text-neutral-800 hover:text-rose-600 transition"
              >
                <svg
                  className={`w-5 h-5 ${product.isLiked ? 'fill-rose-500 text-rose-500' : 'fill-none stroke-current stroke-2'}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>

              <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full py-4 bg-neutral-900 text-white text-xs font-medium tracking-wider uppercase hover:bg-neutral-800 transition">
                  Quick add
                </button>
              </div>
            </div>

            <div className="pt-4 pb-2 flex items-start justify-between gap-4">
              <div className="min-w-0">
                <h3 className="font-serif text-lg text-neutral-900 leading-snug truncate">
                  {product.name}
                </h3>
                <p className="text-xs text-neutral-500 font-light mt-1 truncate">
                  {product.subtitle}
                </p>
              </div>
              <span className="text-sm font-medium text-neutral-900 shrink-0">
                {product.price}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
