"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

const PAIN_CARDS = [
  {
    icon: "⏱",
    stat: "3–4 hours",
    statLabel: "per day",
    title: "Your reps are writing, not selling",
    description:
      "The average SDR spends over 3 hours a day writing emails that could have been drafted in minutes. That's pipeline-building time gone. Every day.",
    color: "from-red-50 to-orange-50",
    borderColor: "border-red-200",
    statColor: "text-red-500",
  },
  {
    icon: "📉",
    stat: "2.1%",
    statLabel: "average reply rate",
    title: "Generic outreach is getting ignored",
    description:
      "Buyers have seen every template. First-name personalization stopped working in 2021. If your email doesn't feel genuinely researched and relevant, it goes in the trash.",
    color: "from-orange-50 to-yellow-50",
    borderColor: "border-orange-200",
    statColor: "text-orange-500",
  },
  {
    icon: "💸",
    stat: "$4–12",
    statLabel: "cost per manually written email",
    title: "Manual outreach is expensive at scale",
    description:
      "Factor in rep time, research, and QA — each manually written cold email costs your business $4 to $12. At volume, that math breaks down fast.",
    color: "from-yellow-50 to-amber-50",
    borderColor: "border-yellow-200",
    statColor: "text-yellow-600",
  },
];

export function ProblemStatement() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section className="py-[120px] md:py-[80px] bg-kwotient-surface">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-red-500 uppercase tracking-wider">
              The real problem
            </span>
          </div>
          <h2
            className="text-[32px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your outreach is broken.{" "}
            <span className="text-kwotient-muted font-bold">You just don&apos;t know it yet.</span>
          </h2>
          <p className="text-[18px] md:text-[20px] text-kwotient-muted leading-[1.6]">
            Most sales teams are stuck in the same trap: spending more time writing emails than
            building pipeline — and still seeing terrible results.
          </p>
        </div>

        {/* Pain cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_CARDS.map((card, index) => (
            <PainCard key={card.title} card={card} index={index} />
          ))}
        </div>

        {/* Bottom callout */}
        <div className="mt-12 text-center">
          <p className="text-base text-kwotient-muted">
            The good news?{" "}
            <span className="font-semibold text-kwotient-ink">
              All three problems have the same solution.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function PainCard({
  card,
  index,
}: {
  card: (typeof PAIN_CARDS)[0];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`bg-white rounded-2xl p-8 border shadow-sm card-hover transition-all duration-700 ${card.borderColor} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Icon */}
      <div className="text-3xl mb-4">{card.icon}</div>

      {/* Stat */}
      <div className="mb-4">
        <span className={`text-4xl font-extrabold ${card.statColor}`} style={{ fontFamily: "var(--font-heading)" }}>
          {card.stat}
        </span>
        <span className="text-sm text-kwotient-muted ml-2">{card.statLabel}</span>
      </div>

      {/* Content */}
      <h3
        className="text-lg font-bold text-kwotient-ink mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {card.title}
      </h3>
      <p className="text-kwotient-muted text-sm leading-relaxed">{card.description}</p>
    </div>
  );
}
