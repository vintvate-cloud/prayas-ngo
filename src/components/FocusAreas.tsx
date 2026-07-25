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
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#263238] font-mono text-xs uppercase tracking-widest font-semibold bg-[#FFF314]/20 px-4 py-2 rounded-full">
            {t('focus.label', 'What We Do')}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mt-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('focus.title', 'Our Focus Areas')}
          </h2>
          <div className="w-20 h-1 bg-[#FFF314] mx-auto mt-4 rounded-full" />
          <p className="text-[#263238]/60 mt-4 max-w-2xl mx-auto">
            {t('focus.desc', 'We work across five key areas to create lasting impact in communities.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all border-t-4"
              style={{ borderColor: area.color }}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div
                  className="p-3 rounded-full mb-4 transition-colors"
                  style={{ backgroundColor: `${area.color}20` }}
                >
                  <area.icon className="w-8 h-8" style={{ color: area.color }} />
                </div>
                <h3 className="text-lg font-bold text-[#263238] mb-2">{area.title}</h3>
                <p className="text-[#263238]/70 text-sm leading-relaxed flex-1">
                  {area.description}
                </p>
                <Link
                  to={`/${area.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#263238] hover:text-[#FFF314] transition-colors group-hover:gap-2"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
