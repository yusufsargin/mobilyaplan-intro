import React, { useState, useMemo, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { MobilyaPlanLogo } from './MobilyaPlanLogo';
import { LanguageToggle } from './LanguageToggle';
import { getProductUrl } from '../config/urls';

interface BlogPortalProps {
  initialPostId?: string | null;
  onBackToHome: () => void;
  onOpenTrialModal?: () => void;
}

export const BlogPortal: React.FC<BlogPortalProps> = ({
  initialPostId = null,
  onBackToHome,
  onOpenTrialModal,
}) => {
  const { t, language } = useLanguage();
  const isTr = language === 'tr';
  const brandUrl = getProductUrl(language);
  const blog = t.blog;

  const [activeArticleId, setActiveArticleId] = useState<string | null>(initialPostId);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeArticleId]);

  // Extract unique categories
  const categories = useMemo(() => {
    const set = new Set<string>();
    blog.posts.forEach((p) => set.add(p.category));
    return Array.from(set);
  }, [blog.posts]);

  // Filtered posts
  const filteredPosts = useMemo(() => {
    return blog.posts.filter((post) => {
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        query === '' ||
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesCategory && matchesSearch;
    });
  }, [blog.posts, selectedCategory, searchQuery]);

  // Active full article
  const currentPost = useMemo(() => {
    if (!activeArticleId) return null;
    return blog.posts.find((p) => p.id === activeArticleId) || null;
  }, [blog.posts, activeArticleId]);

  // Featured post (first one or specific)
  const featuredPost = blog.posts[0];

  // Related posts (excluding current)
  const relatedPosts = useMemo(() => {
    if (!currentPost) return [];
    return blog.posts.filter((p) => p.id !== currentPost.id).slice(0, 2);
  }, [blog.posts, currentPost]);

  const getWhatsAppShareUrl = (title: string) => {
    const text = isTr
      ? `Mobilya & Üretim Rehberi: "${title}" - MobilyaPlan ile inceleyin: ${brandUrl}`
      : `Cabinetmaking & CNC Guide: "${title}" - Read on FurnitureDraw: ${brandUrl}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans antialiased">
      {/* Top Blog Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Back to Home Button & Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold transition-all border border-zinc-300 shadow-xs cursor-pointer"
            >
              <i className="fa-solid fa-arrow-left text-xs"></i>
              <span>{blog.backToHome}</span>
            </button>

            <div className="h-6 w-px bg-zinc-200 hidden sm:block"></div>

            <button
              onClick={() => {
                setActiveArticleId(null);
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="flex items-center gap-2.5 group cursor-pointer text-left"
            >
              <MobilyaPlanLogo className="w-8 h-8 group-hover:scale-105 transition-transform" />
              <div>
                <span className="text-base font-extrabold tracking-tight text-zinc-900">
                  {isTr ? (
                    <>Mobilya<span className="text-zinc-500">Plan</span></>
                  ) : (
                    <>Furniture<span className="text-zinc-500">Draw</span></>
                  )}
                </span>
                <span className="ml-2 text-xs font-mono font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-300">
                  BLOG
                </span>
              </div>
            </button>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle variant="compact" />

            <a
              href={brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-extrabold text-xs shadow-md transition-all whitespace-nowrap"
            >
              <span>{t.common.startTrialBtn}</span>
              <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>

        </div>
      </header>

      {/* Main Content Area */}
      <main className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ========================================================= */}
          {/* VIEW 1: FULL-TEXT ARTICLE DETAIL VIEW */}
          {/* ========================================================= */}
          {currentPost ? (
            <div className="max-w-4xl mx-auto space-y-10 animate-fadeIn">
              
              {/* Breadcrumb Navigation */}
              <nav className="flex items-center gap-2 text-xs font-mono text-zinc-500 overflow-x-auto whitespace-nowrap pb-2">
                <button
                  onClick={onBackToHome}
                  className="hover:text-zinc-900 transition-colors cursor-pointer"
                >
                  {isTr ? 'Ana Sayfa' : 'Home'}
                </button>
                <span>/</span>
                <button
                  onClick={() => setActiveArticleId(null)}
                  className="hover:text-zinc-900 transition-colors cursor-pointer"
                >
                  Blog
                </button>
                <span>/</span>
                <span className="text-zinc-400">{currentPost.category}</span>
                <span>/</span>
                <span className="text-zinc-900 font-bold truncate max-w-xs">{currentPost.title}</span>
              </nav>

              {/* Article Header Card */}
              <div className="space-y-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-zinc-900 text-white text-xs font-mono font-bold uppercase tracking-wider">
                    {currentPost.category}
                  </span>
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                    <i className="fa-regular fa-clock text-amber-500"></i>
                    <span>{currentPost.readTime}</span>
                  </span>
                  <span className="text-xs font-mono text-zinc-500 flex items-center gap-1.5">
                    <i className="fa-regular fa-calendar text-zinc-400"></i>
                    <span>{currentPost.date}</span>
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
                  {currentPost.title}
                </h1>

                {/* Author Card */}
                <div className="flex items-center justify-between gap-4 py-4 border-y border-zinc-200">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-zinc-900 text-white font-bold flex items-center justify-center text-sm font-mono shadow-xs">
                      {currentPost.author.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">{currentPost.author}</h4>
                      <p className="text-xs text-zinc-500">{currentPost.authorRole}</p>
                    </div>
                  </div>

                  {/* Share on WhatsApp */}
                  <a
                    href={getWhatsAppShareUrl(currentPost.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold transition-colors border border-emerald-200"
                    title={blog.shareArticle}
                  >
                    <i className="fa-brands fa-whatsapp text-emerald-600 text-sm"></i>
                    <span className="hidden sm:inline">{blog.shareArticle}</span>
                  </a>
                </div>
              </div>

              {/* Full Article Hero Image */}
              <div className="relative aspect-16/9 rounded-3xl overflow-hidden bg-zinc-900 shadow-lg border border-zinc-200">
                <img
                  src={currentPost.imageUrl}
                  alt={currentPost.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>

              {/* Lead Paragraph Box */}
              <div className="bg-amber-50/70 p-6 sm:p-8 rounded-3xl border border-amber-200/90 shadow-xs">
                <p className="text-base sm:text-lg text-zinc-800 font-medium leading-relaxed">
                  {currentPost.content.lead}
                </p>
              </div>

              {/* Key Takeaways Box */}
              <div className="rounded-3xl bg-zinc-50 border border-zinc-200 p-6 sm:p-8 space-y-4 shadow-xs">
                <h3 className="text-sm sm:text-base font-bold text-zinc-900 uppercase font-mono tracking-wider flex items-center gap-2">
                  <i className="fa-solid fa-list-check text-emerald-600 text-lg"></i>
                  <span>{blog.keyTakeawaysTitle}</span>
                </h3>
                <ul className="space-y-3 text-sm text-zinc-700">
                  {currentPost.content.keyTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <i className="fa-solid fa-circle-check text-emerald-600 mt-1 shrink-0 text-sm"></i>
                      <span className="leading-relaxed font-normal">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Article Content Sections */}
              <div className="space-y-8 text-zinc-800">
                {currentPost.content.sections.map((section, sIdx) => (
                  <section key={sIdx} className="space-y-4">
                    <h2 className="text-2xl font-black text-zinc-900 tracking-tight pt-4 border-t border-zinc-100">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((p, pIdx) => (
                      <p key={pIdx} className="text-base text-zinc-600 leading-relaxed font-normal">
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              {/* Workshop Pro Tip Callout Box */}
              <div className="rounded-3xl bg-zinc-900 text-white p-7 sm:p-9 space-y-3 border border-zinc-800 shadow-xl">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                  <i className="fa-solid fa-award text-base"></i>
                  <span>{blog.proTipTitle}</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                  {currentPost.content.proTip}
                </p>
              </div>

              {/* Tags Box */}
              <div className="flex flex-wrap items-center gap-2 pt-4">
                <span className="text-xs font-mono text-zinc-400 mr-2">Etiketler:</span>
                {currentPost.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-3 py-1.5 rounded-xl bg-zinc-100 text-zinc-700 border border-zinc-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* In-Article Direct Conversion Banner */}
              <div className="rounded-3xl bg-linear-to-r from-zinc-900 to-zinc-800 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {isTr ? 'Bu İpuçlarını Kendi Atölyenizde Test Edin' : 'Test These Strategies in Your Own Workshop'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-xl font-normal">
                    {isTr
                      ? 'MobilyaPlan ile plaka optimizasyonu, 4K render ve CNC G-Code oluşturmayı 3 gün boyunca ücretsiz deneyin.'
                      : 'Experience Smart Nesting, 4K Renders, and direct CNC G-Code exports free for 3 days.'}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={brandUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>{t.common.startTrialBtn}</span>
                    <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                  </a>
                </div>
              </div>

              {/* Related Articles Section */}
              {relatedPosts.length > 0 && (
                <div className="pt-10 border-t border-zinc-200 space-y-6">
                  <h3 className="text-xl font-black text-zinc-900">
                    {blog.relatedTitle}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedPosts.map((rPost) => (
                      <div
                        key={rPost.id}
                        onClick={() => setActiveArticleId(rPost.id)}
                        className="rounded-2xl bg-white border border-zinc-200 p-5 hover:border-zinc-400 hover:shadow-md transition-all cursor-pointer space-y-3 group"
                      >
                        <div className="relative aspect-16/9 rounded-xl overflow-hidden bg-zinc-100">
                          <img
                            src={rPost.imageUrl}
                            alt={rPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-bold uppercase">
                          {rPost.category}
                        </span>

                        <h4 className="text-base font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors line-clamp-2">
                          {rPost.title}
                        </h4>

                        <p className="text-xs text-zinc-500 line-clamp-2 font-normal">
                          {rPost.excerpt}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Bottom Back Actions */}
              <div className="flex items-center justify-between pt-6 border-t border-zinc-200">
                <button
                  onClick={() => setActiveArticleId(null)}
                  className="px-5 py-3 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 font-bold text-xs transition-colors flex items-center gap-2 border border-zinc-300 cursor-pointer"
                >
                  <i className="fa-solid fa-arrow-left text-xs"></i>
                  <span>{blog.backToArticles}</span>
                </button>

                <button
                  onClick={onBackToHome}
                  className="px-5 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <span>{blog.backToHome}</span>
                  <i className="fa-solid fa-house text-xs"></i>
                </button>
              </div>

            </div>
          ) : (
            /* ========================================================= */
            /* VIEW 2: BLOG PORTAL MAIN LIST & SEARCH VIEW */
            /* ========================================================= */
            <div className="space-y-16 animate-fadeIn">
              
              {/* Portal Header */}
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-300 text-zinc-800 text-xs font-mono font-bold uppercase tracking-wider">
                  <i className="fa-solid fa-newspaper text-zinc-700"></i>
                  <span>{blog.badge}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
                  {blog.title}
                </h1>

                <p className="text-zinc-600 text-base sm:text-lg font-normal leading-relaxed">
                  {blog.subtitle}
                </p>
              </div>

              {/* 1. Featured Post Hero Banner Card */}
              {featuredPost && (
                <div
                  onClick={() => setActiveArticleId(featuredPost.id)}
                  className="rounded-3xl bg-zinc-950 text-white overflow-hidden shadow-2xl border border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-0 cursor-pointer group hover:border-zinc-600 transition-all duration-300"
                >
                  <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto overflow-hidden bg-zinc-900">
                    <img
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

                    {/* Featured Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full bg-amber-400 text-zinc-950 text-xs font-mono font-black uppercase tracking-wider shadow-md flex items-center gap-1.5">
                        <i className="fa-solid fa-star text-xs"></i>
                        <span>{blog.featuredBadge}</span>
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs font-mono text-zinc-400">
                        <span className="text-amber-400 font-bold">{featuredPost.category}</span>
                        <span>•</span>
                        <span>{featuredPost.readTime}</span>
                        <span>•</span>
                        <span>{featuredPost.date}</span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-amber-300 transition-colors leading-tight">
                        {featuredPost.title}
                      </h2>

                      <p className="text-zinc-300 text-sm leading-relaxed line-clamp-4 font-normal">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">
                        <span className="font-bold text-zinc-200">{featuredPost.author}</span>
                        <p className="text-xs text-zinc-500">{featuredPost.authorRole}</p>
                      </div>

                      <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs group-hover:bg-amber-400 transition-colors">
                        <span>{blog.readFullArticleBtn}</span>
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2. Search & Category Filters Bar */}
              <div className="space-y-4 pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  {/* Category Pills */}
                  <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedCategory === 'all'
                          ? 'bg-zinc-900 text-white shadow-xs'
                          : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200'
                      }`}
                    >
                      {blog.allCategories} ({blog.posts.length})
                    </button>

                    {categories.map((cat) => {
                      const count = blog.posts.filter((p) => p.category === cat).length;
                      return (
                        <button
                          key={cat}
                          onClick={() => setSelectedCategory(cat)}
                          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                            selectedCategory === cat
                              ? 'bg-zinc-900 text-white shadow-xs'
                              : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-700 border border-zinc-200'
                          }`}
                        >
                          {cat} ({count})
                        </button>
                      );
                    })}
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full md:w-72">
                    <i className="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 text-xs"></i>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder={blog.searchPlaceholder}
                      className="w-full pl-9 pr-4 py-2 rounded-xl bg-zinc-50 border border-zinc-300 text-zinc-900 text-xs placeholder:text-zinc-400 focus:outline-hidden focus:ring-2 focus:ring-zinc-900 focus:bg-white"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-700 text-xs"
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* 3. Articles Grid */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, idx) => (
                    <article
                      key={post.id}
                      onClick={() => setActiveArticleId(post.id)}
                      className="rounded-3xl bg-white border border-zinc-200 overflow-hidden hover:border-zinc-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group shadow-xs cursor-pointer"
                    >
                      <div>
                        {/* Image Container */}
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

                          {/* Read Time */}
                          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 text-zinc-200 text-xs font-mono backdrop-blur-xs flex items-center gap-1.5">
                            <i className="fa-regular fa-clock text-xs text-amber-400"></i>
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-6 sm:p-7 space-y-4">
                          <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                            <span>{post.date}</span>
                            <span>{post.author}</span>
                          </div>

                          <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-zinc-700 transition-colors leading-snug">
                            {post.title}
                          </h3>

                          <p className="text-zinc-600 text-sm leading-relaxed line-clamp-3 font-normal">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
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

                      {/* Read Button */}
                      <div className="p-6 sm:p-7 pt-0">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setActiveArticleId(post.id);
                          }}
                          className="w-full py-3.5 px-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-bold transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs group-hover:shadow-md"
                        >
                          <span>{blog.readFullArticleBtn}</span>
                          <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 bg-zinc-50 rounded-3xl border border-zinc-200 space-y-3">
                  <i className="fa-solid fa-filter text-2xl text-zinc-400"></i>
                  <h3 className="text-base font-bold text-zinc-900">Aradığınız kriterlere uygun rehber bulunamadı</h3>
                  <p className="text-xs text-zinc-500">Filtreleri sıfırlayarak tüm makaleleri listeleyebilirsiniz.</p>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSearchQuery('');
                    }}
                    className="px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold cursor-pointer"
                  >
                    Filtreleri Sıfırla
                  </button>
                </div>
              )}

              {/* Bottom CTA Box */}
              <div className="rounded-3xl bg-zinc-900 text-white p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {isTr ? 'Atölyenizde Dijital Devrimi Başlatın' : 'Start the Digital Transformation in Your Shop'}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-300 max-w-xl font-normal">
                    {isTr
                      ? '3 gün boyunca sınırsız 3D CAD, Akıllı Nesting ve CNC G-Code oluşturma modüllerini test edin.'
                      : 'Test full 3D CAD, Smart Nesting, and CNC G-Code generation modules for 3 days free.'}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <a
                    href={brandUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-xl bg-white hover:bg-zinc-100 text-zinc-950 font-black text-xs sm:text-sm shadow-md transition-all cursor-pointer whitespace-nowrap"
                  >
                    <span>{t.common.startTrialBtn}</span>
                    <i className="fa-solid fa-arrow-right ml-2 text-xs"></i>
                  </a>

                  {onOpenTrialModal && (
                    <button
                      onClick={onOpenTrialModal}
                      className="px-5 py-3.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs sm:text-sm border border-zinc-700 transition-colors cursor-pointer whitespace-nowrap"
                    >
                      {isTr ? '3 Gün Ücretsiz' : '3 Days Free'}
                    </button>
                  )}
                </div>
              </div>

            </div>
          )}

        </div>
      </main>

      {/* Footer in Blog Portal */}
      <footer className="border-t border-zinc-200 py-8 bg-zinc-50 text-zinc-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <MobilyaPlanLogo className="w-6 h-6" />
            <span className="font-bold text-zinc-900">
              {isTr ? 'MobilyaPlan' : 'FurnitureDraw'}
            </span>
            <span>• {t.footer.copyright}</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="text-zinc-800 font-bold hover:underline cursor-pointer"
            >
              ← {blog.backToHome}
            </button>
            <a
              href={brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-800 font-bold hover:underline"
            >
              {isTr ? 'mobilyaplan.com' : 'furnituredraw.com'}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
