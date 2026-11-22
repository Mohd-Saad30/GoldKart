import React from 'react';

export default function Craftsmanship() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Story & Metrics */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
            Timeless Craftsmanship
          </h2>

          <p className="mt-6 text-sm sm:text-base text-neutral-600 font-light leading-relaxed">
            Every piece we create is an ode to traditional and modern jewelry artistry. Meticulously shaped by master artisans, we select only the finest ethically sourced materials. From everyday elegance to grand celebrations, we bring you jewelry designed to transcend generations.
          </p>

          <div className="mt-8 flex items-baseline gap-3">
            <span className="font-serif text-5xl sm:text-6xl font-normal text-neutral-900 tracking-tight">
              15
            </span>
            <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
              Years of Experience
            </span>
          </div>

          <div className="mt-8">
            <button className="px-7 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-xs tracking-wider uppercase font-medium transition duration-300 shadow-sm">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column: High-end Still Life Jewelry on Stone */}
        <div className="lg:col-span-6">
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/11] shadow-xl bg-neutral-900 group">
            <img
              src="https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&w=1000&q=80"
              alt="Timeless gold hoop earring and textured sculptural stone"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
