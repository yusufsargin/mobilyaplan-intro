import React from 'react';
import { LOCALE_PATH } from '../config/seo';
import { useLanguage } from '../i18n/LanguageContext';

interface LanguageToggleProps {
  variant?: 'compact' | 'expanded';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'compact', className = '' }) => {
  const { language } = useLanguage();

  if (variant === 'expanded') {
    return (
      <div className={`flex items-center gap-1.5 p-1 bg-zinc-100 rounded-xl border border-zinc-200 ${className}`}>
        <a
          href={LOCALE_PATH.tr}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            language === 'tr'
              ? 'bg-zinc-900 text-white font-black shadow-xs'
              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
          }`}
          aria-label="Türkçe Dilini Seç"
          aria-current={language === 'tr' ? 'page' : undefined}
        >
          <span className="text-sm">🇹🇷</span>
          <span>Türkçe (TR)</span>
        </a>
        <a
          href={LOCALE_PATH.en}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all ${
            language === 'en'
              ? 'bg-zinc-900 text-white font-black shadow-xs'
              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
          }`}
          aria-label="Select English Language"
          aria-current={language === 'en' ? 'page' : undefined}
        >
          <span className="text-sm">🇬🇧</span>
          <span>English (EN)</span>
        </a>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center bg-zinc-100 p-0.5 rounded-xl border border-zinc-300 font-mono text-xs shrink-0 ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <a
        href={LOCALE_PATH.tr}
        className={`px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5 ${
          language === 'tr'
            ? 'bg-zinc-900 text-white font-black shadow-xs'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
        }`}
        title="Türkçe"
        aria-current={language === 'tr' ? 'page' : undefined}
      >
        <span className="hidden sm:inline text-xs">🇹🇷</span>
        <span>TR</span>
      </a>

      <a
        href={LOCALE_PATH.en}
        className={`px-1.5 sm:px-2.5 py-1 sm:py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 sm:gap-1.5 ${
          language === 'en'
            ? 'bg-zinc-900 text-white font-black shadow-xs'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
        }`}
        title="English"
        aria-current={language === 'en' ? 'page' : undefined}
      >
        <span className="hidden sm:inline text-xs">🇬🇧</span>
        <span>EN</span>
      </a>
    </div>
  );
};
