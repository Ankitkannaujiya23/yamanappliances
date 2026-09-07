// "use client";

// import { useEffect, useState, useCallback } from "react";
// import Link from "next/link";
// import { ChevronLeft, ChevronRight, ShieldCheck, BadgeCheck, Clock3 } from "lucide-react";

// const slides = [
//   {
//     title: "Home Appliance Repair,",
//     highlight: "Right at Your Doorstep",
//     desc: "AC, TV, Refrigerator, Washing Machine and more — booked in minutes, fixed by verified technicians.",
//     bg: "from-brand-800 via-brand-700 to-brand-600",
//   },
//   {
//     title: "Same-Day Service,",
//     highlight: "Across Delhi NCR",
//     desc: "Transparent pricing shown upfront — no hidden charges, no surprises after the job is done.",
//     bg: "from-brand-900 via-brand-700 to-accent-600",
//   },
//   {
//     title: "110+ Services,",
//     highlight: "One Trusted Number",
//     desc: "From cooling appliances to kitchen appliances — book every repair from a single place.",
//     bg: "from-brand-950 via-brand-800 to-brand-500",
//   },
// ];

// export default function HeroSlider() {
//   const [index, setIndex] = useState(0);

//   const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
//   const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

//   useEffect(() => {
//     const t = setInterval(next, 5000);
//     return () => clearInterval(t);
//   }, [next]);

//   const slide = slides[index];

//   return (
//     <section className="relative overflow-hidden">
//       <div
//         className={`relative bg-gradient-to-br ${slide.bg} transition-all duration-700`}
//       >
//         <div className="absolute inset-0 opacity-[0.07]">
//           <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
//         </div>

//         <div className="container-x relative flex min-h-[560px] flex-col justify-center py-20 sm:min-h-[520px]">
//           <div className="max-w-2xl">
//             <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur">
//               <BadgeCheck size={14} className="text-accent-500" />
//               Verified Technicians · Doorstep Service
//             </div>
//             <h1
//               key={index}
//               className="animate-fadeUp text-4xl font-extrabold leading-tight text-white sm:text-5xl"
//             >
//               {slide.title}
//               <br />
//               <span className="text-accent-500">{slide.highlight}</span>
//             </h1>
//             <p className="mt-5 max-w-lg text-base text-brand-100 sm:text-lg">
//               {slide.desc}
//             </p>

//             <div className="mt-8 flex flex-wrap gap-3">
//               <Link href="/#book" className="btn-primary">
//                 Book a Service
//               </Link>
//               <Link href="/#services" className="btn-secondary">
//                 View All Services
//               </Link>
//             </div>

//             <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/90">
//               <div className="flex items-center gap-2">
//                 <Clock3 size={18} className="text-accent-500" /> Same Day Service
//               </div>
//               <div className="flex items-center gap-2">
//                 <ShieldCheck size={18} className="text-accent-500" /> Warranty on Repair
//               </div>
//               <div className="flex items-center gap-2">
//                 <BadgeCheck size={18} className="text-accent-500" /> Verified Technicians
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Slider controls */}
//         <button
//           onClick={prev}
//           aria-label="Previous slide"
//           className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur transition hover:bg-white/30 sm:flex"
//         >
//           <ChevronLeft size={20} />
//         </button>
//         <button
//           onClick={next}
//           aria-label="Next slide"
//           className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur transition hover:bg-white/30 sm:flex"
//         >
//           <ChevronRight size={20} />
//         </button>

//         <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setIndex(i)}
//               aria-label={`Go to slide ${i + 1}`}
//               className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-accent-500" : "w-2 bg-white/40"
//                 }`}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ShieldCheck, BadgeCheck, Clock3, DoorOpen } from "lucide-react";
import Image from "next/image";

const slides = [
  {
    title: "AC Repair & Service,",
    highlight: "Right at Your Doorstep",
    desc: "Gas refill, cooling issues, general service — booked in minutes, fixed by verified AC technicians.",
    bg: "from-brand-950/65 via-brand-900/50 to-brand-700/30",
    // TODO: replace with a real photo of your AC technician
    image: "/images/ac.jpg",
  },
  {
    title: "Refrigerator Repair,",
    highlight: "Same-Day Across Delhi NCR",
    desc: "Cooling problems, gas leakage, compressor issues — transparent pricing, no hidden charges.",
    bg: "from-brand-950/95 via-brand-900/85 to-accent-600/40",
    // TODO: replace with a real photo of your refrigerator technician
    image: "/images/technicians.webp",
  },
  {
    title: "Air Cooler Repair,",
    highlight: "By Trusted Technicians",
    desc: "Motor, pump, cooling pad and swing issues — book every appliance repair from one place.",
    bg: "from-brand-950/95 via-brand-900/85 to-brand-500/40",
    // TODO: replace with a real photo of your cooler technician
    image: "/images/technician.webp",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), []);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[index];

  return (
    <section className="relative overflow-hidden">
      <div className="relative min-h-[560px] sm:min-h-[520px]">
        {/* Background photo per slide */}
        {slides.map((s, i) => (
          <Image
            key={s.image}
            src={s.image}
            alt={s.highlight}
            width={600}
            height={400}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}

        {/* Dark gradient overlay so text stays readable over any photo */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${slide.bg} transition-all duration-700`}
        />
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[size:24px_24px]" />
        </div>

        <div className="container-x relative flex min-h-[560px] flex-col justify-center py-20 sm:min-h-[520px]">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur ">
              {/* <BadgeCheck size={14} className="text-accent-500" /> */}
              {/* Verified Technicians · Doorstep Service */}
              <ShieldCheck size={18} className="text-accent-500" />
              6 Month Warranty on Repair
            </div>
            <h1
              key={index}
              className="animate-fadeUp text-4xl font-extrabold leading-tight text-white sm:text-5xl"
            >
              {slide.title}
              <br />
              <span className="text-accent-500">{slide.highlight}</span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-brand-100 sm:text-lg">
              {slide.desc}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#book" className="btn-primary">
                Book a Service
              </Link>
              <Link href="/#services" className="btn-secondary">
                View All Services
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <Clock3 size={18} className="text-accent-500" /> Same Day Service
              </div>
              <div className="flex items-center gap-2">
                {/* <ShieldCheck size={18} className="text-accent-500" />
                6 Month Warranty on Repair */}

                <DoorOpen size={18} className="text-accent-500" />
                Doorstep Service
              </div>
              <div className="flex items-center gap-2">
                <BadgeCheck size={18} className="text-accent-500" /> Verified Technicians
              </div>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur transition hover:bg-white/30 sm:flex"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full bg-white/15 p-2.5 text-white backdrop-blur transition hover:bg-white/30 sm:flex"
        >
          <ChevronRight size={20} />
        </button>

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === index ? "w-8 bg-accent-500" : "w-2 bg-white/40"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}