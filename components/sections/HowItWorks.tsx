"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const STEPS = [
  {
    number: "01",
    icon: "◈",
    title: "Connect & Configure",
    description:
      "Connect your CRM (HubSpot, Salesforce, or Pipedrive), upload your sales playbook or SOP, and import your prospect list. Kwotient syncs your data and learns your selling style. Most teams are live in under a day.",
    detail: "One-time setup · CRM two-way sync · Playbook training",
    timeEstimate: "Day 1",
  },
  {
    number: "02",
    icon: "✦",
    title: "AI Researches & Drafts",
    description:
      "Kwotient researches each prospect — news, tech stack, LinkedIn signals — then drafts a personalized email that mirrors their voice, applies your sales methodology, and validates against 70+ quality rules before you ever see it.",
    detail: "AI research · Voice mirroring · 70+ validation rules",
    timeEstimate: "10–15 min per 50 contacts",
  },
  {
    number: "03",
    icon: "◉",
    title: "Review, Approve & Send",
    description:
      "Your queue populates with ready-to-send drafts. Review individually, batch-approve in minutes, or set auto-send rules for your most-trusted sequences. Every email you send feeds back into the system to make the next batch even better.",
    detail: "3 review modes · One-click approve · Continuous learning",
    timeEstimate: "~3 min average review",
  },
];

export function HowItWorks() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section className="py-[120px] md:py-[80px] bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
              How it works
            </span>
          </div>
          <h2
            className="text-[32px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            From playbook to pipeline{" "}
            <span className="text-kwotient-accent">in three steps.</span>
          </h2>
          <p className="text-[18px] text-kwotient-muted leading-[1.6] max-w-xl mx-auto">
            No complicated setup. No weeks of training. Your first campaign goes out
            within 24 hours of signing up.
          </p>
        </div>

        {/* Steps - horizontal flow */}
        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-8 lg:hidden">
          {STEPS.map((step, index) => (
            <StepCard key={step.number} step={step} index={index} />
          ))}
        </div>

        {/* Desktop: inline connector layout so the line always aligns with the circles */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_64px_1fr_64px_1fr] lg:items-start lg:gap-0">
          <StepCard step={STEPS[0]} index={0} />
          <StepConnector />
          <StepCard step={STEPS[1]} index={1} />
          <StepConnector />
          <StepCard step={STEPS[2]} index={2} />
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 rounded-2xl border border-kwotient-border bg-kwotient-surface px-6 py-4">
            <div className="h-8 w-8 rounded-full bg-kwotient-success/20 flex items-center justify-center">
              <svg className="h-4 w-4 text-kwotient-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-sm text-kwotient-muted">
              <span className="font-semibold text-kwotient-ink">No domain warmup needed from us.</span>{" "}
              Pair with Instantly or Warmbox for deliverability setup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepConnector() {
  return (
    /* Vertically aligned to the center of the 64px circle (h-16 = 4rem) */
    <div className="flex items-start pt-8" aria-hidden="true">
      <div className="w-full flex items-center gap-0">
        <div className="flex-1 h-0.5 bg-kwotient-border" />
        <svg
          className="h-3 w-3 text-kwotient-border flex-shrink-0 -ml-px"
          viewBox="0 0 12 12"
          fill="currentColor"
        >
          <path d="M0 5h9.5L6 1.5l1-1L12 6l-5 5.5-1-1L9.5 7H0V5z" />
        </svg>
      </div>
    </div>
  );
}

function StepCard({
  step,
  index,
}: {
  step: (typeof STEPS)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`flex flex-col items-center text-center lg:items-start lg:text-left transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Step number circle */}
      <div className="relative mb-6">
        <div className="h-16 w-16 rounded-full border-2 border-kwotient-border bg-white flex items-center justify-center shadow-sm">
          <span className="text-kwotient-accent text-lg font-bold">{step.icon}</span>
        </div>
        <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-kwotient-accent flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">{index + 1}</span>
        </div>
      </div>

      {/* Step number label */}
      <div className="text-xs font-bold text-kwotient-accent uppercase tracking-widest mb-2">
        Step {step.number}
      </div>

      {/* Title */}
      <h3
        className="text-[22px] font-bold text-kwotient-ink mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p className="text-kwotient-muted leading-relaxed mb-4 text-sm">{step.description}</p>

      {/* Detail tags */}
      <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start mb-3">
        {step.detail.split(" · ").map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-semibold text-kwotient-muted bg-kwotient-surface border border-kwotient-border rounded-full px-2.5 py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Time estimate */}
      <div className="flex items-center gap-1.5 text-xs text-kwotient-muted">
        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium">{step.timeEstimate}</span>
      </div>
    </div>
  );
}
