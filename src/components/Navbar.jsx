import React, { useEffect, useRef, useState } from 'react';

/*
  Navbar behaviour (ported from the TEST project):
  - Fixed over the hero, transparent with a soft dark wash and white text.
  - Turns solid cream with a hairline and shadow once the page scrolls past
    40px, or while it is hovered, the search bar is open, or the phone menu
    is open.
  - Links get an underline that grows out from the centre on hover.
  - Hamburger and close icons cross-fade and rotate into each other.
  - Search slides down under the bar and is focused on open.
  - Esc or a click outside closes the menu and search; the page behind the
    open phone menu doesn't scroll; crossing the lg breakpoint closes the
    phone menu.
*/

const displayFont = { fontFamily: "'Bodoni Moda', 'Didot', 'Playfair Display', Georgia, serif" };

const NAV_LINKS = [
  'Jewelry',
  'Collection',
  'New Arrivals',
  'About Us',
];

const LINK_TARGETS = {
  Collection: '#collection',
  'Visit us': '#contact',
};

const toHref = (label) => LINK_TARGETS[label] || `#${label.toLowerCase().replace(/\s+/g, '-')}`;

const focusRing =
  'outline-none focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4 focus-visible:outline-current';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const headerRef = useRef(null);
  const sentinelRef = useRef(null);
  const searchInputRef = useRef(null);
  const menuButtonRef = useRef(null);

  const isSolid = isScrolled || isHovered || isSearchOpen || isMenuOpen;

  // Turn solid once the page scrolls past a 40px sentinel at the top.
  useEffect(() => {
    const node = sentinelRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => setIsScrolled(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Focus the search field when it opens.
  useEffect(() => {
    if (isSearchOpen) searchInputRef.current?.focus({ preventScroll: true });
  }, [isSearchOpen]);

  // Lock page scroll behind the open phone menu.
  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

  // Crossing the lg breakpoint closes the phone menu.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setIsMenuOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Esc closes the search or the phone menu.
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key !== 'Escape') return;
      if (isMenuOpen) {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
      } else if (isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen, isSearchOpen]);

  // Click outside closes the menu and search.
  useEffect(() => {
    const onMouseDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', onMouseDown);
    return () => document.removeEventListener('mousedown', onMouseDown);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen((open) => !open);
    setIsMenuOpen(false);
  };

  const logo = (extra) => (
    <a href="/" className={`flex-col items-center ${focusRing} ${extra}`} aria-label="Caravelle Jewellery home">
      <span style={displayFont} className="text-2xl sm:text-3xl font-normal leading-none tracking-[0.12em]">
        CARAVELLE
      </span>
      <span className="mt-1.5 text-[8px] sm:text-[9px] leading-none tracking-[0.3em] opacity-80">
        JEWELLERY
      </span>
    </a>
  );

  const searchButton = (extra) => (
    <button
      type="button"
      onClick={toggleSearch}
      aria-label={isSearchOpen ? 'Close search' : 'Open search'}
      aria-expanded={isSearchOpen}
      className={`p-1 hover:opacity-70 transition active:scale-90 ${focusRing} ${extra}`}
    >
      <SearchIcon />
    </button>
  );

  return (
    <>
      {/* Scroll sentinel at the top of the page */}
      <div ref={sentinelRef} aria-hidden="true" className="absolute top-0 left-0 h-10 w-px pointer-events-none" />

      <header ref={headerRef} className="fixed top-0 left-0 w-full z-50">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`relative w-full transition-colors duration-[400ms] ${isSolid ? 'text-neutral-900' : 'text-white'}`}
        >
          {/* Background layers cross-fade: dark wash over the hero, solid cream when active */}
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/25 to-transparent transition-opacity duration-[400ms] ${isSolid ? 'opacity-0' : 'opacity-100'}`}
          />
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none bg-[#faf9f6] border-b border-neutral-200 shadow-sm transition-opacity duration-[400ms] ${isSolid ? 'opacity-100' : 'opacity-0'}`}
          />

          <div className="relative w-full px-5 sm:px-8 lg:px-12 py-5 sm:py-6">
            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              {/* Left: menu + search on phones, links from lg */}
              <div className="flex items-center gap-3 sm:gap-5 justify-self-start">
                <div className="flex items-center gap-3 sm:gap-4 lg:hidden">
                  <button
                    ref={menuButtonRef}
                    type="button"
                    onClick={() => {
                      setIsMenuOpen((open) => !open);
                      setIsSearchOpen(false);
                    }}
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-nav"
                    className={`p-1 hover:opacity-70 transition active:scale-90 ${focusRing}`}
                  >
                    <span className="relative block w-6 h-6">
                      <span
                        className={`absolute inset-0 flex transition duration-[250ms] ${isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'}`}
                      >
                        <MenuIcon />
                      </span>
                      <span
                        className={`absolute inset-0 flex transition duration-[250ms] ${isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'}`}
                      >
                        <CloseIcon />
                      </span>
                    </span>
                  </button>
                  {searchButton('')}
                </div>
                <nav aria-label="Main" className="hidden lg:flex items-center gap-7 xl:gap-10">
                  {NAV_LINKS.filter((link) => link !== 'About Us').map((link) => (
                    <a
                      key={link}
                      href={toHref(link)}
                      className={`group relative py-1.5 whitespace-nowrap text-[13px] xl:text-[14px] tracking-wide ${focusRing}`}
                    >
                      {link}
                      <span className="absolute bottom-0 left-0 w-full h-px bg-current origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-[250ms]" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Middle: logo, centred at every width */}
              <div className="flex justify-center">
                {logo('flex')}
              </div>

              {/* Right: search (lg), visit the store */}
              <div className="flex items-center gap-3 sm:gap-5 justify-self-end">
                {searchButton('hidden lg:block')}
                <a
                  href="#contact"
                  aria-label="Visit the store"
                  className={`flex items-center gap-2 p-1 text-[13px] tracking-wide hover:opacity-70 transition active:scale-95 ${focusRing}`}
                >
                  <PinIcon />
                  <span className="hidden sm:inline">Visit us</span>
                </a>
                <a
                  href={toHref('About Us')}
                  className={`group relative hidden lg:block py-1.5 whitespace-nowrap text-[13px] xl:text-[14px] tracking-wide ${focusRing}`}
                >
                  About Us
                  <span className="absolute bottom-0 left-0 w-full h-px bg-current origin-center scale-x-0 group-hover:scale-x-100 transition-transform duration-[250ms]" />
                </a>
              </div>
            </div>

            {/* Slide-down search bar */}
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${isSearchOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
            >
              <div className="overflow-hidden" inert={!isSearchOpen}>
                <form
                  onSubmit={handleSearchSubmit}
                  className="mt-4 pt-4 border-t border-neutral-200 max-w-3xl mx-auto flex items-center gap-3"
                >
                  <label htmlFor="site-search" className="sr-only">Search the catalogue</label>
                  <input
                    ref={searchInputRef}
                    id="site-search"
                    type="text"
                    placeholder="Search rings, necklaces, earrings..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 min-w-0 bg-white text-neutral-900 text-sm px-5 py-3 border border-neutral-200 outline-none focus:border-neutral-900 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-neutral-900 text-white px-6 py-3 text-xs tracking-wider uppercase hover:bg-neutral-800 transition active:scale-[0.98]"
                  >
                    Search
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsSearchOpen(false)}
                    aria-label="Close search"
                    className="p-1.5 text-neutral-500 hover:text-neutral-900 transition active:scale-90"
                  >
                    <CloseIcon />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Phone menu sheet */}
        <div
          className={`lg:hidden grid transition-[grid-template-rows] duration-300 ease-out ${isMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
          <nav
            id="mobile-nav"
            aria-label="Main"
            inert={!isMenuOpen}
            className="overflow-hidden bg-[#faf9f6] shadow-2xl"
          >
            <ul className="max-h-[75vh] overflow-y-auto px-5 sm:px-8 py-2 border-t border-neutral-200">
              {[...NAV_LINKS, 'Visit us'].map((link) => (
                <li key={link} className="border-b border-neutral-200 last:border-b-0">
                  <a
                    href={toHref(link)}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-4 text-[15px] text-neutral-900 hover:pl-2 transition-[padding]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

function SearchIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" strokeWidth={1.5} />
      <path strokeLinecap="round" strokeWidth={1.5} d="M16 16l4.5 4.5" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinejoin="round" strokeWidth={1.5} d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0113 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.25" strokeWidth={1.5} />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeWidth={1.25} d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-full w-full min-h-5 min-w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeWidth={1.25} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
