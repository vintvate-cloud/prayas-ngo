import { motion } from 'framer-motion';
import { Users, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const MEMBERS = [
  {
    id: 'rekha',
    name: 'Rekha Thakkar',
    role: 'President & Founder Trustee',
    bio: 'Pioneering grassroots social welfare, education for rural children, and women empowerment initiatives across India for over 20 years.',
    photo: '/images/team/rekha.jpg',
    badge: 'Executive Governing Body',
    badgeColor: 'bg-red-600/10 text-red-600 border-red-600/20',
  },
  {
    id: 'pooja',
    name: 'Pooja Dave',
    role: 'Secretary & Operations Lead',
    bio: 'Directing community outreach, free health camp logistics, Sabji Wali Didi micro-entrepreneurship programs, and volunteer coordination.',
    photo: '/images/team/pooja.jpg',
    badge: 'Operations & Strategy',
    badgeColor: 'bg-amber-500/10 text-amber-800 border-amber-500/20',
  },
  {
    id: 'harsh',
    name: 'Harsh Upadhyay',
    role: 'Executive Member & Youth Lead',
    bio: 'Spearheading digital literacy initiatives, youth skill development centers, and environmental reforestation projects across adopted villages.',
    photo: '/images/team/harsh.jpg',
    badge: 'Youth & Tech Initiatives',
    badgeColor: 'bg-emerald-600/10 text-emerald-700 border-emerald-600/20',
  },
];

export default function Members() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-[#263238] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* ─── Ambient Subtle Glow Accents ─── */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* ─── Page Header (Offset Cleanly Below Navbar) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-600 text-xs font-mono font-bold uppercase tracking-wider">
            <Users className="w-4 h-4" />
            <span>EXECUTIVE GOVERNING BODY</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#263238] tracking-tight leading-tight">
            {t('members.title', 'Our Dedicated')}{' '}
            <span className="text-red-600">
              {t('members.titleHighlight', 'Leadership Team')}
            </span>
          </h1>
          {/* Premium Underline Bar */}
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full shadow-xs" />

          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed font-sans">
            {t(
              'members.subtitle',
              'Meet the governing council of Prayas Social Welfare Society. Dedicated leaders driving grassroots change with transparency and compassion.'
            )}
          </p>
        </motion.div>

        {/* ─── Premium Leadership Cards Grid (Clean Unobscured Photos) ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-3xl p-6 border border-gray-200/90 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                
                {/* Pure Unobscured Photo Frame - No Overlays or Text on Image */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-gray-100 border border-gray-200/90 shadow-sm group-hover:shadow-md transition-all">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="375" viewBox="0 0 300 375"%3E%3Crect width="300" height="375" fill="%23F1F5F9"/%3E%3Ccircle cx="150" cy="140" r="55" fill="%23CBD5E1"/%3E%3Cpath d="M50 330c0-50 35-80 100-80s100 30 100 80" fill="%23CBD5E1"/%3E%3C/svg%3E';
                    }}
                  />
                </div>

                {/* Clean Name & Role Below Photo */}
                <div className="space-y-1.5">
                  <h3 className="text-xl font-extrabold text-[#263238] group-hover:text-red-600 transition-colors">
                    {member.name}
                  </h3>

                  <p className="text-xs font-bold text-red-600 font-mono tracking-wider uppercase">
                    {member.role}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans pt-1">
                    {member.bio}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* ─── Join / Volunteer CTA Banner ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200/90 shadow-2xl text-center space-y-4 max-w-3xl mx-auto"
        >
          <div className="w-14 h-14 rounded-2xl bg-red-600/10 text-red-600 border border-red-600/20 flex items-center justify-center mx-auto">
            <Heart className="w-7 h-7" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238]">
            Want to lead or volunteer in our grassroots movement?
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto font-sans leading-relaxed">
            We welcome passionate individuals, student ambassadors, and domain experts to join our team in delivering positive social change.
          </p>

          <div className="pt-2 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate('/volunteer')}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full text-sm font-bold bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <span>Join As A Volunteer</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
