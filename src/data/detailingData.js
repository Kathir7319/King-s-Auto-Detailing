export const COMPANY_INFO = {
  name: "King's Auto Detailing",
  tagline: "The Showroom Shine, Delivered to Your Cary Driveway.",
  phone: "(919) 413-6695",
  rawPhone: "9194136695",
  location: "Cary, NC 27519",
  primaryZip: "27519",
  email: "concierge@kingsautodetailing.com",
  hours: "Mon – Sat: 7:30 AM – 6:30 PM | Sun: By Appointment",
  depositAmount: 50,
  depositPolicy: "Deposits are fully refundable up to 24 hours prior to your scheduled mobile appointment window.",
  socialProof: {
    rating: "5.0",
    platform: "Facebook",
    countText: "100+ Local Cary Vehicles Perfected",
    badges: [
      "Carfax Registered Detailing Center",
      "100% Self-Contained Mobile Unit",
      "Deionized Spot-Free Water",
      "Fully Insured & Certified"
    ]
  }
};

export const PACKAGES = [
  {
    id: "express-wash",
    name: "Express Wash",
    tagline: "Weekly maintenance for luxury daily drivers.",
    price: "$120 - $180",
    minPrice: 120,
    maxPrice: 180,
    deposit: 50,
    duration: "1.5 – 2.0 Hours",
    popular: false,
    badge: "Maintenance Tier",
    included: [
      "100% Hand Wash with Microfiber Grit-Guards",
      "High-Foam PH-Neutral Snow Cannon Pre-Soak",
      "Non-Acid Wheel & Barrel Decontamination",
      "Full Interior High-Power Vacuum & Trunk Sweep",
      "Interior Dash, Console & Door Panel Wipe Down",
      "No-Sling Satin Finish Tire Dressing",
      "Streak-Free Interior & Exterior Window Clarity"
    ],
    bestFor: "Weekly maintenance for luxury daily drivers needing rapid, scratch-free upkeep without leaving the driveway.",
    recommendedFor: ["Sedans", "Daily Commuters", "Routine upkeep"]
  },
  {
    id: "full-interior-exterior",
    name: "Full Interior / Exterior",
    tagline: "Restoring a showroom look and deep-cleaning daily wear.",
    price: "$250 - $350",
    minPrice: 250,
    maxPrice: 350,
    deposit: 50,
    duration: "3.5 – 4.5 Hours",
    popular: true,
    badge: "Most Popular in Cary",
    included: [
      "Deep Interior Steam Clean (220°F Sanitizing Extraction)",
      "Premium Leather Conditioning with Matte OEM Finish",
      "Full Clay Bar Decontamination on All Painted Panels",
      "Chemical Iron Remover Fallout Bath",
      "6-Month High-Gloss Hydrophobic Synthetic Wax",
      "Carpet & Floor Mat Deep Agitation and Hot Water Extraction",
      "Door Jambs, Trunk Sills & Fuel Door Deep Detailing"
    ],
    bestFor: "Restoring a showroom look and deep-cleaning daily wear, family road trips, and seasonal refreshes.",
    recommendedFor: ["Family SUVs", "Luxury Cruisers", "Pre-Sale Prep"]
  },
  {
    id: "paint-correction",
    name: "Paint Correction",
    tagline: "Removing scratches and restoring deep, dark gloss.",
    price: "$450+",
    minPrice: 450,
    maxPrice: 650,
    deposit: 50,
    duration: "5.0 – 7.0 Hours",
    popular: false,
    badge: "Clarity Specialist",
    included: [
      "Single-Stage Machine Polish with Rupes Dual-Action Polishers",
      "Removes 60-70% of Swirls, Buffer Trails & Light Scratches",
      "Full Engine Bay Detail, Degrease & Dressing",
      "Multi-Phase Clay Bar + Iron Remover Chemical Decontamination",
      "12-Month Ceramic Polymer Shield Application",
      "Precision Paint Thickness Gauge Measurement",
      "Exhaust Tip Metal Polishing & Lens Deoxidation"
    ],
    bestFor: "Removing scratches and restoring deep, dark gloss on darker paints and vehicles with swirl marks from automated car washes.",
    recommendedFor: ["Black & Dark Metallic Cars", "Sports Cars", "Car Enthusiasts"]
  },
  {
    id: "ceramic-coating",
    name: "3-Year Ceramic Coating",
    tagline: "Ultimate long-term protection, hydrophobic shine, and resale value.",
    price: "$800 - $1,200",
    minPrice: 800,
    maxPrice: 1200,
    deposit: 50,
    duration: "Full Day / 8+ Hours",
    popular: false,
    badge: "Carfax Registered",
    included: [
      "Multi-Stage Paint Correction (Up to 90%+ Scratch & Swirl Removal)",
      "Professional Grade 9H Ceramic Shield on Paint, Glass & Wheels",
      "Official Carfax Service Record Registration (Boosts Resale Value)",
      "Intense Hydrophobic Self-Cleaning Properties & UV Protection",
      "Full Interior Cabin Detail with Leather & Fabric Shield",
      "Infrared Curing for Rock-Solid Bond & Extreme Depth",
      "Complimentary 1-Month Follow-Up Maintenance Inspection"
    ],
    bestFor: "Ultimate long-term protection, hydrophobic shine, and resale value on new vehicles, exotics, and prized investments.",
    recommendedFor: ["New Vehicle Purchases", "Luxury Exotics", "EVs & Performance Builds"]
  }
];

export const VEHICLE_SIZES = [
  { id: "sedan", name: "Coupe / Sedan", modifier: 1, example: "Tesla Model 3, Porsche 911, BMW 3/5 Series" },
  { id: "suv", name: "Mid-Size SUV / Wagon", modifier: 1.15, example: "BMW X5, Tesla Model Y, Audi Q7, Lexus RX" },
  { id: "truck", name: "Full-Size SUV / Truck / 3-Row", modifier: 1.3, example: "Ford F-150, Escalade, Tahoe, Rivian R1S" }
];

export const ADD_ONS = [
  { id: "pet-hair", name: "Heavy Pet Hair Removal", price: 45, duration: "30 min" },
  { id: "headlight-resto", name: "Headlight Oxidation Restoration & UV Seal", price: 75, duration: "45 min" },
  { id: "engine-bay", name: "Engine Bay Deep Degrease & Ceramic Dressing", price: 65, duration: "45 min" },
  { id: "leather-shield", name: "Ceramic Leather & Vinyl Coating", price: 120, duration: "1 hr" },
  { id: "glass-ceramic", name: "Windshield & Glass Hydrophobic Rain Repellent", price: 50, duration: "30 min" },
  { id: "ozone-odor", name: "Ozone Gas Sanitization & Smoke/Odor Treatment", price: 60, duration: "45 min" }
];

export const BEFORE_AFTER_CASES = [
  {
    id: "exterior",
    title: "Module 1: Exterior Paint Restoration",
    category: "Paint Correction & Ceramic Shield",
    vehicle: "Porsche 911 GT3 (Jet Black Metallic)",
    location: "Amberly Driveway, Cary",
    beforeDesc: "Heavily swirled, dull black paint under bright Cary sunlight with severe spiderwebbing from dealership automated brush washes.",
    afterDesc: "Mirror-like, scratch-free ceramic finish reflecting the clouds with razor-sharp gloss and 100% optical depth.",
    beforeImage: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Swirls Eliminated", value: "92%" },
      { label: "Gloss Units (GU)", value: "98.4 GU" },
      { label: "Protection", value: "3-Yr Ceramic" }
    ],
    restorationPoints: [
      "Multi-stage Rupes DA compound & micro-fine jewel finish",
      "Chemical iron fallout bath + ultra-fine clay treatment",
      "9H professional ceramic shield applied to paint and trim",
      "Hydrophobic water contact angle exceeding 110 degrees"
    ]
  },
  {
    id: "interior",
    title: "Module 2: Interior Cabin Rejuvenation",
    category: "Deep Interior Steam Extraction",
    vehicle: "BMW X5 M (Cognac & Cream Merino Leather)",
    location: "Preston Golf Community, Cary",
    beforeDesc: "Coffee-stained beige carpets, dusty worn leather with embedded body oils, and dried spills in cupholders and console creases.",
    afterDesc: "Pristine, steam-cleaned, matte-finish leather with deep vacuum lines and 100% neutralized factory fresh scent.",
    beforeImage: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Bacteria Sanitized", value: "99.9%" },
      { label: "Leather Luster", value: "OEM Matte" },
      { label: "Drying Time", value: "Zero Residue" }
    ],
    restorationPoints: [
      "220°F injected dry steam kills bacteria without oversaturating",
      "PH-balanced horsehair agitation on all perforated leather pores",
      "Deep carpet hot-water extraction removing set-in coffee stains",
      "Non-greasy UV matte protectant leaving zero sticky residue"
    ]
  },
  {
    id: "wheels",
    title: "Module 3: Wheel Decontamination & Caliper Gloss",
    category: "Chemical Fallout & Wheel Armor",
    vehicle: "Tesla Model S Plaid (21\" Arachnid Wheels)",
    location: "Downtown Morrisville, NC",
    beforeDesc: "Baked-on metallic European brake dust, road grime, and dull yellowed calipers caked in road film.",
    afterDesc: "Hyper-clean forged alloy barrels, deep satin tire dressing, and gleaming calipers sealed with heat-resistant ceramic.",
    beforeImage: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=1200&q=80",
    stats: [
      { label: "Brake Dust Removed", value: "100%" },
      { label: "Wheel Ceramic Shield", value: "1,200°F Rated" },
      { label: "Tire Dressing", value: "Dry-to-Touch" }
    ],
    restorationPoints: [
      "PH-neutral color-changing iron decon melts corrosive metal filings",
      "Lambswool barrel brushes clean back-side suspension and calipers",
      "High-temp wheel sealant wards off future brake dust bonding",
      "SiO2 infused tire nourishment prevents dry rot and browning"
    ]
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Pick Your Package & Time",
    description: "Choose the perfect detailing package and select a time that fits your busy schedule from our real-time calendar dashboard.",
    detail: "Choose between our Express Maintenance, Full Interior/Exterior transformation, Paint Correction, or 3-Year Ceramic Coating."
  },
  {
    step: "02",
    title: "Secure Your Appointment",
    description: "Put down a secure, fully refundable $50 deposit via Stripe or Square to lock in your professional mobile detailing team.",
    detail: "100% peace of mind: your deposit is fully refundable up to 24 hours prior to your scheduled mobile appointment."
  },
  {
    step: "03",
    title: "Enjoy the Showroom Finish",
    description: "We bring our fully self-powered mobile detailing unit straight to your home or office driveway. You don't lift a single finger.",
    detail: "Zero cords hooked to your house. Zero water used from your spigot. We arrive with 100 gallons of deionized filtered water and onboard quiet power."
  }
];

export const SERVICE_AREAS = [
  {
    town: "Cary",
    zipCodes: ["27519", "27511", "27513", "27518"],
    neighborhoods: ["Amberly", "Preston", "Twin Lakes", "Cary Park", "Carpenter Village", "Lochmere", "MacGregor Downs", "Highcroft"],
    badge: "Primary Base • 27519",
    active: true
  },
  {
    town: "Apex",
    zipCodes: ["27502", "27523", "27539"],
    neighborhoods: ["Bella Casa", "Sweetwater", "Woodcreek", "Abbington", "Dogwood Ridge", "Downtown Apex Historic"],
    badge: "Daily Coverage",
    active: true
  },
  {
    town: "Morrisville",
    zipCodes: ["27560"],
    neighborhoods: ["Kitts Creek", "Town Hall Commons", "Park West", "Davis Drive Corridor", "Perimeter Park"],
    badge: "Daily Coverage",
    active: true
  }
];

export const RIG_SPECS = [
  {
    title: "100% Spot-Free Deionized Water",
    desc: "We bring 100+ gallons of ultra-pure water with 0 PPM (parts per million) dissolved minerals. Your car dries without water spots even under full sun.",
    icon: "droplet"
  },
  {
    title: "Ultra-Quiet Inverter Power",
    desc: "Commercial-grade Honda EU-series inverter generator producing clean sine-wave electricity. Whisper quiet—your neighbors won't hear a rumble.",
    icon: "zap"
  },
  {
    title: "Hospital-Grade Steam Sanitizer",
    desc: "220°F pressurized dry-steam boilers eliminate 99.9% of bacteria, allergens, and odors from vents and deep upholstery without chemical odors.",
    icon: "flame"
  },
  {
    title: "Rupes BigFoot Dual-Action Polishers",
    desc: "Italian engineered precision polishers ensure hologram-free, swirl-free paint correction without risking burns to delicate clear coat.",
    icon: "shield"
  }
];

export const SMS_TEMPLATES = {
  confirmation: {
    title: "Immediate Booking Confirmation Text",
    description: "Dispatched automatically within 60 seconds of securing your $50 deposit.",
    body: "Hi [Client Name]! Your mobile detail with King's Auto Detailing is locked in for [Date] at [Time]. We received your deposit, and our master detailer is scheduled for your Cary/Apex location. See you soon!"
  },
  reminder: {
    title: "24-Hour Automated Reminder Text",
    description: "Sent the day prior to ensure clear driveway access and seamless arrival.",
    body: "Hi [Client Name], this is King's Auto Detailing. We are tracking on schedule for your mobile appointment tomorrow at [Time]. Please ensure your driveway or garage space is clear so we can pull our mobile rig right in. Get ready for that showroom shine!"
  }
};

export const REVIEWS = [
  {
    author: "Dr. Marcus Vance",
    location: "Preston, Cary (27519)",
    vehicle: "Porsche Panamera Turbo S",
    rating: 5,
    text: "King's Auto Detailing is hands down the best mobile experience in Cary. They pulled into my driveway while I took morning Zoom calls. By lunch, my Porsche had a mirror reflection that put the dealer delivery day to shame. The Carfax ceramic warranty registration gives huge peace of mind.",
    service: "3-Year Ceramic Coating"
  },
  {
    author: "Elena Rostova",
    location: "Amberly, Cary",
    vehicle: "Tesla Model X Plaid",
    rating: 5,
    text: "With two toddlers and two golden retrievers, our white interior was a disaster zone. The steam extraction pulled out stains I thought were permanent, and the leather feels brand new and matte. Plus, having their own water and power meant zero hassle for me.",
    service: "Full Interior / Exterior"
  },
  {
    author: "David Chen",
    location: "Bella Casa, Apex",
    vehicle: "BMW M3 Competition",
    rating: 5,
    text: "The paint correction on my Isle of Man Green M3 eliminated years of automatic car wash scratches. You can see the clouds reflecting like glass. The $50 deposit system was seamless, and the SMS updates kept me informed every step.",
    service: "Paint Correction"
  }
];

export const FAQS = [
  {
    q: "Do I need to supply water or electricity from my home?",
    a: "No! Our mobile detailing studio is 100% self-contained. We carry our own 100-gallon spot-free deionized water tank and quiet onboard Honda inverter generator. Whether you live in a single-family home or an office park, we never touch your utilities."
  },
  {
    q: "What is your $50 deposit policy?",
    a: "A fully refundable $50 deposit is required to reserve your date and time on our calendar. Your deposit is 100% refundable as long as you cancel or reschedule at least 24 hours prior to your scheduled mobile window."
  },
  {
    q: "How does the Carfax Registered Ceramic Coating work?",
    a: "When you book our 3-Year Ceramic Coating, our certified technicians document the vehicle VIN and record the professional application directly onto your official Carfax vehicle history report. This acts as verified proof of maintenance and helps preserve vehicle resale value."
  },
  {
    q: "What areas do you service?",
    a: "Our primary daily service route covers Cary (including Zip Code 27519), Apex, and Morrisville. We routinely detail in neighborhoods such as Amberly, Preston, Twin Lakes, Cary Park, Carpenter Village, Bella Casa, and Kitts Creek."
  },
  {
    q: "How long does a mobile detail take?",
    a: "Our Express Wash takes 1.5–2 hours, Full Interior/Exterior takes 3.5–4.5 hours, Paint Correction takes 5–7 hours, and our 3-Year Ceramic Coating takes a full day (8+ hours). You do not need to hover—feel free to work from home, relax, or run errands while we work."
  }
];
