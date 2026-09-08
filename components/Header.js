"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Wrench,
  MapPin,
} from "lucide-react";
import { services } from "@/data/services";
import { site } from "@/data/site";
import Image from "next/image";
import logo from "../public/images/logo.webp";
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      {/* Top strip */}
      <div className="hidden bg-brand-950 text-white lg:block ">
        <div className="container-x flex items-center justify-between py-2 text-xs">
          <div className="flex items-center gap-1.5">
            <MapPin size={14} className="text-accent-500" />
            <span className="animate-pulse">Serving {site.serviceAreas.join(", ")}</span>
          </div>
          <div className="flex items-center gap-4 animate-pulse">
            <span>Same-Day Doorstep Service</span>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 font-semibold text-accent-500 hover:text-accent-400"
            >
              <Phone size={14} /> {site.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-x flex items-center justify-between py-3">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-10 w-50 items-center justify-center rounded-xl  text-white">
            {/* <Wrench size={20} /> */}
            <Image
              key={logo}
              src={logo}
              alt="Yaman Appliances"
              width={62}
              height={60}
              className=" w-full rounded-full object-cover"
            />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-extrabold text-brand-950">
              Yaman Appliances
            </span>
            <span className="block text-[11px] font-medium uppercase tracking-wide text-slate-500">
              {site.city} Appliance Repair
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className="text-sm font-semibold text-slate-700 hover:text-brand-600"
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-600">
              Services <ChevronDown size={16} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-cardHover">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 hover:bg-brand-50 hover:text-brand-700"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/blog"
            className="text-sm font-semibold text-slate-700 hover:text-brand-600"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-sm font-semibold text-slate-700 hover:text-brand-600"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-outline">
            <Phone size={16} /> Call Now
          </a>
          <Link href="/#book" className="btn-primary">
            Book a Service
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-6 pt-2 lg:hidden">
          <Link
            href="/"
            className="block py-2.5 text-sm font-semibold text-slate-700"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          <button
            className="flex w-full items-center justify-between py-2.5 text-sm font-semibold text-slate-700"
            onClick={() => setMobileServicesOpen((v) => !v)}
          >
            Services
            <ChevronDown
              size={16}
              className={mobileServicesOpen ? "rotate-180 transition" : "transition"}
            />
          </button>
          {mobileServicesOpen && (
            <div className="grid grid-cols-1 gap-0.5 border-l-2 border-brand-100 pl-3">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="py-2 text-sm text-slate-600"
                  onClick={() => setMobileOpen(false)}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/blog"
            className="block py-2.5 text-sm font-semibold text-slate-700"
            onClick={() => setMobileOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2.5 text-sm font-semibold text-slate-700"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>

          <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="btn-primary mt-3 w-full">
            <Phone size={16} /> Call {site.phoneDisplay}
          </a>
        </div>
      )}
    </header>
  );
}
