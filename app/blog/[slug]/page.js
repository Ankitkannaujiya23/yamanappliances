import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CalendarDays, ChevronRight, ArrowRight } from "lucide-react";
import { blogs, getBlogBySlug } from "@/data/blogs";

export function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
    },
  };
}

export default function BlogDetailPage({ params }) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  const more = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);

  return (
    <>
      <div className="border-b border-slate-100 bg-brand-950">
        <div className="container-x flex items-center gap-1.5 py-3 text-xs text-brand-300">
          <Link href="/" className="hover:text-white">Home</Link>
          <ChevronRight size={12} />
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <ChevronRight size={12} />
          <span className="line-clamp-1 text-white">{post.title}</span>
        </div>
      </div>

      <article className="container-x max-w-3xl py-14">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <CalendarDays size={13} />
          {new Date(post.date).toLocaleDateString("en-IN", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
          <span>·</span>
          <span>{post.author}</span>
        </div>

        <h1 className="mt-3 text-3xl font-extrabold leading-tight text-brand-950">
          {post.title}
        </h1>

        <div className="relative mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="768px"
            priority
          />
        </div>

        <div className="prose prose-slate mt-8 max-w-none">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i} className="mb-5 text-[15px] leading-relaxed text-slate-600">
              {para}
            </p>
          ))}
        </div>
      </article>

      <div className="border-t border-slate-100 bg-slate-50 py-14">
        <div className="container-x">
          <h2 className="text-xl font-bold text-brand-950">More Articles</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {more.map((b) => (
              <Link key={b.slug} href={`/blog/${b.slug}`} className="card overflow-hidden">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="line-clamp-2 text-sm font-bold text-brand-950">
                    {b.title}
                  </h3>
                  <span className="mt-2 flex items-center gap-1 text-xs font-semibold text-accent-500">
                    Read More <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
