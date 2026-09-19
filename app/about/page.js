import Link from "next/link";
import Script from "next/script";
import { ChevronRight, ShieldCheck, Wrench, Clock, IndianRupee, MapPin, Phone } from "lucide-react";
import { ServiceIcon } from "@/components/IconMap";
import { site } from "@/data/site";
import { getServices } from "@/lib/api";

export const metadata = {
    title: `About Us | ${site.name}`,
    description: `Learn about ${site.name} — a doorstep home appliance repair service connecting you with trained technicians across ${site.serviceAreas.join(", ")}.`,
    alternates: { canonical: "/about" },
};

const values = [
    {
        icon: Wrench,
        title: "Trained Technicians",
        text: "Every repair request is handled by a technician trained on the specific appliance category you need serviced.",
    },
    {
        icon: IndianRupee,
        title: "Transparent Pricing",
        text: "Visiting charges and service pricing are shared upfront on every service page — no hidden costs after the visit.",
    },
    {
        icon: Clock,
        title: "Doorstep Convenience",
        text: "Book online and get a technician at your address, without needing to carry your appliance anywhere.",
    },
    {
        icon: ShieldCheck,
        title: "Wide Appliance Coverage",
        text: "From ACs and refrigerators to water purifiers and geysers, one platform covers most home appliance repair needs.",
    },
];

export default async function AboutUsPage() {
    const services = await getServices();

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: site.name,
        telephone: site.phone,
        email: site.email,
        areaServed: site.serviceAreas,
        sameAs: Object.values(site.social),
    };

    return (
        <>
            <Script
                id="about-us-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />

            {/* Breadcrumb + hero */}
            <div className="border-b border-slate-100 bg-brand-950">
                <div className="container-x flex items-center gap-1.5 py-3 text-xs text-brand-300">
                    <Link href="/" className="hover:text-white">Home</Link>
                    <ChevronRight size={12} />
                    <span className="text-white">About Us</span>
                </div>
                <div className="container-x py-14 text-center sm:py-16">
                    <p className="section-eyebrow text-brand-300">About {site.name}</p>
                    <h1 className="mx-auto max-w-2xl text-2xl font-extrabold text-white sm:text-4xl">
                        {site.tagline}
                    </h1>
                    <p className="mx-auto mt-4 max-w-xl text-sm text-brand-200 sm:text-base">
                        Connecting homes across {site.serviceAreas.join(", ")} with trained
                        appliance repair technicians — booked online, serviced at your door.
                    </p>
                </div>
            </div>

            {/* Who we are */}
            <div className="container-x py-16">
                <div className="mx-auto max-w-3xl">
                    <h2 className="text-xl font-bold text-brand-950 sm:text-2xl">Who We Are</h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                        {site.name} is a home appliance repair booking platform built to make
                        getting an appliance fixed simple: pick the appliance, describe the
                        issue, and book a technician visit online. We currently serve{" "}
                        {site.serviceAreas.join(", ")}, connecting customers with technicians
                        for common household appliances like air conditioners, refrigerators,
                        washing machines, water purifiers, geysers, and more.
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                        Every service on our platform lists its indicative pricing upfront, so
                        you know what a visit, inspection, or common repair typically costs
                        before a technician arrives — final pricing is confirmed after inspection.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="bg-slate-50 py-16">
                <div className="container-x">
                    <h2 className="text-center text-xl font-bold text-brand-950 sm:text-2xl">
                        Why Choose {site.name}
                    </h2>
                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map(({ icon: Icon, title, text }) => (
                            <div key={title} className="card flex flex-col items-center gap-3 p-6 text-center">
                                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                                    <Icon size={22} />
                                </span>
                                <h3 className="text-sm font-bold text-brand-950">{title}</h3>
                                <p className="text-xs leading-relaxed text-slate-500">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Services we cover */}
            {services.length > 0 && (
                <div className="container-x py-16">
                    <h2 className="text-center text-xl font-bold text-brand-950 sm:text-2xl">
                        Appliances We Service
                    </h2>
                    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                        {services.map((s) => (
                            <Link
                                key={s.id}
                                href={`/services/${s.slug}`}
                                className="card flex flex-col items-center gap-2 p-5 text-center"
                            >
                                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                                    <ServiceIcon name={s.icon} size={20} />
                                </span>
                                <span className="text-xs font-bold text-brand-950">{s.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            {/* Service areas */}
            <div className="bg-slate-50 py-16">
                <div className="container-x">
                    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                            <MapPin size={22} />
                        </span>
                        <h2 className="mt-4 text-xl font-bold text-brand-950 sm:text-2xl">
                            Where We Operate
                        </h2>
                        <p className="mt-3 text-[15px] text-slate-600">
                            We currently take bookings across {site.serviceAreas.join(", ")}.
                            Reach out and we&apos;ll confirm if your exact locality is covered.
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="container-x py-16">
                <div className="flex flex-col items-center gap-5 rounded-2xl bg-brand-950 px-6 py-12 text-center">
                    <h2 className="text-xl font-extrabold text-white sm:text-2xl">
                        Need an Appliance Repaired?
                    </h2>
                    <p className="max-w-lg text-sm text-brand-200 sm:text-base">
                        Book a technician online in a few steps, or call us directly to
                        discuss your appliance issue.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link href="/#book" className="btn-primary">
                            Book a Repair
                        </Link>
                        <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-secondary">
                            <Phone size={16} /> Call {site.phoneDisplay}
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}