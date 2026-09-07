import Link from "next/link";
import Image from "next/image";
import { CalendarDays, ArrowRight } from "lucide-react";
import { blogs } from "@/data/blogs";
import { site } from "@/data/site";

export const metadata = {
  title: "Blog - Appliance Repair Tips & Guides",
  description:
    `Practical tips and guides on maintaining and repairing home appliances, from the ${site.name} team.`,
  alternates: { canonical: "/blog" },
};

export default function BlogListPage() {
  return (
    <>
      <div className="bg-brand-950 py-14">
        <div className="container-x text-center">
          <p className="section-eyebrow">Blog</p>
          <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            Tips, Guides & Appliance Care
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-brand-200">
            Practical advice to help you maintain your appliances and know
            when it is time to call a professional.
          </p>
        </div>
      </div>

      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                <h2 className="mt-2 line-clamp-2 text-base font-bold text-brand-950">
                  {b.title}
                </h2>
                <p className="mt-2 line-clamp-3 text-sm text-slate-500">
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
    </>
  );
}
