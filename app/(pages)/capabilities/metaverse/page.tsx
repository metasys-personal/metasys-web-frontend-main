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


export default function Metaverse() {
  return (
    <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
      <GlobalHeader
        title="Metaverse"
        navItems={[
          { label: "What we do", id: "what-we-do" },
          { label: "What's trending", id: "whats-trending" },
          { label: "Leaders", id: "leaders" },
          { label: "Careers", id: "careers" },
        ]}
      />


      <GlobalHero
        id="what-we-do"
        title="Metaverse solutions"
        description="Welcome to new realities. The physical and virtual worlds are blending. The metaverse offers new ways to connect, create and consume. And it’s a fresh chance to generate totally inclusive, responsible experiences."
        imageSrc="/images/metaverse.svg"
      />

      <GlobalStats
        title="Metaverse now"
        stats={[
          {
            value: "81%",
            description:
              "of executives say metaverse related technologies are inspiring their organization’s vision or long-term strategy",
          },
          {
            value: "90%",
            description:
              "of executives anticipate an increase in the level of resources their organizations will dedicate to metaverse related technologies in the next 3-5 years",
          },
          {
            value: "$1T",
            description:
              "executives expect 4.2% of their revenues coming from metaverse in the next 3 years—a value of $1 trillion",
          },
        ]}
      />


      <GlobalReinvent
        title="Reinvent with us"
        items={reinventCloudItems}
        limit={8}
        className="lg:my-[120px]"
      />

      <GlobalTrendingRail
        sectionId="whats-trending"
        title="What’s trending"
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
        title="Metaverse careers"
        description="Create magical moments, delightful interactions, inspiring experiences and redefine how people interact with products and services."
        mobileImage="/images/cloudbg.jpg"
        desktopImage="/images/cloudbg.jpg"
        sectionId="careers"
        className="mt-8"
        links={[
          {
            label: "Search open roles",
            href: "/careers/search",
          },
        ]}
      />
    </div>
  );
}