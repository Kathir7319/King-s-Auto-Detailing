import React, { useState } from 'react';
import { Check, Sparkles, Shield, Clock, Calendar, ArrowRight, HelpCircle, Car, Plus, Info, Award } from 'lucide-react';
import { PACKAGES, VEHICLE_SIZES, ADD_ONS } from '../data/detailingData';

export const PricingMatrix = ({ onSelectPackage }) => {
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'
  const [selectedAddons, setSelectedAddons] = useState([]);

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const getAddonTotal = () => {
    return selectedAddons.reduce((sum, id) => {
      const addon = ADD_ONS.find((a) => a.id === id);
      return sum + (addon ? addon.price : 0);
    }, 0);
  };

  return (
    <section id="packages" className="py-24 bg-obsidian-950 relative overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Visual Package Selection & Pricing Matrix</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            Transparent Luxury Detailing Tiers
          </h2>
          <p className="mt-3 text-base sm:text-lg text-gold-300/90 font-medium">
            Select a tier below to view live availability. A fully refundable $50 deposit holds your date.
          </p>
        </div>

        {/* Vehicle Size Selection Controls */}
        <div className="max-w-2xl mx-auto mb-12 p-2 rounded-2xl bg-obsidian-900 border border-gold-500/20 shadow-xl">
          <div className="text-center pb-2 pt-1 text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Car className="w-3.5 h-3.5 text-gold-400" />
            <span>Select Your Vehicle Size for Exact Estimate:</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {VEHICLE_SIZES.map((size) => (
              <button
                key={size.id}
                onClick={() => setSelectedVehicle(size.id)}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center flex flex-col items-center justify-center ${
                  selectedVehicle === size.id
                    ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 shadow-md font-bold'
                    : 'bg-obsidian-850 text-slate-300 hover:text-white hover:bg-obsidian-800'
                }`}
              >
                <span>{size.name}</span>
                <span className="text-[10px] opacity-75 truncate max-w-full mt-0.5">
                  {size.example.split(',')[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* View switcher (Cards vs Matrix Table) */}
        <div className="flex justify-end mb-6">
          <div className="inline-flex rounded-xl p-1 bg-obsidian-900 border border-white/10 text-xs">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                viewMode === 'cards'
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Package Cards
            </button>
            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-colors ${
                viewMode === 'table'
                  ? 'bg-gold-500 text-obsidian-950 font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Full Comparison Matrix
            </button>
          </div>
        </div>

        {/* CARDS VIEW */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {PACKAGES.map((pkg) => {
              const isPopular = pkg.popular;
              return (
                <div
                  key={pkg.id}
                  className={`relative rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? 'bg-gradient-to-b from-obsidian-850 to-obsidian-900 border-2 border-gold-400 shadow-2xl shadow-gold-500/15 scale-[1.02] z-20'
                      : 'bg-obsidian-900/90 border border-gold-500/20 hover:border-gold-500/50 shadow-xl'
                  }`}
                >
                  {/* Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`px-3 py-1 rounded-full text-[11px] font-black tracking-wider uppercase shadow-md ${
                        isPopular
                          ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950'
                          : 'bg-obsidian-800 text-gold-400 border border-gold-500/30'
                      }`}
                    >
                      {pkg.badge}
                    </span>
                  </div>

                  {/* Header */}
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[34px]">
                      {pkg.tagline}
                    </p>

                    {/* Price and Deposit */}
                    <div className="mt-4 pb-4 border-b border-white/10">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold gold-gradient-text">
                          {pkg.price}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs mt-1 text-slate-400">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-gold-400" /> {pkg.duration}
                        </span>
                        <span className="text-gold-400 font-semibold">
                          $50 holds your date
                        </span>
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="mt-5 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        What's Included:
                      </div>
                      {pkg.included.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Best For block */}
                    <div className="mt-5 p-3 rounded-xl bg-obsidian-950/70 border border-white/5 text-[11px] text-slate-400">
                      <strong className="text-gold-300 block mb-0.5">Best For:</strong>
                      {pkg.bestFor}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <button
                      onClick={() => onSelectPackage(pkg.id)}
                      className={`w-full py-3 px-4 rounded-xl font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2 group ${
                        isPopular
                          ? 'bg-gradient-to-r from-gold-400 to-amber-500 text-obsidian-950 shadow-lg shadow-gold-500/25 hover:brightness-110 active:scale-95'
                          : 'bg-obsidian-800 hover:bg-gold-500 hover:text-obsidian-950 text-slate-100 border border-gold-500/30'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book {pkg.name.split(' ')[0]}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="text-center mt-2">
                      <span className="text-[10px] text-slate-400">
                        100% Refundable up to 24 hrs
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* FULL MATRIX TABLE VIEW */}
        {viewMode === 'table' && (
          <div className="overflow-x-auto rounded-2xl border border-gold-500/25 bg-obsidian-900 shadow-2xl">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-gold-500/20 bg-obsidian-950">
                  <th className="p-4 sm:p-5 text-white font-serif font-bold text-base sm:text-lg">
                    Package Feature
                  </th>
                  {PACKAGES.map((pkg) => (
                    <th key={pkg.id} className="p-4 sm:p-5 text-center min-w-[180px]">
                      <div className="font-bold text-white text-base">{pkg.name}</div>
                      <div className="text-xs text-gold-400 font-semibold">{pkg.price}</div>
                      <button
                        onClick={() => onSelectPackage(pkg.id)}
                        className="mt-2 w-full py-1.5 px-2 rounded-lg bg-gold-500 text-obsidian-950 font-bold text-xs"
                      >
                        Book ($50)
                      </button>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-semibold text-slate-300">100% Hand Wash & Foam Pre-Soak</td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-300">Deep Steam Interior Extraction (220°F)</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-300">Clay Bar & Iron Chemical Fallout Bath</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-300">Single-Stage Machine Polish (Swirl Removal)</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                  <td className="p-4 text-center text-emerald-400">Multi-Stage Included</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-300">3-Year Professional Ceramic Coating Shield</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-emerald-400"><Check className="w-5 h-5 mx-auto" /></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-300">Official Carfax Registry Entry</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-slate-600">—</td>
                  <td className="p-4 text-center text-emerald-400 font-bold text-xs bg-gold-500/10 text-gold-300">Carfax Verified</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-slate-300">Best For</td>
                  <td className="p-4 text-center text-xs text-slate-400">Weekly luxury maintenance</td>
                  <td className="p-4 text-center text-xs text-slate-400">Deep seasonal refresh</td>
                  <td className="p-4 text-center text-xs text-slate-400">Scratched & swirled dark paint</td>
                  <td className="p-4 text-center text-xs text-slate-400">Ultimate long-term resale shield</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Popular Add-On Concierge Options */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl glass-panel border border-gold-500/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-gold-400" />
                <span>Custom Driveway Add-Ons</span>
              </h3>
              <p className="text-xs text-slate-400">
                Enhance any package with specialized treatments at your driveway.
              </p>
            </div>
            {selectedAddons.length > 0 && (
              <div className="px-4 py-2 rounded-xl bg-gold-500/10 border border-gold-500/30 text-xs text-gold-300 font-bold">
                Selected Add-Ons: +${getAddonTotal()}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {ADD_ONS.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-gold-500/15 border-gold-400 text-white'
                      : 'bg-obsidian-900 border-white/5 text-slate-300 hover:border-gold-500/30'
                  }`}
                >
                  <div className="pr-2">
                    <div className="text-xs font-semibold">{addon.name}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{addon.duration}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-sm font-extrabold text-gold-400">+${addon.price}</span>
                    <span className={`block text-[10px] ${isSelected ? 'text-emerald-400 font-bold' : 'text-slate-400'}`}>
                      {isSelected ? '✓ Added' : '+ Add'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section Call To Action Callout */}
        <div className="mt-12 text-center">
          <button
            onClick={() => onSelectPackage('full-interior-exterior')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-base sm:text-lg shadow-xl shadow-gold-500/25 hover:shadow-gold-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <Calendar className="w-5 h-5 text-obsidian-950" />
            <span>Click Any Package to Open Live Booking Calendar</span>
            <ArrowRight className="w-5 h-5 text-obsidian-950" />
          </button>
          <p className="mt-3 text-xs text-slate-400">
            A fully refundable $50 deposit locks in your master detailer and equipment truck.
          </p>
        </div>

      </div>
    </section>
  );
};

export default PricingMatrix;
