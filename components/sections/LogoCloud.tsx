const LOGO_COMPANIES = [
  "Meridian Tech",
  "Apex Solutions",
  "Vertex Capital",
  "Nuvola SaaS",
  "TalentBase",
  "CoreBridge",
];

export function LogoCloud() {
  return (
    <section className="py-14 bg-white border-y border-kwotient-border">
      <div className="mx-auto max-w-[1200px] px-6">
        <p className="text-center text-xs font-semibold text-kwotient-muted uppercase tracking-widest mb-8">
          Trusted by sales teams at
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
          {LOGO_COMPANIES.map((company) => (
            <div
              key={company}
              className="flex items-center justify-center w-full"
            >
              {/* Placeholder logo block */}
              <div className="flex items-center gap-2 opacity-50 hover:opacity-70 transition-opacity duration-200 cursor-default">
                <div className="h-5 w-5 rounded bg-kwotient-muted/40 flex-shrink-0" />
                <span
                  className="text-sm font-semibold text-kwotient-muted hidden sm:block"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {company}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
