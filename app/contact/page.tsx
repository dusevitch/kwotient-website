import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Kwotient",
  description:
    "Get in touch with the Kwotient team. Questions, partnerships, press — we reply within a few hours.",
  robots: "index, follow",
  alternates: {
    canonical: "https://kwotient.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="bg-kwotient-paper min-h-screen">
      <section className="pt-32 pb-20 bg-white border-b border-kwotient-border">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-6">
              <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                Get in touch
              </span>
            </div>
            <h1
              className="text-[40px] md:text-[52px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              We&apos;d love to{" "}
              <span className="text-kwotient-accent">hear from you.</span>
            </h1>
            <p className="text-[18px] text-kwotient-muted leading-[1.6]">
              Whether you have a product question, want to explore a partnership, or just want to
              talk outreach strategy — our inbox is open.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
            {[
              {
                icon: "✦",
                label: "General",
                email: "hello@kwotient.com",
                description: "Product questions, demos, general inquiries.",
              },
              {
                icon: "◈",
                label: "Sales & Partnerships",
                email: "sales@kwotient.com",
                description: "Enterprise deals, reseller partnerships, integrations.",
              },
              {
                icon: "◉",
                label: "Press",
                email: "press@kwotient.com",
                description: "Media inquiries, interviews, and press assets.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-2xl border border-kwotient-border p-6 card-hover"
              >
                <div className="h-10 w-10 rounded-xl bg-kwotient-accent/10 flex items-center justify-center mb-4">
                  <span className="text-kwotient-accent">{item.icon}</span>
                </div>
                <h2
                  className="text-base font-bold text-kwotient-ink mb-1"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.label}
                </h2>
                <p className="text-xs text-kwotient-muted leading-relaxed mb-3">
                  {item.description}
                </p>
                <a
                  href={`mailto:${item.email}`}
                  className="text-sm font-semibold text-kwotient-accent hover:text-kwotient-accent-hover transition-colors"
                >
                  {item.email}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-xl">
            <div className="bg-kwotient-surface rounded-2xl border border-kwotient-border p-8">
              <p className="text-sm font-semibold text-kwotient-ink mb-1">
                Response time
              </p>
              <p className="text-sm text-kwotient-muted leading-relaxed">
                We typically reply within a few hours during business hours (Mon–Fri, 9am–6pm ET).
                If you haven&apos;t heard back within one business day, check your spam folder or
                try again at hello@kwotient.com.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
