import { Button } from "@/components/ui/Button";
import { BrowserMockup } from "@/components/ui/BrowserMockup";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-kwotient-paper pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, rgba(232,89,12,0.15) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.2) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(#0F1729 1px, transparent 1px), linear-gradient(90deg, #0F1729 1px, transparent 1px)`,
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left: Text (60%) */}
          <div className="flex-1 max-w-2xl lg:max-w-none" style={{ flexBasis: "55%" }}>
            {/* Badge */}
            <div className="hero-h1 mb-6 inline-flex items-center gap-2 rounded-full border border-kwotient-accent/30 bg-kwotient-accent/8 px-4 py-1.5">
              <div className="h-1.5 w-1.5 rounded-full bg-kwotient-accent" />
              <span className="text-xs font-semibold text-kwotient-accent tracking-wide uppercase">
                AI outreach · Human in the loop
              </span>
            </div>

            {/* H1 */}
            <h1
              className="hero-h1 text-[40px] md:text-[56px] lg:text-[64px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Send Emails That Sound{" "}
              <span className="relative">
                <span className="text-kwotient-accent">Human.</span>
              </span>{" "}
              At a Scale That{" "}
              <span className="relative">
                <em className="not-italic text-kwotient-secondary">Isn&apos;t.</em>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-[18px] md:text-[20px] text-kwotient-muted leading-[1.6] mb-8 max-w-xl">
              Kwotient drafts AI-powered outreach trained on your top performers, then keeps you in
              the loop to review, approve, and send. More volume. Better quality. A fraction of the cost.
            </p>

            {/* CTA Group */}
            <div className="hero-cta flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10">
              <Button variant="primary" size="lg" href="#">
                Start Free — 14 Days
              </Button>
              <Button variant="ghost" size="lg" href="/features">
                See How It Works
              </Button>
            </div>

            {/* Social proof tickers */}
            <div className="hero-cta flex flex-wrap items-center gap-6">
              {[
                { icon: "✦", text: "10x email output per rep" },
                { icon: "◈", text: "4.8x higher reply rates" },
                { icon: "◎", text: "No credit card required" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <span className="text-kwotient-accent text-xs">{item.icon}</span>
                  <span className="text-sm font-medium text-kwotient-muted">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Browser Mockup (40%) */}
          <div className="w-full lg:w-auto hero-visual" style={{ flexBasis: "45%", flexShrink: 0 }}>
            <BrowserMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
