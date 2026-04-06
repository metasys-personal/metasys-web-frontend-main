"use client";

import dynamic from "next/dynamic";
import ReinventedPage from "../ReinventedPage";
import ShapingTomorrowSection from "../ShapingTomorrowSection";
import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";


const CaseStudyHighlight = dynamic(
  () => import("@/app/components/home-page/case-study"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] flex items-center justify-center text-gray-400">
        Loading case studies…
      </div>
    ),
  }
);

export default function ExtrasClient() {
  return (
    <>
      <NavbarNew />
      <main className="bg-black text-white min-h-screen pt-30 px-4 md:px-8 lg:px-16">
        <Breadcrumb
          overrideSegments={[

            { name: "Strategies", href: "/insights/strategy/extras" },
          ]}
        />
        <ReinventedPage />
        <ShapingTomorrowSection />
        <CaseStudyHighlight />
      </main>
    </>
  );
}
