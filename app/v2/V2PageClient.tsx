"use client";

import { BrowserMockup } from "@/components/ui/BrowserMockup";
import { VideoPlaceholder } from "@/components/ui/VideoPlaceholder";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { StatsSection } from "@/components/sections/StatsSection";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

// ─── Section: Hero ──────────────────────────────────────────────────────────

function HeroSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="relative overflow-hidden bg-kwotient-paper py-24 md:py-[120px]">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 h-[600px] w-[600px] opacity-10 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(232,89,12,0.5) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-[400px] w-[400px] opacity-8 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(37,99,235,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="mx-auto max-w-[1200px] px-6 relative"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-accent/30 bg-kwotient-accent/8 px-4 py-1.5 mb-6">
              <div className="h-1.5 w-1.5 rounded-full bg-kwotient-accent" />
              <span
                className="text-xs font-semibold text-kwotient-accent uppercase tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The Playbook-Driven Difference
              </span>
            </div>

            {/* H1 */}
            <h1
              className="text-[38px] md:text-[52px] lg:text-[56px] font-extrabold text-kwotient-ink leading-[1.08] tracking-[-0.025em] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Email Playbook Your Best Rep{" "}
              <span className="text-kwotient-accent">
                Never Had Time to Write
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-[18px] md:text-[20px] text-kwotient-muted leading-[1.65] mb-8 max-w-[540px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Kwotient doesn&apos;t generate emails randomly. It applies 70+
              rules sourced from the world&apos;s top research in sales
              psychology, negotiation science, and buyer behavior — then runs
              every draft through a 25-step validation pipeline before you see
              it.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Button variant="primary" size="lg" href="#">
                Start Free Trial
              </Button>
              <Button variant="ghost" size="lg" href="#playbook">
                See the Playbook
              </Button>
            </div>

            {/* Trust line */}
            <p className="text-sm text-kwotient-muted">
              No credit card required · 14-day free trial · Cancel anytime
            </p>
          </div>

          {/* Right — browser mockup */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <BrowserMockup />
          </div>
        </div>

        {/* Vs Competitors callout */}
        <div
          className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {[
            {
              icon: "✗",
              title: "ChatGPT / Claude direct",
              description: "Random output. Minimal Guidelines. No validation.",
              negative: true,
            },
            {
              icon: "✗",
              title: "Other AI outreach tools",
              description:
                "Template libraries with AI fill-ins. Expensive fees. Still guesswork.",
              negative: true,
            },
            {
              icon: "✓",
              title: "Kwotient",
              description:
                "70+ rules. 25-step validation. 3-perspective critique. Every email.",
              negative: false,
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl px-6 py-5 border ${
                item.negative
                  ? "bg-white border-kwotient-border"
                  : "bg-kwotient-accent/8 border-kwotient-accent/30"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`text-xl font-bold mt-0.5 ${
                    item.negative ? "text-red-400" : "text-kwotient-success"
                  }`}
                >
                  {item.icon}
                </span>
                <div>
                  <p
                    className="font-semibold text-kwotient-ink text-sm mb-1"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {item.title}
                  </p>
                  <p className="text-sm text-kwotient-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Core Difference ────────────────────────────────────────────────

function CoreDifferenceSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  const problems = [
    {
      title: "Prompt → email. That's it.",
      body: "ChatGPT and similar tools produce different output every time. There's no standard. No validation. No way to know if the email passes even basic sales hygiene. You're gambling with your quota.",
    },
    {
      title: "They can't learn sales science for you",
      body: "Being great at email outreach takes years. You need to internalize SPIN Selling, Challenger, Chris Voss's mirroring technique, Cialdini's influence principles. Most reps never get there. Most AI tools don't know them either.",
    },
    {
      title: "No feedback loop",
      body: "When an AI-generated email fails, you don't know why. There's no explanation. No critique. You just try again and hope.",
    },
  ];

  const solutions = [
    {
      title: "70+ rules. Validated on every email.",
      body: "Every email Kwotient generates runs through a 25-step pipeline that checks 70+ rules sourced from the best research in sales psychology, negotiation, and buyer behavior. Not a vibe check — a real-time automated audit.",
    },
    {
      title: "Built on the experts, applied by AI",
      body: "The playbook draws from Chris Voss's mirroring technique, Jill Konrath's SNAP framework, the Challenger Sale, Cialdini's influence research, and real performance data from Gong Labs. Your emails apply this expertise automatically — on day one, for every rep.",
    },
    {
      title: "You see the reasoning",
      body: "Every generated email includes a full strategy panel explaining every decision: why this email type, which fear was addressed, what was mirrored from their voice profile, and the complete 25-step validation log. You don't just get an email. You get an education.",
    },
  ];

  return (
    <section id="playbook" className="py-24 md:py-[120px] bg-kwotient-surface">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-white px-4 py-1.5 mb-4">
            <span
              className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Core Difference
            </span>
          </div>
          <h2
            className="text-[28px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why AI alone isn&apos;t enough — and why Kwotient is different
          </h2>
        </div>

        {/* Two-column comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left — Problems */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-red-50 border border-red-100 px-5 py-3 mb-2">
              <p
                className="text-sm font-semibold text-red-600 uppercase tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Generic AI email tools
              </p>
            </div>
            {problems.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-white border border-kwotient-border p-6 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${100 + i * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-500 text-xs font-bold">✗</span>
                  </span>
                  <div>
                    <p
                      className="font-semibold text-kwotient-ink mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm text-kwotient-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — Solutions */}
          <div className="flex flex-col gap-4">
            <div className="rounded-xl bg-kwotient-accent/10 border border-kwotient-accent/20 px-5 py-3 mb-2">
              <p
                className="text-sm font-semibold text-kwotient-accent uppercase tracking-wider"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Kwotient
              </p>
            </div>
            {solutions.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-white border border-kwotient-accent/20 p-6 transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full bg-kwotient-success/15 flex items-center justify-center">
                    <span className="text-kwotient-success text-xs font-bold">
                      ✓
                    </span>
                  </span>
                  <div>
                    <p
                      className="font-semibold text-kwotient-ink mb-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {item.title}
                    </p>
                    <p className="text-sm text-kwotient-muted leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: 70+ Rule Playbook ──────────────────────────────────────────────

function PlaybookSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  const researchCards = [
    {
      author: "Chris Voss",
      source: '"Never Split the Difference"',
      principle:
        "Exact mirroring: repeat the last 3–5 words of what someone said. They feel deeply heard and keep talking.",
      powers: "Voice Mirroring rules (MIR-01 through MIR-06)",
    },
    {
      author: "Jill Konrath",
      source: '"SNAP Selling"',
      principle:
        "Frazzled buyers filter ruthlessly. Every email must pass 4 tests: Simple, iNvaluable, Aligned, Priority — or it gets deleted unread.",
      powers: "SNAP Filter critique + subject line rules (SBJ-01 through SBJ-09)",
    },
    {
      author: "Dixon & Adamson",
      source: '"The Challenger Sale"',
      principle:
        "The top-performing reps don't build relationships first. They teach, tailor, and take control of the conversation.",
      powers: "Email type selection and sequence strategy",
    },
    {
      author: "Robert Cialdini",
      source: '"Influence"',
      principle:
        "6 principles of persuasion: reciprocity, commitment, social proof, authority, liking, scarcity. The order and framing of each matters enormously.",
      powers: "Social proof matching, CTA rules (CTA-01 through CTA-13)",
    },
    {
      author: "Gong Labs",
      source: "Revenue Intelligence Report 2023",
      principle:
        "Top performers use 73% more of the customer's own language in outreach. Personalization isn't about demographics — it's about mirroring vocabulary.",
      powers: "Voice extraction and Contact Voice Profile",
    },
    {
      author: "MIT / InsideSales.com",
      source: "Response Speed Study",
      principle:
        "Leads responded to within 5 minutes are 100x more likely to convert than leads contacted 30 minutes later.",
      powers: "Reply urgency tracking and timing intelligence",
    },
  ];

  return (
    <section id="rules" className="py-24 md:py-[120px] bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="text-[32px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.025em] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            70+ rules, sourced from the world&apos;s best{" "}
            <span className="text-kwotient-accent">research in sales</span>
          </h2>
          <p
            className="text-[17px] md:text-[19px] text-kwotient-muted leading-[1.65] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The research behind the rules isn&apos;t ours — it belongs to the
            scientists, negotiators, and sales strategists who spent decades
            figuring out what makes people say yes.
          </p>
        </div>

        {/* Research cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {researchCards.map((card, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-kwotient-border bg-kwotient-paper p-6 flex flex-col gap-4 transition-all duration-500 hover:border-kwotient-accent/30 hover:shadow-md ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${80 + i * 70}ms` }}
            >
              {/* Author */}
              <div>
                <p
                  className="font-extrabold text-kwotient-ink text-[15px]"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {card.author}
                </p>
                <p className="text-xs text-kwotient-accent font-semibold mt-0.5">
                  {card.source}
                </p>
              </div>

              {/* Principle */}
              <p className="text-sm text-kwotient-muted leading-relaxed flex-1">
                {card.principle}
              </p>

              {/* Powers badge */}
              <div className="rounded-lg bg-kwotient-surface border border-kwotient-border px-3 py-2">
                <p className="text-[11px] text-kwotient-muted">
                  <span className="font-semibold text-kwotient-ink">
                    Powers:{" "}
                  </span>
                  {card.powers}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trailing note */}
        <p className="text-center text-sm text-kwotient-muted border-t border-kwotient-border pt-8">
          And 64+ more rules covering opening lines, email structure, reading
          level, CTA framing, cadence spacing, and thread management.
        </p>
      </div>
    </section>
  );
}

// ─── Section: Voice Mirroring ────────────────────────────────────────────────

function VoiceMirroringSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="mirroring" className="py-24 md:py-[120px] bg-dark-bg">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="text-[30px] md:text-[44px] font-extrabold text-white leading-[1.12] tracking-[-0.02em] mb-5 max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your contact&apos;s words, used against them.{" "}
            <span className="text-dark-accent">
              (In the best possible way.)
            </span>
          </h2>
          <p
            className="text-[17px] md:text-[19px] text-dark-muted leading-[1.65] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Kwotient extracts verbatim phrases from every email a contact has
            ever sent you — then builds them into your outreach. Not
            paraphrased. Their actual words.
          </p>
        </div>

        {/* Two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — explanation */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-6"
            }`}
          >
            {/* Stat callout */}
            <div className="rounded-2xl border border-white/15 bg-dark-surface p-6 mb-8">
              <p
                className="text-[42px] md:text-[52px] font-extrabold text-dark-accent leading-none mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                62%
              </p>
              <p className="text-white font-semibold mb-1">higher reply rates</p>
              <p className="text-sm text-dark-muted leading-relaxed">
                when emails use the contact&apos;s own language, versus
                identical emails with generic industry language.
              </p>
            </div>

            {/* What Kwotient captures */}
            <p
              className="text-sm font-semibold text-dark-muted uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Here&apos;s what Kwotient captures from every email your contact
              sends:
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Their exact phrases and preferred vocabulary (stored permanently in their Contact Voice Profile)",
                'Their "why" — their stated motivation, in their own words',
                "Their greeting style (Hey / Hi / Hello / Dear / none) — matched exactly",
                "Their email length and formality level",
                "Their engagement trajectory across the last 3–5 emails (warming, cooling, stable)",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 mt-1 h-4 w-4 rounded-full bg-dark-accent/20 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-dark-accent block" />
                  </span>
                  <span className="text-dark-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Quote */}
            <blockquote className="border-l-2 border-dark-accent pl-5">
              <p className="text-sm text-dark-muted leading-relaxed italic">
                &ldquo;The research behind this is 50 years old. Howard Giles
                proved in 1973 that people naturally trust and feel closer to
                communicators who match their language style. Chris Voss refined
                it into a tactical weapon. Kwotient automates it at scale.&rdquo;
              </p>
            </blockquote>
          </div>

          {/* Right — video placeholder */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-6"
            }`}
          >
            <VideoPlaceholder label="[Voice Mirroring Demo — See how extracted phrases appear in the email draft]" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Overnight Queue ────────────────────────────────────────────────

function OvernightQueueSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  const timeBlocks = [
    {
      time: "11 PM",
      emoji: "🌙",
      label: "You close your laptop",
      body: "Kwotient runs your 200-contact list overnight. For each contact, it researches recent news and signals, selects the right email type based on their pipeline stage, extracts their language from previous emails, drafts a personalized message, runs it through the 25-step validation, and queues it for your review.",
    },
    {
      time: "7 AM",
      emoji: "☀️",
      label: "You check your phone",
      body: "Your review queue has 200 drafted emails waiting. You scan them — 180 look great, you approve in one tap. You tweak 15, reject 5. Total time: 11 minutes. Your coworker is still writing their first email of the day.",
    },
    {
      time: "9 AM",
      emoji: "🚀",
      label: "You're at your desk",
      body: "Your outreach is already running. Hot replies from last night are waiting at the top of your inbox, classified and ready with AI-suggested responses. You handle the warm conversations. The cold outreach takes care of itself.",
    },
  ];

  return (
    <section id="overnight" className="py-24 md:py-[120px] bg-kwotient-paper">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-white px-4 py-1.5 mb-4">
            <span
              className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Overnight Queue
            </span>
          </div>
          <h2
            className="text-[30px] md:text-[44px] font-extrabold text-kwotient-ink leading-[1.12] tracking-[-0.02em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Your outreach is ready{" "}
            <span className="text-kwotient-accent">before you wake up.</span>
          </h2>
        </div>

        {/* Time blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {timeBlocks.map((block, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-white border border-kwotient-border p-7 transition-all duration-500 hover:border-kwotient-accent/30 hover:shadow-md ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${80 + i * 100}ms` }}
            >
              {/* Time badge */}
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{block.emoji}</span>
                <div>
                  <p
                    className="text-[22px] font-extrabold text-kwotient-ink leading-none"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {block.time}
                  </p>
                  <p className="text-xs text-kwotient-muted font-medium mt-0.5">
                    {block.label}
                  </p>
                </div>
              </div>
              <p className="text-sm text-kwotient-muted leading-relaxed">
                {block.body}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stat */}
        <div className="rounded-2xl bg-kwotient-ink text-center px-8 py-6">
          <p
            className="text-white font-semibold text-[16px] md:text-[18px]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Batch of 200 contacts: ~15–25 minutes of AI processing.
          </p>
          <p className="text-dark-muted text-sm mt-1">
            Your time to review and approve: under 15 minutes.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Economics ──────────────────────────────────────────────────────

function EconomicsSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section id="cost" className="py-24 md:py-[120px] bg-white">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="text-[28px] md:text-[42px] font-extrabold text-kwotient-ink leading-[1.12] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The most cost-efficient AI outreach on the market.{" "}
            <span className="text-kwotient-accent">
              Here&apos;s exactly why.
            </span>
          </h2>
          <p
            className="text-[17px] text-kwotient-muted leading-[1.65] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Most AI email tools run every task through expensive frontier
            models. Kwotient routes intelligently — local models handle what
            doesn&apos;t need cloud compute, frontier AI only when complexity
            demands it.
          </p>
        </div>

        {/* Two-column breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Competitors */}
          <div
            className={`rounded-2xl border border-red-100 bg-red-50 p-7 transition-all duration-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <p
              className="text-sm font-semibold text-red-500 uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              What your competitors charge
            </p>
            <ul className="flex flex-col gap-4">
              {[
                {
                  label: "Generic AI outreach tool",
                  value: "$0.90–$1.50 / email",
                  note: "estimated",
                },
                {
                  label: "Manual SDR (fully loaded)",
                  value: "~$75–100K / year",
                  note: "÷ email volume",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-4 border-b border-red-100 pb-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-kwotient-ink">
                      {item.label}
                    </p>
                    <p className="text-xs text-kwotient-muted">{item.note}</p>
                  </div>
                  <span className="text-sm font-bold text-red-500 whitespace-nowrap">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-kwotient-muted leading-relaxed mt-5">
              Per email cost adds up fast. At 500 emails/week that&apos;s
              $18,000–$39,000/year in AI costs alone.
            </p>
          </div>

          {/* Kwotient */}
          <div
            className={`rounded-2xl border border-kwotient-accent/25 bg-kwotient-accent/6 p-7 transition-all duration-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <p
              className="text-sm font-semibold text-kwotient-accent uppercase tracking-wider mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kwotient&apos;s hybrid architecture
            </p>
            <ul className="flex flex-col gap-4">
              {[
                {
                  label: "Standard contacts",
                  value: "~$0.28 / email",
                  note: "cloud-assisted",
                },
                {
                  label: "High-value contacts",
                  value: "$0.39–0.45 / email",
                  note: "full frontier AI",
                },
                {
                  label: "Local LLM tasks",
                  value: "Free",
                  note: "voice extraction, tone detection, history compaction, rule compliance scan",
                },
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-between gap-4 border-b border-kwotient-accent/15 pb-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-kwotient-ink">
                      {item.label}
                    </p>
                    <p className="text-xs text-kwotient-muted">{item.note}</p>
                  </div>
                  <span className="text-sm font-bold text-kwotient-accent whitespace-nowrap">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-kwotient-muted leading-relaxed mt-5">
              A team of 5 sending 500 emails/week: approximately $72/week. Full
              year: ~$3,750.
            </p>
          </div>
        </div>

        {/* Bold callout */}
        <div
          className={`rounded-2xl bg-kwotient-ink px-8 py-7 text-center transition-all duration-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <p
            className="text-white font-bold text-[17px] md:text-[20px] leading-[1.5]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            For a team of 5 on Growth plan:{" "}
            <span className="text-dark-accent">$99/mo in Kwotient</span> +
            ~$72/week in AI costs.
          </p>
          <p className="text-dark-muted text-sm mt-2">
            Versus one additional SDR at $80K/year. You do the math.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Three Perspectives Critique ───────────────────────────────────

function CritiqueSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  const perspectives = [
    {
      icon: "📥",
      title: "The Busy Buyer",
      subtitle: undefined as string | undefined,
      description:
        "Reads as a person receiving 50 vendor emails a month. Would you read past the first line? Does this sound human or like AI? Is it asking too much too soon?",
    },
    {
      icon: "⚡",
      title: "The SNAP Filter",
      subtitle: "Jill Konrath",
      description:
        "Four tests every email must pass: Simple enough to skim in 3 seconds? iNvaluable enough to feel worth replying to? Aligned with what they care about right now? A Priority worth acting on today?",
    },
    {
      icon: "🎯",
      title: "The Voss Empathy Check",
      subtitle: undefined as string | undefined,
      description:
        "Does this trigger 'that's right'? Are their exact words mirrored in the body? Does the ask feel like their idea, not a sales push? Would a master negotiator send this email?",
    },
  ];

  return (
    <section id="critique" className="py-24 md:py-[120px] bg-kwotient-surface">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="text-[28px] md:text-[42px] font-extrabold text-kwotient-ink leading-[1.12] tracking-[-0.02em] mb-5"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Every email gets reviewed by{" "}
            <span className="text-kwotient-accent">three experts</span> before
            you see it.
          </h2>
          <p
            className="text-[17px] text-kwotient-muted leading-[1.65] max-w-2xl mx-auto"
            style={{ fontFamily: "var(--font-body)" }}
          >
            After drafting and validation, Kwotient runs a three-perspective
            critique. Failures are automatically revised. You see the final
            draft alongside the critique notes.
          </p>
        </div>

        {/* Perspective cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {perspectives.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl bg-white border border-kwotient-border p-7 flex flex-col gap-5 transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${80 + i * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl">{p.icon}</span>
                <div>
                  <p
                    className="font-extrabold text-kwotient-ink text-[16px]"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {p.title}
                  </p>
                  {p.subtitle && (
                    <p className="text-xs text-kwotient-muted">{p.subtitle}</p>
                  )}
                </div>
              </div>
              <p className="text-sm text-kwotient-muted leading-relaxed flex-1">
                {p.description}
              </p>
              <div className="rounded-lg border border-kwotient-border bg-kwotient-surface px-3 py-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-kwotient-success" />
                <span className="text-xs font-semibold text-kwotient-muted">
                  PASS / REVISE
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explanation */}
        <p className="text-center text-sm text-kwotient-muted max-w-2xl mx-auto">
          When all three pass, the email lands in your review queue. If any
          fail, the system auto-revises once. If the revision still fails, you
          get both drafts with annotations — so you can make the call.
        </p>
      </div>
    </section>
  );
}

// ─── Section: Transforms Rookies ─────────────────────────────────────────────

function TrainingSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  const metrics = [
    {
      value: "$0",
      label:
        "What you spend on sales training when the training is built into the tool",
    },
    {
      value: "Day 1",
      label: "When a new SDR starts sending expert-level outreach with Kwotient",
    },
    {
      value: "70+",
      label:
        "Research-backed rules applied automatically — no methodology books required",
    },
    {
      value: "10+",
      label:
        "Frameworks embedded: SPIN, Challenger, MEDDIC, Voss, Cialdini, SNAP, and more",
    },
  ];

  return (
    <section id="training" className="py-24 md:py-[120px] bg-dark-bg">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="text-[30px] md:text-[44px] font-extrabold text-white leading-[1.12] tracking-[-0.02em] max-w-3xl mx-auto"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A new rep. Sending like a 10-year veteran.{" "}
            <span className="text-dark-accent">On day one.</span>
          </h2>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-14">
          {metrics.map((item, i) => (
            <div
              key={i}
              className={`rounded-2xl border border-white/10 bg-dark-surface p-6 text-center transition-all duration-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${80 + i * 90}ms` }}
            >
              <p
                className="text-[36px] md:text-[44px] font-extrabold text-dark-accent leading-none mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {item.value}
              </p>
              <p className="text-xs text-dark-muted leading-relaxed">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-dark-muted max-w-2xl mx-auto">
          Kwotient doesn&apos;t just write emails for your team. It teaches them
          why the emails work. Scale tier users see full AI reasoning — every
          framework applied, every decision explained.
        </p>
      </div>
    </section>
  );
}

// ─── Section: FAQ ────────────────────────────────────────────────────────────

function FaqSection() {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  const faqItems = [
    {
      question:
        "I already use ChatGPT to write emails. What does Kwotient add?",
      answer:
        "ChatGPT on its own is a blank page. You get different output every time. There's no validation, no framework, no consistency. Kwotient applies 70+ research-backed rules every time — so your emails are structurally sound, tone-matched, and validated before you see them. It's the difference between asking a genius friend to write an email versus hiring someone who's read every sales book ever written and has a checklist to prove it.",
    },
    {
      question:
        "Other AI tools claim personalization too. What's actually different?",
      answer:
        "Most AI 'personalization' is variable substitution — Hi {first_name}, I noticed {company_name} recently... That's not personalization. That's mail merge with extra steps. Kwotient builds a persistent Contact Voice Profile — capturing their exact phrases, their stated motivation in their own words, their communication style, their emotional trajectory across your last several exchanges. It then builds those verbatim elements into every email. Gong Labs found that top performers use 73% more customer language in their outreach. We automate that at scale.",
    },
    {
      question: "How do I know the AI isn't just making stuff up?",
      answer:
        "Three ways. First, the 25-step validation pipeline catches hallucination-adjacent patterns — fake statistics, unverified claims, re: subject line tricks. Second, social proof is never fabricated — if there's no relevant customer proof for this contact's profile, the email type rotates. Third, Scale tier users see full AI reasoning with every email — every source cited, every framework identified. Nothing is a black box.",
    },
    {
      question:
        "What about deliverability? Won't AI emails get flagged as spam?",
      answer:
        "Two honest answers. First, Kwotient's emails are structurally designed to avoid spam patterns — the rule library includes full spam word scanning and send-time scheduling. Second, we include send throttling (staggered sending with randomized intervals) but we don't do domain warmup — that's a separate discipline. We recommend pairing Kwotient with your preferred warmup tool (Instantly, Warmbox, etc.). We'd rather be honest about what we don't do than overpromise.",
    },
    {
      question:
        "I'm worried my reps will become dependent on AI and stop learning.",
      answer:
        "The opposite. The full strategy explanation panel — why each email was structured the way it was, which fear was targeted, which framework was applied — turns every email into a lesson. Scale tier users specifically report that seeing the AI's reasoning accelerates their own development faster than traditional training. The tool teaches by doing. And if you want to turn it off and write from scratch, you can — Kwotient is always a choice, never a cage.",
    },
  ];

  return (
    <section className="py-24 md:py-[120px] bg-kwotient-surface">
      <div className="mx-auto max-w-[1200px] px-6">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2
            className="text-[28px] md:text-[40px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            For the skeptics.{" "}
            <span className="text-kwotient-muted font-medium">
              (We&apos;ve heard these before.)
            </span>
          </h2>
        </div>

        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Accordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}

// ─── Page Client Root ─────────────────────────────────────────────────────────

export function V2PageClient() {
  return (
    <>
      <main>
        <HeroSection />
        <CoreDifferenceSection />
        <PlaybookSection />
        <VoiceMirroringSection />
        <OvernightQueueSection />
        <EconomicsSection />
        <StatsSection />
        <CritiqueSection />
        <TrainingSection />
        <FaqSection />
        <FinalCTA />
      </main>
    </>
  );
}
