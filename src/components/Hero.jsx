import React, { useState } from 'react';
import { Sparkles, Calendar, ShieldCheck, Star, ArrowRight, CheckCircle2, Droplets, Zap, ChevronRight, Play, Award } from 'lucide-react';
import { COMPANY_INFO, PACKAGES } from '../data/detailingData';

export const Hero = ({ onOpenBooking, onExploreTransformations, onSelectPackage }) => {
  const [selectedVehicleType, setSelectedVehicleType] = useState('sedan');
  const [isPlayingVideo, setIsPlayingVideo] = useState(true);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden bg-obsidian-950">
      {/* Background Cinematic Media Layer */}
      <div className="absolute inset-0 z-0">
        {/* Dynamic Video Loop with Luxury Paint Reflections and Steam Mist Overlay */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center opacity-35 scale-105 transform motion-safe:animate-pulse-subtle filter contrast-125 brightness-90"
          poster="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=80"
        >
          {/* High-res automotive detailing video clip */}
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-car-washing-cleaning-with-foam-42352-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Multi-layered Obsidian and Gold Shimmer Overlays for Maximum Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/75 to-obsidian-950/90" />
        <div className="absolute inset-0 bg-radial-glow opacity-60" />
        <div className="absolute inset-0 subtle-grid opacity-30" />

        {/* Ambient Steam / Light Flare accents */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Value Proposition & Headings */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Live Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
              </span>
              <span>100% Mobile Detailing Studio &bull; Cary, Apex & Morrisville</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-[1.12]">
              The Showroom Shine,{' '}
              <span className="gold-gradient-text block sm:inline">
                Delivered to Your Cary Driveway.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Premium mobile detailing and professional ceramic coatings engineered for busy professionals in{' '}
              <span className="text-white font-medium underline decoration-gold-500/40 underline-offset-4">
                Cary, Apex, and Morrisville
              </span>
              . No drop-offs. No waiting. Just perfection.
            </p>

            {/* Primary CTA Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-base sm:text-lg tracking-wide shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 text-obsidian-950" />
                <span>Book Mobile Detail – Secure Your Spot</span>
                <ArrowRight className="w-5 h-5 text-obsidian-950 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreTransformations}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-obsidian-900/80 hover:bg-obsidian-850 border border-gold-500/30 hover:border-gold-400 text-slate-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center gap-2 backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>See The Proof (Before & After)</span>
              </button>
            </div>

            {/* Social Proof Row */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-white">5.0 Stars on Facebook</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">&bull;</span>
                <div className="flex items-center gap-1.5 font-medium text-slate-300">
                  <Award className="w-4 h-4 text-gold-400" />
                  <span>100+ Local Cary Vehicles Perfected</span>
                </div>
                <span className="text-slate-600 hidden sm:inline">&bull;</span>
                <div className="flex items-center gap-1.5 text-xs text-gold-400/90 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Fully Refundable $50 Deposit</span>
                </div>
              </div>
            </div>

            {/* Neighborhood quick badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1 text-xs text-slate-400">
              <span className="text-slate-500">Frequently In:</span>
              {['Amberly', 'Preston', 'Twin Lakes', 'Kitts Creek', 'Bella Casa', 'Downtown Morrisville'].map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-slate-300 font-mono text-[11px]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Quick Booking & Package Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="relative glass-panel rounded-2xl p-6 sm:p-7 border border-gold-500/25 shadow-2xl shadow-black/80">
              
              {/* Corner Ribbon */}
              <div className="absolute -top-3 -right-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 shadow-md">
                  <Sparkles className="w-3 h-3" />
                  <span>Mobile Rig Guarantee</span>
                </span>
              </div>

              {/* Card Header */}
              <div className="space-y-1 mb-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                  Live Driveway Concierge
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Zero Drop-Offs. 100% Self-Powered.
                </h3>
                <p className="text-xs text-slate-400">
                  We bring pure spot-free water & electricity to your location.
                </p>
              </div>

              {/* 3 Key Operational Highlights */}
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-obsidian-900/90 border border-white/5">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                    <Droplets className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">100 Gallons Deionized Water</div>
                    <div className="text-xs text-slate-400">0 PPM mineral purity for spot-free sun drying</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-obsidian-900/90 border border-white/5">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Whisper-Quiet Generator Onboard</div>
                    <div className="text-xs text-slate-400">We never plug into your home's outlets</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-obsidian-900/90 border border-white/5">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Carfax Registered Ceramic Warranty</div>
                    <div className="text-xs text-slate-400">Preserves and documents your vehicle's resale value</div>
                  </div>
                </div>
              </div>

              {/* Live Availability Teaser */}
              <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-500/20 mb-6 flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-gold-300 uppercase tracking-wide">
                    Next Driveway Window
                  </div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5 mt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-gold-400" />
                    <span>Tomorrow &bull; 9:00 AM – 1:00 PM</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Deposit to lock:</span>
                  <span className="text-sm font-extrabold text-gold-400">$50 (Refundable)</span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking()}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 font-bold text-sm tracking-wide shadow-lg shadow-gold-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Check Live Calendar & Reserve</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <div className="mt-3 text-center">
                <span className="text-[11px] text-slate-400">
                  🔒 Encrypted 256-Bit Stripe & Square Checkout
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
