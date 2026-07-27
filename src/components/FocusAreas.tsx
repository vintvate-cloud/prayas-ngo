// src/components/FocusAreas.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Trees, Users, GraduationCap, HeartPulse, Leaf, ArrowRight, Sparkles
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

const areas = [
  {
    icon: Trees,
    title: 'Rural Development',
    description: 'Transforming villages with infrastructure, clean water, sanitation, and holistic community empowerment.',
    slug: 'rural-development',
    color: '#849989',
    image: 'https://i.ibb.co/fWWWk9S/Whats-App-Image-2026-07-12-at-2-50-03-PM-1.jpg',
  },
  {
    icon: Users,
    title: 'Women Empowerment',
    description: 'Vocational skill development, tailoring centres, financial independence, and SHGs for women.',
    slug: 'women-empowerment',
    color: '#777e91',
    image: '/WOMEN.jpeg',
  },
  {
    icon: GraduationCap,
    title: 'Education & Skills',
    description: 'Sanskarshala value education, digital literacy labs, career counselling, and youth leadership.',
    slug: 'education',
    color: '#5b8266',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
  },
  {
    icon: HeartPulse,
    title: 'Health & Welfare',
    description: 'Free rural health camps, organ donation drives, elderly support, and child welfare initiatives.',
    slug: 'healthcare',
    color: '#8d6e63',
    image: '/healthcaret.jpg',
  },
  {
    icon: Leaf,
    title: 'Environment',
    description: 'Massive tree plantation drives, Kargil Vatika tribute forest, and rainwater harvesting projects.',
    slug: 'environment',
    color: '#43a047',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop',
  },
]

export default function FocusAreas() {
  const { t } = useTranslation()

  return (
    <section className="bg-gradient-to-b from-gray-50 via-white to-gray-50 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-3 text-xs font-semibold uppercase tracking-wider text-[#263238] bg-amber-100/90 rounded-full border border-amber-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            {t('focus.label', 'What We Do')}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mt-2"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('focus.title', 'Our Focus Areas')}
          </h2>
          <div className="w-20 h-1 bg-[#FFF314] mx-auto mt-3 rounded-full" />
          <p className="text-[#263238]/70 mt-3 max-w-2xl mx-auto text-sm md:text-base font-light">
            {t('focus.desc', 'We work across five key areas to create lasting impact in communities.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {areas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative h-[360px] w-full rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-200/80 bg-slate-900"
              style={{
                boxShadow: `0 10px 30px -10px ${area.color}40`,
              }}
            >
              <Link to={`/${area.slug}`} className="block w-full h-full relative overflow-hidden rounded-3xl">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:blur-[2px] brightness-95 group-hover:brightness-75"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23263238"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%23FFF314"%3EPrayas%3C/text%3E%3C/svg%3E'
                    }}
                  />
                  {/* Default Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-opacity duration-500 group-hover:opacity-0" />
                </div>

                {/* UNHOVERED CARD CONTENT */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between transition-all duration-500 ease-out group-hover:opacity-0 group-hover:translate-y-3 z-10">
                  <div className="flex justify-between items-center">
                    <span
                      className="p-2.5 rounded-2xl text-white backdrop-blur-md shadow-md border border-white/20"
                      style={{ backgroundColor: `${area.color}E6` }}
                    >
                      <area.icon className="w-5 h-5" />
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5 drop-shadow-md">
                      {area.title}
                    </h3>
                    <p className="text-white/80 text-xs line-clamp-2 leading-relaxed font-light">
                      {area.description}
                    </p>
                  </div>
                </div>

                {/* HOVERED POP-UP PANEL INSIDE CARD */}
                <div
                  className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out z-20 backdrop-blur-md rounded-3xl border border-white/20"
                  style={{
                    background: `linear-gradient(145deg, ${area.color}E6 0%, rgba(15, 23, 42, 0.94) 100%)`,
                  }}
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2.5 border-b border-white/20 pb-2.5">
                      <span className="p-2 rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/30">
                        <area.icon className="w-4 h-4" />
                      </span>
                      <h3 className="text-lg font-bold text-white tracking-wide">
                        {area.title}
                      </h3>
                    </div>

                    <p className="text-white/95 text-xs leading-relaxed font-light pt-1">
                      {area.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/20">
                    <div className="w-full py-2.5 px-4 bg-white text-[#263238] font-bold rounded-xl shadow-lg hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider group/btn">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

