export const blogs = [
  {
    slug: "ac-not-cooling-reasons",
    title: "AC Not Cooling? 7 Common Reasons and Quick Fixes",
    excerpt:
      "Before you book a repair, check these common reasons your AC might not be cooling properly — from dirty filters to gas leaks.",
    image: "https://placehold.co/640x400/06aaf5/ffffff?text=AC+Blog",
    date: "2026-06-12",
    author: "Consumer Service Centre",
    content: `If your air conditioner has suddenly stopped cooling the way it used to, don't panic — most cooling issues come down to a handful of common causes.

Dirty air filters are the number one culprit. When filters clog up with dust, airflow drops and the unit struggles to cool the room. A simple filter clean every month during peak season solves this in most cases.

Low refrigerant (gas) levels are another frequent issue, usually caused by a slow leak in the copper piping. This needs a trained technician to locate the leak, seal it, and refill the gas to the correct pressure.

Other common causes include a faulty capacitor, blocked outdoor unit, dirty condenser coils, thermostat calibration issues, and blocked drainage causing the unit to shut down on safety mode.

If basic cleaning doesn't help, it's best to get a professional inspection rather than repeatedly running the AC on high settings, which can strain the compressor further.`,
  },
  {
    slug: "washing-machine-maintenance-tips",
    title: "5 Maintenance Tips to Extend Your Washing Machine's Life",
    excerpt:
      "Simple habits that reduce wear and tear on your washing machine and help you avoid frequent repair calls.",
    image: "https://placehold.co/640x400/06aaf5/ffffff?text=WM+Blog",
    date: "2026-05-28",
    author: "Consumer Service Centre",
    content: `A washing machine is one of the most used appliances at home, and a little care goes a long way in avoiding breakdowns.

Always load within the recommended capacity — overloading strains the motor and drum bearings. Leave the door or lid open after each wash to let moisture evaporate and prevent mould build-up, especially in front-load machines.

Clean the detergent drawer and door gasket weekly, and run a monthly hot-water cleaning cycle to clear detergent residue from the drum. Check hoses periodically for cracks or leaks, and make sure the machine is level on the floor to reduce vibration and noise.

Following these habits can significantly reduce the frequency of technician visits and extend the machine's working life.`,
  },
  {
    slug: "refrigerator-energy-saving-tips",
    title: "How to Make Your Refrigerator More Energy Efficient",
    excerpt:
      "Small changes in how you use your fridge can lower your electricity bill and reduce strain on the compressor.",
    image: "https://placehold.co/640x400/06aaf5/ffffff?text=Fridge+Blog",
    date: "2026-05-10",
    author: "Consumer Service Centre",
    content: `Refrigerators run 24x7, so small inefficiencies add up quickly on your electricity bill.

Keep the fridge away from direct sunlight and heat sources like the stove, and leave a gap behind it for proper air circulation. Avoid keeping the door open longer than necessary, and let hot food cool down before placing it inside.

Check the door seal regularly — a loose or damaged gasket lets cold air escape, forcing the compressor to work harder. Defrost regularly if you have a non-frost-free model, since excess ice build-up reduces cooling efficiency.

Setting the thermostat to a moderate level (rather than the coldest setting) is usually enough for home use and puts less strain on the compressor over time.`,
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug);
}
