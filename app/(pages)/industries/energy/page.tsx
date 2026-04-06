import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import { cloudPartners } from "@/app/lib/partners.data";
import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalCareer,
    GlobalHoverShowcase,
    PartnersWithText,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function Energy() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Energy"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "Segments", id: "segment" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Energy consulting"
                description="Fuel energy resilience and reinvention. Amid rising demand, fierce competition, a push for sustainability, plus inflation and supply chain challenges, oil and gas companies need to adapt quickly to remain competitive."
                imageSrc="/images/energy.svg"
            />


            <GlobalStats
                title="Energy now"
                stats={[
                    {
                        value: "50%",
                        description:
                            "the estimated growth in demand for secure and sustainable energy over the next three decades as global GDP and populations grow",
                    },
                    {
                        value: "48%",
                        description:
                            "of executives expect their organization to primarily benefit from investments in AI in terms of improved effectiveness",
                    },
                    {
                        value: "99%",
                        description:
                            "of energy executives agree investments in emerging technologies will help their organizations remain resilient on the global stage",
                    },
                    {
                        value: "97%",
                        description:
                            "of energy executives agree the convergence of digital and physical worlds over the next decade will transform their industry",
                    },
                ]}
            />

            
            <GlobalReinvent
              title="How to reinvent energy"
              items={reinventCloudItems}
              limit={8}
              className="lg:my-[120px]"
             />


           <GlobalHoverShowcase
           title="How to innovate"
           items={innovateItems}
           />



            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in energy"
                items={trendingCloudItems}
                className="mt-24"
            />

             <PartnersWithText
                    title="Partners in change"
                    partners={cloudPartners}
                    sectionId="partners"
                    showLearnMore={false}
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
                title="Energy careers"
                description="Create industry-leading solutions to increase efficiency and boost growth sustainably and securely.​​"
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
