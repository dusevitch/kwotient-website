"use client";

import { Button } from "./Button";

interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  users: string;
  emails: string;
  highlight: boolean;
  badge: string | null;
  cta: string;
  features: string[];
  notIncluded: string[];
}

interface PricingCardProps {
  tier: PricingTier;
  isAnnual: boolean;
  showNotIncluded?: boolean;
}

export function PricingCard({ tier, isAnnual, showNotIncluded = false }: PricingCardProps) {
  const price = isAnnual ? tier.annualPrice : tier.monthlyPrice;

  return (
    <div
      className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
        tier.highlight
          ? "bg-kwotient-ink text-white shadow-2xl scale-[1.02] border-2 border-kwotient-accent"
          : "bg-white text-kwotient-ink shadow-md border border-kwotient-border hover:shadow-xl hover:-translate-y-1"
      }`}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="bg-kwotient-accent text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            {tier.badge}
          </div>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <h3
          className={`text-xl font-bold mb-1 ${tier.highlight ? "text-white" : "text-kwotient-ink"}`}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {tier.name}
        </h3>
        <p className={`text-sm ${tier.highlight ? "text-dark-muted" : "text-kwotient-muted"}`}>
          {tier.description}
        </p>
      </div>

      {/* Pricing */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className={`text-4xl font-bold ${tier.highlight ? "text-white" : "text-kwotient-ink"}`} style={{ fontFamily: "var(--font-heading)" }}>
            ${price}
          </span>
          <span className={`text-sm ${tier.highlight ? "text-dark-muted" : "text-kwotient-muted"}`}>/month</span>
        </div>
        {isAnnual && (
          <p className={`text-xs mt-1 ${tier.highlight ? "text-dark-muted" : "text-kwotient-muted"}`}>
            Billed annually · Save ${(tier.monthlyPrice - tier.annualPrice) * 12}/yr
          </p>
        )}
        {!isAnnual && (
          <p className={`text-xs mt-1 ${tier.highlight ? "text-dark-muted" : "text-kwotient-muted"}`}>
            Or ${tier.annualPrice}/mo billed annually
          </p>
        )}
      </div>

      {/* Usage limits */}
      <div className={`flex gap-4 mb-6 p-3 rounded-xl ${tier.highlight ? "bg-white/10" : "bg-kwotient-surface"}`}>
        <div className="text-center flex-1">
          <div className={`text-sm font-bold ${tier.highlight ? "text-white" : "text-kwotient-ink"}`}>{tier.users}</div>
          <div className={`text-xs ${tier.highlight ? "text-dark-muted" : "text-kwotient-muted"}`}>Team size</div>
        </div>
        <div className={`w-px ${tier.highlight ? "bg-white/10" : "bg-kwotient-border"}`} />
        <div className="text-center flex-1">
          <div className={`text-sm font-bold ${tier.highlight ? "text-white" : "text-kwotient-ink"}`}>{tier.emails}</div>
          <div className={`text-xs ${tier.highlight ? "text-dark-muted" : "text-kwotient-muted"}`}>Outreach</div>
        </div>
      </div>

      {/* CTA */}
      <div className="mb-6">
        {tier.highlight ? (
          <Button
            variant="primary"
            href={tier.id === "scale" ? "/contact" : "#"}
            className="w-full justify-center"
          >
            {tier.cta}
          </Button>
        ) : (
          <Button
            variant="ghost"
            href={tier.id === "scale" ? "/contact" : "#"}
            className={`w-full justify-center ${tier.highlight ? "border-white/30 text-white hover:bg-white/10" : ""}`}
          >
            {tier.cta}
          </Button>
        )}
        <p className={`text-center text-xs mt-2 ${tier.highlight ? "text-dark-muted" : "text-kwotient-muted"}`}>
          {tier.id === "scale" ? "Custom pricing · Volume discounts" : "14-day free trial · No credit card"}
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-2 flex-1">
        <p className={`text-xs font-semibold uppercase tracking-wider mb-1 ${tier.highlight ? "text-dark-muted" : "text-kwotient-muted"}`}>
          What&apos;s included
        </p>
        {tier.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <svg className="h-4 w-4 text-kwotient-success flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
            <span className={`text-sm ${tier.highlight ? "text-dark-text" : "text-kwotient-ink"}`}>{feature}</span>
          </div>
        ))}

        {showNotIncluded && tier.notIncluded.length > 0 && (
          <>
            <div className={`my-2 h-px ${tier.highlight ? "bg-white/10" : "bg-kwotient-border"}`} />
            {tier.notIncluded.map((feature, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <svg className="h-4 w-4 text-kwotient-muted/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className={`text-sm ${tier.highlight ? "text-dark-muted/60" : "text-kwotient-muted/60"}`}>{feature}</span>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
