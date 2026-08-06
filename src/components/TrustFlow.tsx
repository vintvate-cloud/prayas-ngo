import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ShieldCheck, HeartHandshake, Users, Target, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TRUST_STEPS = [
  {
    step: '01',
    title: 'Grassroots Community Engagement',
    badge: 'Step 1 • Foundation',
    impact: '100% Village Participation',
    description: 'Working directly with parents, teachers, and Anganwadi workers to establish local ownership, child safety, and village participation.',
    image: '/CHILDRENGROUP.jpg',
    icon: Users,
    color: 'bg-red-600',
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
    color: 'bg-blue-600',
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
    color: 'bg-emerald-600',
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
    color: 'bg-amber-600',
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
    color: 'bg-purple-600',
    link: '/rural-development',
  },
];

export default function TrustFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const getScrollAmount = () => {
        const trackWidth = track.scrollWidth;
        return trackWidth - window.innerWidth + 120;
      };

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          start: 'top top+=80px',
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-[#263238] overflow-hidden select-none font-sans border-b border-gray-200/80 flex flex-col justify-center py-12"
    >
      {/* ─── Ambient Subtle Glow ─── */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-72 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full space-y-8 my-auto">
        
        {/* ─── Section Header ─── */}
        <div className="text-center max-w-3xl mx-auto px-4 space-y-3 shrink-0">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 block">
            Sustainable Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#263238] tracking-tight">
            Our Systemic Approach
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full shadow-xs" />
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-sans">
            Scroll down to explore our 5-step pinned roadmap driving sustainable grassroots transformation.
          </p>
        </div>

        {/* ─── Pinned Horizontal Track (GSAP Scrubbed Sideways Scroll) ─── */}
        <div className="w-full overflow-hidden py-4">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-8 px-6 sm:px-16 lg:px-24 items-center will-change-transform"
          >
            {TRUST_STEPS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="w-[85vw] sm:w-[540px] md:w-[620px] lg:w-[680px] h-[340px] sm:h-[360px] shrink-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/90 bg-white grid grid-cols-1 sm:grid-cols-12 group transition-transform duration-300 hover:scale-[1.01]"
                >
                  {/* Left Side: Narrative & Details (7 cols) */}
                  <div className="sm:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-3.5 py-1 rounded-full text-[11px] font-mono font-bold bg-amber-500/10 border border-amber-500/30 text-amber-800">
                          {item.badge}
                        </span>
                        <Icon className="w-4 h-4 text-gray-400" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold text-[#263238] leading-tight">
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-2 flex items-center justify-between">
                      <Link
                        to={item.link}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-[#F5B800] hover:bg-[#E5AA00] text-[#263238] shadow-md hover:shadow-lg transition-all cursor-pointer border border-amber-400/40"
                      >
                        <span>Explore Initiative</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Side: Visual Photo (5 cols) */}
                  <div className="sm:col-span-5 relative aspect-[4/3] sm:aspect-auto overflow-hidden bg-gray-900">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 text-white text-[10px] font-mono font-bold bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                      {item.impact}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
