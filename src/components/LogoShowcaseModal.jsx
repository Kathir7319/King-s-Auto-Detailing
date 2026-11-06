import React from 'react';
import { X, Sparkles, Download, Check, Shield } from 'lucide-react';
import Logo, { LogoMark } from './Logo';

export const LogoShowcaseModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl rounded-3xl bg-obsidian-900 border border-gold-500/30 p-6 sm:p-8 shadow-2xl space-y-6">
        
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-400" />
            <h3 className="text-xl font-serif font-black text-white">
              Brand Identity: King's Auto Detailing
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          Crafted exclusively for <strong className="text-white">King's Auto Detailing</strong>. Blends a regal 3-point diamond-cut crown with an aerodynamic hypercar silhouette, laser light flare, and obsidian-gold shield geometry.
        </p>

        {/* Display Grid of Logo Variants */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Variant 1: Full Primary Lockup */}
          <div className="p-6 rounded-2xl bg-obsidian-950 border border-gold-500/20 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
              Primary Lockup
            </span>
            <Logo size="lg" />
          </div>

          {/* Variant 2: Regal Shield Seal / App Icon */}
          <div className="p-6 rounded-2xl bg-obsidian-950 border border-gold-500/20 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
              Emblem Mark / Favicon
            </span>
            <LogoMark size={70} />
          </div>

          {/* Variant 3: VIP Concierge Badge */}
          <div className="p-6 rounded-2xl bg-obsidian-950 border border-gold-500/20 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
              Concierge Pill Badge
            </span>
            <Logo variant="badge" />
          </div>

          {/* Variant 4: Light contrast test */}
          <div className="p-6 rounded-2xl bg-slate-100 border border-slate-300 rounded-2xl flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest mb-3">
              Light Background Rendering
            </span>
            <div className="bg-obsidian-950 p-3 rounded-2xl">
              <Logo size="md" />
            </div>
          </div>

        </div>

        {/* Brand Specs list */}
        <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 space-y-2 text-xs">
          <div className="font-bold text-gold-400">Design Features:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-400">
            <div>&bull; <strong className="text-slate-200">Crown Motif:</strong> 3-tier regal diamond cut</div>
            <div>&bull; <strong className="text-slate-200">Silhouette:</strong> Mid-engine exotic sports car</div>
            <div>&bull; <strong className="text-slate-200">Palette:</strong> 24k Gold, Amber, Obsidian, Slate</div>
            <div>&bull; <strong className="text-slate-200">Typography:</strong> Cinzel Regal + Plus Jakarta Sans</div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-gold-500 text-obsidian-950 font-bold text-xs"
          >
            Close Brand Window
          </button>
        </div>

      </div>
    </div>
  );
};

export default LogoShowcaseModal;
