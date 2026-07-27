import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Users, Target, CheckCircle2 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TRUST_STEPS = [
  {
    step: '01',
    title: 'Grassroots Community Engagement',
    badge: 'Step 1 • Foundation',
    impact: '100% Village Participation',
    description: 'Working directly with parents, teachers, and Anganwadi workers to establish local ownership and child safety standards.',
    image: '/CHILDRENGROUP.jpg',
    icon: Users,
    color: '#D4AF37',
  },
  {
    step: '02',
    title: 'Holistic Education & Sanskarshala',
    badge: 'Step 2 • Empowerment',
    impact: '5,000+ Students Educated',
    description: 'Providing value-based learning, digital literacy labs, and career guidance to ensure every child thrives in school.',
    image: '/P1039409.JPG',
    icon: Sparkles,
    color: '#DC2626',
  },
  {
    step: '03',
    title: 'Health & Lifesaving Medical Aid',
    badge: 'Step 3 • Healthcare',
    impact: '15,000+ Medical Patients',
    description: 'Organizing free medical checkup camps, organ donation awareness, and disability aid across remote rural regions.',
    image: '/PRAYASHEALTHCAMP.jpeg',
    icon: HeartHandshake,
    color: '#059669',
  },
  {
    step: '04',
    title: 'Women Livelihood & Self-Reliance',
    badge: 'Step 4 • Enterprise',
    impact: '2,500+ Women Entrepreneurs',
    description: 'Vocational sewing centers, micro-business support, and self-help group financial freedom for mothers.',
    image: '/P1039322.JPG',
    icon: Target,
    color: '#D4AF37',
  },
  {
    step: '05',
    title: 'Systemic Policy & Sustainable Future',
    badge: 'Step 5 • Long-Term Impact',
    impact: '50+ Villages Transformed',
    description: 'Influencing public policy and building sustainable water harvesting, tree plantation, and clean village infrastructure.',
    image: '/TREEGROW.jpg',
    icon: ShieldCheck,
    color: '#2563EB',
  },
];

export default function TrustFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. GSAP ScrollTrigger Line Growth Animation
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 70%',
              end: 'bottom 80%',
              scrub: 0.8,
            },
          }
        );
      }

      // 2. GSAP Staggered Entrance for Timeline Cards
      gsap.fromTo(
        '.gsap-timeline-card',
        { opacity: 0, y: 60, scale: 0.94 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.25,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full py-16 sm:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 text-[#263238] relative overflow-hidden select-none"
    >
      {/* ─── Ambient Glow Accents ─── */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-amber-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ─── Header ─── */}
        <div className="text-center mb-16 sm:mb-20 space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-[#D4AF37] text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-4 h-4" />
            <span>OUR SYSTEMIC APPROACH</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#263238] tracking-tight leading-tight">
            Modeled Around <span className="text-[#D4AF37]">Lasting Change</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-sans">
            We focus on changing behaviors and practices at the grassroots level and building self-reliant communities across every stage of development.
          </p>
        </div>

        {/* ─── Timeline Container ─── */}
        <div className="relative">
          
          {/* Background Static Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 rounded-full" />
          
          {/* Active GSAP Animated Progress Line */}
          <div
            ref={lineRef}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#D4AF37] via-[#DC2626] to-[#059669] -translate-x-1/2 rounded-full origin-top z-10 shadow-lg"
          />

          {/* Timeline Nodes & Cards */}
          <div className="space-y-12 sm:space-y-16 relative z-20">
            {TRUST_STEPS.map((item, index) => {
              const Icon = item.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`gsap-timeline-card flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Left / Right Card Content */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0">
                    <motion.div
                      whileHover={{ y: -6, scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                    >
                      {/* Top Accent Stripe */}
                      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#D4AF37] to-[#DC2626]" />

                      {/* Photo Thumbnail Banner */}
                      <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-md border border-gray-100">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                        
                        {/* Step Pill Overlay */}
                        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-mono font-bold">
                          {item.step}
                        </div>

                        {/* Impact Metric Overlay */}
                        <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between">
                          <span className="text-xs font-bold text-gray-200">{item.badge}</span>
                          <span className="text-xs font-mono font-extrabold text-[#D4AF37] bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-md">
                            {item.impact}
                          </span>
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className="space-y-2">
                        <h3 className="text-xl sm:text-2xl font-extrabold text-[#263238] group-hover:text-[#D4AF37] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Node Badge */}
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#D4AF37] shadow-xl flex items-center justify-center z-30 cursor-pointer text-[#D4AF37]"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>

                  {/* Empty Spacer Column for Desktop Alternate Grid */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
