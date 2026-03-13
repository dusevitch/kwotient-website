"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { PricingCard } from "@/components/ui/PricingCard";
import { PRICING_TIERS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function PricingPreview() {
  const [isAnnual, setIsAnnual] = useState(true);
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section className="py-[120px] md:py-[80px] bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
              Pricing
            </span>
          </div>
          <h2
            className="text-[32px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pay for output, not headcount.
          </h2>
          <p className="text-[18px] text-kwotient-muted leading-[1.6] max-w-xl mx-auto mb-8">
            14-day free trial on every plan. No credit card required.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 rounded-xl border border-kwotient-border bg-kwotient-surface p-1.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                !isAnnual
                  ? "bg-white text-kwotient-ink shadow-sm"
                  : "text-kwotient-muted hover:text-kwotient-ink"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                isAnnual
                  ? "bg-white text-kwotient-ink shadow-sm"
                  : "text-kwotient-muted hover:text-kwotient-ink"
              }`}
            >
              Annual
              <span className="text-[10px] font-bold text-kwotient-success bg-kwotient-success/10 px-1.5 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-10">
          {PRICING_TIERS.map((tier) => (
            <PricingCard key={tier.id} tier={tier} isAnnual={isAnnual} />
          ))}
        </div>

        {/* View full pricing CTA */}
        <div className="text-center">
          <Button variant="ghost" href="/pricing" size="md">
            View full pricing & feature comparison →
          </Button>
        </div>

        {/* Trust signals */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-kwotient-muted">
          {[
            "No lock-in contracts",
            "Cancel anytime",
            "SOC 2 compliant",
            "GDPR ready",
            "99.9% uptime SLA",
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <svg className="h-4 w-4 text-kwotient-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
