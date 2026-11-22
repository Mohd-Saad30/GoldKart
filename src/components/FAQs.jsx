import React, { useState } from 'react';

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
    question: "How do I care for and clean my jewelry?",
    answer:
      "To preserve brilliance, clean gently with warm water, mild fragrance-free soap, and a soft microfiber cloth. Avoid exposure to harsh perfumes, chlorine, and abrasive chemicals.",
  },
  {
    id: 4,
    question: "Do you provide certificates for gemstones?",
    answer:
      "Every diamond and precious gemstone over 0.3 carats comes with a certified grading report from reputable international institutes such as GIA, IGI, or our verified in-house gemologist certificate.",
  },
  {
    id: 5,
    question: "What is your return and exchange policy?",
    answer:
      "We offer a 30-day complimentary return and exchange window on all non-customized pieces in their original condition and packaging. Return shipping within the US is entirely free.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: FAQ Accordion */}
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-normal text-neutral-900 tracking-tight leading-tight">
            Frequently Asked
            <br />
            Questions
          </h2>
          <p className="mt-3 text-sm sm:text-base text-neutral-500 font-light leading-relaxed max-w-xl">
            Find answers to quick questions on authentication, craftsmanship, shipping, and maintenance of your pieces.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex items-center gap-3 max-w-xl">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search by question here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 rounded-full border border-neutral-300 bg-white text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-1 focus:ring-neutral-800 transition"
              />
            </div>
            <button className="px-6 py-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white text-sm font-medium transition duration-200 shrink-0">
              Get in Touch
            </button>
          </div>

          {/* Accordion List */}
          <div className="mt-10 divide-y divide-neutral-200/90 border-t border-b border-neutral-200/90">
            {filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.id} className="py-4 sm:py-5">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <span className="text-[15px] sm:text-base font-normal text-neutral-900 group-hover:text-amber-800 transition-colors">
                      {faq.question}
                    </span>
                    <span className="ml-4 flex items-center justify-center w-7 h-7 rounded-full border border-neutral-300 text-neutral-500 group-hover:border-neutral-900 group-hover:text-neutral-900 transition-all shrink-0">
                      {isOpen ? (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      ) : (
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="5" x2="12" y2="19" />
                          <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 pr-8 text-neutral-600 text-sm leading-relaxed font-light transition-all duration-300">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Luxury Casket Image */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none rounded-2xl overflow-hidden shadow-lg aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] bg-neutral-100">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
              alt="Ornate silver jewelry box with pearls and gold treasures"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            {/* Subtle radial lighting overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
