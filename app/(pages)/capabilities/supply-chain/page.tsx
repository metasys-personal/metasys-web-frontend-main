import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import { cloudPartners, SecuritypartnersData } from "@/app/lib/partners.data";
import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalCareer,
    PartnersWithText,
    GlobalHoverShowcase,
    GlobalPartners,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";



export default function SupplyChain() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Supply chain networks"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Partners", id: "partners" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Supply chain consulting"
                description="Reimagine, build and operate your supply chain network to orchestrate change, simplify life and positively impact business, society and the planet."
                imageSrc="/images/supply-chain.svg"
            />

            <GlobalStats
                title="Supply chain networks now"
                stats={[
                    {
                        value: "$1.6T",
                        description:
                            "is the average revenue growth opportunity that businesses are missing each year due to vulnerability to disruption",
                    },
                    {
                        value: "64%",
                        description:
                            "of emissions come from Tier 2 suppliers and beyond",
                    },
                    {
                        value: "43%",
                        description:
                            "of total working hours in supply chain roles can be transformed by generative AI",
                    },
                    {
                        value: "31%",
                        description:
                            "of companies take over 120 days to recover from disruption",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent supply chain networks"
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
                title="What’s trending in supply chain networks"
                items={trendingCloudItems}
                className="mt-24"
            />


            <PartnersWithText
                title="Partners in change"
                partners={cloudPartners}
                sectionId="partners"
            />

            <GlobalPartners title="Extended partner ecosystem" limit={4} partners={SecuritypartnersData} />

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
                title="Supply chain careers"
                description="Success is rooted in smart strategy. Use your insights and strategic thinking to understand how our clients can reinvent to stay ahead of change.​"
                mobileImage="/images/cloudbg.jpg"
                desktopImage="/images/cloudbg.jpg"
                sectionId="careers"
                className="mt-12"
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