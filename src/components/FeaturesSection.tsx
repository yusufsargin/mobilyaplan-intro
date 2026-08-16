import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface FeaturesSectionProps {
  onOpenTrialModal: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = () => {
  const { t } = useLanguage();

  return (
    <section id="ozellikler" className="py-20 lg:py-28 bg-white text-zinc-900 border-t border-zinc-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider">
            <i className="fa-solid fa-bolt text-zinc-700"></i>
            <span>{t.features.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
            {t.features.titleLine1} <br />
            <span className="text-zinc-500">
              {t.features.titleLine2}
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
            {t.features.subtitle}
          </p>
        </div>

        {/* Features Grid (3x2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.features.items.map((feature) => (
            <div
              key={feature.id}
              className="relative rounded-3xl bg-white border border-zinc-200 p-6 sm:p-8 hover:border-zinc-400 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between shadow-xs"
            >
              <div className="space-y-4">
                {/* Top Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 text-xl group-hover:bg-zinc-900 group-hover:text-white transition-colors duration-200 shadow-xs">
                    <i className={`fa-solid ${feature.icon}`}></i>
                  </div>

                  <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-700">
                    {feature.badge}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors">
                  {feature.title}
                </h3>

                {/* Card Description */}
                <p className="text-zinc-600 text-sm leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
