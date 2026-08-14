import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface MobilyaPlanLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const MobilyaPlanLogo: React.FC<MobilyaPlanLogoProps> = ({
  className = 'w-10 h-10',
  showText = false,
}) => {
  const { language, t } = useLanguage();
  const isTr = language === 'tr';

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Exact Vector Emblem of CAD System with Dynamic Branding */}
      <svg
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full shrink-0 shadow-lg rounded-full"
      >
        {/* Outer Circular Charcoal Background */}
        <circle cx="200" cy="200" r="198" fill="#2d2d2d" stroke="#1f1f1f" strokeWidth="4" />

        {/* Center Black Container Square */}
        <rect x="62" y="62" width="276" height="276" fill="#000000" />

        {/* Left Column Bars / CAD Blueprint Pillars */}
        {/* Left Bar (Full height) */}
        <rect x="80" y="78" width="36" height="180" fill="#FFFFFF" />
        {/* Center Dip (Short top bar) */}
        <rect x="132" y="78" width="36" height="92" fill="#FFFFFF" />
        {/* Center Right Bar (Full height) */}
        <rect x="184" y="78" width="36" height="180" fill="#FFFFFF" />

        {/* Right Section Bars */}
        {/* Right Pillar (Full height) */}
        <rect x="236" y="78" width="36" height="180" fill="#FFFFFF" />
        {/* Right Hook */}
        <rect x="286" y="78" width="36" height="92" fill="#FFFFFF" />

        {/* Red Banner at the Bottom */}
        <rect x="62" y="276" width="276" height="62" fill="#E50914" />

        {/* Dynamic Brand Text in Red Banner: MobilyaPlan or FurnitureDraw */}
        <text
          x="200"
          y="318"
          fill="#FFFFFF"
          textAnchor="middle"
          fontSize={isTr ? "34" : "28"}
          fontWeight="700"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif"
          letterSpacing="-0.3px"
        >
          {isTr ? 'MobilyaPlan' : 'FurnitureDraw'}
        </text>
      </svg>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-lg font-black tracking-tight text-white leading-none">
            {isTr ? (
              <>Mobilya<span className="text-zinc-400">Plan</span></>
            ) : (
              <>Furniture<span className="text-zinc-400">Draw</span></>
            )}
          </span>
          <span className="text-[10px] font-mono text-zinc-500 mt-1">{t.common.brandSubtitle}</span>
        </div>
      )}
    </div>
  );
};
