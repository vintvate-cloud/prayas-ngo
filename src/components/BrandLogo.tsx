// src/components/BrandLogo.tsx

import { useState, useEffect, useRef } from 'react';
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

  useEffect(() => {
    const interval = setInterval(() => {
      setBrandLangIndex((prev) => (prev === 0 ? 1 : 0));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const isEnglish = brandLangIndex === 0;

  // ─── Width-sync refs ───
  // Instead of relying on CSS (w-max + w-full + justify-between) to make the
  // top line "guess" the bottom line's width, we measure the bottom line's
  // real rendered pixel width and apply it directly to the top line.
  // This removes any dependency on font-rendering/kerning differences
  // between mobile and desktop browsers, so both lines always line up
  // exactly, on every device.
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const [topRowWidth, setTopRowWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const syncWidth = () => {
      if (bottomRowRef.current) {
        setTopRowWidth(bottomRowRef.current.getBoundingClientRect().width);
      }
    };

    // Measure once fonts are ready (avoids a flash of mismatched width
    // before web fonts finish loading), then again on resize.
    if (document.fonts?.ready) {
      document.fonts.ready.then(syncWidth);
    }
    // Run on next frame too, in case fonts were already cached.
    const raf = requestAnimationFrame(syncWidth);

    window.addEventListener('resize', syncWidth);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', syncWidth);
    };
  }, [brandLangIndex, variant]);

  // ─── Size classes per variant ───
  let logoSizeClasses = 'w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24';

  // English first line sizing
  let firstLineClasses = 'text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl';

  // Hindi first line needs to be significantly larger to equal the width of the bottom line
  let hindiFirstLineClasses = 'text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem]';

  let secondLineClasses = 'text-[10px] xs:text-xs sm:text-sm md:text-base';
  let containerClasses = 'min-w-[80px] sm:min-w-[140px] md:min-w-[180px]';
  let gapClasses = 'gap-2 sm:gap-3';

  if (variant === 'footer') {
    logoSizeClasses = 'w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16';
    firstLineClasses = 'text-base xs:text-lg sm:text-2xl md:text-3xl';
    hindiFirstLineClasses = 'text-2xl xs:text-3xl sm:text-5xl md:text-6xl';
    secondLineClasses = 'text-[8px] xs:text-[10px] sm:text-xs md:text-sm';
    containerClasses = 'min-w-[60px] sm:min-w-[100px] md:min-w-[130px]';
    gapClasses = 'gap-1 sm:gap-2';
  } else if (variant === 'small') {
    logoSizeClasses = 'w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14';
    firstLineClasses = 'text-sm xs:text-base sm:text-xl md:text-2xl';
    hindiFirstLineClasses = 'text-xl xs:text-2xl sm:text-4xl md:text-5xl';
    secondLineClasses = 'text-[8px] xs:text-[9px] sm:text-xs md:text-sm';
    containerClasses = 'min-w-[50px] sm:min-w-[80px] md:min-w-[110px]';
    gapClasses = 'gap-1 sm:gap-2';
  } else if (variant === 'large') {
    logoSizeClasses = 'w-16 h-16 sm:w-28 sm:h-28 md:w-32 md:h-32';
    firstLineClasses = 'text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl';
    hindiFirstLineClasses = 'text-5xl xs:text-6xl sm:text-[5.5rem] md:text-[7rem] lg:text-[8rem]';
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
        className={`flex-1 flex flex-col justify-center leading-tight ${containerClasses}`}
      >
        {isEnglish ? (
          // ─── English ───
          <div className="flex flex-col w-max">
            {/* Top line: width is explicitly set (in px) to match the
                measured width of the bottom line, so it always lines up
                exactly regardless of device/browser font rendering. */}
            <div
              className={`flex justify-between text-red-600 font-bold ${firstLineClasses} leading-none mb-[2px] sm:mb-1`}
              style={topRowWidth ? { width: `${topRowWidth}px` } : undefined}
            >
              {['P', 'R', 'A', 'Y', 'A', 'S'].map((char, i) => (
                <span key={i}>{char}</span>
              ))}
            </div>
            {/* Bottom line dictates the width — this is what we measure */}
            <div
              ref={bottomRowRef}
              className={`text-red-600 font-medium ${secondLineClasses} whitespace-nowrap`}
              style={{ wordSpacing: '0.3em' }}
            >
              Samaj sevi Sanstha
            </div>
          </div>
        ) : (
          // ─── Hindi ───
          <div className="flex flex-col items-center w-max">
            {/* Top line (single word) scaled up by font-size; kept centered
                so any residual sub-pixel gap is symmetric rather than
                pulling to one side. */}
            <div className={`text-red-600 font-bold ${hindiFirstLineClasses} leading-none mb-[-4px] sm:mb-0`}>
              प्रयास
            </div>
            {/* Bottom line dictates the container width */}
            <div
              ref={bottomRowRef}
              className={`text-red-600 font-medium ${secondLineClasses} whitespace-nowrap w-full text-center`}
              style={{ wordSpacing: '0.2em' }}
            >
              समाज सेवी संस्था
            </div>
          </div>
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
