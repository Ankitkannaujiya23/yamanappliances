import { Phone, Mail, MapPin, Clock } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { site } from "@/data/site";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${site.name} for bookings, queries or partnership opportunities across ${site.city}.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <div className="bg-brand-950 py-14 text-center">
        <p className="section-eyebrow">Contact Us</p>
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          Get in Touch
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm text-brand-200">
          Questions, bookings or partnership enquiries — we&apos;re happy to help.
        </p>
      </div>

      <div className="container-x grid grid-cols-1 gap-10 py-16 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          <div className="card flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Phone size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-brand-950">Call Us</p>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-sm text-slate-500 hover:text-brand-600">
                {site.phoneDisplay}
              </a>
            </div>
          </div>

          <div className="card flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Mail size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-brand-950">Email Us</p>
              <a href={`mailto:${site.email}`} className="text-sm text-slate-500 hover:text-brand-600">
                {site.email}
              </a>
            </div>
          </div>

          <div className="card flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <MapPin size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-brand-950">Service Area</p>
              <p className="text-sm text-slate-500">{site.address}</p>
            </div>
          </div>

          <div className="card flex items-start gap-4 p-5">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Clock size={20} />
            </span>
            <div>
              <p className="text-sm font-bold text-brand-950">Working Hours</p>
              <p className="text-sm text-slate-500">Mon – Sun: 8:00 AM – 9:00 PM</p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-card" style={{ minHeight: "260px" }}>
            <iframe
              title="Our location"
              src={site.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "260px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-cardHover sm:p-8 lg:col-span-3">
          <h2 className="text-lg font-bold text-brand-950">Send Us a Message</h2>
          <p className="mt-1 text-xs text-slate-400">
            Fill in the details below and our team will get back to you shortly.
          </p>
          <div className="mt-6">
            <LeadForm />
          </div>
        </div>
      </div>
    </>
  );
}
