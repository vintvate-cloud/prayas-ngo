// src/components/TeamPreview.tsx
import { motion } from 'framer-motion'
import { Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const teamMembers = [
  { name: 'Dr. Anjali Sharma', role: 'Founder & Director', image: '/team1.jpg' },
  { name: 'Rahul Verma', role: 'Program Manager - Education', image: '/team2.jpg' },
  { name: 'Priya Patel', role: 'Health Coordinator', image: '/team3.jpg' },
  { name: 'Amit Singh', role: 'Rural Development Lead', image: '/team4.jpg' },
]

export default function TeamPreview() {
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
            {t('team.label', 'Meet the Team')}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mt-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('team.title', 'Our Leadership')}
          </h2>
          <div className="w-20 h-1 bg-[#FFF314] mx-auto mt-4 rounded-full" />
          <p className="text-[#263238]/60 mt-4 max-w-2xl mx-auto">
            {t('team.desc', 'Passionate individuals driving change at the grassroots.')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-[#FFF314] shadow-lg mb-3">
                <img
                  src={member.image || '/placeholder-avatar.jpg'}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <h4 className="font-bold text-[#263238] text-sm sm:text-base">{member.name}</h4>
              <p className="text-[#263238]/60 text-xs sm:text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/about/members"
            className="inline-flex items-center gap-2 text-[#263238] font-semibold hover:text-[#FFF314] transition-colors"
          >
            View Full Team <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
