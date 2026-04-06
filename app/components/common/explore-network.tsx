"use client";

import { useMemo, useState } from "react";
import { ChevronDown } from "lucide-react";

export type DirectoryItem = {
  label: string;
  href: string;
};

type ExploreNetworkProps = {
  title: string;
  description?: string;
  items: DirectoryItem[];
  defaultRange?: string;
  className?: string;
};

const ALPHA_RANGES = [
  { label: "A–C", start: "A", end: "C" },
  { label: "D–F", start: "D", end: "F" },
  { label: "G–I", start: "G", end: "I" },
  { label: "J–L", start: "J", end: "L" },
  { label: "M–O", start: "M", end: "O" },
  { label: "P–R", start: "P", end: "R" },
  { label: "S–U", start: "S", end: "U" },
  { label: "V–Z", start: "V", end: "Z" },
];

export function ExploreNetwork({
  title,
  description,
  items,
  defaultRange = "A–C",
  className = "",
}: ExploreNetworkProps) {
  const initialRange =
    ALPHA_RANGES.find((r) => r.label === defaultRange) ?? ALPHA_RANGES[0];

  const [activeRange, setActiveRange] = useState(initialRange);
  const [mobileOpen, setMobileOpen] = useState(false);

  const filteredItems = useMemo(() => {
    return items
      .filter((item) => {
        const first = item.label[0]?.toUpperCase();
        return first >= activeRange.start && first <= activeRange.end;
      })
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [items, activeRange]);

  return (
    <section className={`bg-black py-16 text-white ${className}`}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <h2 className="mb-4 text-3xl md:text-4xl lg:text-5xl font-semibold">
          {title}
        </h2>

        {description && (
          <p className="mb-12 max-w-3xl text-neutral-300">
            {description}
          </p>
        )}

        {/* Alphabet Tabs (desktop + tablet) */}
        <div className="mb-12 hidden md:flex gap-8">
          {ALPHA_RANGES.map((range) => (
            <button
              key={range.label}
              onClick={() => setActiveRange(range)}
              className={`text-sm font-medium transition ${activeRange.label === range.label
                  ? "text-white"
                  : "text-neutral-400 hover:text-neutral-200"
                }`}
            >
              {range.label}
            </button>
          ))}
        </div>

        {/* Mobile Dropdown */}
        <div className="relative mb-10 md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="flex w-full items-center justify-between border border-neutral-700 px-4 py-3 text-sm"
          >
            <span>{activeRange.label}</span>
            <ChevronDown aria-hidden="true" />
          </button>

          {mobileOpen && (
            <div className="fixed inset-0 z-50 bg-black p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-lg font-semibold">Select range</span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close range selector">
                  ✕
                </button>
              </div>

              <div className="flex flex-col gap-6">
                {ALPHA_RANGES.map((range) => (
                  <button
                    key={range.label}
                    onClick={() => {
                      setActiveRange(range);
                      setMobileOpen(false);
                    }}
                    className={`text-left text-xl ${activeRange.label === range.label
                        ? "text-white"
                        : "text-neutral-400"
                      }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Items */}
        <div className="grid gap-x-12 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-block w-fit text-sm text-neutral-300 hover:text-white"
            >
              <span className="border-b border-neutral-600 group-hover:border-white transition">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}