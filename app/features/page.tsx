import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Features — AI Email Generation, Voice Mirroring & More",
  description:
    "Deep dive into Kwotient's core features: AI email generation with 70+ validation rules, voice mirroring, tone detection, 3-mode review system, AI business research, and sales intelligence engine.",
  keywords: [
    "AI email generation",
    "voice mirroring email",
    "tone detection AI",
    "sales email review system",
    "AI prospect research",
    "sales intelligence AI",
    "SPIN selling AI",
    "cold email AI features",
  ],
  openGraph: {
    title: "Kwotient Features — AI That Makes Your Reps Unstoppable",
    description:
      "Six deeply-built capabilities that work together to make every email your best one yet.",
    url: "https://kwotient.com/features",
    siteName: "Kwotient",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwotient Features — AI That Makes Your Reps Unstoppable",
    description: "Six deeply-built capabilities that work together to make every email your best one yet.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://kwotient.com/features",
  },
};

const TIER_BADGE_COLORS: Record<string, string> = {
  Starter: "bg-kwotient-surface text-kwotient-muted border-kwotient-border",
  Growth: "bg-kwotient-secondary/10 text-kwotient-secondary border-kwotient-secondary/20",
  Scale: "bg-kwotient-accent/10 text-kwotient-accent border-kwotient-accent/20",
};

const FEATURES_DETAIL = [
  {
    id: "ai-email-generation",
    icon: "✦",
    tag: "Core AI",
    tagColor: "bg-kwotient-accent/10 text-kwotient-accent",
    title: "AI Email Generation",
    headline: "70+ validation rules. Zero compromises.",
    tiers: ["Starter", "Growth", "Scale"],
    description:
      "Kwotient doesn't just generate emails — it generates emails that meet a standard. Before any draft reaches your review queue, it passes through a 70+ rule validation engine that checks everything from subject line effectiveness to CTA clarity.",
    details: [
      {
        title: "Playbook-trained, not template-based",
        description:
          "Upload your SOP, your top-performing sequences, your best rep's style guide. The AI learns your approach, not a generic template library. The output sounds like your team, not like an AI.",
      },
      {
        title: "Subject line scoring + alternatives",
        description:
          "Every draft comes with a subject line quality score and two alternatives. The system evaluates curiosity, specificity, length, and your historical subject line performance.",
      },
      {
        title: "Validation before your queue",
        description:
          "70+ rules check value prop clarity, opening hook strength, CTA specificity, personalization depth, and compliance with your SOP — before you ever see the draft.",
      },
      {
        title: "Continuous learning",
        description:
          "Every edit your reps make, every A/B test result, every reply rate feeds back into the system. The AI improves on your specific ICP over time, not just general email quality.",
      },
    ],
  },
  {
    id: "voice-mirroring",
    icon: "◈",
    tag: "Personalization",
    tagColor: "bg-kwotient-secondary/10 text-kwotient-secondary",
    title: "Voice Mirroring",
    headline: "Your email sounds like the one they'd write to themselves.",
    tiers: ["Starter", "Growth", "Scale"],
    description:
      "People respond better to communication that feels familiar. Kwotient analyzes each prospect's writing patterns across email threads, LinkedIn activity, and any available communication history — then mirrors those patterns in your outreach.",
    details: [
      {
        title: "Vocabulary extraction",
        description:
          "The system identifies word choices, industry jargon preferences, and formality signals unique to each prospect. If they write like a practitioner, your email reads like it came from one.",
      },
      {
        title: "Sentence structure mirroring",
        description:
          "Short, punchy sentences or longer, narrative-style paragraphs? Direct openers or context-setting? The AI matches their rhythm, not a generic professional style.",
      },
      {
        title: "Formality calibration",
        description:
          "Some buyers want 'Hey' and some want 'Dear.' Most are somewhere in between. Voice mirroring detects exactly where each prospect sits and sets your opener accordingly.",
      },
      {
        title: "Dynamic updates",
        description:
          "As new replies come in, the voice profile updates. A three-reply thread gives the AI enough signal to write an email that feels genuinely personal — because it is.",
      },
    ],
  },
  {
    id: "tone-detection",
    icon: "◎",
    tag: "Intelligence",
    tagColor: "bg-kwotient-success/10 text-kwotient-success",
    title: "Tone Detection Engine",
    headline: "React to how they actually feel, not just what they say.",
    tiers: ["Starter", "Growth", "Scale"],
    description:
      "Inbound email replies carry emotional signals that most reps miss. Kwotient classifies every reply across 8 tone categories and adjusts the next draft's strategy automatically — matching energy, addressing concerns, or pivoting approach as needed.",
    details: [
      {
        title: "8 tone classifications",
        description:
          "Warm interest, polite disinterest, technical skepticism, pricing objection, authority challenge, FOMO signal, re-engagement opportunity, competitive comparison. Each triggers a different response framework.",
      },
      {
        title: "Automatic response adjustment",
        description:
          "A warm reply gets a warmer follow-up with a clear next step. A skeptical reply gets evidence and specificity. A pricing objection gets ROI framing. The AI knows the difference.",
      },
      {
        title: "Escalation flagging",
        description:
          "Certain tone signals — aggressive objections, legal language, strong disinterest — are flagged for mandatory human review rather than auto-response. The AI knows when to step back.",
      },
      {
        title: "Sequence-level tone tracking",
        description:
          "Tone patterns across a full sequence tell a story. Kwotient tracks tone trajectory and adjusts the remaining sequence strategy if a pattern signals fatigue or declining engagement.",
      },
    ],
  },
  {
    id: "review-system",
    icon: "⊞",
    tag: "Workflow",
    tagColor: "bg-purple-100 text-purple-600",
    title: "3-Mode Review System",
    headline: "Control that scales with your trust in the system.",
    tiers: ["Starter", "Growth", "Scale"],
    description:
      "The review system is where Kwotient's philosophy lives. We believe humans should always have the option to be in the loop. We also believe that option shouldn't slow you down. Three modes let you set the right balance for each campaign.",
    details: [
      {
        title: "Individual Review",
        description:
          "Read every email before it sends. Full edit access. Side-by-side view of the AI's reasoning. Best for new campaigns, new sequences, or high-value accounts where every word matters.",
      },
      {
        title: "Batch Approve",
        description:
          "Scan 50 emails in 3 minutes. The queue surfaces confidence scores, personalization depth, and any flagged items. Approve individually or in bulk. Reject sends it back to the AI with your comment.",
      },
      {
        title: "Auto Mode",
        description:
          "Set your rules — minimum quality score, required fields, forbidden phrases — and let the system send. Recommended only after you've validated the system on your specific playbook. Always reversible.",
      },
      {
        title: "Per-campaign mode switching",
        description:
          "Different campaigns, different stakes. You can have individual review on your enterprise account sequences and auto mode on your SMB re-engagement campaigns simultaneously.",
      },
    ],
  },
  {
    id: "ai-business-research",
    icon: "◐",
    tag: "Research",
    tagColor: "bg-cyan-100 text-cyan-700",
    title: "AI Business Research",
    headline: "The research your reps skip. Done automatically before every draft.",
    tiers: ["Starter", "Growth", "Scale"],
    description:
      "Before Kwotient writes a single word, it researches the prospect and their company. News, funding, technology, job changes, LinkedIn signals — all synthesized into a research brief that informs the draft without you lifting a finger.",
    details: [
      {
        title: "Company news and press monitoring",
        description:
          "Recent funding rounds, product launches, leadership changes, acquisitions, and press coverage are surfaced and incorporated into email context. An email mentioning their Series B announcement lands differently than a generic opener.",
      },
      {
        title: "Technology stack detection",
        description:
          "Kwotient identifies what tools the prospect's company uses — relevant for positioning your product and surfacing integration hooks as natural conversation starters.",
      },
      {
        title: "Job change and career signals",
        description:
          "A new VP of Sales who joined 90 days ago is in the perfect window for a well-timed outreach. Job change signals are tracked and factored into timing recommendations.",
      },
      {
        title: "LinkedIn activity summarization",
        description:
          "Recent posts, comments, and shares signal what the prospect is thinking about. Referencing a relevant insight they shared feels like genuine attention — because it is.",
      },
    ],
  },
  {
    id: "sales-intelligence",
    icon: "◉",
    tag: "Methodology",
    tagColor: "bg-amber-100 text-amber-700",
    title: "Sales Intelligence Engine",
    headline: "Every rep selling like your best rep.",
    tiers: ["Starter", "Growth", "Scale"],
    description:
      "The Sales Intelligence Engine is what separates Kwotient from a drafting tool. It's been trained on the world's most proven sales methodologies — SPIN, Challenger Sale, MEDDIC, value-based selling — and applies them automatically based on deal stage, prospect role, and context.",
    details: [
      {
        title: "SPIN Selling for discovery",
        description:
          "Situation, Problem, Implication, Need-payoff. The AI applies SPIN structure naturally in early-stage sequences — surfacing problems before pitching solutions.",
      },
      {
        title: "Challenger Sale for insight-led outreach",
        description:
          "Teach, tailor, take control. Challenger-style opening lines lead with a counterintuitive insight relevant to the prospect's world. The AI can draft in this style for senior decision-makers.",
      },
      {
        title: "MEDDIC for enterprise qualification",
        description:
          "Metrics, Economic Buyer, Decision Criteria, Decision Process, Identify Pain, Champion. The system surfaces MEDDIC-relevant questions naturally in longer sequences targeting complex deals.",
      },
      {
        title: "Value-based positioning",
        description:
          "ROI framing, business impact language, peer comparison — the engine knows when to lead with value rather than features, based on prospect role and deal context.",
      },
    ],
  },
];

const ADDITIONAL_FEATURES = [
  {
    icon: "⊡",
    title: "Reply Classification",
    description:
      "Interested, objection, question, referral, OOO, not the right person, and more. Every reply is classified automatically, with a suggested response generated before your rep even opens the thread.",
    tiers: ["Starter", "Growth", "Scale"],
  },
  {
    icon: "⊟",
    title: "CRM Integration",
    description:
      "Two-way sync with HubSpot, Salesforce, and Pipedrive. Prospect data in, activity data out. Every sent email, reply, and status change logged automatically. No manual CRM hygiene.",
    tiers: ["Starter (HubSpot)", "Growth (+ Salesforce, Pipedrive)", "Scale (+ API)"],
  },
  {
    icon: "◫",
    title: "A/B Testing",
    description:
      "Test subject lines, openers, CTAs, and value propositions. The system tracks open rates, reply rates, and conversion — then automatically promotes winners in future drafts.",
    tiers: ["Growth", "Scale"],
  },
  {
    icon: "⊠",
    title: "Analytics Dashboard",
    description:
      "Campaign-level and rep-level reporting. Reply rates, email quality scores, sequence performance, and revenue attribution. Know exactly what's working — and why.",
    tiers: ["Growth (Advanced)", "Scale (Full + Revenue)"],
  },
  {
    icon: "◻",
    title: "Web + Mobile + Chrome Extension",
    description:
      "Review and approve from anywhere. The Chrome extension lets reps manage their queue without leaving Gmail. The mobile app puts batch review in their pocket.",
    tiers: ["Starter", "Growth", "Scale"],
  },
];

export default function FeaturesPage() {
  return (
    <div className="bg-kwotient-paper min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-kwotient-border">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
              Platform capabilities
            </span>
          </div>
          <h1
            className="text-[40px] md:text-[56px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-4 max-w-4xl mx-auto text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Every feature exists to make one thing better:{" "}
            <span className="text-kwotient-accent">the email.</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-kwotient-muted leading-[1.6] max-w-2xl mx-auto mb-10 text-center">
            We don&apos;t build features to check boxes. Every capability in Kwotient exists
            because it measurably improves reply rates, rep efficiency, or email quality.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button variant="primary" size="lg" href="#">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features - Deep Dive */}
      <div className="py-8">
        {FEATURES_DETAIL.map((feature, index) => (
          <section
            key={feature.id}
            id={feature.id}
            className={`py-20 ${index % 2 === 0 ? "bg-kwotient-paper" : "bg-white"}`}
          >
            <div className="mx-auto max-w-[1200px] px-6">
              {/* Feature header */}
              <div className="mb-12">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <div className={`inline-flex items-center gap-2 rounded-full px-3 py-1 ${feature.tagColor}`}>
                    <span className="text-sm">{feature.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider">{feature.tag}</span>
                  </div>
                  {/* Tier availability */}
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs text-kwotient-muted font-medium">Available on:</span>
                    {feature.tiers.map((tier) => (
                      <span
                        key={tier}
                        className={`text-[10px] font-semibold border rounded-full px-2 py-0.5 ${TIER_BADGE_COLORS[tier] || TIER_BADGE_COLORS["Starter"]}`}
                      >
                        {tier}
                      </span>
                    ))}
                  </div>
                </div>

                <h2
                  className="text-[32px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-3"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h2>
                <p className="text-kwotient-accent font-semibold text-base mb-4">{feature.headline}</p>
                <p className="text-[18px] text-kwotient-muted leading-[1.6] max-w-3xl">{feature.description}</p>
              </div>

              {/* Detail cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {feature.details.map((detail) => (
                  <div
                    key={detail.title}
                    className="bg-white rounded-2xl border border-kwotient-border p-6 card-hover"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="h-5 w-5 text-kwotient-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-kwotient-ink mb-2 text-base" style={{ fontFamily: "var(--font-heading)" }}>
                          {detail.title}
                        </h3>
                        <p className="text-sm text-kwotient-muted leading-relaxed">{detail.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* AI Reasoning Transparency - Dark Callout */}
      <section className="py-20 bg-dark-bg">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-accent/30 bg-kwotient-accent/10 px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold text-dark-accent uppercase tracking-wider">
                  Scale tier exclusive
                </span>
              </div>
              <h2
                className="text-[32px] md:text-[40px] font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                AI Reasoning Transparency
              </h2>
              <p className="text-dark-accent font-semibold mb-4">
                Every email becomes a micro sales training moment.
              </p>
              <p className="text-dark-muted text-[17px] leading-[1.65] mb-6">
                Available exclusively on the Scale tier, AI Reasoning Transparency shows your reps
                exactly why the AI made each decision: which sales principle it applied, why it chose
                that tone, what in the prospect&apos;s history triggered that opening line.
              </p>
              <p className="text-dark-muted text-[17px] leading-[1.65] mb-8">
                Over time, your reps don&apos;t just send better emails — they become better salespeople.
                The system teaches while it works.
              </p>

              <div className="flex flex-col gap-3">
                {[
                  "See which sales methodology was applied and why",
                  "Understand the tone choice based on prospect signals",
                  "Learn why specific value props were selected",
                  "Track your improvement as a sender over time",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <svg className="h-4 w-4 text-dark-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-dark-text">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup */}
            <div className="rounded-2xl border border-white/10 bg-dark-surface p-6">
              <div className="rounded-xl bg-dark-bg p-4 mb-4">
                <div className="text-xs font-semibold text-dark-muted uppercase tracking-wider mb-3">
                  AI Reasoning for: Marcus Johnson &rarr; Apex Solutions
                </div>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      label: "Methodology applied",
                      value: "Challenger Sale — insight-led opener",
                      icon: "◉",
                      color: "text-dark-accent",
                    },
                    {
                      label: "Tone selection",
                      value: "Authoritative but peer-level — detected C-suite communication style",
                      icon: "◈",
                      color: "text-kwotient-secondary",
                    },
                    {
                      label: "Opening trigger",
                      value: "Used recent Series B announcement (3 weeks ago) as relevance hook",
                      icon: "✦",
                      color: "text-kwotient-success",
                    },
                    {
                      label: "Value prop selected",
                      value: "ROI framing over feature list — detected CFO visibility in email chain",
                      icon: "◎",
                      color: "text-purple-400",
                    },
                  ].map((item) => (
                    <div key={item.label} className="rounded-lg bg-dark-surface p-3">
                      <div className="flex items-start gap-2">
                        <span className={`text-sm ${item.color} flex-shrink-0 mt-0.5`}>{item.icon}</span>
                        <div>
                          <div className="text-[10px] font-semibold text-dark-muted uppercase tracking-wider mb-0.5">
                            {item.label}
                          </div>
                          <div className="text-xs text-dark-text">{item.value}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <span className="text-xs text-dark-muted">
                  Available on{" "}
                  <span className="text-dark-accent font-semibold">Scale tier</span>
                  {" "}· Turns every email into a training moment
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="text-center mb-12">
            <h2
              className="text-[32px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] text-center"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Everything else you need.
            </h2>
            <p className="text-kwotient-muted mt-3 max-w-xl mx-auto">
              The core six get the attention. These are the pieces that make the whole system run.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ADDITIONAL_FEATURES.map((feature) => (
              <div key={feature.title} className="bg-kwotient-surface rounded-2xl border border-kwotient-border p-6 card-hover">
                <div className="h-10 w-10 rounded-xl bg-kwotient-accent/10 flex items-center justify-center mb-4">
                  <span className="text-kwotient-accent text-lg">{feature.icon}</span>
                </div>
                <h3 className="font-bold text-kwotient-ink mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {feature.title}
                </h3>
                <p className="text-sm text-kwotient-muted leading-relaxed mb-3">{feature.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {feature.tiers.map((tier) => (
                    <span key={tier} className="text-[10px] font-semibold text-kwotient-muted bg-white border border-kwotient-border rounded-full px-2 py-0.5">
                      {tier}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Kwotient is NOT */}
      <section className="py-20 bg-kwotient-surface border-t border-kwotient-border">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-[24px] font-bold text-kwotient-ink mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                What Kwotient is.
              </h2>
              <ul className="flex flex-col gap-2.5">
                {[
                  "AI that writes emails the way your best rep would",
                  "A review system that keeps humans in control",
                  "A system that gets better with every campaign",
                  "A platform that amplifies your team's output",
                  "An email-first outreach intelligence tool",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-kwotient-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-kwotient-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-[24px] font-bold text-kwotient-ink mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                What Kwotient is not.
              </h2>
              <ul className="flex flex-col gap-2.5">
                {[
                  "A contact database (bring your own contacts)",
                  "A domain warmup or deliverability tool",
                  "A LinkedIn outreach tool (email-only at launch)",
                  "A \"fire your reps\" solution",
                  "A fully autonomous send-while-you-sleep system",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-sm text-kwotient-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-kwotient-ink">
        <div className="mx-auto max-w-[800px] px-6 text-center">
          <h2 className="text-[32px] font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            See everything working together.
          </h2>
          <p className="text-dark-muted mb-8">
            Run your first campaign free. No credit card, no onboarding call required — unless you want one.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#">
              Start Free — 14 Days
            </Button>
            <Button variant="ghost" size="lg" href="/pricing" className="border-white/30 text-white hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
