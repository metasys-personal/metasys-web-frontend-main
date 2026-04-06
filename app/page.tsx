'use client';

import { useEffect } from "react";

import NavbarNew from "./components/navbar/navbar";
import Hero from "./components/home-page/hero";
import Services from "./components/home-page/services";
 import OurValue from "./components/home-page/our-value";
import InsightsSection from "./components/home-page/insights-section";
import ArticlesSection from "./components/home-page/article-section";
import NewsSection from "./components/home-page/news-section";
import CareersSection from "./components/career-section";
import AccentureHighlightsSlider from "./components/common/accenture-highlight-slider";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <NavbarNew />
      <Hero />
      <Services />
      <OurValue />
      <InsightsSection />
      <ArticlesSection />
      <AccentureHighlightsSlider />
      <CareersSection />
      <NewsSection />
    </main>
  );
}
