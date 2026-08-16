import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getProductUrl } from '../config/urls';

interface ComparisonSectionProps {
  onOpenTrialModal?: () => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = () => {
  const { t, language } = useLanguage();
  const comp = t.comparison;
  const brandUrl = getProductUrl(language);

  return (
    <section id="karsilastirma" className="py-20 lg:py-28 bg-zinc-50/70 text-zinc-900 border-t border-zinc-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider">
            <i className="fa-solid fa-code-compare text-zinc-700"></i>
            <span>{comp.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            {comp.titleLine1} <br />
            <span className="text-zinc-500">
              {comp.titleLine2}
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            {comp.subtitle}
          </p>
        </div>

        {/* 4 Core Value Highlights (Bento Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {comp.highlights.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200 hover:border-zinc-400 hover:bg-zinc-100/60 transition-all duration-300 rounded-3xl p-6 flex flex-col justify-between group shadow-xs"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-300 flex items-center justify-center text-zinc-900 text-lg group-hover:bg-zinc-900 group-hover:text-white transition-colors shadow-xs">
                    <i className={`fa-solid ${item.icon}`}></i>
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-zinc-200/80 text-zinc-700 border border-zinc-300 uppercase">
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-base font-bold text-zinc-900 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-zinc-200 flex items-center gap-1.5 text-xs font-mono text-zinc-500 group-hover:text-zinc-800 transition-colors">
                <i className="fa-solid fa-check text-emerald-600"></i>
                <span>{t.common.brandName} Cloud Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Side-by-Side Comparison Table */}
        <div className="bg-white border border-zinc-200 rounded-3xl overflow-hidden shadow-xl">
          
          {/* Table Header / Column Labels */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-zinc-100 border-b border-zinc-200 text-xs font-mono font-bold text-zinc-800">
            <div className="md:col-span-3 p-4 sm:p-5 flex items-center">
              <span className="uppercase tracking-wider text-zinc-500">{comp.colCriterion}</span>
            </div>
            
            <div className="md:col-span-4 p-4 sm:p-5 flex items-center gap-2 border-t md:border-t-0 md:border-l border-zinc-200 text-zinc-600">
              <i className="fa-solid fa-desktop text-zinc-400"></i>
              <span>{comp.colTraditional}</span>
            </div>

            <div className="md:col-span-5 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-2 border-t md:border-t-0 md:border-l border-zinc-200 bg-zinc-200/50 text-zinc-900">
              <div className="flex items-center gap-2 min-w-0">
                <i className="fa-solid fa-bolt-lightning text-amber-600 shrink-0"></i>
                <span className="font-extrabold">{comp.colBrand}</span>
              </div>
              <span className="text-xs font-mono bg-zinc-900 text-white px-2 py-0.5 rounded font-black tracking-widest">
                {comp.brandTag}
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-zinc-200">
            {comp.rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 text-xs transition-colors hover:bg-zinc-50/80"
              >
                {/* Column 1: Criterion */}
                <div className="md:col-span-3 p-4 sm:p-5 flex flex-col justify-center">
                  <span className="font-bold text-zinc-900 text-sm md:text-xs">{row.criterion}</span>
                  <span className="text-xs text-zinc-500 font-mono mt-0.5">{row.advantage}</span>
                </div>

                {/* Column 2: Traditional Desktop CAD */}
                <div className="md:col-span-4 p-4 sm:p-5 md:border-l border-zinc-200 flex items-start gap-3 bg-zinc-50/50">
                  <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 text-xs">
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <p className="text-zinc-600 leading-relaxed">
                    {row.traditional}
                  </p>
                </div>

                {/* Column 3: Modern Brand (MobilyaPlan / FurnitureDraw) */}
                <div className="md:col-span-5 p-4 sm:p-5 md:border-l border-zinc-200 bg-emerald-50/30 flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs shadow-xs">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <p className="text-zinc-900 leading-relaxed font-medium">
                    {row.brand}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Table Footer Banner with Call to Action */}
          <div className="p-6 sm:p-8 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-bold text-zinc-900">{comp.ctaBtn}</h4>
              <p className="text-xs text-zinc-500 font-mono">{comp.ctaSubtext}</p>
            </div>

            <a
              href={brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer w-full sm:w-auto"
            >
              <span>{t.common.startTrialBtn}</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
