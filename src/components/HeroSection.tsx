import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export default function HeroBanner() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const SLIDES = useMemo(
    () => [
      {
        id: 1,
        title: t('hero.slides.rural.title', 'Rural Development'),
        description: t(
          'hero.slides.rural.desc',
          'Village Adoption · Water & Sanitation · Infrastructure · Community Development'
        ),
        image: '/EDUCATION.JPG',
        imagePosition: 'right',
        backgroundPosition: '85% center',
        route: '/rural-development',
      },
      {
        id: 2,
        title: t('hero.slides.women.title', 'Women Empowerment & Livelihood'),
        description: t(
          'hero.slides.women.desc',
          'Sabji Wali Didi · Sewing Centres · SHGs · Entrepreneurship · Grah Udyog'
        ),
        image: '/P1039322.JPG',
        imagePosition: 'right',
        route: '/women-empowerment',
      },
      {
        id: 3,
        title: t('hero.slides.education.title', 'Education & Skill Development'),
        description: t(
          'hero.slides.education.desc',
          'Sanskarshala · Digital Literacy · Career Guidance · Self‑Defence · Youth Leadership'
        ),
        image: '/P1039409.JPG',
        imagePosition: 'center',
        route: '/education',
      },
      {
        id: 4,
        title: t('hero.slides.health.title', 'Health & Social Welfare'),
        description: t(
          'hero.slides.health.desc',
          'Organ Donation · Health Camps · Elderly Care · Support for Persons with Disabilities · Child Welfare · Community Welfare'
        ),
        image: '/healthhj.jpeg',
        imagePosition: 'center',
        route: '/healthcare',
      },
      {
        id: 5,
        title: t('hero.slides.environment.title', 'Environment & Sustainability'),
        description: t(
          'hero.slides.environment.desc',
          'Plantation · Kargil Vatika · Water Conservation'
        ),
        image: '/TREEGROW.jpg',
        imagePosition: 'center',
        route: '/environment',
      },
    ],
    [t]
  );

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, SLIDES.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsAutoPlaying(false);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX - touchEndX;
    if (Math.abs(diffX) > 40) {
      if (diffX > 0) {
        handleSlide('next');
      } else {
        handleSlide('prev');
      }
    }
    setTouchStartX(null);
  };

  const handleSlide = (direction: 'next' | 'prev') => {
    setIsAutoPlaying(false);
    if (direction === 'next') {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }
  };

  const getBackgroundPosition = (slide: (typeof SLIDES)[0]) => {
    if (slide.backgroundPosition) return slide.backgroundPosition;
    return slide.imagePosition === 'right' ? '70% center' : 'center center';
  };

  const handleReadMore = () => {
    const route = SLIDES[currentSlide].route;
    if (route) {
      navigate(route);
    }
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-gray-900"
      style={{
        marginTop: 'var(--navbar-height, 0px)',
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="min-h-[420px] sm:min-h-[480px] md:min-h-[calc(100vh-var(--navbar-height,0px))] relative flex flex-col justify-end">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <div
              className="w-full h-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${SLIDES[currentSlide].image})`,
                backgroundPosition: getBackgroundPosition(SLIDES[currentSlide]),
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 md:bg-black/30" />

            {/* ——— Text container – bottom‑left ——— */}
            <div className="absolute bottom-0 left-0 p-5 sm:p-8 md:p-10 w-full md:w-2/3 lg:w-1/2 text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
                  {SLIDES[currentSlide].title}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <p className="text-xs sm:text-base md:text-lg text-white/90 leading-relaxed mb-3 sm:mb-4 md:mb-6 max-w-2xl">
                  {SLIDES[currentSlide].description}
                </p>

                {/* Read More - ComicSans font style */}
                <button
                  onClick={handleReadMore}
                  className="inline-flex items-center gap-2 text-[#FFF314] text-sm sm:text-lg md:text-xl font-heading transition-all duration-300 hover:underline underline-offset-4 cursor-pointer"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={() => handleSlide('prev')}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all backdrop-blur-xs"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} className="md:w-8 md:h-8" />
        </button>
        <button
          onClick={() => handleSlide('next')}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20 p-1.5 md:p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-all backdrop-blur-xs"
          aria-label="Next slide"
        >
          <ChevronRight size={20} className="md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
}
