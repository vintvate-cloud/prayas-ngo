// src/components/BrandLogo.tsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface BrandLogoProps {
  /** Size variant: 'navbar' (default), 'footer', 'small', 'large' */
  variant?: 'navbar' | 'footer' | 'small' | 'large';
  /** Optional route to wrap the brand in a Link */
  to?: string;
  /** Additional className to add to the wrapper */
  className?: string;
}

export default function BrandLogo({ 
  variant = 'navbar', 
  to, 
  className = '' 
}: BrandLogoProps) {
  // ─── Animation state (switches every 3s) ───
  const [brandLangIndex, setBrandLangIndex] = useState(0);
  const brandFirstLine = ['PRAYAS', 'प्रयास'];
  const brandSecondLine = ['Samaj sevi Sanstha', 'समाज सेवी संस्था'];

  useEffect(() => {
    const interval = setInterval(() => {
      setBrandLangIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isEnglish = brandLangIndex === 0;
  const currentFirstLine = brandFirstLine[brandLangIndex];
  const currentSecondLine = brandSecondLine[brandLangIndex];

  // ─── Size classes per variant ───
  let logoSizeClasses = 'w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24';
  let firstLineClasses = 'text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl';
  let secondLineClasses = 'text-[10px] xs:text-xs sm:text-sm md:text-base';
  let containerClasses = 'min-w-[80px] sm:min-w-[140px] md:min-w-[180px]';
  let gapClasses = 'gap-2 sm:gap-3';

  if (variant === 'footer') {
    logoSizeClasses = 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16';
    firstLineClasses = 'text-base xs:text-lg sm:text-2xl md:text-3xl';
    secondLineClasses = 'text-[8px] xs:text-[10px] sm:text-xs md:text-sm';
    containerClasses = 'min-w-[60px] sm:min-w-[100px] md:min-w-[130px]';
    gapClasses = 'gap-1 sm:gap-2';
  } else if (variant === 'small') {
    logoSizeClasses = 'w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14';
    firstLineClasses = 'text-sm xs:text-base sm:text-xl md:text-2xl';
    secondLineClasses = 'text-[8px] xs:text-[9px] sm:text-xs md:text-sm';
    containerClasses = 'min-w-[50px] sm:min-w-[80px] md:min-w-[110px]';
    gapClasses = 'gap-1 sm:gap-2';
  } else if (variant === 'large') {
    logoSizeClasses = 'w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32';
    firstLineClasses = 'text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl';
    secondLineClasses = 'text-sm xs:text-base sm:text-lg md:text-xl';
    containerClasses = 'min-w-[100px] sm:min-w-[180px] md:min-w-[220px]';
    gapClasses = 'gap-3 sm:gap-4';
  }

  // ─── Content (logo + animated text) ───
  const content = (
    <>
      {/* Logo */}
      <div className={`rounded-full overflow-hidden flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform border-2 border-white/20 ${logoSizeClasses}`}>
        <img
          src="/Logo.svg"
          alt="Prayas Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Animated brand text */}
      <motion.div
        key={brandLangIndex}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -5 }}
        transition={{ duration: 0.4 }}
        className={`flex-1 flex flex-col leading-tight ${containerClasses}`}
      >
        {isEnglish ? (
          // ─── English ───
          <>
            <div className={`text-red-600 font-bold ${firstLineClasses} tracking-[0.15em] sm:tracking-[0.2em] md:tracking-[0.25em] lg:tracking-[0.3em] text-center`}>
              {currentFirstLine}
            </div>
            <div className={`text-red-600 font-medium ${secondLineClasses} text-center`} style={{ wordSpacing: '0.3em' }}>
              {currentSecondLine}
            </div>
          </>
        ) : (
          // ─── Hindi ───
          <>
            <div className={`text-red-600 font-bold ${firstLineClasses} text-center leading-tight`}>
              {currentFirstLine}
            </div>
            <div className={`text-red-600 font-medium ${secondLineClasses} text-center`} style={{ wordSpacing: '0.2em' }}>
              {currentSecondLine}
            </div>
          </>
        )}
      </motion.div>
    </>
  );

  // ─── Wrap in Link or div ───
  const wrapperClasses = `flex items-center ${gapClasses} group ${className}`;

  if (to) {
    return (
      <Link to={to} className={wrapperClasses}>
        {content}
      </Link>
    );
  }

  return <div className={wrapperClasses}>{content}</div>;
}
