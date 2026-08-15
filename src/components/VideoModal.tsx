import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getProductUrl } from '../config/urls';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenTrial: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const { t, language } = useLanguage();
  const brandUrl = getProductUrl(language);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl text-white">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-900 bg-black">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-bold">
              <i className="fa-solid fa-play text-xs text-black"></i>
            </div>
            <div>
              <h3 className="text-sm font-black text-white">{t.videoModal.title}</h3>
              <p className="text-xs text-zinc-500 font-mono">{t.common.brandSubtitle}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
            aria-label={t.common.close}
          >
            <i className="fa-solid fa-xmark text-lg"></i>
          </button>
        </div>

        {/* Real YouTube Video Player Box */}
        <div className="relative aspect-video bg-black border-b border-zinc-900 overflow-hidden text-white">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/vz0uWi_WWpY?autoplay=1&rel=0&modestbranding=1"
            title="MobilyaPlan Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 bg-black flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-zinc-400 font-mono">{t.videoModal.footerNote}</span>

          <a
            href={brandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-extrabold text-xs shadow-xl transition-all flex items-center gap-2 cursor-pointer text-center"
          >
            <span>{t.videoModal.cta}</span>
            <i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>

      </div>
    </div>
  );
};
