"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { Button } from "@/components/ui/Button";

const SOLUTION_POINTS = [
  {
    icon: "✦",
    title: "AI drafts. You approve.",
    description:
      "Kwotient writes every email using your playbook, your language, and prospect research — then puts you in the driver's seat before anything sends.",
  },
  {
    icon: "◈",
    title: "Trained on how YOU sell.",
    description:
      "Upload your SOP, your best-performing sequences, your top rep's style. The AI learns your approach — not a generic template library.",
  },
  {
    icon: "◉",
    title: "The quality bar gets higher over time.",
    description:
      "Reply data, A/B test results, and your edits feed back into the system. The more you use Kwotient, the better it gets at your specific customers.",
  },
];

export function SolutionOverview() {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  return (
    <section className="py-[120px] md:py-[80px] bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section badge */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-secondary/30 bg-kwotient-secondary/8 px-4 py-1.5">
            <span className="text-xs font-semibold text-kwotient-secondary uppercase tracking-wider">
              The Kwotient approach
            </span>
          </div>
        </div>

        <div
          ref={sectionRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          {/* Left: Content */}
          <div>
            <h2
              className="text-[32px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The human stays in the loop.{" "}
              <span className="text-kwotient-accent">The AI handles the heavy lifting.</span>
            </h2>

            <p className="text-[18px] text-kwotient-muted leading-[1.6] mb-10">
              Kwotient isn&apos;t another tool that sends emails while you sleep and hopes for the best.
              It&apos;s a system that makes your team dramatically faster and better — while keeping
              judgment where it belongs: with your reps.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              {SOLUTION_POINTS.map((point, i) => (
                <div
                  key={point.title}
                  className={`flex gap-4 transition-all duration-500`}
                  style={{ transitionDelay: `${i * 100 + 200}ms` }}
                >
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-kwotient-accent/10 flex items-center justify-center">
                    <span className="text-kwotient-accent text-sm font-bold">{point.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kwotient-ink mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                      {point.title}
                    </h3>
                    <p className="text-sm text-kwotient-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <Button variant="primary" href="#">
                See it in action
              </Button>
              <Button variant="ghost" href="/features">
                Explore features
              </Button>
            </div>
          </div>

          {/* Right: Video placeholder */}
          <div>
            <VideoPlaceholder label="See how Kwotient drafts and reviews in 3 minutes" />
            <p className="text-center text-xs text-kwotient-muted mt-3">
              A real campaign walkthrough — from import to first send
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
