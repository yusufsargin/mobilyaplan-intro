import React, { useState, useEffect } from 'react';
import { MobilyaPlanLogo } from './MobilyaPlanLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageToggle } from './LanguageToggle';
import { getProductUrl } from '../config/urls';

interface NavbarProps {
  onOpenTrialModal?: () => void;
  onOpenVideoModal?: () => void;
  onNavigateToBlog?: () => void;
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onNavigateToBlog,
  onNavigateHome,
}) => {
  const { t, language, getWhatsAppUrl } = useLanguage();
  const isTr = language === 'tr';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.comparison, href: '#karsilastirma' },
    { name: t.nav.features, href: '#ozellikler' },
    { name: t.nav.savingsCalc, href: '#tasarruf-hesaplayici' },
    { name: isTr ? 'Atölye Kareleri' : 'Workshop Photos', href: '#galeri' },
    { name: t.nav.pricing, href: '#fiyatlandirma' },
    { name: t.nav.blog, href: '#blog', isBlog: true },
    { name: t.nav.faq, href: '#sss' },
  ];

  const brandUrl = getProductUrl(language);

  const handleLinkClick = (link: { href: string; isBlog?: boolean }) => {
    setIsMenuOpen(false);
    if (onNavigateHome) onNavigateHome();
    if (link.isBlog && onNavigateToBlog) {
      // scroll to blog anchor if on home, or open portal
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200/90 py-2.5 sm:py-3 shadow-md'
            : 'bg-white/80 backdrop-blur-sm border-b border-zinc-200/60 py-3 sm:py-4'}
        }`}
      >
        <div className="max-w-[90rem] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 xl:gap-6 min-w-0">
            {/* Dynamic Brand Logo */}
            <a href={brandUrl} className="flex items-center gap-2 sm:gap-3 group min-w-0 shrink">
              <MobilyaPlanLogo className="w-8 h-8 sm:w-10 sm:h-10 shrink-0 group-hover:scale-105 transition-transform duration-200" />
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 min-w-0">
                  <span className="text-base sm:text-xl font-extrabold tracking-tight text-zinc-900 truncate">
                    {isTr ? (
                      <>Mobilya<span className="text-zinc-500">Plan</span></>
                    ) : (
                      <>Furniture<span className="text-zinc-500">Draw</span></>
                    )}
                  </span>
                  <span className="hidden sm:inline-flex text-[11px] font-mono font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-300 shrink-0">
                    WEB CAD
                  </span>
                </div>
                <p className="text-[12px] text-zinc-500 font-mono hidden sm:block">{t.common.brandSubtitle}</p>
              </div>
            </a>

            {/* Quick Links for Desktop */}
            <nav className="hidden xl:flex flex-1 justify-center min-w-0 px-4">
              <div className="inline-flex items-center gap-2 2xl:gap-2.5 bg-zinc-100 p-1.5 rounded-full border border-zinc-200">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-[12px] font-semibold text-zinc-600 hover:text-zinc-900 hover:bg-white rounded-full transition-all duration-200 whitespace-nowrap shadow-none hover:shadow-xs"
                >
                  {link.name}
                </a>
              ))}
              </div>
            </nav>

            {/* Right Side Controls */}
            <div className="flex items-center gap-1.5 sm:gap-4 shrink-0">
              {/* Language Switcher Button (TR / EN) */}
              <LanguageToggle variant="compact" />

              <a
                href={brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                <span>{t.common.startTrialBtn}</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>

              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="flex xl:hidden items-center justify-center gap-2 w-10 h-10 sm:w-auto sm:h-auto sm:px-3.5 sm:py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-all shadow-xs cursor-pointer border border-zinc-300"
                aria-label={t.common.menu}
              >
                <i className="fa-solid fa-bars text-sm text-zinc-800"></i>
                <span className="hidden sm:inline">{t.common.menu}</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Off-Canvas Slide Drawer */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop Overlay */}
          <div
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
          ></div>

          {/* Slide Drawer Content */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-full max-w-md bg-white text-zinc-900 shadow-2xl border-l border-zinc-200 flex flex-col justify-between overflow-y-auto">
              
              {/* Drawer Header */}
              <div className="p-6 border-b border-zinc-200 flex items-center justify-between bg-zinc-50">
                <div className="flex items-center gap-2.5">
                  <MobilyaPlanLogo className="w-9 h-9" />
                  <div>
                    <span className="text-lg font-extrabold text-zinc-900">
                      {isTr ? (
                        <>Mobilya<span className="text-zinc-500">Plan</span></>
                      ) : (
                        <>Furniture<span className="text-zinc-500">Draw</span></>
                      )}
                    </span>
                    <p className="text-xs text-zinc-500 font-mono">{t.common.brandSubtitle}</p>
                  </div>
                </div>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 rounded-xl bg-white hover:bg-zinc-100 text-zinc-600 flex items-center justify-center transition-colors cursor-pointer border border-zinc-300"
                  aria-label={t.common.close}
                >
                  <i className="fa-solid fa-xmark text-lg text-zinc-800"></i>
                </button>
              </div>

              {/* Drawer Body Items */}
              <div className="p-6 space-y-6 flex-1">
                
                {/* Language Switcher in Drawer */}
                <div className="space-y-2">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">Language / Dil</p>
                  <LanguageToggle variant="expanded" />
                </div>

                {/* 1. Quick Stats */}
                <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-200 space-y-2">
                  <span className="text-xs font-bold text-zinc-900 font-mono">{t.nav.statsHeadline}</span>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {t.nav.statsDesc}
                  </p>
                </div>

                {/* Navigation Links */}
                <div className="space-y-1">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider px-2 mb-2 font-mono">{t.nav.quickMenu}</p>
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
                    >
                      <span>{link.name}</span>
                      <i className="fa-solid fa-chevron-right text-xs text-zinc-400"></i>
                    </a>
                  ))}
                </div>

                {/* 3. Contact & Support */}
                <div className="pt-4 border-t border-zinc-200 space-y-3">
                  <p className="text-xs font-bold text-zinc-500 uppercase tracking-wider font-mono">{t.nav.directContact}</p>
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow transition-all"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>{t.common.whatsappSupport}</span>
                  </a>
                </div>

              </div>

              {/* Drawer Footer CTA */}
              <div className="p-6 border-t border-zinc-200 bg-zinc-50 space-y-2">
                <a
                  href={brandUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.common.startTrialBtn}</span>
                  <i className="fa-solid fa-arrow-right text-xs"></i>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};
