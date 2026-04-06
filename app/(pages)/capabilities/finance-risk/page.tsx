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


export default function FinanceRiskView() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Finance & Risk Mgt"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Finance consulting"
                description="Create a resilient financial future through intensifying market disruptions and escalating business volatility. Chief Financial Officers (CFOs) and Chief Risk Officers (CROs) must manage complex transformations while sustaining performance, profitability and resilience. Integrating generative AI is crucial, enabling smarter, faster decision-making and enhancing risk management strategies to navigate a challenging landscape effectively."
                imageSrc="/images/finance-risk.svg"
            />

            <GlobalStats
                title="Finance & risk mgt now"
                stats={[
                    {
                        value: "93%",
                        description:
                            "of CFOs say the responsibility they’ve been entrusted with feels much greater than in the past",
                    },
                    {
                        value: "90%",
                        description:
                            "of CFOs call the shots on business-critical decisions that impact the entire organization, not just finance",
                    },
                    {
                        value: "83%",
                        description:
                            "of risk leaders believe that complex, interconnected new risks are emerging at a more rapid pace than ever before",
                    },
                    {
                        value: "72%",
                        description:
                            "of risk leaders say their risk management capabilities have not kept pace with the rapidly changing landscape",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent finance and risk mgt"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />

            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in finance and risk management"
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
                title="Finance and risk management careers"
                description="Success is rooted in smart strategy. Use your insights and strategic thinking to understand how our clients can reinvent to stay ahead of change."
                mobileImage="/images/cloudbg.jpg"
                desktopImage="/images/cloudbg.jpg"
                sectionId="careers"
                className="mt-12"
                links={[
                    {
                        label: "Finance consulting open roles",
                        href: "/careers/search",
                    },
                    {
                        label: "Risk mgt open roles",
                        href: "/careers/life-at-company",
                    },
                ]}

            />

        </div>
    );
}