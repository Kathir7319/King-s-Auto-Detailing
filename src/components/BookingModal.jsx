import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ShieldCheck, CreditCard, Car, MapPin, User, Phone, Mail, ArrowRight, ArrowLeft, Sparkles, AlertCircle } from 'lucide-react';
import { PACKAGES, VEHICLE_SIZES, ADD_ONS, COMPANY_INFO, SMS_TEMPLATES } from '../data/detailingData';

export const BookingModal = ({ isOpen, onClose, initialPackageId }) => {
  const [step, setStep] = useState(1); // 1: Package & Vehicle, 2: Date & Time, 3: Address & Info, 4: Deposit Checkout, 5: Success
  const [selectedPkgId, setSelectedPkgId] = useState(initialPackageId || 'full-interior-exterior');
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

  // Payment simulated state
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('stripe');

  useEffect(() => {
    if (initialPackageId) {
      setSelectedPkgId(initialPackageId);
    }
  }, [initialPackageId]);

  if (!isOpen) return null;

  const currentPkg = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[1];
  const vehicleObj = VEHICLE_SIZES.find((v) => v.id === selectedVehicle) || VEHICLE_SIZES[0];

  const estimatedBasePrice = Math.round(currentPkg.minPrice * vehicleObj.modifier);
  const addonsTotal = selectedAddons.reduce((acc, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);
  const grandEstimate = estimatedBasePrice + addonsTotal;
  const depositDueNow = COMPANY_INFO.depositAmount; // $50

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
      setStep(5); // Success step
    }, 1200);
  };

  const timeSlots = [
    { id: 'morning', time: '08:30 AM – 11:30 AM', label: 'Morning Slot (Popular)' },
    { id: 'midday', time: '12:00 PM – 03:00 PM', label: 'Mid-Day Slot' },
    { id: 'afternoon', time: '03:30 PM – 06:30 PM', label: 'Afternoon Sunset Slot' }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl rounded-3xl bg-obsidian-900 border border-gold-500/30 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 bg-obsidian-950 border-b border-gold-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="font-serif font-black text-sm tracking-wider gold-gradient-text uppercase">
              King's Mobile Detailing Concierge
            </span>
            <span className="text-slate-500 hidden sm:inline">&bull;</span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              Cary (27519), Apex & Morrisville
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        {step < 5 && (
          <div className="px-6 pt-4 pb-2 bg-obsidian-950/60 border-b border-white/5">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-400 mb-2">
              <span className={step >= 1 ? 'text-gold-400 font-bold' : ''}>1. Tier & Vehicle</span>
              <span className={step >= 2 ? 'text-gold-400 font-bold' : ''}>2. Date & Time</span>
              <span className={step >= 3 ? 'text-gold-400 font-bold' : ''}>3. Address</span>
              <span className={step >= 4 ? 'text-gold-400 font-bold' : ''}>4. $50 Deposit</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-gold-400 to-amber-500 h-full transition-all duration-300"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          
          {/* STEP 1: PACKAGE & VEHICLE */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Step 1: Choose Your Detailing Tier & Vehicle
                </h3>
                <p className="text-xs text-slate-400">
                  Select the package best suited for your vehicle. A fully refundable $50 deposit holds your slot.
                </p>
              </div>

              {/* Package cards picker */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-4 rounded-2xl text-left border transition-all relative ${
                      selectedPkgId === pkg.id
                        ? 'bg-gold-500/10 border-gold-400 ring-1 ring-gold-400'
                        : 'bg-obsidian-950/80 border-white/10 hover:border-gold-500/30 text-slate-300'
                    }`}
                  >
                    {pkg.popular && (
                      <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-black uppercase bg-gold-500 text-obsidian-950">
                        Popular
                      </span>
                    )}
                    <div className="font-bold text-white text-sm">{pkg.name}</div>
                    <div className="text-xs gold-gradient-text font-extrabold mt-0.5">
                      {pkg.price}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {pkg.tagline}
                    </div>
                  </button>
                ))}
              </div>

              {/* Vehicle Size Selector */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Vehicle Class / Size:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {VEHICLE_SIZES.map((size) => (
                    <button
                      key={size.id}
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

              {/* Add-ons toggle */}
              <div>
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                  Optional Add-Ons:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ADD_ONS.slice(0, 4).map((addon) => {
                    const isSelected = selectedAddons.includes(addon.id);
                    return (
                      <button
                        key={addon.id}
                        onClick={() => toggleAddon(addon.id)}
                        className={`p-2.5 rounded-xl border text-left text-xs flex items-center justify-between ${
                          isSelected
                            ? 'bg-gold-500/10 border-gold-400 text-white'
                            : 'bg-obsidian-950 border-white/5 text-slate-400'
                        }`}
                      >
                        <span>{addon.name}</span>
                        <span className="font-bold text-gold-400">
                          {isSelected ? '✓ Added' : `+$${addon.price}`}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Estimate Summary box */}
              <div className="p-4 rounded-2xl bg-obsidian-950 border border-gold-500/20 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400 block">Estimated Service Investment:</span>
                  <span className="text-2xl font-black gold-gradient-text">
                    ${grandEstimate}
                  </span>
                  <span className="text-[10px] text-slate-400 ml-1">
                    (Finalized on inspection)
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-slate-400 block">Due Today to Lock Date:</span>
                  <span className="text-lg font-black text-white">$50 (Refundable)</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: DATE & TIME */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Step 2: Choose Your Date & Arrival Window
                </h3>
                <p className="text-xs text-slate-400">
                  Select when our fully self-contained mobile detailing rig should arrive at your Cary, Apex, or Morrisville driveway.
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
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
                        Available in Cary
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-obsidian-950/60 border border-white/5 text-xs text-slate-400 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  Our mobile studio arrives self-contained with 100 gallons of spot-free pure deionized water and quiet onboard generators. You do not need to be outside waiting.
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: CLIENT DETAILS & DRIVEWAY LOCATION */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Step 3: Driveway Location & Vehicle Details
                </h3>
                <p className="text-xs text-slate-400">
                  Where should we pull our mobile detailing studio rig?
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Harris"
                    value={clientData.fullName}
                    onChange={(e) => setClientData({ ...clientData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Mobile Phone (For Dispatch SMS) *
                  </label>
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
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@gmail.com"
                    value={clientData.email}
                    onChange={(e) => setClientData({ ...clientData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Vehicle Year, Make & Model *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024 Porsche 911 / Tesla Model Y"
                    value={clientData.vehicleMakeModel}
                    onChange={(e) => setClientData({ ...clientData, vehicleMakeModel: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Driveway Street Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 104 Amberly Loop"
                  value={clientData.address}
                  onChange={(e) => setClientData({ ...clientData, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    City / Town
                  </label>
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
                  <label className="text-xs font-semibold text-slate-300 block mb-1">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    value={clientData.zipCode}
                    onChange={(e) => setClientData({ ...clientData, zipCode: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-300 block mb-1">
                  Driveway Notes / Gate Code (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Park on left side of driveway; gate code #4412"
                  value={clientData.notes}
                  onChange={(e) => setClientData({ ...clientData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs sm:text-sm focus:border-gold-400 focus:outline-none"
                />
              </div>
            </div>
          )}

          {/* STEP 4: $50 DEPOSIT CHECKOUT (STRIPE / SQUARE) */}
          {step === 4 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  Step 4: Lock In With Refundable $50 Deposit
                </h3>
                <p className="text-xs text-slate-400">
                  Secures your dedicated master detailer and mobile rig. Remaining balance is settled after the detail to your 100% satisfaction.
                </p>
              </div>

              {/* Order breakdown */}
              <div className="p-5 rounded-2xl bg-obsidian-950 border border-gold-500/25 space-y-3">
                <div className="flex justify-between items-center text-xs pb-3 border-b border-white/10">
                  <span className="text-white font-bold">{currentPkg.name}</span>
                  <span className="text-gold-400 font-extrabold">${estimatedBasePrice}</span>
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
                  <div className="text-2xl font-black text-gold-400">
                    $50.00
                  </div>
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
              <form onSubmit={handleCompleteDeposit} className="space-y-3">
                <div>
                  <label className="text-xs text-slate-400 block mb-1">Card Number</label>
                  <div className="flex items-center px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs">
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
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-400 block mb-1">CVC</label>
                    <input
                      type="text"
                      defaultValue="789"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-obsidian-950 border border-white/10 text-white text-xs font-mono"
                    />
                  </div>
                </div>

                {/* Deposit Policy Reminder */}
                <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20 text-xs text-gold-300">
                  <strong className="block mb-0.5">King's Deposit Policy:</strong>
                  {COMPANY_INFO.depositPolicy}
                </div>

                <button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-gold-400 via-amber-400 to-gold-500 text-obsidian-950 font-black text-base shadow-xl shadow-gold-500/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <span>Securing Your Cary Driveway Window...</span>
                  ) : (
                    <>
                      <ShieldCheck className="w-5 h-5 text-obsidian-950" />
                      <span>Authorize $50 Deposit & Confirm Slot</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          )}

          {/* STEP 5: BOOKING SUCCESS WITH AUTOMATED SMS PREVIEW */}
          {step === 5 && (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 mx-auto flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
                  Appointment Locked In!
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mt-1">
                  You're On The Schedule, {clientData.fullName || 'Valued Client'}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-2 max-w-md mx-auto">
                  Your $50 deposit has been processed. Our mobile studio is scheduled for your driveway on{' '}
                  <span className="text-gold-300 font-bold">{selectedDate} ({selectedTimeSlot})</span>.
                </p>
              </div>

              {/* Rendered Automated SMS Confirmation based on Section 7 copy */}
              <div className="max-w-md mx-auto text-left p-4 rounded-2xl bg-obsidian-950 border border-gold-500/30 shadow-xl">
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-2 mb-2 border-b border-white/10">
                  <span className="text-gold-400 font-bold">📲 Dispatched to {clientData.phone || COMPANY_INFO.phone}:</span>
                  <span>Instant SMS Confirmation</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-sans bg-[#1C1C1E] p-3 rounded-xl border border-white/5">
                  "Hi {clientData.fullName || 'Client'}! Your mobile detail with King's Auto Detailing is locked in for {selectedDate} at {selectedTimeSlot}. We received your deposit, and our master detailer is scheduled for your Cary/Apex location. See you soon!"
                </p>
                <div className="mt-2 text-[10px] text-slate-400">
                  Reminder text will follow automatically 24 hours prior to clear driveway access.
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-8 py-3 rounded-xl bg-gold-500 hover:bg-gold-400 text-obsidian-950 font-bold text-sm tracking-wide transition-colors"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Controls (Steps 1 to 4) */}
        {step < 5 && (
          <div className="px-6 py-4 bg-obsidian-950 border-t border-gold-500/20 flex items-center justify-between">
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </button>
            ) : (
              <div className="text-xs text-slate-400">
                100% Mobile Studio &bull; Cary, Apex, Morrisville
              </div>
            )}

            {step < 4 && (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-gold-500 to-amber-600 text-obsidian-950 font-bold text-xs sm:text-sm tracking-wide shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                <span>Continue to {step === 1 ? 'Date & Time' : step === 2 ? 'Address' : 'Deposit'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingModal;
