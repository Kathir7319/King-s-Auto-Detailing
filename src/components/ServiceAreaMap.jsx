import React, { useState } from 'react';
import { MapPin, ShieldCheck, Droplets, Zap, CheckCircle2, Search, Check, Navigation, AlertCircle } from 'lucide-react';
import { SERVICE_AREAS, RIG_SPECS, COMPANY_INFO } from '../data/detailingData';

export const ServiceAreaMap = ({ onOpenBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [lookupResult, setLookupResult] = useState(null);

  const handleLookup = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      setLookupResult(null);
      return;
    }

    const query = searchQuery.trim().toLowerCase();
    
    // Check against zip codes and neighborhoods
    let matchedTown = null;
    let matchedNeighborhood = null;

    for (const area of SERVICE_AREAS) {
      if (area.town.toLowerCase().includes(query)) {
        matchedTown = area;
        break;
      }
      for (const zip of area.zipCodes) {
        if (zip.includes(query)) {
          matchedTown = area;
          break;
        }
      }
      for (const n of area.neighborhoods) {
        if (n.toLowerCase().includes(query)) {
          matchedTown = area;
          matchedNeighborhood = n;
          break;
        }
      }
      if (matchedTown) break;
    }

    // Default friendly matching for Wake County / Cary Triangle area
    if (matchedTown || query.includes('27519') || query.includes('cary') || query.includes('apex') || query.includes('morrisville')) {
      setLookupResult({
        success: true,
        message: `Great news! ${matchedNeighborhood ? matchedNeighborhood + ', ' : ''}${matchedTown ? matchedTown.town : 'Cary / Triangle area'} is in our daily priority coverage.`,
        note: 'Zero mobile travel fee. 100% self-contained rig arrives directly at your driveway.'
      });
    } else {
      setLookupResult({
        success: true,
        message: `We frequently extend our mobile studio to neighborhoods bordering Cary (27519), Apex, and Morrisville.`,
        note: `Contact our concierge at ${COMPANY_INFO.phone} or book directly—we'll confirm your driveway in minutes.`
      });
    }
  };

  return (
    <section id="service-area" className="py-24 bg-obsidian-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Driveway Service Territory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            Serving Cary’s Finest Neighborhoods
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Geographic Target Zones: Cary (Zip Code 27519), Apex, and Morrisville.
          </p>
        </div>

        {/* Core Copy Block & Guarantee Card */}
        <div className="mb-14 rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-obsidian-900 via-obsidian-850 to-obsidian-900 border-2 border-gold-500/30 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-gold-400 font-bold text-sm tracking-wide">
                <ShieldCheck className="w-5 h-5 text-gold-400" />
                <span>THE KING'S MOBILE GUARANTEE</span>
              </div>
              <blockquote className="text-lg sm:text-xl md:text-2xl font-serif text-white leading-relaxed font-bold">
                “Our Mobile Guarantee: We are fully self-contained with our own spot-free filtered water supply and onboard electrical generators. Whether you are located in Amberly, Preston, or downtown Morrisville, we bring the elite detailing studio directly to your garage environment.”
              </blockquote>
              <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Home Water Needed
                </span>
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> No Home Electricity Needed
                </span>
                <span className="flex items-center gap-1.5 text-slate-300 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Drop-Off Hassle
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 text-center">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">
                Primary Dispatch Center
              </span>
              <span className="text-3xl font-extrabold gold-gradient-text mt-1">
                Cary, NC 27519
              </span>
              <span className="text-xs text-slate-300 mt-1">
                Same-Day & Next-Day Driveway Deployments
              </span>
              <button
                onClick={onOpenBooking}
                className="mt-4 w-full py-2.5 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-xs tracking-wider transition-colors shadow-md"
              >
                Reserve Your Cary Slot ($50 Holds Date)
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Zip Code / Neighborhood Checker */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="glass-panel rounded-2xl p-6 border border-gold-500/20 shadow-xl">
            <h3 className="text-base font-bold text-white mb-2 flex items-center gap-2">
              <Search className="w-4 h-4 text-gold-400" />
              <span>Instant Driveway Coverage Checker</span>
            </h3>
            <p className="text-xs text-slate-400 mb-4">
              Enter your Cary, Apex, or Morrisville zip code or neighborhood (e.g. 27519, Amberly, Preston, Bella Casa, Kitts Creek):
            </p>

            <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter Zip Code or Neighborhood (e.g. 27519)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl bg-obsidian-900 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-sm tracking-wide shadow-md hover:brightness-110 active:scale-95 transition-all"
              >
                Check Coverage
              </button>
            </form>

            {lookupResult && (
              <div className="mt-4 p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs sm:text-sm animate-in fade-in duration-300">
                <div className="font-bold flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{lookupResult.message}</span>
                </div>
                <div className="mt-1 text-slate-300 text-xs">
                  {lookupResult.note}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* 3 Geographic Zones Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SERVICE_AREAS.map((area) => (
            <div
              key={area.town}
              className="rounded-2xl glass-panel p-6 border border-gold-500/15 hover:border-gold-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-xl font-bold text-white flex items-center gap-2">
                    <Navigation className="w-4 h-4 text-gold-400" />
                    <span>{area.town}, NC</span>
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-gold-500/15 text-gold-300 border border-gold-500/30">
                    {area.badge}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Served Zip Codes:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.zipCodes.map((zip) => (
                      <span
                        key={zip}
                        className="px-2 py-0.5 rounded bg-obsidian-950 border border-white/5 font-mono text-xs text-gold-300 font-semibold"
                      >
                        {zip}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                    Featured Communities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {area.neighborhoods.map((n) => (
                      <span
                        key={n}
                        className="text-xs text-slate-300 bg-white/5 px-2 py-1 rounded-md"
                      >
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 text-[11px] text-slate-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Daily mobile units stationed locally</span>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Rig Specs (Our Mobile Studio Equipment) */}
        <div id="mobile-rig" className="pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              State-of-The-Art Equipment
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">
              Inside Our Mobile Detailing Studio
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Engineered so your home utilities remain untouched. Pure luxury detailing delivered safely to any driveway.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {RIG_SPECS.map((spec, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-obsidian-900 border border-white/5 hover:border-gold-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {spec.icon === 'droplet' && <Droplets className="w-6 h-6" />}
                  {spec.icon === 'zap' && <Zap className="w-6 h-6" />}
                  {spec.icon === 'flame' && <ShieldCheck className="w-6 h-6" />}
                  {spec.icon === 'shield' && <ShieldCheck className="w-6 h-6" />}
                </div>
                <h4 className="text-base font-bold text-white mb-2">{spec.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreaMap;
