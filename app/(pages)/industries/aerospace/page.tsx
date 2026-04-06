import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import { cloudPartners, SecuritypartnersData } from "@/app/lib/partners.data";
import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    PartnersWithText,
    GlobalCareer,
    GlobalHoverShowcase,
    GlobalPartners,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function Aerospace() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Aerospace & Defense"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Aerospace consulting"
                description="Navigate headwinds in Aerospace and Defense. From economic uncertainty, supply chain disruptions and skill gaps, the Aerospace and Defense Industry is being challenged. The key is to have a digital-first mindset."
                imageSrc="/images/aerospace.svg"
            />

            <GlobalStats
                title="Aerospace and defense now"
                stats={[
                    {
                        value: "84%",
                        description:
                            "of companies focus on transforming parts of their business rather than the whole and tend to treat transformation as a finite program rather than a continuous process",
                    },
                    {
                        value: "75%",
                        description:
                            "of executives expect up to a fifth of their workforce to reskill or work in new domains using new tech within the next five years",
                    },
                    {
                        value: "Only 14%",
                        description:
                            "expected YOY revenue increase of 2023 global commercial aerospace driven by air traffics’ strong recovery",
                    },
                    {
                        value: "67%",
                        description:
                            "of executives believe short-term supply chain disruption will be a challenge",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent aerospace and defense"
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
                title="What’s trending in aerospace and defense"
                items={trendingCloudItems}
                className="mt-24"
            />

            <PartnersWithText
                title="Partners in change"
                partners={cloudPartners}
                sectionId="partners"
                showLearnMore={false}
            />

            <GlobalPartners partners={SecuritypartnersData} title="Our extended partner ecosystem" />


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
                title="Aerospace careers"
                description="Help companies that build aircraft, ships, spacecraft, weapon systems and defense equipment adopt a digital first, AI-powered, cloud-enabled mindset.​"
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