"use client";

import { useScrollReveal } from "@/lib/hooks/useScrollReveal";
import { COMPARISON_FEATURES } from "@/lib/constants";

export function ComparisonTable() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: tableRef, isVisible: tableVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="py-[120px] md:py-[80px] bg-kwotient-surface">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-12 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-kwotient-border bg-white px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-kwotient-muted uppercase tracking-wider">
              How we compare
            </span>
          </div>
          <h2
            className="text-[32px] md:text-[48px] font-extrabold text-kwotient-ink leading-[1.15] tracking-[-0.02em] mb-4 text-center"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Kwotient vs. the alternatives.
          </h2>
          <p className="text-[18px] text-kwotient-muted leading-[1.6] max-w-2xl mx-auto">
            Manual outreach burns your team&apos;s time. Generic AI tools burn your prospect&apos;s patience.
            Kwotient is the middle path — at scale.
          </p>
        </div>

        {/* Table */}
        <div
          ref={tableRef as React.RefObject<HTMLDivElement>}
          className={`overflow-hidden rounded-2xl border border-kwotient-border shadow-sm transition-all duration-700 ${
            tableVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <table className="w-full">
            <thead>
              <tr className="bg-white border-b border-kwotient-border">
                <th className="text-left px-6 py-4 text-sm font-semibold text-kwotient-muted w-[25%]">
                  Feature
                </th>
                <th className="px-6 py-4 text-center w-[25%]">
                  <div className="inline-flex flex-col items-center gap-1">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 rounded bg-kwotient-accent flex items-center justify-center">
                        <span className="text-white text-[9px] font-bold">K</span>
                      </div>
                      <span className="text-base font-bold text-kwotient-ink" style={{ fontFamily: "var(--font-heading)" }}>
                        Kwotient
                      </span>
                    </div>
                    <span className="text-[10px] bg-kwotient-accent text-white px-2 py-0.5 rounded-full font-semibold">
                      Recommended
                    </span>
                  </div>
                </th>
                <th className="px-6 py-4 text-center w-[25%]">
                  <span className="text-sm font-semibold text-kwotient-muted">Manual Outreach</span>
                </th>
                <th className="px-6 py-4 text-center w-[25%]">
                  <span className="text-sm font-semibold text-kwotient-muted">Other AI Tools</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`border-b border-kwotient-border last:border-0 ${
                    index % 2 === 0 ? "bg-white" : "bg-kwotient-paper"
                  }`}
                >
                  <td className="px-6 py-4 text-sm font-semibold text-kwotient-ink">
                    {row.feature}
                  </td>
                  {/* Kwotient */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4 text-kwotient-success flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-kwotient-ink font-medium">{row.kwotient}</span>
                    </div>
                  </td>
                  {/* Manual */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <svg className="h-4 w-4 text-kwotient-muted/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                      </svg>
                      <span className="text-sm text-kwotient-muted">{row.manual}</span>
                    </div>
                  </td>
                  {/* Other AI */}
                  <td className="px-6 py-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {row.otherAI === "No" || row.otherAI === "Rarely" ? (
                        <svg className="h-4 w-4 text-red-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      ) : (
                        <svg className="h-4 w-4 text-yellow-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      )}
                      <span className="text-sm text-kwotient-muted">{row.otherAI}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-kwotient-muted mt-4">
          Comparison based on publicly available information and internal benchmarking. Updated March 2026.
        </p>
      </div>
    </section>
  );
}
