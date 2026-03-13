interface BrowserMockupProps {
  className?: string;
}

export function BrowserMockup({ className = "" }: BrowserMockupProps) {
  return (
    <div
      className={`overflow-hidden rounded-2xl shadow-2xl border border-white/10 ${className}`}
      style={{ background: "#0F1729" }}
    >
      {/* Browser Chrome */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10" style={{ background: "#1A2340" }}>
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
          <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <div className="h-3 w-3 rounded-full bg-[#28C840]" />
        </div>
        {/* URL bar */}
        <div className="flex-1 mx-4">
          <div className="flex items-center gap-2 rounded-md px-3 py-1.5" style={{ background: "#0F1729" }}>
            <svg className="h-3 w-3 text-dark-muted flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="text-xs text-dark-muted font-medium">app.kwotient.com</span>
          </div>
        </div>
        {/* Action icons placeholder */}
        <div className="flex items-center gap-2">
          <div className="h-5 w-5 rounded" style={{ background: "#0F1729" }} />
          <div className="h-5 w-5 rounded" style={{ background: "#0F1729" }} />
        </div>
      </div>

      {/* App Content */}
      <div className="flex" style={{ height: "420px" }}>
        {/* Sidebar */}
        <div className="flex flex-col gap-1 p-3 border-r border-white/10 w-[180px] flex-shrink-0" style={{ background: "#1A2340" }}>
          <div className="mb-3 px-2 py-2">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-kwotient-accent flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">K</span>
              </div>
              <span className="text-xs font-semibold text-dark-text">Kwotient</span>
            </div>
          </div>
          {[
            { label: "Dashboard", icon: "◈", active: false },
            { label: "Campaigns", icon: "✦", active: true },
            { label: "Contacts", icon: "◉", active: false },
            { label: "Review Queue", icon: "⊞", active: false },
            { label: "Analytics", icon: "◎", active: false },
            { label: "Integrations", icon: "◐", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2.5 rounded-lg px-2 py-2 ${
                item.active
                  ? "bg-kwotient-accent text-white"
                  : "text-dark-muted hover:text-dark-text hover:bg-white/5"
              }`}
            >
              <span className="text-xs">{item.icon}</span>
              <span className="text-xs font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-hidden p-4 flex flex-col gap-3">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="h-4 w-32 rounded bg-dark-text/90 mb-1" />
              <div className="h-2.5 w-48 rounded bg-dark-muted/40" />
            </div>
            <div className="flex items-center gap-2">
              <div className="h-7 w-20 rounded-lg bg-dark-surface border border-white/10 flex items-center justify-center">
                <span className="text-[9px] text-dark-muted font-medium">Batch mode</span>
              </div>
              <div className="h-7 w-24 rounded-lg bg-kwotient-accent flex items-center justify-center">
                <span className="text-[9px] text-white font-semibold">+ New Campaign</span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Queued", value: "47", color: "text-dark-accent" },
              { label: "Sent Today", value: "128", color: "text-kwotient-success" },
              { label: "Reply Rate", value: "8.4%", color: "text-kwotient-secondary" },
            ].map((stat) => (
              <div key={stat.label} className="rounded-xl p-2.5 border border-white/10" style={{ background: "#1A2340" }}>
                <div className={`text-sm font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-[9px] text-dark-muted mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Email list */}
          <div className="flex flex-col gap-1.5 flex-1 overflow-hidden">
            <div className="text-[9px] text-dark-muted font-semibold uppercase tracking-wider px-1">Review Queue</div>
            {[
              { name: "Marcus Johnson", company: "Apex Solutions", tone: "Curious", status: "draft", score: 94 },
              { name: "Priya Patel", company: "Vertex Capital", tone: "Warm", status: "approved", score: 97 },
              { name: "Chris Watkins", company: "Nuvola SaaS", tone: "Skeptical", status: "draft", score: 88 },
              { name: "Lee Harrington", company: "TalentBase", tone: "Neutral", status: "draft", score: 91 },
            ].map((email, i) => (
              <div
                key={i}
                className="flex items-center gap-3 rounded-xl p-2.5 border border-white/8 hover:border-white/15 transition-colors cursor-pointer"
                style={{ background: "#1A2340" }}
              >
                {/* Avatar */}
                <div className="h-7 w-7 rounded-full flex-shrink-0 flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: `hsl(${i * 60 + 200}, 60%, 35%)` }}>
                  {email.name.charAt(0)}
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-semibold text-dark-text truncate">{email.name}</span>
                    <span className="text-[8px] text-dark-muted">·</span>
                    <span className="text-[9px] text-dark-muted truncate">{email.company}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-[8px] px-1.5 py-0.5 rounded-full border border-white/10 text-dark-muted">{email.tone}</span>
                    <span className="text-[8px] text-dark-muted">AI Score: <span className="text-dark-accent font-semibold">{email.score}</span></span>
                  </div>
                </div>
                {/* Status */}
                <div className={`flex-shrink-0 h-5 w-14 rounded-full flex items-center justify-center text-[8px] font-semibold ${
                  email.status === "approved"
                    ? "bg-kwotient-success/20 text-kwotient-success border border-kwotient-success/30"
                    : "bg-dark-accent/20 text-dark-accent border border-dark-accent/30"
                }`}>
                  {email.status === "approved" ? "Approved" : "Review"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
