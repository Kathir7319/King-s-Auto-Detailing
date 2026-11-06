import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Phone } from 'lucide-react';
import { FAQS, COMPANY_INFO } from '../data/detailingData';

export const FaqSection = ({ onOpenBooking }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-obsidian-900 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Common Questions Answered</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Everything you need to know about our mobile studio, deposit guarantees, and driveway operations.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl glass-panel border border-gold-500/15 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-obsidian-950 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-gold-500 text-obsidian-950' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Concierge Help Box */}
        <div className="mt-12 p-6 rounded-2xl bg-obsidian-950/80 border border-gold-500/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <div className="text-sm font-bold text-white">Have a custom exotic or specific question?</div>
            <div className="text-xs text-slate-400">Our concierge is ready to assist your driveway scheduling.</div>
          </div>
          <a
            href={`tel:${COMPANY_INFO.rawPhone}`}
            className="px-5 py-2.5 rounded-xl bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 text-gold-400 font-bold text-xs tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {COMPANY_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FaqSection;
