"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type TrendingItem = {
  image: string;
  title: string;
  description: string;
  tag?: string;
};

type GlobalTrendingRailProps = {
  title: string;
  items: TrendingItem[];
  sectionId?: string;
  className?: string;
};

export default function GlobalTrendingRail({
  title,
  items,
  sectionId,
  className = "",
}: GlobalTrendingRailProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      id={sectionId}
      className={`bg-black text-white md:py-10 scroll-mt-[140px] ${className}`}
    >
      <div className="overflow-x-hidden px-4 md:px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl md:max-w-3xl lg:text-5xl font-semibold mb-12">
          {title}
        </h2>

        {/* Scroll rail */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto thin-scrollbar scroll-smooth pb-8"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                min-w-[320px]
                h-[420px]
                overflow-hidden
                border border-white/10
                rounded-lg
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.16,.84,.44,1)] group-hover:scale-110 group-hover:opacity-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title */}
              <div className="relative p-6 z-20 pointer-events-none">
                <p className="text-xs tracking-widest text-white mb-4">
                  {item.tag ?? "TRENDING"}
                </p>
                <h3 className="text-xl font-semibold leading-snug">
                  {item.title}
                </h3>
              </div>

              {/* Hover content */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  p-6
                  opacity-0
                  translate-x-8
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all duration-500 ease-[cubic-bezier(.16,.84,.44,1)]
                "
              >
                <p className="text-sm text-white/80 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex justify-end items-center gap-2 text-sm font-medium">
                  <span>Explore</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ArrowLeft size={18} aria-hidden="true" />
          </button>

          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ArrowRight size={18} aria-hidden="true" />
          </button>

        </div>
      </div>
    </section>
  );
}
