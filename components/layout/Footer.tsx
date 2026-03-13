"use client";

import { useState } from "react";

const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "#" },
    { label: "Roadmap", href: "#" },
    { label: "Status", href: "#" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "FAQ", href: "/faq" },
    { label: "Integrations", href: "#" },
    { label: "Templates", href: "#" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Security", href: "#" },
    { label: "GDPR", href: "#" },
  ],
};

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-kwotient-ink text-dark-text">
      {/* Newsletter */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Sales strategy in your inbox.
              </h3>
              <p className="text-sm text-dark-muted mt-1">
                Cold email tactics, AI outreach insights, and Kwotient product updates. No fluff.
              </p>
            </div>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="flex gap-3 w-full md:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 md:w-64 rounded-xl px-4 py-2.5 text-sm bg-white/10 border border-white/20 text-white placeholder:text-dark-muted focus:outline-none focus:border-kwotient-accent transition-colors"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 text-sm font-semibold bg-kwotient-accent text-white rounded-xl hover:bg-kwotient-accent-hover transition-colors"
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-2 text-kwotient-success font-medium">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
                You're subscribed — welcome aboard.
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-kwotient-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                Kwotient
              </span>
            </a>
            <p className="text-sm text-dark-muted leading-relaxed">
              AI-powered email outreach that keeps humans in the loop. Your reps, amplified.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {/* Social links */}
              {["twitter", "linkedin", "github"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="h-8 w-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                  aria-label={`Follow on ${social}`}
                >
                  <div className="h-3.5 w-3.5 bg-dark-muted rounded-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-dark-muted uppercase tracking-wider mb-4">
                {category}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-dark-muted hover:text-white transition-colors duration-150"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/10">
          <p className="text-sm text-dark-muted">
            © 2026 Kwotient, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-sm text-dark-muted">
            <span>Made for sales teams who care about quality.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
