"use client";

import { useEffect, useState } from "react";

import InsightCard from "./insight-card";
import { Insight } from "@/app/types/insights";
import Link from "next/link";

import dynamic from "next/dynamic";
import { useClientTranslation } from "@/app/hooks/useTranslations";
import { useLocale } from "@/app/providers/locale-context";

const InsightsMobileSlider = dynamic(
  () => import("../home-page/insight-mobile-slider"),
  {
    ssr: false,
  }
);

export default function InsightsSection() {
  const { locale } = useLocale();
  const { t } = useClientTranslation(locale);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    fetch("/api/insights")
      .then((r) => r.json())
      .then((data) => setInsights(data))
      .catch(() => setInsights([]));

    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  if (!insights || insights.length === 0) return null;

  // Only show 3 insights on homepage
  const displayedInsights = insights.slice(0, 3);

  return (
    <section className="w-full bg-black text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">{t('insights.title')}</h2>
          <Link
            href="/insights"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            {t('insights.viewAll')} →
          </Link>
        </div>

        {/* Mobile slider */}
        {isMobile ? (
          <div className="block sm:hidden relative">
            <InsightsMobileSlider
              insights={displayedInsights}
              onProgress={setProgress}
            />

            <div className="absolute left-4 right-4 bottom-[-20] h-1.5 bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-1.5 bg-white rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        ) : (
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedInsights.map((it) => (
              <InsightCard key={it.id} item={it} />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
