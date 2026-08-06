import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: 'Project Sindoda (Plastic Mukti)',
    description: 'Transforming Sindoda into a completely plastic‑free zone through community action, waste segregation drives, and sustainable rural alternatives.',
    image: '/Sindoda/IMG_20191022_121001 (1).jpg',
    date: '2023 – Ongoing',
    link: '/project-sindoda',
    badge: 'Environmental Action',
  },
  {
    id: 2,
    title: 'Kargil Vatika – Memorial Forest',
    description: 'A living tribute to our brave soldiers – planting thousands of native trees to build a lush memorial forest and restore green ecological balance.',
    image: '/TREEGROW.jpg',
    date: '2022 – Ongoing',
    link: '/environment/kargil-vatika',
    badge: 'Reforestation Drive',
  },
  {
    id: 3,
    title: 'Health Camp in Rural Uttar Pradesh',
    description: 'Organizing free specialized medical check‑ups, diagnostic care, free medicines, and health awareness drives for over 500+ underserved villagers.',
    image: '/healthhj.jpeg',
    date: 'January 2025',
    link: '/healthcare/health-camps',
    badge: 'Medical Outreach',
  },
  {
    id: 4,
    title: 'Digital Literacy for 1000 Girls',
    description: 'Empowering young women and girls with computer literacy, coding basics, digital skills, and internet safety training to build self-reliant futures.',
    image: '/education1.jpeg',
    date: '2024 – Ongoing',
    link: '/education/digital-literacy',
    badge: 'Education & Tech',
  },
];

export default function FeaturedProjects() {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current;
      if (!cards || cards.length === 0) return;

      // Create GSAP ScrollTrigger timeline for stacked card pinning & bottom-to-top deck stacking
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: true,
          scrub: 1,
          start: 'top top+=80px',
          end: () => `+=${cards.length * 600}`,
          invalidateOnRefresh: true,
        },
      });

      cards.forEach((card, i) => {
        if (i === 0) return; // First card is base

        tl.fromTo(
          card,
          { yPercent: 100, opacity: 0.8 },
          { yPercent: 0, opacity: 1, ease: 'none' },
          i * 1.2
        );

        // Slightly scale down previous card to create realistic deck stack depth
        if (i > 0) {
          tl.to(
            cards[i - 1],
            { scale: 0.95 - (cards.length - i) * 0.02, opacity: 0.9, ease: 'none' },
            i * 1.2
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-white text-[#263238] px-4 sm:px-6 lg:px-8 select-none font-sans flex flex-col justify-center py-12 overflow-hidden border-b border-gray-200/80"
    >
      <div className="max-w-6xl mx-auto w-full my-auto space-y-8">
        
        {/* ─── Section Header ─── */}
        <div className="text-center space-y-3 max-w-3xl mx-auto shrink-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#263238] tracking-tight leading-tight">
            {t('featured.title', 'Featured Projects & Events')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto rounded-full shadow-xs" />
          <p className="text-xs sm:text-sm text-gray-500 font-mono uppercase tracking-wider pt-1">
            Scroll down to stack project cards
          </p>
        </div>

        {/* ─── GSAP Pinned Card Stack Deck Showcase ─── */}
        <div className="relative w-full h-[460px] sm:h-[500px] lg:h-[520px]">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[idx] = el;
              }}
              className="absolute inset-0 w-full h-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-gray-200/90 shadow-2xl overflow-hidden flex flex-col justify-between"
              style={{
                zIndex: idx + 10,
              }}
            >
              {/* Top Accent Stripe */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600" />

              {/* Card Index Counter */}
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6 px-3.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-[#263238] text-xs font-mono font-extrabold tracking-widest z-20">
                0{idx + 1} / 0{projects.length}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center h-full">
                
                {/* Photo Column */}
                <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-2xl overflow-hidden shadow-lg border border-gray-100 group min-h-[220px] sm:min-h-[300px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-amber-800 shadow-sm border border-gray-100">
                    {project.badge}
                  </div>

                  {/* Date Badge */}
                  <div className="absolute bottom-4 left-4 text-white text-xs font-mono font-semibold flex items-center gap-2 bg-black/50 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                    <Calendar size={14} className="text-amber-400" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-5 space-y-4 flex flex-col justify-between py-1">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-amber-800 uppercase tracking-widest">
                      <Sparkles size={14} />
                      <span>FEATURED INITIATIVE</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#263238] tracking-tight leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-sans font-normal line-clamp-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs sm:text-sm font-bold bg-[#F5B800] hover:bg-[#E5AA00] text-[#263238] shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-amber-400/40"
                    >
                      <span>Explore Initiative</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ─── Bottom Action Button ─── */}
        <div className="text-center pt-4 shrink-0">
          <Link
            to="/our-work"
            className="inline-flex items-center gap-2 bg-[#263238] hover:bg-[#F5B800] text-white hover:text-[#263238] font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-xs sm:text-sm border border-gray-200"
          >
            <span>View All 16 NGO Projects & Initiatives</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
