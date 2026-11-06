import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, SlidersHorizontal, ArrowLeftRight, CheckCircle2, Shield, Eye, Flame } from 'lucide-react';
import { BEFORE_AFTER_CASES } from '../data/detailingData';

export const BeforeAfterSlider = ({ onBookPackage }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const activeCase = BEFORE_AFTER_CASES[activeCaseIndex];

  // Mouse & Touch move handlers
  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 3) percentage = 3;
    if (percentage > 97) percentage = 97;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleInteractionStart = (e) => {
    setIsDragging(true);
    if (e.type === 'touchstart') {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="transformations" className="py-20 bg-obsidian-900 relative overflow-hidden">
      {/* Background aesthetic glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Transformation Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            The Art of the Before & After
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300">
            Drag the slider to see how we restore deep paint clarity and factory-fresh interiors.
          </p>
        </div>

        {/* Case Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {BEFORE_AFTER_CASES.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setActiveCaseIndex(idx);
                setSliderPosition(50);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeCaseIndex === idx
                  ? 'bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 shadow-lg shadow-gold-500/20'
                  : 'bg-obsidian-850 text-slate-300 hover:text-white hover:bg-obsidian-800 border border-white/5'
              }`}
            >
              <span>{item.title.split(':')[0]}</span>
              <span className="hidden md:inline text-xs opacity-85">
                • {item.category}
              </span>
            </button>
          ))}
        </div>

        {/* Active Transformation Card */}
        <div className="glass-panel rounded-3xl p-4 sm:p-6 lg:p-8 border border-gold-500/20 shadow-2xl">
          
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">
                  {activeCase.category}
                </span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-xs text-slate-300 font-medium">
                  {activeCase.location}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                {activeCase.vehicle}
              </h3>
            </div>

            {/* Quick Slider Guide */}
            <div className="flex items-center gap-2 bg-obsidian-950/80 px-3.5 py-1.5 rounded-full border border-gold-500/30 text-xs text-gold-300">
              <ArrowLeftRight className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>Drag Center Dial to Reveal Transformation</span>
            </div>
          </div>

          {/* Interactive Split Slider Container */}
          <div
            ref={containerRef}
            onMouseDown={handleInteractionStart}
            onMouseMove={handleMouseMove}
            onTouchStart={handleInteractionStart}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[360px] sm:h-[460px] md:h-[540px] rounded-2xl overflow-hidden cursor-ew-resize select-none border border-gold-500/30 shadow-inner group"
          >
            {/* RIGHT SIDE (AFTER IMAGE - Background Full) */}
            <div className="absolute inset-0">
              <img
                src={activeCase.afterImage}
                alt="After Detailing"
                className="w-full h-full object-cover object-center"
              />
              {/* After label */}
              <div className="absolute top-4 right-4 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm font-black tracking-wider uppercase backdrop-blur-md shadow-lg">
                  AFTER: KING'S CERAMIC FINISH
                </span>
              </div>

              {/* After description pill */}
              <div className="absolute bottom-4 right-4 max-w-xs sm:max-w-md p-3 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-emerald-500/30 text-xs text-slate-200 pointer-events-none hidden sm:block">
                <span className="font-bold text-emerald-400 block mb-0.5">SHOWROOM RESTORATION:</span>
                {activeCase.afterDesc}
              </div>
            </div>

            {/* LEFT SIDE (BEFORE IMAGE - Clipped to sliderPosition) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={activeCase.beforeImage}
                alt="Before Detailing"
                className="absolute inset-0 w-full h-full object-cover object-center max-w-none"
                style={{
                  width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                  height: '100%'
                }}
              />
              {/* Dull/swirl micro texture overlay for realistic before visual */}
              <div className="absolute inset-0 bg-amber-950/15 pointer-events-none" />

              {/* Before label */}
              <div className="absolute top-4 left-4 z-20 pointer-events-none">
                <span className="px-3.5 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500/50 text-rose-300 text-xs sm:text-sm font-black tracking-wider uppercase backdrop-blur-md shadow-lg">
                  BEFORE: NEGLECTED & SWIRLED
                </span>
              </div>

              {/* Before description pill */}
              <div className="absolute bottom-4 left-4 max-w-xs sm:max-w-md p-3 rounded-xl bg-obsidian-950/85 backdrop-blur-md border border-rose-500/30 text-xs text-slate-300 pointer-events-none hidden sm:block">
                <span className="font-bold text-rose-400 block mb-0.5">BEFORE CONDITION:</span>
                {activeCase.beforeDesc}
              </div>
            </div>

            {/* Split Divider Vertical Line */}
            <div
              className="absolute top-0 bottom-0 z-30 pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Glowing vertical bar */}
              <div className="absolute top-0 bottom-0 -left-[1.5px] w-[3px] bg-gradient-to-b from-gold-300 via-gold-400 to-amber-600 shadow-[0_0_12px_rgba(245,181,22,0.8)]" />

              {/* Center Handle Knob */}
              <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-obsidian-950 border-2 border-gold-400 shadow-2xl shadow-gold-500/50 flex items-center justify-center transition-transform group-hover:scale-110">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 flex items-center justify-center">
                  <ArrowLeftRight className="w-4 h-4 text-obsidian-950" />
                </div>
              </div>
            </div>

            {/* Range input for accessible keyboard / drag control */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              aria-label="Before and after transformation slider"
              className="absolute inset-0 opacity-0 cursor-ew-resize z-40 w-full h-full"
            />
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-6 border-t border-white/10">
            {activeCase.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-obsidian-950/60 border border-white/5 text-center"
              >
                <div className="text-2xl sm:text-3xl font-extrabold gold-gradient-text">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Checklist of What Was Restored */}
          <div className="mt-6 p-5 rounded-2xl bg-obsidian-950/80 border border-gold-500/15">
            <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>Restoration Highlights for this Vehicle:</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {activeCase.restorationPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA below slider */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-400">
              ⚡ All transformations performed on-site at client driveways in Cary, Apex, and Morrisville.
            </span>
            <button
              onClick={() => onBookPackage && onBookPackage('paint-correction')}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-sm tracking-wide shadow-md shadow-gold-500/20 hover:brightness-110 active:scale-95 transition-all"
            >
              Book This Level of Restoration ($50 Holds Date)
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BeforeAfterSlider;
