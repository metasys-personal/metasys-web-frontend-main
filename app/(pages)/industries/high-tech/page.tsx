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
    GlobalMediaContent,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function HighTech() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="High Tech"
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
                title="High Tech consulting"
                description="Transform the industry that transforms the world. The pressure is on to build innovative tech products and services, reimagine supply chain and manufacturing networks, and identify new talent sources."
                imageSrc="/images/high-tech.svg"
            />

            <GlobalMediaContent
            headerTitle="Navigating the AI Revolution"
                description="Discover how high tech companies can turn accelerating AI adoption into measurable growth."
                image="/images/health-1.jpg"
                ctaLabel="Learn more"
                ctaHref="/images/gen-ai-healthcare"
                className="mt-16"
            />



            <GlobalStats
                title="High tech now"
                stats={[
                    {
                        value: "79%",
                        description:
                            "of high tech executives believe the level of change will increase more in 2025 compared to previous years",
                    },
                    {
                        value: "$1T",
                        description:
                            "is what the semiconductor market is expected to reach by 2030",
                    },
                    {
                        value: "90%",
                        description:
                            "of high tech executives say the pace of technology innovation accelerated their organization's reinvention strategy",
                    },
                    {
                        value: "80%",
                        description:
                            "of high tech companies say the emergence of gen AI is inspiring their vision or long-term strategy",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent high tech"
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
                title="What’s trending in  high tech"
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
                title="High Tech careers"
                description="The High Tech industry includes Enterprise Technology, Consumer Technology, Network Equipment, Semiconductors and Medical Equipment segments. Help them reinvent to create better customer experiences and create value.​​"
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
