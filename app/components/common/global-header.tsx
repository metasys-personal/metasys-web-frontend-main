"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type NavItem = {
  label: string;
  id: string;
};

type GlobalHeaderProps = {
  title: string;
  navItems?: NavItem[];
};

export default function GlobalHeader({
  title,
  navItems = [],
}: GlobalHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 120;
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition =
      elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <header className="fixed top-[70px] left-0 w-full z-30 bg-[#191919] text-white">
      <div className="max-w-8xl mx-auto px-4 lg:px-12 pt-5 pb-3 flex items-center justify-between">
        {/* Dynamic title */}
        <div className="text-lg font-semibold tracking-wide cursor-pointer">
          {title}
        </div>

        {/* Desktop nav */}
        {navItems.length > 0 && (
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="relative inline-block font-semibold text-md
                after:block after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300
                hover:after:w-full cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}



        {/* Mobile toggle */}
        {navItems.length > 0 && (
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <ChevronUp size={24} aria-hidden="true" /> : <ChevronDown size={24} aria-hidden="true" />}
            </button>

          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && navItems.length > 0 && (
        <div className="md:hidden bg-[#191919] px-6 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-left font-medium hover:translate-x-1 transition"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
