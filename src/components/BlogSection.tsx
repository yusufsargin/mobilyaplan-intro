import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { getProductUrl } from '../config/urls';

interface BlogSectionProps {
  onOpenTrialModal?: () => void;
  onOpenFullArticle?: (postId: string) => void;
  onOpenBlogPortal?: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  onOpenTrialModal,
  onOpenFullArticle,
  onOpenBlogPortal,
}) => {
  const { t, language } = useLanguage();
  const isTr = language === 'tr';
  const brandUrl = getProductUrl(language);
  const blog = t.blog;

  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const activePost = blog.posts.find((p) => p.id === selectedPostId) || null;

  const handleReadFull = (postId: string) => {
    setSelectedPostId(null);
    if (onOpenFullArticle) {
      onOpenFullArticle(postId);
    } else if (onOpenBlogPortal) {
      onOpenBlogPortal();
    }
  };

  return (
    <section id="blog" className="py-20 lg:py-28 bg-white text-zinc-900 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider">
            <i className="fa-solid fa-newspaper text-zinc-700"></i>
            <span>{blog.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight">
            {blog.title}
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed font-normal">
            {blog.subtitle}
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {blog.posts.map((post, index) => (
            <article
              key={post.id}
              className="rounded-3xl bg-white border border-zinc-200 overflow-hidden hover:border-zinc-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs"
            >
              <div>
                {/* Article Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-zinc-100">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-zinc-900/90 text-white text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-xs border border-zinc-700">
                      {post.category}
                    </span>
                  </div>

                  {/* Read Time Pill */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 text-zinc-200 text-xs font-mono backdrop-blur-xs flex items-center gap-1.5">
                    <i className="fa-regular fa-clock text-xs text-amber-400"></i>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Article Content Preview */}
                <div className="p-6 sm:p-7 space-y-4">
                  {/* Meta Bar */}
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>{post.date}</span>
                    <span>#{index + 1} {isTr ? 'Rehber' : 'Guide'}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors leading-snug">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3 font-normal">
                    {post.excerpt}
                  </p>

                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {post.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600 border border-zinc-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="p-6 sm:p-7 pt-0">
                <button
                  onClick={() => setSelectedPostId(post.id)}
                  className="w-full py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs group-hover:shadow-md"
                >
                  <span>{blog.readArticleBtn}</span>
                  <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Blog Bottom CTA Box */}
        <div className="mt-16 rounded-3xl bg-zinc-50 border border-zinc-200 p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-black text-zinc-900 flex flex-wrap items-center justify-center sm:justify-start gap-2">
              <i className="fa-solid fa-lightbulb text-amber-500"></i>
              <span>{isTr ? 'Atölyenizde Bu Yöntemleri Uygulamaya Başlayın' : 'Start Applying These Strategies in Your Shop'}</span>
            </h3>
            <p className="text-zinc-600 text-sm max-w-2xl font-normal">
              {isTr
                ? 'MobilyaPlan ile fire tasarrufu, anında 3D müşteri sunumu ve CNC G-Code üretimini 3 gün boyunca ücretsiz test edin.'
                : 'Test scrap savings, instant 3D customer presentations, and automated CNC G-Code exports for 3 days free.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
            {onOpenBlogPortal && (
              <button
                onClick={onOpenBlogPortal}
                className="px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <i className="fa-solid fa-book-open text-xs"></i>
                <span>{blog.allArticlesTitle}</span>
              </button>
            )}

            <a
              href={brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{t.common.startTrialBtn}</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>

            {onOpenTrialModal && (
              <button
                onClick={onOpenTrialModal}
                className="px-4 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-900 font-bold text-xs sm:text-sm border border-zinc-300 shadow-xs transition-colors cursor-pointer"
              >
                {isTr ? '3 Gün Ücretsiz' : '3 Days Free'}
              </button>
            )}
          </div>
        </div>

      </div>

      {/* Full Article Reader Modal Dialog */}
      {activePost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-zinc-200 shadow-2xl relative my-8">
            
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 text-xs font-mono font-bold uppercase">
                  {activePost.category}
                </span>
                <span className="text-zinc-400">•</span>
                <span className="text-xs text-zinc-500 font-mono">{activePost.readTime}</span>
              </div>

              <button
                onClick={() => setSelectedPostId(null)}
                className="w-9 h-9 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 flex items-center justify-center transition-colors cursor-pointer border border-zinc-300"
                aria-label={t.common.close}
              >
                <i className="fa-solid fa-xmark text-base"></i>
              </button>
            </div>

            {/* Modal Hero Banner */}
            <div className="relative aspect-21/9 w-full overflow-hidden bg-zinc-900">
              <img
                src={activePost.imageUrl}
                alt={activePost.title}
                className="w-full h-full object-cover opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <p className="text-xs font-mono text-amber-400 mb-1">{activePost.date} • {activePost.author}</p>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-black leading-tight text-white drop-shadow">
                  {activePost.title}
                </h1>
              </div>
            </div>

            {/* Article Content Body */}
            <div className="p-6 sm:p-8 space-y-8 text-zinc-800">
              
              {/* Author & Role */}
              <div className="flex items-center gap-3.5 pb-6 border-b border-zinc-100">
                <div className="w-11 h-11 rounded-full bg-zinc-900 text-white font-bold flex items-center justify-center text-sm shadow-xs font-mono">
                  {activePost.author.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900">{activePost.author}</h4>
                  <p className="text-xs text-zinc-500">{activePost.authorRole}</p>
                </div>
              </div>

              {/* Lead Paragraph */}
              <p className="text-base sm:text-lg text-zinc-700 font-medium leading-relaxed bg-amber-50/60 p-5 rounded-2xl border border-amber-200/80">
                {activePost.content.lead}
              </p>

              {/* Key Takeaways Checklist Box */}
              <div className="rounded-2xl bg-zinc-50 border border-zinc-200 p-6 space-y-3.5">
                <h4 className="text-sm font-bold text-zinc-900 uppercase font-mono tracking-wider flex items-center gap-2">
                  <i className="fa-solid fa-list-check text-emerald-600"></i>
                  <span>{blog.keyTakeawaysTitle}</span>
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-700">
                  {activePost.content.keyTakeaways.map((takeaway, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <i className="fa-solid fa-circle-check text-emerald-600 mt-1 shrink-0 text-xs"></i>
                      <span className="leading-relaxed">{takeaway}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main Content Sections */}
              <div className="space-y-6">
                {activePost.content.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <h3 className="text-lg font-bold text-zinc-900">
                      {section.heading}
                    </h3>
                    {section.paragraphs.map((pText, pIdx) => (
                      <p key={pIdx} className="text-sm text-zinc-600 leading-relaxed font-normal">
                        {pText}
                      </p>
                    ))}
                  </div>
                ))}
              </div>

              {/* Workshop Pro Tip Callout Box */}
              <div className="rounded-2xl bg-zinc-900 text-white p-6 space-y-2 border border-zinc-800 shadow-md">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <i className="fa-solid fa-award"></i>
                  <span>{blog.proTipTitle}</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                  {activePost.content.proTip}
                </p>
              </div>

              {/* Tags & Action Bar */}
              <div className="pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {activePost.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-xs font-mono px-3 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => handleReadFull(activePost.id)}
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-zinc-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{blog.readFullArticleBtn}</span>
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </button>

                  <button
                    onClick={() => setSelectedPostId(null)}
                    className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-colors cursor-pointer border border-zinc-300"
                  >
                    {blog.backToArticles}
                  </button>

                  <a
                    href={brandUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs shadow-md transition-colors cursor-pointer text-center"
                  >
                    {t.common.startTrialBtn}
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};
