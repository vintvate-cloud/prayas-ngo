// src/pages/Gallery.tsx
import { motion } from 'framer-motion';

import DomeGallery, { type DomeGalleryImage } from '@/components/DomeGallery';

// Pure list of ground-level NGO photographs (strictly excluding hero banner duplicates and certificates)
const ngoGalleryImages: DomeGalleryImage[] = [
  { src: '/healthcaret.jpg', alt: 'Free Eye & Health Camp' },
  { src: '/EDUCATION.JPG', alt: 'Sanskarshala Learning Centre' },
  { src: '/IMG-23.jpeg', alt: 'Rural Clean Water Initiative' },
  { src: '/IMG-25.jpeg', alt: 'Volunteer Leadership Drive' },
  { src: '/IMG-27.jpeg', alt: 'Social Awareness Rally' },
  { src: '/healthhj.jpeg', alt: 'Elderly Care & Nutrition Drive' },
  { src: '/IMG-24.jpeg', alt: 'Community Skill Training' },
  { src: '/IMG-20.jpg', alt: 'Children Educational Workshop' },
  { src: '/IMG-21.jpg', alt: 'Youth Leadership Program' },
  { src: '/Sindoda/IMG_20191217_133958.jpg', alt: 'Project Sindoda Model Village' },
  { src: '/CHILDRENGROUP.jpg', alt: 'Sanskarshala Children Group' },
  { src: '/PRAYASHEALTHCAMP.jpeg', alt: 'Prayas Health Camp' },
  { src: '/WOMEN.jpeg', alt: 'Women Empowerment Centre' },
  { src: '/TREEGROW.jpg', alt: 'Kargil Vatika Tree Plantation' },
  { src: '/P1039409.JPG', alt: 'Digital Literacy Classroom' },
  { src: '/P1039322.JPG', alt: 'Nutritious Meal Drive' },
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-gray-50 to-white text-[#263238] flex flex-col pt-[var(--navbar-height,80px)] pb-16 sm:pb-24 md:pb-32 relative overflow-hidden">
      {/* ===== HEADER BAR ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">


        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#263238]"
        >
          Our <span className="text-red-600">Gallery</span>
        </motion.h1>
      </div>

      {/* ===== 3D DOME GALLERY CANVAS ===== */}
      <div className="relative w-full h-[75vh] sm:h-[80vh] my-auto">
        <DomeGallery
          images={ngoGalleryImages}
          fit={0.5}
          fitBasis="auto"
          minRadius={550}
          maxRadius={1400}
          padFactor={0.2}
          overlayBlurColor="#F8FAFC"
          maxVerticalRotationDeg={10}
          dragSensitivity={18}
          enlargeTransitionMs={350}
          segments={35}
          dragDampening={2}
          openedImageWidth="440px"
          openedImageHeight="440px"
          imageBorderRadius="24px"
          openedImageBorderRadius="24px"
          grayscale={false}
          autoRotateSpeed={0.12}
        />
      </div>


    </div>
  );
}
