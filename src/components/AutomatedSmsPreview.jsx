import React, { useState } from 'react';
import { Smartphone, MessageSquare, Check, Sparkles, Send, ShieldCheck, Clock } from 'lucide-react';
import { SMS_TEMPLATES, COMPANY_INFO } from '../data/detailingData';

export const AutomatedSmsPreview = () => {
  const [clientName, setClientName] = useState('Alexander');
  const [scheduledDate, setScheduledDate] = useState('Friday, Nov 14th');
  const [scheduledTime, setScheduledTime] = useState('9:00 AM');
  const [activeMessageIndex, setActiveMessageIndex] = useState(0); // 0: confirmation, 1: reminder

  const formatText = (templateText) => {
    return templateText
      .replace(/\[Client Name\]/g, clientName || 'Client')
      .replace(/\[Date\]/g, scheduledDate || 'Selected Date')
      .replace(/\[Time\]/g, scheduledTime || 'Selected Time');
  };

  return (
    <section className="py-20 bg-obsidian-900 border-t border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Behind-the-Scenes Communication Protocol</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight">
            Automated SMS Concierge Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Never wonder when your master detailer arrives. See the real automated SMS updates sent to your phone upon booking and 24 hours prior.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          
          {/* Left Column: Interactive Controls & Explanation */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-6 rounded-2xl glass-panel border border-gold-500/20 shadow-xl">
              <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Test Drive Your Live SMS Updates</span>
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Personalize the fields below to preview the exact automated SMS dispatched by King's Auto Detailing dispatch system:
              </p>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Appointment Date
                    </label>
                    <input
                      type="text"
                      value={scheduledDate}
                      onChange={(e) => setScheduledDate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-300 block mb-1">
                      Arrival Window
                    </label>
                    <input
                      type="text"
                      value={scheduledTime}
                      onChange={(e) => setScheduledTime(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Message Selector Buttons */}
              <div className="mt-5 pt-4 border-t border-white/10 space-y-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Select SMS Stage to Inspect:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    onClick={() => setActiveMessageIndex(0)}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all border ${
                      activeMessageIndex === 0
                        ? 'bg-gold-500/20 border-gold-400 text-gold-300'
                        : 'bg-obsidian-950 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    1. Immediate Booking Confirmation
                  </button>
                  <button
                    onClick={() => setActiveMessageIndex(1)}
                    className={`p-2.5 rounded-xl text-left text-xs font-bold transition-all border ${
                      activeMessageIndex === 1
                        ? 'bg-gold-500/20 border-gold-400 text-gold-300'
                        : 'bg-obsidian-950 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    2. 24-Hour Arrival Reminder
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-4 rounded-xl bg-obsidian-950/80 border border-white/5 text-xs text-slate-400">
              <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
              <span>
                You can reply directly to any SMS to adjust driveway parking instructions or communicate directly with your master detailer.
              </span>
            </div>
          </div>

          {/* Right Column: Realistic Smartphone UI Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-[320px] sm:w-[350px] rounded-[44px] bg-[#121214] p-3 shadow-2xl border-4 border-slate-700/80 shadow-black relative ring-1 ring-gold-500/30">
              
              {/* Phone Dynamic Island */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-end px-3">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
              </div>

              {/* Phone Screen */}
              <div className="w-full rounded-[36px] bg-[#000000] overflow-hidden pt-8 pb-4 px-3 flex flex-col justify-between min-h-[520px]">
                
                {/* Header */}
                <div className="text-center pb-3 border-b border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-gold-500 to-amber-300 mx-auto flex items-center justify-center font-serif font-black text-obsidian-950 text-sm shadow-md">
                    K
                  </div>
                  <div className="font-bold text-white text-xs mt-1.5 flex items-center justify-center gap-1">
                    <span>King's Auto Detailing</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">
                    {COMPANY_INFO.phone} &bull; Dispatch
                  </div>
                </div>

                {/* Message Thread Body */}
                <div className="space-y-4 py-4 flex-1 flex flex-col justify-end">
                  
                  {/* Timestamp */}
                  <div className="text-center">
                    <span className="text-[10px] text-slate-400 font-medium">
                      Today &bull; Verified SMS Dispatch
                    </span>
                  </div>

                  {/* Immediate Confirmation Bubble */}
                  <div className={`space-y-1 transition-opacity duration-300 ${activeMessageIndex === 0 ? 'opacity-100' : 'opacity-60'}`}>
                    <div className="text-[10px] text-gold-400 font-semibold px-2">
                      Immediate Booking Confirmation
                    </div>
                    <div className="bg-[#1C1C1E] text-slate-100 p-3.5 rounded-2xl rounded-tl-sm text-xs leading-relaxed border border-white/10 shadow-md">
                      {formatText(SMS_TEMPLATES.confirmation.body)}
                    </div>
                    <div className="text-[9px] text-slate-400 px-2 flex items-center gap-1">
                      <span>Delivered via Stripe/Square Webhook</span>
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                  </div>

                  {/* 24-Hour Reminder Bubble */}
                  <div className={`space-y-1 transition-opacity duration-300 ${activeMessageIndex === 1 ? 'opacity-100' : 'opacity-60'}`}>
                    <div className="text-[10px] text-gold-400 font-semibold px-2">
                      24-Hour Automated Reminder
                    </div>
                    <div className="bg-[#1C1C1E] text-slate-100 p-3.5 rounded-2xl rounded-tl-sm text-xs leading-relaxed border border-gold-500/20 shadow-md">
                      {formatText(SMS_TEMPLATES.reminder.body)}
                    </div>
                    <div className="text-[9px] text-slate-400 px-2 flex items-center gap-1">
                      <span>Scheduled 24h Prior to Driveway Arrival</span>
                      <Check className="w-3 h-3 text-emerald-400" />
                    </div>
                  </div>

                </div>

                {/* Simulated Input Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center gap-2">
                  <div className="flex-1 py-1.5 px-3 rounded-full bg-[#1C1C1E] text-slate-400 text-[11px] border border-white/10">
                    Text Message &bull; iMessage
                  </div>
                  <div className="w-7 h-7 rounded-full bg-gold-500 text-obsidian-950 flex items-center justify-center">
                    <Send className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AutomatedSmsPreview;
