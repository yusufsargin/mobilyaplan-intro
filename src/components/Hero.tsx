import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface HeroProps {
  onOpenTrialModal?: () => void;
  onOpenVideoModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const { t, language } = useLanguage();
  const isTr = language === 'tr';
  const brandUrl = isTr ? 'https://www.mobilyaplan.com/' : 'https://www.furnituredraw.com/';

  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white text-zinc-900 border-b border-zinc-200">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-300/80 text-zinc-800 text-xs font-mono font-bold tracking-wide shadow-xs mb-6">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span>{t.hero.statusBadge}</span>
        </div>

        {/* 2. Main Slogan / Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight leading-[1.12] max-w-4xl mx-auto">
          <span>{t.hero.titleLine1}</span> <br />
          <span className="text-zinc-500 font-extrabold">{t.hero.titleLine2}</span>
        </h1>

        {/* 3. Breathable Subtitle */}
        <p className="mt-5 text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* 4. Single Prominent CTA Button & Trust Note */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <a
            href={brandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-10 py-4.5 rounded-2xl bg-zinc-900 hover:bg-zinc-800 text-white font-black text-base shadow-xl transition-all duration-200 flex items-center justify-center gap-3 group cursor-pointer"
          >
            <span>{t.hero.ctaPrimary}</span>
            <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1.5 transition-transform"></i>
          </a>

          <p className="text-xs text-zinc-500 font-mono flex items-center gap-2 mt-1">
            <i className="fa-solid fa-circle-check text-emerald-600 text-[11px]"></i>
            <span>{t.hero.trustNote}</span>
          </p>
        </div>

        {/* 5. Central YouTube Showcase Video Mockup Frame */}
        <div className="mt-12 lg:mt-14 max-w-4xl mx-auto">
          <div className="bg-white border border-zinc-300 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            
            {/* macOS Styled Window Header */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-zinc-100 border-b border-zinc-200 text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400"></span>
                <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                <span className="ml-2 font-bold text-zinc-700 hidden sm:inline-block">
                  {t.hero.videoTitle}
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span className="font-bold text-zinc-800 text-[11px]">HD 1080p</span>
              </div>
            </div>

            {/* 16:9 Responsive Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/vz0uWi_WWpY?rel=0&modestbranding=1"
                title="MobilyaPlan Tanıtım Videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Bottom Audience & Target User Cards */}
            <div className="p-4 sm:p-5 bg-zinc-50 border-t border-zinc-200 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <i className="fa-solid fa-hammer text-zinc-700"></i>
                  <span>{t.hero.audienceTag1}</span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-snug">
                  {t.hero.audienceTag1Desc}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <i className="fa-solid fa-compass-drafting text-zinc-700"></i>
                  <span>{t.hero.audienceTag2}</span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-snug">
                  {t.hero.audienceTag2Desc}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                  <i className="fa-solid fa-user-gear text-zinc-700"></i>
                  <span>{t.hero.audienceTag3}</span>
                </div>
                <p className="text-[11px] text-zinc-600 leading-snug">
                  {t.hero.audienceTag3Desc}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
