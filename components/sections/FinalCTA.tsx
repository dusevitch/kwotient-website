"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-[120px] md:py-[80px] bg-dark-bg overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(232,89,12,0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`mx-auto max-w-[1200px] px-6 text-center relative transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        {/* Pre-headline */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-6">
          <div className="h-1.5 w-1.5 rounded-full bg-dark-accent animate-pulse-soft" />
          <span className="text-xs font-semibold text-dark-muted uppercase tracking-wider">
            Not another AI that replaces your people
          </span>
        </div>

        {/* Main headline */}
        <h2
          className="text-[36px] md:text-[56px] font-extrabold text-white leading-[1.1] tracking-[-0.02em] mb-6 max-w-4xl mx-auto text-center"
          style={{ fontFamily: "var(--font-heading)", textWrap: "balance" } as React.CSSProperties}
        >
          Your reps, amplified.{" "}
          <span className="text-dark-accent">Start in 14 minutes, not 14 weeks.</span>
        </h2>

        {/* Subtext */}
        <p className="text-[18px] md:text-[20px] text-dark-muted leading-[1.6] max-w-2xl mx-auto mb-10">
          Connect your CRM, upload your playbook, and run your first campaign today.
          No code. No lengthy onboarding. No commitment until you&apos;re convinced.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button variant="primary" size="lg" href="#">
            Start Free — 14 Days
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="#"
            className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
          >
            Book a 15-min demo
          </Button>
        </div>

        {/* Social proof row */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-dark-muted">
          {[
            { icon: "✦", text: "No credit card required" },
            { icon: "◈", text: "14-day free trial" },
            { icon: "◎", text: "Cancel anytime" },
            { icon: "◉", text: "Live onboarding included" },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-1.5">
              <span className="text-dark-accent text-xs">{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              {
                title: "Self-serve",
                description: "Start immediately with Starter or Growth. No sales call needed.",
              },
              {
                title: "Guided setup",
                description: "Book a live onboarding call and we'll configure your first campaign together.",
              },
              {
                title: "Enterprise",
                description: "Custom contract, dedicated success manager, and SLA support.",
              },
            ].map((option) => (
              <div key={option.title} className="text-center">
                <h4 className="font-semibold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>
                  {option.title}
                </h4>
                <p className="text-sm text-dark-muted leading-relaxed">{option.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
