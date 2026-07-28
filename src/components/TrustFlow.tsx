import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, ShieldCheck, HeartHandshake, Users, Target, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TRUST_STEPS = [
  {
    step: '01',
    title: 'Grassroots Community Engagement',
    badge: 'Step 1 • Foundation',
    impact: '100% Village Participation',
    description: 'Working directly with parents, teachers, and Anganwadi workers to establish local ownership, child safety, and village participation.',
    image: '/CHILDRENGROUP.jpg',
    icon: Users,
    bgColor: '#C81E1E',
    link: '/about',
  },
  {
    step: '02',
    title: 'Holistic Education & Sanskarshala',
    badge: 'Step 2 • Empowerment',
    impact: '5,000+ Students Educated',
    description: 'Providing value-based learning, digital literacy labs, career guidance, and mentorship to ensure every child thrives.',
    image: '/P1039409.JPG',
    icon: Sparkles,
    bgColor: '#1565C0',
    link: '/education',
  },
  {
    step: '03',
    title: 'Health & Lifesaving Medical Aid',
    badge: 'Step 3 • Healthcare',
    impact: '15,000+ Medical Patients',
    description: 'Organizing free medical checkup camps, diagnostic care, organ donation awareness, and disability aid across rural regions.',
    image: '/PRAYASHEALTHCAMP.jpeg',
    icon: HeartHandshake,
    bgColor: '#E65100',
    link: '/healthcare',
  },
  {
    step: '04',
    title: 'Women Livelihood & Self-Reliance',
    badge: 'Step 4 • Enterprise',
    impact: '2,500+ Women Empowered',
    description: 'Vocational sewing centers, Sabji Wali Didi micro-business support, and self-help group financial freedom for mothers.',
    image: '/P1039322.JPG',
    icon: Target,
    bgColor: '#2E7D32',
    link: '/women-empowerment',
  },
  {
    step: '05',
    title: 'Systemic Policy & Sustainable Future',
    badge: 'Step 5 • Long-Term Impact',
    impact: '50+ Villages Transformed',
    description: 'Influencing public policy, building rainwater harvesting, Kargil Vatika tree plantations, and clean self-reliant village growth.',
    image: '/TREEGROW.jpg',
    icon: ShieldCheck,
    bgColor: '#880E4F',
    link: '/rural-development',
  },
];

export default function TrustFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Native Framer Motion scroll progress tracking (Zero GSAP pin-spacer duplication)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform vertical scroll progress into smooth horizontal translation
  const x = useTransform(scrollYProgress, [0.05, 0.95], ['0%', '-72%']);

  // Update active step index based on scroll progress
  scrollYProgress.on('change', (latest) => {
    const numCards = TRUST_STEPS.length;
    const progressInBounds = Math.max(0, Math.min(1, (latest - 0.05) / 0.9));
    const index = Math.round(progressInBounds * (numCards - 1));
    setActiveStepIndex(Math.min(numCards - 1, Math.max(0, index)));
  });

  return (
    <div ref={containerRef} className="relative h-[260vh] sm:h-[300vh] bg-white font-sans">
      
      {/* ─── NATIVE STICKY VIEWPORT CONTAINER ─── */}
      <div className="sticky top-14 sm:top-16 h-[85vh] sm:h-[88vh] flex flex-col justify-between overflow-hidden select-none z-10 pt-4 pb-6">

        {/* ─── 1. ULTRA SMOOTH GRADIENT ORGANIC MASK BACKGROUND ─── */}
        <div className="absolute top-0 left-0 right-0 h-[360px] pointer-events-none z-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1000px] h-[360px] bg-gradient-to-b from-[#FFD400] via-[#FFE033]/70 to-transparent blur-[50px] opacity-90" />

          <svg
            className="absolute top-0 left-0 w-[110%] h-full text-[#FFD400] transform -translate-x-[2%]"
            viewBox="0 0 1440 380"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="ultra-soft-yellow-top" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFD400" stopOpacity="1" />
                <stop offset="45%" stopColor="#FFE033" stopOpacity="0.85" />
                <stop offset="75%" stopColor="#FFF499" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="liquid-flow-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FFC700" stopOpacity="1" />
                <stop offset="50%" stopColor="#FFD400" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#FFE666" stopOpacity="0.75" />
              </linearGradient>

              <filter id="ultra-feather-blur" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="16" />
              </filter>
            </defs>

            <path
              d="M0,140 C200,240 380,40 600,160 C820,280 1020,60 1240,190 C1360,260 1440,200 1440,200 L1440,0 L0,0 Z"
              fill="url(#liquid-flow-gradient)"
              filter="url(#ultra-feather-blur)"
              opacity="0.9"
            />

            <path
              d="M0,110 C220,190 400,30 620,130 C840,230 1040,40 1260,160 C1380,220 1440,170 1440,170 L1440,0 L0,0 Z"
              fill="url(#liquid-flow-gradient)"
              opacity="0.95"
            />
          </svg>
        </div>

        {/* ─── 2. SECTION HEADER ─── */}
        <div className="relative z-10 pt-4 sm:pt-6 pb-2 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto shrink-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#263238] tracking-tight leading-tight font-sans">
            Our Systemic Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-3 rounded-full shadow-xs" />

          <p className="text-xs sm:text-base text-[#263238]/90 max-w-2xl mx-auto mt-2 font-medium leading-relaxed hidden sm:block">
            We focus on changing behaviors and practices at the grassroots level and building self-reliant communities across every stage of development.
          </p>
        </div>

        {/* ─── 3. HORIZONTAL SCROLL CARDS TRACK (Smooth Framer Motion Translation) ─── */}
        <div className="relative z-10 flex-1 flex items-center overflow-hidden">
          
          <motion.div
            style={{ x }}
            className="flex gap-6 sm:gap-10 px-6 sm:px-16 lg:px-24 items-center will-change-transform"
          >
            {TRUST_STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="w-[88vw] sm:w-[560px] md:w-[660px] lg:w-[720px] xl:w-[800px] h-[280px] sm:h-[310px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white flex flex-row transition-all duration-300 hover:scale-[1.01]"
                >
                  {/* Left Side: Vibrant Color Block */}
                  <div
                    className="w-1/2 p-5 sm:p-7 md:p-8 flex flex-col justify-between text-white relative z-10"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-white/90 block">
                          {item.badge}
                        </span>
                        <Icon className="w-4 h-4 text-white/80" />
                      </div>

                      <h3 className="text-base sm:text-xl md:text-2xl font-extrabold text-white leading-tight font-sans line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2">
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full text-xs font-bold bg-[#FFF314] hover:bg-[#FBE000] text-[#263238] shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
                      >
                        <span>Read More</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Full Height Photo */}
                  <div className="w-1/2 relative overflow-hidden h-full bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 right-3 text-white text-[10px] sm:text-xs font-mono font-bold bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {item.impact}
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ─── 4. STEP DOTS INDICATOR (Bottom Pagination) ─── */}
        <div className="relative z-10 flex justify-center items-center gap-2 shrink-0 pt-2 pb-2">
          {TRUST_STEPS.map((_, idx) => (
            <div
              key={idx}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === activeStepIndex ? 'w-8 bg-[#263238]' : 'w-2.5 bg-gray-300'
              }`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
