import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kwotient.com"),
  title: {
    default: "Kwotient — AI Email Outreach That Keeps Humans in the Loop",
    template: "%s | Kwotient",
  },
  description:
    "Kwotient drafts AI-powered sales emails trained on your top performers, then keeps your reps in the loop to review, approve, and send. 10x output. 4.8x reply rates.",
  keywords: [
    "AI email outreach",
    "SDR automation",
    "sales email AI",
    "cold email AI",
    "BDR tools",
    "email personalization AI",
    "sales outreach platform",
    "AI sales assistant",
  ],
  openGraph: {
    title: "Kwotient — AI Email Outreach That Keeps Humans in the Loop",
    description:
      "AI-powered sales emails trained on your top performers. Review, approve, and send. 10x email output, 4.8x higher reply rates.",
    url: "https://kwotient.com",
    siteName: "Kwotient",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kwotient — AI Email Outreach That Keeps Humans in the Loop",
    description:
      "AI-powered sales emails trained on your top performers. Review, approve, and send.",
    site: "@kwotient",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://kwotient.com",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kwotient",
  url: "https://kwotient.com",
  logo: "https://kwotient.com/logo.png",
  description:
    "AI-powered email outreach platform for SDR/BDR teams that keeps humans in the loop.",
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@kwotient.com",
    contactType: "customer support",
  },
  sameAs: [
    "https://twitter.com/kwotient",
    "https://linkedin.com/company/kwotient",
  ],
};

const softwareApplicationSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Kwotient",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, iOS, Android, Chrome Extension",
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "39",
    highPrice: "249",
    priceCurrency: "USD",
  },
  description:
    "AI-powered email outreach platform that drafts personalized sales emails using your playbook, then keeps your team in the loop to review, approve, and send.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "127",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kwotient",
  url: "https://kwotient.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://kwotient.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
