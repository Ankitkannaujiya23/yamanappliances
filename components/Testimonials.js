import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand-950 py-20">
      <div className="container-x">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-accent-500">
            Testimonials
          </p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            What Our Customers Say
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <Quote className="text-accent-500" size={24} />
              <p className="mt-4 text-sm leading-relaxed text-brand-100">
                {t.text}
              </p>
              <div className="mt-5 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className={
                      idx < t.rating
                        ? "fill-accent-500 text-accent-500"
                        : "text-white/20"
                    }
                  />
                ))}
              </div>
              <div className="mt-3 border-t border-white/10 pt-3">
                <p className="text-sm font-bold text-white">{t.name}</p>
                <p className="text-xs text-brand-300">
                  {t.location} · {t.service}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
