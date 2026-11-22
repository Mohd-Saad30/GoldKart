import React, { useState } from 'react';
import { faqsAsset, allImages } from '../assets';

const faqs = [
  {
    id: 1,
    question: "What materials are used in your jewelry?",
    answer:
      "All our pieces are forged from 100% recycled 18k and 14k solid gold, 925 sterling silver, and ethically sourced, certified lab-grown or natural conflict-free diamonds and precious gemstones.",
  },
  {
    id: 2,
    question: "Do you offer custom jewelry designs?",
    answer:
      "Yes, our bespoke atelier service allows you to collaborate directly with our master craftsmen to create unique, personalized engagement rings, heirloom pieces, and custom engraved treasures.",
  },
  {
    id: 3,
    question: "How long does custom jewelry take?",
    answer:
      "Custom jewelry design typically takes 2 to 4 weeks depending on the complexity of the design, gemstone selection, and client approval stages.",
  },
  {
    id: 4,
    question: "Do you provide certificates for gemstones?",
    answer:
      "Every diamond and precious gemstone over 0.3 carats comes with a certified grading report from reputable international institutes such as GIA, IGI, or our verified in-house gemologist certificate.",
  },
  {
    id: 5,
    question: "Can I see a piece from the catalogue in person?",
    answer:
      "Yes. Every piece in our catalogue can be viewed and tried on at our store. Get in touch before your visit and we'll have the pieces you're interested in ready for you.",
  },
];

export default function FAQs() {
  const [openId, setOpenId] = useState(faqs[0].id);
  const [searchQuery, setSearchQuery] = useState("");

  const query = searchQuery.trim().toLowerCase();
  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(query) ||
      item.answer.toLowerCase().includes(query)
  );

  const casketImage =
    faqsAsset ||
    allImages[10] ||
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80";

  return (
    <section className="py-24 lg:py-32 px-5 sm:px-8 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch">
        {/* FAQ list */}
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
            Frequently asked
            <br />
            questions
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-500 font-light leading-relaxed max-w-lg">
            Explore helpful information about our collections, craftsmanship, and visiting our store, all in one place.
          </p>

          {/* Search + contact */}
          <div className="mt-8 flex items-stretch gap-3 max-w-lg">
            <label htmlFor="faq-search" className="sr-only">Search questions</label>
            <input
              id="faq-search"
              type="search"
              placeholder="Search questions"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 min-w-0 px-5 py-3 border border-neutral-300 bg-white text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:border-neutral-900 transition"
            />
            <a
              href="#contact"
              className="flex items-center px-6 bg-neutral-900 hover:bg-neutral-800 text-white text-xs tracking-wider uppercase font-medium transition duration-200 shrink-0"
            >
              Get in touch
            </a>
          </div>

          {/* Accordion */}
          <div className="mt-10">
            {filteredFaqs.length === 0 && (
              <p className="py-6 text-sm text-neutral-500 font-light">
                No questions match "{searchQuery}". Try another word, or get in touch.
              </p>
            )}
            {filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="border-b border-neutral-200">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <span className="text-[15px] sm:text-base text-neutral-900">
                      {faq.question}
                    </span>
                    <span
                      className={`flex items-center justify-center w-8 h-8 rounded-full border shrink-0 transition-all duration-300 ${isOpen ? 'bg-neutral-900 border-neutral-900 text-white rotate-45' : 'border-neutral-300 text-neutral-600 group-hover:border-neutral-900 group-hover:text-neutral-900'}`}
                      aria-hidden="true"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>

                  <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                    <div className="overflow-hidden" inert={!isOpen}>
                      <p className="pb-5 pr-12 text-neutral-600 text-sm leading-relaxed font-light">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/5] sm:aspect-[4/3] lg:aspect-auto lg:min-h-[600px] overflow-hidden bg-neutral-100 group">
          <img
            src={casketImage}
            alt="Ornate vintage silver jewelry box with pearls and gemstones"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
