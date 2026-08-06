// src/pages/Partner.tsx
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Heart, Send, CheckCircle, Loader2, User, Mail, Phone, Building, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Partner() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ full_name: '', email: '', phone: '', organization: '', partnership_type: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); e.stopPropagation(); setLoading(true); setError('');
    try {
      // Assuming a 'partners' table exists in Supabase.
      // If it doesn't, this will throw an error and you will need to create it.
      const { error } = await supabase.from('partners').insert([{ 
        full_name: formData.full_name.trim(), 
        email: formData.email.trim(), 
        phone: formData.phone.trim(), 
        organization: formData.organization.trim(), 
        partnership_type: formData.partnership_type.trim(), 
        message: formData.message.trim() 
      }]);
      
      if (error) throw error;
      setSuccess(true); 
      setFormData({ full_name: '', email: '', phone: '', organization: '', partnership_type: '', message: '' });
    } catch (err: any) { 
      // If the 'partners' table doesn't exist, fallback to contact_messages for safety
      if (err?.code === '42P01') {
        try {
          const fallbackMessage = `Organization: ${formData.organization}\nPartnership Type: ${formData.partnership_type}\n\n${formData.message}`;
          const { error: fallbackError } = await supabase.from('contact_messages').insert([{
            name: formData.full_name.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            subject: 'Partnership Inquiry',
            message: fallbackMessage.trim(),
            status: 'unread'
          }]);
          
          if (fallbackError) throw fallbackError;
          setSuccess(true);
          setFormData({ full_name: '', email: '', phone: '', organization: '', partnership_type: '', message: '' });
          return;
        } catch (fallbackErr: any) {
           setError(fallbackErr.message || t('partner.form.errorFallback', 'Submission failed. Please try again.'));
        }
      } else {
        setError(err.message || t('partner.form.errorFallback', 'Submission failed. Please try again.')); 
      }
    } 
    finally { setLoading(false); }
  };

  if (success) {
    return (
      <section className="min-h-screen bg-[#F1F8F5] flex items-center justify-center px-4 py-16 relative overflow-hidden pointer-events-auto pt-28">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center max-w-md w-full bg-white rounded-2xl p-8 shadow-xl relative z-20 border border-[#FFF314]/20 pointer-events-auto">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 text-blue-500 mb-4 shadow-inner"><CheckCircle className="w-8 h-8" /></div>
          <h2 className="text-2xl font-bold text-[#263238] mb-2">{t('partner.success.title', 'Thank You! 🎉')}</h2>
          <p className="text-[#263238]/60 text-sm">{t('partner.success.subtitle', 'Your partnership inquiry has been submitted successfully. Our team will review your application and get in touch with you shortly.')}</p>
          <button onClick={() => setSuccess(false)} className="mt-6 inline-flex items-center gap-2 text-sm text-[#263238] hover:text-[#FFF314] hover:underline transition-colors font-medium cursor-pointer pointer-events-auto">
            {t('partner.success.again', 'Submit another inquiry')}
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#F1F8F5] flex items-center justify-center px-4 py-20 relative overflow-hidden pointer-events-auto pt-28">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="w-full max-w-2xl bg-white rounded-2xl border border-[#FFF314]/20 shadow-xl relative z-20 overflow-hidden pointer-events-auto">
        {/* Header */}
        <div className="p-6 border-b border-gray-100 pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center"><Briefcase className="w-5 h-5 text-blue-500" /></div>
            <div>
              <h2 className="text-xl font-bold text-[#263238]">{t('partner.form.title', 'Partner With Us')}</h2>
              <p className="text-sm text-[#263238]/60">{t('partner.form.subtitle', 'Collaborate with us to amplify our impact')}</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 pointer-events-auto">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#263238] mb-1.5 pointer-events-auto">
              <User className="w-4 h-4 text-blue-500" /> {t('partner.form.fullName', 'Contact Person Name')} *
            </label>
            <input type="text" name="full_name" value={formData.full_name} onChange={handleChange} required placeholder={t('partner.form.fullNamePlaceholder', 'Enter your full name')} className="w-full px-4 py-2.5 bg-white border border-[#FFF314]/20 rounded-lg focus:outline-none focus:border-[#FFF314] focus:ring-2 focus:ring-[#FFF314]/10 transition-all text-[#263238] placeholder:text-[#263238]/40 pointer-events-auto cursor-text" />
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#263238] mb-1.5 pointer-events-auto">
              <Building className="w-4 h-4 text-blue-500" /> {t('partner.form.organization', 'Organization / Company Name')} *
            </label>
            <input type="text" name="organization" value={formData.organization} onChange={handleChange} required placeholder={t('partner.form.orgPlaceholder', 'Enter your organization name')} className="w-full px-4 py-2.5 bg-white border border-[#FFF314]/20 rounded-lg focus:outline-none focus:border-[#FFF314] focus:ring-2 focus:ring-[#FFF314]/10 transition-all text-[#263238] placeholder:text-[#263238]/40 pointer-events-auto cursor-text" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#263238] mb-1.5"><Mail className="w-4 h-4 text-blue-500" /> {t('partner.form.email', 'Email')} *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="w-full px-4 py-2.5 bg-white border border-[#FFF314]/20 rounded-lg focus:outline-none focus:border-[#FFF314] focus:ring-2 focus:ring-[#FFF314]/10 transition-all text-[#263238] placeholder:text-[#263238]/40 pointer-events-auto cursor-text" />
            </div>
            <div>
              <label className="flex items-center gap-2 text-sm font-medium text-[#263238] mb-1.5"><Phone className="w-4 h-4 text-blue-500" /> {t('partner.form.phone', 'Phone')} *</label>
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 98765 43210" className="w-full px-4 py-2.5 bg-white border border-[#FFF314]/20 rounded-lg focus:outline-none focus:border-[#FFF314] focus:ring-2 focus:ring-[#FFF314]/10 transition-all text-[#263238] placeholder:text-[#263238]/40 pointer-events-auto cursor-text" />
            </div>
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#263238] mb-1.5"><Briefcase className="w-4 h-4 text-blue-500" /> {t('partner.form.partnershipType', 'Partnership Type')}</label>
            <select name="partnership_type" value={formData.partnership_type} onChange={handleChange} className="w-full px-4 py-2.5 bg-white border border-[#FFF314]/20 rounded-lg focus:outline-none focus:border-[#FFF314] focus:ring-2 focus:ring-[#FFF314]/10 transition-all text-[#263238] pointer-events-auto cursor-pointer">
              <option value="">{t('partner.form.selectType', 'Select partnership type')}</option>
              <option value="csr">{t('partner.form.type.csr', 'Corporate Social Responsibility (CSR)')}</option>
              <option value="ngo_collab">{t('partner.form.type.ngoCollab', 'NGO Collaboration')}</option>
              <option value="corporate_sponsor">{t('partner.form.type.corporateSponsor', 'Corporate Sponsor')}</option>
              <option value="academic">{t('partner.form.type.academic', 'Academic Institution')}</option>
              <option value="other">{t('partner.form.type.other', 'Other')}</option>
            </select>
          </div>
          <div>
            <label className="flex items-center gap-2 text-sm font-medium text-[#263238] mb-1.5"><Send className="w-4 h-4 text-blue-500" /> {t('partner.form.message', 'Message (Optional)')}</label>
            <textarea name="message" value={formData.message} onChange={handleChange} rows={3} placeholder={t('partner.form.messagePlaceholder', 'Tell us how you would like to collaborate...')} className="w-full px-4 py-2.5 bg-white border border-[#FFF314]/20 rounded-lg focus:outline-none focus:border-[#FFF314] focus:ring-2 focus:ring-[#FFF314]/10 transition-all text-[#263238] placeholder:text-[#263238]/40 resize-none pointer-events-auto cursor-text" />
          </div>
          {error && <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm pointer-events-auto">{error}</div>}
          <button type="submit" disabled={loading} className="w-full py-3 bg-[#FFF314] text-[#263238] rounded-lg font-medium hover:bg-[#FFF314]/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-[#FFF314]/20 cursor-pointer pointer-events-auto">
            {loading ? (<><Loader2 className="w-5 h-5 animate-spin" />{t('partner.form.submitting', 'Submitting...')}</>) : (<>{t('partner.form.submit', 'Submit Inquiry')}<Send className="w-4 h-4" /></>)}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
