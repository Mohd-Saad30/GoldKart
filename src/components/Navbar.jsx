// // import React, { useState } from 'react';

// // export default function Navbar() {
// //   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// //   const navLinks = [
// //     "Shop All",
// //     "Jewelry",
// //     "Best Sellers",
// //     "Collection",
// //     "New Arrivals",
// //     "Wholesale",
// //     "Stories",
// //     "About Us",
// //   ];

// //   return (
// //     <header className="sticky top-0 z-50 bg-[#faf9f6]/95 backdrop-blur-md border-b border-neutral-200/60 transition-all">
// //       {/* Top utility bar */}
// //       <div className="border-b border-neutral-200/40 text-[11px] sm:text-xs text-neutral-600 px-4 sm:px-8 py-2">
// //         <div className="max-w-7xl mx-auto flex items-center justify-between">
// //           <div className="flex items-center gap-2">
// //             <span className="cursor-pointer hover:text-neutral-900 transition">
// //               🔍 Search
// //             </span>
// //           </div>

// //           <div className="text-center font-medium tracking-wider text-neutral-800">
// //             Free shipping on worldwide orders over $150
// //           </div>

// //           <div className="flex items-center gap-4">
// //             <a href="#account" className="hover:text-neutral-900 transition">
// //               Account
// //             </a>
// //             <a href="#cart" className="hover:text-neutral-900 transition flex items-center gap-1 font-medium">
// //               Cart (0)
// //             </a>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Main Brand Title & Nav */}
// //       <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-5 flex flex-col items-center">
// //         {/* Brand Logo */}
// //         <div className="flex items-center justify-between w-full md:justify-center relative">
// //           <a href="/" className="font-serif text-2xl sm:text-3xl tracking-[0.25em] uppercase text-neutral-900 font-medium text-center">
// //             GoldKart
// //           </a>

// //           {/* Mobile hamburger button */}
// //           <button
// //             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
// //             className="md:hidden p-2 text-neutral-700 hover:text-neutral-900"
// //             aria-label="Toggle menu"
// //           >
// //             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //               {mobileMenuOpen ? (
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
// //               ) : (
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
// //               )}
// //             </svg>
// //           </button>
// //         </div>

// //         {/* Desktop Navigation Links */}
// //         <nav className="hidden md:flex items-center justify-center gap-8 mt-4 pt-2">
// //           {navLinks.map((link) => (
// //             <a
// //               key={link}
// //               href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
// //               className="text-xs tracking-wider uppercase text-neutral-600 hover:text-neutral-950 font-medium transition duration-200"
// //             >
// //               {link}
// //             </a>
// //           ))}
// //         </nav>

// //         {/* Mobile Navigation Dropdown */}
// //         {mobileMenuOpen && (
// //           <nav className="md:hidden w-full pt-4 pb-2 flex flex-col gap-3 border-t border-neutral-200/60 mt-4 text-center">
// //             {navLinks.map((link) => (
// //               <a
// //                 key={link}
// //                 href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
// //                 onClick={() => setMobileMenuOpen(false)}
// //                 className="text-xs tracking-wider uppercase text-neutral-700 py-1 hover:text-neutral-950 font-medium"
// //               >
// //                 {link}
// //               </a>
// //             ))}
// //           </nav>
// //         )}
// //       </div>
// //     </header>
// //   );
// // }

// import React, { useState } from 'react';

// /*
//   Uses the same font as the Hero. If you haven't added it yet, put this in index.html <head>:
//   <link rel="preconnect" href="https://fonts.googleapis.com">
//   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
//   <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500&display=swap" rel="stylesheet">
// */

// const displayFont = { fontFamily: "'Bodoni Moda', 'Didot', 'Playfair Display', Georgia, serif" };

// const NAV_LINKS = [
//   'Shop All',
//   'Jewelry',
//   'Best Sellers',
//   'Collection',
//   'New Arrivals',
//   'Wholesale',
//   'Stories',
//   'About Us',
// ];

// const toHref = (label) => `#${label.toLowerCase().replace(/\s+/g, '-')}`;

// const focusRing =
//   'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900';

// export default function Navbar({ cartCount = 0 }) {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md">
//       {/* Row 1: search | logo | account + cart */}
//       <div className="border-b border-neutral-900/70">
//         <div className="mx-auto grid h-20 max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-10 md:h-24">
//           {/* Left: search (desktop) / menu button (mobile) */}
//           <div className="flex items-center">
//             <button
//               type="button"
//               className={`hidden items-center gap-3 text-[15px] text-neutral-900 transition-opacity hover:opacity-60 md:flex ${focusRing}`}
//             >
//               <SearchIcon />
//               Search
//             </button>

//             <button
//               type="button"
//               onClick={() => setMenuOpen((o) => !o)}
//               aria-expanded={menuOpen}
//               aria-controls="mobile-nav"
//               aria-label={menuOpen ? 'Close menu' : 'Open menu'}
//               className={`-ml-2 p-2 text-neutral-900 md:hidden ${focusRing}`}
//             >
//               <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                 {menuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
//                 )}
//               </svg>
//             </button>
//           </div>

//           {/* Center: logo + tagline */}
//           <a href="/" className={`flex flex-col items-center text-neutral-900 ${focusRing}`} aria-label="GOLDEN home">
//             <span
//               style={displayFont}
//               className="text-3xl font-normal leading-none tracking-[0.12em] sm:text-4xl"
//             >
//               GOLDEN
//             </span>
//             <span className="mt-1.5 text-[8px] leading-none tracking-[0.3em] text-neutral-700 sm:text-[9px]">
//               HANDCRAFTED JEWELRY
//             </span>
//           </a>

//           {/* Right: account + cart */}
//           <div className="flex items-center justify-end gap-5 text-[15px] text-neutral-900 sm:gap-6">
//             <a
//               href="#account"
//               className={`hidden transition-opacity hover:opacity-60 md:inline ${focusRing}`}
//             >
//               Account
//             </a>
//             <a
//               href="#cart"
//               className={`flex items-center gap-2 transition-opacity hover:opacity-60 ${focusRing}`}
//               aria-label={`Cart, ${cartCount} items`}
//             >
//               <span className="hidden sm:inline">Cart</span>
//               {cartCount > 0 && <span className="hidden sm:inline">({cartCount})</span>}
//               <BagIcon />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Row 2: desktop links */}
//       <nav
//         aria-label="Main"
//         className="hidden border-b border-neutral-200 md:block"
//       >
//         <ul className="mx-auto flex max-w-[1400px] items-center justify-center gap-8 px-10 py-4 lg:gap-11">
//           {NAV_LINKS.map((link) => (
//             <li key={link}>
//               <a
//                 href={toHref(link)}
//                 className={`text-[15px] text-neutral-900 underline-offset-[6px] decoration-1 transition hover:underline ${focusRing}`}
//               >
//                 {link}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </nav>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <nav
//           id="mobile-nav"
//           aria-label="Main"
//           className="border-b border-neutral-200 bg-white md:hidden"
//         >
//           <ul className="flex flex-col px-5 py-2">
//             <li className="border-b border-neutral-200">
//               <button
//                 type="button"
//                 className="flex w-full items-center gap-3 py-4 text-[15px] text-neutral-900"
//               >
//                 <SearchIcon />
//                 Search
//               </button>
//             </li>
//             {[...NAV_LINKS, 'Account'].map((link) => (
//               <li key={link} className="border-b border-neutral-200 last:border-b-0">
//                 <a
//                   href={toHref(link)}
//                   onClick={() => setMenuOpen(false)}
//                   className="block py-4 text-[15px] text-neutral-900"
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </header>
//   );
// }

// function SearchIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//       <circle cx="11" cy="11" r="6.5" strokeWidth={1.5} />
//       <path strokeLinecap="round" strokeWidth={1.5} d="M16 16l4.5 4.5" />
//     </svg>
//   );
// }

// function BagIcon() {
//   return (
//     <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//       <path strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14l-1 12H6L5 8z" />
//       <path strokeLinecap="round" strokeWidth={1.5} d="M9 8V6.5a3 3 0 016 0V8" />
//     </svg>
//   );
// }


import React, { useState } from 'react';

/*
  Uses the same font as the Hero. If you haven't added it yet, put this in index.html <head>:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@6..96,400;6..96,500&display=swap" rel="stylesheet">
*/

const displayFont = { fontFamily: "'Bodoni Moda', 'Didot', 'Playfair Display', Georgia, serif" };

const NAV_LINKS = [
  'Shop All',
  'Jewelry',
  'Best Sellers',
  'Collection',
  'New Arrivals',
  'Wholesale',
  'Stories',
  'About Us',
];

const toHref = (label) => `#${label.toLowerCase().replace(/\s+/g, '-')}`;

const focusRing =
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900';

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      {/* Row 1: search | logo | account + cart */}
      <div className="border-b border-neutral-900/70">
        <div className="mx-auto grid h-20 max-w-[1400px] grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-10 md:h-24">
          {/* Left: search (desktop) / menu button (mobile) */}
          <div className="flex items-center">
            <button
              type="button"
              className={`hidden items-center gap-3 text-[15px] text-neutral-900 transition-opacity hover:opacity-60 md:flex ${focusRing}`}
            >
              <SearchIcon />
              Search
            </button>

            <button
              type="button"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`-ml-2 p-2 text-neutral-900 md:hidden ${focusRing}`}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Center: logo + tagline */}
          <a href="/" className={`flex flex-col items-center text-neutral-900 ${focusRing}`} aria-label="GOLDEN home">
            <span
              style={displayFont}
              className="text-3xl font-normal leading-none tracking-[0.12em] sm:text-4xl"
            >
              GOLDEN
            </span>
            <span className="mt-1.5 text-[8px] leading-none tracking-[0.3em] text-neutral-700 sm:text-[9px]">
              HANDCRAFTED JEWELRY
            </span>
          </a>

          {/* Right: account + cart */}
          <div className="flex items-center justify-end gap-5 text-[15px] text-neutral-900 sm:gap-6">
            <a
              href="#account"
              className={`hidden transition-opacity hover:opacity-60 md:inline ${focusRing}`}
            >
              Account
            </a>
            <a
              href="#cart"
              className={`flex items-center gap-2 transition-opacity hover:opacity-60 ${focusRing}`}
              aria-label={`Cart, ${cartCount} items`}
            >
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && <span className="hidden sm:inline">({cartCount})</span>}
              <BagIcon />
            </a>
          </div>
        </div>
      </div>

      {/* Row 2: desktop links */}
      <nav
        aria-label="Main"
        className="hidden border-b border-neutral-200 md:block"
      >
        <ul className="mx-auto flex max-w-[1400px] items-center justify-center gap-8 px-10 py-4 lg:gap-11">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={toHref(link)}
                className={`text-[15px] text-neutral-900 underline-offset-[6px] decoration-1 transition hover:underline ${focusRing}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-b border-neutral-200 bg-white md:hidden"
        >
          <ul className="flex flex-col px-5 py-2">
            <li className="border-b border-neutral-200">
              <button
                type="button"
                className="flex w-full items-center gap-3 py-4 text-[15px] text-neutral-900"
              >
                <SearchIcon />
                Search
              </button>
            </li>
            {[...NAV_LINKS, 'Account'].map((link) => (
              <li key={link} className="border-b border-neutral-200 last:border-b-0">
                <a
                  href={toHref(link)}
                  onClick={() => setMenuOpen(false)}
                  className="block py-4 text-[15px] text-neutral-900"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M16 16l4.5 4.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg className="h-[18px] w-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14l-1 12H6L5 8z" />
      <path strokeLinecap="round" strokeWidth={1.5} d="M9 8V6.5a3 3 0 016 0V8" />
    </svg>
  );
}
