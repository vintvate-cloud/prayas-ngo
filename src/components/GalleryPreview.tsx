// src/components/GalleryPreview.tsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Masonry, { type MasonryItem } from './Masonry';

// Pure list of real field photographs (strictly excluding certificates & hero banners)
const galleryItems: MasonryItem[] = [
  {
    id: '1',
    img: '/healthcaret.jpg',
    url: '/gallery',
    height: 600,
    title: 'Free Health Checkup Camp',
    category: 'Healthcare'
  },
  {
    id: '2',
    img: '/EDUCATION.JPG',
    url: '/gallery',
    height: 700,
    title: 'Sanskarshala Learning Centre',
    category: 'Education'
  },
  {
    id: '3',
    img: '/IMG-23.jpeg',
    url: '/gallery',
    height: 520,
    title: 'Rural Clean Water Initiative',
    category: 'Rural Welfare'
  },
  {
    id: '4',
    img: '/IMG-25.jpeg',
    url: '/gallery',
    height: 680,
    title: 'Volunteer Leadership Drive',
    category: 'Community'
  },
  {
    id: '5',
    img: '/IMG-27.jpeg',
    url: '/gallery',
    height: 580,
    title: 'Social Awareness Rally',
    category: 'Social Cause'
  },
  {
    id: '6',
    img: '/healthhj.jpeg',
    url: '/gallery',
    height: 720,
    title: 'Elderly Care & Nutrition Drive',
    category: 'Social Welfare'
  },
  {
    id: '7',
    img: '/IMG-24.jpeg',
    url: '/gallery',
    height: 500,
    title: 'Community Skill Training',
    category: 'Livelihood'
  },
  {
    id: '8',
    img: '/IMG-20.jpg',
    url: '/gallery',
    height: 640,
    title: 'Children Educational Workshop',
    category: 'Education'
  },
  {
    id: '9',
    img: '/IMG-21.jpg',
    url: '/gallery',
    height: 540,
    title: 'Youth Leadership Program',
    category: 'Youth Empowerment'
  },
  {
    id: '10',
    img: '/Sindoda/IMG_20191217_133958.jpg',
    url: '/gallery',
    height: 660,
    title: 'Project Sindoda Model Village Drive',
    category: 'Rural Development'
  }
];

export default function GalleryPreview() {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-800 font-mono text-xs font-bold uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            Visual Memories & Impact
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#263238] mt-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {t('gallery.title', 'Our Impact Gallery')}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-yellow-400 mx-auto mt-4 rounded-full shadow-xs" />
        </motion.div>

        {/* Integrated React Bits GSAP Masonry Component */}
        <div className="w-full">
          <Masonry
            items={galleryItems}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.97}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-[#263238] text-white hover:bg-[#F5B800] hover:text-[#263238] font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200"
          >
            <span>View Complete Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
