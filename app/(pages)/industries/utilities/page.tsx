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

export default function Utilities() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Utilities"
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
                title="Power and utility"
                description="Radically reinventing Utilities for net zero. Utilities are the cornerstone in the transition to a carbon-neutral world. Achieving net-zero ambitions requires radical moves toward reinvention that will generate sustainable value for all."
                imageSrc="/images/utilities.svg"
            />


            <GlobalStats
                title="Utilities now"
                stats={[
                    {
                        value: "40%",
                        description:
                            "of the world’s CO2 emissions are generated from electricity",
                    },
                    {
                        value: "87%",
                        description:
                            "of utilities are currently on a trajectory to miss their net-zero goals",
                    },
                    {
                        value: "$200T",
                        description:
                            "potential investment opportunity that opens up from the energy transition by 2050, led by electric vehicles and low-carbon power as the biggest markets",
                    },
                    {
                        value: "14M",
                        description:
                            "projected new jobs that will be created related to clean energy technologies by 2050",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent utilities"
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
                title="What’s trending in utilities"
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
                title="Utilities​ careers"
                description="Help utilities and power companies accelerate the sustainability journey of their customers, suppliers and industries across the value chain.​​"
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
