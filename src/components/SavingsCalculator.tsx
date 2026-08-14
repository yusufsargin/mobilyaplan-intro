import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

interface SavingsCalculatorProps {
  onOpenTrialModal: () => void;
}

export const SavingsCalculator: React.FC<SavingsCalculatorProps> = () => {
  const { t, language } = useLanguage();
  const isTr = language === 'tr';
  const brandUrl = isTr ? 'https://www.mobilyaplan.com/' : 'https://www.furnituredraw.com/';
  const [monthlyPlates, setMonthlyPlates] = useState<number>(120);
  const [plateCost, setPlateCost] = useState<number>(isTr ? 1400 : 45);

  const currencySymbol = isTr ? '₺' : '$';

  // Math Calculations:
  const savedPlates = Math.max(1, Math.round(monthlyPlates * 0.16));
  const savedPlatesMoney = savedPlates * plateCost;

  // Yearly savings
  const yearlySavings = savedPlatesMoney * 12;
  const yearlyPlates = savedPlates * 12;
  const savedCamHours = Math.round(monthlyPlates * 0.25);
  const savedTrees = Math.max(1, Math.round(yearlyPlates * 0.18));

  return (
    <section id="tasarruf-hesaplayici" className="py-20 lg:py-28 bg-zinc-50/70 text-zinc-900 border-t border-zinc-200">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider">
            <i className="fa-solid fa-calculator text-zinc-700"></i>
            <span>{t.savings.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
            {t.savings.titleLine1} <br />
            <span className="text-zinc-500">
              {t.savings.titleLine2}
            </span>
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg font-normal">
            {t.savings.subtitle}
          </p>
        </div>

        {/* Quick Presets */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 text-xs font-mono">
          <span className="text-zinc-500 mr-1">{t.savings.quickSelect}</span>
          <button
            onClick={() => { setMonthlyPlates(40); setPlateCost(isTr ? 1400 : 45); }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
              monthlyPlates === 40
                ? 'bg-zinc-900 text-white border-zinc-900 font-bold shadow-xs'
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            {t.savings.preset1}
          </button>
          <button
            onClick={() => { setMonthlyPlates(150); setPlateCost(isTr ? 1400 : 45); }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
              monthlyPlates === 150
                ? 'bg-zinc-900 text-white border-zinc-900 font-bold shadow-xs'
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            {t.savings.preset2}
          </button>
          <button
            onClick={() => { setMonthlyPlates(450); setPlateCost(isTr ? 1400 : 45); }}
            className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
              monthlyPlates === 450
                ? 'bg-zinc-900 text-white border-zinc-900 font-bold shadow-xs'
                : 'bg-zinc-100 border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-200/60'
            }`}
          >
            {t.savings.preset3}
          </button>
        </div>

        {/* Calculator Main Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Sliders */}
          <div className="lg:col-span-6 bg-zinc-50 border border-zinc-200 rounded-3xl p-6 sm:p-8 space-y-6 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-lg font-bold text-zinc-900 border-b border-zinc-200 pb-3 flex items-center gap-2">
                <i className="fa-solid fa-sliders text-zinc-600"></i>
                <span>{t.savings.infoTitle}</span>
              </h3>

              {/* Slider 1: Monthly Board Consumption */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-600">{t.savings.slider1Label}</span>
                  <strong className="text-zinc-900 text-sm bg-white px-3 py-1 rounded-lg border border-zinc-300 shadow-xs">
                    {monthlyPlates} {t.savings.slider1Unit}
                  </strong>
                </div>
                <input
                  type="range"
                  min="20"
                  max="600"
                  step="10"
                  value={monthlyPlates}
                  onChange={(e) => setMonthlyPlates(Number(e.target.value))}
                  className="w-full accent-zinc-900 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>20</span>
                  <span>300</span>
                  <span>600 {t.savings.slider1Unit}</span>
                </div>
              </div>

              {/* Slider 2: Plate Price */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-zinc-600">{t.savings.slider2Label}</span>
                  <strong className="text-zinc-900 text-sm bg-white px-3 py-1 rounded-lg border border-zinc-300 shadow-xs">
                    {plateCost.toLocaleString()} {currencySymbol}
                  </strong>
                </div>
                <input
                  type="range"
                  min={isTr ? 600 : 20}
                  max={isTr ? 3500 : 150}
                  step={isTr ? 50 : 5}
                  value={plateCost}
                  onChange={(e) => setPlateCost(Number(e.target.value))}
                  className="w-full accent-zinc-900 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
                  <span>{isTr ? '600 ₺' : '$20'}</span>
                  <span>{isTr ? '2.000 ₺' : '$85'}</span>
                  <span>{isTr ? '3.500 ₺' : '$150'}</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-2xl border border-zinc-200 text-xs text-zinc-600 leading-relaxed font-normal shadow-xs">
              {t.savings.infoDesc}
            </div>
          </div>

          {/* Right Column: Calculated ROI Results Card */}
          <div className="lg:col-span-6 bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                <span className="text-xs font-mono uppercase tracking-wider text-zinc-400">{t.savings.estimatedTitle}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-500 text-zinc-950 font-mono font-bold text-xs">
                  %16 NET
                </span>
              </div>

              {/* Big Hero Number: Total Yearly Gain */}
              <div className="space-y-1">
                <p className="text-xs text-zinc-400 font-mono">{t.savings.estimatedSubtitle}</p>
                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                  +{yearlySavings.toLocaleString()} {currencySymbol}
                  <span className="text-sm font-mono text-zinc-400 font-normal"> / {isTr ? 'yıl' : 'yr'}</span>
                </div>
              </div>

              {/* 3 Result Highlights */}
              <div className="space-y-3 font-mono text-xs pt-2">
                <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700/80 flex items-center justify-between">
                  <span className="text-zinc-300 flex items-center gap-2">
                    <i className="fa-solid fa-money-bill-wave text-emerald-400"></i>
                    <span>{t.savings.statMonthlySavings}</span>
                  </span>
                  <strong className="text-white text-sm">+{savedPlatesMoney.toLocaleString()} {currencySymbol} / {isTr ? 'ay' : 'mo'}</strong>
                </div>

                <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700/80 flex items-center justify-between">
                  <span className="text-zinc-300 flex items-center gap-2">
                    <i className="fa-solid fa-layer-group text-amber-400"></i>
                    <span>{t.savings.statBoardsSaved}</span>
                  </span>
                  <strong className="text-white text-sm">~{yearlyPlates} {t.savings.statBoardsUnit}</strong>
                </div>

                <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700/80 flex items-center justify-between">
                  <span className="text-zinc-300 flex items-center gap-2">
                    <i className="fa-solid fa-clock text-blue-400"></i>
                    <span>{t.savings.statCamTime}</span>
                  </span>
                  <strong className="text-white text-sm">~{savedCamHours} {t.savings.statCamUnit}</strong>
                </div>

                <div className="p-3 bg-zinc-800/80 rounded-xl border border-zinc-700/80 flex items-center justify-between">
                  <span className="text-zinc-300 flex items-center gap-2">
                    <i className="fa-solid fa-tree text-emerald-400"></i>
                    <span>{t.savings.statTreesSaved}</span>
                  </span>
                  <strong className="text-white text-sm font-bold">~{savedTrees} {t.savings.statTreesUnit}</strong>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-zinc-800 space-y-3">
              <a
                href={brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-900 font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer text-center"
              >
                <span>{t.savings.ctaBtn}</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
