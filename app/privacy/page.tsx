import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Kwotient",
  description: "Kwotient's privacy policy. How we collect, use, and protect your data.",
  robots: "index, follow",
  alternates: {
    canonical: "https://kwotient.com/privacy",
  },
};

const LAST_UPDATED = "March 1, 2026";

export default function PrivacyPage() {
  return (
    <div className="bg-kwotient-paper min-h-screen">
      <section className="pt-32 pb-12 bg-white border-b border-kwotient-border">
        <div className="mx-auto max-w-[800px] px-6">
          <h1
            className="text-[36px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.1] tracking-[-0.03em] mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm text-kwotient-muted">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-[800px] px-6">
          <div className="prose prose-slate max-w-none">
            <div className="flex flex-col gap-10 text-kwotient-muted leading-[1.75]">

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  1. Overview
                </h2>
                <p>
                  Kwotient, Inc. (&ldquo;Kwotient,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Kwotient platform,
                  including our website at kwotient.com and related services (collectively, the &ldquo;Service&rdquo;).
                  This Privacy Policy explains what information we collect, how we use it, and the choices you have.
                  By using the Service, you agree to the terms of this policy.
                </p>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  2. Information We Collect
                </h2>
                <p className="mb-3">We collect information in three ways:</p>
                <ul className="flex flex-col gap-2 ml-4 list-disc">
                  <li>
                    <strong className="text-kwotient-ink">Information you provide:</strong> Name, email address, company name, billing information, and any data you upload to the platform (including playbooks, contact lists, and email sequences).
                  </li>
                  <li>
                    <strong className="text-kwotient-ink">Information from your integrations:</strong> When you connect a CRM (HubSpot, Salesforce, Pipedrive), we access contact data, activity history, and deal information necessary to operate the Service.
                  </li>
                  <li>
                    <strong className="text-kwotient-ink">Usage data:</strong> Log data, IP addresses, browser type, pages visited, feature usage, and performance metrics collected automatically when you use the Service.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  3. How We Use Your Information
                </h2>
                <ul className="flex flex-col gap-2 ml-4 list-disc">
                  <li>To provide, operate, and improve the Service</li>
                  <li>To generate AI email drafts trained on your playbook and prospect data</li>
                  <li>To process payments and manage your account</li>
                  <li>To send product updates, security notices, and support communications</li>
                  <li>To analyze usage patterns and improve platform performance</li>
                  <li>To comply with applicable laws and regulations</li>
                </ul>
                <p className="mt-3">
                  We do not sell your personal data to third parties. We do not use your email content to train
                  models that serve other customers.
                </p>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  4. Data Sharing
                </h2>
                <p className="mb-3">
                  We share data only as necessary to operate the Service:
                </p>
                <ul className="flex flex-col gap-2 ml-4 list-disc">
                  <li><strong className="text-kwotient-ink">Service providers:</strong> Cloud infrastructure, payment processors, and analytics providers who process data on our behalf under confidentiality obligations.</li>
                  <li><strong className="text-kwotient-ink">Legal requirements:</strong> If required by law, court order, or to protect the safety and rights of Kwotient or its users.</li>
                  <li><strong className="text-kwotient-ink">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  5. Data Retention
                </h2>
                <p>
                  We retain your data for as long as your account is active or as needed to provide the Service.
                  Upon account cancellation, we delete or anonymize your data within 90 days, except where
                  retention is required by law or legitimate business purposes (e.g., billing records).
                </p>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  6. Security
                </h2>
                <p>
                  We implement industry-standard security measures including encryption in transit (TLS) and at
                  rest, access controls, and regular security reviews. No method of transmission over the internet
                  is 100% secure. We encourage you to use strong passwords and to notify us immediately if you
                  suspect unauthorized access to your account.
                </p>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  7. Your Rights
                </h2>
                <p className="mb-3">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="flex flex-col gap-2 ml-4 list-disc">
                  <li>Access, correct, or delete personal data we hold about you</li>
                  <li>Object to or restrict certain processing of your data</li>
                  <li>Request a portable copy of your data</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact us at <a href="mailto:privacy@kwotient.com" className="text-kwotient-accent hover:underline">privacy@kwotient.com</a>.
                </p>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  8. Cookies
                </h2>
                <p>
                  We use essential cookies to operate the Service (authentication, session management) and
                  analytics cookies to understand how the platform is used. You can control non-essential cookies
                  through your browser settings. Disabling all cookies may affect Service functionality.
                </p>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  9. Changes to This Policy
                </h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of material changes via
                  email or a prominent notice in the Service. Your continued use of the Service after the effective
                  date of a revised policy constitutes your acceptance of the changes.
                </p>
              </div>

              <div>
                <h2 className="text-[22px] font-bold text-kwotient-ink mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  10. Contact
                </h2>
                <p>
                  For privacy-related questions or requests, contact us at{" "}
                  <a href="mailto:privacy@kwotient.com" className="text-kwotient-accent hover:underline">
                    privacy@kwotient.com
                  </a>.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
