import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import { HeroBentoA, HeroBentoB, HeroBentoC } from './components/hero-mockups/HeroMockups';

const variants = [
  { id: 'A', name: 'Frosted cards', Comp: HeroBentoA },
  { id: 'B', name: 'Top editorial', Comp: HeroBentoB },
  { id: 'C', name: 'Glass band', Comp: HeroBentoC },
];

function Mockups() {
  const [active, setActive] = useState('A');
  const { Comp } = variants.find((v) => v.id === active);

  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900">
      <Navbar />
      <Comp key={active} />

      {/* Mockup switcher (preview only) */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] flex gap-1 rounded-full bg-neutral-900/90 backdrop-blur p-1 shadow-xl">
        {variants.map((v) => (
          <button
            key={v.id}
            onClick={() => setActive(v.id)}
            className={`whitespace-nowrap px-3 sm:px-4 py-2 rounded-full text-xs font-medium transition ${
              active === v.id ? 'bg-white text-neutral-900' : 'text-white/70 hover:text-white'
            }`}
          >
            {v.id}<span className="hidden sm:inline"> · {v.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<Mockups />);
