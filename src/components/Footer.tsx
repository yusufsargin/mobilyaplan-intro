import React from 'react';
import { MobilyaPlanLogo } from './MobilyaPlanLogo';
import { useLanguage } from '../i18n/LanguageContext';

interface FooterProps {
  onOpenTrialModal: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const { t, language, getWhatsAppUrl } = useLanguage();
  const isTr = language === 'tr';
  const brandDomain = isTr ? 'mobilyaplan.com' : 'furnituredraw.com';
  const brandUrl = `https://www.${brandDomain}/`;

  return (
    <footer id="contact" className="bg-black text-zinc-400 border-t border-zinc-900 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Brand Col (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href={brandUrl} className="flex items-center gap-3 group">
              <MobilyaPlanLogo className="w-10 h-10 group-hover:scale-105 transition-transform duration-200" />
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                  {isTr ? (
                    <>Mobilya<span className="text-zinc-400">Plan</span></>
                  ) : (
                    <>Furniture<span className="text-zinc-400">Draw</span></>
                  )}
                </span>
                <p className="text-[10px] text-zinc-500 font-mono">{t.common.brandSubtitle}</p>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-normal">
              {t.footer.brandDesc}
            </p>

            <div className="pt-1 space-y-1 text-xs text-zinc-400 font-mono">
              <p><strong className="text-zinc-300">Web:</strong> {brandDomain}</p>
              <p><strong className="text-zinc-300">{t.common.whatsappSupport}:</strong> +90 532 715 33 56</p>
            </div>

            {/* Direct Contact Buttons */}
            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 text-xs font-bold transition-all flex items-center gap-2"
              >
                <i className="fa-brands fa-whatsapp text-sm"></i>
                <span>{t.common.whatsappSupport}</span>
              </a>

              <a
                href={brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border border-zinc-800 text-xs font-semibold transition-all flex items-center gap-2"
              >
                <i className="fa-solid fa-globe text-xs text-white"></i>
                <span>{brandDomain}</span>
              </a>
            </div>
          </div>

          {/* Nav Col 1 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">{t.footer.col1Title}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#karsilastirma" className="hover:text-white transition-colors">{t.nav.comparison}</a></li>
              <li><a href="#ozellikler" className="hover:text-white transition-colors">{t.nav.features}</a></li>
              <li><a href="#tasarruf-hesaplayici" className="hover:text-white transition-colors">{t.nav.savingsCalc}</a></li>
              <li><a href="#fiyatlandirma" className="hover:text-white transition-colors">{t.nav.pricing}</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">{t.nav.blog}</a></li>
              <li><a href="#sss" className="hover:text-white transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Nav Col 2 */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-mono">{t.footer.col2Title}</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#nasil-calisir" className="hover:text-white transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#fiyatlandirma" className="hover:text-white transition-colors">{t.footer.linkPricing}</a></li>
              <li><a href="#sss" className="hover:text-white transition-colors">{t.footer.linkFaq}</a></li>
              <li>
                <a href={brandUrl} target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">
                  {t.footer.linkTryFree}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span>{t.footer.legalNote}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
