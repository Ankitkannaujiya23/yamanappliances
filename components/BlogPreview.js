import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { blogs } from "@/data/blogs";

export default function BlogPreview() {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container-x">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <div>
            <p className="section-eyebrow">Our Blog</p>
            <h2 className="section-title">Tips, Guides & Appliance Care</h2>
          </div>
          <Link href="/blog" className="btn-outline shrink-0">
            View All Posts <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((b) => (
            <Link key={b.slug} href={`/blog/${b.slug}`} className="card overflow-hidden">
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <CalendarDays size={13} />
                  {new Date(b.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
                <h3 className="mt-2 line-clamp-2 text-base font-bold text-brand-950">
                  {b.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-slate-500">
                  {b.excerpt}
                </p>
                <span className="mt-3 flex items-center gap-1 text-xs font-semibold text-accent-500">
                  Read More <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
