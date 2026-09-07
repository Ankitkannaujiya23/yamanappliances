import {
  ShieldCheck,
  Eye,
  Layers,
  Award,
  IndianRupee,
  ListChecks,
} from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "100% Satisfaction",
    desc: "We do not just complete the job — if you're not satisfied, we do a free rework.",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Clear pricing shown before booking, at every step of the service — no hidden charges.",
  },
  {
    icon: Layers,
    title: "One-Stop Solution",
    desc: "All major appliance repairs under one roof, so you don't need to search elsewhere.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    desc: "Every repair is carried out by trained, background-verified technicians.",
  },
  {
    icon: IndianRupee,
    title: "Best at Fair Price",
    desc: "Quality service at honest, competitive pricing — no surprise add-ons.",
  },
  {
    icon: ListChecks,
    title: "Wide Range of Services",
    desc: "From cooling to kitchen appliances, we cover the repairs you need most.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">Why Choose Us</p>
          <h2 className="section-title">
            Built Around Customer Trust
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Our focus is meeting — and exceeding — customer expectations with
            fast, friendly and reliable doorstep service.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                <p.icon size={22} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-brand-950">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
