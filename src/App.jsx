import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collection from './components/Collection';
import Craftsmanship from './components/Craftsmanship';
import Sustainability from './components/Sustainability';
import Review from './components/Review';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#faf9f6] text-neutral-900 font-sans selection:bg-amber-200 selection:text-neutral-900">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Exploring Caravelle Jewellery creation */}
      <div id="collection">
        <Collection />
      </div>

      {/* 5. Timeless Craftsmanship */}
      <Craftsmanship />

      {/* 6. Sustainability Banner */}
      <Sustainability />

      {/* 7. Reviews / Testimonials */}
      <Review />

      {/* 8. FAQs */}
      <FAQs />

      {/* 9. Footer */}
      <Footer />
    </div>
  );
}

export default App;
