import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { PACKAGES, VEHICLE_SIZES, ADD_ONS, COMPANY_INFO, SMS_TEMPLATES } from '../data/detailingData';
import { Calendar, Clock, CreditCard, ShieldCheck, CheckCircle2, User, MapPin, Car, Phone, Mail, Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';

export const BookingPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const urlPackage = searchParams.get('package');
  const [step, setStep] = useState(1);
  const [selectedPkgId, setSelectedPkgId] = useState(urlPackage || 'full-interior-exterior');
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [selectedAddons, setSelectedAddons] = useState([]);
  
  // Date & Time
  const [selectedDate, setSelectedDate] = useState('2026-11-12');
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('09:00 AM');

  // Client Details
  const [clientData, setClientData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Cary',
    zipCode: '27519',
    vehicleMakeModel: '',
    notes: ''
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  useEffect(() => {
    if (urlPackage) {
      setSelectedPkgId(urlPackage);
    }
  }, [urlPackage]);

  const currentPkg = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[1];
  const vehicleObj = VEHICLE_SIZES.find((v) => v.id === selectedVehicle) || VEHICLE_SIZES[0];

  const estimatedBasePrice = Math.round(currentPkg.minPrice * vehicleObj.modifier);
  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);
  const grandEstimate = estimatedBasePrice + addonsTotal;

  const toggleAddon = (id) => {
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((item) => item !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  const handleCompleteDeposit = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(5);
    }, 1200);
  };

  const timeSlots = [
    { id: 'morning', time: '08:30 AM – 11:30 AM', label: 'Morning Slot (Popular in Cary)' },
    { id: 'midday', time: '12:00 PM – 03:00 PM', label: 'Mid-Day Lunch Slot' },
    { id: 'afternoon', time: '03:30 PM – 06:30 PM', label: 'Afternoon Sunset Slot' }
  ];

  return (
    <div className="bg-obsidian-950 text-slate-100 min-h-screen">
      {/* Banner */}
      <PageBanner
        title="Live Driveway Booking Calendar"
        subtitle="Select your tier, choose your arrival window, and lock in your master detailing team. A fully refundable $50 deposit holds your date."
        badge="Stripe & Square 256-Bit Encrypted"
        breadcrumb="Book Mobile Detail"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Step Indicator */}
        {step < 5 && (
          <div className="mb-8 p-4 rounded-2xl glass-panel border border-gold-500/20">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span className={step >= 1 ? 'text-gold-400 font-bold' : ''}>1. Tier & Vehicle</span>
              <span className={step >= 2 ? 'text-gold-400 font-bold' : ''}>2. Date & Time</span>
              <span className={step >= 3 ? 'text-gold-400 font-bold' : ''}>3. Address</span>
              <span className={step >= 4 ? 'text-gold-400 font-bold' : ''}>4. $50 Deposit</span>
            </div>
            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-gold-400 to-amber-500 h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Card Container */}
        <div className="p-6 sm:p-10 rounded-3xl glass-panel border border-gold-500/25 shadow-2xl">
          
          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Step 1: Choose Your Detailing Tier & Vehicle</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Select a tier below. Your refundable $50 deposit reserves your mobile studio.
                </p>
              </div>

              {/* Package cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-4 rounded-2xl text-left border transition-all relative ${
                      selectedPkgId === pkg.id
                        ? 'bg-gold-500/15 border-gold-400 ring-1 ring-gold-400'
                        : 'bg-obsidian-950/80 border-white/10 hover:border-gold-500/30 text-slate-300'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase bg-gold-500 text-obsidian-950">
                        Most Popular in Cary
                      </span>
                    )}
                    <div className="font-bold text-white text-base">{pkg.name}</div>
                    <div className="text-sm gold-gradient-text font-black mt-0.5">{pkg.price}</div>
                    <div className="text-xs text-slate-400 mt-1">{pkg.tagline}</div>
                  </button>
                ))}
              </div>

              {/* Vehicle Size */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Select Vehicle Class:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {VEHICLE_SIZES.map((size) => (
                    <button
                      key={size.id}
                      type="button"
                      onClick={() => setSelectedVehicle(size.id)}
                      className={`p-3 rounded-xl border text-center transition-all text-xs font-semibold ${
                        selectedVehicle === size.id
                          ? 'bg-gold-500 text-obsidian-950 font-bold border-gold-400'
                          : 'bg-obsidian-950 border-white/10 text-slate-300 hover:border-gold-500/30'
                      }`}
                    >
                      <div>{size.name}</div>
                      <div className="text-[10px] opacity-75 mt-0.5">{size.example.split(',')[0]}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Addons */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Popular Driveway Add-Ons:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ADD_ONS.map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-3 rounded-xl border text-left text-xs flex items-center justify-between ${
                          isSelected
                            ? 'bg-gold-500/10 border-gold-400 text-white'
                            : 'bg-obsidian-950 border-white/5 text-slate-400'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-white">{addon.name}</div>
                          <div className="text-[10px] text-slate-400">{addon.duration}</div>
                        </div>
                        <span className="font-bold text-gold-400">
                          {isSelected ? '✓ Added' : `+$${addon.price}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Pricing box */}
              <div className="p-5 rounded-2xl bg-obsidian-950 border border-gold-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-slate-400 block">Estimated Service Investment:</span>
                  <span className="text-3xl font-black gold-gradient-text">${grandEstimate}</span>
                  <span className="text-xs text-slate-400 block mt-0.5">(Includes on-site inspection)</span>
                </div>
                <div className="sm:text-right">
                  <span className="text-xs text-slate-400 block">Due Today to Reserve:</span>
                  <span className="text-2xl font-black text-white">$50.00</span>
                  <span className="text-[10px] text-emerald-400 block font-semibold">100% Refundable up to 24h prior</span>
                </div>
              </div>

              <div className="flex justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-sm tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Continue to Date & Time</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Step 2: Choose Your Date & Arrival Window</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Our fully self-powered mobile studio arrives at your Cary, Apex, or Morrisville driveway.
                </p>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Select Detailing Date:
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  min="2026-11-08"
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Select Arrival Window:
                </label>
                <div className="space-y-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot.time)}
                      className={`w-full p-4 rounded-xl border text-left flex items-center justify-between transition-all ${
                        selectedTimeSlot === slot.time
                          ? 'bg-gold-500/10 border-gold-400 text-white'
                          : 'bg-obsidian-950 border-white/5 text-slate-300 hover:border-gold-500/30'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gold-400" />
                        <div>
                          <div className="text-sm font-bold text-white">{slot.time}</div>
                          <div className="text-xs text-slate-400">{slot.label}</div>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
                        Available in Cary (27519)
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950 border border-white/5 text-xs text-slate-300 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Our Mobile Guarantee: 100 gallons of 0 PPM deionized water and quiet onboard inverter generator included. Zero house hookups needed.
                </span>
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Package</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-sm tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Continue to Driveway Address</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-white">Step 3: Driveway Location & Vehicle Details</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Where should we pull our mobile detailing studio rig?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Vance"
                    value={clientData.fullName}
                    onChange={(e) => setClientData({ ...clientData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Mobile Phone (For Dispatch SMS) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="(919) 000-0000"
                    value={clientData.phone}
                    onChange={(e) => setClientData({ ...clientData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="client@gmail.com"
                    value={clientData.email}
                    onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Vehicle Year, Make & Model *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024 Porsche 911 GT3 / BMW X5"
                    value={clientData.vehicleMakeModel}
                    onChange={(e) => setClientData({ ...clientData, vehicleMakeModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Driveway Street Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 102 Amberly Commons Lane"
                  value={clientData.address}
                  onChange={(e) => setClientData({ ...clientData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">City / Town</label>
                  <select
                    value={clientData.city}
                    onChange={(e) => setClientData({ ...clientData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  >
                    <option value="Cary">Cary, NC</option>
                    <option value="Apex">Apex, NC</option>
                    <option value="Morrisville">Morrisville, NC</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">Zip Code</label>
                  <input
                    type="text"
                    value={clientData.zipCode}
                    onChange={(e) => setClientData({ ...clientData, zipCode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">Driveway Notes / Gate Code (Optional)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Park on right side; community gate code #2241"
                  value={clientData.notes}
                  onChange={(e) => setClientData({ ...clientData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Time</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-sm tracking-wide shadow-lg hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                >
                  <span>Continue to $50 Deposit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white">Step 4: Lock In With Refundable $50 Deposit</h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Secures your dedicated master detailer and mobile rig. Remaining balance is settled after the detail to your 100% satisfaction.
                </p>
              </div>

              {/* Order breakdown */}
              <div className="p-6 rounded-2xl bg-obsidian-950 border border-gold-500/25 space-y-3">
                <div className="flex justify-between items-center text-sm pb-3 border-b border-white/10">
                  <span className="text-white font-bold">{currentPkg.name}</span>
                  <span className="text-gold-400 font-black">${estimatedBasePrice}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Driveway:</span>
                  <span className="text-slate-200">{clientData.address || 'Cary Driveway'}, {clientData.city} {clientData.zipCode}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Scheduled Arrival:</span>
                  <span className="text-slate-200">{selectedDate} &bull; {selectedTimeSlot}</span>
                </div>
                <div className="flex justify-between items-center text-xs text-slate-400">
                  <span>Mobile Water & Power:</span>
                  <span className="text-emerald-400 font-bold">100% Included (Self-Contained)</span>
                </div>
                <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">Deposit Due Right Now:</div>
                    <div className="text-[11px] text-emerald-400">100% Refundable up to 24h prior</div>
                  </div>
                  <div className="text-3xl font-black text-gold-400">$50.00</div>
                </div>
              </div>

              {/* Payment selector */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('stripe')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                    paymentMethod === 'stripe'
                      ? 'bg-gold-500/10 border-gold-400 text-gold-300'
                      : 'bg-obsidian-950 border-white/10 text-slate-400'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Stripe Instant Pay</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('square')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 ${
                    paymentMethod === 'square'
                      ? 'bg-gold-500/10 border-gold-400 text-gold-300'
                      : 'bg-obsidian-950 border-white/10 text-slate-400'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Square Pay / Apple Pay</span>
                </button>
              </div>

              {/* Simulated Card input */}
              <form onSubmit={handleCompleteDeposit} className="space-y-4">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Card Number</label>
                  <div className="flex items-center px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs">
                    <CreditCard className="w-4 h-4 text-slate-400 mr-2" />
                    <input
                      type="text"
                      defaultValue="•••• •••• •••• 4242"
                      className="bg-transparent w-full text-white focus:outline-none font-mono"
                    />
                    <span className="text-[11px] text-slate-500">VISA / MC</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">Expiry</label>
                    <input
                      type="text"
                      defaultValue="12/28"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">CVC</label>
                    <input
                      type="text"
                      defaultValue="789"
                      className="w-full px-4 py-3 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Deposit Policy Reminder */}
                <div className="p-3.5 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300">
                  <strong className="block mb-0.5">King's Deposit Policy:</strong>
                  {COMPANY_INFO.depositPolicy}
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Address</span>
                  </button>
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-sm tracking-wide shadow-xl hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
                  >
                    {isProcessing ? (
                      <span>Securing Your Driveway Window...</span>
                    ) : (
                      <>
                        <ShieldCheck className="w-4 h-4 text-obsidian-950" />
                        <span>Authorize $50 Deposit & Confirm Slot</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* STEP 5: SUCCESS */}
          {step === 5 && (
            <div className="text-center py-8 space-y-6">
              <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400 shadow-2xl shadow-emerald-500/20 animate-bounce">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Appointment Locked In!
                </span>
                <h3 className="text-3xl font-serif font-black text-white mt-1">
                  You're On The Master Schedule, {clientData.fullName || 'Valued Client'}!
                </h3>
                <p className="text-sm text-slate-300 mt-2 max-w-lg mx-auto">
                  Your $50 deposit has been processed. Our mobile studio is scheduled for your driveway on{' '}
                  <span className="text-gold-300 font-bold">{selectedDate} ({selectedTimeSlot})</span>.
                </p>
              </div>

              {/* Rendered Automated SMS Confirmation matching Section 7 */}
              <div className="max-w-lg mx-auto text-left p-5 rounded-2xl bg-obsidian-950 border border-gold-500/30 shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 mb-3 border-b border-white/10">
                  <span className="text-gold-400 font-bold">📲 Dispatched to {clientData.phone || COMPANY_INFO.phone}:</span>
                  <span>Instant SMS Confirmation</span>
                </div>
                <div className="bg-[#1C1C1E] p-4 rounded-xl border border-white/5 text-xs text-slate-100 font-sans leading-relaxed">
                  "Hi {clientData.fullName || 'Client'}! Your mobile detail with King's Auto Detailing is locked in for {selectedDate} at {selectedTimeSlot}. We received your deposit, and our master detailer is scheduled for your Cary/Apex location. See you soon!"
                </div>
                <div className="mt-3 text-[11px] text-slate-400">
                  Reminder text will follow automatically 24 hours prior to clear driveway access.
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => navigate('/')}
                  className="px-8 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-sm tracking-wide transition-colors"
                >
                  Return to Home Showroom
                </button>
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="px-6 py-3 rounded-xl bg-obsidian-900 border border-gold-500/30 text-gold-400 font-semibold text-sm hover:bg-obsidian-850"
                >
                  Call Master Detailer: {COMPANY_INFO.phone}
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

export default BookingPage;
