import type { Metadata } from "next";
import { V2PageClient } from "./V2PageClient";

export const metadata: Metadata = {
  title: "Why Kwotient? The Playbook-Driven Difference | Kwotient",
  description:
    "See how Kwotient's 70-rule playbook, 25-step validation, and voice mirroring make it fundamentally different from every other AI email outreach tool.",
  robots: "noindex, nofollow",
};

export default function V2Page() {
  return <V2PageClient />;
}
