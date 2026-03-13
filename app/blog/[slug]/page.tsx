import type { Metadata } from "next";
import { BLOG_POSTS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | Kwotient Blog",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://kwotient.com/blog/${slug}`,
      siteName: "Kwotient",
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
    robots: "index, follow",
    alternates: {
      canonical: `https://kwotient.com/blog/${slug}`,
    },
  };
}

const PLACEHOLDER_CONTENT = [
  {
    type: "intro",
    text: "The sales landscape has changed faster in the past 24 months than in the previous decade. AI hasn't just given sales teams new tools — it's fundamentally altered what buyers expect, what works, and what gets ignored. If your outreach strategy hasn't evolved with it, you're operating at a structural disadvantage.",
  },
  {
    type: "h2",
    text: "The core tension: volume vs. quality",
  },
  {
    type: "paragraph",
    text: "For years, sales leaders have chased volume. More emails, more dials, more sequences. The theory: if enough mud hits the wall, some sticks. And for a while, it worked. Cold email open rates hovered around 20–25%. Reply rates sat at a respectable 3–5%. But something has shifted.",
  },
  {
    type: "paragraph",
    text: "Buyers are exhausted. The average decision-maker receives over 120 sales emails per week. They've developed a near-perfect pattern-recognition system for identifying generic outreach — and deleting it without a second thought. Volume alone stopped being a moat the moment everyone had access to the same tools.",
  },
  {
    type: "h2",
    text: "What actually moves the needle",
  },
  {
    type: "paragraph",
    text: "The teams seeing the highest reply rates in 2026 share one thing in common: they've figured out how to be specific at scale. Not personalized in the \"Hi [FirstName], I noticed you work at [Company]\" way — genuinely, insightfully specific about the prospect's world.",
  },
  {
    type: "paragraph",
    text: "That specificity requires research. And research takes time. The bottleneck has never been the email itself — it's always been the 15 minutes of pre-work that makes it relevant. The teams winning have solved this with AI-assisted research that happens before drafting, not instead of it.",
  },
  {
    type: "callout",
    text: "The teams with the highest reply rates spend more time reviewing emails than writing them. That's not a paradox — it's the point.",
  },
  {
    type: "h2",
    text: "The practical framework",
  },
  {
    type: "paragraph",
    text: "Here's a simple test for your current outreach: remove the first name and company name from your last five sent emails. Could those emails be sent to anyone in your ICP? If yes — and for most teams, the honest answer is yes — you have a specificity problem, not a volume problem.",
  },
  {
    type: "paragraph",
    text: "Fixing it doesn't require a complete overhaul. It requires two things: better pre-send research, and a system that enforces specificity before an email leaves your queue. Both are solvable with the right tooling and the right process.",
  },
];

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-kwotient-ink">Post not found</h1>
        <Button variant="primary" href="/blog" className="mt-6">
          Back to Blog
        </Button>
      </div>
    );
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Kwotient",
      url: "https://kwotient.com",
    },
    datePublished: post.date,
    url: `https://kwotient.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="bg-kwotient-paper min-h-screen">
        {/* Article Header */}
        <header className="pt-28 pb-12 bg-white border-b border-kwotient-border">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4 text-sm text-kwotient-muted">
                <a href="/blog" className="hover:text-kwotient-ink transition-colors">
                  Blog
                </a>
                <span>/</span>
                <span className="text-kwotient-accent">{post.category}</span>
              </div>

              <h1
                className="text-[36px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {post.title}
              </h1>

              <p className="text-[18px] text-kwotient-muted leading-[1.6] mb-6">{post.excerpt}</p>

              <div className="flex items-center gap-4">
                <div
                  className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: "linear-gradient(135deg, #E8590C, #D14B06)" }}
                >
                  {post.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-kwotient-ink text-sm">{post.author}</p>
                  <div className="flex items-center gap-2 text-xs text-kwotient-muted">
                    <span>{post.authorRole}</span>
                    <span>·</span>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Article Cover */}
        <div className="bg-gradient-to-br from-kwotient-ink to-dark-surface h-64 md:h-80 relative overflow-hidden">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(232,89,12,0.6) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(37,99,235,0.4) 0%, transparent 50%)`,
          }} />
        </div>

        {/* Main content */}
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
            {/* Article body */}
            <article className="bg-white rounded-2xl border border-kwotient-border p-8 md:p-12">
              <div className="prose max-w-none">
                {PLACEHOLDER_CONTENT.map((block, index) => {
                  if (block.type === "intro") {
                    return (
                      <p
                        key={index}
                        className="text-[18px] font-medium text-kwotient-ink leading-[1.7] mb-6 pb-6 border-b border-kwotient-border"
                      >
                        {block.text}
                      </p>
                    );
                  }
                  if (block.type === "h2") {
                    return (
                      <h2
                        key={index}
                        className="text-[24px] font-bold text-kwotient-ink mt-8 mb-4"
                        style={{ fontFamily: "var(--font-heading)", letterSpacing: "-0.01em" }}
                      >
                        {block.text}
                      </h2>
                    );
                  }
                  if (block.type === "callout") {
                    return (
                      <div
                        key={index}
                        className="my-8 border-l-4 border-kwotient-accent bg-kwotient-accent/5 px-6 py-4 rounded-r-xl"
                      >
                        <p className="text-base font-semibold text-kwotient-ink italic leading-relaxed">
                          &ldquo;{block.text}&rdquo;
                        </p>
                      </div>
                    );
                  }
                  return (
                    <p key={index} className="text-kwotient-muted leading-[1.75] mb-4 text-base">
                      {block.text}
                    </p>
                  );
                })}

                {/* CTA within article */}
                <div className="mt-10 rounded-2xl bg-kwotient-ink p-8 text-center">
                  <h3 className="text-[22px] font-bold text-white mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                    See how Kwotient handles this for your team.
                  </h3>
                  <p className="text-dark-muted mb-6">
                    From research to review-ready draft in under 15 minutes per 50 contacts.
                  </p>
                  <Button variant="primary" href="#" size="md">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="flex flex-col gap-6">
              {/* Table of Contents */}
              <div className="bg-white rounded-2xl border border-kwotient-border p-6 sticky top-24">
                <h3 className="text-sm font-bold text-kwotient-ink mb-3 uppercase tracking-wider">
                  In this article
                </h3>
                <nav className="flex flex-col gap-2">
                  {PLACEHOLDER_CONTENT.filter((b) => b.type === "h2").map((block, i) => (
                    <a
                      key={i}
                      href={`#section-${i}`}
                      className="text-sm text-kwotient-muted hover:text-kwotient-accent transition-colors py-1 border-l-2 border-kwotient-border hover:border-kwotient-accent pl-3"
                    >
                      {block.text}
                    </a>
                  ))}
                </nav>

                {/* Social share */}
                <div className="mt-6 pt-6 border-t border-kwotient-border">
                  <p className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider mb-3">
                    Share
                  </p>
                  <div className="flex gap-2">
                    {["Twitter", "LinkedIn", "Link"].map((platform) => (
                      <button
                        key={platform}
                        className="flex-1 py-2 text-xs font-medium text-kwotient-muted bg-kwotient-surface rounded-lg hover:bg-kwotient-border transition-colors"
                      >
                        {platform}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Author bio */}
              <div className="bg-white rounded-2xl border border-kwotient-border p-6">
                <h3 className="text-xs font-bold text-kwotient-muted uppercase tracking-wider mb-4">
                  About the author
                </h3>
                <div className="flex items-start gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0"
                    style={{ background: "linear-gradient(135deg, #E8590C, #D14B06)" }}
                  >
                    {post.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-kwotient-ink text-sm">{post.author}</p>
                    <p className="text-xs text-kwotient-muted mb-2">{post.authorRole}</p>
                    <p className="text-xs text-kwotient-muted leading-relaxed">
                      Sales practitioner turned builder. Spent 8 years leading outbound teams before co-founding Kwotient.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Related posts */}
          <div className="mt-16">
            <h2 className="text-[24px] font-bold text-kwotient-ink mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              Related reading
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <a
                  key={related.slug}
                  href={`/blog/${related.slug}`}
                  className="group bg-white rounded-2xl border border-kwotient-border overflow-hidden card-hover"
                >
                  <div className="h-32 bg-gradient-to-br from-kwotient-ink to-dark-surface" />
                  <div className="p-5">
                    <p className="text-xs text-kwotient-muted mb-2">{related.readTime}</p>
                    <h3
                      className="text-[15px] font-bold text-kwotient-ink group-hover:text-kwotient-accent transition-colors leading-snug"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {related.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
