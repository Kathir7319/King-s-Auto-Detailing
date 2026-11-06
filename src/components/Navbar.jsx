import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Phone, MapPin, Calendar, Menu, X, ShieldCheck, Sparkles, Star, ChevronDown, MessageSquare, Wrench } from 'lucide-react';
import Logo from './Logo';
import { COMPANY_INFO } from '../data/detailingData';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or route change
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    setMoreDropdownOpen(false);
    setMobileMenuOpen(false);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [location.pathname]);

  const primaryNavLinks = [
    { path: '/', label: 'Home' },
    { path: '/packages', label: 'Packages & Pricing' },
    { path: '/transformations', label: 'Before & After' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/service-area', label: 'Service Area' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ];

  const secondaryNavLinks = [
    { path: '/behind-the-scenes', label: 'SMS Concierge Preview', desc: 'Live automated dispatch texts' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification / VIP Banner */}
      <div className="bg-obsidian-950 border-b border-gold-500/15 py-1.5 px-3 sm:px-6 text-xs font-medium text-slate-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden">
          
          {/* Left: Location & Social Proof */}
          <div className="flex items-center gap-3 sm:gap-4 overflow-hidden whitespace-nowrap text-[11px] sm:text-xs">
            <div className="flex items-center gap-1.5 text-gold-400 font-semibold shrink-0">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
              </span>
              <span>Serving Cary (27519), Apex & Morrisville</span>
            </div>

            <span className="hidden md:inline text-slate-600 shrink-0">|</span>

            <div className="hidden md:flex items-center gap-1 text-slate-300 shrink-0">
              <div className="flex text-gold-400 shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-gold-400" />
                ))}
              </div>
              <span className="text-[11px] font-medium text-slate-300">
                5.0 Stars on Facebook (100+ Cary Vehicles)
              </span>
            </div>

            <span className="hidden lg:inline text-slate-600 shrink-0">|</span>

            <span className="hidden lg:flex items-center gap-1 text-slate-400 text-[11px] shrink-0">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span>100% Self-Contained Mobile Studio</span>
            </span>
          </div>

          {/* Right: Direct Phone CTA */}
          <div className="flex items-center gap-2 shrink-0 ml-auto whitespace-nowrap">
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 font-bold tracking-wide transition-colors text-[11px] sm:text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 animate-pulse shrink-0" />
              <span>{COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-obsidian-950/95 backdrop-blur-xl border-b border-gold-500/25 py-2 shadow-2xl shadow-black/80'
            : 'bg-obsidian-950/85 backdrop-blur-md border-b border-white/5 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo Branding */}
          <Link
            to="/"
            className="text-left focus:outline-none shrink-0"
            aria-label="King's Auto Detailing Home"
          >
            <Logo size="md" />
          </Link>

          {/* Desktop Nav Links (Never wraps!) */}
          <nav className="hidden xl:flex items-center gap-0.5 2xl:gap-1.5 shrink-0">
            {primaryNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-2.5 2xl:px-3.5 py-1.5 rounded-lg text-xs 2xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'text-gold-400 bg-gold-500/10 border border-gold-500/30 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* More Dropdown for SMS Concierge */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setMoreDropdownOpen(!moreDropdownOpen)}
                className={`px-2.5 py-1.5 rounded-lg text-xs 2xl:text-sm font-semibold tracking-wide whitespace-nowrap transition-all flex items-center gap-1 ${
                  location.pathname === '/behind-the-scenes'
                    ? 'text-gold-400 bg-gold-500/10 border border-gold-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>SMS Concierge</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-gold-400' : 'text-slate-400'}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 rounded-2xl bg-obsidian-950/98 border border-gold-500/30 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <NavLink
                    to="/behind-the-scenes"
                    className="flex items-start gap-3 p-2.5 rounded-xl text-left hover:bg-gold-500/10 text-slate-200 hover:text-white transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white whitespace-nowrap">SMS Concierge Preview</div>
                      <div className="text-[11px] text-slate-400 leading-tight mt-0.5">Automated confirmation & 24h reminder protocol</div>
                    </div>
                  </NavLink>
                </div>
              )}
            </div>
          </nav>

          {/* Header Action CTA Button */}
          <div className="hidden sm:flex items-center shrink-0">
            <Link
              to="/booking"
              className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none shrink-0"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-gold-400 via-amber-300 to-gold-600 rounded-xl group-hover:opacity-100 transition-opacity" />
              <span className="relative flex items-center gap-2 px-4 2xl:px-5 py-2.5 rounded-[11px] bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-black text-xs 2xl:text-sm tracking-wide shadow-lg shadow-gold-500/25 transition-transform active:scale-95 group-hover:brightness-110 whitespace-nowrap">
                <Calendar className="w-4 h-4 text-obsidian-950 shrink-0" />
                <span>Book Mobile Detail</span>
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-slate-300 hover:text-gold-400 hover:bg-white/5 focus:outline-none shrink-0"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-obsidian-950/98 border-b border-gold-500/20 backdrop-blur-2xl p-5 space-y-4 shadow-2xl animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            {primaryNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between whitespace-nowrap ${
                    isActive
                      ? 'text-gold-400 bg-gold-500/10 border border-gold-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                <span>{link.label}</span>
                <Sparkles className="w-3.5 h-3.5 text-gold-400 opacity-60 shrink-0" />
              </NavLink>
            ))}

            <NavLink
              to="/behind-the-scenes"
              onClick={() => setMobileMenuOpen(false)}
              className={({ isActive }) =>
                `w-full text-left px-4 py-3 rounded-xl text-sm font-semibold flex items-center justify-between whitespace-nowrap ${
                  isActive
                    ? 'text-gold-400 bg-gold-500/10 border border-gold-500/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <span>SMS Concierge Preview</span>
              <MessageSquare className="w-3.5 h-3.5 text-gold-400 opacity-60 shrink-0" />
            </NavLink>
          </div>

          <div className="pt-3 border-t border-white/10 space-y-3">
            <Link
              to="/booking"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-black tracking-wide shadow-lg shadow-gold-500/20 text-sm whitespace-nowrap"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Book Mobile Detail ($50 Holds Date)</span>
            </Link>

            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-400 font-semibold text-xs whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 shrink-0" />
              <span>Call / Text {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
