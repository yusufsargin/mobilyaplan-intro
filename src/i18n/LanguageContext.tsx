import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, TranslationKeys } from './translations';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationKeys;
  getWhatsAppUrl: (customMsg?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'mobilyaplan_lang';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check user preference stored in localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'tr' || saved === 'en') {
        return saved;
      }
      // 2. Auto-detect from browser locale
      const browserLang = (navigator.language || (navigator as any).userLanguage || '').toLowerCase();
      if (browserLang.startsWith('tr')) {
        return 'tr';
      }
      return 'en'; // Default to English for international visitors
    }
    return 'tr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;

      if (language === 'tr') {
        document.title = 'Yeni Nesil Mobilya Çizim Programı | MobilyaPlan';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute(
            'content',
            'Yeni Nesil 3D Mobilya Çizim Programı. Marangozlardan iç mimarlara herkes için 10 dakikada öğrenilen kolay, hızlı bulut tabanlı 3D dolap tasarımı, akıllı nesting ve anında fotogerçekçi render.'
          );
        }
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
          canonical.setAttribute('href', 'https://www.mobilyaplan.com/');
        }
      } else {
        document.title = 'FurnitureDraw • Next-Gen 3D Furniture Design Tool | Fast & Easy CAD';
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
          metaDesc.setAttribute(
            'content',
            'Next-Gen 3D Furniture Design Tool. Fast, easy and cloud-based cabinet CAD design, smart nesting optimization, and instant 4K photorealistic renders for woodshops and designers.'
          );
        }
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
          canonical.setAttribute('href', 'https://www.furnituredraw.com/');
        }
      }
    }
  }, [language]);

  const getWhatsAppUrl = (customMsg?: string) => {
    const defaultMsg =
      language === 'tr'
        ? 'Merhaba, MobilyaPlan hakkında bilgi ve demo istiyorum.'
        : 'Hello! I would like to get more information about FurnitureDraw.';
    const msg = customMsg || defaultMsg;
    return `https://wa.me/905327153356?text=${encodeURIComponent(msg)}`;
  };

  const currentTranslations = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: currentTranslations,
        getWhatsAppUrl,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
