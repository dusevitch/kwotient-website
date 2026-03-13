"use client";

interface VideoPlaceholderProps {
  label?: string;
  className?: string;
}

export function VideoPlaceholder({
  label = "Watch how it works",
  className = "",
}: VideoPlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-kwotient-ink to-dark-surface shadow-2xl ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(232,89,12,0.4) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(37,99,235,0.3) 0%, transparent 50%)`,
        }} />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }} />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        {/* Play button */}
        <button
          className="group flex h-18 w-18 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-kwotient-accent hover:border-kwotient-accent hover:scale-110 hover:shadow-[0_0_40px_rgba(232,89,12,0.4)]"
          style={{ width: "72px", height: "72px" }}
          aria-label="Play video"
        >
          <svg
            className="ml-1 h-7 w-7 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>

        {/* Label */}
        <p className="text-sm font-medium text-dark-muted tracking-wide">
          {label}
        </p>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-kwotient-accent animate-pulse-soft" />
        <span className="text-xs text-dark-muted font-medium">Live demo available</span>
      </div>
    </div>
  );
}
