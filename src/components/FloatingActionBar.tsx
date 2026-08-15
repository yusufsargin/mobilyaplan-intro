import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getProductUrl } from '../config/urls';

export const FloatingActionBar: React.FC = () => {
  const { t, language, getWhatsAppUrl } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const brandUrl = getProductUrl(language);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Speed-Dial Container (Bottom Right) */}
      <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        
        {/* Floating WhatsApp Live Help Widget */}
        <div className="group relative flex items-center">
          
          {/* Tooltip Hover Bubble */}
          <div className="hidden md:flex items-center gap-2 bg-zinc-900 text-white text-xs font-mono px-3.5 py-2 rounded-xl shadow-2xl border border-zinc-800 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
            <span>{t.common.whatsappOnline}</span>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 rounded-full bg-white text-black shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 relative group cursor-pointer border-2 border-black"
            aria-label={t.common.whatsappSupport}
          >
            {/* Live pulsating badge */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-black border-2 border-white"></span>
            </span>

            <i className="fa-brands fa-whatsapp text-2xl text-black"></i>
          </a>
        </div>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white shadow-xl border border-zinc-800 flex items-center justify-center transition-all duration-200 hover:-translate-y-1 cursor-pointer"
            aria-label={t.common.backToTop}
          >
            <i className="fa-solid fa-arrow-up text-xs"></i>
          </button>
        )}
      </div>

      {/* Sticky Bottom Floating Bar for Mobile / High Conversion */}
      {!isDismissed && (
        <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-black/95 backdrop-blur-md border-t border-zinc-800 p-3 shadow-2xl flex items-center justify-between gap-2.5">
          <div className="flex-1">
            <a
              href={brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl bg-white hover:bg-zinc-200 text-black font-black text-xs shadow-xl flex items-center justify-center gap-2 cursor-pointer text-center"
            >
              <span>{t.common.startTrialBtn}</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-11 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0 border border-zinc-700 shadow-sm"
            aria-label="WhatsApp"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
          </a>

          <button
            onClick={() => setIsDismissed(true)}
            className="w-8 h-8 rounded-lg text-zinc-500 hover:text-white flex items-center justify-center text-xs"
            aria-label={t.common.close}
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      )}
    </>
  );
};
