import { useState } from 'react';
import { LanguageProvider, type Language } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ComparisonSection } from './components/ComparisonSection';
import { FeaturesSection } from './components/FeaturesSection';
import { SavingsCalculator } from './components/SavingsCalculator';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WorkshopGallerySection } from './components/WorkshopGallerySection';
import { BlogSection } from './components/BlogSection';
import { BlogPortal } from './components/BlogPortal';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { TrialModal } from './components/TrialModal';
import { FloatingActionBar } from './components/FloatingActionBar';

interface AppProps {
  language: Language;
}

export default function App({ language }: AppProps) {
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Dual-level blog state: null (homepage), 'portal' (all posts), or article ID string (specific full article)
  const [blogViewPostId, setBlogViewPostId] = useState<string | null>(null);
  const [isBlogPortalOpen, setIsBlogPortalOpen] = useState(false);

  const handleOpenBlogPortal = () => {
    setBlogViewPostId(null);
    setIsBlogPortalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenFullArticle = (postId: string) => {
    setBlogViewPostId(postId);
    setIsBlogPortalOpen(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setIsBlogPortalOpen(false);
    setBlogViewPostId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <LanguageProvider initialLanguage={language}>
      {isBlogPortalOpen ? (
        <BlogPortal
          initialPostId={blogViewPostId}
          onBackToHome={handleBackToHome}
          onOpenTrialModal={() => setIsTrialModalOpen(true)}
        />
      ) : (
        <div className="min-h-screen max-w-full overflow-x-clip bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans antialiased">
          {/* Navigation Bar */}
          <Navbar
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
            onOpenVideoModal={() => setIsVideoModalOpen(true)}
            onNavigateToBlog={handleOpenBlogPortal}
            onNavigateHome={handleBackToHome}
          />

          {/* Main Flow */}
          <main>
            {/* 1. Hero: Clean Entrance with Centered YouTube Video & Single CTA */}
            <Hero
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
              onOpenVideoModal={() => setIsVideoModalOpen(true)}
            />

            {/* 2. Global Value Proposition: Heavy Desktop CAD vs FurnitureDraw / MobilyaPlan */}
            <ComparisonSection
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />

            {/* 3. Core Features: Minimal Bento Grid */}
            <FeaturesSection
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />

            {/* 4. Plaque & Cost Savings Calculator */}
            <SavingsCalculator
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />

            {/* 5. Real Workshop & Field Photos Gallery (Social Proof) */}
            <WorkshopGallerySection
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />

            {/* 6. Transparent Pricing & 3-Day Free Trial */}
            <PricingSection
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />

            {/* 7. Workshop Reviews & Social Proof */}
            <TestimonialsSection
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
            />

            {/* 8. Furniture & Manufacturing Blog (Summary Cards + Modal + Full View Access) */}
            <BlogSection
              onOpenTrialModal={() => setIsTrialModalOpen(true)}
              onOpenFullArticle={handleOpenFullArticle}
              onOpenBlogPortal={handleOpenBlogPortal}
            />

            {/* 9. FAQ */}
            <FaqSection />
          </main>

          {/* Footer */}
          <Footer
            onOpenTrialModal={() => setIsTrialModalOpen(true)}
          />

          {/* Floating Speed-Dial & Mobile Action Bar */}
          <FloatingActionBar />

          {/* Modals */}
          <VideoModal
            isOpen={isVideoModalOpen}
            onClose={() => setIsVideoModalOpen(false)}
            onOpenTrial={() => setIsTrialModalOpen(true)}
          />

          <TrialModal
            isOpen={isTrialModalOpen}
            onClose={() => setIsTrialModalOpen(false)}
          />
        </div>
      )}
    </LanguageProvider>
  );
}

