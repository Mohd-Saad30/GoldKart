import React from 'react';

const displayFont = { fontFamily: "'Bodoni Moda', 'Didot', 'Playfair Display', Georgia, serif" };

const columns = [
  {
    title: 'CARAVELLE',
    brand: true,
    links: ['Jewelry', 'Collection', 'New arrivals', 'About us'],
  },
  {
    title: 'Customer service',
    links: ['Contact us', 'Book an appointment', 'Advice and service'],
  },
  {
    title: 'Visit',
    links: ['Store location', 'Opening hours', 'Size guide', 'Warranty and care'],
  },
];

const socials = ['Instagram', 'Facebook', 'Pinterest', 'YouTube'];

const toHref = (label) => `#${label.toLowerCase().replace(/\s+/g, '-')}`;

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 text-neutral-400 mt-6 overflow-hidden">
      <div className="px-5 sm:px-8 lg:px-12 pt-24 pb-12">
        {/* Visit the store + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] gap-14 pb-16 border-b border-neutral-800">
          <div>
            <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal tracking-tight leading-tight max-w-sm">
              Visit us in store
            </h3>
            {/* TODO: replace with the real store address, hours and phone */}
            <dl className="mt-8 grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-sm font-light max-w-md">
              <dt className="text-white">Address</dt>
              <dd>Store address, city</dd>
              <dt className="text-white">Hours</dt>
              <dd>Opening hours</dd>
              <dt className="text-white">Phone</dt>
              <dd>Phone number</dd>
            </dl>
            <a
              href="#book-an-appointment"
              className="mt-8 inline-block px-7 py-3 bg-white text-neutral-950 hover:bg-neutral-200 text-xs tracking-wider uppercase font-medium transition"
            >
              Book an appointment
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            {columns.map((col) => (
              <div key={col.title}>
                <h4
                  style={col.brand ? displayFont : undefined}
                  className={col.brand ? 'text-xl tracking-[0.12em] text-white mb-5' : 'font-serif text-xl text-white mb-5'}
                >
                  {col.title}
                </h4>
                <ul className="space-y-3 text-sm font-light">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href={toHref(link)} className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Socials and legal */}
        <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 text-xs font-light">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <a key={s} href={toHref(s)} className="hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href="#privacy" className="hover:text-white transition">Privacy policy</a>
            <a href="#terms" className="hover:text-white transition">Terms of service</a>
            <span>© 2026 Caravelle Jewellery</span>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div
          style={displayFont}
          aria-hidden="true"
          className="mt-14 text-white/90 text-[12vw] leading-[0.8] tracking-[0.04em] text-center select-none"
        >
          CARAVELLE
        </div>
      </div>
    </footer>
  );
}
