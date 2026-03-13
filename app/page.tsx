import type { Metadata } from "next";
import { V2PageClient } from "./v2/V2PageClient";

export const metadata: Metadata = {
  title: "Kwotient — AI Email Outreach That Keeps Humans in the Loop",
  description:
    "Kwotient drafts AI-powered sales emails trained on your top performers, then keeps your reps in the loop to review, approve, and send. 10x output. 4.8x higher reply rates. ~$0.28 per email.",
  keywords: [
    "AI cold email",
    "AI SDR tool",
    "email outreach AI",
    "sales email automation",
    "cold email personalization",
    "BDR automation",
    "AI sales outreach",
    "cold email platform 2026",
  ],
  openGraph: {
    title: "Kwotient — AI Email Outreach That Keeps Humans in the Loop",
    description:
      "AI-powered outreach trained on your top performers. Human review built in. 10x volume, 4.8x reply rates.",
    url: "https://kwotient.com",
    siteName: "Kwotient",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwotient — AI Email Outreach That Keeps Humans in the Loop",
    description:
      "AI-powered outreach trained on your top performers. Human review built in.",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://kwotient.com",
  },
};

export default function HomePage() {
  return <V2PageClient />;
}
