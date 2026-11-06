import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles } from 'lucide-react';

export const PageBanner = ({ title, subtitle, badge = "King's Auto Detailing", breadcrumb }) => {
  return (
    <div className="relative pt-32 pb-16 bg-gradient-to-b from-obsidian-950 via-obsidian-900 to-obsidian-950 border-b border-gold-500/20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumbs */}
        <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-400 mb-4 bg-obsidian-900/80 px-3.5 py-1.5 rounded-full border border-white/5 backdrop-blur-md">
          <Link to="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-gold-400 font-semibold">{breadcrumb || title}</span>
        </div>

        {/* Badge */}
        {badge && (
          <div className="block mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gold-500/10 text-gold-300 border border-gold-500/30">
              <Sparkles className="w-3 h-3 text-gold-400" />
              <span>{badge}</span>
            </span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
