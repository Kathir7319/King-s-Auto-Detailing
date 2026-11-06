import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import AutomatedSmsPreview from '../components/AutomatedSmsPreview';
import { MessageSquare, ShieldCheck, Clock, CheckCircle2, Calendar, Phone } from 'lucide-react';
import { SMS_TEMPLATES, COMPANY_INFO } from '../data/detailingData';

export const SmsConciergePage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen">
      {/* Banner */}
      <PageBanner
        title="Behind-The-Scenes: Automated SMS Protocol"
        subtitle="Zero uncertainty. From the second your $50 deposit is secured to 24 hours before your driveway arrival, our automated concierge keeps you completely in the loop."
        badge="Live Dispatch Automation"
        breadcrumb="SMS Concierge"
      />

      {/* Main Interactive Phone Simulator */}
      <AutomatedSmsPreview />

      {/* Workflow Deep Dive */}
      <section className="py-20 bg-obsidian-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              High-Touch Communication
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
              Why Communication Matters
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Most detailing companies leave you waiting in a window of 4–6 hours without a word. King's Auto Detailing operates like a private aviation concierge.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center font-bold">
                  01
                </div>
                <h3 className="text-xl font-bold text-white">Instant Stripe / Square Sync</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                When you put down your fully refundable $50 deposit, our webhooks lock your slot in our master detailer's route sheet. An automated confirmation text is dispatched to your phone in under 60 seconds.
              </p>
              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 text-xs text-slate-300 font-mono">
                "{SMS_TEMPLATES.confirmation.body}"
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center font-bold">
                  02
                </div>
                <h3 className="text-xl font-bold text-white">24-Hour Driveway Reminder</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                The day prior to your scheduled detail, a friendly SMS prompts you to ensure your driveway or garage bay is accessible so our self-powered rig can pull straight in without delay.
              </p>
              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 text-xs text-slate-300 font-mono">
                "{SMS_TEMPLATES.reminder.body}"
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => navigate('/booking')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-base shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-obsidian-950" />
              <span>Schedule Your Mobile Detail Now ($50 Holds Date)</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SmsConciergePage;
