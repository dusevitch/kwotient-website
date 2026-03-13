"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const FEATURES = [
  {
    tag: "Core AI",
    icon: "✦",
    title: "AI Email Generation",
    subtitle: "70+ rule validation on every draft",
    description:
      "Every email Kwotient drafts passes through a 70+ rule validation engine trained on your playbook. Subject line effectiveness, opening hook strength, value proposition clarity, CTA specificity — all checked before the draft reaches your queue. Your reps review the output, not the process.",
    highlight: "Your SOP, enforced on every single send.",
    bullets: [
      "Playbook-trained, not template-based",
      "Subject line scoring + alternatives",
      "70+ validation rules pre-send",
      "Learns from your edits over time",
    ],
    mockup: "email-gen",
  },
  {
    tag: "Personalization",
    icon: "◈",
    title: "Voice Mirroring",
    subtitle: "Sounds like them, sells for you",
    description:
      "Kwotient analyzes each prospect's writing patterns — vocabulary, sentence length, formality level, punctuation habits — and mirrors them in your outreach. When your email reads like the prospect's own communication style, it doesn't feel like a cold email. It feels like the start of a conversation they want to have.",
    highlight: "Personalization that goes beyond first name.",
    bullets: [
      "Analyzes prospect email history",
      "Extracts vocabulary and formality signals",
      "Mirrors sentence structure",
      "Updates dynamically with each new reply",
    ],
    mockup: "voice-mirror",
  },
  {
    tag: "Intelligence",
    icon: "◎",
    title: "Tone Detection Engine",
    subtitle: "8 tone classifications, automatic adjustment",
    description:
      "When a prospect replies, Kwotient classifies the tone across 8 categories: warm interest, polite disinterest, technical skepticism, pricing objection, authority challenge, FOMO signal, re-engagement opportunity, and competitive comparison. The AI adjusts its next draft accordingly — matching energy, addressing concerns, or shifting its entire approach.",
    highlight: "React to how they actually feel, not just what they say.",
    bullets: [
      "8 inbound tone classifications",
      "Auto-adjusts response strategy",
      "Flags aggressive objections for human review",
      "Tracks tone patterns across sequences",
    ],
    mockup: "tone-detect",
  },
  {
    tag: "Workflow",
    icon: "⊞",
    title: "3-Mode Review System",
    subtitle: "You set the level of control",
    description:
      "Individual Review for campaigns where every word matters — you read each email, make edits, hit send. Batch Approve when you trust the system and just need to scan 50 emails in 3 minutes. Auto Mode for your highest-confidence, well-trained sequences. Switch modes per campaign, not per account.",
    highlight: "Control that scales with your confidence in the system.",
    bullets: [
      "Individual review: full edit access",
      "Batch mode: scan + approve in minutes",
      "Auto mode: rule-based sending",
      "Per-campaign mode switching",
    ],
    mockup: "review-system",
  },
  {
    tag: "Research",
    icon: "◐",
    title: "AI Business Research",
    subtitle: "Researches every prospect before drafting",
    description:
      "Before Kwotient drafts a single word, it researches the prospect: recent company news, LinkedIn activity, funding rounds, technology stack, job changes, and publicly available signals. The email arrives genuinely informed — not just personalized with a field merge. Your reps used to skip this step. Now they don't have to.",
    highlight: "The research your reps skip. Done automatically.",
    bullets: [
      "Company news and press monitoring",
      "Tech stack detection",
      "Job change and funding signals",
      "LinkedIn activity summarization",
    ],
    mockup: "research",
  },
];

function FeatureMockup({ type, flipped }: { type: string; flipped: boolean }) {
  const colors: Record<string, string> = {
    "email-gen": "#E8590C",
    "voice-mirror": "#2563EB",
    "tone-detect": "#16A34A",
    "review-system": "#7C3AED",
    research: "#0891B2",
  };

  const accentColor = colors[type] || "#E8590C";

  return (
    <div
      className="rounded-2xl overflow-hidden shadow-xl border border-kwotient-border bg-white"
      style={{ minHeight: "320px" }}
    >
      {/* Mock header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-kwotient-border bg-kwotient-surface">
        <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <div className="flex-1 mx-4 h-5 rounded bg-kwotient-border/50" />
      </div>

      {/* Mock content */}
      <div className="p-5 flex flex-col gap-3">
        {/* Top row */}
        <div className="flex items-center gap-3">
          <div
            className="h-8 w-8 rounded-lg flex-shrink-0"
            style={{ background: `${accentColor}20` }}
          >
            <div className="h-full w-full flex items-center justify-center">
              <div className="h-3 w-3 rounded" style={{ background: accentColor }} />
            </div>
          </div>
          <div className="flex-1">
            <div className="h-3 w-32 rounded bg-kwotient-ink/80 mb-1.5" />
            <div className="h-2.5 w-24 rounded bg-kwotient-muted/40" />
          </div>
          <div
            className="h-6 w-16 rounded-full text-[9px] flex items-center justify-center font-semibold text-white"
            style={{ background: accentColor }}
          >
            Active
          </div>
        </div>

        {/* Score bar */}
        <div className="rounded-xl p-3 bg-kwotient-surface">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] font-semibold text-kwotient-muted">AI Quality Score</span>
            <span className="text-[10px] font-bold" style={{ color: accentColor }}>94/100</span>
          </div>
          <div className="h-2 rounded-full bg-kwotient-border overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{ width: "94%", background: accentColor }}
            />
          </div>
        </div>

        {/* Email preview */}
        <div className="rounded-xl border border-kwotient-border p-4">
          <div className="flex flex-col gap-1.5">
            <div className="h-2.5 w-48 rounded bg-kwotient-ink/70" />
            <div className="h-2 w-full rounded bg-kwotient-muted/30" />
            <div className="h-2 w-full rounded bg-kwotient-muted/30" />
            <div className="h-2 w-3/4 rounded bg-kwotient-muted/30" />
            <div className="h-2 w-full rounded bg-kwotient-muted/30 mt-1" />
            <div className="h-2 w-2/3 rounded bg-kwotient-muted/30" />
          </div>
        </div>

        {/* Action row */}
        <div className="flex gap-2">
          <div
            className="flex-1 h-8 rounded-lg flex items-center justify-center text-[9px] font-semibold text-white"
            style={{ background: accentColor }}
          >
            Approve & Send
          </div>
          <div className="h-8 w-20 rounded-lg border border-kwotient-border flex items-center justify-center text-[9px] font-semibold text-kwotient-muted">
            Edit Draft
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureRow({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const isFlipped = index % 2 !== 0;
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col ${isFlipped ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-center transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
    >
      {/* Content */}
      <div className="flex-1">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 rounded-full bg-kwotient-accent/10 px-3 py-1 mb-4">
          <span className="text-kwotient-accent text-xs">{feature.icon}</span>
          <span className="text-xs font-semibold text-kwotient-accent uppercase tracking-wider">
            {feature.tag}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-[28px] md:text-[32px] font-bold text-kwotient-ink leading-[1.2] tracking-[-0.01em] mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {feature.title}
        </h3>
        <p className="text-kwotient-accent font-semibold text-sm mb-4">{feature.subtitle}</p>

        {/* Description */}
        <p className="text-kwotient-muted leading-[1.65] mb-6 text-[16px]">
          {feature.description}
        </p>

        {/* Highlight callout */}
        <div className="flex items-start gap-3 p-4 rounded-xl bg-kwotient-surface border border-kwotient-border mb-6">
          <span className="text-kwotient-accent text-lg flex-shrink-0">→</span>
          <p className="text-sm font-semibold text-kwotient-ink">{feature.highlight}</p>
        </div>

        {/* Bullets */}
        <ul className="flex flex-col gap-2">
          {feature.bullets.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2.5">
              <svg className="h-4 w-4 text-kwotient-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-kwotient-muted">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Visual */}
      <div className="flex-1 w-full max-w-lg">
        <FeatureMockup type={feature.mockup} flipped={isFlipped} />
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  return (
    <section className="py-[120px] md:py-[80px] bg-kwotient-paper">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-white px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
              Platform capabilities
            </span>
          </div>
          <h2
            className="text-[32px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Not another AI that replaces your people.
            <br />
            <span className="text-kwotient-accent">One that makes them unstoppable.</span>
          </h2>
          <p className="text-[18px] text-kwotient-muted leading-[1.6] max-w-2xl mx-auto">
            Five deeply-built capabilities that work together to make every email your best one yet.
          </p>
        </div>

        {/* Feature rows */}
        <div className="flex flex-col gap-24">
          {FEATURES.map((feature, index) => (
            <FeatureRow key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
