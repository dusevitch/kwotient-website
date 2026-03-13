"use client";

import { useEffect, useRef } from "react";
import { useCountUp } from "@/lib/hooks/useCountUp";
import { useScrollReveal } from "@/lib/hooks/useScrollReveal";

interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  description,
  decimals = 0,
  duration = 2000,
  className = "",
}: StatCounterProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });
  const { count, startCount } = useCountUp({ end: value, duration, decimals });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (isVisible && !hasStarted.current) {
      hasStarted.current = true;
      startCount();
    }
  }, [isVisible, startCount]);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`text-center ${className}`}
    >
      <div className="flex items-baseline justify-center gap-0.5">
        {prefix && (
          <span className="text-3xl font-bold text-dark-accent">{prefix}</span>
        )}
        <span className="text-5xl font-bold text-dark-text" style={{ fontFamily: "var(--font-heading)" }}>
          {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
        </span>
        {suffix && (
          <span className="text-3xl font-bold text-dark-accent">{suffix}</span>
        )}
      </div>
      <p className="mt-2 text-sm font-semibold text-dark-text uppercase tracking-wider">{label}</p>
      {description && (
        <p className="mt-1 text-sm text-dark-muted">{description}</p>
      )}
    </div>
  );
}
