import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import {
  GlobalHeader,
  GlobalHero,
  GlobalStats,
  GlobalReinvent,
  GlobalTrendingRail,
  GlobalCareer,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function Chemicals() {
  return (
    <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
      <GlobalHeader
        title="Chemicals"
        navItems={[
          { label: "What we do", id: "what-we-do" },
          { label: "What's trending", id: "whats-trending" },
          { label: "Leaders", id: "leaders" },
          { label: "Careers", id: "careers" },
        ]}
      />


      <GlobalHero
        id="what-we-do"
        title="Chemical consulting"
        description="Embracing change as a constant in chemicals. Chemical companies require innovative solutions to seize growth opportunities – from net zero to new products and more."
        imageSrc="/images/chemicals.svg"
      />

      <GlobalStats
        title="Chemical industry now"
        stats={[
          {
            value: "65%",
            description:
              "of chemical executives say inflation and price volatility are the most pressing challenge",
          },
          {
            value: "87%",
            description:
              "of chemical CXOs say their organizations are currently undergoing compressed transformation",
          },
          {
            value: "58%",
            description:
              "of chemical executives have adopted a deliberate enterprise-wide strategy to reinvent all functions and business units",
          },
          {
            value: "94%",
            description:
              "of chemical executives are either very or extremely inspired by the new capabilities offered by AI foundation models",
          },
        ]}
      />


      <GlobalReinvent
        title="How to reinvent chemicals"
        items={reinventCloudItems}
        limit={8}
        className="lg:my-[120px]"
      />

      <GlobalTrendingRail
        sectionId="whats-trending"
        title="What’s trending in chemicals"
        items={trendingCloudItems}
        className="mt-24"
      />


      {/* <GlobalLeaders
        title="Our Leaders"
        leaders={leaders}
        sectionId="leaders"
        className="mt-24"
        imageSize="w-full lg:w-60 h-72"
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

      <GlobalCareer
        title="Chemicals careers"
        description="Use innovation-first thinking to help chemical companies drive sustainable growth.​"
        mobileImage="/images/cloudbg.jpg"
        desktopImage="/images/cloudbg.jpg"
        sectionId="careers"
        className="mt-8"
        links={[
          {
            label: "See open roles",
            href: "/careers/search",
          },
        ]}
      />
    </div>
  );
}