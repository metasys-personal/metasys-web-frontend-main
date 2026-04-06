
import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import { cloudPartners } from "@/app/lib/partners.data";
import {
  GlobalHeader,
  GlobalHero,
  GlobalStats,
  GlobalReinvent,
  GlobalTrendingRail,
  PartnersWithText,
  GlobalCareer,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function CloudClientPage() {
  return (
    <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
      <GlobalHeader
        title="Cloud"
        navItems={[
          { label: "What we do", id: "what-we-do" },
          { label: "What's trending", id: "whats-trending" },
          { label: "Leaders", id: "leaders" },
          { label: "Careers", id: "careers" },
        ]}
      />


      <GlobalHero
        id="what-we-do"
        title="Cloud consulting services"
        description="AI at scale depends on cloud at scale. Unlock cloud’s true potential by modernizing and reframing it as the engine of AI, innovation and growth."
        imageSrc="/images/cloud.svg"
      />

      <GlobalStats
        title="Cloud now"
        stats={[
          {
            value: "51%",
            description:
              "of front-runners’ tech budgets are invested in cloud and AI",
          },
          {
            value: "$805B",
            description:
              "worldwide end-user spending on public cloud services during 2024",
          },
          {
            value: "Only 13%",
            description:
              "of companies are “extremely confident” they have the right data strategies and core digital capabilities to effectively leverage gen AI.",
          },
        ]}
      />


      <GlobalReinvent
        title="Reinvent with cloud"
        items={reinventCloudItems}
        limit={8}
        className="lg:my-[120px]"
      />

      <GlobalTrendingRail
        sectionId="whats-trending"
        title="What’s trending with cloud?"
        items={trendingCloudItems}
        className="mt-24"
      />

      <PartnersWithText
        title="Partners in change"
        partners={cloudPartners}
        sectionId="partners"
      />

      {/* <GlobalLeaders
        title="Our Leaders"
        
        sectionId="leaders"
        className="mt-24"

        leaders={leaders} limit={4} imageSize="w-full lg:w-72 h-72"
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
        title="Cloud careers"
        description="Join our cloud team and work across industries—from high tech to high fashion—to help clients reimagine and build a better future.​"
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