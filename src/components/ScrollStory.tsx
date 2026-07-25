// src/components/ScrollStory.tsx


export default function ScrollStory() {
  const { t } = useTranslation();
  
  return (
    // md:h-screen and flex-col ensures the section perfectly fits one desktop screen
    // overflow-hidden on desktop prevents the page itself from scrolling past this block
    <section className="bg-white border-y border-[#263238]/10 w-full md:h-screen flex flex-col py-8 md:py-12 overflow-hidden">
      
      {/* ─── Top Heading ─── */}
      <div className="w-full flex-shrink-0 px-4 mb-6 md:mb-10">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] text-center"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          About Us
        </h2>
      </div>

      {/* ─── 50/50 Split Content Area ─── */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12 min-h-0">
        
        {/* Left Side: YouTube Video */}
        {/* Takes 50% width on desktop. aspect-video keeps the YouTube player ratio perfect */}
        <div className="w-full md:w-1/2 flex-shrink-0 rounded-lg overflow-hidden shadow-lg aspect-video">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8fA5MBs4mr0"
            title="Prayas - About Us"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Right Side: Text Information */}
        {/* Takes 50% width. overflow-y-auto allows the text to scroll independently if it's too long for smaller laptops */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center overflow-y-auto pr-2 md:pr-4 space-y-4 md:space-y-6 text-[#263238]/80 text-base sm:text-lg md:text-xl leading-relaxed py-2 md:py-0">
          
          <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[#FFF314] first-letter:mr-2 first-letter:float-left first-letter:drop-shadow-sm font-medium text-[#263238]">
            Prayas is a non-profit organization dedicated to creating meaningful and sustainable change in society. Established in 2001, we have been working towards empowering communities and improving lives through education, healthcare, social awareness, and community development initiatives.
          </p>
          
          
        </div>

      </div>
    </section>
  )
}
