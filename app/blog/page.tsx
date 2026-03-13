import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog — Cold Email Strategy & AI Outreach Insights",
  description:
    "Practical guides on cold email deliverability, AI sales outreach, SDR team productivity, and email personalization that drives real reply rates.",
  keywords: [
    "cold email tips",
    "AI outreach blog",
    "SDR strategy",
    "email deliverability 2026",
    "cold email personalization",
    "sales email best practices",
  ],
  openGraph: {
    title: "Kwotient Blog — Cold Email Strategy & AI Outreach Insights",
    description:
      "Practical guides on cold email, AI sales outreach, and SDR productivity from the Kwotient team.",
    url: "https://kwotient.com/blog",
    siteName: "Kwotient",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwotient Blog — Cold Email Strategy & AI Outreach Insights",
    description:
      "Practical guides on cold email, AI sales outreach, and SDR productivity.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://kwotient.com/blog",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  "Outreach Strategy": "bg-kwotient-accent/10 text-kwotient-accent",
  Economics: "bg-kwotient-secondary/10 text-kwotient-secondary",
  "Team Workflow": "bg-kwotient-success/10 text-kwotient-success",
  Personalization: "bg-purple-100 text-purple-600",
  Deliverability: "bg-orange-100 text-orange-600",
  "Case Study": "bg-yellow-100 text-yellow-700",
};

export default function BlogPage() {
  return (
    <div className="bg-kwotient-paper min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-kwotient-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                The Kwotient Blog
              </span>
            </div>
            <h1
              className="text-[40px] md:text-[56px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-4 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Outreach that actually{" "}
              <span className="text-kwotient-accent">converts.</span>
            </h1>
            <p className="text-[18px] text-kwotient-muted leading-[1.6]">
              Practical tactics on cold email, AI-assisted outreach, SDR productivity,
              and the craft of writing emails people actually want to reply to.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post, index) => (
              <article
                key={post.slug}
                className={`group bg-white rounded-2xl border border-kwotient-border overflow-hidden card-hover ${
                  index === 0 ? "md:col-span-2" : ""
                }`}
              >
                {/* Post image placeholder */}
                <div
                  className={`bg-gradient-to-br from-kwotient-ink to-dark-surface ${
                    index === 0 ? "h-64 md:h-80" : "h-48"
                  } relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `radial-gradient(circle at 30% 50%, rgba(232,89,12,0.6) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(37,99,235,0.4) 0%, transparent 50%)`,
                  }} />
                  <div className="absolute bottom-4 left-4">
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                        CATEGORY_COLORS[post.category] || "bg-white/20 text-white"
                      } bg-opacity-90`}
                    >
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post content */}
                <div className={`p-6 ${index === 0 ? "md:p-8" : ""}`}>
                  <div className="flex items-center gap-3 mb-3 text-xs text-kwotient-muted">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2
                    className={`font-bold text-kwotient-ink group-hover:text-kwotient-accent transition-colors duration-200 mb-3 ${
                      index === 0 ? "text-[24px] md:text-[28px]" : "text-[20px]"
                    }`}
                    style={{ fontFamily: "var(--font-heading)", lineHeight: "1.25", letterSpacing: "-0.01em" }}
                  >
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>

                  <p className={`text-kwotient-muted leading-relaxed mb-5 ${index === 0 ? "text-base" : "text-sm"}`}>
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="h-7 w-7 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                        style={{ background: "linear-gradient(135deg, #E8590C, #D14B06)" }}
                      >
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-kwotient-ink">{post.author}</p>
                        <p className="text-[10px] text-kwotient-muted">{post.authorRole}</p>
                      </div>
                    </div>
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-sm font-semibold text-kwotient-accent hover:text-kwotient-accent-hover transition-colors flex items-center gap-1"
                    >
                      Read more
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-kwotient-ink">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h2
            className="text-[28px] font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Get the next post in your inbox.
          </h2>
          <p className="text-dark-muted mb-6">
            No fluff. Just tactics, data, and honest takes on AI outreach.
          </p>
          <form className="flex gap-3">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 rounded-xl px-4 py-3 text-sm bg-white/10 border border-white/20 text-white placeholder:text-dark-muted focus:outline-none focus:border-kwotient-accent transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 text-sm font-semibold bg-kwotient-accent text-white rounded-xl hover:bg-kwotient-accent-hover transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-dark-muted mt-3">~2 posts per month. Unsubscribe anytime.</p>
        </div>
      </section>
    </div>
  );
}
