// Pricing Data
export const PRICING_TIERS = [
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 39,
    annualPrice: 31,
    description: "Perfect for founders and individual SDRs doing their own outreach.",
    users: "1 user",
    emails: "500 emails/mo",
    highlight: false,
    badge: null,
    cta: "Start Free Trial",
    features: [
      "AI-generated personalized emails",
      "Voice mirroring",
      "Tone detection (8 tones)",
      "3-mode review system",
      "Reply classification",
      "AI Business Research",
      "HubSpot integration",
      "Web + Chrome Extension",
      "Email support",
    ],
    notIncluded: [
      "Team collaboration",
      "A/B testing",
      "AI Reasoning Transparency",
      "Salesforce / Pipedrive integration",
      "Priority support",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    monthlyPrice: 99,
    annualPrice: 79,
    description: "For growing SDR/BDR teams who want to scale without losing quality.",
    users: "5 users",
    emails: "2,500 emails/mo",
    highlight: true,
    badge: "Most Popular",
    cta: "Start Free Trial",
    features: [
      "Everything in Starter",
      "5-user team access",
      "2,500 emails/month",
      "A/B testing & analytics",
      "Salesforce + Pipedrive integration",
      "Batch approve mode",
      "Campaign performance tracking",
      "Team playbook library",
      "Priority email support",
      "Onboarding call included",
    ],
    notIncluded: [
      "Unlimited users",
      "AI Reasoning Transparency",
      "Custom SOP training",
      "Dedicated success manager",
    ],
  },
  {
    id: "scale",
    name: "Scale",
    monthlyPrice: 249,
    annualPrice: 199,
    description: "For high-volume teams that need complete control and full transparency.",
    users: "Unlimited users",
    emails: "10,000 emails/mo",
    highlight: false,
    badge: null,
    cta: "Contact Sales",
    features: [
      "Everything in Growth",
      "Unlimited users",
      "10,000 emails/month",
      "AI Reasoning Transparency",
      "Custom SOP/playbook training",
      "Advanced analytics dashboard",
      "White-glove onboarding",
      "Dedicated success manager",
      "SLA support (4hr response)",
      "SSO + custom security",
      "API access",
    ],
    notIncluded: [],
  },
];

// Comparison Table Data
export const COMPARISON_FEATURES = [
  {
    feature: "Email quality",
    kwotient: "AI-personalized, human-reviewed",
    manual: "Human, slow",
    otherAI: "Templated, generic",
  },
  {
    feature: "Volume",
    kwotient: "10x manual output",
    manual: "Limited by rep capacity",
    otherAI: "High (but low quality)",
  },
  {
    feature: "Human review",
    kwotient: "Always (you choose the mode)",
    manual: "Always",
    otherAI: "Optional / often skipped",
  },
  {
    feature: "Voice mirroring",
    kwotient: "Yes — contact's language",
    manual: "Manually, if you remember",
    otherAI: "No",
  },
  {
    feature: "Tone detection",
    kwotient: "8 tones, auto-adjusts",
    manual: "Guess-based",
    otherAI: "No",
  },
  {
    feature: "Sales methodology",
    kwotient: "SPIN, Challenger, MEDDIC built in",
    manual: "Rep-dependent",
    otherAI: "No",
  },
  {
    feature: "Prospect research",
    kwotient: "Automated pre-draft",
    manual: "Manual (15-30 min/contact)",
    otherAI: "Rarely",
  },
  {
    feature: "Cost per email",
    kwotient: "~$0.28",
    manual: "$4-12 (rep time)",
    otherAI: "$0.50-2.00",
  },
  {
    feature: "Reasoning transparency",
    kwotient: "Yes (Scale tier)",
    manual: "N/A",
    otherAI: "No",
  },
  {
    feature: "CRM sync",
    kwotient: "HubSpot, Salesforce, Pipedrive",
    manual: "Manual entry",
    otherAI: "Limited",
  },
];

// FAQ Data
export const FAQ_ITEMS = [
  {
    question: "Does Kwotient replace my SDR team?",
    answer:
      "No — and that's intentional. Kwotient is built to make your existing team dramatically more productive, not to eliminate them. Your reps still review, edit, and approve every email. They bring the relationships and judgment. Kwotient handles the research, drafting, and volume. A team of 3 operating with the output of 30.",
  },
  {
    question: "How does AI voice mirroring work?",
    answer:
      "Kwotient analyzes previous email threads and communication history with each prospect to extract their vocabulary, sentence structure, formality level, and preferred communication patterns. When drafting responses, the AI mirrors those patterns — so the email feels familiar and personal to the recipient, not like a generic blast.",
  },
  {
    question: "What's the 3-mode review system?",
    answer:
      "You can choose how hands-on to be at any time. Individual Review lets you read and edit each email before it sends. Batch Approve lets you scan and approve a set of emails in bulk — ideal for high-confidence campaigns. Auto Mode sends based on your rules with no review — we recommend this only after you've trained the system on your playbook.",
  },
  {
    question: "Does Kwotient include a contact database?",
    answer:
      "No. Kwotient is a drafting and outreach intelligence platform — you bring your own contacts. We integrate with your CRM (HubSpot, Salesforce, Pipedrive) to pull prospect data and sync activity. For building lists, we recommend tools like Apollo, Clay, or ZoomInfo.",
  },
  {
    question: "What about email deliverability?",
    answer:
      "Kwotient focuses on email quality and personalization — factors that directly improve deliverability over time. For domain warmup and technical deliverability setup, we recommend pairing Kwotient with Instantly, Warmbox, or Smartlead. We provide a setup guide for this in our onboarding.",
  },
  {
    question: "How long does it take to set up?",
    answer:
      "Most teams are live within a day. You connect your CRM, upload your SOP or playbook (or use our template library), and the AI starts learning your selling style. Your first campaign can go out within 24 hours of signing up.",
  },
  {
    question: "What is AI Reasoning Transparency?",
    answer:
      "Available on the Scale tier, AI Reasoning Transparency shows your reps exactly why the AI made each drafting decision — which sales principle it applied, why it chose that tone, what in the prospect's history triggered that opening line. It turns every email into a micro sales training moment.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Yes. Month-to-month plans can be cancelled at any time with no penalty. Annual plans are billed upfront but can be cancelled — you'll retain access until the end of your billing period. No lock-ins, no surprise fees.",
  },
];

// Pricing FAQ
export const PRICING_FAQ_ITEMS = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes — Starter and Growth plans include a 14-day free trial, no credit card required. You'll get full access to all features in your tier so you can evaluate Kwotient with real campaigns before committing.",
  },
  {
    question: "What counts as an 'email'?",
    answer:
      "Each outbound email drafted and sent through Kwotient counts as one email toward your monthly limit. Drafts you don't send, test emails, and internal messages do not count. Unused emails do not roll over to the next month.",
  },
  {
    question: "How does annual billing work?",
    answer:
      "Annual plans are billed as a single upfront payment covering 12 months, at a 20% discount vs. monthly billing. Your Growth plan at $79/month annual = $948/year vs. $1,188/year on monthly. You save $240.",
  },
  {
    question: "Can I upgrade or downgrade mid-cycle?",
    answer:
      "You can upgrade at any time — the change takes effect immediately and you're billed pro-rated. Downgrades take effect at the start of your next billing cycle so you keep full access through the period you've already paid for.",
  },
  {
    question: "What happens if I exceed my email limit?",
    answer:
      "You'll get a notification at 80% usage. Once you hit your limit, outbound drafting pauses until you upgrade or your cycle resets. We never send emails without your knowledge — you'll always have the option to upgrade before any disruption.",
  },
  {
    question: "Is there a discount for larger teams or nonprofits?",
    answer:
      "Yes — contact us for Enterprise pricing if you need more than 10,000 emails/month or have a large team. We also offer discounts for nonprofits and early-stage startups. Reach out to sales@kwotient.com.",
  },
];

// Feature Data
export const FEATURES = [
  {
    id: "email-generation",
    icon: "✦",
    title: "AI Email Generation",
    subtitle: "70+ rule validation on every draft",
    description:
      "Every email Kwotient drafts passes through a 70+ rule validation engine trained on your playbook. Subject line effectiveness, opening hook strength, value proposition clarity, CTA specificity — all checked before the draft reaches your queue.",
    highlight: "Your SOP, enforced on every single send.",
    visual: "email-gen",
  },
  {
    id: "voice-mirroring",
    icon: "◈",
    title: "Voice Mirroring",
    subtitle: "Sounds like them, sells for you",
    description:
      "Kwotient analyzes each prospect's writing patterns — vocabulary, sentence length, formality, punctuation habits — and mirrors them in your outreach. When your email reads like the prospect's own communication style, it doesn't feel like a cold email.",
    highlight: "Personalization that goes beyond first name.",
    visual: "voice-mirror",
  },
  {
    id: "tone-detection",
    icon: "◎",
    title: "Tone Detection Engine",
    subtitle: "8 tone classifications, automatic adjustment",
    description:
      "When a prospect replies, Kwotient classifies the tone: warm interest, polite disinterest, technical skepticism, budget objection, and 5 more. The AI then adjusts its next draft accordingly — matching energy, addressing concerns, or shifting approach.",
    highlight: "React to how they actually feel, not just what they say.",
    visual: "tone-detect",
  },
  {
    id: "review-system",
    icon: "⊞",
    title: "3-Mode Review System",
    subtitle: "You set the level of control",
    description:
      "Individual Review for campaigns where every word matters. Batch Approve when you trust the system and just need to scan. Auto Mode for your highest-confidence, well-trained sequences. You can switch modes per campaign.",
    highlight: "Control that scales with your confidence.",
    visual: "review-system",
  },
  {
    id: "intelligence",
    icon: "◉",
    title: "Sales Intelligence Engine",
    subtitle: "SPIN, Challenger Sale, MEDDIC — built in",
    description:
      "The AI isn't making up sales tactics. It's been trained on the world's most proven sales methodologies. SPIN Selling for discovery, Challenger for insight-led approaches, MEDDIC for enterprise qualification. Your reps benefit from frameworks they may have never formally learned.",
    highlight: "Every rep selling like your best rep.",
    visual: "intelligence",
  },
  {
    id: "research",
    icon: "◐",
    title: "AI Business Research",
    subtitle: "Researches every prospect before drafting",
    description:
      "Before Kwotient drafts a single word, it researches the prospect: recent company news, LinkedIn activity, funding rounds, technology stack, job changes, and publicly available signals. The email arrives informed — not generic.",
    highlight: "The research your reps skip. Done automatically.",
    visual: "research",
  },
];

// Blog Posts
export const BLOG_POSTS = [
  {
    slug: "how-to-send-10x-more-cold-emails",
    title: "How to Send 10x More Cold Emails Without Sounding Like a Bot",
    excerpt:
      "Volume and quality don't have to be at war. Here's how modern SDR teams are scaling outreach without sacrificing the human touch that gets replies.",
    category: "Outreach Strategy",
    readTime: "8 min read",
    date: "March 5, 2026",
    author: "Jordan Kessler",
    authorRole: "Head of Growth, Kwotient",
  },
  {
    slug: "true-cost-of-ai-tokens-in-sales-outreach",
    title: "The True Cost of AI Tokens in Sales Outreach (And How to Cut It by 60%)",
    excerpt:
      "Most AI outreach tools are bleeding you dry with token costs you never see on the invoice. We did the math — and built a better approach.",
    category: "Economics",
    readTime: "6 min read",
    date: "February 28, 2026",
    author: "Priya Naik",
    authorRole: "Co-founder, Kwotient",
  },
  {
    slug: "why-your-sdr-team-needs-a-review-step",
    title: "Why Your SDR Team Needs a Review Step Before Hitting Send",
    excerpt:
      "Full automation sounds efficient. But the teams seeing the best results from AI outreach are the ones that kept humans in the loop — and here's why the data backs that up.",
    category: "Team Workflow",
    readTime: "5 min read",
    date: "February 20, 2026",
    author: "Marcus Webb",
    authorRole: "Sales Advisor, Kwotient",
  },
  {
    slug: "5-email-personalization-signals",
    title: "5 Email Personalization Signals That Actually Move the Needle",
    excerpt:
      "First name and company name aren't personalization anymore — they're table stakes. These five signals are what separate a 2% reply rate from an 8% one.",
    category: "Personalization",
    readTime: "7 min read",
    date: "February 12, 2026",
    author: "Jordan Kessler",
    authorRole: "Head of Growth, Kwotient",
  },
  {
    slug: "cold-email-deliverability-2026",
    title: "Cold Email Deliverability in 2026: What's Changed",
    excerpt:
      "Google and Microsoft have quietly shifted the rules again. Here's what's actually affecting inbox placement in 2026 and what you need to do about it before your next campaign.",
    category: "Deliverability",
    readTime: "10 min read",
    date: "February 3, 2026",
    author: "Priya Naik",
    authorRole: "Co-founder, Kwotient",
  },
  {
    slug: "kwotient-vs-manual-outreach",
    title: "Kwotient vs. Manual Outreach: A Head-to-Head Comparison",
    excerpt:
      "We put Kwotient and traditional rep-driven outreach side by side across five campaigns. Same contacts, same messaging brief — different execution. Here's what happened.",
    category: "Case Study",
    readTime: "12 min read",
    date: "January 25, 2026",
    author: "Marcus Webb",
    authorRole: "Sales Advisor, Kwotient",
  },
];

// Stats
export const STATS = [
  {
    value: 10,
    suffix: "x",
    label: "More emails per rep per hour",
    description: "Without sacrificing quality or personalization",
  },
  {
    value: 60,
    suffix: "%",
    label: "Lower token costs",
    description: "vs. standard AI outreach platforms",
  },
  {
    value: 3,
    suffix: " min",
    label: "Average campaign review time",
    description: "For a batch of 50 contacts",
  },
  {
    value: 4.8,
    suffix: "x",
    label: "Higher reply rates",
    description: "vs. generic AI-generated outreach",
  },
];

// Testimonial
export const TESTIMONIAL = {
  quote:
    "Our team was burning 3-4 hours a day writing and personalizing emails. With Kwotient, we do that in under 30 minutes — and the quality is genuinely better. Reply rates are up 380%. I wish we'd done this a year ago.",
  author: "Sarah Chen",
  role: "VP of Sales",
  company: "Meridian Tech",
  avatar: null,
};
