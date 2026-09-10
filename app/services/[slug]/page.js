// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { CheckCircle2, IndianRupee, ChevronRight, Phone } from "lucide-react";
// import { services, getServiceBySlug } from "@/data/services";
// import { ServiceIcon } from "@/components/IconMap";
// import LeadForm from "@/components/LeadForm";
// import { site } from "@/data/site";

// export function generateStaticParams() {
//   return services.map((s) => ({ slug: s.slug }));
// }

// export function generateMetadata({ params }) {
//   const service = getServiceBySlug(params.slug);
//   if (!service) return {};
//   return {
//     title: `${service.name} in ${site.city} | Book Online`,
//     description: `${service.shortDesc} Transparent pricing, verified technicians, same-day doorstep ${service.name.toLowerCase()} across ${site.city}.`,
//     alternates: { canonical: `/services/${service.slug}` },
//   };
// }

// export default function ServiceDetailPage({ params }) {
//   const service = getServiceBySlug(params.slug);
//   if (!service) notFound();

//   const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);

//   return (
//     <>
//       {/* Breadcrumb + hero */}
//       <div className="border-b border-slate-100 bg-brand-950">
//         <div className="container-x flex items-center gap-1.5 py-3 text-xs text-brand-300">
//           <Link href="/" className="hover:text-white">Home</Link>
//           <ChevronRight size={12} />
//           <Link href="/#services" className="hover:text-white">Services</Link>
//           <ChevronRight size={12} />
//           <span className="text-white">{service.name}</span>
//         </div>
//         <div className="container-x flex flex-col items-start gap-4 py-10 sm:flex-row sm:items-center">
//           <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-500 text-white">
//             <ServiceIcon name={service.icon} size={30} />
//           </span>
//           <div>
//             <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
//               {service.name}
//             </h1>
//             <p className="mt-1.5 max-w-2xl text-sm text-brand-200 sm:text-base">
//               {service.shortDesc}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="container-x grid grid-cols-1 gap-10 py-14 lg:grid-cols-3">
//         {/* Left: details */}
//         <div className="space-y-10 lg:col-span-2">
//           <div>
//             <h2 className="text-xl font-bold text-brand-950">Overview</h2>
//             <p className="mt-3 text-sm leading-relaxed text-slate-600">
//               {service.description}
//             </p>
//           </div>

//           <div>
//             <h2 className="text-xl font-bold text-brand-950">
//               Common Issues We Fix
//             </h2>
//             <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
//               {service.commonIssues.map((issue) => (
//                 <li
//                   key={issue}
//                   className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600"
//                 >
//                   <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
//                   {issue}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-xl font-bold text-brand-950">
//               {service.name} Price List
//             </h2>
//             <p className="mt-1 text-xs text-slate-400">
//               Indicative pricing — final cost depends on the exact issue and
//               parts required, confirmed after inspection.
//             </p>
//             <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-card">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-brand-950 text-white">
//                   <tr>
//                     <th className="px-5 py-3 font-semibold">Service Item</th>
//                     <th className="px-5 py-3 font-semibold">Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {service.priceList.map((row, i) => (
//                     <tr
//                       key={row.item}
//                       className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
//                     >
//                       <td className="px-5 py-3 text-slate-700">{row.item}</td>
//                       <td className="flex items-center gap-1 px-5 py-3 font-semibold text-brand-700">
//                         {!row.price.toLowerCase().includes("on") && (
//                           <IndianRupee size={13} />
//                         )}
//                         {row.price.replace("₹", "")}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           <div className="rounded-2xl bg-brand-950 p-6 text-white">
//             <p className="text-sm text-brand-200">
//               Need it fixed urgently? Skip the form and talk to us directly.
//             </p>
//             <a
//               href={`tel:${site.phone.replace(/\s/g, "")}`}
//               className="btn-primary mt-4"
//             >
//               <Phone size={16} /> Call {site.phoneDisplay}
//             </a>
//           </div>
//         </div>

//         {/* Right: sticky booking form */}
//         <div className="lg:col-span-1">
//           <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-cardHover">
//             <h3 className="text-lg font-bold text-brand-950">
//               Book {service.name}
//             </h3>
//             <p className="mt-1 text-xs text-slate-400">
//               Fill the form and we&apos;ll confirm your slot shortly.
//             </p>
//             <div className="mt-5">
//               <LeadForm presetService={service.name} compact />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related services */}
//       <div className="border-t border-slate-100 bg-slate-50 py-14">
//         <div className="container-x">
//           <h2 className="text-xl font-bold text-brand-950">
//             Other Services You May Need
//           </h2>
//           <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
//             {related.map((s) => (
//               <Link
//                 key={s.slug}
//                 href={`/services/${s.slug}`}
//                 className="card flex flex-col items-center gap-2 p-5 text-center"
//               >
//                 <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
//                   <ServiceIcon name={s.icon} size={20} />
//                 </span>
//                 <span className="text-xs font-bold text-brand-950">
//                   {s.name}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }



import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, IndianRupee, ChevronRight, Phone } from "lucide-react";
import { ServiceIcon } from "@/components/IconMap";
import LeadForm from "@/components/LeadForm";
import { site } from "@/data/site";

const SERVICES_API = "http://localhost:5000/api/consumerservices/getallservices";

// Shared fetch, reused by generateStaticParams / generateMetadata / the page
// itself — Next.js automatically dedupes identical fetch calls per request,
// so this hits the API only once per build/revalidate, not 3 times.
async function getServices() {
  try {
    const res = await fetch(SERVICES_API, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    const result = await res.json();
    return result?.success ? result.data : [];
  } catch (error) {
    console.error("Error fetching services:", error);
    return [];
  }
}

async function getServiceBySlug(slug) {
  const services = await getServices();
  return services.find((s) => s.slug === slug) || null;
}

// Common issues live in a separate endpoint, keyed by numeric service id.
async function getCommonIssues(serviceId) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/consumerservices/commonissues/${serviceId}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const result = await res.json();
    return result?.success ? result.data.map((row) => row.name) : [];
  } catch (error) {
    console.error("Error fetching common issues:", error);
    return [];
  }
}

// Price list also lives in its own endpoint, keyed by numeric service id.
// NOTE: current API data has duplicate rows per item name (older rows with
// price "0.00" and the real price stashed in `description`, newer rows with
// a proper `price`). This keeps only the most recently created row per item
// as a safety net — the real fix is cleaning up the duplicate rows in the DB.
async function getPriceList(serviceId) {
  try {
    const res = await fetch(
      `http://localhost:5000/api/consumerservices/servicetypes/${serviceId}`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return [];
    const result = await res.json();
    if (!result?.success) return [];

    const latestByName = new Map();
    for (const row of result.data) {
      const existing = latestByName.get(row.name);
      if (!existing || new Date(row.created_at) > new Date(existing.created_at)) {
        latestByName.set(row.name, row);
      }
    }

    return Array.from(latestByName.values()).map((row) => {
      const numericPrice = Number(row.price);
      const price =
        numericPrice > 0 ? `₹${numericPrice}` : `₹${row.description}`;
      return { item: row.name, price };
    });
  } catch (error) {
    console.error("Error fetching price list:", error);
    return [];
  }
}

// SSG — pre-renders a real static HTML page per service at build time.
// This is what gives you perfect SEO: no client-side loading state,
// full content + meta tags present in the very first response.
export async function generateStaticParams() {
  const services = await getServices();
  return services.map((s) => ({ slug: s.slug }));
}

// A service added in the DB after the last build still resolves —
// Next.js renders it on first request and caches the result (no 404).
export const dynamicParams = true;

export async function generateMetadata({ params }) {
  const service = await getServiceBySlug(params.slug);
  if (!service) return {};
  return {
    title: `${service.name} in ${site.city} | Book Online`,
    description: `${service.shortdesc} Transparent pricing, verified technicians, same-day doorstep ${service.name.toLowerCase()} across ${site.city}.`,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({ params }) {
  const [service, allServices] = await Promise.all([
    getServiceBySlug(params.slug),
    getServices(),
  ]);

  // Real 404 (not a soft-404) when the slug doesn't exist in the API —
  // important so Google doesn't index broken/removed service pages.
  if (!service) notFound();

  const related = allServices
    .filter((s) => s.slug !== service.slug)
    .slice(0, 4);

  // service.id is assumed to be the numeric id the commonissues/servicetypes
  // endpoints expect — confirm against your real getallservices response and
  // change `service.id` below if the field is actually named differently
  // (e.g. service.service_id).
  const [commonIssues, priceList] = await Promise.all([
    getCommonIssues(service.id),
    getPriceList(service.id),
  ]);

  return (
    <>
      {/* Breadcrumb + hero */}
      <div className="border-b border-slate-100 bg-brand-950">
        <div className="container-x flex items-center gap-1.5 py-3 text-xs text-brand-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight size={12} />
          <Link href="/#services" className="hover:text-white">Services</Link>
          <ChevronRight size={12} />
          <span className="text-white">{service.name}</span>
        </div>
        <div className="container-x flex flex-col items-start gap-4 py-10 sm:flex-row sm:items-center">
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-500 text-white">
            <ServiceIcon name={service.icon} size={30} />
          </span>
          <div>
            <h1 className="text-2xl font-extrabold text-white sm:text-3xl">
              {service.name}
            </h1>
            <p className="mt-1.5 max-w-2xl text-sm text-brand-200 sm:text-base">
              {service.shortdesc}
            </p>
          </div>
        </div>
      </div>

      <div className="container-x grid grid-cols-1 gap-10 py-14 lg:grid-cols-3">
        {/* Left: details */}
        <div className="space-y-10 lg:col-span-2">
          <div>
            <h2 className="text-xl font-bold text-brand-950">Overview</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              {service.description}
            </p>
          </div>

          {commonIssues.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-brand-950">
                Common Issues We Fix
              </h2>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {commonIssues.map((issue) => (
                  <li
                    key={issue}
                    className="flex items-start gap-2 rounded-xl bg-slate-50 p-3 text-sm text-slate-600"
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-600" />
                    {issue}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {priceList.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-brand-950">
                {service.name} Price List
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Indicative pricing — final cost depends on the exact issue and
                parts required, confirmed after inspection.
              </p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100 shadow-card">
                <table className="w-full text-left text-sm">
                  <thead className="bg-brand-950 text-white">
                    <tr>
                      <th className="px-5 py-3 font-semibold">Service Item</th>
                      <th className="px-5 py-3 font-semibold">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceList.map((row, i) => (
                      <tr
                        key={row.item}
                        className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                      >
                        <td className="px-5 py-3 text-slate-700">{row.item}</td>
                        <td className="flex items-center gap-1 px-5 py-3 font-semibold text-brand-700">
                          {!row.price.toLowerCase().includes("on") && (
                            <IndianRupee size={13} />
                          )}
                          {row.price.replace("₹", "")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div className="rounded-2xl bg-brand-950 p-6 text-white">
            <p className="text-sm text-brand-200">
              Need it fixed urgently? Skip the form and talk to us directly.
            </p>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="btn-primary mt-4"
            >
              <Phone size={16} /> Call {site.phoneDisplay}
            </a>
          </div>
        </div>

        {/* Right: sticky booking form */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-2xl border border-slate-100 bg-white p-6 shadow-cardHover">
            <h3 className="text-lg font-bold text-brand-950">
              Book {service.name}
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Fill the form and we&apos;ll confirm your slot shortly.
            </p>
            <div className="mt-5">
              <LeadForm presetService={service.name} compact />
            </div>
          </div>
        </div>
      </div>

      {/* Related services */}
      <div className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="container-x">
          <h2 className="text-xl font-bold text-brand-950">
            Other Services You May Need
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {related.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="card flex flex-col items-center gap-2 p-5 text-center"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                  <ServiceIcon name={s.icon} size={20} />
                </span>
                <span className="text-xs font-bold text-brand-950">
                  {s.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}