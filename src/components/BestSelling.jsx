import React, { useState } from 'react';

const products = [
  {
    id: 1,
    name: "HEART COLLAR PENDANT",
    price: "$320.00",
    originalPrice: "$380.00",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80",
    tag: "BESTSELLER",
    isLiked: false,
  },
  {
    id: 2,
    name: "BLOSSOM CHOKER NECKLACE",
    price: "$450.00",
    originalPrice: null,
    image: "https://revadiamonds.com/cdn/shop/files/DNL7235-2.jpg?v=1779427391&width=832",
    tag: "NEW",
    isLiked: false,
  },
  {
    id: 3,
    name: "HEART PENDANT NECKLACE",
    price: "$380.00",
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=600&q=80",
    tag: null,
    isLiked: false,
  },
  {
    id: 4,
    name: "ROPE BRACELET",
    price: "$290.00",
    originalPrice: "$340.00",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=600&q=80",
    tag: "POPULAR",
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header with Title and View All button */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
            Best Selling Products
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 max-w-xl font-light leading-relaxed">
            Discover our carefully selected best-selling pieces, each chosen for its exceptional craftsmanship, timeless quality, and subtle elegance.
          </p>
        </div>

        <button className="self-start md:self-auto px-6 py-2.5 rounded-full border border-neutral-300 text-xs tracking-wider uppercase font-medium text-neutral-800 hover:border-neutral-900 hover:bg-neutral-900 hover:text-white transition duration-300 shrink-0">
          View All Collection
        </button>
      </div>

      {/* 4-Column Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
        {items.map((product) => (
          <div
            key={product.id}
            className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-neutral-100 hover:border-neutral-300 shadow-[0_2px_12px_-2px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_-6px_rgba(0,0,0,0.08)] transition-all duration-300"
          >
            {/* Image Container */}
            <div className="relative aspect-[3/4] bg-[#f7f6f2] overflow-hidden flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Tag */}
              {product.tag && (
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-[10px] tracking-widest font-semibold uppercase px-2.5 py-1 rounded-full text-neutral-800 shadow-xs">
                  {product.tag}
                </span>
              )}

              {/* Wishlist Heart Icon */}
              <button
                onClick={() => toggleLike(product.id)}
                aria-label="Add to wishlist"
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/85 backdrop-blur-sm flex items-center justify-center text-neutral-700 hover:text-rose-600 transition shadow-xs"
              >
                <svg
                  className={`w-4 h-4 ${product.isLiked ? 'fill-rose-500 text-rose-500' : 'fill-none stroke-current stroke-2'}`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </button>

              {/* Quick Add Overlay on Hover */}
              <div className="absolute inset-x-4 bottom-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button className="w-full py-2.5 rounded-full bg-neutral-900/90 backdrop-blur-sm text-white text-xs font-medium tracking-wide hover:bg-neutral-950 transition shadow-md">
                  Quick Add
                </button>
              </div>
            </div>

            {/* Product Meta */}
            <div className="p-4 sm:p-5 flex flex-col items-center text-center">
              <h3 className="font-serif text-[15px] sm:text-base font-medium tracking-wide text-neutral-900 line-clamp-1">
                {product.name}
              </h3>
              <div className="mt-1.5 flex items-center gap-2">
                <span className="text-sm font-semibold text-neutral-900">
                  {product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xs text-neutral-400 line-through">
                    {product.originalPrice}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
