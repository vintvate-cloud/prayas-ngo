import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Heart, Sparkles } from 'lucide-react';
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
        chapter: '01',
        category: t('hero.slides.rural.category', 'Rural Development'),
        kicker: 'GRASSROOTS INFRASTRUCTURE',
        title: t('hero.slides.rural.title', 'Restoring Dignity & Hope to Rural India'),
        description: t(
          'hero.slides.rural.desc',
          'Building self-reliant rural communities through village adoption, clean water systems, sanitation, and sustainable local growth.'
        ),
        image: '/EDUCATION.JPG',
        route: '/rural-development',
        statValue: '50+',
        statLabel: t('hero.slides.rural.stat', 'Villages Adopted'),
        accentColor: '#E5A93C',
      },
      {
        id: 2,
        chapter: '02',
        category: t('hero.slides.women.category', 'Women Empowerment'),
        kicker: 'ECONOMIC INDEPENDENCE',
        title: t('hero.slides.women.title', 'Fostering Female Leadership & Livelihood'),
        description: t(
          'hero.slides.women.desc',
          'Empowering women with micro-entrepreneurship, Sabji Wali Didi project, vocational sewing centers, and self-help group financial self-reliance.'
        ),
        image: '/P1039322.JPG',
        route: '/women-empowerment',
        statValue: '2,500+',
        statLabel: t('hero.slides.women.stat', 'Women Empowered'),
        accentColor: '#E5A93C',
      },
      {
        id: 3,
        chapter: '03',
        category: t('hero.slides.education.category', 'Child & Youth Education'),
        kicker: 'YOUTH MENTORSHIP',
        title: t('hero.slides.education.title', 'Igniting Dreams Through Education & Skills'),
        description: t(
          'hero.slides.education.desc',
          'Nurturing young minds through value-based learning at Sanskarshala, digital literacy camps, career guidance, and leadership development.'
        ),
        image: '/P1039409.JPG',
        route: '/education',
        statValue: '5,000+',
        statLabel: t('hero.slides.education.stat', 'Children Mentored'),
        accentColor: '#E5A93C',
      },
      {
        id: 4,
        chapter: '04',
        category: t('hero.slides.health.category', 'Health & Social Welfare'),
        kicker: 'COMMUNITY WELLNESS',
        title: t('hero.slides.health.title', 'Lifesaving Medical Care & Compassion'),
        description: t(
          'hero.slides.health.desc',
          'Organizing free health camps, organ donation drives, support for persons with disabilities, elderly care, and community wellness.'
        ),
        image: '/healthhj.jpeg',
        route: '/healthcare',
        statValue: '15,000+',
        statLabel: t('hero.slides.health.stat', 'Patients Served'),
        accentColor: '#E5A93C',
      },
      {
        id: 5,
        chapter: '05',
        category: t('hero.slides.environment.category', 'Environment & Sustainability'),
        kicker: 'ECOLOGICAL STEWARDSHIP',
        title: t('hero.slides.environment.title', 'Planting Tomorrow\'s Forests Today'),
        description: t(
          'hero.slides.environment.desc',
          'Pioneering tree plantation drives, Kargil Vatika memorial forests, rainwater harvesting, and eco-friendly climate action.'
        ),
        image: '/TREEGROW.jpg',
        route: '/environment',
        statValue: '100,000+',
        statLabel: t('hero.slides.environment.stat', 'Trees Planted'),
        accentColor: '#E5A93C',
      },
    ],
    [t]
  );

  const slideDuration = 6000;

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

  const contentVariants: Variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 20 : -20,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
      transition: {
        y: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.4 },
      },
    },
    exit: (dir: number) => ({
      y: dir < 0 ? 20 : -20,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section
      className="relative w-full min-h-[82vh] lg:min-h-[88vh] bg-gray-950 text-white select-none overflow-hidden flex flex-col justify-between"
      style={{ marginTop: 'var(--navbar-height, 0px)' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ─── Unobscured Full-Bleed Background Image ─── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.8, ease: 'easeInOut' },
              scale: { duration: 7, ease: 'easeOut' },
            }}
            className="absolute inset-0"
          >
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Subtle Premium Gradient Scrim for Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/40 to-transparent w-full md:w-2/3 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/70 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* ─── Hero Content Overlay ─── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10 w-full flex-1 flex flex-col justify-between">
        
        {/* Top Minimal Bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-gray-300 uppercase">
              PRAYAS SOCIAL WELFARE SOCIETY
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Sleek Floating Compact Impact Badge */}
            <div className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-950/80 backdrop-blur-md border border-[#E5A93C]/30 text-xs shadow-md">
              <Sparkles size={13} className="text-[#E5A93C]" />
              <span className="font-mono text-[#E5A93C] font-extrabold">{activeSlide.statValue}</span>
              <span className="text-gray-200 font-medium">{activeSlide.statLabel}</span>
            </div>

            <div className="text-xs font-mono tracking-widest text-[#E5A93C]">
              {activeSlide.chapter} <span className="text-gray-500">/</span> 0{SLIDES.length}
            </div>
          </div>
        </div>

        {/* Middle Section: Unobtrusive Left Typography */}
        <div className="my-auto py-6 max-w-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeSlide.id}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="space-y-4"
            >
              {/* Highlighted Impact Stat Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-gray-950/85 backdrop-blur-md border border-[#E5A93C]/40 shadow-lg shadow-[#E5A93C]/10">
                <span className="text-sm font-extrabold font-mono text-[#E5A93C]">
                  {activeSlide.statValue}
                </span>
                <span className="text-xs text-gray-200 font-sans border-l border-white/20 pl-2">
                  {activeSlide.statLabel}
                </span>
              </div>

              {/* Clean Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] drop-shadow-md">
                {activeSlide.title}
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="text-sm sm:text-base md:text-lg text-gray-200/90 leading-relaxed font-sans max-w-xl drop-shadow">
                {activeSlide.description}
              </p>

              {/* Compact CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate(activeSlide.route)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-[#E5A93C] hover:bg-[#F2B64A] text-gray-950 transition-all duration-300 shadow-lg cursor-pointer tracking-wide"
                >
                  <span>Explore Impact</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => navigate('/donate')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-black/40 hover:bg-black/60 text-white border border-white/20 backdrop-blur-md transition-all duration-300 cursor-pointer"
                >
                  <Heart size={15} className="text-[#E5A93C]" />
                  <span>Support Cause</span>
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Minimal Navigation Bar */}
        <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
          
          {/* Minimal Slide Selector Tabs */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="grid grid-cols-5 gap-1.5 w-full sm:w-auto">
              {SLIDES.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(idx)}
                    className={`relative px-2.5 py-1.5 rounded-lg text-left transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'bg-black/60 border border-white/30 text-white font-medium shadow-md'
                        : 'bg-black/20 border border-transparent text-gray-400 hover:text-white hover:bg-black/40'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <span
                        className={`text-xs font-mono font-bold ${
                          isActive ? 'text-[#E5A93C]' : 'text-gray-400'
                        }`}
                      >
                        {slide.chapter}
                      </span>
                      <span className="hidden lg:inline text-[11px] font-sans truncate">
                        {slide.category}
                      </span>
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="minimalActiveTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5A93C] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Slide Arrows */}
            <div className="flex items-center gap-1.5 self-end sm:self-center">
              <button
                onClick={handlePrevSlide}
                className="p-2 rounded-lg bg-black/40 hover:bg-black/70 text-white border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                aria-label="Previous story"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                onClick={handleNextSlide}
                className="p-2 rounded-lg bg-black/40 hover:bg-black/70 text-white border border-white/15 backdrop-blur-md transition-all active:scale-95 cursor-pointer"
                aria-label="Next story"
              >
                <ChevronRight size={17} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
