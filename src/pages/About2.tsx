import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Heart,
  Users,
  GraduationCap,
  Leaf,
  Stethoscope,
  Target,
  Globe,
  HandHeart,
  ArrowRight,
  Award,
  CheckCircle2,
  Sparkles,
  Compass,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function About2() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const [activePillar, setActivePillar] = useState<number>(0);

  const milestones = [
    { year: '2001', title: 'Foundation of Prayas', desc: 'Started with humble grassroots medical camps & child education centers.' },
    { year: '2008', title: 'Rural Adoption Drive', desc: 'Expanded holistic village adoption programs focusing on clean water & sanitation.' },
    { year: '2015', title: 'Women Skill Empowerment', desc: 'Launched vocational sewing centers & micro-entrepreneurship programs.' },
    { year: '2021', title: 'Environmental Mission', desc: 'Planted over 100,000+ trees and launched Kargil Vatika memorial forests.' },
    { year: '2026', title: 'Sustainable Future', desc: 'Impacted 10,000+ lives across 50+ villages through self-reliant development.' },
  ];

  const pillars = [
    {
      icon: GraduationCap,
      title: 'Education & Child Care',
      tagline: 'Building a Knowledgeable Generation',
      desc: 'Providing free coaching, Sanskarshala value centers, school supplies, and computer literacy to underprivileged children.',
      image: '/P1039409.JPG',
      stats: '5,000+ Students Educated'
    },
    {
      icon: Users,
      title: 'Women Empowerment',
      tagline: 'Fostering Economic Independence',
      desc: 'Equipping women with vocational skills, sewing machines, and financial literacy to become self-reliant entrepreneurs.',
      image: '/P1039322.JPG',
      stats: '2,500+ Women Trained'
    },
    {
      icon: Stethoscope,
      title: 'Health & Organ Advocacy',
      tagline: 'Ensuring Well-being for All',
      desc: 'Free health diagnostic camps, organ donation awareness campaigns, blood donation drives, and elderly assistance.',
      image: '/PRAYASHEALTHCAMP.jpeg',
      stats: '15,000+ Patients Treated'
    },
    {
      icon: Leaf,
      title: 'Environment Conservation',
      tagline: 'Green Future & Eco-Balance',
      desc: 'Tree plantation drives, rainwater harvesting, seed ball dispersal, and Kargil Vatika environmental memorial forests.',
      image: '/TREEGROW.jpg',
      stats: '100,000+ Trees Planted'
    },
  ];

  const coreValues = [
    { icon: Heart, title: 'Empathy', desc: 'Serving every individual with genuine kindness and dignity.' },
    { icon: ShieldCheck, title: 'Integrity', desc: 'Complete transparency in governance and community trust.' },
    { icon: Compass, title: 'Purpose', desc: 'Driven by sustainable solutions rather than temporary remedies.' },
    { icon: HandHeart, title: 'Unity', desc: 'Collaborating closely with local citizens, donors & leaders.' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.gsap-about2-hero',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }
      );

      gsap.fromTo(
        '.gsap-milestone-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-milestones-wrapper',
            start: 'top 85%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="min-h-screen bg-[#FAFAFC] text-[#263238] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans"
    >
      {/* Background Subtle Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20 sm:space-y-28">

        {/* ─── 1. Modern Hero Section ─── */}
        <div className="gsap-about2-hero text-center max-w-4xl mx-auto space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-red-600 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4" />
            <span>Discover Prayas — Version 2.0</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#263238] tracking-tight leading-[1.15]">
            Empowering Communities, <br className="hidden sm:inline" />
            <span className="text-red-600 underline decoration-amber-400 decoration-4 underline-offset-8">
              Enriching Lives
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prayas Samaj Sevi Sanstha is a registered non-profit organization committed to holistic human development, rural empowerment, and social welfare across India.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => navigate('/volunteer')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Join as a Volunteer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/donate')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-white text-[#263238] border border-gray-300 hover:bg-gray-50 shadow-sm transition-all cursor-pointer"
            >
              <span>Support Our Programs</span>
            </button>
          </div>
        </div>

        {/* ─── 2. Interactive Pillars Showcase ─── */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-gray-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600">
                Core Impact Pillars
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#263238]">
                Where We Make Difference
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                Click through our core operational focus areas to see how we drive tangible grassroots transformation.
              </p>
            </div>

            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                const isSelected = activePillar === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    className={`w-full text-left p-4 rounded-2xl transition-all cursor-pointer flex items-center gap-4 ${
                      isSelected
                        ? 'bg-red-600 text-white shadow-lg scale-[1.02]'
                        : 'bg-gray-50 text-[#263238] hover:bg-gray-100 border border-gray-200/60'
                    }`}
                  >
                    <div className={`p-3 rounded-xl ${isSelected ? 'bg-white/20 text-white' : 'bg-red-100 text-red-600'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm sm:text-base">{pillar.title}</h4>
                      <p className={`text-xs ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>{pillar.tagline}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
            <img
              src={pillars[activePillar].image}
              alt={pillars[activePillar].title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <span className="inline-block px-3 py-1 bg-amber-400 text-black text-xs font-bold rounded-full">
                {pillars[activePillar].stats}
              </span>
              <h3 className="text-2xl font-bold">{pillars[activePillar].title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed">{pillars[activePillar].desc}</p>
            </div>
          </div>
        </div>

        {/* ─── 3. Timeline / Milestones ─── */}
        <div className="gsap-milestones-wrapper space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#263238]">Our Milestone Journey</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Key highlights of our 25+ year commitment to selfless social upliftment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="gsap-milestone-card bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-red-600" />
                <div>
                  <span className="text-2xl sm:text-3xl font-extrabold font-mono text-red-600">{m.year}</span>
                  <h4 className="font-bold text-base text-[#263238] mt-2 mb-1">{m.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
                <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-amber-600">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Achieved</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── 4. Values Grid ─── */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#263238]">Our Foundational Principles</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              The core ethics guiding every grassroots initiative and partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 text-red-600 flex items-center justify-center mx-auto">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg text-[#263238]">{val.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── 5. Social Links ─── */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-center border border-gray-200 shadow-lg space-y-6">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#263238]">Connect With Prayas Sanstha</h3>
          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Stay updated with our latest field updates, social drives, and impact reports.
          </p>

          <div className="flex justify-center gap-4 flex-wrap pt-2">
            <a
              href="https://www.facebook.com/prayassamajiksanstha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow"
              aria-label="Facebook"
            >
              <FaFacebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/prayas_samajik_sanstha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:scale-110 transition-transform shadow"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC16ZbLnP1qJxrKQoKsss12w"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow"
              aria-label="YouTube"
            >
              <FaYoutube className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/prayas-samaj-sevi-sastha-undefined-0a468b418/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/pryasaa?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-[#000000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
