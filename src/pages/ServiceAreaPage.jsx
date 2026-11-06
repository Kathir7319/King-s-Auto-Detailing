import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import ServiceAreaMap from '../components/ServiceAreaMap';
import ReviewsSection from '../components/ReviewsSection';
import { MapPin, ShieldCheck, CheckCircle2, Calendar, Phone, ArrowRight, Car } from 'lucide-react';
import { SERVICE_AREAS, COMPANY_INFO } from '../data/detailingData';

export const ServiceAreaPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen">
      {/* Banner */}
      <PageBanner
        title="Serving Cary’s Finest Neighborhoods"
        subtitle="Geographic Target Zones: Cary (Zip Code 27519), Apex, and Morrisville. We bring our fully self-contained mobile studio straight to your garage or driveway with zero travel fees."
        badge="Zero Mobile Travel Fee"
        breadcrumb="Service Area"
      />

      {/* Main Service Area & Interactive Coverage Map */}
      <ServiceAreaMap onOpenBooking={() => navigate('/booking')} />

      {/* Deep Neighborhood Breakdown */}
      <section className="py-20 bg-obsidian-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Daily Driveway Route
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
              Where Our Rig Details Every Week
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              From golf club communities to tech corridors in Research Triangle Park, our mobile units are dispatched across these core zones daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area.town}
                className="p-8 rounded-3xl glass-panel border border-gold-500/20 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gold-400" />
                      <span>{area.town}, NC</span>
                    </h3>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gold-500/15 text-gold-300 border border-gold-500/30">
                      {area.badge}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Covered Zip Codes:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {area.zipCodes.map((zip) => (
                        <span
                          key={zip}
                          className="px-2.5 py-1 rounded bg-obsidian-950 border border-white/10 font-mono text-xs font-bold text-gold-400"
                        >
                          {zip}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Communities & Subdivisions:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {area.neighborhoods.map((n) => (
                        <li key={n} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                          <span>{n}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10">
                  <button
                    onClick={() => navigate('/booking')}
                    className="w-full py-2.5 px-4 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 text-gold-400 font-bold text-xs uppercase tracking-wider border border-gold-500/30 transition-colors"
                  >
                    Check Date in {area.town} ($50 Holds Date)
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 text-center max-w-3xl mx-auto">
            <h4 className="text-base font-bold text-white">
              Live in Raleigh, Durham, or Holly Springs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              We frequently accommodate multi-vehicle details or full 3-Year Ceramic Coatings throughout the broader Triangle area. Call concierge at {COMPANY_INFO.phone}.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />
    </div>
  );
};

export default ServiceAreaPage;
