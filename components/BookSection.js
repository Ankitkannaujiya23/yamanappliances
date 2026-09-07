import { Gift, PhoneCall } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { site } from "@/data/site";

export default function BookSection() {
  return (
    <section id="book" className="bg-brand-50 py-20">
      <div className="container-x grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-eyebrow">Get Quick Service</p>
          <h2 className="section-title">Book a Technician in Under a Minute</h2>
          <p className="mt-4 max-w-md text-slate-500">
            Fill in your details and our team will call to confirm your
            appointment — usually within a few minutes.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
            <Gift className="mt-0.5 shrink-0 text-accent-500" size={22} />
            <p className="text-sm text-slate-600">
              <span className="font-bold text-brand-950">Best Offer:</span>{" "}
              Get 3 coupons worth ₹150 on your first service booking!
            </p>
          </div>

          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="mt-6 flex w-fit items-center gap-2 text-sm font-bold text-brand-700 hover:text-brand-900"
          >
            <PhoneCall size={18} />
            Prefer to talk? Call {site.phoneDisplay}
          </a>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow-cardHover sm:p-8">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
