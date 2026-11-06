import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LogoShowcaseModal from './components/LogoShowcaseModal';

// Dedicated Multi-Page Views
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import TransformationsPage from './pages/TransformationsPage';
import HowItWorksPage from './pages/HowItWorksPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import SmsConciergePage from './pages/SmsConciergePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BookingPage from './pages/BookingPage';

import { Calendar, Sparkles } from 'lucide-react';

export function App() {
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-obsidian-950 text-slate-100 flex flex-col selection:bg-gold-500 selection:text-black">
        {/* Automatically scroll to top on every route transition */}
        <ScrollToTop />

        {/* Global Multi-Page Navigation Header */}
        <Navbar />

        {/* Main Routed Multi-Page Views */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/transformations" element={<TransformationsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/service-area" element={<ServiceAreaPage />} />
            <Route path="/behind-the-scenes" element={<SmsConciergePage />} />
            <Route path="/sms-concierge" element={<SmsConciergePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/booking" element={<BookingPage />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer with Multi-Page Links */}
        <Footer />

        {/* Floating Action Buttons */}
        <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
          {/* Brand Logo Inspector */}
          <button
            onClick={() => setIsLogoModalOpen(true)}
            className="group flex items-center gap-2 px-3 py-2 rounded-full bg-obsidian-900/90 border border-gold-500/30 text-gold-400 text-xs font-semibold shadow-xl backdrop-blur-md hover:border-gold-400 hover:scale-105 transition-all"
            title="Inspect King's Auto Detailing Custom Brand Logo"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span className="hidden sm:inline">Inspect Brand Logo</span>
          </button>

          {/* Direct Link to /booking */}
          <Link
            to="/booking"
            className="flex items-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-sm tracking-wide shadow-2xl shadow-gold-500/40 hover:scale-105 active:scale-95 transition-all group"
          >
            <Calendar className="w-4 h-4 text-obsidian-950" />
            <span>Book Mobile Detail ($50 Holds Date)</span>
          </Link>
        </div>

        {/* Custom Logo Inspector Modal */}
        <LogoShowcaseModal
          isOpen={isLogoModalOpen}
          onClose={() => setIsLogoModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
