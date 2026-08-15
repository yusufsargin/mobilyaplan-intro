import React from 'react';
import { MobilyaPlanLogo } from './MobilyaPlanLogo';
import { useLanguage } from '../i18n/LanguageContext';
import { getProductUrl } from '../config/urls';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const { t, language, getWhatsAppUrl } = useLanguage();
  if (!isOpen) return null;

  const brandUrl = getProductUrl(language);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 text-white text-center space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label={t.common.close}
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        <div className="mx-auto flex justify-center">
          <MobilyaPlanLogo className="w-16 h-16 shadow-2xl" />
        </div>

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300">
            <i className="fa-solid fa-bolt text-white"></i>
            <span>{t.trialModal.badge}</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            {t.trialModal.title}
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-normal">
            {t.trialModal.desc}
          </p>
        </div>

        {/* 3 bullet points */}
        <div className="p-3 bg-zinc-900/60 rounded-xl border border-zinc-800 text-left text-xs space-y-1.5 font-mono text-zinc-300">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-check text-white"></i>
            <span>{t.trialModal.bullet1}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-check text-white"></i>
            <span>{t.trialModal.bullet2}</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-check text-white"></i>
            <span>{t.trialModal.bullet3}</span>
          </div>
        </div>

        <div className="pt-2 space-y-3">
          <a
            href={brandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-sm shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.trialModal.cta}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-855 text-white font-bold text-xs sm:text-sm border border-zinc-700 shadow flex items-center justify-center gap-2 cursor-pointer"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>{t.common.whatsappSupport}</span>
          </a>
        </div>

        <p className="text-xs text-zinc-500 font-mono">
          {t.trialModal.note}
        </p>

      </div>
    </div>
  );
};
