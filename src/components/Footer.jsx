import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-neutral-300 pt-20 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-16 border-b border-neutral-800">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl tracking-widest text-white uppercase mb-4">
              Li Veblall
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed max-w-sm mb-6">
              Exquisite haute joaillerie handcrafted by master artisans. Celebrating beauty, ethical craftsmanship, and timeless radiance.
            </p>
            <div className="flex items-center gap-4 text-neutral-400">
              <span className="text-xs tracking-wider uppercase text-neutral-500 font-medium">
                Follow Us:
              </span>
              <div className="flex gap-3">
                {['Instagram', 'Facebook', 'Pinterest', 'YouTube'].map((social) => (
                  <a
                    key={social}
                    href={`#${social.toLowerCase()}`}
                    className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-xs hover:border-amber-400 hover:text-amber-400 transition"
                  >
                    {social[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-neutral-400">
              {['Shop All', 'Jewelry', 'Necklaces', 'Bracelets', 'Rings', 'Earrings', 'Special Offers'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="hover:text-amber-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
              Customer Service
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-neutral-400">
              {['Contact Us', 'Delivery & Returns', 'Size Guide', 'Ring Sizer', 'FAQs', 'Track Your Order', 'Warranty & Care'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} className="hover:text-amber-300 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">
              News & Updates
            </h4>
            <p className="text-xs text-neutral-400 font-light leading-relaxed mb-4">
              Subscribe to receive exclusive access to new releases, private sales, and jewelry care tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2.5">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 bg-neutral-900 border border-neutral-700 rounded-lg text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-amber-400 transition"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded bg-amber-500 hover:bg-amber-400 text-neutral-950 flex items-center justify-center transition"
                >
                  →
                </button>
              </div>
              <span className="text-[11px] text-neutral-500 font-light">
                By subscribing, you agree to our Privacy Policy.
              </span>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-light">
          <div>
            © 2026 Li Veblall Jewelry Inc. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-neutral-300 transition">Privacy Policy</a>
            <a href="#terms" className="hover:text-neutral-300 transition">Terms of Service</a>
            <a href="#cookies" className="hover:text-neutral-300 transition">Cookie Settings</a>
          </div>
          <div className="flex items-center gap-2 text-neutral-400">
            <span>USD ($)</span>
            <span>•</span>
            <span>English</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
