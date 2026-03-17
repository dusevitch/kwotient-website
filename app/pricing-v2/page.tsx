"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

// ─── Data ─────────────────────────────────────────────────────────────────────

const CLOUD_TIERS = [
  {
    id: "solo-power",
    name: "Solo Power",
    hook: "Full power. Your API keys, your costs.",
    tagline: "No limits. No markup. Just the engine.",
    monthly: 49,
    annual: 490,
    annualSave: 98,
    seats: 1,
    emailLimit: "Unlimited†",
    api: "You provide keys",
    badge: null,
    highlight: false,
    bestFor: "Technical users",
    cta: "Start Free Trial",
    features: [
      "AI email drafting — full drafts, not suggestions",
      "2 draft variations per email",
      "Sequence mode (6-position cold outreach)",
      "Dialogue mode (reply-based, voice mirroring)",
      "Voice Profile extraction",
      "Concern evolution tracking",
      "Validation engine (spam, word count, opener scan)",
      "Chrome extension (Gmail integration)",
      "Basic analytics dashboard",
      "BYOK — bring your own Groq/Gemini/OpenAI keys",
    ],
    notIncluded: ["Critique & revision AI", "CRM integration", "Manager queue"],
  },
  {
    id: "solo",
    name: "Solo",
    hook: "Your AI email writer, already in Gmail.",
    tagline: "Drafts the email. You review. You send. ~15 seconds.",
    monthly: 69,
    annual: 690,
    annualSave: 138,
    seats: 1,
    emailLimit: "5,000/mo",
    api: "Included",
    badge: null,
    highlight: false,
    bestFor: "Individual reps",
    cta: "Start Free Trial",
    features: [
      "AI email drafting — full drafts, not suggestions",
      "2 draft variations per email",
      "Sequence mode (6-position cold outreach)",
      "Dialogue mode (reply-based, voice mirroring)",
      "Voice Profile extraction",
      "Concern evolution tracking",
      "Validation engine (spam, word count, opener scan)",
      "Chrome extension (Gmail integration)",
      "Basic analytics dashboard",
      "API costs included (no keys required)",
    ],
    notIncluded: ["Critique & revision AI", "CRM integration", "Manager queue"],
  },
  {
    id: "pro",
    name: "Pro",
    hook: "No limits. Full quality review.",
    tagline: "Every email reviewed by AI before it hits your outbox.",
    monthly: 149,
    annual: 1490,
    annualSave: 298,
    seats: 1,
    emailLimit: "Unlimited†",
    api: "Included",
    badge: "Most Popular",
    highlight: true,
    bestFor: "Power users",
    cta: "Start Free Trial",
    features: [
      "Everything in Solo",
      "Unlimited emails (no monthly cap)",
      "Critique & revision — AI quality review before delivery",
      "CRM integration (HubSpot, Salesforce, Pipedrive)",
      "Full analytics dashboard",
      "API costs included",
    ],
    notIncluded: ["Shared contact database", "Manager review queue", "Shared sequences"],
  },
  {
    id: "team",
    name: "Team",
    hook: "The whole team writes like your best closer.",
    tagline: "Shared contacts. Shared sequences. Each rep gets a personalized assistant.",
    monthly: 399,
    annual: 3990,
    annualSave: 798,
    seats: 5,
    emailLimit: "Unlimited†",
    api: "You provide keys",
    badge: null,
    highlight: false,
    bestFor: "Sales teams",
    cta: "Start Free Trial",
    perSeat: 80,
    features: [
      "Everything in Pro — for 5 seats",
      "Shared team contact database",
      "Manager / review queue",
      "Shared sequences across team",
      "Team analytics dashboard",
      "Priority support",
      "BYOK — your API costs stay predictable",
    ],
    notIncluded: ["API access", "Dedicated onboarding"],
  },
  {
    id: "agency",
    name: "Agency",
    hook: "Scale personalized outreach across every client.",
    tagline: "15 seats, unlimited emails, BYOK pricing — your costs stay flat.",
    monthly: 999,
    annual: 9990,
    annualSave: 1998,
    seats: 15,
    emailLimit: "Unlimited†",
    api: "You provide keys",
    badge: "Best Value/Seat",
    highlight: false,
    bestFor: "Agencies",
    cta: "Talk to Sales",
    perSeat: 67,
    features: [
      "Everything in Team — for 15 seats",
      "API access",
      "Dedicated onboarding",
      "Priority support",
      "BYOK — no API markup, ever",
      "Per-seat cost drops to $67 (vs $80 on Team)",
    ],
    notIncluded: [],
  },
];

const DESKTOP_TIERS = [
  {
    id: "desktop-solo",
    name: "Desktop Solo",
    hook: "Your data. Your machine. No cloud.",
    tagline: "Full AI pipeline, runs locally. Works offline.",
    monthly: 39,
    annual: 390,
    annualSave: 78,
    seats: 1,
    emailLimit: "Unlimited†",
    processing: "Local (Ollama)",
    badge: null,
    highlight: false,
    bestFor: "Privacy-first users",
    cta: "Download & Try Free",
    features: [
      "AI email drafting — full local pipeline",
      "2 draft variations per email",
      "Sequence + Dialogue modes",
      "Voice Profile extraction",
      "Validation engine",
      "Chrome extension (connects to local app)",
      "Runs on Ollama (free, open source)",
      "Offline mode — works without internet",
      "No data sent to any server",
      "BYOK for cloud fallback (optional)",
    ],
    notIncluded: ["CRM integration", "Manager queue", "Cloud processing"],
  },
  {
    id: "desktop-pro",
    name: "Desktop Pro",
    hook: "Full power. Zero cloud dependency.",
    tagline: "Critique & revision, CRM integration — all running locally.",
    monthly: 69,
    annual: 690,
    annualSave: 138,
    seats: 1,
    emailLimit: "Unlimited†",
    processing: "Local (Ollama)",
    badge: "Most Popular",
    highlight: true,
    bestFor: "Power local users",
    cta: "Download & Try Free",
    features: [
      "Everything in Desktop Solo",
      "Critique & revision AI (local model)",
      "CRM integration (HubSpot, Salesforce, Pipedrive)",
      "Full analytics dashboard",
      "BYOK for cloud fallback (optional)",
    ],
    notIncluded: ["Shared contact database", "Manager queue"],
  },
  {
    id: "desktop-team",
    name: "Desktop Team",
    hook: "Your team's data never leaves your infrastructure.",
    tagline: "5 seats, shared contacts, manager queue — all on your own hardware.",
    monthly: 199,
    annual: 1990,
    annualSave: 398,
    seats: 5,
    emailLimit: "Unlimited†",
    processing: "Local (Ollama)",
    badge: null,
    highlight: false,
    bestFor: "Teams on own hardware",
    cta: "Talk to Sales",
    perSeat: 40,
    features: [
      "Everything in Desktop Pro — for 5 seats",
      "Shared team contact database",
      "Manager / review queue",
      "Shared sequences across team",
      "Team analytics dashboard",
      "Priority support",
    ],
    notIncluded: ["API access"],
  },
];

const FEATURE_ROWS = [
  {
    category: "Core AI",
    features: [
      { name: "AI email drafting", cloud: ["all"], desktop: ["all"] },
      { name: "2 draft variations per email", cloud: ["all"], desktop: ["all"] },
      { name: "Sequence mode (cold outreach, 6-position)", cloud: ["all"], desktop: ["all"] },
      { name: "Dialogue mode (reply-based, voice mirroring)", cloud: ["all"], desktop: ["all"] },
      { name: "Voice Profile extraction", cloud: ["all"], desktop: ["all"] },
      { name: "Concern evolution tracking", cloud: ["all"], desktop: ["all"] },
      { name: "Validation engine", cloud: ["all"], desktop: ["all"] },
      { name: "Critique & revision (AI quality review)", cloud: ["pro", "team", "agency"], desktop: ["desktop-pro", "desktop-team"] },
    ],
  },
  {
    category: "Integrations",
    features: [
      { name: "Chrome extension (Gmail)", cloud: ["all"], desktop: ["all"] },
      { name: "CRM integration (HubSpot, Salesforce, Pipedrive)", cloud: ["pro", "team", "agency"], desktop: ["desktop-pro", "desktop-team"] },
    ],
  },
  {
    category: "Team Features",
    features: [
      { name: "Shared team contact database", cloud: ["team", "agency"], desktop: ["desktop-team"] },
      { name: "Manager / review queue", cloud: ["team", "agency"], desktop: ["desktop-team"] },
      { name: "Shared sequences across team", cloud: ["team", "agency"], desktop: ["desktop-team"] },
      { name: "Priority support", cloud: ["team", "agency"], desktop: ["desktop-team"] },
      { name: "API access", cloud: ["agency"], desktop: [] },
      { name: "Dedicated onboarding", cloud: ["agency"], desktop: [] },
    ],
  },
  {
    category: "Analytics",
    features: [
      { name: "Analytics dashboard", cloud: ["all"], desktop: ["all"] },
      { name: "Full analytics (rep-level + revenue)", cloud: ["pro", "team", "agency"], desktop: ["desktop-pro", "desktop-team"] },
    ],
  },
  {
    category: "Infrastructure",
    features: [
      { name: "API costs included (no keys needed)", cloud: ["solo", "pro"], desktop: [] },
      { name: "Bring your own API keys (BYOK)", cloud: ["solo-power", "team", "agency"], desktop: ["all"] },
      { name: "Local processing (no cloud)", cloud: [], desktop: ["all"] },
      { name: "Offline mode", cloud: [], desktop: ["all"] },
    ],
  },
];

const COMPETITOR_ROWS = [
  { tool: "Lavender", what: "Coaches you while you write", price: "$29–79/seat/mo", drafts: false, voice: false, sequences: false, highlight: false },
  { tool: "Apollo.io", what: "Prospecting data + basic sequences", price: "$49–99/seat/mo", drafts: "Generic AI", voice: false, sequences: "Cold only", highlight: false },
  { tool: "Outreach.io", what: "Sales engagement sequences", price: "$100–140/seat/mo", drafts: false, voice: false, sequences: true, highlight: false },
  { tool: "Salesloft", what: "Sequences + coaching", price: "$75–125/seat/mo", drafts: "Limited AI", voice: false, sequences: true, highlight: false },
  { tool: "Instantly / Smartlead", what: "Bulk cold email blasting", price: "$37–97/mo flat", drafts: "Template spinner", voice: false, sequences: "Cold only", highlight: false },
  { tool: "Kwotient Solo", what: "Drafts the full email, learns their voice, manages sequences + replies", price: "$69/seat/mo", drafts: true, voice: true, sequences: true, highlight: true },
  { tool: "Kwotient Team", what: "Same + shared team features", price: "$80/seat/mo (5-seat)", drafts: true, voice: true, sequences: true, highlight: true },
];

const UPGRADE_PATHS = [
  { from: "Desktop Solo ($39)", to: "Solo ($69)", reason: "Get cloud speed, CRM integration, no Ollama required" },
  { from: "Solo ($69)", to: "Solo Power ($49)", reason: "Already technical? BYOK removes the email cap for less money" },
  { from: "Solo ($69)", to: "Pro ($149)", reason: "Hitting the 5,000/mo cap, or want AI critique + revision" },
  { from: "Pro ($149)", to: "Team ($399)", reason: "Adding seats, need shared contacts + manager visibility" },
  { from: "Team ($399)", to: "Agency ($999)", reason: "3× the seats, per-seat drops from $80 to $67" },
];

const PRICING_FAQ = [
  {
    question: "What counts as an email toward my monthly limit?",
    answer:
      "An email counts any time Kwotient's expert system is engaged to draft or redraft a message — that's the work of crafting the best possible offer for that prospect. Drafts you don't send, test emails, and internal messages do not count.",
  },
  {
    question: "Can I edit the final draft before sending?",
    answer:
      "Yes. Every draft is fully editable before it leaves your queue. Any changes you make are captured and used to continuously refine the system's output. Over time, it learns exactly how you write and what you prefer, so you edit less and less.",
  },
  {
    question: "What does 'Unlimited†' mean?",
    answer:
      "No artificial cap from us. Emails are still subject to Gmail's daily send limits (~150–200/day per connected account). If you're sending at scale, pairing Kwotient with a tool like Instantly or Warmbox for deliverability management is recommended.",
  },
  {
    question: "How does BYOK (bring your own keys) work?",
    answer:
      "You provide API keys from Groq, Gemini, or OpenAI. Kwotient routes requests through your account, so you pay those API providers directly at their published rates. There's no Kwotient markup. Solo Power and Team tiers are designed for users who want maximum control over API costs.",
  },
  {
    question: "What's the difference between Cloud and Desktop?",
    answer:
      "Cloud tiers run on Kwotient's infrastructure — fast, no setup, CRM-ready from day one. Desktop tiers run the AI pipeline locally on your machine using Ollama (free, open source). Your contacts and email content never leave your hardware. The Desktop app works offline and is priced lower because we're not paying for inference compute.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes — all Cloud tiers include a 14-day free trial, no credit card required. Desktop tiers are free to download and test with limited drafts before you subscribe.",
  },
  {
    question: "How does annual billing work?",
    answer:
      "Annual plans are billed as a single upfront payment covering 12 months, equivalent to 2 months free (saves $98–$1,998 depending on tier). You can cancel before the next annual renewal — no refunds on the current period.",
  },
  {
    question: "Can I upgrade or downgrade mid-cycle?",
    answer:
      "Upgrades take effect immediately and are billed pro-rated. Downgrades take effect at the start of your next billing cycle — you keep full access through the period you've paid for.",
  },
];

// ─── Components ────────────────────────────────────────────────────────────────

function Check() {
  return (
    <svg className="h-4 w-4 text-kwotient-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
  );
}

function X() {
  return (
    <svg className="h-4 w-4 text-kwotient-border flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function CellValue({ value }: { value: boolean | string }) {
  if (value === true) return <Check />;
  if (value === false) return <X />;
  return <span className="text-xs font-semibold text-kwotient-accent">{value}</span>;
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PricingV2Page() {
  const [annual, setAnnual] = useState(false);
  const [mode, setMode] = useState<"cloud" | "desktop">("cloud");
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const tiers = mode === "cloud" ? CLOUD_TIERS : DESKTOP_TIERS;

  return (
    <div className="bg-kwotient-paper min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white border-b border-kwotient-border">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-5">
            <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
              Pricing
            </span>
          </div>
          <h1
            className="text-[36px] md:text-[52px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.025em] mb-4 max-w-3xl mx-auto text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pay for the engine.{" "}
            <span className="text-kwotient-accent">Not the seat count.</span>
          </h1>
          <p className="text-[18px] text-kwotient-muted leading-[1.6] max-w-xl mx-auto mb-10">
            Flat monthly pricing. No per-email fees. No surprise charges.
            14-day free trial on all Cloud tiers — no credit card required.
          </p>

          {/* Cloud / Desktop toggle */}
          <div className="inline-flex items-center gap-1 rounded-xl border border-kwotient-border bg-kwotient-surface p-1 mb-8">
            {(["cloud", "desktop"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 capitalize ${
                  mode === m
                    ? "bg-white shadow-sm text-kwotient-ink"
                    : "text-kwotient-muted hover:text-kwotient-ink"
                }`}
              >
                {m === "cloud" ? "☁ Cloud" : "⬛ Desktop (Local)"}
              </button>
            ))}
          </div>

          {/* Monthly / Annual toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!annual ? "text-kwotient-ink" : "text-kwotient-muted"}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative h-6 w-11 rounded-full transition-colors duration-200 ${
                annual ? "bg-kwotient-accent" : "bg-kwotient-border"
              }`}
              aria-label="Toggle annual billing"
            >
              <span
                className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
                  annual ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${annual ? "text-kwotient-ink" : "text-kwotient-muted"}`}>
              Annual
            </span>
            <span className="text-xs font-semibold text-kwotient-success bg-kwotient-success/10 px-2 py-0.5 rounded-full">
              2 months free
            </span>
          </div>
        </div>
      </section>

      {/* Tier cards */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className={`grid gap-5 ${
            mode === "cloud"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
              : "grid-cols-1 md:grid-cols-3"
          }`}>
            {tiers.map((tier) => {
              const price = annual
                ? Math.round((tier.annual / 12))
                : tier.monthly;
              const isHighlight = tier.highlight;

              return (
                <div
                  key={tier.id}
                  className={`relative rounded-2xl border flex flex-col ${
                    isHighlight
                      ? "border-kwotient-accent bg-white shadow-xl ring-2 ring-kwotient-accent/20"
                      : "border-kwotient-border bg-white"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-kwotient-accent text-white px-3 py-1 rounded-full whitespace-nowrap">
                        {tier.badge}
                      </span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    {/* Header */}
                    <div className="mb-5">
                      <h2
                        className="text-[17px] font-bold text-kwotient-ink mb-1"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {tier.name}
                      </h2>
                      <p className="text-[11px] text-kwotient-muted leading-snug">
                        {tier.tagline}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="mb-5">
                      <div className="flex items-end gap-1">
                        <span
                          className="text-[36px] font-extrabold text-kwotient-ink leading-none"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          ${price}
                        </span>
                        <span className="text-sm text-kwotient-muted mb-1">/mo</span>
                      </div>
                      {annual && (
                        <p className="text-[11px] text-kwotient-muted mt-1">
                          ${tier.annual}/yr — save ${tier.annualSave}
                        </p>
                      )}
                      {"perSeat" in tier && tier.perSeat && (
                        <p className="text-[11px] text-kwotient-accent font-semibold mt-1">
                          ${tier.perSeat}/seat/mo
                        </p>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-col gap-1.5 mb-5 pb-5 border-b border-kwotient-border">
                      <div className="flex justify-between text-[12px]">
                        <span className="text-kwotient-muted">Seats</span>
                        <span className="font-semibold text-kwotient-ink">{tier.seats}</span>
                      </div>
                      <div className="flex justify-between text-[12px]">
                        <span className="text-kwotient-muted">Emails</span>
                        <span className="font-semibold text-kwotient-ink">{tier.emailLimit}</span>
                      </div>
                      {"api" in tier && (
                        <div className="flex justify-between text-[12px]">
                          <span className="text-kwotient-muted">API costs</span>
                          <span className="font-semibold text-kwotient-ink text-right max-w-[120px] leading-tight">{tier.api}</span>
                        </div>
                      )}
                      {"processing" in tier && (
                        <div className="flex justify-between text-[12px]">
                          <span className="text-kwotient-muted">Processing</span>
                          <span className="font-semibold text-kwotient-ink">{tier.processing}</span>
                        </div>
                      )}
                    </div>

                    {/* Features */}
                    <ul className="flex flex-col gap-2 mb-6 flex-1">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <Check />
                          <span className="text-[12px] text-kwotient-muted leading-snug">{f}</span>
                        </li>
                      ))}
                      {tier.notIncluded.map((f) => (
                        <li key={f} className="flex items-start gap-2 opacity-50">
                          <X />
                          <span className="text-[12px] text-kwotient-muted leading-snug">{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <a
                      href="#"
                      className={`block w-full text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 ${
                        isHighlight
                          ? "bg-kwotient-accent text-white hover:bg-kwotient-accent-hover"
                          : "bg-kwotient-surface text-kwotient-ink hover:bg-kwotient-border"
                      }`}
                    >
                      {tier.cta}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {mode === "cloud" && (
            <p className="text-xs text-kwotient-muted text-center mt-5">
              † Unlimited subject to Gmail daily send limits (~150–200/day per connected account). No artificial cap from Kwotient.
            </p>
          )}
          {mode === "desktop" && (
            <p className="text-xs text-kwotient-muted text-center mt-5">
              † Unlimited subject to Gmail daily limits. Requires Ollama installed locally (free, open source).
              Chrome extension connects to your locally-running desktop app.
            </p>
          )}
        </div>
      </section>

      {/* Feature comparison table */}
      <section className="py-16 bg-white border-y border-kwotient-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2
                className="text-[26px] md:text-[32px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em]"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Full feature breakdown.
              </h2>
              <p className="text-kwotient-muted text-sm mt-1">What&apos;s included at each tier.</p>
            </div>
            <button
              onClick={() => setShowAllFeatures(!showAllFeatures)}
              className="text-sm font-semibold text-kwotient-accent hover:text-kwotient-accent-hover transition-colors"
            >
              {showAllFeatures ? "Collapse ↑" : "Expand all ↓"}
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-kwotient-border">
                  <th className="text-left py-3 pr-4 text-xs font-semibold text-kwotient-muted uppercase tracking-wider w-64">
                    Feature
                  </th>
                  {(mode === "cloud" ? CLOUD_TIERS : DESKTOP_TIERS).map((t) => (
                    <th
                      key={t.id}
                      className={`text-center py-3 px-2 text-xs font-bold uppercase tracking-wider ${
                        t.highlight ? "text-kwotient-accent" : "text-kwotient-muted"
                      }`}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_ROWS.map((group) => (
                  <>
                    <tr key={`cat-${group.category}`} className="border-b border-kwotient-surface">
                      <td
                        colSpan={(mode === "cloud" ? CLOUD_TIERS : DESKTOP_TIERS).length + 1}
                        className="py-3 text-[11px] font-bold text-kwotient-muted uppercase tracking-widest bg-kwotient-surface px-3 rounded"
                      >
                        {group.category}
                      </td>
                    </tr>
                    {group.features
                      .filter((_, i) => showAllFeatures || i < 3)
                      .map((feature) => (
                        <tr key={feature.name} className="border-b border-kwotient-border/50 hover:bg-kwotient-surface/50 transition-colors">
                          <td className="py-3 pr-4 text-sm text-kwotient-ink">{feature.name}</td>
                          {(mode === "cloud" ? CLOUD_TIERS : DESKTOP_TIERS).map((tier) => {
                            const cloudIds = feature.cloud;
                            const desktopIds = feature.desktop;
                            const ids = mode === "cloud" ? cloudIds : desktopIds;
                            const included = ids.includes("all") || ids.includes(tier.id);
                            return (
                              <td key={tier.id} className="py-3 px-2 text-center">
                                <div className="flex items-center justify-center">
                                  {included ? <Check /> : <X />}
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>

          {!showAllFeatures && (
            <button
              onClick={() => setShowAllFeatures(true)}
              className="mt-6 w-full py-3 text-sm font-semibold text-kwotient-muted border border-kwotient-border rounded-xl hover:border-kwotient-accent hover:text-kwotient-accent transition-all"
            >
              Show all features ↓
            </button>
          )}
        </div>
      </section>

      {/* Competitor comparison */}
      <section className="py-16">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-white px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                How we stack up
              </span>
            </div>
            <h2
              className="text-[26px] md:text-[32px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What each tool actually does.
            </h2>
            <p className="text-kwotient-muted text-sm max-w-xl">
              Most tools in this space do one thing. Kwotient does all three — and does them based on how
              each prospect actually communicates, not a template.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-kwotient-border">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="bg-kwotient-surface border-b border-kwotient-border">
                  <th className="text-left py-4 px-5 text-xs font-semibold text-kwotient-muted uppercase tracking-wider">Tool</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-kwotient-muted uppercase tracking-wider">What it does</th>
                  <th className="text-left py-4 px-4 text-xs font-semibold text-kwotient-muted uppercase tracking-wider">Price</th>
                  <th className="text-center py-4 px-4 text-xs font-semibold text-kwotient-muted uppercase tracking-wider">Full drafts</th>
                  <th className="text-center py-4 px-4 text-xs font-semibold text-kwotient-muted uppercase tracking-wider">Voice mirroring</th>
                  <th className="text-center py-4 px-4 text-xs font-semibold text-kwotient-muted uppercase tracking-wider">Sequences + replies</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITOR_ROWS.map((row) => (
                  <tr
                    key={row.tool}
                    className={`border-b border-kwotient-border last:border-0 ${
                      row.highlight ? "bg-kwotient-accent/5" : "hover:bg-kwotient-surface/50"
                    } transition-colors`}
                  >
                    <td className={`py-4 px-5 text-sm font-bold ${row.highlight ? "text-kwotient-accent" : "text-kwotient-ink"}`}>
                      {row.tool}
                    </td>
                    <td className="py-4 px-4 text-sm text-kwotient-muted max-w-[200px] leading-snug">{row.what}</td>
                    <td className={`py-4 px-4 text-sm font-semibold ${row.highlight ? "text-kwotient-accent" : "text-kwotient-muted"}`}>
                      {row.price}
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <CellValue value={row.drafts} />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <CellValue value={row.voice} />
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex items-center justify-center">
                        <CellValue value={row.sequences} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Why the prices hold */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                tier: "Solo — $69",
                copy: "Lavender charges $79 just to coach you while you type. Kwotient writes the email, validates it against quality rules, and tracks voice patterns across the conversation. Positioned just under Lavender, dramatically more capable.",
              },
              {
                tier: "Team — $80/seat",
                copy: "Outreach.io costs $100–140/seat and writes zero words for you. Kwotient handles the full draft plus handles replies differently for every contact based on how they actually communicate.",
              },
              {
                tier: "Agency — $67/seat",
                copy: "Cheaper per seat than Team, with 3× the seats. BYOK means you pay API providers directly — no markup, ever. The subscription covers the engine, the rules system, and the platform.",
              },
            ].map((item) => (
              <div key={item.tier} className="bg-white rounded-2xl border border-kwotient-border p-6">
                <h3
                  className="text-base font-bold text-kwotient-accent mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.tier}
                </h3>
                <p className="text-sm text-kwotient-muted leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upgrade paths */}
      <section className="py-16 bg-kwotient-ink">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2
            className="text-[24px] md:text-[32px] font-extrabold text-white leading-[1.15] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Natural upgrade paths.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {UPGRADE_PATHS.map((path) => (
              <div key={path.from} className="rounded-xl bg-dark-surface border border-white/10 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-dark-muted">{path.from}</span>
                  <span className="text-dark-muted">→</span>
                  <span className="text-xs font-bold text-dark-accent">{path.to}</span>
                </div>
                <p className="text-sm text-dark-muted leading-relaxed">{path.reason}</p>
              </div>
            ))}
            <div className="rounded-xl bg-kwotient-accent/10 border border-kwotient-accent/30 p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold text-dark-muted">Any tier</span>
                <span className="text-dark-muted">→</span>
                <span className="text-xs font-bold text-dark-accent">Enterprise</span>
              </div>
              <p className="text-sm text-dark-muted leading-relaxed">
                Custom seat count, dedicated GPU, SLA, white-label options. Contact sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[800px] px-6">
          <h2
            className="text-[24px] md:text-[32px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pricing FAQ.
          </h2>
          <Accordion items={PRICING_FAQ} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-kwotient-surface border-t border-kwotient-border">
        <div className="mx-auto max-w-[600px] px-6 text-center">
          <h2
            className="text-[26px] font-extrabold text-kwotient-ink tracking-[-0.02em] mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Start with a 14-day free trial.
          </h2>
          <p className="text-kwotient-muted mb-8">
            No credit card. No onboarding call required — unless you want one.
            Your first campaign goes out same day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#">
              Start Free Trial
            </Button>
            <Button variant="ghost" size="lg" href="/contact">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
