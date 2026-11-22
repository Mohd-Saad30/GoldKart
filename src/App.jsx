import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BestSelling from './components/BestSelling';
import Collection from './components/Collection';
import Craftsmanship from './components/Craftsmanship';
import Sustainability from './components/Sustainability';
import Review from './components/Review';
import FAQs from './components/FAQs';
import Giveaway from './components/Giveaway';
import Advantages from './components/Advantages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-neutral-900 font-sans selection:bg-amber-200 selection:text-neutral-900">
      {/* 1. Header & Navigation */}
      <Navbar />

      {/* 2. Hero Section */}
      <Hero />

      {/* 3. Best Selling Products */}
      <div id="best-selling">
        <BestSelling />
      </div>

      {/* 4. Exploring Li Veblall Creation */}
      <Collection />

      {/* 5. Timeless Craftsmanship */}
      <Craftsmanship />

      {/* 6. Sustainability Banner */}
      <Sustainability />

      {/* 7. Reviews / Testimonials */}
      <Review />

      {/* 8. FAQs */}
      <FAQs />

      {/* 9. Diamond Giveaway Banner */}
      <Giveaway />

      {/* 10. Online Store Advantages */}
      <Advantages />

      {/* 11. Footer */}
      <Footer />
    </div>
  );
}

export default App;
