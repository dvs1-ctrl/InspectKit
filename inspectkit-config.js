// InspectKit Configuration File
// Swap this file to rebrand the entire system for a different inspector client.
// Do not modify inspectkit-capture.html or inspectkit-renderer.html — only this file.

const INSPECTKIT_CONFIG = {
  // ─── Brand ───────────────────────────────────────────────────────────────
  companyName: "InspectKit",
  companyTagline: "Inspection Management System",
  logoType: "roofline-grid", // "roofline-grid" | "image" (future)

  // Ocean Dark palette
  primaryColor: "#0F1923",       // deep navy — primary background
  primaryTextDark: "#F4F6F8",    // near white — text on dark
  accentColor: "#4AACF0",        // sky blue — accent / highlight
  gridInactiveColor: "#1E3A5F",  // dark blue — inactive grid cells on dark
  descriptorColor: "#3A6080",    // muted blue — descriptor text
  lightBackground: "#F4F6F8",    // off-white — report body pages
  darkTextOnLight: "#0F1923",    // deep navy — text on light
  accentOnLight: "#2176AE",      // deeper blue — accent on light / print
  secondaryTextOnLight: "#8AAABF", // muted blue-grey — secondary on light
  borderColor: "#C8D8E8",        // light blue-grey — borders and rules

  // ─── Inspector Credentials ───────────────────────────────────────────────
  inspectorName: "BIG SNOOP DOG",
  inspectorLBP: "LBP 420420420",
  inspectorQualifications: "Bachelor of Barks & Bombs",
  inspectorBio: "13 years in the game, expert duck herder & sun chaser",
  inspectorPhone: "021420420",
  inspectorEmail: "snoop@inspectkit.nz",
  inspectorCompany: "InspectKit",
  inspectorPhotoPlaceholder: true, // set false if inspector photo supplied

  // ─── Report Numbering ────────────────────────────────────────────────────
  reportPrefix: "IK",
  // Auto-generates as PREFIX-YYYYMMDD-NNN
  // e.g. IK-20260527-001
  // Sequence resets to 001 each calendar day
  // Stored in localStorage key: `inspectkit_seq_YYYYMMDD`

  // ─── Equipment ───────────────────────────────────────────────────────────
  moistureMeterModel: "Trotec T660",
  moistureMeterScale: "0–60 Dry / 61–80 Damp / 81+ Wet",
  moistureMeterDryMax: 60,
  moistureMeterDampMax: 80,
  floorLevelTool: "Technidea Ziplevel Pro-2000",
  floorLevelGuidelineRef: "MBIE Acceptable Solutions B1/AS1",

  // ─── Legal ───────────────────────────────────────────────────────────────
  liabilityCapMultiplier: 4,     // liability cap = inspection fee × this
  disputeWindowDays: 30,         // calendar days post-settlement
  jurisdiction: "New Zealand",
  governingCourt: "New Zealand courts",

  // ─── Standards Referenced ────────────────────────────────────────────────
  inspectionStandard: "NZS 4306:2005",
  buildingAct: "Building Act 2004",
  hswaAct: "Health and Safety at Work Act 2015",
  privacyAct: "Privacy Act 2020",
  cgaAct: "Consumer Guarantees Act 1993",
  cclAct: "Contract and Commercial Law Act 2017",

  // ─── Weathertightness Scoring ────────────────────────────────────────────
  // BRANZ-based 0–18 scored methodology
  weathertightnessFactors: {
    windZone: {
      label: "Wind Zone (NZS 3604)",
      options: [
        { label: "Low", points: 0 },
        { label: "Medium", points: 1 },
        { label: "High", points: 2 },
        { label: "Very High", points: 3 },
      ]
    },
    storeys: {
      label: "Number of Storeys",
      options: [
        { label: "Single storey", points: 0 },
        { label: "Two storeys", points: 1 },
        { label: "Three or more storeys", points: 2 },
      ]
    },
    roofWallIntersection: {
      label: "Roof / Wall Intersection Design",
      options: [
        { label: "Simple (low risk)", points: 0 },
        { label: "Moderate complexity", points: 1 },
        { label: "Complex (high risk)", points: 2 },
      ]
    },
    eavesWidth: {
      label: "Eaves Width",
      options: [
        { label: "Wide (600mm or more)", points: 0 },
        { label: "Moderate (200–599mm)", points: 1 },
        { label: "Narrow or flush (less than 200mm)", points: 2 },
      ]
    },
    envelopeComplexity: {
      label: "Envelope Complexity",
      options: [
        { label: "Simple (low risk)", points: 0 },
        { label: "Moderate", points: 1 },
        { label: "Complex", points: 2 },
        { label: "Very complex (high risk)", points: 3 },
      ]
    },
    deckDesign: {
      label: "Deck Designs",
      options: [
        { label: "No decks", points: 0 },
        { label: "Deck present, low risk detail", points: 1 },
        { label: "Deck present, medium risk detail", points: 2 },
        { label: "Deck present, high risk detail", points: 3 },
      ]
    }
  },
  weathertightnessBands: [
    { label: "Low Risk",       min: 0,  max: 4  },
    { label: "Medium Risk",    min: 5,  max: 9  },
    { label: "High Risk",      min: 10, max: 14 },
    { label: "Very High Risk", min: 15, max: 18 },
  ],

  // ─── NZS 4306:2005 Access Minimums ───────────────────────────────────────
  subfloorOpeningMinWidth: 500,   // mm
  subfloorOpeningMinHeight: 400,  // mm
  subfloorClearanceTimber: 400,   // mm vertical for timber floors
  subfloorClearanceConcrete: 500, // mm vertical for concrete floors
  ladderMaxHeight: 3600,          // mm (3.6m HSWA limit)
  ladderMaxRunsAboveSoffit: 3,

  // ─── Condition Ratings ───────────────────────────────────────────────────
  ratings: [
    {
      code: "G",
      label: "Good",
      color: "#27AE60",
      textColor: "#fff",
      definition: "Performing as intended. Condition expected for age and type. No action required."
    },
    {
      code: "M",
      label: "Maintenance",
      color: "#E8A020",
      textColor: "#fff",
      definition: "Functional but requires routine maintenance to prevent further deterioration. Plan and budget. No urgency."
    },
    {
      code: "R",
      label: "Repair",
      color: "#C0392B",
      textColor: "#fff",
      definition: "Not performing as intended or defect present. Repair or replacement recommended prior to or shortly after settlement."
    },
    {
      code: "X",
      label: "Investigate",
      color: "#8E44AD",
      textColor: "#fff",
      definition: "Cannot be fully assessed by visual inspection or concern warrants specialist investigation before proceeding unconditionally."
    },
    {
      code: "NA",
      label: "N/A",
      color: "#95A5A6",
      textColor: "#fff",
      definition: "Element not present or not within scope at this property."
    }
  ],

  // ─── Section States ───────────────────────────────────────────────────────
  sectionStates: [
    { code: "inspected",    label: "Inspected",           icon: "✓" },
    { code: "partial",      label: "Partially Inspected", icon: "~" },
    { code: "not_inspected",label: "Not Inspected",       icon: "✕" },
    { code: "not_applicable",label: "Not Applicable",     icon: "N/A" },
    { code: "not_started",  label: "Not Started",         icon: "○" },
  ],

  // ─── Access Limitation Reasons ────────────────────────────────────────────
  accessLimitationReasons: [
    "Insufficient clearance",
    "No access hatch present",
    "Access hatch too small",
    "Obstructed by stored items",
    "Unsafe to enter",
    "Owner or agent refused access",
    "Weather conditions prevented assessment",
    "Other (specify)"
  ],

  // ─── Specialist Referral Types ────────────────────────────────────────────
  specialistReferrals: [
    "Structural engineer",
    "Licensed electrician",
    "Licensed plumber or gasfitter",
    "Weathertightness specialist",
    "Geotechnical engineer",
    "Asbestos surveyor",
    "Thermographer",
    "Pest and timber borer specialist",
    "LIM review and council records",
    "Other (specify)"
  ],

  // ─── Default Room List ────────────────────────────────────────────────────
  defaultRooms: [
    { id: "living",      name: "Living / Lounge",  type: "living",   active: true,  wetArea: false },
    { id: "kitchen",     name: "Kitchen",           type: "kitchen",  active: true,  wetArea: true  },
    { id: "master",      name: "Master Bedroom",    type: "bedroom",  active: true,  wetArea: false },
    { id: "bedroom2",    name: "Bedroom 2",         type: "bedroom",  active: true,  wetArea: false },
    { id: "bedroom3",    name: "Bedroom 3",         type: "bedroom",  active: true,  wetArea: false },
    { id: "bathroom",    name: "Bathroom",          type: "bathroom", active: true,  wetArea: true  },
    { id: "laundry",     name: "Laundry",           type: "laundry",  active: true,  wetArea: true  },
    { id: "hallway",     name: "Hallway and Stairs",type: "hallway",  active: true,  wetArea: false },
    { id: "garage",      name: "Garage",            type: "garage",   active: false, wetArea: false },
    { id: "ensuite",     name: "Ensuite",           type: "bathroom", active: false, wetArea: true  },
    { id: "toilet2",     name: "Second Toilet",     type: "bathroom", active: false, wetArea: true  },
    { id: "dining",      name: "Dining Room",       type: "living",   active: false, wetArea: false },
    { id: "study",       name: "Study / Office",    type: "living",   active: false, wetArea: false },
  ],

  // ─── Branding ─────────────────────────────────────────────────────────────
  showInspectKitCredit: true,
  creditText: "Generated by InspectKit — Inspection Management System",
};

// ─── Report Number Generator ──────────────────────────────────────────────────
// Call INSPECTKIT_CONFIG.generateReportNumber() to get the next number.
// Stores sequence in localStorage per day. Resets at midnight automatically.
INSPECTKIT_CONFIG.generateReportNumber = function() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const dateStr = `${y}${m}${d}`;
  const storageKey = `inspectkit_seq_${dateStr}`;
  let seq = parseInt(localStorage.getItem(storageKey) || "0", 10) + 1;
  localStorage.setItem(storageKey, String(seq));
  const seqStr = String(seq).padStart(3, "0");
  return `${this.reportPrefix}-${dateStr}-${seqStr}`;
};

// Get the current date as YYYY-MM-DD for display
INSPECTKIT_CONFIG.todayDisplay = function() {
  const now = new Date();
  return now.toLocaleDateString("en-NZ", { day: "2-digit", month: "long", year: "numeric" });
};
