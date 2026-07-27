import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<number>(1);

  const SLIDES = useMemo(
    () => [
      {
        id: 1,
        mainPrefix: "Let's ensure",
        highlight: "happy childhoods",
        mainSuffix: "for India's children",
        description: t(
          'hero.slides.education.desc',
          'Providing quality education, Sanskarshala centers, and nutrition to underprivileged children so every child gets to learn and thrive with dignity.'
        ),
        image: '/P1039409.JPG',
        ctaText: '♥ Yes! I Want To Help!',
        route: '/education',
      },
      {
        id: 2,
        mainPrefix: 'Empowering',
        highlight: 'strong women',
        mainSuffix: 'for a resilient nation',
        description: t(
          'hero.slides.women.desc',
          'Fostering female leadership through vocational sewing centers, Sabji Wali Didi micro-entrepreneurship, and self-help group financial freedom.'
        ),
        image: '/P1039322.JPG',
        ctaText: '♥ Empower A Woman!',
        route: '/women-empowerment',
      },
      {
        id: 3,
        mainPrefix: 'Bringing',
        highlight: 'lifesaving care',
        mainSuffix: 'to remote villages',
        description: t(
          'hero.slides.health.desc',
          'Organizing free health camps, organ donation drives, disability support, and elderly care to ensure no one is left behind.'
        ),
        image: '/PRAYASHEALTHCAMP.jpeg',
        ctaText: '♥ Support Health Camps!',
        route: '/healthcare',
      },
      {
        id: 4,
        mainPrefix: 'Building',
        highlight: 'thriving villages',
        mainSuffix: 'with clean water & hope',
        description: t(
          'hero.slides.rural.desc',
          'Holistic village adoption programs installing clean drinking water facilities, sanitation infrastructure, and self-reliant grassroots growth.'
        ),
        image: '/EDUCATION.JPG',
        ctaText: '♥ Adopt A Village!',
        route: '/rural-development',
      },
      {
        id: 5,
        mainPrefix: 'Planting',
        highlight: 'green forests',
        mainSuffix: 'for a sustainable future',
        description: t(
          'hero.slides.environment.desc',
          'Dedicated to tree plantation drives, Kargil Vatika memorial forests, and rainwater harvesting to restore ecological balance.'
        ),
        image: '/TREEGROW.jpg',
        ctaText: '♥ Plant A Tree Today!',
        route: '/environment',
      },
    ],
    [t]
  );

  const slideDuration = 5500; // ms

  const handleNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  }, [SLIDES.length]);

  const handlePrevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, [SLIDES.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Continuous Autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, slideDuration);
    return () => clearInterval(timer);
  }, [handleNextSlide, slideDuration]);

  // Touch Swipe Handling
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) handleNextSlide();
      else handlePrevSlide();
    }
    setTouchStartX(null);
  };

  const activeSlide = SLIDES[currentSlide];

  // Motion variants for synced left text transition
  const textVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 25 : -25,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: 'spring', stiffness: 300, damping: 28 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      y: dir < 0 ? 25 : -25,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section
      className="relative w-full min-h-[580px] md:min-h-[85vh] lg:min-h-[90vh] bg-white text-[#263238] overflow-hidden select-none flex flex-col justify-between"
      style={{ marginTop: 'var(--navbar-height, 0px)' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ─── Main Hero Split Layout Grid ─── */}
      <div className="w-full flex-1 grid grid-cols-1 lg:grid-cols-12 items-center relative z-10 py-6 sm:py-10">
        
        {/* ─── LEFT COLUMN: Clean White Side with Synced Text & Hand-Drawn Highlights ─── */}
        <div className="lg:col-span-5 px-6 sm:px-10 lg:px-14 py-6 md:py-10 flex flex-col justify-center relative z-30">
          
          <div className="my-auto py-2 space-y-6 sm:space-y-8 max-w-xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeSlide.id}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="space-y-6"
              >
                {/* Hand-lettered Headline with Yellow Sparkle Highlight */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#263238] leading-[1.15] tracking-tight font-sans">
                  {activeSlide.mainPrefix}{' '}
                  <span className="relative inline-block text-[#F5B800] dark:text-[#F5B800] font-heading font-normal underline decoration-[#FFF314] decoration-4 underline-offset-4">
                    {activeSlide.highlight}
                    {/* Crown / Sparkle rays decoration over highlighted text */}
                    <svg
                      className="absolute -top-4 -right-5 w-7 h-7 text-[#FFF314]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M12 2v4M5 5l2.5 2.5M19 5l-2.5 2.5M2 12h4M18 12h4" />
                    </svg>
                  </span>{' '}
                  <br className="hidden sm:inline" />
                  {activeSlide.mainSuffix}
                </h1>

                {/* Description Subtext */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans max-w-lg">
                  {activeSlide.description}
                </p>

                {/* Pill Yellow CTA Button with Heart Icon */}
                <div className="pt-2">
                  <button
                    onClick={() => navigate(activeSlide.route)}
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm sm:text-base font-bold bg-[#FFF314] hover:bg-[#FBE000] text-[#263238] shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border border-[#E6DB00]"
                  >
                    <span>{activeSlide.ctaText}</span>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ─── RIGHT COLUMN: Premium Enlarged Spray-Paint Masked Photo Frame ─── */}
        <div className="lg:col-span-7 px-2 sm:px-6 lg:px-8 relative flex items-center justify-center py-4">
          
          {/* Organic Asymmetric Yellow Spray Paint Canvas Container (Enlarged) */}
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px] p-2 sm:p-3.5 rounded-[2.5rem] bg-[#FFF314] shadow-2xl transition-transform duration-500 hover:scale-[1.01] rotate-[-1deg]">
            
            {/* ─── Spray Paint Texture & Edge Splatter SVG Overlay ─── */}
            
            {/* Spray Paint Splatters - Top Left Corner */}
            <svg className="absolute -top-8 -left-8 w-24 h-24 text-[#FFF314] pointer-events-none z-20" viewBox="0 0 100 100">
              <path d="M50,50 Q20,10 0,30 Q30,70 10,90 Q60,70 50,50 Z" fill="currentColor" opacity="0.9" />
              <circle cx="20" cy="15" r="4" fill="currentColor" />
              <circle cx="8" cy="40" r="6" fill="currentColor" />
              <circle cx="35" cy="10" r="3" fill="currentColor" />
              <circle cx="70" cy="18" r="5" fill="currentColor" />
            </svg>

            {/* Spray Paint Splatters - Bottom Right Corner */}
            <svg className="absolute -bottom-8 -right-8 w-28 h-28 text-[#FFF314] pointer-events-none z-20" viewBox="0 0 100 100">
              <path d="M50,50 Q80,90 100,70 Q70,30 90,10 Q40,30 50,50 Z" fill="currentColor" opacity="0.9" />
              <circle cx="85" cy="85" r="5" fill="currentColor" />
              <circle cx="95" cy="60" r="4" fill="currentColor" />
              <circle cx="65" cy="90" r="6" fill="currentColor" />
              <circle cx="45" cy="80" r="3" fill="currentColor" />
            </svg>

            {/* Spray Paint Fine Mist Particles along borders */}
            <div className="absolute inset-0 border-4 border-dashed border-[#F5B800]/40 rounded-[2.5rem] pointer-events-none" />

            {/* Inner Photo Container - 100% Unobscured & Perfectly Visible */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-gray-950 shadow-inner group">
              
              {/* Animated Photo Transition */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.img
                  key={activeSlide.id}
                  src={activeSlide.image}
                  alt={activeSlide.highlight}
                  initial={{ opacity: 0, scale: 1.06 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    opacity: { duration: 0.6, ease: 'easeInOut' },
                    scale: { duration: 5, ease: 'easeOut' },
                  }}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[102%] contrast-[103%]"
                />
              </AnimatePresence>

              {/* Subtle Gradient Scrim at Bottom for Control Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent opacity-60 pointer-events-none" />

              {/* Slide Navigation Arrows */}
              <div className="absolute bottom-5 right-5 z-30 flex items-center gap-2">
                <button
                  onClick={handlePrevSlide}
                  className="p-3 rounded-full bg-white/90 hover:bg-white text-[#263238] shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all cursor-pointer border border-gray-200"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="p-3 rounded-full bg-white/90 hover:bg-white text-[#263238] shadow-xl backdrop-blur-md hover:scale-110 active:scale-95 transition-all cursor-pointer border border-gray-200"
                  aria-label="Next slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Slide Category Indicator Dots */}
              <div className="absolute top-5 right-5 z-30 flex items-center gap-1.5 bg-gray-950/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                {SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === currentSlide ? 'bg-[#FFF314] w-6' : 'bg-white/60 hover:bg-white'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
