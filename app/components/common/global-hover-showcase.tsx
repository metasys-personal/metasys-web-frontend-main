"use client";

import Image from "next/image";
import { useState } from "react";

export type HoverItem = {
  label: string;
  title: string;
  description: string;
  image: string;
};

type GlobalHoverShowcaseProps = {
  title: string;
  items: HoverItem[];
  sectionId?: string;
  className?: string;
};

export default function GlobalHoverShowcase({
  title,
  items,
  sectionId,
  className = "",
}: GlobalHoverShowcaseProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <section
      id={sectionId}
      className={`bg-black text-white py-16 scroll-mt-[140px] ${className}`}
    >
      <div className="px-6 lg:px-12">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-12">
          {title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* LEFT LIST */}
          <div className="space-y-4">
            {items.map((item, index) => (
              <button
                key={item.label}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                  w-full text-left py-3 text-xl md:text-2xl
                  transition-all
                  ${
                    activeIndex === index
                      ? "text-white font-semibold translate-x-2"
                      : "text-white/60 hover:text-white"
                  }
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {activeItem.title}
              </h3>

              <p className="text-white/75 leading-relaxed max-w-xl">
                {activeItem.description}
              </p>
            </div>

            <div className="relative w-full h-[260px] md:h-80 overflow-hidden rounded-lg">
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
