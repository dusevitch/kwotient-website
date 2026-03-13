import { StatCounter } from "@/components/ui/StatCounter";
import { STATS, TESTIMONIAL } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="py-[120px] md:py-[80px] bg-dark-bg text-dark-text">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-dark-muted uppercase tracking-wider">
              By the numbers
            </span>
          </div>
          <h2
            className="text-[32px] md:text-[48px] font-extrabold text-white leading-[1.15] tracking-[-0.02em] text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            A team of 3,{" "}
            <span className="text-dark-accent">with the output of 30.</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {STATS.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              decimals={stat.value % 1 !== 0 ? 1 : 0}
              duration={2000}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-20" />

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Quote mark */}
          <div className="text-6xl text-dark-accent/40 leading-none mb-4" style={{ fontFamily: "Georgia, serif" }}>
            &ldquo;
          </div>
          <blockquote className="text-[20px] md:text-[24px] font-medium text-white leading-[1.5] mb-8">
            {TESTIMONIAL.quote}
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            {/* Avatar placeholder */}
            <div
              className="h-12 w-12 rounded-full flex items-center justify-center text-white font-bold"
              style={{ background: "linear-gradient(135deg, #E8590C, #D14B06)" }}
            >
              {TESTIMONIAL.author.charAt(0)}
            </div>
            <div className="text-left">
              <p className="font-semibold text-white">{TESTIMONIAL.author}</p>
              <p className="text-sm text-dark-muted">
                {TESTIMONIAL.role} · {TESTIMONIAL.company}
              </p>
            </div>
          </div>

          {/* Star rating */}
          <div className="flex items-center justify-center gap-1 mt-6">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg key={star} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="text-sm text-dark-muted ml-2">5.0 · Verified G2 review</span>
          </div>
        </div>

        {/* Additional context */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Cost per standard email",
              value: "~$0.28",
              context: "vs. $4–12 with manual rep time",
            },
            {
              label: "Batch of 50 contacts",
              value: "10–15 min",
              context: "From import to review-ready",
            },
            {
              label: "Token cost reduction",
              value: "60%",
              context: "vs. standard AI outreach platforms",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl p-6 border border-white/10 bg-dark-surface text-center"
            >
              <div className="text-3xl font-bold text-dark-accent mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                {item.value}
              </div>
              <p className="font-semibold text-white text-sm mb-1">{item.label}</p>
              <p className="text-xs text-dark-muted">{item.context}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
