// Central services data file.
// Edit / add services here — every page (home, services grid, service detail)
// pulls from this single source of truth.

export const services = [
  {
    slug: "ac-repair",
    name: "AC Repair Service",
    icon: "AirVent",
    shortDesc: "Split & window AC gas refill, servicing and repair at your doorstep.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=AC+Repair",
    description:
      "Our certified technicians handle all major AC brands for cooling issues, gas leakage, water leakage, noise problems, PCB faults and general servicing. Same-day doorstep visits available across Delhi NCR.",
    commonIssues: [
      "AC not cooling properly",
      "Gas leakage / low gas",
      "Water leaking from indoor unit",
      "Unusual noise or vibration",
      "Remote / PCB not working",
      "General servicing & deep cleaning",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "AC General Service (Split)", price: "₹499 onwards" },
      { item: "AC General Service (Window)", price: "₹449 onwards" },
      { item: "Gas Refilling (Split, R32/R410)", price: "₹1,999 onwards" },
      { item: "Jet / Deep Cleaning", price: "₹699 onwards" },
      { item: "PCB Repair", price: "₹899 onwards" },
      { item: "Compressor Replacement", price: "On inspection" },
    ],
  },
  {
    slug: "tv-repair",
    name: "TV Repair Service",
    icon: "Tv",
    shortDesc: "LED, LCD & Smart TV screen, panel and sound issue repair.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=TV+Repair",
    description:
      "From dead panels to sound issues, software glitches to broken screens — our technicians repair all TV brands and sizes with genuine spare parts and warranty on repair.",
    commonIssues: [
      "TV not turning on",
      "No display / lines on screen",
      "No sound or distorted sound",
      "Smart TV apps not working",
      "Remote sensor issue",
      "Panel / backlight damage",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "Software / App Troubleshooting", price: "₹399 onwards" },
      { item: "Sound Issue Repair", price: "₹499 onwards" },
      { item: "Power Supply Board Repair", price: "₹799 onwards" },
      { item: "Panel Replacement", price: "On inspection" },
    ],
  },
  {
    slug: "air-cooler-repair",
    name: "Air Cooler Repair",
    icon: "Fan",
    shortDesc: "Motor, pump, cooling pad and swing issue repair for all cooler types.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=Cooler+Repair",
    description:
      "Desert, tower or personal air coolers — we fix motor, pump, cooling pad, swing and electrical issues quickly so your cooler is ready before the heat hits.",
    commonIssues: [
      "Motor not running",
      "Water pump not working",
      "Weak / no cooling air",
      "Swing not working",
      "Water leakage",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Service", price: "₹349 onwards" },
      { item: "Motor Repair / Replacement", price: "₹599 onwards" },
      { item: "Pump Replacement", price: "₹399 onwards" },
      { item: "Cooling Pad Replacement", price: "₹499 onwards (set)" },
    ],
  },
  {
    slug: "refrigerator-repair",
    name: "Refrigerator Repair",
    icon: "Refrigerator",
    shortDesc: "Single door, double door & side-by-side fridge repair & gas filling.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=Fridge+Repair",
    description:
      "Cooling issues, gas leakage, compressor noise, ice-maker faults — our technicians service all fridge brands with doorstep pickup for major repairs where needed.",
    commonIssues: [
      "Not cooling properly",
      "Gas leakage",
      "Compressor making noise",
      "Excess frost / ice build-up",
      "Water leakage",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Service", price: "₹449 onwards" },
      { item: "Gas Refilling", price: "₹1,799 onwards" },
      { item: "Compressor Replacement", price: "On inspection" },
      { item: "Thermostat / Sensor Repair", price: "₹599 onwards" },
    ],
  },
  {
    slug: "washing-machine-repair",
    name: "Washing Machine Repair",
    icon: "WashingMachine",
    shortDesc: "Front load, top load & semi-automatic washing machine repair.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=WM+Repair",
    description:
      "Drum not spinning, water not draining, motor issues or PCB faults — we service all washing machine brands and types across Delhi NCR.",
    commonIssues: [
      "Drum not spinning",
      "Water not draining",
      "Excess vibration / noise",
      "Not filling water",
      "Display / PCB error",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Service", price: "₹399 onwards" },
      { item: "Motor Repair", price: "₹699 onwards" },
      { item: "PCB Repair", price: "₹899 onwards" },
      { item: "Drum Bearing Replacement", price: "On inspection" },
    ],
  },
  {
    slug: "geyser-repair",
    name: "Geyser Repair",
    icon: "Flame",
    shortDesc: "Instant & storage geyser heating element and thermostat repair.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=Geyser+Repair",
    description:
      "No hot water, leakage or tripping issues — our technicians safely repair and service electric geysers of all capacities and brands.",
    commonIssues: [
      "Water not heating",
      "Water leakage",
      "Frequent tripping",
      "Thermostat not working",
      "Rusty / smelly water",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Service", price: "₹349 onwards" },
      { item: "Heating Element Replacement", price: "₹599 onwards" },
      { item: "Thermostat Replacement", price: "₹399 onwards" },
    ],
  },
  {
    slug: "kitchen-chimney-repair",
    name: "Kitchen Chimney Repair",
    icon: "Wind",
    shortDesc: "Chimney suction, motor and filter repair plus deep cleaning.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=Chimney+Repair",
    description:
      "Low suction, motor noise or grease build-up — we repair and deep-clean kitchen chimneys of all brands to restore full performance.",
    commonIssues: [
      "Low suction power",
      "Motor making noise",
      "Grease build-up",
      "Lights not working",
      "Auto-clean not working",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "Deep Cleaning Service", price: "₹599 onwards" },
      { item: "Motor Repair / Replacement", price: "₹899 onwards" },
      { item: "Filter Replacement", price: "₹499 onwards" },
    ],
  },
  {
    slug: "microwave-oven-repair",
    name: "Microwave Oven Repair",
    icon: "Microwave",
    shortDesc: "Convection, grill & solo microwave heating and turntable repair.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=Microwave+Repair",
    description:
      "Not heating, sparking, turntable not rotating or display faults — we repair all microwave oven types and brands with safety-checked spare parts.",
    commonIssues: [
      "Not heating food",
      "Sparking inside",
      "Turntable not rotating",
      "Display / keypad not working",
      "Door not closing properly",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Repair", price: "₹399 onwards" },
      { item: "Magnetron Replacement", price: "On inspection" },
      { item: "Turntable Motor Replacement", price: "₹499 onwards" },
    ],
  },
  {
    slug: "water-purifier-repair",
    name: "Water Purifier Repair",
    icon: "Droplets",
    shortDesc: "RO, UV & UF water purifier filter change and repair service.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=RO+Repair",
    description:
      "Slow water flow, bad taste, leakage or filter change — our technicians service and repair RO / UV / UF purifiers of all brands.",
    commonIssues: [
      "Slow / no water flow",
      "Bad taste or odour",
      "Leakage from unit",
      "Filter / membrane change due",
      "Motor / pump not working",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Service", price: "₹399 onwards" },
      { item: "RO Membrane Replacement", price: "₹899 onwards" },
      { item: "Filter Set Replacement", price: "₹599 onwards" },
    ],
  },
  {
    slug: "water-cooler-repair",
    name: "Water Cooler Repair",
    icon: "Snowflake",
    shortDesc: "Cooling coil, compressor and dispenser repair for water coolers.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=Water+Cooler",
    description:
      "Commercial and home water coolers serviced for cooling issues, leakage and compressor faults by trained technicians.",
    commonIssues: [
      "Not cooling",
      "Water leakage",
      "Compressor noise",
      "Dispenser tap issue",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Service", price: "₹449 onwards" },
      { item: "Gas Refilling", price: "₹1,499 onwards" },
      { item: "Compressor Replacement", price: "On inspection" },
    ],
  },
  {
    slug: "inverter-repair",
    name: "Inverter Repair",
    icon: "BatteryCharging",
    shortDesc: "Home inverter and battery backup, charging & sensor repair.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=Inverter+Repair",
    description:
      "Backup not lasting, charging issues or beeping alarms — we diagnose and repair home inverters and offer battery health check-ups.",
    commonIssues: [
      "Battery not charging",
      "Low backup time",
      "Continuous beeping",
      "Display / indicator issue",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Diagnosis & Repair", price: "₹399 onwards" },
      { item: "Battery Health Check", price: "₹249" },
      { item: "PCB / Card Replacement", price: "On inspection" },
    ],
  },
  {
    slug: "gas-stove-repair",
    name: "Gas Stove Repair",
    icon: "Flame",
    shortDesc: "Auto-ignition, burner and gas leakage repair for gas stoves.",
    image: "https://placehold.co/640x480/06aaf5/ffffff?text=Gas+Stove",
    description:
      "Ignition not working, burner flame issues or suspected gas leakage — our technicians repair and service gas stoves safely.",
    commonIssues: [
      "Auto-ignition not working",
      "Weak / yellow flame",
      "Gas smell / suspected leakage",
      "Knob not working",
    ],
    priceList: [
      { item: "Visiting / Inspection Charge", price: "₹149" },
      { item: "General Service (per burner)", price: "₹149 onwards" },
      { item: "Ignition Repair", price: "₹299 onwards" },
      { item: "Burner Replacement", price: "₹199 onwards" },
    ],
  },
];

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug);
}
