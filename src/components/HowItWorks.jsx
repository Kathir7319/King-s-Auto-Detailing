import React from 'react';
import { Calendar, CreditCard, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Clock, Car } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/detailingData';

export const HowItWorks = ({ onOpenBooking }) => {
  const icons = [
    <Calendar className="w-6 h-6 text-obsidian-950" />,
    <CreditCard className="w-6 h-6 text-obsidian-950" />,
    <Sparkles className="w-6 h-6 text-obsidian-950" />
  ];

  return (
    <section id="how-it-works" className="py-24 bg-obsidian-900 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>Effortless Mobile Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            How It Works in 3 Easy Steps
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            No drop-offs at inconvenient shops. No waiting in stale waiting rooms. We bring the luxury detail studio to your driveway.
          </p>
        </div>

        {/* 3 Step Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-[18%] right-[18%] -translate-y-12 h-[2px] bg-gradient-to-r from-gold-500/20 via-gold-400/50 to-gold-500/20 z-0" />

          {HOW_IT_WORKS_STEPS.map((item, idx) => (
            <div
              key={item.step}
              className="relative z-10 rounded-3xl glass-panel p-7 sm:p-8 border border-gold-500/20 flex flex-col justify-between group hover:border-gold-400/50 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300"
            >
              <div>
                {/* Step number badge & icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-500 to-amber-300 flex items-center justify-center shadow-lg shadow-gold-500/30 group-hover:scale-110 transition-transform">
                    {icons[idx]}
                  </div>
                  <span className="text-4xl font-serif font-black text-white/10 group-hover:text-gold-400/20 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {item.title}
                </h3>

                {/* Primary Description from prompt */}
                <p className="text-sm text-slate-300 font-medium leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Sub detail bullet */}
                <div className="p-3.5 rounded-xl bg-obsidian-950/70 border border-white/5 text-xs text-slate-400">
                  <span className="text-gold-400 font-semibold block mb-0.5">Detail:</span>
                  {item.detail}
                </div>
              </div>

              {/* Step reassurance tag */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>
                  {idx === 0 && 'Instant online scheduling'}
                  {idx === 1 && '100% Refundable up to 24 hrs'}
                  {idx === 2 && 'Zero cords hooked to your home'}
                </span>
              </div>
            </div>
          ))}

        </div>

        {/* Action Call to Action */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 font-black text-base shadow-xl shadow-gold-500/20 hover:scale-105 active:scale-95 transition-all"
          >
            <Calendar className="w-5 h-5 text-obsidian-950" />
            <span>Start Step 1: Pick Your Package & Time</span>
            <ArrowRight className="w-5 h-5 text-obsidian-950" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
