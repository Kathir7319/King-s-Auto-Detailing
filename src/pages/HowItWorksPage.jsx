import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import HowItWorks from '../components/HowItWorks';
import FaqSection from '../components/FaqSection';
import { Droplets, Zap, ShieldCheck, Flame, CheckCircle2, Calendar, Phone, ArrowRight, Shield } from 'lucide-react';
import { RIG_SPECS, COMPANY_INFO } from '../data/detailingData';

export const HowItWorksPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen">
      {/* Banner */}
      <PageBanner
        title="How It Works & The Mobile Studio"
        subtitle="Zero drop-offs. Zero waiting rooms. We bring our fully self-powered mobile detailing unit straight to your home or office driveway in Cary, Apex, or Morrisville."
        badge="Zero Effort Mobile Service"
        breadcrumb="How It Works"
      />

      {/* 3 Step Flow */}
      <HowItWorks onOpenBooking={() => navigate('/booking')} />

      {/* The Mobile Guarantee Detailed Section */}
      <section className="py-20 bg-obsidian-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-900 border-2 border-gold-500/30 shadow-2xl space-y-6">
            <div className="inline-flex items-center gap-2 text-gold-400 font-bold text-sm tracking-wide">
              <ShieldCheck className="w-5 h-5 text-gold-400" />
              <span>THE KING'S MOBILE GUARANTEE</span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif text-white leading-relaxed font-bold">
              “Our Mobile Guarantee: We are fully self-contained with our own spot-free filtered water supply and onboard electrical generators. Whether you are located in Amberly, Preston, or downtown Morrisville, we bring the elite detailing studio directly to your garage environment.”
            </blockquote>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Hookup to Your Home Water</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Plugs into Your Garage Outlets</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Zero Residue / Pure Spot-Free Drying</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Rig Equipment Tour */}
      <section className="py-20 bg-obsidian-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Commercial-Grade Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
              Inside Our Mobile Detailing Studio
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Every piece of equipment in our mobile rig was chosen to protect your clear coat and deliver flawless results in any driveway environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Droplets className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">100 Gallons Deionized Spot-Free Water</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Municipal tap water in Cary and Wake County averages 140–200 PPM of minerals (calcium, magnesium, lime). If dried in sunlight, it leaves etched water spots. Our on-board dual-bed deionization tanks filter water down to exactly <strong>0 PPM</strong>. Your car dries 100% spot-free even in 85°F direct NC sun.
              </p>
              <div className="text-xs font-semibold text-emerald-400">
                ✓ 0 PPM Pure Water &bull; No Etching Risk
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Whisper-Quiet Honda Inverter Electricity</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We bring our own commercial-grade Honda EU-series inverter generator. It produces pure sine wave electricity for sensitive machine polishers and extraction boilers. At less than 53 decibels, it operates quieter than a conversational voice—your neighbors won't be disturbed.
              </p>
              <div className="text-xs font-semibold text-emerald-400">
                ✓ Commercial Sine-Wave &bull; HOA Friendly Quiet
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <Flame className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">220°F Hospital-Grade Steam Sanitization</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Our pressurized continuous dry steam boiler blasts through vent ducts, door jambs, cupholders, and leather stitching. High heat kills 99.9% of bacteria, pet dander, and mold spores while using minimal moisture—leaving carpets and seats dry within minutes.
              </p>
              <div className="text-xs font-semibold text-emerald-400">
                ✓ Zero Sticky Chemical Scent &bull; Rapid Drying
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Rupes BigFoot Dual-Action Polishers</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Italian engineered dual-action orbital polishers eliminate holograms, buffer trails, and swirl marks without generating excessive heat that could compromise thin modern automotive clear coats.
              </p>
              <div className="text-xs font-semibold text-emerald-400">
                ✓ Hologram-Free Swirl Removal &bull; Safe On All Paints
              </div>
            </div>
          </div>

          <div className="mt-14 text-center">
            <button
              onClick={() => navigate('/booking')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-base shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-obsidian-950" />
              <span>Schedule Our Mobile Studio to Your Driveway ($50 Holds Date)</span>
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection onOpenBooking={() => navigate('/booking')} />
    </div>
  );
};

export default HowItWorksPage;
