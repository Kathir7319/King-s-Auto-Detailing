import React from 'react';

export const LogoMark = ({ size = 48, className = "" }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 ${className}`}
    >
      <defs>
        <linearGradient id="goldGradMark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF7CC" />
          <stop offset="35%" stopColor="#F5B516" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" />
        </linearGradient>
        <linearGradient id="shieldGradMark" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1E293B" />
          <stop offset="100%" stopColor="#0B0F17" />
        </linearGradient>
        <linearGradient id="glowLaser" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F5B516" stopOpacity="0" />
          <stop offset="50%" stopColor="#FFF3B0" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#F5B516" stopOpacity="0" />
        </linearGradient>
        <filter id="royalGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Exterior Shield Contour */}
      <path
        d="M 60 7 L 105 25 C 105 75 78 107 60 115 C 42 107 15 75 15 25 Z"
        fill="url(#shieldGradMark)"
        stroke="url(#goldGradMark)"
        strokeWidth="2.5"
      />

      {/* Inner Accent Inset Line */}
      <path
        d="M 60 13 L 99 29 C 99 71 75 100 60 108 C 45 100 21 71 21 29 Z"
        fill="none"
        stroke="#F5B516"
        strokeOpacity="0.3"
        strokeWidth="1"
        strokeDasharray="4 2"
      />

      {/* Crown Motif */}
      <path
        d="M 37 46 L 43 31 L 52 40 L 60 26 L 68 40 L 77 31 L 83 46 C 76 49.5 44 49.5 37 46 Z"
        fill="url(#goldGradMark)"
        filter="url(#royalGlow)"
      />
      {/* Crown Jewels */}
      <circle cx="43" cy="30" r="2.2" fill="#FFFFFF" />
      <circle cx="60" cy="24" r="2.8" fill="#FFFFFF" />
      <circle cx="77" cy="30" r="2.2" fill="#FFFFFF" />

      {/* Luxury Hypercar Silhouette */}
      <path
        d="M 32 68 C 40 56 53 53 66 53 C 78 53 85 57 89 64 C 93 65 97 68 97 72 C 97 74 95 75 92 75 L 28 75 C 25 75 23 73 23 70 C 23 67 28 65 32 68 Z"
        fill="none"
        stroke="url(#goldGradMark)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Car Window Contour */}
      <path
        d="M 44 65 L 56 60 L 71 60 L 77 65 Z"
        fill="url(#goldGradMark)"
        fillOpacity="0.4"
      />

      {/* Laser Reflection / Showroom Gloss Horizon Line */}
      <line x1="26" y1="75" x2="94" y2="75" stroke="url(#glowLaser)" strokeWidth="2.5" />

      {/* Precision Wheels with Gold Calipers */}
      <circle cx="39" cy="76" r="5" fill="#0B0F17" stroke="url(#goldGradMark)" strokeWidth="2" />
      <circle cx="39" cy="76" r="2" fill="#F5B516" />
      <circle cx="81" cy="76" r="5" fill="#0B0F17" stroke="url(#goldGradMark)" strokeWidth="2" />
      <circle cx="81" cy="76" r="2" fill="#F5B516" />

      {/* Ceramic Coating Sparkle */}
      <path
        d="M 60 83 Q 60 88 65 88 Q 60 88 60 93 Q 60 88 55 88 Q 60 88 60 83 Z"
        fill="#FFF7CC"
      />
      <circle cx="60" cy="88" r="1.2" fill="#FFFFFF" />

      {/* Bottom Subtitle Inside Shield */}
      <text
        x="60"
        y="103"
        textAnchor="middle"
        fontFamily="'Cinzel', serif"
        fontSize="7"
        fontWeight="800"
        fill="url(#goldGradMark)"
        letterSpacing="1.8"
      >
        CARY • NC
      </text>
    </svg>
  );
};

export const Logo = ({ variant = "default", size = "md", className = "" }) => {
  const markSizes = {
    sm: 34,
    md: 44,
    lg: 56,
    xl: 72
  };

  const currentSize = markSizes[size] || 44;

  if (variant === "icon") {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <LogoMark size={currentSize} />
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div className={`inline-flex items-center gap-2.5 p-2 px-3 rounded-full bg-obsidian-900/90 border border-gold-500/30 backdrop-blur-md shadow-lg shadow-gold-500/5 whitespace-nowrap ${className}`}>
        <LogoMark size={28} />
        <div className="flex flex-col">
          <span className="font-serif font-black tracking-widest text-xs gold-gradient-text uppercase whitespace-nowrap">
            King's Auto Detailing
          </span>
          <span className="text-[10px] text-slate-400 tracking-wider whitespace-nowrap">
            Cary • Apex • Morrisville
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-3 group select-none whitespace-nowrap ${className}`}>
      <div className="relative shrink-0">
        <div className="absolute -inset-1 rounded-full bg-gold-500/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <LogoMark size={currentSize} className="relative transform group-hover:scale-105 transition-transform duration-300" />
      </div>
      
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="font-serif font-black text-lg md:text-xl xl:text-2xl tracking-wider text-white group-hover:text-gold-200 transition-colors whitespace-nowrap">
            KING'S
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
        </div>
        <span className="text-[9px] md:text-[10px] font-bold tracking-[0.24em] text-gold-400 uppercase mt-1 whitespace-nowrap">
          Auto Detailing
        </span>
        <span className="text-[8px] tracking-[0.16em] text-slate-400 font-medium mt-0.5 whitespace-nowrap hidden sm:block">
          MOBILE STUDIO &bull; CARY, NC 27519
        </span>
      </div>
    </div>
  );
};

export default Logo;
