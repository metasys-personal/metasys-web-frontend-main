"use client";

import { useRef, useEffect, useState } from "react";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";

interface NewsItem {
  date: string;
  headline: string;
}

const newsData: NewsItem[] = [
  { date: "2025-09-23", headline: "AI revolution accelerates in enterprise solutions" },
  { date: "2025-09-22", headline: "New cloud strategy launched for global operations" },
  { date: "2025-09-21", headline: "Employee experience platform receives award" },
  { date: "2025-09-20", headline: "Digital transformation consulting expands to APAC region" },
  { date: "2025-09-19", headline: "Innovation lab launches new product initiative" },
];

export default function NewsSection() {
  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);
  const tickerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef(0);
  const [lastIndex, setLastIndex] = useState(0);
  const total = newsData.length;

  const formatDate = (iso: string) =>
    new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

  // Auto-scroll ticker
  useEffect(() => {
    let animationFrame: number;
    const scrollTicker = () => {
      if (!tickerRef.current) return;

      const itemWidth = tickerRef.current.scrollWidth / 2 / total;

      // continuous auto-scroll
      scrollRef.current += 0.5; // speed
      const width = tickerRef.current.scrollWidth / 2;
      if (scrollRef.current >= width) scrollRef.current = 0;

      tickerRef.current.style.transform = `translateX(-${scrollRef.current}px)`;

      // update pagination fraction based on scroll
      const current = Math.floor(scrollRef.current / itemWidth) % total;
      setLastIndex(current);

      animationFrame = requestAnimationFrame(scrollTicker);
    };

    animationFrame = requestAnimationFrame(scrollTicker);
    return () => cancelAnimationFrame(animationFrame);
  }, [total]);

  const prev = () => {
    if (!tickerRef.current) return;

    const itemWidth = tickerRef.current.scrollWidth / 2 / total;
    const newIndex = lastIndex === 0 ? total - 1 : lastIndex - 1;
    scrollRef.current = newIndex * itemWidth;
    tickerRef.current.style.transition = "transform 0.3s ease-out";
    tickerRef.current.style.transform = `translateX(-${scrollRef.current}px)`;
    setLastIndex(newIndex);

    // remove transition after animation to resume smooth auto-scroll
    setTimeout(() => {
      if (!tickerRef.current) return;
      tickerRef.current.style.transition = "none";
    }, 300);
  };

  const next = () => {
    if (!tickerRef.current) return;

    const itemWidth = tickerRef.current.scrollWidth / 2 / total;
    const newIndex = lastIndex === total - 1 ? 0 : lastIndex + 1;
    scrollRef.current = newIndex * itemWidth;
    tickerRef.current.style.transition = "transform 0.3s ease-out";
    tickerRef.current.style.transform = `translateX(-${scrollRef.current}px)`;
    setLastIndex(newIndex);

    setTimeout(() => {
      if (!tickerRef.current) return;
      tickerRef.current.style.transition = "none";
    }, 300);
  };

  return (
    <section className="w-full bg-black text-white py-20 px-6 md:px-8 lg:px-16">
      <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('news.title')}</h2>

      <div className="overflow-hidden relative">
        <div ref={tickerRef} className="flex whitespace-nowrap gap-16">
          {[...newsData, ...newsData].map((item, idx) => (
            <div key={idx} className="shrink-0 min-w-[250px] md:min-w-[350px] px-4 md:px-8">
              <p className="text-gray-400 text-sm mb-2">{formatDate(item.date)}</p>
              <p className="text-xl md:text-4xl font-semibold max-w-[300px] md:max-w-[550px] lg:max-w-[600px] whitespace-normal">
                {item.headline}
              </p>

            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-end mt-3 md:mt-8">
        <div className="flex items-center gap-2">
          <button aria-label="Previous page" onClick={prev} className="bg-[#373434] hover:bg-[#191919] p-1 md:p-3 transition rounded">
            ←
          </button>
          <div className="custom-pagination text-gray-300 text-sm px-2">
            {lastIndex + 1} / {total}
          </div>
          <button aria-label="Next page" onClick={next} className="bg-[#373434] hover:bg-[#191919] p-1 md:p-3 transition rounded">
            →
          </button>
        </div>
      </div>
    </section>
  );
}