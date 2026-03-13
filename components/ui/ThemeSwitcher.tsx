"use client";

import { useState, useEffect } from "react";

const THEMES = [
  {
    id: "orange",
    name: "Kwotient Orange",
    swatch: "#E8590C",
    vars: {
      "--color-kwotient-ink":         "#0F1729",
      "--color-kwotient-paper":        "#FAFBFD",
      "--color-kwotient-surface":      "#F1F3F7",
      "--color-kwotient-accent":       "#E8590C",
      "--color-kwotient-accent-hover": "#D14B06",
      "--color-kwotient-secondary":    "#2563EB",
      "--color-kwotient-muted":        "#64748B",
      "--color-kwotient-border":       "#E2E8F0",
      "--color-dark-bg":               "#0F1729",
      "--color-dark-surface":          "#1A2340",
      "--color-dark-accent":           "#F97316",
      "--color-dark-muted":            "#94A3B8",
      "--color-dark-text":             "#F1F3F7",
    },
  },
  {
    id: "sapphire",
    name: "Midnight Sapphire",
    swatch: "#2563EB",
    vars: {
      "--color-kwotient-ink":         "#0C1426",
      "--color-kwotient-paper":        "#F7F9FF",
      "--color-kwotient-surface":      "#EEF2FF",
      "--color-kwotient-accent":       "#2563EB",
      "--color-kwotient-accent-hover": "#1D4ED8",
      "--color-kwotient-secondary":    "#7C3AED",
      "--color-kwotient-muted":        "#64748B",
      "--color-kwotient-border":       "#DBEAFE",
      "--color-dark-bg":               "#0C1426",
      "--color-dark-surface":          "#162040",
      "--color-dark-accent":           "#60A5FA",
      "--color-dark-muted":            "#94A3B8",
      "--color-dark-text":             "#F0F6FF",
    },
  },
  {
    id: "forest",
    name: "Forest & Amber",
    swatch: "#D97706",
    vars: {
      "--color-kwotient-ink":         "#0F2018",
      "--color-kwotient-paper":        "#F8FBF6",
      "--color-kwotient-surface":      "#EEF7EA",
      "--color-kwotient-accent":       "#D97706",
      "--color-kwotient-accent-hover": "#B45309",
      "--color-kwotient-secondary":    "#059669",
      "--color-kwotient-muted":        "#64748B",
      "--color-kwotient-border":       "#D1FAE5",
      "--color-dark-bg":               "#0F2018",
      "--color-dark-surface":          "#1A3024",
      "--color-dark-accent":           "#F59E0B",
      "--color-dark-muted":            "#A3B8AD",
      "--color-dark-text":             "#F0FAF4",
    },
  },
  {
    id: "emerald",
    name: "Slate & Emerald",
    swatch: "#059669",
    vars: {
      "--color-kwotient-ink":         "#1E2A3A",
      "--color-kwotient-paper":        "#F7FAFB",
      "--color-kwotient-surface":      "#E8F5F4",
      "--color-kwotient-accent":       "#059669",
      "--color-kwotient-accent-hover": "#047857",
      "--color-kwotient-secondary":    "#0284C7",
      "--color-kwotient-muted":        "#64748B",
      "--color-kwotient-border":       "#CCFBF1",
      "--color-dark-bg":               "#1E2A3A",
      "--color-dark-surface":          "#253448",
      "--color-dark-accent":           "#34D399",
      "--color-dark-muted":            "#94A3B8",
      "--color-dark-text":             "#F0FDFA",
    },
  },
  {
    id: "crimson",
    name: "Void & Crimson",
    swatch: "#DC2626",
    vars: {
      "--color-kwotient-ink":         "#1A1120",
      "--color-kwotient-paper":        "#FAF9FC",
      "--color-kwotient-surface":      "#F4F0F8",
      "--color-kwotient-accent":       "#DC2626",
      "--color-kwotient-accent-hover": "#B91C1C",
      "--color-kwotient-secondary":    "#7C3AED",
      "--color-kwotient-muted":        "#6B7280",
      "--color-kwotient-border":       "#EDE9F2",
      "--color-dark-bg":               "#1A1120",
      "--color-dark-surface":          "#261830",
      "--color-dark-accent":           "#F87171",
      "--color-dark-muted":            "#9CA3AF",
      "--color-dark-text":             "#FAF5FF",
    },
  },
];

export function ThemeSwitcher() {
  const [active, setActive] = useState("orange");
  const [open, setOpen] = useState(true);

  // Apply theme vars to :root
  const applyTheme = (themeId: string) => {
    const theme = THEMES.find((t) => t.id === themeId);
    if (!theme) return;
    const root = document.documentElement;
    Object.entries(theme.vars).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });
    setActive(themeId);
  };

  // Apply default on mount
  useEffect(() => {
    applyTheme("orange");
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-2">
      {/* Expanded panel */}
      {open && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl p-4 w-56">
          <p className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest mb-3">
            Color Scheme
          </p>
          <div className="flex flex-col gap-2">
            {THEMES.map((theme) => (
              <button
                key={theme.id}
                onClick={() => applyTheme(theme.id)}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 transition-all text-left ${
                  active === theme.id
                    ? "bg-gray-100 ring-1 ring-gray-300"
                    : "hover:bg-gray-50"
                }`}
              >
                <span
                  className="h-5 w-5 rounded-full flex-shrink-0 shadow-sm"
                  style={{ backgroundColor: theme.swatch }}
                />
                <span className="text-[13px] font-medium text-gray-700">
                  {theme.name}
                </span>
                {active === theme.id && (
                  <span className="ml-auto text-gray-400 text-xs">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="h-11 w-11 rounded-full bg-gray-900 text-white shadow-xl flex items-center justify-center hover:bg-gray-700 transition-colors"
        title="Theme switcher"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      </button>
    </div>
  );
}
