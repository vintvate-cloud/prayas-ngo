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
  Home,
  Lightbulb,
  Target,
  Globe,
  HandHeart,
  ArrowRight,
  Award,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  const [activeTab, setActiveTab] = useState<'story' | 'mission'>('story');

  const stats = [
    { number: '25+', label: t('about.stats.years', 'Years of Dedicated Service'), sub: 'Founded in 2001' },
    { number: '10K+', label: t('about.stats.lives', 'Lives Directly Impacted'), sub: 'Across 50+ Villages' },
    { number: '50+', label: t('about.stats.villages', 'Villages Adopted'), sub: 'Rural & Tribal Regions' },
    { number: '200+', label: t('about.stats.volunteers', 'Active Community Volunteers'), sub: 'Selfless Grassroots Force' },
  ];

  const values = [
    {
      icon: Heart,
      title: t('about.values.compassion.title', 'Compassion'),
      desc: t('about.values.compassion.desc', 'We approach every initiative with empathy and deep care for those we serve.'),
    },
    {
      icon: Target,
      title: t('about.values.commitment.title', 'Commitment'),
      desc: t('about.values.commitment.desc', 'We are dedicated to creating lasting, self-sustaining change through consistent action.'),
    },
    {
      icon: Globe,
      title: t('about.values.sustainability.title', 'Sustainability'),
      desc: t('about.values.sustainability.desc', 'We build solutions that endure and empower communities for generations to come.'),
    },
    {
      icon: HandHeart,
      title: t('about.values.collaboration.title', 'Collaboration'),
      desc: t('about.values.collaboration.desc', 'We work hand-in-hand with local leaders, donors, and volunteers to maximize impact.'),
    },
  ];

  const initiatives = [
    { icon: GraduationCap, label: t('about.initiatives.education', 'Education & Skill Development'), img: '/P1039409.JPG', count: '5,000+ Youth Mentored' },
    { icon: Stethoscope, label: t('about.initiatives.healthcare', 'Health Camps & Organ Advocacy'), img: '/PRAYASHEALTHCAMP.jpeg', count: '15,000+ Patients Served' },
    { icon: Users, label: t('about.initiatives.empowerment', 'Women Empowerment & Livelihood'), img: '/P1039322.JPG', count: '2,500+ Women Empowered' },
    { icon: Leaf, label: t('about.initiatives.environment', 'Environment & Reforestation'), img: '/TREEGROW.jpg', count: '100,000+ Trees Planted' },
  ];

  // GSAP ScrollTrigger Animations
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Hero Text Entrance
      gsap.fromTo(
        '.gsap-hero-title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      );
      gsap.fromTo(
        '.gsap-hero-sub',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      // 2. Parallax Image Zoom in Hero
      if (heroImageRef.current) {
        gsap.to(heroImageRef.current, {
          scale: 1.12,
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      // 3. Stats Cards Stagger
      gsap.fromTo(
        '.gsap-stat-card',
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.12,
          ease: 'back.out(1.4)',
          scrollTrigger: {
            trigger: '.gsap-stats-wrapper',
            start: 'top 85%',
          },
        }
      );

      // 4. Story & Tab Section Entrance
      gsap.fromTo(
        '.gsap-story-container',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-story-wrapper',
            start: 'top 80%',
          },
        }
      );

      // 5. Values Cards Stagger
      gsap.fromTo(
        '.gsap-value-card',
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.gsap-values-wrapper',
            start: 'top 80%',
          },
        }
      );

      // 6. Initiatives Photo Cards Stagger
      gsap.fromTo(
        '.gsap-initiative-card',
        { opacity: 0, y: 30, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.gsap-initiatives-wrapper',
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
      className="min-h-screen bg-[#FBF9F5] text-[#1A202C] py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans"
    >
      {/* ─── Ambient Subtle Warm Backdrops ─── */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#C59B27]/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#C81E1E]/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ─── 1. Luxury Hero Header ─── */}
        <div className="text-center mb-12 sm:mb-16 space-y-5 max-w-4xl mx-auto">
          <h1 className="gsap-hero-title text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#1A202C] tracking-tight leading-[1.1] font-sans">
            Transforming Lives with{' '}
            <span className="text-[#C59B27] underline decoration-[#C59B27]/30 underline-offset-8">
              Hope & Dignity
            </span>
          </h1>

          <p className="gsap-hero-sub text-base sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            {t(
              'about.hero.subtitle',
              'For over two decades, Prayas has been at the forefront of social change, empowering communities and transforming lives across India.'
            )}
          </p>
        </div>

        {/* ─── 2. GSAP Parallax Editorial Banner Showcase ─── */}
        <div className="relative mb-20 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/9] sm:aspect-[21/9] w-full max-h-[500px] group">
          <img
            ref={heroImageRef}
            src="/CHILDRENGROUP.jpg"
            alt="Prayas NGO Community Impact"
            className="w-full h-full object-cover object-center transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/90 via-[#1A202C]/30 to-transparent" />

          {/* Floating Editorial Quote on Banner */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white max-w-2xl flex items-start gap-3">
            <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#C59B27] shrink-0 opacity-80" />
            <div>
              <p className="text-sm sm:text-lg font-medium italic leading-relaxed text-gray-100">
                "Our mission is simple yet profound: to nurture self-reliance in every village and bring dignity to every human life we touch."
              </p>
              <span className="text-xs sm:text-sm font-bold text-[#C59B27] mt-2 block tracking-wider uppercase font-mono">
                — Prayas Social Welfare Society
              </span>
            </div>
          </div>
        </div>

        {/* ─── 3. Framer Motion & GSAP Impact Stats Cards ─── */}
        <div className="gsap-stats-wrapper grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="gsap-stat-card bg-white rounded-2xl p-6 sm:p-8 text-center border border-gray-200/80 shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C59B27] to-[#C81E1E] opacity-80" />
              <p className="text-3xl sm:text-5xl font-extrabold font-mono text-[#C59B27] tracking-tight group-hover:scale-105 transition-transform">
                {stat.number}
              </p>
              <p className="text-sm font-bold text-[#1A202C] mt-2">{stat.label}</p>
              <p className="text-xs text-gray-500 mt-1">{stat.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* ─── 4. Interactive Editorial Story & Mission Showcase ─── */}
        <div className="gsap-story-wrapper mb-24">
          
          {/* Tab Switchers */}
          <div className="flex justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab('story')}
              className={`px-7 py-3 rounded-full text-sm font-bold tracking-wide transition-all cursor-pointer shadow-sm ${
                activeTab === 'story'
                  ? 'bg-[#1A202C] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Our Journey & Story
            </button>
            <button
              onClick={() => setActiveTab('mission')}
              className={`px-7 py-3 rounded-full text-sm font-bold tracking-wide transition-all cursor-pointer shadow-sm ${
                activeTab === 'mission'
                  ? 'bg-[#1A202C] text-white shadow-lg scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              Our Mission & Vision
            </button>
          </div>

          {/* Tab Content Box */}
          <div className="gsap-story-container bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {activeTab === 'story' ? (
              <>
                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C59B27]/10 text-[#C59B27] text-xs font-mono font-bold uppercase tracking-wider">
                    OUR HERITAGE
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight">
                    Two Decades of Compassionate Action
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {t(
                      'about.story.p1',
                      'Prayas is a non-profit organization dedicated to creating meaningful and sustainable change in society. Established in 2001, we have been working towards empowering communities and improving lives through education, healthcare, social awareness, and community development initiatives.'
                    )}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {t(
                      'about.story.p2',
                      'For over two decades, Prayas has been committed to supporting underprivileged families, children, women, and communities by providing opportunities, resources, and guidance for a better future.'
                    )}
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => navigate('/contact')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#C59B27] hover:bg-[#B38A1F] text-white shadow-md transition-all cursor-pointer"
                    >
                      <span>Join Our Cause</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 group">
                  <img
                    src="/EDUCATION.JPG"
                    alt="Prayas Story in Action"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#C59B27]" />
                    <span className="text-xs sm:text-sm font-semibold">
                      Grassroots Impact Across 50+ Villages
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-gray-100 group">
                  <img
                    src="/PRAYASHEALTHCAMP.jpeg"
                    alt="Prayas Mission in Action"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-[#C81E1E]" />
                    <span className="text-xs sm:text-sm font-semibold">
                      Free Medical Camps & Lifesaving Organ Advocacy
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-6 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#C81E1E]/10 text-[#C81E1E] text-xs font-mono font-bold uppercase tracking-wider">
                    OUR CORE PURPOSE
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight">
                    Igniting Self-Reliance & Purpose
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {t(
                      'about.mission.p1',
                      'With the support of volunteers, donors, and well-wishers, we have positively impacted thousands of lives across different communities.'
                    )}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    {t(
                      'about.mission.p2',
                      'Our journey is driven by compassion, commitment, and the belief that even small efforts can create a lasting impact. Together, we strive to bring hope, opportunity, and transformation to those who need it the most.'
                    )}
                  </p>

                  <div className="pt-2 flex items-center gap-3">
                    <button
                      onClick={() => navigate('/volunteer')}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-[#C81E1E] hover:bg-[#A81717] text-white shadow-md transition-all cursor-pointer"
                    >
                      <span>Become a Volunteer</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </>
            )}

          </div>
        </div>

        {/* ─── 5. Framer Motion Core Values Grid ─── */}
        <div className="gsap-values-wrapper mb-24">
          <div className="text-center mb-12 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight">
              {t('about.valuesSection.title', 'Our')}{' '}
              <span className="text-[#C59B27]">{t('about.valuesSection.titleHighlight', 'Values')}</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">The ethical foundation behind every initiative we lead.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="gsap-value-card bg-white rounded-2xl p-7 text-center border border-gray-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#C59B27]/10 border border-[#C59B27]/20 text-[#C59B27] flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C59B27] group-hover:text-white transition-all shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A202C] mb-2">{value.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── 6. Focus Initiatives Visual Grid ─── */}
        <div className="gsap-initiatives-wrapper bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-2xl mb-24">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A202C] tracking-tight">
              {t('about.initiativesSection.title', 'Our')}{' '}
              <span className="text-[#C59B27]">{t('about.initiativesSection.titleHighlight', 'Initiatives')}</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">Targeted programs delivering tangible human impact.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="gsap-initiative-card rounded-2xl overflow-hidden border border-gray-200/90 shadow-lg hover:shadow-2xl transition-all bg-gray-50 group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A202C]/70 to-transparent" />
                    <div className="absolute top-3 left-3 p-2 rounded-xl bg-white/95 text-[#1A202C] backdrop-blur-md shadow">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="p-5 space-y-1">
                    <h4 className="text-sm font-bold text-[#1A202C] leading-snug">{item.label}</h4>
                    <span className="text-xs font-mono font-semibold text-[#C59B27] block">{item.count}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── 7. Social Connect ─── */}
        <div className="text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1A202C]">
            {t('about.social.title', 'Connect With')}{' '}
            <span className="text-[#C59B27]">{t('about.social.titleHighlight', 'Us')}</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto">
            {t('about.social.desc', 'Follow us on social media to stay updated with our latest initiatives and impact stories.')}
          </p>

          <div className="flex justify-center gap-4 flex-wrap pt-2">
            <a
              href="https://www.facebook.com/prayassamajiksanstha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-2xl bg-[#1877F2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-xl cursor-pointer"
              aria-label="Facebook"
            >
              <FaFacebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/prayas_samajik_sanstha"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-2xl bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-xl cursor-pointer"
              aria-label="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/channel/UC16ZbLnP1qJxrKQoKsss12w"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-2xl bg-[#FF0000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-xl cursor-pointer"
              aria-label="YouTube"
            >
              <FaYoutube className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/prayas-samaj-sevi-sastha-undefined-0a468b418/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-2xl bg-[#0A66C2] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-xl cursor-pointer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/pryasaa?s=11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-13 h-13 rounded-2xl bg-[#000000] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md hover:shadow-xl cursor-pointer"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
