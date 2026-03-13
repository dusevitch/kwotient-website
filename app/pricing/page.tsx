"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { PricingCard } from "@/components/ui/PricingCard";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { PRICING_TIERS, PRICING_FAQ_ITEMS } from "@/lib/constants";

// Note: metadata export is in a separate server component when using 'use client'
// For this page, metadata is declared in the layout or handled by Next.js conventions

const COMPARISON_ROWS = [
  {
    category: "Core Features",
    features: [
      { name: "AI-generated emails", starter: true, growth: true, scale: true },
      { name: "Voice mirroring", starter: true, growth: true, scale: true },
      { name: "Tone detection (8 tones)", starter: true, growth: true, scale: true },
      { name: "3-mode review system", starter: true, growth: true, scale: true },
      { name: "Reply classification", starter: true, growth: true, scale: true },
      { name: "AI Business Research", starter: true, growth: true, scale: true },
      { name: "70+ validation rules", starter: true, growth: true, scale: true },
    ],
  },
  {
    category: "Team & Volume",
    features: [
      { name: "Users", starter: "1", growth: "5", scale: "Unlimited" },
      { name: "Emails/month", starter: "500", growth: "2,500", scale: "10,000" },
      { name: "Team playbook library", starter: false, growth: true, scale: true },
      { name: "Collaboration tools", starter: false, growth: true, scale: true },
    ],
  },
  {
    category: "Integrations",
    features: [
      { name: "HubSpot CRM sync", starter: true, growth: true, scale: true },
      { name: "Salesforce sync", starter: false, growth: true, scale: true },
      { name: "Pipedrive sync", starter: false, growth: true, scale: true },
      { name: "API access", starter: false, growth: false, scale: true },
    ],
  },
  {
    category: "Analytics",
    features: [
      { name: "Campaign tracking", starter: "Basic", growth: "Advanced", scale: "Full" },
      { name: "A/B testing", starter: false, growth: true, scale: true },
      { name: "Reply rate analytics", starter: false, growth: true, scale: true },
      { name: "Revenue attribution", starter: false, growth: false, scale: true },
    ],
  },
  {
    category: "Advanced",
    features: [
      { name: "AI Reasoning Transparency", starter: false, growth: false, scale: true },
      { name: "Custom SOP training", starter: false, growth: false, scale: true },
      { name: "SSO + security controls", starter: false, growth: false, scale: true },
      { name: "White-glove onboarding", starter: false, growth: false, scale: true },
    ],
  },
  {
    category: "Support",
    features: [
      { name: "Email support", starter: true, growth: true, scale: true },
      { name: "Priority support", starter: false, growth: true, scale: true },
      { name: "Onboarding call", starter: false, growth: true, scale: true },
      { name: "Dedicated success manager", starter: false, growth: false, scale: true },
      { name: "SLA (4hr response)", starter: false, growth: false, scale: true },
    ],
  },
];

function FeatureCell({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm font-medium text-kwotient-ink">{value}</span>;
  }
  if (value === true) {
    return (
      <svg className="h-5 w-5 text-kwotient-success mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    );
  }
  return (
    <svg className="h-5 w-5 text-kwotient-border mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
    </svg>
  );
}

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="bg-kwotient-paper min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-white border-b border-kwotient-border">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-6">
            <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
              Transparent pricing
            </span>
          </div>
          <h1
            className="text-[40px] md:text-[56px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pay for output.
            <br />
            <span className="text-kwotient-accent">Not promises.</span>
          </h1>
          <p className="text-[18px] md:text-[20px] text-kwotient-muted leading-[1.6] max-w-xl mx-auto mb-8">
            14-day free trial on every plan. No credit card required. Cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 rounded-xl border border-kwotient-border bg-kwotient-surface p-1.5">
            <button
              onClick={() => setIsAnnual(false)}
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 ${
                !isAnnual
                  ? "bg-white text-kwotient-ink shadow-sm"
                  : "text-kwotient-muted hover:text-kwotient-ink"
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`rounded-lg px-6 py-2.5 text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                isAnnual
                  ? "bg-white text-kwotient-ink shadow-sm"
                  : "text-kwotient-muted hover:text-kwotient-ink"
              }`}
            >
              Annual billing
              <span className="text-[10px] font-bold text-kwotient-success bg-kwotient-success/10 px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {PRICING_TIERS.map((tier) => (
              <PricingCard
                key={tier.id}
                tier={tier}
                isAnnual={isAnnual}
                showNotIncluded={true}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-20 bg-kwotient-paper">
        <div className="mx-auto max-w-[1200px] px-6">
          <h2
            className="text-[32px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] text-center mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Full feature breakdown
          </h2>

          <div className="overflow-hidden rounded-2xl border border-kwotient-border shadow-sm bg-white">
            {COMPARISON_ROWS.map((section, sectionIndex) => (
              <div key={section.category}>
                {/* Category header */}
                <div className="bg-kwotient-surface px-6 py-3 border-b border-kwotient-border">
                  <div className="grid grid-cols-[2fr_1fr_1fr_1fr]">
                    <span className="text-xs font-bold text-kwotient-ink uppercase tracking-wider">
                      {section.category}
                    </span>
                    {["Starter", "Growth", "Scale"].map((tier) => (
                      <span key={tier} className="text-xs font-bold text-kwotient-muted text-center uppercase tracking-wider">
                        {tier}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Feature rows */}
                {section.features.map((feature, featureIndex) => (
                  <div
                    key={feature.name}
                    className={`grid grid-cols-[2fr_1fr_1fr_1fr] px-6 py-3.5 border-b border-kwotient-border last:border-0 ${
                      featureIndex % 2 === 0 ? "bg-white" : "bg-kwotient-paper/50"
                    }`}
                  >
                    <span className="text-sm text-kwotient-muted">{feature.name}</span>
                    <div className="flex items-center justify-center">
                      <FeatureCell value={feature.starter} />
                    </div>
                    <div className="flex items-center justify-center">
                      <FeatureCell value={feature.growth} />
                    </div>
                    <div className="flex items-center justify-center">
                      <FeatureCell value={feature.scale} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Callout */}
      <section className="py-16 bg-dark-bg">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="rounded-2xl border border-white/10 bg-dark-surface p-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 mb-3">
                <span className="text-xs font-semibold text-dark-muted uppercase tracking-wider">Enterprise</span>
              </div>
              <h3
                className="text-[28px] font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                More than 10,000 emails/month?
              </h3>
              <p className="text-dark-muted max-w-lg">
                Custom pricing, unlimited volume, dedicated success management, custom SOP training, and enterprise-grade security. Let&apos;s talk.
              </p>
            </div>
            <div className="flex flex-col gap-3 flex-shrink-0">
              <Button variant="primary" href="mailto:sales@kwotient.com" size="lg">
                Contact Sales
              </Button>
              <p className="text-xs text-dark-muted text-center">
                Response within 4 hours on business days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-kwotient-paper">
        <div className="mx-auto max-w-[800px] px-6">
          <h2
            className="text-[32px] font-extrabold text-kwotient-ink text-center mb-10 tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Pricing questions
          </h2>
          <Accordion items={PRICING_FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
