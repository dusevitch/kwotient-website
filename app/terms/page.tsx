import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Kwotient",
  description: "Kwotient's terms of service. Your rights and obligations when using the platform.",
  robots: "index, follow",
  alternates: {
    canonical: "https://kwotient.com/terms",
  },
};

const LAST_UPDATED = "March 1, 2026";

export default function TermsPage() {
  return (
    <div className="bg-kwotient-paper min-h-screen">
      <section className="pt-32 pb-12 bg-white border-b border-kwotient-border">
        <div className="mx-auto max-w-[800px] px-6">
          <h1
            className="text-[36px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Terms of Service
          </h1>
          <p className="text-sm text-kwotient-muted">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="flex flex-col gap-10 text-kwotient-muted leading-[1.75]">

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the Kwotient platform and related services (the &ldquo;Service&rdquo;), you agree
                to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you are using the Service on behalf of
                an organization, you represent that you have authority to bind that organization to these Terms.
                If you do not agree, do not use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                2. Use of the Service
              </h2>
              <p className="mb-3">You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="flex flex-col gap-2 ml-4 list-disc">
                <li>Use the Service to send spam, unsolicited commercial email, or communications that violate applicable law (including CAN-SPAM, CASL, and GDPR)</li>
                <li>Upload or transmit content that is unlawful, harmful, defamatory, or infringes third-party rights</li>
                <li>Attempt to gain unauthorized access to the Service or its infrastructure</li>
                <li>Reverse engineer, decompile, or extract source code from the Service</li>
                <li>Use the Service to develop a competing product or service</li>
                <li>Resell or sublicense access to the Service without prior written consent</li>
              </ul>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                3. Accounts
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials and for all
                activity that occurs under your account. You must notify us immediately at{" "}
                <a href="mailto:hello@kwotient.com" className="text-kwotient-accent hover:underline">hello@kwotient.com</a>{" "}
                if you suspect unauthorized access. We reserve the right to suspend or terminate accounts that
                violate these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                4. Subscriptions and Billing
              </h2>
              <p className="mb-3">
                The Service is provided on a subscription basis. By subscribing, you authorize us to charge
                your payment method on a recurring basis. All fees are non-refundable except as required by law
                or as otherwise stated in our refund policy.
              </p>
              <p>
                We reserve the right to change pricing with 30 days&apos; notice. Continued use after a price
                change constitutes acceptance of the new pricing. You may cancel your subscription at any time;
                cancellation takes effect at the end of the current billing period.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                5. Your Data and Content
              </h2>
              <p>
                You retain ownership of all content you upload to the Service, including playbooks, contact
                lists, and email sequences. By uploading content, you grant Kwotient a limited license to
                process that content for the purpose of providing the Service to you. We do not use your
                content to train models that serve other customers.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                6. Intellectual Property
              </h2>
              <p>
                The Service, including all software, algorithms, designs, and content created by Kwotient, is
                owned by Kwotient, Inc. and protected by applicable intellectual property laws. These Terms do
                not grant you any ownership rights in the Service.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                7. Disclaimer of Warranties
              </h2>
              <p>
                THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE
                UNINTERRUPTED, ERROR-FREE, OR THAT AI-GENERATED CONTENT WILL MEET YOUR SPECIFIC REQUIREMENTS.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                8. Limitation of Liability
              </h2>
              <p>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, KWOTIENT SHALL NOT BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF REVENUE, PROFITS,
                OR DATA ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE. OUR TOTAL LIABILITY FOR ANY
                CLAIM ARISING UNDER THESE TERMS IS LIMITED TO THE AMOUNT YOU PAID TO KWOTIENT IN THE
                TWELVE MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                9. Termination
              </h2>
              <p>
                We may suspend or terminate your access to the Service at any time for violation of these Terms,
                non-payment, or for any other reason with reasonable notice. Upon termination, your right to
                use the Service ceases immediately. Sections 5–8 and 10 survive termination.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                10. Governing Law
              </h2>
              <p>
                These Terms are governed by the laws of the State of Delaware, without regard to its conflict
                of law provisions. Any disputes arising under these Terms shall be resolved in the state or
                federal courts located in Delaware.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                11. Changes to These Terms
              </h2>
              <p>
                We may update these Terms from time to time. We will provide at least 30 days&apos; notice of
                material changes via email or in-app notification. Your continued use of the Service after the
                effective date constitutes acceptance of the revised Terms.
              </p>
            </div>

            <div>
              <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                12. Contact
              </h2>
              <p>
                Questions about these Terms? Contact us at{" "}
                <a href="mailto:legal@kwotient.com" className="text-kwotient-accent hover:underline">
                  legal@kwotient.com
                </a>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
