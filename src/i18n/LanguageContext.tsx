import React, { createContext, useContext } from 'react';
import { LOCALE_PATH } from '../config/seo';
import { translations, type TranslationKeys } from './translations';

export type Language = 'tr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationKeys;
  getWhatsAppUrl: (customMsg?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode; initialLanguage: Language }> = ({
  children,
  initialLanguage,
}) => {
  const language = initialLanguage;

  const setLanguage = (lang: Language) => {
    if (lang === language || typeof window === 'undefined') return;
    window.location.assign(LOCALE_PATH[lang]);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'tr' ? 'en' : 'tr');
  };

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
