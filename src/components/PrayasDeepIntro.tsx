import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Award, Heart, FileText, ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';

export default function PrayasDeepIntro() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        '.gsap-hero-pill',
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      )
        .fromTo(
          '.gsap-hero-title',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-desc',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-metrics',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-ctas',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.4'
        )
        .fromTo(
          '.gsap-hero-collage',
          { scale: 0.94, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 1 },
          '-=0.8'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-[calc(100vh-var(--navbar-height,68px))] bg-gradient-to-b from-gray-50 via-white to-gray-50 text-[#263238] flex flex-col justify-center py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-12 select-none font-sans overflow-hidden border-b border-gray-200/80"
      style={{ marginTop: 'var(--navbar-height, 0px)' }}
    >
      {/* ─── Ambient Awwwards Glowing Light Spheres ─── */}
      <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/10 via-yellow-400/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-gradient-to-br from-yellow-500/10 via-amber-400/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Decorative Geometric Rings */}
      <div className="absolute top-12 right-24 w-72 h-72 rounded-full border border-gray-200/30 pointer-events-none -z-10 hidden xl:block" />
      <div className="absolute bottom-16 left-16 w-56 h-56 rounded-full border border-gray-200/20 pointer-events-none -z-10 hidden xl:block" />

      <div className="max-w-7xl mx-auto w-full my-auto">
        
        {/* ─── Responsive Awwwards Split-Hero Layout ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">

          {/* ─── LEFT COLUMN: Masterwork Editorial Content (6 cols) ─── */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left z-10">
            
            {/* 1. Glassmorphism Pre-header Pill */}
            <div className="gsap-hero-pill">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-gray-200/90 text-[#263238] text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Prayas Samaj Sevi Sanstha • Est. 2001</span>
              </div>
            </div>

            {/* 2. Display Headline */}
            <h1 className="gsap-hero-title text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-[#263238] tracking-tight leading-[1.12]">
              Empowering Communities,{' '}
              <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 bg-clip-text text-transparent relative inline-block underline decoration-amber-400/40 underline-offset-8">
                Transforming Lives
              </span>{' '}
              Across India.
            </h1>

            {/* 3. Narrative Copy */}
            <div className="gsap-hero-desc space-y-3 text-sm sm:text-base lg:text-base text-gray-600 leading-relaxed font-sans font-normal">
              <p>
                Founded in 2001, <strong className="text-[#263238] font-bold">Prayas Samaj Sevi Sanstha</strong> is a premier multi-disciplinary social welfare organization. We operate 100% directly at the grassroots level across rural development, women empowerment, free healthcare, environmental conservation, and education.
              </p>
            </div>

            {/* 4. Glass Metrics Bar */}
            <div className="pt-1 grid grid-cols-3 gap-3">
              <div className="gsap-hero-metrics p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-xs text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-[#263238]">20+ Yrs</span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-mono font-bold uppercase">Legacy</span>
              </div>

              <div className="gsap-hero-metrics p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-xs text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-amber-600">25,000+</span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-mono font-bold uppercase">Lives Touched</span>
              </div>

              <div className="gsap-hero-metrics p-3 sm:p-3.5 rounded-2xl bg-white/90 backdrop-blur-md border border-gray-200/80 shadow-xs text-center">
                <span className="block text-xl sm:text-2xl font-extrabold text-[#263238]">50+</span>
                <span className="text-[10px] sm:text-xs text-gray-500 font-mono font-bold uppercase">Villages</span>
              </div>
            </div>

            {/* 5. CTA Action Buttons */}
            <div className="gsap-hero-ctas pt-2 flex flex-wrap items-center gap-3.5">
              <button
                onClick={() => navigate('/donate')}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-extrabold bg-[#F5B800] hover:bg-[#E5AA00] text-[#263238] shadow-lg shadow-amber-500/20 transition-all cursor-pointer border border-amber-400/40 hover:scale-105 active:scale-95"
              >
                <Heart size={16} className="fill-current text-[#263238]" />
                <span>Support Our Cause</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => navigate('/about')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-extrabold bg-white/90 backdrop-blur-md text-[#263238] hover:bg-gray-50 border border-gray-200/90 hover:border-gray-300 shadow-xs hover:shadow-md transition-all cursor-pointer"
              >
                <FileText size={16} />
                <span>Read Organization Profile</span>
              </button>
            </div>

          </div>

          {/* ─── RIGHT COLUMN: Floating Bento Collage Showcase (6 cols) ─── */}
          <div className="lg:col-span-6 relative">
            <div className="gsap-hero-collage grid grid-cols-2 gap-3.5 sm:gap-4">
              
              {/* Tile 1: Primary Feature Card (Environment / Reforestation) */}
              <div className="col-span-2 aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-100 border border-gray-200/90 shadow-2xl group hover:border-amber-300/60 transition-all">
                <img
                  src="/TREEGROW.jpg"
                  alt="Prayas Reforestation Drive"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Tile 2: Women Livelihood */}
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/90 shadow-lg group hover:border-amber-300/60 transition-all">
                <img
                  src="/WOMEN.jpeg"
                  alt="Prayas Women Empowerment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Tile 3: Free Healthcare Camps */}
              <div className="aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/90 shadow-lg group hover:border-amber-300/60 transition-all">
                <img
                  src="/PRAYASHEALTHCAMP.jpeg"
                  alt="Prayas Free Healthcare Camp"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
