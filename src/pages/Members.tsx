import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, X, ShieldCheck, Mail, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export interface MemberItem {
  id: string;
  name: string;
  role: string;
  photo: string;
  badge: string;
  badgeColor: string;
  bio: string;
  achievements: string[];
  focusAreas: string[];
}

const MEMBERS: MemberItem[] = [
  {
    id: 'rekha',
    name: 'Rekha Thakkar',
    role: 'President & Founder Trustee',
    photo: '/images/team/rekha.jpg',
    badge: 'Executive Governing Body',
    badgeColor: 'bg-red-100 text-red-700 border-red-300',
    bio: 'Pioneering grassroots social welfare, education for rural children, and women empowerment initiatives across India for over 20 years. Rekha believes that rural communities are the backbone of self-reliant development.',
    achievements: [
      'Founded Prayas Social Welfare Society in 2001',
      'Spearheaded 50+ village adoption programs across India',
      'Recipient of multiple state social service honors & awards',
    ],
    focusAreas: ['Women Livelihood', 'Rural Development', 'Child Welfare'],
  },
  {
    id: 'pooja',
    name: 'Pooja Dave',
    role: 'Secretary & Operations Lead',
    photo: '/images/team/pooja.jpg',
    badge: 'Operations & Strategy',
    badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    bio: 'Directing community outreach, free health camp logistics, Sabji Wali Didi micro-entrepreneurship programs, and volunteer coordination. Pooja oversees day-to-day ground operations ensuring maximum impact and transparency.',
    achievements: [
      'Managed 100+ free medical & health checkup camps',
      'Empowered 1,200+ women vegetable vendors with UPI & micro-loans',
      'Coordinates nationwide volunteer mobilization & logistics',
    ],
    focusAreas: ['Health Camps', 'Micro-Vendor Support', 'Volunteer Network'],
  },
  {
    id: 'harsh',
    name: 'Harsh Upadhyay',
    role: 'Executive Member & Youth Lead',
    photo: '/images/team/harsh.jpg',
    badge: 'Youth & Tech Initiatives',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    bio: 'Spearheading digital literacy initiatives, youth skill development centers, and environmental reforestation projects across adopted villages. Harsh brings technology and youth energy to Prayas grassroots missions.',
    achievements: [
      'Established 45+ Digital Literacy & Smart Labs in rural schools',
      'Lead coordinator for Kargil Vatika tree plantation drives',
      'Drives youth engagement & skill development bootcamps',
    ],
    focusAreas: ['Digital Education', 'Kargil Vatika Reforestation', 'Youth Mentorship'],
  },
];

export default function Members() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedMember, setSelectedMember] = useState<MemberItem | null>(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 text-[#263238] pt-28 sm:pt-36 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      
      {/* ─── Ambient Subtle Glow Accents ─── */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-red-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* ─── Page Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#263238] tracking-tight leading-tight">
            {t('members.title', 'Our Dedicated')}{' '}
            <span className="text-red-600">
              {t('members.titleHighlight', 'Leadership Team')}
            </span>
          </h1>
          {/* Premium Underline Bar */}
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto rounded-full shadow-xs" />
        </motion.div>

        {/* ─── Leadership Cards Grid ─── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              onClick={() => setSelectedMember(member)}
              className="bg-white rounded-3xl py-5 px-6 sm:px-8 border border-gray-200/90 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative"
            >
              {/* Compact Circular Photo Frame */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden bg-gray-100 border-4 border-[#FFF314] shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-500 mb-3 shrink-0">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect width="300" height="300" fill="%23F1F5F9"/%3E%3Ccircle cx="150" cy="120" r="55" fill="%23CBD5E1"/%3E%3Cpath d="M50 280c0-50 35-80 100-80s100 30 100 80" fill="%23CBD5E1"/%3E%3C/svg%3E';
                  }}
                />
                
                {/* Subtle Hover Cue Overlay */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-[11px] font-bold uppercase tracking-wider">
                  <span>View Details</span>
                </div>
              </div>

              {/* Clean Centered Name & Role */}
              <div className="space-y-0.5">
                <h3 className="text-lg sm:text-xl font-extrabold text-[#263238] group-hover:text-red-600 transition-colors">
                  {member.name}
                </h3>

                <p className="text-[11px] sm:text-xs font-bold text-red-600 font-mono tracking-wider uppercase">
                  {member.role}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-gray-100 w-full flex items-center justify-center gap-1 text-[11px] text-gray-500 group-hover:text-red-600 font-medium transition-colors">
                <span>Click to view profile</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
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

      {/* ─── INTERACTIVE MODAL (SLIDED DOWN BELOW NAVBAR) ─── */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center md:justify-end p-4 sm:p-8 pt-16 sm:pt-20 pb-8">
            
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-md cursor-pointer"
            />

            {/* Floating Card Container */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 25 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 25 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl p-6 sm:p-8 z-10 text-[#263238] flex flex-col md:flex-row gap-6 md:gap-8 max-h-[78vh] items-stretch mt-2 sm:mt-4 md:mr-6 overflow-visible"
            >
              {/* Yellow Circular Close Button (Clearly Visible Top-Right) */}
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 right-4 sm:top-5 sm:right-5 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#FFF314] hover:bg-[#FBE000] text-black font-extrabold flex items-center justify-center shadow-xl transition-transform hover:scale-110 cursor-pointer z-40 border-2 border-white"
                aria-label="Close"
              >
                <X className="w-6 h-6 stroke-[3]" />
              </button>

              {/* Left Column: Larger Overlapping Circular Portrait Photo Shifted Left */}
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-76 md:h-76 rounded-full overflow-hidden shadow-2xl shrink-0 border-4 border-[#FFF314] relative bg-gray-100 mx-auto md:mx-0 md:-ml-36 self-center">
                <img
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  className="w-full h-full object-cover object-center"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src =
                      'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"%3E%3Crect width="300" height="300" fill="%23F1F5F9"/%3E%3Ccircle cx="150" cy="120" r="55" fill="%23CBD5E1"/%3E%3Cpath d="M50 280c0-50 35-80 100-80s100 30 100 80" fill="%23CBD5E1"/%3E%3C/svg%3E';
                  }}
                />
              </div>

              {/* Right Column: Name, Gold Role Title & Scrollable Bio Paragraphs */}
              <div className="flex-1 flex flex-col justify-between overflow-hidden pt-1">
                {/* Header Info */}
                <div className="border-b border-gray-100 pb-3 mb-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#263238] tracking-tight leading-tight">
                    {selectedMember.name}
                  </h2>

                  <p className="text-xs sm:text-sm font-extrabold text-amber-500 font-sans tracking-widest uppercase mt-1">
                    {selectedMember.role}
                  </p>
                </div>

                {/* Scrollable Text Content */}
                <div className="overflow-y-auto flex-1 pr-2 space-y-4 text-gray-700 text-xs sm:text-sm leading-relaxed font-sans max-h-[50vh]">
                  <p className="font-normal text-gray-700">
                    {selectedMember.bio}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Key Leadership Milestones</span>
                    </h4>
                    <div className="space-y-2">
                      {selectedMember.achievements.map((item, i) => (
                        <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-gray-50 border border-gray-100 text-xs text-gray-800 font-medium">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Focus Areas */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 mb-2">
                      Core Focus Areas
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedMember.focusAreas.map((area, i) => (
                        <span key={i} className="px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold">
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Footer */}
                <div className="pt-4 border-t border-gray-100 mt-3 flex justify-end">
                  <button
                    onClick={() => {
                      setSelectedMember(null);
                      navigate('/contact');
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#263238] hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Connect With Leadership</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
