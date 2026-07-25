// src/components/FeaturedProjects.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Calendar } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const projects = [
  {
    id: 1,
    title: 'Project Sindoda (Plastic Mukti)',
    description: 'Transforming Sindoda into a completely plastic‑free zone through community action.',
    image: '/Sindoda/IMG_20191022_121001 (1).jpg',
    date: '2023 – Ongoing',
    link: '/project-sindoda',
  },
  {
    id: 2,
    title: 'Kargil Vatika – Memorial Forest',
    description: 'A living tribute to our soldiers – planting thousands of trees in their honour.',
    image: '/TREEGROW.jpg',
    date: '2022 – Ongoing',
    link: '/environment',
  },
  {
    id: 3,
    title: 'Health Camp in Rural Uttar Pradesh',
    description: 'Free medical check‑ups, medicines, and health awareness for 500+ villagers.',
    image: '/healthhj.jpeg',
    date: 'January 2025',
    link: '/healthcare',
  },
  {
    id: 4,
    title: 'Digital Literacy for 1000 Girls',
    description: 'Empowering young women with computer skills and internet safety training.',
    image: '/education1.jpeg',
    date: '2024 – Ongoing',
    link: '/education',
  },
]

export default function FeaturedProjects() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#F8FAFC] py-16 md:py-24 border-y border-[#263238]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#263238] font-mono text-xs uppercase tracking-widest font-semibold bg-[#FFF314]/20 px-4 py-2 rounded-full">
            {t('featured.label', 'Our Work in Action')}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mt-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('featured.title', 'Featured Projects & Events')}
          </h2>
          <div className="w-20 h-1 bg-[#FFF314] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#263238] mb-1 line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-[#263238]/70 text-sm leading-relaxed line-clamp-2 mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs text-[#263238]/60">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {project.date}
                  </span>
                  <Link
                    to={project.link}
                    className="inline-flex items-center gap-1 text-[#263238] font-medium hover:text-[#FFF314] transition-colors"
                  >
                    Read More <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
