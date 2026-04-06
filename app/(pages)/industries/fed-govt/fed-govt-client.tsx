"use client";

import dynamic from "next/dynamic";

import {
  GlobalHeader,
  GlobalHero,
  GlobalStats,
  GlobalTrendingRail,
  GlobalHoverShowcase,
  GlobalReinvent,
  GlobalPartners,
} from "@/app/components/common";

import WhyWorkWithUsSection from "@/app/components/common/why-work-with-us-section";
import { GlobalFeatureSection } from "@/app/components/common/feature-section";
import HowWeHelpAccordion from "@/app/components/common/how-we-help";

import {
  accelerateDetails,
  SecuritypartnersData,
  workingWithusDetails,
} from "@/app/lib/partners.data";

import { trendingCloudItems } from "@/app/lib/trending.data";
import { innovateItems } from "@/app/lib/hovers.data";
import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { howWeHelpData } from "@/app/lib/how-we-help";
import OurTeamIntro from "@/app/components/common/our-team-intro";

const AccelerateSlider = dynamic(
  () => import("@/app/components/common/accelerate-slider"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[300px] flex items-center justify-center text-gray-500">
        Loading partners…
      </div>
    ),
  }
);

export default function FederalGovtClient() {
  return (
    <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
      <GlobalHeader
        title="Metasys federal services"
        navItems={[
          { label: "What we do", id: "what-we-do" },
          { label: "Sectors", id: "sectors" },
          { label: "What's trending", id: "whats-trending" },
          { label: "Leaders", id: "leaders" },
          { label: "Careers", id: "careers" },
        ]}
      />

      <GlobalHero
        id="what-we-do"
        title="Metasys federal services"
        description="Powering the next era of US competitiveness..."
        imageSrc="/images/fed-govt.svg"
      />

      <GlobalStats
        title="Delivering value and results"
        stats={[
          { value: "$8.6B", description: "Saved in fraudulent payments" },
          { value: "$5B", description: "Saved through modernization" },
          { value: "273M", description: "Cyber attacks blocked" },
          { value: "150", description: "Legacy systems retired" },
        ]}
      />

      <GlobalFeatureSection features={[]} />

      <HowWeHelpAccordion data={howWeHelpData} />

      <GlobalReinvent
        title="How to reinvent your digital core"
        items={reinventCloudItems}
        limit={8}
        className="lg:my-[120px]"
      />

      {/* HEAVY → lazy-loaded */}
      <AccelerateSlider
        title="Accelerate your journey"
        partners={accelerateDetails}
        showLearnMore={false}
      />

      <WhyWorkWithUsSection
        title="Metasys Federal Services + Palantir"
        description="Advance your mission with AI."
        image="/images/work-withus.jpg"
        className="mt-10"
      />

      <GlobalHoverShowcase
        title="How to innovate"
        items={innovateItems}
        className="mt-10"
      />

      <GlobalTrendingRail
        title="What’s trending in federal"
        items={trendingCloudItems}
        className="mt-24"
      />

      <AccelerateSlider
        title="Working with us"
        partners={workingWithusDetails}
        showLearnMore={false}
      />

      <GlobalPartners
        partners={SecuritypartnersData}
        title="Partners in change"
      />

      {/* <GlobalLeaders
        title="Our Leaders"
        leaders={leaders}
        className="my-16"
      /> */}
      <OurTeamIntro
              sectionId="team"
              className="mt-24"
               description={`We are Metasys, a global team of innovators, technologists, and strategists focused on
               driving meaningful digital transformation. Across AI, cloud, data, and emerging technologies,
               we collaborate to modernize systems, optimize operations, and deliver measurable business
               impact. Our culture is built on innovation, technical excellence, and helping organizations
               scale smarter, operate more efficiently, and embrace the future with confidence`}
            />
    </div>
  );
}
