import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import PricingMatrix from '../components/PricingMatrix';
import { ShieldCheck, Calendar, CheckCircle2, Clock, Car, Sparkles, Award } from 'lucide-react';
import { PACKAGES, COMPANY_INFO } from '../data/detailingData';

export const PackagesPage = () => {
  const navigate = useNavigate();

  const handleSelectPackage = (packageId) => {
    navigate(`/booking?package=${packageId}`);
  };

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen">
      {/* Banner */}
      <PageBanner
        title="Services & Pricing Matrix"
        subtitle="Transparent mobile detailing tiers engineered for daily drivers, family SUVs, and prized exotics. A fully refundable $50 deposit holds your date."
        badge="Live Availability & Matrix"
        breadcrumb="Services & Pricing"
      />

      {/* Main Pricing Matrix Component */}
      <PricingMatrix onSelectPackage={handleSelectPackage} />

      {/* Deep-Dive Tier Specifications */}
      <section className="py-20 bg-obsidian-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              The King's Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
              Detailed Package Breakdown
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              Every detail is performed on-site at your Cary, Apex, or Morrisville driveway with our 100% self-contained mobile unit.
            </p>
          </div>

          <div className="space-y-8">
            {PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.id}
                className="p-8 rounded-3xl glass-panel border border-gold-500/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-4 space-y-3">
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-gold-500/10 text-gold-400 border border-gold-500/30">
                    {pkg.badge}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{pkg.name}</h3>
                  <div className="text-3xl font-black gold-gradient-text">{pkg.price}</div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Clock className="w-4 h-4 text-gold-400" />
                    <span>Duration: {pkg.duration}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {pkg.bestFor}
                  </p>
                  <button
                    onClick={() => handleSelectPackage(pkg.id)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book {pkg.name} ($50 Holds Date)</span>
                  </button>
                </div>

                <div className="lg:col-span-8 bg-obsidian-950/80 p-6 rounded-2xl border border-white/5 space-y-4">
                  <div className="text-xs font-bold text-gold-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <span>Included Treatments & Protocol:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {pkg.included.map((item, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-white/5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-400">
                    <span>
                      <strong className="text-slate-200">Recommended for:</strong> {pkg.recommendedFor.join(', ')}
                    </span>
                    <span className="text-gold-400 font-semibold">
                      100% Refundable up to 24h prior
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assurance banner */}
      <section className="py-16 bg-obsidian-950 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <Award className="w-10 h-10 text-gold-400 mx-auto mb-3" />
          <h3 className="text-2xl font-serif font-black text-white">
            Unsure Which Tier Your Vehicle Needs?
          </h3>
          <p className="text-slate-300 text-sm mt-2 max-w-xl mx-auto">
            Our master detailers inspect your vehicle upon arrival in Cary, Apex, or Morrisville. We never upsell treatments you don't genuinely need.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/booking')}
              className="px-8 py-3.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-sm tracking-wide shadow-lg transition-all"
            >
              Open Booking Calendar ($50 Deposit)
            </button>
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="px-6 py-3.5 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-400 font-semibold text-sm hover:bg-obsidian-850 transition-all"
            >
              Call Master Detailer: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
