import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface TestimonialsSectionProps {
  onOpenTrialModal: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 lg:py-28 bg-zinc-50/70 text-zinc-900 border-t border-zinc-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider">
            <i className="fa-solid fa-comments text-zinc-700"></i>
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            {t.testimonials.titleLine1} <br />
            <span className="text-zinc-500">
              {t.testimonials.titleLine2}
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg font-normal">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xs relative hover:border-zinc-400 hover:shadow-md transition-all duration-300 space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Stars Rating */}
                <div className="flex items-center gap-1 text-amber-500 text-xs">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-zinc-700 text-sm leading-relaxed font-normal">
                  "{item.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-zinc-200 border border-zinc-300 flex items-center justify-center font-bold text-xs text-zinc-800 font-mono">
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{item.name}</h4>
                    <p className="text-xs text-zinc-500">{item.role}</p>
                    <p className="text-[10px] text-zinc-400 font-mono">{item.location}</p>
                  </div>
                </div>

                <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-zinc-200 text-zinc-700 border border-zinc-300 hidden sm:inline-block">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-12 text-center text-xs text-zinc-500 font-mono">
          <p>{t.testimonials.bottomNote}</p>
        </div>

      </div>
    </section>
  );
};
