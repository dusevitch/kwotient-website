"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function FAQ() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section className="py-[120px] md:py-[80px] bg-kwotient-paper">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16">
          {/* Left: Header */}
          <div
            ref={titleRef as React.RefObject<HTMLDivElement>}
            className={`transition-all duration-700 ${
              titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            }`}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-white px-4 py-1.5 mb-4">
              <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                FAQ
              </span>
            </div>
            <h2
              className="text-[32px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Questions worth asking before you commit.
            </h2>
            <p className="text-kwotient-muted leading-relaxed mb-8">
              We&apos;ve answered the most common ones. If you don&apos;t see yours here, our team is a
              message away.
            </p>
            <div className="flex flex-col gap-3">
              <Button variant="primary" href="/faq" size="sm">
                See all FAQs
              </Button>
              <a
                href="mailto:hello@kwotient.com"
                className="text-sm font-medium text-kwotient-muted hover:text-kwotient-ink transition-colors"
              >
                Email us directly →
              </a>
            </div>
          </div>

          {/* Right: Accordion */}
          <div>
            <Accordion items={FAQ_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  );
}
