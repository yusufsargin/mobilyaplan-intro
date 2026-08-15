import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getProductUrl } from '../config/urls';

interface PricingSectionProps {
  onOpenTrialModal: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = () => {
  const { t, language, getWhatsAppUrl } = useLanguage();
  const isTr = language === 'tr';
  const brandUrl = getProductUrl(language);

  const standardPlan = t.pricing.plans.standard;
  const cncPlan = t.pricing.plans.cnc;

  return (
    <section id="fiyatlandirma" className="py-20 lg:py-28 bg-white text-zinc-900 border-t border-zinc-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider">
            <i className="fa-solid fa-tag text-zinc-700"></i>
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            {t.pricing.titleLine1} <br />
            <span className="text-zinc-500">
              {t.pricing.titleLine2}
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg font-normal">
            {t.pricing.subtitle}
          </p>

          {/* Annual Plan Assurance Badge */}
          <div className="pt-2 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-mono font-bold shadow-xs">
              <i className="fa-solid fa-calendar-check text-amber-400"></i>
              <span>{isTr ? 'Yıllık Lisanslama Avantajı' : 'Annual Licensing Advantage'}</span>
            </div>
          </div>
        </div>

        {/* Pricing Tier Cards (2 Clean High-Contrast Cards - Annual Only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          
          {/* Card 1: Standard Plan */}
          <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-md bg-white border border-zinc-200 hover:border-zinc-300">
            <div className="space-y-6">
              {/* Plan Header */}
              <div className="space-y-2 border-b border-zinc-100 pb-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-zinc-900">{standardPlan.name}</h3>
                  <span className="text-[11px] font-mono text-zinc-700 uppercase bg-zinc-100 px-2.5 py-1 rounded-lg border border-zinc-200">
                    CAD & Render
                  </span>
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                  {standardPlan.subtitle}
                </p>
              </div>

              {/* Price Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-zinc-900 tracking-tight">
                    {standardPlan.annualPrice.toLocaleString()} {standardPlan.currency}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 font-bold">
                    {t.pricing.periodAnnual}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1">
                  <i className="fa-solid fa-circle-check text-[10px]"></i>
                  <span>{isTr ? 'Yıllık Sürüm • 365 Gün Kesintisiz Erişim' : 'Annual Edition • 365 Days Full Access'}</span>
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <ul className="space-y-2.5 text-xs text-zinc-700">
                  {standardPlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <i className="fa-solid fa-check text-zinc-900 mt-0.5 shrink-0 text-xs"></i>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Action Button */}
            <div className="pt-8 mt-8 border-t border-zinc-100 space-y-3">
              <a
                href={brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-extrabold text-xs sm:text-sm shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer text-center bg-zinc-100 hover:bg-zinc-200 text-zinc-900 border border-zinc-300"
              >
                <span>{standardPlan.cta}</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>

              <p className="text-center text-[11px] text-zinc-500 font-mono">
                {t.pricing.noCardNeeded}
              </p>
            </div>
          </div>

          {/* Card 2: CNC Plan (Popular) */}
          <div className="rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative shadow-xl bg-zinc-900 text-white border-2 border-zinc-900 md:-translate-y-2">
            
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-amber-400 text-zinc-950 text-xs font-mono font-black shadow-md tracking-wider uppercase flex items-center gap-1.5">
              <i className="fa-solid fa-star text-[10px]"></i>
              <span>{t.pricing.popularBadge}</span>
            </div>

            <div className="space-y-6">
              {/* Plan Header */}
              <div className="space-y-2 border-b border-zinc-800 pb-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-white">{cncPlan.name}</h3>
                  <span className="text-[11px] font-mono text-zinc-950 font-bold uppercase bg-white px-2.5 py-1 rounded-lg">
                    FULL CAM & CNC
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {cncPlan.subtitle}
                </p>
              </div>

              {/* Price Display */}
              <div className="space-y-1">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {cncPlan.annualPrice.toLocaleString()} {cncPlan.currency}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 font-bold">
                    {t.pricing.periodAnnual}
                  </span>
                </div>
                <p className="text-[11px] font-mono text-amber-400 font-bold flex items-center gap-1">
                  <i className="fa-solid fa-bolt text-[10px]"></i>
                  <span>{isTr ? 'Yıllık Sürüm • Tüm CNC Post İşlemcileri Dahil' : 'Annual Edition • All CNC Post Processors Included'}</span>
                </p>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-2">
                <ul className="space-y-2.5 text-xs text-zinc-300">
                  {cncPlan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <i className="fa-solid fa-check text-emerald-400 mt-0.5 shrink-0 text-xs"></i>
                      <span className="leading-snug">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Card Action Button */}
            <div className="pt-8 mt-8 border-t border-zinc-800 space-y-3">
              <a
                href={brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl font-black text-xs sm:text-sm shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer text-center bg-white hover:bg-zinc-100 text-zinc-900"
              >
                <span>{cncPlan.cta}</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>

              <p className="text-center text-[11px] text-zinc-400 font-mono">
                {t.pricing.noCardNeeded}
              </p>
            </div>
          </div>

        </div>

        {/* Enterprise & WhatsApp Custom Quote Box */}
        <div className="mt-12 max-w-5xl mx-auto rounded-3xl bg-white border border-zinc-200 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-black text-zinc-900">
              {t.pricing.customSetupTitle}
            </h4>
            <p className="text-xs text-zinc-600 max-w-xl font-normal">
              {t.pricing.customSetupDesc}
            </p>
          </div>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2 cursor-pointer shrink-0"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>{t.common.whatsappSupport}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
