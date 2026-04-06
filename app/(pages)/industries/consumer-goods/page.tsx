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
    GlobalHoverShowcase,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function ConsumerGoods() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Consumer & goods services"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "Segments", id: "segments" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="CPG consulting"
                description="Humans are reinventing the consumer goods and services industry. It is harder than ever, to predict what consumers will buy – and why, when and where they buy it. To stay ahead of uncertainty, think like a consumer and focus on building strong relationships."
                imageSrc="/images/consumer-goods.svg"
            />

            <GlobalStats
                title="Consumer goods and services now"
                stats={[
                    {
                        value: "47%",
                        description:
                            "of consumer goods executives aspire to set a new standard for the industry – or even outside of it",
                    },
                    {
                        value: "78%",
                        description:
                            "of consumer goods companies identify the omni-connected consumer as a top priority",
                    },
                    {
                        value: "56%",
                        description:
                            "of companies are prioritizing integrated business planning over demand-driven inventory supply",
                    },

                ]}
            />


            <GlobalReinvent
                title="How to reinvent consumer goods and services"
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
                title="What’s trending in consumer goods and services"
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
                title="Consumer goods careers"
                description="Find human-centric solutions to meet the ever-changing needs and demands of people—from product innovations to new ways of working that put people at the center.​"
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