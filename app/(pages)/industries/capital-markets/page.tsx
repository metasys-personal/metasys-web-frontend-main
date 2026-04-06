import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import { SecuritypartnersData } from "@/app/lib/partners.data";
import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalCareer,
    GlobalHoverShowcase,
    GlobalPartners,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function CapitalMarkets() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Capital market"
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
                title="Financial markets consulting"
                description="Capital markets: See opportunity everywhere. More retail investors. The transition to low-carbon economies. Infrastructure investments in growing markets. For those who reinvent, constant change is constant opportunity."
                imageSrc="/images/capital-mkt.svg"
            />


            <GlobalStats
                title="Capital markets now"
                stats={[
                    {
                        value: "9%",
                        description:
                            "of capital markets firms are embracing Total Enterprise Reinvention according to Metasys research—leaving room for more leaders to emerge",
                    },
                    {
                        value: "32%",
                        description:
                            "of an investors’ wealth in Europe and Asia, on average, is currently “leaving the firm” at the point of succession",
                    },
                    {
                        value: "$322B",
                        description:
                            "total revenues of the top 40 investment banks worldwide in 2022",
                    },
                    {
                        value: "45%",
                        description:
                            "of UK asset managers believe digital assets will have the biggest impact on their operating model in the next 3-5 years",
                    },
                ]}
            />

            <GlobalHoverShowcase
                title="How to innovate"
                items={innovateItems}
            />

            <GlobalReinvent
                title="How to reinvent capital markets"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in capital markets"
                items={trendingCloudItems}
                className="mt-24"
            />



            <GlobalPartners title="Partners in change" partners={SecuritypartnersData} />

{/* 
            <GlobalLeaders
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
                title="Capital Markets careers"
                description="Uncover solutions for the capital markets industry to meet changing client, market and regulatory needs.​"
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
