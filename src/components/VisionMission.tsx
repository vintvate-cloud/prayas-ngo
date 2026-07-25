// src/components/VisionMission.tsx
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function VisionMission() {
  const { t } = useTranslation()

  return (
    <section className="bg-white py-16 md:py-24 border-y border-[#263238]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Vision & Mission
          </h2>
          <div className="w-20 h-1 bg-[#FFF314] mx-auto mt-4 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] p-8 rounded-2xl shadow-md border-l-4 border-[#FFF314]"
          >
            <h3 className="text-2xl font-bold text-[#263238] mb-3">Our Vision</h3>
            <p className="text-[#263238]/80 text-base leading-relaxed">
              {t('vision.desc', 'To build a just and equitable society where every individual has access to education, healthcare, livelihood, and dignity.')}
            </p>
          </motion.div>

          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#F8FAFC] p-8 rounded-2xl shadow-md border-l-4 border-[#FFF314]"
          >
            <h3 className="text-2xl font-bold text-[#263238] mb-3">Our Mission</h3>
            <p className="text-[#263238]/80 text-base leading-relaxed">
              {t('mission.desc', 'To empower underserved communities through sustainable development programs in education, health, livelihood, and environment, while fostering leadership and collective action.')}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
