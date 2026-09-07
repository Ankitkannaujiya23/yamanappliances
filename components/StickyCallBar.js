import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { site } from "@/data/site";

export default function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex border-t border-slate-200 bg-white shadow-[0_-4px_16px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={`tel:${site.phone.replace(/\s/g, "")}`}
        className="flex flex-1 items-center justify-center gap-2 bg-brand-600 py-3.5 text-sm font-bold text-white"
      >
        <Phone size={16} /> Call Now
      </a>
      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-green-600 py-3.5 text-sm font-bold text-white"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
      <Link
        href="/#book"
        className="flex flex-1 items-center justify-center gap-2 bg-accent-500 py-3.5 text-sm font-bold text-white"
      >
        Book Service
      </Link>
    </div>
  );
}
