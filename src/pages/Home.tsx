// src/pages/Home.tsx
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import HeroSection from '../components/HeroSection'
import HelpChildrenSection from '../components/HelpChildrenSection'
import ImpactCategories from '../components/ImpactCategories'
import ImpactCounter from '../components/ImpactCounter'
import TrustFlow from '../components/TrustFlow'
import ImageCarousel from '../components/ImageCarousel'

// ─── New components ───
import VisionMission from '../components/VisionMission'
import FocusAreas from '../components/FocusAreas'
import FeaturedProjects from '../components/FeaturedProjects'
import TeamPreview from '../components/TeamPreview'
import GalleryPreview from '../components/GalleryPreview'
import CTASections from '../components/CTASections'

export default function Home() {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <HeroSection />

      {/* How would you like to create change section */}
      <HelpChildrenSection />

      {/* Focus Areas – 5 segments (preview of "What We Do") */}
      <FocusAreas />

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
    </div>
  )
}
