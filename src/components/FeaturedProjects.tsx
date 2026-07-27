import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Sparkles, FolderHeart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
    link: '/environment',
    badge: 'Reforestation Drive',
  },
  {
    id: 3,
    title: 'Health Camp in Rural Uttar Pradesh',
    description: 'Organizing free specialized medical check‑ups, diagnostic care, free medicines, and health awareness drives for over 500+ underserved villagers.',
    image: '/healthhj.jpeg',
    date: 'January 2025',
    link: '/healthcare',
    badge: 'Medical Outreach',
  },
  {
    id: 4,
    title: 'Digital Literacy for 1000 Girls',
    description: 'Empowering young women and girls with computer literacy, coding basics, digital skills, and internet safety training to build self-reliant futures.',
    image: '/education1.jpeg',
    date: '2024 – Ongoing',
    link: '/education',
    badge: 'Education & Tech',
  },
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
  total: number;
}

function StaggeredProjectCard({ project, index, total }: ProjectCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress while this card container passes through the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scale down and dim as subsequent cards stack over top
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.90 + index * 0.02]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.95, 0.85]);

  const isLast = index === total - 1;

  return (
    <div
      ref={containerRef}
      className={`sticky ${isLast ? 'mb-14 sm:mb-20' : 'mb-32 sm:mb-48'} last:mb-0`}
      style={{
        top: `calc(5.5rem + ${index * 0.6}rem)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative bg-white rounded-[2.5rem] p-8 sm:p-10 lg:p-12 border border-gray-200/90 shadow-2xl transition-all duration-300 group overflow-hidden"
      >
        {/* Top Gradient Accent Stripe */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-600 via-amber-500 to-emerald-600" />

        {/* Card Counter Floating Badge */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-1.5 rounded-full bg-black/5 border border-black/10 text-[#263238] text-xs font-mono font-extrabold tracking-widest z-20 backdrop-blur-md">
          0{index + 1} / 0{total}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Photo Column - Big Widescreen Aspect Ratio */}
          <div className="lg:col-span-7 relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-gray-100 group min-h-[260px] sm:min-h-[340px] lg:min-h-[380px]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            
            {/* Category Badge */}
            <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-mono font-bold text-red-600 shadow-md border border-gray-100">
              {project.badge}
            </div>

            {/* Date Badge */}
            <div className="absolute bottom-5 left-5 text-white text-xs font-mono font-semibold flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/20">
              <Calendar size={15} className="text-red-400" />
              <span>{project.date}</span>
            </div>
          </div>

          {/* Content Column - Editorial Typography */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between py-2">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold text-red-600 uppercase tracking-widest">
                <Sparkles size={15} />
                <span>FEATURED INITIATIVE</span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-extrabold text-[#263238] tracking-tight leading-[1.15] group-hover:text-red-600 transition-colors">
                {project.title}
              </h3>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-sans font-normal">
                {project.description}
              </p>
            </div>

            <div className="pt-4">
              <Link
                to={project.link}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Explore Initiative</span>
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

export default function FeaturedProjects() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#FAF9F6] text-[#263238] px-4 sm:px-6 lg:px-8 select-none border-y border-gray-200/80 font-sans overflow-x-clip">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* ─── Section Header ─── */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-xs font-mono font-bold uppercase tracking-wider">
            <FolderHeart className="w-4 h-4" />
            <span>{t('featured.label', 'Our Work in Action')}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#263238] tracking-tight leading-tight">
            {t('featured.title', 'Featured Projects & Events')}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full shadow-xs" />
        </div>

        {/* ─── Premium Staggered Deck Container ─── */}
        <div className="max-w-6xl mx-auto pb-32">
          {projects.map((project, idx) => (
            <StaggeredProjectCard
              key={project.id}
              project={project}
              index={idx}
              total={projects.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
