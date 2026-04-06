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
    PartnersWithText,
    GlobalHoverShowcase,
    GlobalInsightBanner,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";



export default function Sustainability() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Sustainability"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Sustainability consulting"
                description="Sustainability spans environmental, social and governance issues. Today every organization must embrace sustainability for future competitiveness."
                imageSrc="/images/sustainability.svg"
            />

            <GlobalStats
                title="Sustainability now"
                stats={[
                    {
                        value: "88%",
                        description:
                            "of CEOs believe the business case for sustainability is stronger today than five years ago",
                    },
                    {
                        value: "89%",
                        description:
                            "of the world’s largest companies are connecting their decarbonization efforts to business value",
                    },
                    {
                        value: "41%",
                        description:
                            "have net zero targets covering Scopes 1, 2 and 3",
                    },
                    {
                        value: "16%",
                        description:
                            "of companies are on track for net zero in operations by 2050",
                    },
                ]}
            />


            <GlobalReinvent
                title="Reinvent with sustainability"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />

            <GlobalInsightBanner
                title="COP30 Conversations Series"
                description="Metasys hosted a series of conversations with business and NGO leaders on how we can drive net zero forward."
                buttonLabel="Watch now"
                buttonHref="/insights/agentic-ai-roi"
                align="center"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending with sustainability"
                items={trendingCloudItems}
                className="mt-24"
            />

            <GlobalInsightBanner
                title="360° VALUE"
                description="We believe every business must be a sustainable business."
                buttonLabel="See the report"
                buttonHref="/insights/agentic-ai-roi"
                align="center"
            />


            <PartnersWithText
                title="Partners in change"
                partners={cloudPartners}
                sectionId="partners"
                className="md:mt-20"
            />


            <GlobalHoverShowcase
                title="How to innovate"
                items={innovateItems}
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
                title="Sustainability careers"
                description="Sustainability spans environmental, social and governance issues. Help every organization must embrace sustainability for future competitiveness.​"
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