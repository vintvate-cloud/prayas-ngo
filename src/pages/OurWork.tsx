import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import {
  Trees,
  Users,
  Droplets,
  Building,
  Handshake,
  Scissors,
  Users2,
  Factory,
  GraduationCap,
  Laptop,
  Compass,
  Shield,
  HeartPulse,
  Stethoscope,
  Heart,
  Accessibility,
  Baby,
  UsersRound,
  Leaf,
  Sprout,
  ShoppingBag,
  Home,
  ArrowRight,
  Sparkles,
} from 'lucide-react'

interface WorkItem {
  icon: React.ElementType
  title: string
  description: string
  longDescription: string
}

interface WorkCategory {
  id: number
  title: string
  icon: React.ElementType
  description: string
  longDescription: string
  items: WorkItem[]
  color: string
  bgColor: string
  borderColor: string
  image: string
}

export default function OurWork() {
  const { t } = useTranslation()
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const RURAL_CATEGORY_ID = 1
  const RURAL_ROUTE = '/rural-development'

  const WOMEN_CATEGORY_ID = 2
  const WOMEN_ROUTE = '/women-empowerment'

  const EDUCATION_CATEGORY_ID = 3
  const EDUCATION_ROUTE = '/education'

  const HEALTH_CATEGORY_ID = 4
  const HEALTH_ROUTE = '/healthcare'

  const ENVIRONMENT_CATEGORY_ID = 5
  const ENVIRONMENT_ROUTE = '/environment'

  const getCategoryRoute = (id: number) => {
    if (id === RURAL_CATEGORY_ID) return RURAL_ROUTE
    if (id === WOMEN_CATEGORY_ID) return WOMEN_ROUTE
    if (id === EDUCATION_CATEGORY_ID) return EDUCATION_ROUTE
    if (id === HEALTH_CATEGORY_ID) return HEALTH_ROUTE
    if (id === ENVIRONMENT_CATEGORY_ID) return ENVIRONMENT_ROUTE
    return null
  }

  // ========== CATEGORIES ==========
  const categories: WorkCategory[] = [
    // 1. Rural Development
    {
      id: 1,
      title: 'Rural Development',
      icon: Trees,
      description:
        'Transforming rural communities through sustainable development initiatives that improve quality of life and create self-reliant villages.',
      longDescription:
        'Our Rural Development programme is designed to uplift rural communities by addressing critical gaps in infrastructure, education, healthcare, and livelihood opportunities. We work closely with village panchayats, local leaders, and community members to co‑create solutions that are both sustainable and culturally appropriate. Over the years, we have adopted multiple villages, provided clean drinking water, built sanitation facilities, and empowered local youth with skills for employment.',
      image: 'https://i.ibb.co/fWWWk9S/Whats-App-Image-2026-07-12-at-2-50-03-PM-1.jpg',
      color: '#849989',
      bgColor: 'bg-[#849989]/20',
      borderColor: 'border-[#849989]',
      items: [
        {
          icon: Handshake,
          title: 'Village Adoption',
          description: 'Adopting villages to provide holistic development support.',
          longDescription:
            'Under the Village Adoption programme, we select underserved villages and commit to a multi‑year transformation plan. We work with the community to assess needs and priorities.',
        },
        {
          icon: Droplets,
          title: 'Water & Sanitation',
          description: 'Ensuring access to clean drinking water and proper sanitation.',
          longDescription:
            'Access to clean water and proper sanitation is a fundamental right. Our Water & Sanitation projects include installing deep‑bore hand pumps, constructing rainwater harvesting structures, and building individual household toilets.',
        },
        {
          icon: Building,
          title: 'Infrastructure',
          description: 'Building and improving rural infrastructure.',
          longDescription:
            'We believe that strong infrastructure is the backbone of rural progress. Our infrastructure initiatives range from constructing village community halls to laying internal roads and providing solar lighting.',
        },
        {
          icon: Users,
          title: 'Community Development',
          description: 'Empowering communities through capacity building.',
          longDescription:
            'True development happens when communities lead it. Our Community Development efforts focus on capacity building – training community members in participatory planning.',
        },
      ],
    },
    // 2. Women Empowerment & Livelihood
    {
      id: 2,
      title: 'Women Empowerment & Livelihood',
      icon: Users2,
      description:
        'Empowering women through skill development, financial independence, and sustainable livelihood opportunities.',
      longDescription:
        'Women are at the heart of every community, and empowering them is key to breaking the cycle of poverty. Our Women Empowerment & Livelihood programmes provide women with vocational skills, financial literacy, and access to micro‑credit through Self‑Help Groups (SHGs). We have established tailoring centres, food processing units, and small‑scale manufacturing hubs.',
      image: '/WOMEN.jpeg',
      color: '#777e91',
      bgColor: 'bg-[#777e91]/20',
      borderColor: 'border-[#777e91]',
      items: [
        {
          icon: ShoppingBag,
          title: 'Sabji Wali Didi',
          description: 'Empowering women vegetable vendors with financial literacy and market access.',
          longDescription:
            'The Sabji Wali Didi programme supports women who sell vegetables in local markets. We provide them with financial literacy training and access to micro‑credit.',
        },
        {
          icon: Scissors,
          title: 'Sewing Centres',
          description: 'Vocational training in tailoring and garment‑making.',
          longDescription:
            'Our Sewing Centres offer a comprehensive course covering stitching, cutting, embroidery, and garment finishing.',
        },
        {
          icon: Users2,
          title: 'SHGs (Self Help Groups)',
          description: 'Forming and strengthening women self‑help groups.',
          longDescription:
            'Self‑Help Groups are the cornerstone of our women empowerment strategy. We facilitate the formation of SHGs and train them in bookkeeping.',
        },
        {
          icon: Factory,
          title: 'Entrepreneurship',
          description: 'Supporting women to start and scale their own businesses.',
          longDescription:
            'Our Entrepreneurship programme guides women through the entire business lifecycle – from ideation to scaling.',
        },
        {
          icon: Home,
          title: 'Grah Udyog',
          description: 'Promoting home‑based industries for sustainable livelihoods.',
          longDescription:
            'Grah Udyog supports women to start home‑based enterprises – from pickle making to agarbatti production.',
        },
      ],
    },
    // 3. Education & Skill Development
    {
      id: 3,
      title: 'Education & Skill Development',
      icon: GraduationCap,
      description:
        'Providing quality education and skill development opportunities to build a brighter future for children and youth.',
      longDescription:
        'Education is the most powerful tool to break the cycle of poverty and create lasting change. Our Education & Skill Development initiatives go beyond the classroom – we run after‑school tutoring centres, digital literacy labs, and career guidance programmes. We also focus on value‑based education through our Sanskarshala programme.',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop',
      color: '#5b8266',
      bgColor: 'bg-[#5b8266]/20',
      borderColor: 'border-[#5b8266]',
      items: [
        {
          icon: GraduationCap,
          title: 'Sanskarshala',
          description: 'Value‑based education for holistic development.',
          longDescription:
            'Sanskarshala is our flagship programme that integrates moral education with academic learning.',
        },
        {
          icon: Laptop,
          title: 'Digital Literacy',
          description: 'Bridging the digital divide with computer education.',
          longDescription:
            'Our Digital Literacy programme sets up computer centres in rural areas, equipped with computers and internet connectivity.',
        },
        {
          icon: Compass,
          title: 'Career Guidance',
          description: 'Helping youth make informed career choices.',
          longDescription:
            'Our Career Guidance programme conducts workshops, aptitude tests, and one‑on‑one counselling sessions.',
        },
        {
          icon: Shield,
          title: 'Self‑Defence',
          description: 'Training for women and children to ensure safety.',
          longDescription:
            'Our Self‑Defence programme offers practical martial arts training, situational awareness drills, and legal awareness.',
        },
        {
          icon: Users2,
          title: 'Youth Leadership',
          description: 'Developing young leaders for community transformation.',
          longDescription:
            'Our Youth Leadership programme identifies and nurtures young individuals with the potential to lead.',
        },
      ],
    },
    // 4. Health & Social Welfare
    {
      id: 4,
      title: 'Health & Social Welfare',
      icon: HeartPulse,
      description:
        'Comprehensive healthcare and social welfare programmes ensuring the well‑being of all community members.',
      longDescription:
        'Health is the foundation of a prosperous society. Our Health & Social Welfare initiatives cover preventive, curative, and promotive healthcare. We organise free health camps, conduct awareness drives on hygiene and nutrition, and facilitate access to government health schemes. We also have specialised programmes for organ donation awareness.',
      image: '/healthcaret.jpg',
      color: '#8d6e63',
      bgColor: 'bg-[#8d6e63]/20',
      borderColor: 'border-[#8d6e63]',
      items: [
        {
          icon: HeartPulse,
          title: 'Organ Donation',
          description: 'Creating awareness and facilitating organ donation.',
          longDescription:
            'Our Organ Donation campaign educates communities about the importance of donating organs and dispels myths.',
        },
        {
          icon: Stethoscope,
          title: 'Health Camps',
          description: 'Free medical camps for underserved communities.',
          longDescription:
            'We organise regular health camps in remote villages, bringing doctors and specialists to people with limited access.',
        },
        {
          icon: Heart,
          title: 'Elderly Care',
          description: 'Support and companionship for senior citizens.',
          longDescription:
            'Our Elderly Care programme conducts home visits to provide health check‑ups, medication support, and companionship.',
        },
        {
          icon: Accessibility,
          title: 'Support for Persons with Disabilities',
          description: 'Inclusive support and opportunities for persons with disabilities.',
          longDescription:
            'Our inclusive programme focuses on providing assistive devices and making public spaces accessible.',
        },
        {
          icon: Baby,
          title: 'Child Welfare',
          description: "Protecting children's rights and well‑being.",
          longDescription:
            'Our Child Welfare programme includes nutrition supplementation, immunisation drives, and early childhood education.',
        },
      ],
    },
    // 5. Environment & Sustainability
    {
      id: 5,
      title: 'Environment & Sustainability',
      icon: Leaf,
      description:
        'Protecting the environment and promoting sustainable practices for a greener and healthier planet.',
      longDescription:
        'Environmental degradation is one of the biggest challenges of our time. Our Environment & Sustainability programmes focus on conservation, reforestation, and sustainable resource management. We organise massive tree plantation drives, promote water harvesting, and educate communities about waste management.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop',
      color: '#43a047',
      bgColor: 'bg-[#43a047]/20',
      borderColor: 'border-[#43a047]',
      items: [
        {
          icon: Trees,
          title: 'Plantation',
          description: 'Massive tree plantation drives for ecological balance.',
          longDescription:
            'Our Plantation programme selects native species and involves local communities in nurturing saplings.',
        },
        {
          icon: Leaf,
          title: 'Kargil Vatika',
          description: 'A tribute forest honouring the brave soldiers of Kargil.',
          longDescription:
            'Kargil Vatika is a special memorial garden dedicated to the martyrs of the Kargil War.',
        },
        {
          icon: Sprout,
          title: 'Water Conservation',
          description: 'Water harvesting and sustainable water management.',
          longDescription:
            'Our Water Conservation initiatives include constructing check dams, ponds, and rooftop rainwater harvesting.',
        },
      ],
    },
  ]

  const activeCategory = categories.find((c) => c.id === hoveredId) || null
  const activeRoute = activeCategory ? getCategoryRoute(activeCategory.id) : null

  // ===== ANIMATION VARIANTS =====
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 pb-24 relative"
      style={{ paddingTop: 'var(--navbar-height, 100px)' }}
    >
      {/* FULL-SCREEN BACKDROP BLUR WHEN ANY CARD IS HOVERED */}
      <AnimatePresence>
        {hoveredId !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-40 pointer-events-auto"
            onClick={() => setHoveredId(null)}
          />
        )}
      </AnimatePresence>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-wider text-[#263238] bg-amber-100/90 rounded-full border border-amber-200 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Our Initiatives
          </span>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-normal text-[#263238] mb-4 tracking-tight"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            what we do
          </h2>
          <p className="text-lg text-[#263238]/70 max-w-2xl mx-auto font-light leading-relaxed">
            Hover over any initiative to separate it and explore details in full screen focus.
          </p>
        </motion.div>

        {/* GRID CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8"
        >
          {categories.map((category) => {
            const isHovered = hoveredId === category.id
            const route = getCategoryRoute(category.id)

            return (
              <motion.div
                key={category.id}
                variants={cardVariants}
                onMouseEnter={() => setHoveredId(category.id)}
                className={`relative group h-[420px] w-full rounded-3xl overflow-hidden cursor-pointer border border-gray-200/80 bg-white transition-all duration-300 ${
                  isHovered ? 'z-50 opacity-0 scale-95 pointer-events-none' : 'hover:border-white/50 z-10'
                }`}
                style={{
                  boxShadow: `0 10px 30px -10px ${category.color}35`,
                }}
              >
                <Link
                  to={route || '#'}
                  className="block w-full h-full relative overflow-hidden rounded-3xl"
                >
                  <div className="absolute inset-0 w-full h-full overflow-hidden bg-slate-900">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Crect width="800" height="500" fill="%23263238"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="28" fill="%23FFF314" font-weight="bold"%3EPrayas Foundation%3C/text%3E%3C/svg%3E'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                  </div>

                  <div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
                    <div className="flex justify-between items-center">
                      <span
                        className="p-3 rounded-2xl text-white backdrop-blur-md shadow-lg border border-white/20"
                        style={{ backgroundColor: `${category.color}E6` }}
                      >
                        <category.icon className="w-6 h-6" />
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">
                        {category.title}
                      </h3>
                      <p className="text-white/80 text-xs line-clamp-2 leading-relaxed font-light">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </section>

      {/* CENTERED EXPANDED SPOTLIGHT CARD (WIDER SPLIT VIEW ON HOVER) */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: '-45%', x: '-50%' }}
            animate={{ opacity: 1, scale: 1, y: '-50%', x: '-50%' }}
            exit={{ opacity: 0, scale: 0.85, y: '-45%', x: '-50%' }}
            transition={{ type: 'spring', stiffness: 340, damping: 26 }}
            onMouseEnter={() => setHoveredId(activeCategory.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="fixed top-1/2 left-1/2 z-50 w-[94vw] max-w-4xl h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/30 text-white grid grid-cols-1 md:grid-cols-12 bg-slate-900"
            style={{
              boxShadow: `0 30px 70px -15px ${activeCategory.color}90, 0 0 50px rgba(0,0,0,0.6)`,
            }}
          >
            {/* LEFT SIDE: FEATURED IMAGE */}
            <div className="md:col-span-5 relative h-48 md:h-full overflow-hidden bg-slate-950">
              <img
                src={activeCategory.image}
                alt={activeCategory.title}
                className="w-full h-full object-cover scale-105 transition-transform duration-700 brightness-90"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500"%3E%3Crect width="800" height="500" fill="%23263238"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="28" fill="%23FFF314" font-weight="bold"%3EPrayas Foundation%3C/text%3E%3C/svg%3E'
                }}
              />
              <div 
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to top, rgba(15, 23, 42, 0.85) 0%, transparent 60%), linear-gradient(to right, transparent 50%, rgba(15, 23, 42, 0.95) 100%)`,
                }}
              />

              {/* Floating Badge on Image */}
              <div className="absolute top-5 left-5 flex items-center gap-2.5 z-10">
                <span
                  className="p-3 rounded-2xl text-white backdrop-blur-md shadow-xl border border-white/30"
                  style={{ backgroundColor: `${activeCategory.color}F0` }}
                >
                  <activeCategory.icon className="w-6 h-6" />
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 z-10 hidden md:block">
                <span className="bg-black/50 backdrop-blur-md text-amber-300 text-[11px] font-bold px-3 py-1 rounded-full border border-amber-300/30 uppercase tracking-widest">
                  {activeCategory.items.length} Key Projects Included
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: CONTENT & DETAILS */}
            <div 
              className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-y-auto"
              style={{
                background: `linear-gradient(135deg, ${activeCategory.color}E6 0%, rgba(15, 23, 42, 0.96) 100%)`,
              }}
            >
              {/* TOP HEADER */}
              <div className="border-b border-white/20 pb-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-300">
                    Focus Area Spotlight
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {activeCategory.title}
                </h3>
              </div>

              {/* MIDDLE BODY */}
              <div className="my-3 space-y-4">
                <p className="text-white/90 text-sm leading-relaxed font-light line-clamp-4">
                  {activeCategory.longDescription}
                </p>

                {/* Sub-item Initiatives Grid */}
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                    Included Programs
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.items.map((item, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-white/20 text-white px-3 py-1.5 rounded-xl backdrop-blur-md font-medium border border-white/20 shadow-xs flex items-center gap-1.5 hover:bg-white/30 transition-colors"
                      >
                        <item.icon className="w-3.5 h-3.5 text-amber-300" />
                        {item.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* BOTTOM CTA BUTTON */}
              <div className="pt-4 border-t border-white/20">
                {activeRoute ? (
                  <Link
                    to={activeRoute}
                    className="w-full py-3.5 px-6 bg-white text-[#263238] font-bold rounded-2xl shadow-xl hover:bg-amber-300 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider group"
                  >
                    <span>Explore {activeCategory.title}</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <button
                    onClick={() => alert(`Learn more about ${activeCategory.title}`)}
                    className="w-full py-3.5 px-6 bg-white text-[#263238] font-bold rounded-2xl shadow-xl hover:bg-amber-300 transition-all duration-300 flex items-center justify-center gap-2.5 text-sm uppercase tracking-wider group"
                  >
                    <span>Explore Initiative</span>
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


