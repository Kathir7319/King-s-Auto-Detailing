import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import Logo from '../components/Logo';
import { ShieldCheck, Award, Star, CheckCircle2, HeartHandshake, Calendar, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/detailingData';

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen">
      {/* Banner */}
      <PageBanner
        title="About King's Auto Detailing"
        subtitle="Engineered for Cary, Apex, and Morrisville car enthusiasts and busy professionals who demand showroom perfection without losing hours at a brick-and-mortar waiting room."
        badge="Cary's Premier Mobile Studio"
        breadcrumb="About Us"
      />

      {/* Origin Story & Brand Philosophy */}
      <section className="py-20 bg-obsidian-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-gold-400 font-bold text-xs uppercase tracking-widest">
                <Award className="w-4 h-4" />
                <span>Our Heritage & Standards</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white leading-tight">
                Born in Cary (27519) to Eliminate Detailing Compromises
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Traditional car washes scratch your clear coat with swirling contaminated nylon brushes. Traditional detailing shops require you to coordinate rides, leave your car for two days, and wait in crowded waiting areas.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                <strong className="text-white">King's Auto Detailing</strong> was founded with a singular mission: bring an uncompromising, hospital-grade mobile studio directly to your driveway. We custom-built our rig with 100 gallons of 0 PPM deionized water and quiet onboard generators so you never lift a finger or supply a single hose.
              </p>

              <div className="p-5 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 space-y-2">
                <div className="text-xs font-bold text-gold-400 uppercase tracking-wider">
                  The King's Promise:
                </div>
                <div className="text-xs text-slate-300">
                  "If you don't look at your vehicle in the driveway and see a jaw-dropping showroom reflection, we make it right on the spot. Your satisfaction and trust are our ultimate currency."
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 rounded-3xl glass-panel border border-gold-500/30 text-center space-y-6">
              <Logo size="xl" />
              
              <div className="grid grid-cols-2 gap-4 w-full pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/5">
                  <div className="text-2xl font-black gold-gradient-text">100+</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-1">
                    Cary Vehicles Perfected
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/5">
                  <div className="text-2xl font-black gold-gradient-text">5.0 ★</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-1">
                    Facebook Rating
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/5">
                  <div className="text-2xl font-black text-white">0 PPM</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-1">
                    Deionized Water Purity
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-obsidian-950/70 border border-white/5">
                  <div className="text-2xl font-black text-white">Carfax</div>
                  <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold mt-1">
                    Registered Ceramic Center
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate('/booking')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-sm tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                Schedule Your Driveway Detail ($50 Holds Date)
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4 Pillars of Excellence */}
      <section className="py-20 bg-obsidian-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
              The 4 Pillars of King's Detailing
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-3">
              <ShieldCheck className="w-8 h-8 text-gold-400" />
              <h3 className="text-base font-bold text-white">Self-Contained Rig</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We never plug into your outlets or touch your water spigot. Everything is self-contained in our mobile studio.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-3">
              <Award className="w-8 h-8 text-gold-400" />
              <h3 className="text-base font-bold text-white">Carfax Verified</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Ceramic coating installations are officially registered to your vehicle's VIN, boosting resale history.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-3">
              <HeartHandshake className="w-8 h-8 text-gold-400" />
              <h3 className="text-base font-bold text-white">Refundable $50 Deposit</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fully refundable up to 24 hours prior. We respect your busy calendar and schedule.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-white/5 space-y-3">
              <Star className="w-8 h-8 text-gold-400" />
              <h3 className="text-base font-bold text-white">Rupes Machine Polish</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Precision Italian dual-action orbital polishers ensure zero holograms and scratch-free clear coat preservation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
