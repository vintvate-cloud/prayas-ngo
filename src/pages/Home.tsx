// src/pages/Home.tsx
import { useTranslation } from 'react-i18next'
import HeroSection from '../components/HeroSection'
import AboutUsSection from '../components/AboutUsSection'
import HelpChildrenSection from '../components/HelpChildrenSection'
import FocusAreas from '../components/FocusAreas'
import OurWorkSection from '../components/OurWorkSection'
import ImpactCategories from '../components/ImpactCategories'
import ImpactCounter from '../components/ImpactCounter'
import TrustFlow from '../components/TrustFlow'
import FeaturedProjects from '../components/FeaturedProjects'
import TeamPreview from '../components/TeamPreview'
import GalleryPreview from '../components/GalleryPreview'
import CTASections from '../components/CTASections'
import ImageCarousel from '../components/ImageCarousel'
import CollaboratorsSection from '../components/CollaboratorsSection'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <HeroSection />

      {/* About Us section - preview of first card from About Us page */}
      <AboutUsSection />

      {/* How would you like to create change section */}
      <HelpChildrenSection />

      {/* Focus Areas – 5 segments (preview of "What We Do") */}
      <FocusAreas />

      {/* Our Work Section */}
      <OurWorkSection />

      {/* Impact Categories – donation carousel */}
      <ImpactCategories />

      {/* Impact Numbers */}
      <ImpactCounter />

      {/* Trust Flow – approach with GSAP animations */}
      <TrustFlow />

      {/* Featured Projects & Events */}
      <FeaturedProjects />

      {/* Team Preview */}
      <TeamPreview />

      {/* Gallery Preview */}
      <GalleryPreview />

      {/* Donate / Volunteer / Contact combined section */}
      <CTASections />

      {/* Image Carousel – Accreditations */}
      <ImageCarousel />

      {/* Our Collaborators Section – Auto-moving right partners (just before footer) */}
      <CollaboratorsSection />
    </div>
  )
}
