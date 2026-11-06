import React from 'react';
import { Star, ShieldCheck, Quote, Sparkles, CheckCircle2, Car } from 'lucide-react';
import { REVIEWS, COMPANY_INFO } from '../data/detailingData';

export const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-24 bg-obsidian-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            <span>Verified Driveway Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            Loved by Cary’s Discerning Drivers
          </h2>
          <p className="mt-3 text-base text-slate-300">
            {COMPANY_INFO.socialProof.countText} &bull; 5.0 Star Rating on Facebook & Google
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl p-7 sm:p-8 border border-gold-500/15 flex flex-col justify-between group hover:border-gold-400/40 hover:shadow-2xl hover:shadow-gold-500/10 transition-all duration-300"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-500/30 group-hover:text-gold-400/50 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  "{review.text}"
                </p>
              </div>

              {/* Author & Vehicle info */}
              <div className="pt-4 border-t border-white/10">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-white flex items-center gap-1.5">
                      <span>{review.author}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                    </div>
                    <div className="text-xs text-gold-400 font-medium">
                      {review.location}
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400 bg-obsidian-950/80 px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="flex items-center gap-1 text-slate-300">
                    <Car className="w-3 h-3 text-gold-400" /> {review.vehicle}
                  </span>
                  <span className="text-gold-300 font-semibold">{review.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ReviewsSection;
