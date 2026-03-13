"use client";

import { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

function AccordionSingle({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`border rounded-xl transition-all duration-200 ${
        isOpen
          ? "border-kwotient-accent/30 bg-white shadow-sm"
          : "border-kwotient-border bg-white hover:border-kwotient-accent/20"
      }`}
    >
      <button
        className="flex w-full items-center justify-between px-6 py-5 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-kwotient-ink pr-4" style={{ fontFamily: "var(--font-heading)" }}>
          {item.question}
        </span>
        <div
          className={`flex-shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-all duration-200 ${
            isOpen
              ? "bg-kwotient-accent text-white rotate-45"
              : "bg-kwotient-surface text-kwotient-muted"
          }`}
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-kwotient-muted leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {items.map((item, index) => (
        <AccordionSingle
          key={index}
          item={item}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
