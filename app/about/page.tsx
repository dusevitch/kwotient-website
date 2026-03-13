import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About — We Build for the Rep, Not Instead of Them",
  description:
    "Kwotient was built by sales practitioners who believe outreach should be human, even when AI writes it. Learn our story, mission, and values.",
  keywords: [
    "about Kwotient",
    "AI sales company",
    "sales technology company",
    "Kwotient team",
    "human in the loop AI",
  ],
  openGraph: {
    title: "About Kwotient — We Build for the Rep, Not Instead of Them",
    description:
      "Sales practitioners turned builders. We believe outreach should be human, even when AI writes it.",
    url: "https://kwotient.com/about",
    siteName: "Kwotient",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kwotient",
    description:
      "Sales practitioners turned builders. We believe outreach should be human, even when AI writes it.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://kwotient.com/about",
  },
};

const VALUES = [
  {
    icon: "◉",
    title: "Quality over quantity",
    description:
      "We could build a tool that sends ten thousand emails a day and calls it success. We chose not to. The metric that matters is replies — and replies come from quality. We obsess over what makes an email worth reading, not just worth sending.",
  },
  {
    icon: "◈",
    title: "Humans in the loop",
    description:
      "Every design decision at Kwotient runs through a simple filter: does this keep the human in control? We don't believe in fully autonomous outreach. We believe in giving your reps superpowers — not replacing them with bots and hoping no one notices.",
  },
  {
    icon: "◎",
    title: "Transparent by default",
    description:
      "We show you exactly why the AI made each decision. Which sales principle it applied. Why it chose that tone. What in the prospect's history triggered that opener. If you can't explain why an email went out, it shouldn't have.",
  },
];

const TEAM_MEMBERS = [
  {
    name: "Priya Naik",
    role: "Co-founder & CEO",
    bio: "Former Head of Revenue at two B2B SaaS companies. Spent 6 years building and managing outbound teams before deciding to build the tool she always wished existed.",
    initials: "PN",
    color: "#E8590C",
  },
  {
    name: "Marcus Webb",
    role: "Co-founder & CTO",
    bio: "ML engineer who spent 4 years at a large language model lab before joining the sales world. Convinced that the best AI is one that makes humans better, not unnecessary.",
    initials: "MW",
    color: "#2563EB",
  },
  {
    name: "Jordan Kessler",
    role: "Head of Growth",
    bio: "SDR-turned-strategist. Went from sending 200 emails a day manually to obsessing over what makes outreach worth the recipient's time. Now does both, faster.",
    initials: "JK",
    color: "#16A34A",
  },
  {
    name: "Sarah Lin",
    role: "Head of Product",
    bio: "Previously led product at a sales engagement platform. Believes the best products in this space are the ones your reps actually want to use — not the ones IT mandates.",
    initials: "SL",
    color: "#7C3AED",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-kwotient-paper min-h-screen">
      {/* Mission Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-kwotient-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                Our mission
              </span>
            </div>
            <h1
              className="text-[40px] md:text-[56px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-6 text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We believe outreach should be{" "}
              <span className="text-kwotient-accent">human,</span>{" "}
              even when AI writes it.
            </h1>
            <p className="text-[18px] md:text-[20px] text-kwotient-muted leading-[1.6]">
              Every buying decision is made by a person. That person deserves an email that was
              crafted with their reality in mind — not one that was templated, blasted, and
              forgotten. Kwotient exists to make that standard achievable at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-kwotient-paper">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-white px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                  Our story
                </span>
              </div>
              <h2
                className="text-[32px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-6 text-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Built by people who actually ran outbound teams.
              </h2>
              <div className="flex flex-col gap-4 text-kwotient-muted leading-relaxed">
                <p>
                  Kwotient started with a frustration that most sales leaders know intimately: you hire
                  great reps, train them on SPIN Selling and Challenger, hand them an ICP and a
                  territory — and then watch them spend half their day writing emails.
                </p>
                <p>
                  Priya had run outbound teams at two different B2B SaaS companies. Marcus had spent
                  years building language models. They met at a conference where Priya was complaining
                  about exactly this problem. Marcus had been waiting for someone to ask him to solve it.
                </p>
                <p>
                  The original insight was simple: the hard part of great outreach isn&apos;t the writing.
                  It&apos;s the research, the judgment about what to say, and the consistency of applying
                  those standards across hundreds of contacts. AI can handle all three — if you keep a
                  human in the review seat.
                </p>
                <p>
                  Kwotient launched in early 2025. We spent the first year obsessing over output
                  quality rather than feature count. The result is a system that teams trust enough to
                  actually use — and that produces emails good enough to actually get replies.
                </p>
              </div>
            </div>

            {/* Story visual */}
            <div className="rounded-2xl bg-kwotient-ink p-8 text-white">
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: "2025", label: "Founded" },
                  { value: "127+", label: "Teams using Kwotient" },
                  { value: "4.8x", label: "Average reply rate lift" },
                  { value: "$0.28", label: "Cost per email" },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl bg-dark-surface p-4">
                    <div className="text-2xl font-bold text-dark-accent" style={{ fontFamily: "var(--font-heading)" }}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-dark-muted mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <blockquote className="border-l-2 border-kwotient-accent pl-4">
                <p className="text-dark-text leading-relaxed text-sm">
                  &ldquo;We didn&apos;t set out to build another sales tool. We set out to build the one that
                  sales people would actually use — because it respects their judgment while removing
                  the work that shouldn&apos;t require it.&rdquo;
                </p>
                <footer className="mt-3 text-xs text-dark-muted">
                  — Priya Naik, Co-founder & CEO
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                What we believe
              </span>
            </div>
            <h2
              className="text-[32px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Three principles. Everything else follows.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-kwotient-surface rounded-2xl p-8 border border-kwotient-border card-hover">
                <div className="h-12 w-12 rounded-xl bg-kwotient-accent/10 flex items-center justify-center mb-5">
                  <span className="text-kwotient-accent text-xl">{value.icon}</span>
                </div>
                <h3
                  className="text-[20px] font-bold text-kwotient-ink mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {value.title}
                </h3>
                <p className="text-kwotient-muted leading-relaxed text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-kwotient-paper">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-white px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                The team
              </span>
            </div>
            <h2
              className="text-[32px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Practitioners who got tired of waiting.
            </h2>
            <p className="text-kwotient-muted mt-3 max-w-xl mx-auto">
              We&apos;ve sat in the rep&apos;s chair. We know what makes outreach feel genuine versus canned.
              That perspective is built into everything we ship.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-kwotient-border p-6 text-center card-hover">
                {/* Photo placeholder */}
                <div
                  className="h-20 w-20 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}aa)` }}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold text-kwotient-ink mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-kwotient-accent mb-3">{member.role}</p>
                <p className="text-xs text-kwotient-muted leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-bg">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2
            className="text-[32px] md:text-[40px] font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            We&apos;re just getting started.
          </h2>
          <p className="text-dark-muted text-[18px] leading-[1.6] mb-8">
            If you believe outreach should be worth reading — and that AI should work for your reps,
            not around them — we&apos;d love to show you what we&apos;ve built.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#">
              Start Free Trial
            </Button>
            <Button
              variant="ghost"
              size="lg"
              href="mailto:hello@kwotient.com"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Say hello
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
