import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import FaqSection from '../components/FaqSection';
import { Phone, MapPin, Mail, Clock, ShieldCheck, Send, CheckCircle2, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/detailingData';

export const ContactPage = () => {
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    neighborhood: 'Amberly, Cary',
    vehicle: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen">
      {/* Banner */}
      <PageBanner
        title="Contact Concierge & Corporate Credentials"
        subtitle="Serving Cary (Zip Code 27519), Apex, and Morrisville driveways. Reach out directly or send us an inquiry about your vehicle."
        badge="Direct Concierge"
        breadcrumb="Contact & Credentials"
      />

      <section className="py-20 bg-obsidian-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Corporate Credentials */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  Direct Line & Dispatch
                </span>
                <h2 className="text-3xl font-serif font-black text-white mt-1">
                  Connect With King's Detailing
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                  Have questions about our multi-stage paint correction, 3-Year Ceramic Coating, or want to schedule multiple family vehicles? We're available 6 days a week.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="p-5 rounded-2xl glass-panel border border-gold-500/20 hover:border-gold-400 flex items-center gap-4 transition-all group block"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Direct Phone / SMS</div>
                    <div className="text-base font-bold text-white group-hover:text-gold-300 transition-colors font-mono">
                      {COMPANY_INFO.phone}
                    </div>
                  </div>
                </a>

                <div className="p-5 rounded-2xl glass-panel border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Base Dispatch Hub</div>
                    <div className="text-base font-bold text-white">
                      {COMPANY_INFO.location}
                    </div>
                    <div className="text-xs text-slate-400">Target Zones: Cary, Apex & Morrisville</div>
                  </div>
                </div>

                <div className="p-5 rounded-2xl glass-panel border border-white/5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Hours of Dispatch</div>
                    <div className="text-sm font-bold text-white">{COMPANY_INFO.hours}</div>
                  </div>
                </div>
              </div>

              {/* Deposit Policy Highlight from Prompt */}
              <div className="p-5 rounded-2xl bg-obsidian-950/80 border border-gold-500/30 space-y-1">
                <div className="flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-gold-400" />
                  <span>King's Deposit Policy:</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {COMPANY_INFO.depositPolicy}
                </p>
              </div>
            </div>

            {/* Right: Interactive Message & Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-gold-500/25 shadow-2xl">
                {formSubmitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you, {formData.name}. Our master detailer concierge has received your request and will follow up with you within 30 minutes.
                    </p>
                    <button
                      onClick={() => navigate('/booking')}
                      className="mt-4 px-6 py-3 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-sm"
                    >
                      Or Book Directly Online ($50 Holds Date)
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Send Direct Concierge Note</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill out the details below and we'll reply with a custom driveway estimate.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Mobile Phone *</label>
                        <input
                          type="tel"
                          required
                          placeholder="(919) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Email Address *</label>
                        <input
                          type="email"
                          required
                          placeholder="name@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-300 block mb-1">Vehicle Year / Model *</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 2023 Tesla Model Y"
                          value={formData.vehicle}
                          onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">Driveway Neighborhood</label>
                      <input
                        type="text"
                        placeholder="e.g. Amberly (Cary), Preston, Bella Casa (Apex)"
                        value={formData.neighborhood}
                        onChange={(e) => setFormData({ ...formData, neighborhood: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-300 block mb-1">How can we help your vehicle?</label>
                      <textarea
                        rows={3}
                        required
                        placeholder="Tell us what you're looking for (e.g. swirl removal, full leather steam clean, 3-year ceramic coating)..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-sm tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4 text-obsidian-950" />
                      <span>Send Direct Inquiry to Master Detailer</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection onOpenBooking={() => navigate('/booking')} />
    </div>
  );
};

export default ContactPage;
