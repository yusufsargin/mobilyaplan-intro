import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface LanguageToggleProps {
  variant?: 'compact' | 'expanded';
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({ variant = 'compact', className = '' }) => {
  const { language, setLanguage } = useLanguage();

  if (variant === 'expanded') {
    return (
      <div className={`flex items-center gap-1.5 p-1 bg-zinc-100 rounded-xl border border-zinc-200 ${className}`}>
        <button
          type="button"
          onClick={() => setLanguage('tr')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            language === 'tr'
              ? 'bg-zinc-900 text-white font-black shadow-xs'
              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
          }`}
          aria-label="Türkçe Dilini Seç"
        >
          <span className="text-sm">🇹🇷</span>
          <span>Türkçe (TR)</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-zinc-900 text-white font-black shadow-xs'
              : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
          }`}
          aria-label="Select English Language"
        >
          <span className="text-sm">🇬🇧</span>
          <span>English (EN)</span>
        </button>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center bg-zinc-100 p-0.5 rounded-xl border border-zinc-300 font-mono text-xs ${className}`}
      role="group"
      aria-label="Language selector"
    >
      <button
        type="button"
        onClick={() => setLanguage('tr')}
        className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
          language === 'tr'
            ? 'bg-zinc-900 text-white font-black shadow-xs'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
        }`}
        title="Türkçe"
        aria-pressed={language === 'tr'}
      >
        <span className="text-xs">🇹🇷</span>
        <span>TR</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
          language === 'en'
            ? 'bg-zinc-900 text-white font-black shadow-xs'
            : 'text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
        }`}
        title="English"
        aria-pressed={language === 'en'}
      >
        <span className="text-xs">🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  );
};
