import type { Metadata } from "next";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "FAQ — Everything You Want to Know Before Committing",
  description:
    "Common questions about Kwotient: how AI email generation works, what voice mirroring is, CRM integrations, pricing, team setup, and what Kwotient is not.",
  keywords: [
    "Kwotient FAQ",
    "AI email outreach questions",
    "cold email AI FAQ",
    "SDR tool questions",
    "Kwotient how it works",
    "AI outreach pricing questions",
  ],
  openGraph: {
    title: "Kwotient FAQ — Questions Worth Asking Before You Commit",
    description:
      "Everything you want to know about how Kwotient works, what it costs, and whether it's the right fit for your team.",
    url: "https://kwotient.com/faq",
    siteName: "Kwotient",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwotient FAQ",
    description: "Everything you want to know about how Kwotient works.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://kwotient.com/faq",
  },
};

const FAQ_CATEGORIES = [
  {
    id: "why-kwotient",
    label: "Why Kwotient",
    icon: "✦",
    questions: [
      {
        question: "Does Kwotient replace my SDR team?",
        answer:
          "No — and that's intentional. Kwotient is built to make your existing team dramatically more productive, not to eliminate them. Your reps still review, edit, and approve every email. They bring the relationships and judgment. Kwotient handles the research, drafting, and volume. A team of 3 operating with the output of 30.",
      },
      {
        question: "How is this different from just using ChatGPT to write emails?",
        answer:
          "ChatGPT generates text. Kwotient generates emails that pass 70+ quality rules, are informed by prospect research, mirror the prospect's voice, apply proven sales methodologies, sync to your CRM, and improve over time based on your reply data. The gap between 'AI-generated email' and 'Kwotient-generated email' is significant in practice.",
      },
      {
        question: "Why does the human review step matter?",
        answer:
          "Three reasons: accuracy (AI makes mistakes you'd catch in 10 seconds), legal (you're responsible for what your company sends), and quality (the teams with the best reply rates are the ones who stayed in the loop). Full autonomy sounds efficient — the data says otherwise. Teams using our review system outperform auto-send teams by 2.3x on reply rates.",
      },
      {
        question: "Who is Kwotient built for?",
        answer:
          "SDR and BDR teams at B2B companies doing email outreach. Founders doing their own prospecting. Sales managers who want to scale team output without scaling headcount. If your growth depends on outbound email and you're frustrated by how long it takes to do it well, Kwotient is built for you.",
      },
    ],
  },
  {
    id: "how-it-works",
    label: "How It Works",
    icon: "◈",
    questions: [
      {
        question: "How does the AI learn my selling style?",
        answer:
          "You upload your sales playbook or SOP during setup. You can also share examples of your best-performing emails, your top rep's sequences, and any style guidelines you use. The AI uses these to establish your voice baseline. Then, as you make edits and see what gets replies, those signals feed back into the system. Most teams see meaningful personalization within the first 2–3 campaigns.",
      },
      {
        question: "How long does setup take?",
        answer:
          "Most teams are live within a day. You connect your CRM (15 minutes), upload your playbook or select from our template library (30 minutes), and run your first campaign. The AI starts working immediately. Onboarding calls are included with Growth and Scale plans if you want hands-on setup.",
      },
      {
        question: "What's the 3-mode review system exactly?",
        answer:
          "Individual Review: you read and edit each email before send. Best for new campaigns or high-value accounts. Batch Approve: scan 50 emails in about 3 minutes using quality scores and flags, approve in bulk. Best for well-trained campaigns you trust. Auto Mode: rule-based sending based on your minimum quality thresholds. We recommend building up to this after validating the system on your ICP.",
      },
      {
        question: "What happens to emails I reject in review?",
        answer:
          "Rejected emails go back to the AI with your comment explaining why. The system regenerates them based on your feedback. Multiple rejections on the same prompt type feed back into training — the AI learns not to make that mistake again on similar contacts.",
      },
      {
        question: "Can I run multiple campaigns simultaneously?",
        answer:
          "Yes. Campaigns are independent — different contact lists, different sequences, different review modes. Growth and Scale plans support multiple active campaigns with separate settings, analytics, and review queues.",
      },
    ],
  },
  {
    id: "features",
    label: "Features",
    icon: "◉",
    questions: [
      {
        question: "What is voice mirroring?",
        answer:
          "Voice mirroring analyzes a prospect's writing style from previous email threads and available communication — vocabulary, sentence length, formality, punctuation habits — and mirrors those patterns in the AI-drafted email. The result feels familiar to the recipient because it reads like their own communication style. It's one of the highest-impact personalization features we've built.",
      },
      {
        question: "What are the 8 tone classifications?",
        answer:
          "Warm interest, polite disinterest, technical skepticism, pricing objection, authority challenge, FOMO signal, re-engagement opportunity, and competitive comparison. Each classification triggers a different response framework in the next draft. Certain tones (aggressive objections, legal language) automatically flag for mandatory human review.",
      },
      {
        question: "What is AI Reasoning Transparency?",
        answer:
          "Available on Scale tier, AI Reasoning Transparency shows your reps exactly why the AI made each drafting decision — which sales methodology it applied, why it chose that tone, what in the prospect's history triggered that opening line. It turns every review into a micro sales training moment. Over time, reps become better salespeople as they see the reasoning behind effective outreach.",
      },
      {
        question: "Does Kwotient work with LinkedIn outreach?",
        answer:
          "At launch, Kwotient is email-only. LinkedIn outreach is on the roadmap but not yet available. We believe email is the highest-leverage channel to solve well before moving to additional platforms. If LinkedIn is your primary channel, Kwotient isn't the right fit yet.",
      },
      {
        question: "Can I test different subject lines or email versions?",
        answer:
          "Yes — A/B testing is available on Growth and Scale plans. You can test subject lines, opening lines, value propositions, and CTAs. The system tracks open rates, reply rates, and downstream conversion, then automatically promotes winning variations in future drafts.",
      },
    ],
  },
  {
    id: "data-security",
    label: "Data, Security & Integrations",
    icon: "◎",
    questions: [
      {
        question: "Which CRMs does Kwotient integrate with?",
        answer:
          "HubSpot on all plans (including Starter). Salesforce and Pipedrive on Growth and Scale. API access for custom integrations on Scale. All integrations are two-way — prospect data syncs in, activity data (sends, opens, replies, status changes) syncs back out. We also support CSV import for teams without a CRM.",
      },
      {
        question: "Does Kwotient have access to my email account?",
        answer:
          "Kwotient drafts and manages campaigns through your connected sending accounts. It doesn't read or access your entire email inbox — only the threads relevant to active campaigns. You control which accounts are connected and can disconnect at any time.",
      },
      {
        question: "Where is my data stored? Is it used to train AI?",
        answer:
          "Your campaign data, playbooks, and email content are stored on SOC 2 compliant infrastructure in the United States. Your data is not used to train Kwotient's models for other customers. Training improvements are made using anonymized, aggregated performance signals — never your raw email content.",
      },
      {
        question: "Is Kwotient GDPR compliant?",
        answer:
          "Yes. We offer a Data Processing Agreement (DPA) to all customers, support data deletion requests, and maintain records of processing activities. If you're operating under GDPR, contact us and we'll walk you through our compliance documentation.",
      },
      {
        question: "Does Kwotient handle domain warmup or deliverability?",
        answer:
          "Kwotient improves deliverability through personalization quality and engagement signals — both of which major email providers use to evaluate sender reputation. For domain warmup and technical deliverability setup (SPF, DKIM, DMARC), we recommend pairing Kwotient with Instantly, Warmbox, or Smartlead. We provide a full setup guide in our documentation.",
      },
    ],
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: "◐",
    questions: [
      {
        question: "Is there a free trial?",
        answer:
          "Yes — Starter and Growth plans include a 14-day free trial with no credit card required. You get full access to all features in your tier so you can evaluate Kwotient with real campaigns before committing.",
      },
      {
        question: "What counts as an email toward my monthly limit?",
        answer:
          "Each outbound email drafted and sent through Kwotient counts as one email. Drafts you don't send, rejected emails that are regenerated, and test emails do not count. Unused emails do not roll over to the next month.",
      },
      {
        question: "Can I upgrade or downgrade?",
        answer:
          "Upgrades take effect immediately and are billed pro-rated. Downgrades take effect at the start of your next billing cycle — you keep full access through the period you've paid for.",
      },
      {
        question: "Do you offer nonprofit or startup discounts?",
        answer:
          "Yes — reach out to sales@kwotient.com. We offer discounts for nonprofits and early-stage startups (pre-Series A with fewer than 10 employees). Verification required.",
      },
      {
        question: "What's included in Enterprise pricing?",
        answer:
          "Custom contract, unlimited volume above 10k emails/month, dedicated success manager, white-glove onboarding, custom SOP training, SLA support (4hr response), SSO and advanced security controls, and API access. Contact sales@kwotient.com for a quote.",
      },
    ],
  },
];

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_CATEGORIES.flatMap((cat) =>
    cat.questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
      />

      <div className="bg-kwotient-paper min-h-screen">
        {/* Hero */}
        <section className="pt-32 pb-16 bg-white border-b border-kwotient-border">
          <div className="mx-auto max-w-[1200px] px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-kwotient-surface px-4 py-1.5 mb-4">
                <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
                  FAQ
                </span>
              </div>
              <h1
                className="text-[40px] md:text-[52px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-4 text-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Questions worth asking{" "}
                <span className="text-kwotient-accent">before you commit.</span>
              </h1>
              <p className="text-[18px] text-kwotient-muted leading-[1.6]">
                Everything you want to know about how Kwotient works, what it costs, and whether it&apos;s
                the right fit for your team. If you don&apos;t find your answer here, we&apos;re a
                message away.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <div className="mx-auto max-w-[1200px] px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-12">
            {/* Category nav */}
            <aside className="hidden lg:block">
              <nav className="sticky top-24 flex flex-col gap-1">
                <p className="text-xs font-bold text-kwotient-muted uppercase tracking-wider mb-3">
                  Categories
                </p>
                {FAQ_CATEGORIES.map((cat) => (
                  <a
                    key={cat.id}
                    href={`#${cat.id}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-kwotient-muted hover:text-kwotient-ink hover:bg-kwotient-surface transition-all duration-150"
                  >
                    <span className="text-xs text-kwotient-accent">{cat.icon}</span>
                    {cat.label}
                  </a>
                ))}

                <div className="mt-8 p-4 rounded-xl bg-kwotient-surface border border-kwotient-border">
                  <p className="text-xs font-semibold text-kwotient-ink mb-1">Still have questions?</p>
                  <p className="text-xs text-kwotient-muted mb-3">Our team replies within a few hours.</p>
                  <a
                    href="mailto:hello@kwotient.com"
                    className="text-xs font-semibold text-kwotient-accent hover:text-kwotient-accent-hover"
                  >
                    Email us →
                  </a>
                </div>
              </nav>
            </aside>

            {/* FAQ sections */}
            <div className="flex flex-col gap-16">
              {FAQ_CATEGORIES.map((category) => (
                <div key={category.id} id={category.id}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-8 w-8 rounded-lg bg-kwotient-accent/10 flex items-center justify-center">
                      <span className="text-kwotient-accent text-sm">{category.icon}</span>
                    </div>
                    <h2
                      className="text-[24px] font-bold text-kwotient-ink"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {category.label}
                    </h2>
                  </div>
                  <Accordion items={category.questions} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <section className="py-16 bg-kwotient-ink">
          <div className="mx-auto max-w-[800px] px-6 text-center">
            <h2
              className="text-[28px] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Still have questions? Let&apos;s talk.
            </h2>
            <p className="text-dark-muted mb-8">
              Book a 15-minute demo and we&apos;ll answer everything — including the ones not on this page.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" href="#">
                Book a Demo
              </Button>
              <a
                href="mailto:hello@kwotient.com"
                className="text-sm font-medium text-dark-muted hover:text-white transition-colors"
              >
                Or email hello@kwotient.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
