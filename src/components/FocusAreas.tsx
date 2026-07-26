// src/components/FocusAreas.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Trees, Users, GraduationCap, HeartPulse, Leaf, ArrowRight
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const areas = [
  {
    icon: Trees,
    title: 'Rural Development',
    description: 'Transforming villages with infrastructure, water & sanitation, and community empowerment.',
    slug: 'rural-development',
    color: '#849989',
  },
  {
    icon: Users,
    title: 'Women Empowerment',
    description: 'Skill development, financial independence, and leadership for women.',
    slug: 'women-empowerment',
    color: '#777e91',
  },
  {
    icon: GraduationCap,
    title: 'Education & Skills',
    description: 'Quality education, digital literacy, and youth leadership programs.',
    slug: 'education',
    color: '#9eada0',
  },
  {
    icon: HeartPulse,
    title: 'Health & Welfare',
    description: 'Healthcare camps, organ donation awareness, and community welfare.',
    slug: 'healthcare',
    color: '#8d9159',
  },
  {
    icon: Leaf,
    title: 'Environment',
    description: 'Plantation drives, water conservation, and sustainable practices.',
    slug: 'environment',
    color: '#9e8b70',
  },
]

export default function FocusAreas() {
  const { t } = useTranslation()

  return (
    // Trimmed vertical padding (was py-16 md:py-24) — the biggest single
    // contributor to this section overflowing a laptop's viewport height.
    <section className="bg-white py-8 md:py-12 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          // was mb-12
          className="text-center mb-6 md:mb-8"
        >
          <span className="inline-block text-[#263238] font-mono text-xs uppercase tracking-widest font-semibold bg-[#FFF314]/20 px-4 py-1.5 rounded-full">
            {t('focus.label', 'What We Do')}
          </span>
          {/* Capped at text-4xl on desktop (was up to text-5xl) and tighter
              top margin — headline no longer eats a disproportionate share
              of the available height on shorter laptop screens. */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#263238] mt-3"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('focus.title', 'Our Focus Areas')}
          </h2>
          <div className="w-16 h-1 bg-[#FFF314] mx-auto mt-3 rounded-full" />
          <p className="text-[#263238]/60 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            {t('focus.desc', 'We work across five key areas to create lasting impact in communities.')}
          </p>
        </motion.div>

        {/* 5 columns now start at `lg` (1024px) instead of `xl` (1280px).
            Most laptop viewports fall in the 1024–1280px range, so this
            keeps all 5 cards on a single row there instead of wrapping to
            2 rows and roughly doubling the section's height. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
          {areas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4 h-full"
              style={{ borderColor: area.color }}
            >
              {/* Reduced padding (was p-6) and made a flex column so every
                  card is the same compact height regardless of description
                  length. */}
              <div className="p-4 lg:p-5 flex flex-col items-center text-center h-full">
                <div
                  className="p-2.5 rounded-full mb-3 transition-colors"
                  style={{ backgroundColor: `${area.color}20` }}
                >
                  <area.icon className="w-6 h-6 lg:w-7 lg:h-7" style={{ color: area.color }} />
                </div>
                <h3 className="text-base lg:text-lg font-bold text-[#263238] mb-1.5">{area.title}</h3>
                {/* line-clamp-3 caps description height so long copy can't
                    stretch a card (and the whole row) taller than needed. */}
                <p className="text-[#263238]/70 text-xs lg:text-sm leading-relaxed flex-1 line-clamp-3">
                  {area.description}
                </p>
                <Link
                  to={`/${area.slug}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs lg:text-sm font-medium text-[#263238] hover:text-[#FFF314] transition-colors group-hover:gap-2"
                >
                  Learn More <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
