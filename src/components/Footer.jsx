import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Calendar, Mail, ShieldCheck, Star, Award, Heart, ArrowUp } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO, SERVICE_AREAS } from '../data/detailingData';

export const Footer = ({ onOpenBooking }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-obsidian-950 text-slate-300 border-t border-gold-500/20 relative overflow-hidden">
      {/* Upper Pitch Callout Block (Section 6 Final Pitch) */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8 border-b border-white/10 bg-gradient-to-b from-obsidian-900 to-obsidian-950">
        <div className="absolute inset-0 bg-radial-glow opacity-70 pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-300 text-xs font-bold tracking-wider uppercase">
            <Award className="w-4 h-4 text-gold-400" />
            <span>King's Standard of Automotive Perfection</span>
          </div>

          {/* Final Pitch Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-tight">
            Stop Waiting. <span className="gold-gradient-text">Start Driving a Masterpiece.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Experience the pinnacle of mobile detailing and Carfax-registered ceramic protection. We come to your Cary, Apex, or Morrisville driveway completely self-powered.
          </p>

          {/* Secondary CTA Button */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/booking"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-lg tracking-wide shadow-2xl shadow-gold-500/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3"
            >
              <Calendar className="w-5 h-5 text-obsidian-950" />
              <span>Schedule Your Detail Now</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-400 font-bold text-base hover:bg-obsidian-850 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Direct Concierge: {COMPANY_INFO.phone}</span>
            </a>
          </div>

          {/* Explicit Deposit Policy Highlight */}
          <div className="pt-4 max-w-xl mx-auto">
            <div className="p-3.5 rounded-xl bg-obsidian-950/80 border border-gold-500/20 text-xs text-gold-300/90 text-center flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>
                <strong>Deposit Policy:</strong> {COMPANY_INFO.depositPolicy}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Credentials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Credentials */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <Logo size="lg" />
            </Link>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Elite mobile auto detailing studio, multi-stage paint correction, and official Carfax-registered 9H ceramic coatings dispatched across Cary, Apex, and Morrisville.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-200">
                <Phone className="w-4 h-4 text-gold-400" />
                <span className="font-bold">Phone:</span>
                <a href={`tel:${COMPANY_INFO.rawPhone}`} className="hover:text-gold-400 font-mono">
                  {COMPANY_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <MapPin className="w-4 h-4 text-gold-400" />
                <span className="font-bold">Base Location:</span>
                <span>{COMPANY_INFO.location}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-200">
                <Mail className="w-4 h-4 text-gold-400" />
                <span className="font-bold">Concierge:</span>
                <span className="font-mono">{COMPANY_INFO.email}</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-slate-300">
                5.0 Stars on Facebook &bull; 100+ Cary Vehicles Perfected
              </span>
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Showroom
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition-colors">
                  Services & Packages
                </Link>
              </li>
              <li>
                <Link to="/transformations" className="hover:text-white transition-colors">
                  Before & After Gallery
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="hover:text-white transition-colors">
                  How It Works & Mobile Rig
                </Link>
              </li>
              <li>
                <Link to="/service-area" className="hover:text-white transition-colors">
                  Service Area (Cary 27519)
                </Link>
              </li>
              <li>
                <Link to="/behind-the-scenes" className="hover:text-white transition-colors">
                  SMS Concierge Protocol
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About King's Detailing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Detailing Packages */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              Detailing Tiers
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/packages" className="hover:text-white transition-colors">
                  Express Wash ($120 - $180)
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition-colors">
                  Full Interior / Exterior ($250 - $350)
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition-colors">
                  Paint Correction ($450+)
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-white transition-colors">
                  3-Year Ceramic Coating ($800 - $1,200)
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-gold-400 transition-colors font-semibold text-gold-400">
                  Book Online ($50 Holds Date) &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Area Zip Codes */}
          <div>
            <h4 className="text-xs font-bold text-gold-400 uppercase tracking-widest mb-4">
              Service Areas
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="text-white font-semibold">Cary, NC (27519, 27511, 27513)</li>
              <li>Amberly &bull; Preston &bull; Twin Lakes</li>
              <li>Carpenter Village &bull; Lochmere</li>
              <li className="text-white font-semibold pt-1">Apex, NC (27502, 27523)</li>
              <li>Bella Casa &bull; Sweetwater</li>
              <li className="text-white font-semibold pt-1">Morrisville, NC (27560)</li>
              <li>Kitts Creek &bull; Perimeter Park</li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} King's Auto Detailing. All rights reserved. Cary, NC 27519.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white">Privacy & Policies</Link>
            <Link to="/how-it-works" className="hover:text-white">Carfax Partner</Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-obsidian-900 border border-white/10 hover:border-gold-400 text-gold-400 transition-colors"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
