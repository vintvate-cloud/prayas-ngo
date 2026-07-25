// src/components/ScrollStory.tsx
import { useTranslation } from 'react-i18next'

export default function ScrollStory() {
  const { t } = useTranslation()
  return (
    <section
      className="bg-white border-y border-[#263238]/10 w-full flex items-center"
      style={{ minHeight: 'calc(100vh - var(--navbar-height, 80px))' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 md:py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* LEFT COLUMN: Heading + Video */}
          <div className="flex-1 flex flex-col justify-center">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#263238] mb-6 text-center md:text-left"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {t('story.heading', 'About Us')}
            </h2>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8fA5MBs4mr0"
                title="Prayas - About Us"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT COLUMN: Description paragraphs */}
          <div className="flex-1 flex flex-col justify-center">
            <div className="space-y-6 text-[#263238]/80 text-base sm:text-lg md:text-xl leading-relaxed overflow-y-auto max-h-[70vh] md:max-h-none pr-2">
              <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[#FFF314] first-letter:mr-2 first-letter:float-left first-letter:drop-shadow-sm font-medium text-[#263238]">
                {t(
                  'story.paragraphs.p1',
                  'Prayas is a non-profit organization dedicated to creating meaningful and sustainable change in society. Established in 2001, we have been working towards empowering communities and improving lives through education, healthcare, social awareness, and community development initiatives.'
                )}
              </p>
              <p>
                {t(
                  'story.paragraphs.p2',
                  'For over two decades, Prayas has been committed to supporting underprivileged families, children, women, and communities by providing opportunities, resources, and guidance for a better future. Our efforts focus on building a society where every individual gets the chance to learn, grow, and live with dignity.'
                )}
              </p>
              <p>
                {t(
                  'story.paragraphs.p3',
                  'With the support of volunteers, donors, and well-wishers, we have positively impacted thousands of lives across different communities. Through our various initiatives, we continue to work towards education, empowerment, environmental awareness, skill development, and social welfare. Our journey is driven by compassion, commitment, and the belief that even small efforts can create a lasting impact. Together, we strive to bring hope, opportunity, and transformation to those who need it the most.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
