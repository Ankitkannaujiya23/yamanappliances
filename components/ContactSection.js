import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { site } from "@/data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container-x">
        <div className="text-center">
          <p className="section-eyebrow">Contact Us</p>
          <h2 className="section-title">We&apos;d Love to Hear From You</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Reach out for bookings, queries or partnership opportunities —
            our team responds quickly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-4">
            <div className="card flex items-start gap-4 p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                <Phone size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-brand-950">Call Us</p>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="text-sm text-slate-500 hover:text-brand-600"
                >
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
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-slate-500 hover:text-brand-600"
                >
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
                <p className="text-sm text-slate-500">
                  Mon – Sun: 8:00 AM – 9:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-card lg:col-span-3">
            <iframe
              title="Service area map"
              src={site.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
