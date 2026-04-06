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
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";



export default function PrivateEquity() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Private equity"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Private equity consulting"
                description="Reinvent the ways you create value. The next generation of private equity leaders will use an expanded set of value levers to achieve better outcomes."
                imageSrc="/images/private-equity.svg"
            />


            <GlobalStats
                title="How private equity is changing"
                stats={[
                    {
                        value: "75%",
                        description:
                            "of private equity leaders surveyed say investing is more complex than five years ago, with more firms vying over a shrinking number of targets.",
                    },
                    {
                        value: "6.2",
                        description:
                            "year average hold time means firms must make more fundamental interventions to deliver the required returns.",
                    },
                    {
                        value: "79%",
                        description:
                            "of efforts will focus on operational value creation, including driving new revenue, cash management and cost optimization.",
                    },
                    {
                        value: ">3x",
                        description:
                            "multiple on invested capital requires firms to combine existing playbooks with new capabilities that provide speed, knowhow and operating muscle across a variety of disciplines.",
                    },
                ]}
            />


            <GlobalReinvent
                title="Embrace new approaches to creating value"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />



            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in private equity"
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
                title="Strategy careers"
                description="Success is rooted in smart strategy. Use your insights and strategic thinking to understand how our clients can reinvent to stay ahead of change.​​"
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
