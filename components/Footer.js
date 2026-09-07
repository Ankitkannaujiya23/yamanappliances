import Link from "next/link";
import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Phone,
  Mail,
  MapPin,
  Wrench,
} from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-brand-100">
      <div className="container-x grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500 text-white">
              <Wrench size={20} />
            </span>
            <span className="text-lg font-extrabold text-white">
              Yaman Appliances
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-brand-200">
            Trusted doorstep repair for all major home appliances across{" "}
            {site.city}. Verified technicians, transparent pricing, fast
            service.
          </p>
          <div className="mt-5 flex gap-3">
            {[
              [Facebook, site.social.facebook],
              [Instagram, site.social.instagram],
              [Youtube, site.social.youtube],
              [Linkedin, site.social.linkedin],
            ].map(([Icon, href], i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-accent-500"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">
            Popular Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-200">
            {services.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="hover:text-accent-500">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-brand-200">
            <li>
              <Link href="/" className="hover:text-accent-500">Home</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-accent-500">Blog</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-500">Contact Us</Link>
            </li>
            <li>
              <Link href="/#why-choose-us" className="hover:text-accent-500">Why Choose Us</Link>
            </li>
            <li>
              <Link href="/#testimonials" className="hover:text-accent-500">Testimonials</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wide text-white">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-brand-200">
            <li className="flex items-start gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-accent-500" />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-accent-500">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-accent-500" />
              <a href={`mailto:${site.email}`} className="hover:text-accent-500">
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent-500" />
              <span>{site.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-x flex flex-col items-center justify-between gap-2 text-xs text-brand-300 sm:flex-row">
          <p>© {new Date().getFullYear()} Consumer Service Centre. All rights reserved.</p>
          <p>
            We are an independent service provider and not affiliated with
            any appliance brand manufacturer.
          </p>
        </div>
      </div>
    </footer>
  );
}
