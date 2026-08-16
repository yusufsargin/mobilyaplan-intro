import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getProductUrl } from '../config/urls';

const FB_PAGE_URL = 'https://www.facebook.com/MobilyaPlan/';
const FB_PLUGIN_MIN_WIDTH = 180;
const FB_PLUGIN_MAX_WIDTH = 500;
const FB_PLUGIN_HEIGHT = 500;

interface WorkshopGallerySectionProps {
  onOpenTrialModal?: () => void;
}

export const WorkshopGallerySection: React.FC<WorkshopGallerySectionProps> = ({ onOpenTrialModal }) => {
  const { t, language } = useLanguage();
  const isTr = language === 'tr';
  const brandUrl = getProductUrl(language);
  const gallery = t.workshopGallery;

  // Selected state for Video Play Modal
  const [activeVideoModal, setActiveVideoModal] = useState<{
    title: string;
    embedUrl: string;
    videoUrl: string;
  } | null>(null);

  // Selected state for Inline Video Player
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);

  // Facebook Page Plugin maxes out at 500px. Measure the card, request the
  // widest allowed plugin, then scale it so posts fill the container.
  const fbContainerRef = useRef<HTMLDivElement>(null);
  const [fbPluginWidth, setFbPluginWidth] = useState(FB_PLUGIN_MAX_WIDTH);
  const [fbScale, setFbScale] = useState(1);

  useEffect(() => {
    const el = fbContainerRef.current;
    if (!el) return;

    const updateWidth = () => {
      const containerWidth = Math.round(el.clientWidth);
      if (!containerWidth) return;
      const pluginWidth = Math.min(FB_PLUGIN_MAX_WIDTH, Math.max(FB_PLUGIN_MIN_WIDTH, containerWidth));
      setFbPluginWidth(pluginWidth);
      setFbScale(containerWidth / pluginWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fbEmbedSrc = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(FB_PAGE_URL)}&tabs=timeline&width=${fbPluginWidth}&height=${FB_PLUGIN_HEIGHT}&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

  return (
    <section id="galeri" className="py-20 lg:py-28 bg-zinc-50/70 text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* ========================================================================= */}
        {/* 1. FACEBOOK GRUBU CANLI TOPLULUK AKIŞI (OFFICIAL FEED / EMBED WIDGET) */}
        {/* ========================================================================= */}
        <div className="space-y-10">
          {/* Section Header & Facebook Action Button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-zinc-200/80">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-mono font-bold uppercase tracking-wider">
                <i className="fa-brands fa-facebook text-blue-600 text-sm"></i>
                <span>{isTr ? 'Facebook Canlı Topluluk Akışı' : 'Live Facebook Community Feed'}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
                {isTr
                  ? 'Atölyelerden & Facebook Topluluğumuzdan Gerçek Kareler'
                  : 'Real Workshop Projects & Facebook Community Feed'}
              </h2>

              <p className="text-zinc-600 text-base sm:text-lg font-normal leading-relaxed">
                {isTr
                  ? 'MobilyaPlan kullanıcılarının kendi atölyelerinde kesip montajını tamamladığı gerçek projeler, canlı gönderiler ve imalat paylaşımları.'
                  : 'Real custom cabinetry projects, live workshop updates, and assembly photos shared by our user community.'}
              </p>
            </div>

            {/* Direct Facebook Group Action Button */}
            <div className="w-full md:w-auto shrink-0">
              <a
                href="https://www.facebook.com/MobilyaPlan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-2xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <i className="fa-brands fa-facebook text-base shrink-0"></i>
                <span className="md:hidden">{isTr ? "Facebook'ta İncele" : 'View on Facebook'}</span>
                <span className="hidden md:inline">{isTr ? 'Facebook Grubumuza Katılın & Paylaşımları Görün ↗' : 'Join Facebook Group & View Posts ↗'}</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* Facebook Live Feed Container / Responsive Iframe & Community Window */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Facebook Page Live Embed Box */}
            <div className="lg:col-span-8 rounded-3xl bg-white border border-zinc-200 shadow-md overflow-hidden flex flex-col">
              {/* Facebook Box Top Bar */}
              <div className="px-4 sm:px-6 py-4 bg-gradient-to-r from-[#1877F2] to-[#0D65D9] text-white flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-white text-[#1877F2] flex items-center justify-center font-bold text-xl shadow-xs shrink-0">
                    <i className="fa-brands fa-facebook-f"></i>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <h4 className="font-bold text-sm sm:text-base leading-none truncate">MobilyaPlan Topluluğu</h4>
                      <i className="fa-solid fa-circle-check text-white text-xs shrink-0" title="Resmi Sayfa"></i>
                    </div>
                    <p className="text-xs text-blue-100 font-mono mt-0.5 break-words">@MobilyaPlan • Canlı Atölye & İmalat Akışı</p>
                  </div>
                </div>

                <a
                  href="https://www.facebook.com/MobilyaPlan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start sm:self-auto shrink-0 px-3.5 py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-colors inline-flex items-center gap-1.5 backdrop-blur-xs"
                >
                  <span>{isTr ? 'Takip Et' : 'Follow'}</span>
                  <i className="fa-solid fa-plus text-xs"></i>
                </a>
              </div>

              {/* Responsive Facebook Page Plugin / Iframe Feed Container */}
              <div
                ref={fbContainerRef}
                className="relative w-full bg-white overflow-hidden"
                style={{ height: FB_PLUGIN_HEIGHT * fbScale }}
              >
                <iframe
                  key={fbPluginWidth}
                  src={fbEmbedSrc}
                  width={fbPluginWidth}
                  height={FB_PLUGIN_HEIGHT}
                  style={{
                    border: 'none',
                    overflow: 'hidden',
                    width: fbPluginWidth,
                    height: FB_PLUGIN_HEIGHT,
                    transform: `scale(${fbScale})`,
                    transformOrigin: 'top left',
                  }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="block bg-white"
                  title="MobilyaPlan Facebook Live Feed"
                ></iframe>
              </div>

              {/* Bottom Card Footer with Direct Link */}
              <div className="px-6 py-4 bg-zinc-50 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-zinc-600 font-medium text-center sm:text-left">
                  {isTr
                    ? '💡 Binlerce marangoz ve mobilya üreticisinin paylaştığı güncel CNC kesim videoları ve montaj fotoğrafları.'
                    : '💡 Live machining videos, CNC tips, and cabinetry assembly photos shared daily by workshop owners.'}
                </span>

                <a
                  href="https://www.facebook.com/MobilyaPlan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166FE5] text-white font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2"
                >
                  <span className="sm:hidden">{isTr ? "Facebook'ta İncele" : 'View on Facebook'}</span>
                  <span className="hidden sm:inline">{isTr ? 'Facebook Grubumuza Katılın & Paylaşımları Görün ↗' : 'Join Facebook Group & View Posts ↗'}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              {/* Fast Trial Card */}
              <div className="p-6 rounded-3xl bg-zinc-900 text-white space-y-3 shadow-md">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono font-bold">
                  <i className="fa-solid fa-bolt"></i>
                  <span>{isTr ? 'Hemen Başlayın' : 'Get Started'}</span>
                </div>
                <h4 className="text-base font-bold text-white leading-snug">
                  {isTr ? '3 Gün Ücretsiz Deneyin' : 'Try 3 Days for Free'}
                </h4>
                <p className="text-xs text-zinc-300 font-normal leading-relaxed">
                  {isTr
                    ? 'Kredi kartı gerekmeden tüm modül, nesting ve render özelliklerini atölyenizde test edin.'
                    : 'Test parametric CAD, nested G-code export, and 4K AI rendering in your workshop today.'}
                </p>
                <div className="pt-1">
                  <a
                    href={brandUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>{isTr ? 'Ücretsiz Başla' : 'Start Free Trial'}</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* ========================================================================= */}
        {/* 2. YOUTUBE KANAL AKIŞI & GERÇEK 3'LÜ VİDEO KART GRİDİ (@mobilyaplan) */}
        {/* ========================================================================= */}
        <div className="space-y-10 pt-8 border-t border-zinc-200">
          
          {/* YouTube Section Header & Button */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-700 text-xs font-mono font-bold uppercase tracking-wider">
                <i className="fa-brands fa-youtube text-red-600 text-sm"></i>
                <span>{gallery.youtubeBadge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-zinc-900 tracking-tight leading-tight">
                {gallery.youtubeTitle}
              </h3>

              <p className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed">
                {gallery.youtubeSubtitle}
              </p>
            </div>

            {/* Direct YouTube Channel Button */}
            <div className="w-full md:w-auto shrink-0">
              <a
                href={gallery.youtubeButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-2xl bg-[#FF0000] hover:bg-[#E60000] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <i className="fa-brands fa-youtube text-base shrink-0"></i>
                <span className="md:hidden">{isTr ? "YouTube'da İzle" : 'Watch on YouTube'}</span>
                <span className="hidden md:inline">{gallery.youtubeButtonText}</span>
                <i className="fa-solid fa-arrow-up-right-from-square text-xs shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
              </a>
            </div>
          </div>

          {/* 3 Real YouTube Video Cards Matching Exact Requirements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {gallery.videos.map((video) => {
              const isPlayingInCard = playingVideoId === video.id;

              return (
                <div
                  key={video.id}
                  className="rounded-3xl bg-white border border-zinc-200 overflow-hidden shadow-xs hover:border-red-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Video Player or Interactive Thumbnail Overlay */}
                    <div className="relative aspect-16/9 overflow-hidden bg-zinc-950">
                      {isPlayingInCard ? (
                        <iframe
                          src={`${video.embedUrl}?autoplay=1&rel=0`}
                          title={video.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <div
                          className="relative w-full h-full cursor-pointer"
                          onClick={() => {
                            setPlayingVideoId(video.id);
                          }}
                        >
                          <img
                            src={video.thumbnail}
                            alt={video.title}
                            className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 opacity-90"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3">
                            <span className="px-2.5 py-1 rounded-full bg-black/80 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-xs border border-zinc-700">
                              {video.badge}
                            </span>
                          </div>

                          {/* Duration Pill */}
                          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/80 text-white text-xs font-mono font-bold backdrop-blur-xs flex items-center gap-1">
                            <i className="fa-regular fa-clock text-xs text-red-400"></i>
                            <span>{video.duration}</span>
                          </div>

                          {/* Centered Play Button */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-13 h-13 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-red-500 transition-all duration-300">
                              <i className="fa-solid fa-play text-base ml-1"></i>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Video Info Area */}
                    <div className="p-5 sm:p-6 space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-xs text-zinc-500 font-mono">
                        <span className="flex items-center gap-1.5 text-red-600 font-bold text-xs min-w-0">
                          <i className="fa-brands fa-youtube shrink-0"></i>
                          <span>@mobilyaplan</span>
                        </span>
                        <span className="shrink-0">{video.views}</span>
                      </div>

                      <h4
                        className="text-base font-bold text-zinc-900 group-hover:text-red-600 transition-colors leading-snug cursor-pointer"
                        onClick={() => {
                          setActiveVideoModal({
                            title: video.title,
                            embedUrl: video.embedUrl,
                            videoUrl: video.videoUrl,
                          });
                        }}
                      >
                        {video.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal line-clamp-2">
                        {video.desc}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Card Actions: Play in Modal or Direct Watch on YouTube */}
                  <div className="p-5 sm:p-6 pt-0 space-y-2.5">
                    <div className="pt-3 border-t border-zinc-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between text-xs font-bold gap-2">
                      <button
                        onClick={() => {
                          setActiveVideoModal({
                            title: video.title,
                            embedUrl: video.embedUrl,
                            videoUrl: video.videoUrl,
                          });
                        }}
                        className="flex-1 py-2 px-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-900 transition-colors flex items-center justify-center gap-1.5 cursor-pointer text-xs"
                      >
                        <i className="fa-solid fa-expand text-xs"></i>
                        <span>{isTr ? 'Büyük Ekranda İzle' : 'Watch in Lightbox'}</span>
                      </button>

                      <a
                        href={video.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2 px-3 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 transition-colors flex items-center justify-center gap-1.5 text-xs"
                      >
                        <i className="fa-brands fa-youtube text-xs"></i>
                        <span>{isTr ? "YouTube'da İzle ↗" : 'Watch on YouTube ↗'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Social Proof Global Conversion Banner */}
          <div className="mt-8 rounded-3xl bg-zinc-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1.5 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-black text-white flex flex-wrap items-center justify-center sm:justify-start gap-2">
                <i className="fa-solid fa-industry text-amber-400 shrink-0"></i>
                <span>{isTr ? 'Atölyenizde de Aynı Hız ve Sıfır Fireyi Yakalayın' : 'Achieve the Same Speed & Zero Waste in Your Shop'}</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl font-normal">
                {isTr
                  ? 'Tüm marangozlar ve CNC operatörleri için 10 dakikada öğrenilen pratik CAD/CAM çizim sistemi.'
                  : '10-minute easy CAD/CAM workflow engineered for cabinetmakers and CNC machine operators.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{gallery.ctaText}</span>
                <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>

              {onOpenTrialModal && (
                <button
                  onClick={onOpenTrialModal}
                  className="px-4 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer border border-zinc-700"
                >
                  {isTr ? '3 Günlük Deneme' : '3-Day Trial'}
                </button>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Video Lightbox Modal */}
      {activeVideoModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setActiveVideoModal(null)}
        >
          <div
            className="bg-zinc-950 rounded-3xl max-w-4xl w-full overflow-hidden border border-zinc-800 shadow-2xl relative my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Video Modal Header */}
            <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-900">
              <div className="flex items-center gap-2.5 min-w-0 pr-4">
                <i className="fa-brands fa-youtube text-red-500 text-lg shrink-0"></i>
                <h3 className="text-sm sm:text-base font-bold text-white truncate">
                  {activeVideoModal.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveVideoModal(null)}
                className="w-9 h-9 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center transition-colors cursor-pointer border border-zinc-700 shrink-0"
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            {/* Video Player Iframe */}
            <div className="relative aspect-16/9 w-full bg-black">
              <iframe
                src={`${activeVideoModal.embedUrl}?autoplay=1&rel=0`}
                title={activeVideoModal.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Modal Footer */}
            <div className="p-4 sm:p-5 bg-zinc-900 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-zinc-400 font-mono">
                {isTr ? 'MobilyaPlan Resmi YouTube Kanalı (@mobilyaplan)' : 'FurnitureDraw Official YouTube Channel (@mobilyaplan)'}
              </span>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={activeVideoModal.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <i className="fa-brands fa-youtube text-sm"></i>
                  <span>{isTr ? "YouTube'da İzle" : 'Watch on YouTube'}</span>
                </a>

                <button
                  onClick={() => setActiveVideoModal(null)}
                  className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-colors cursor-pointer border border-zinc-700"
                >
                  {gallery.modalClose}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
