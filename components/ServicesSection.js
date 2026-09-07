import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { ServiceIcon } from "@/components/IconMap";

export default function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">Our Services</p>
          <h2 className="section-title">
            Appliance Repair Services We Offer
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Select a service to see pricing details and book a technician —
            same-day doorstep visits available across Delhi NCR.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="card group flex flex-col items-center gap-3 p-6 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
                <ServiceIcon name={s.icon} size={26} />
              </span>
              <span className="text-sm font-bold text-brand-950">
                {s.name}
              </span>
              <span className="line-clamp-2 text-xs text-slate-500">
                {s.shortDesc}
              </span>
              <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent-500">
                View Pricing <ArrowRight size={12} />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
