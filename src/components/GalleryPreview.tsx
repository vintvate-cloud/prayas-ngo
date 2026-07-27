// src/components/GalleryPreview.tsx
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Images } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const galleryImages = [
  '/P1039322.JPG',
  '/P1039409.JPG',
  '/healthcaret.jpg',
  '/CHILDRENGROUP.jpg',
  '/WOMEN.jpeg',
  '/TREEGROW.jpg',
]

export default function GalleryPreview() {
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
          <span className="inline-block text-red-600 font-mono text-xs uppercase tracking-widest font-bold bg-red-600/10 border border-red-600/20 px-4 py-1.5 rounded-full">
            {t('gallery.label', 'Our Moments')}
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mt-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('gallery.title', 'Gallery')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full shadow-xs" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.slice(0, 6).map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all group"
            >
              <img
                src={src}
                alt={`Gallery ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400"%3E%3Crect width="400" height="400" fill="%23263238"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%23FFF314"%3EPrayas%3C/text%3E%3C/svg%3E'
                }}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 text-[#263238] font-semibold hover:text-[#FFF314] transition-colors"
          >
            View All Photos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
