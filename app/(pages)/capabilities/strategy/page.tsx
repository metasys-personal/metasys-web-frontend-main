import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalCareer,
    GlobalInsightBanner,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function Strategy() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Strategy"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Partners", id: "partners" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Strategy consulting"
                description="Boldly commit to continuous reinvention and join the small but growing number of companies reaching new levels of profitable growth for their businesses, while also providing greater contributions to humanity."
                imageSrc="/images/strategy.svg"
            />

            <GlobalStats
                title="Strategy now"
                stats={[
                    {
                        value: "+200%",
                        description:
                            "increase in global disruption between 2017 and 2022",
                    },
                    {
                        value: "58%",
                        description:
                            "of CEOs are not confident in the current business strategy to strengthen future competitiveness",
                    },
                    {
                        value: "2.5x",
                        description:
                            "the increased likelihood of outperforming peers when emerging technology informs and shapes strategy",
                    },
                    {
                        value: "10%",
                        description:
                            "higher revenue growth realized by companies embracing reinvention",
                    },
                ]}
            />


            <GlobalReinvent
                title="Reinvent with strategy"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />

            <GlobalInsightBanner
                title="Maximizing the ROI of agentic AI"
                description="Six key insights to help C-suite leaders unlock value, accelerate growth, and build lasting competitive advantage in the agentic economy—responsibly."
                buttonLabel="Read the report"
                buttonHref="/insights/agentic-ai-roi"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending with strategy"
                items={trendingCloudItems}
                className="mt-24"
            />

            {/* <GlobalLeaders
                title="Our Leaders"
                leaders={leaders}
                sectionId="leaders"
                className="mt-16"
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
                title="Strategy careers"
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