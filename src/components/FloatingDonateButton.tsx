// src/components/FloatingDonateButton.tsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// SVG fallback for circular image
const DEFAULT_FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"%3E%3Crect width="80" height="80" fill="%23FFF314"/%3E%3Ctext x="50%25" y="55%25" dominant-baseline="middle" text-anchor="middle" font-size="32"%3E❤️%3C/text%3E%3C/svg%3E';

// Define all messages with their image URLs
const MARQUEE_MESSAGES = [
  { 
    id: 'birds',
    text: 'Donate for Birds',
    imageUrl: 'https://i.ibb.co/d01n9H1K/In-Shot-20260621-143002419.png'
  },
  { 
    id: 'education',
    text: 'Donate for Education',
    imageUrl: '/P1039409.JPG'
  },
  { 
    id: 'water',
    text: 'Donate for Water',
    imageUrl: 'https://i.ibb.co/5xjFCftw/In-Shot-20260621-143509552.png'
  },
  { 
    id: 'nature',
    text: 'Donate for Nature',
    imageUrl: '/TREEGROW.jpg'
  },
  { 
    id: 'food',
    text: 'Donate for Food',
    imageUrl: '/P1039322.JPG'
  },
  { 
    id: 'health',
    text: 'Donate for Healthcare',
    imageUrl: '/healthhj.jpeg'
  },
  { 
    id: 'shelter',
    text: 'Donate for Shelter',
    imageUrl: '/EDUCATION.JPG'
  },
]

export default function FloatingDonateButton() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Rotate messages every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MARQUEE_MESSAGES.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const currentMessage = MARQUEE_MESSAGES[currentIndex]

  return (
    <Link
      to={`/donate?cause=${currentMessage.id}`}
      className="fixed bottom-20 right-3 sm:bottom-8 sm:right-8 z-50 flex flex-col items-center gap-1.5 hover:scale-105 transition-transform duration-200"
    >
      {/* Circular Image */}
      <div className="w-14 h-14 sm:w-18 sm:h-18 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-white/80 bg-white">
        <img 
          src={currentMessage.imageUrl} 
          alt={currentMessage.text}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = DEFAULT_FALLBACK_IMAGE;
          }}
        />
      </div>
      
      {/* Text Below Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.3 }}
          className="text-xs sm:text-sm font-semibold text-[#263238] bg-[#FFF314] px-3 py-1 rounded-full shadow-lg whitespace-nowrap"
        >
          {currentMessage.text}
        </motion.div>
      </AnimatePresence>
    </Link>
  )
}
