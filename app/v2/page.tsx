import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LogoCloud } from "@/components/sections/LogoCloud";
import { ProblemStatement } from "@/components/sections/ProblemStatement";
import { SolutionOverview } from "@/components/sections/SolutionOverview";
import { FeatureShowcase } from "@/components/sections/FeatureShowcase";
import { StatsSection } from "@/components/sections/StatsSection";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title: "Kwotient — Original Landing Page",
  description:
    "Kwotient drafts AI-powered sales emails trained on your top performers, then keeps your reps in the loop to review, approve, and send.",
  robots: "noindex, nofollow",
};

export default function V2Page() {
  return (
    <>
      <Hero />
      <LogoCloud />
      <ProblemStatement />
      <SolutionOverview />
      <FeatureShowcase />
      <StatsSection />
      <HowItWorks />
      <ComparisonTable />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
