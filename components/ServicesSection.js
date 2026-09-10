// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import { services } from "@/data/services";
// import { ServiceIcon } from "@/components/IconMap";

// export default function ServicesSection() {
//   return (
//     <section id="services" className="bg-slate-50 py-20">
//       <div className="container-x">
//         <div className="text-center">
//           <p className="section-eyebrow">Our Services</p>
//           <h2 className="section-title">
//             Appliance Repair Services We Offer
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-slate-500">
//             Select a service to see pricing details and book a technician —
//             same-day doorstep visits available across Delhi NCR.
//           </p>
//         </div>

//         <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//           {services.map((s) => (
//             <Link
//               key={s.slug}
//               href={`/services/${s.slug}`}
//               className="card group flex flex-col items-center gap-3 p-6 text-center"
//             >
//               <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
//                 <ServiceIcon name={s.icon} size={26} />
//               </span>
//               <span className="text-sm font-bold text-brand-950">
//                 {s.name}
//               </span>
//               <span className="line-clamp-2 text-xs text-slate-500">
//                 {s.shortDesc}
//               </span>
//               <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent-500">
//                 View Pricing <ArrowRight size={12} />
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ServiceIcon } from "@/components/IconMap";

// Server-side fetch — runs on the Next.js server (build time / revalidate),
// NOT in the browser. This is what makes the data show up in the initial
// HTML for SEO/crawlers, instead of loading after JS runs.
async function getServices() {
  try {
    const res = await fetch(
      "http://localhost:5000/api/consumerservices/getallservices",
      {
        // ISR: page is rebuilt in the background at most once every hour.
        // Good for SEO (still statically served) while staying reasonably fresh.
        // Change the number, or swap to `cache: "no-store"` if you need
        // every request to hit the API live (loses static generation).
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      console.error("Services API returned", res.status);
      return [];
    }

    const result = await res.json();
    return result?.success ? result.data : [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

// No "use client" here — this is an async Server Component.
export default async function ServicesSection() {
  const services = await getServices();

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

        {services.length === 0 ? (
          <p className="mt-12 text-center text-sm text-slate-400">
            Services will appear here shortly.
          </p>
        ) : (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.id}
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
                  {s.shortdesc}
                </span>

                <span className="mt-1 flex items-center gap-1 text-xs font-semibold text-accent-500">
                  View Pricing <ArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}