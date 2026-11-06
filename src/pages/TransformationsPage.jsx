import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import ReviewsSection from '../components/ReviewsSection';
import { Sparkles, Eye, ShieldCheck, CheckCircle2, Award, Calendar, ArrowRight } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/detailingData';

export const TransformationsPage = () => {
  const navigate = useNavigate();

  const luxuryShowcase = [
    {
      title: "Jet Black Porsche 911 GT3",
      tag: "Multi-Stage Paint Correction + 3-Yr Ceramic",
      location: "Amberly Driveway, Cary",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      notes: "94% swirl removal on soft German clear coat. Carfax warranty recorded."
    },
    {
      title: "BMW X5 M Merino Leather",
      tag: "Full Interior Steam Extraction",
      location: "Preston Golf Community, Cary",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80",
      notes: "220°F pressurized extraction removed coffee and sunscreen oils."
    },
    {
      title: "Tesla Model S Plaid (21\" Arachnid)",
      tag: "Wheel Fallout & Caliper Ceramic",
      location: "Downtown Morrisville",
      image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
      notes: "Iron dissolved and baked brake film eliminated from forged barrels."
    },
    {
      title: "Corvette Z06 Torch Red",
      tag: "Single-Stage Machine Polish",
      location: "Bella Casa, Apex",
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
      notes: "Deep wet-look reflection restored under direct Cary afternoon sun."
    }
  ];

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen">
      {/* Banner */}
      <PageBanner
        title="The Art of the Before & After"
        subtitle="Drag the interactive slider to see how we restore deep paint clarity and factory-fresh interiors directly at your driveway in Cary, Apex, and Morrisville."
        badge="Transformation Portfolio"
        breadcrumb="Before & After"
      />

      {/* Interactive Draggable Split Slider */}
      <BeforeAfterSlider
        onBookPackage={(id) => navigate(`/booking?package=${id}`)}
      />

      {/* Behind the Polish: Inspection Metrics & Field Notes */}
      <section className="py-20 bg-obsidian-900 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
              Scientific Precision
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
              How We Measure Showroom Clarity
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              We don't guess. We inspect every vehicle using professional automotive diagnostic equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 mx-auto flex items-center justify-center font-bold text-xl">
                μm
              </div>
              <h3 className="text-lg font-bold text-white">Digital Paint Gauge</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We measure micron thickness before running any rotary or DA polishers to ensure clear coat health and safe corrective depth.
              </p>
              <div className="text-xs font-semibold text-gold-400 pt-2">
                Preserves Factory Clear Coat
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 mx-auto flex items-center justify-center font-bold text-xl">
                GU
              </div>
              <h3 className="text-lg font-bold text-white">60° Optical Gloss Meter</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Gloss units are logged before and after paint correction. Our 3-Year Ceramic finishes routinely jump from 72 GU to 98+ GU mirror clarity.
              </p>
              <div className="text-xs font-semibold text-gold-400 pt-2">
                Certified Mirror Reflection
              </div>
            </div>

            <div className="p-8 rounded-3xl glass-panel border border-gold-500/20 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-gold-500/10 border border-gold-500/30 text-gold-400 mx-auto flex items-center justify-center font-bold text-xl">
                110°
              </div>
              <h3 className="text-lg font-bold text-white">Contact Angle Hydrophobics</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our Carfax-registered 9H ceramic matrix creates intense water beading, ensuring dirt and rainwater slide right off without sticking.
              </p>
              <div className="text-xs font-semibold text-gold-400 pt-2">
                Extreme Self-Cleaning Shield
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Driveway Showcase Grid */}
      <section className="py-20 bg-obsidian-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                Driveway Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif font-black text-white mt-1">
                Recent Cary, Apex & Morrisville Projects
              </h2>
            </div>
            <button
              onClick={() => navigate('/booking')}
              className="inline-flex items-center gap-2 text-xs font-bold text-gold-400 hover:text-gold-300 uppercase tracking-wider"
            >
              <span>Schedule Your Vehicle's Turn</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {luxuryShowcase.map((car, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden bg-obsidian-900 border border-white/5 hover:border-gold-500/30 transition-all group flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-obsidian-950/80 px-2 py-0.5 rounded backdrop-blur-md">
                      {car.location}
                    </span>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-1">{car.title}</h4>
                    <span className="text-xs text-gold-300 font-semibold block mb-2">{car.tag}</span>
                    <p className="text-xs text-slate-400 leading-relaxed">{car.notes}</p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                    <span className="text-[10px] text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Showroom Perfected
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center">
            <button
              onClick={() => navigate('/booking')}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-base shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5 text-obsidian-950" />
              <span>Book Your Transformation ($50 Holds Date)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />
    </div>
  );
};

export default TransformationsPage;
