import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t, getWhatsAppUrl } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = selectedCategory === 'all'
    ? t.faq.items
    : t.faq.items.filter(item => item.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-20 lg:py-28 bg-white text-zinc-900 border-t border-zinc-200">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider">
            <i className="fa-solid fa-circle-question text-zinc-700"></i>
            <span>{t.faq.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            {t.faq.title}
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg font-normal">
            {t.faq.subtitle}
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {t.faq.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => { setSelectedCategory(cat.id); setOpenIndex(0); }}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                  selectedCategory === cat.id
                    ? 'bg-zinc-900 text-white border-zinc-900 font-bold shadow-xs'
                    : 'bg-white text-zinc-600 border-zinc-300 hover:text-zinc-900 hover:bg-zinc-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredItems.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-zinc-50/60 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-zinc-900 pr-2">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full border border-zinc-300 flex items-center justify-center shrink-0 transition-all duration-200 ${
                    isOpen ? 'rotate-180 bg-zinc-900 text-white border-zinc-900' : 'bg-zinc-100 text-zinc-600'
                  }`}>
                    <i className={`fa-solid ${isOpen ? 'fa-minus' : 'fa-plus'} text-xs`}></i>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Box CTA */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200 text-center space-y-4 shadow-sm">
          <h3 className="text-lg font-bold text-zinc-900">
            {t.faq.helpBoxTitle}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-lg mx-auto font-normal">
            {t.faq.helpBoxDesc}
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
            >
              <i className="fa-brands fa-whatsapp text-base"></i>
              <span>{t.faq.helpBoxBtn}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
