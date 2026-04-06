"use client";

import { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
};

export function HowWeHelpAccordionItem({
  title,
  content,
}: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between py-4 text-left"
      >
        <span className="text-sm sm:text-base md:text-2xl font-semibold">
          {title}
        </span>

        <span className="text-xl">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="pb-4 text-sm sm:text-lg max-w-3xl text-white/80">
          {content}
        </p>
      </div>
    </div>
  );
}