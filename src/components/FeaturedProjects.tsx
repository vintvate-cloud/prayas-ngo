import { motion } from 'framer-motion';
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

export default function FeaturedProjects() {
  const { t } = useTranslation();

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#FAF9F6] text-[#263238] px-4 sm:px-6 lg:px-8 select-none border-y border-gray-200/80 font-sans">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        {/* ─── Section Header ─── */}
        <div className="text-center space-y-3 max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-xs font-mono font-bold uppercase tracking-wider">
            <FolderHeart className="w-4 h-4" />
            <span>{t('featured.label', 'Our Work in Action')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#263238] tracking-tight leading-tight">
            {t('featured.title', 'Featured Projects & Events')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full shadow-xs" />
        </div>

        {/* ─── Native 60fps CSS Sticky Stacking Cards Container ─── */}
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="sticky bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-gray-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              style={{
                top: `calc(6.5rem + ${idx * 1.25}rem)`,
                zIndex: idx + 10,
              }}
            >
              {/* Top Gradient Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-emerald-600" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
                
                {/* Photo Column */}
                <div className="md:col-span-6 relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-md border border-gray-100 group min-h-[220px] sm:min-h-[260px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-mono font-bold text-red-600 shadow-sm border border-gray-100">
                    {project.badge}
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-4 left-4 text-white text-xs font-mono font-semibold flex items-center gap-1.5">
                    <Calendar size={14} className="text-red-400" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Content Column */}
                <div className="md:col-span-6 space-y-4 flex flex-col justify-between py-1">
                  <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 text-xs font-mono font-extrabold text-red-600 uppercase tracking-widest">
                      <Sparkles size={14} />
                      <span>PROJECT 0{idx + 1}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#263238] leading-tight group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-3">
                    <Link
                      to={project.link}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-xl transition-all cursor-pointer"
                    >
                      <span>Explore Initiative</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
