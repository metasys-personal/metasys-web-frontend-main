
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
    GlobalInsightBanner,
    GlobalGradientBanner,
    GlobalPartners,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function TalentOrg() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Talent & Organization"
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
                title="Talent consulting"
                description="Thriving organizations are driving change at the intersection of technology and talent. The powerful combination of data, AI and human experience unlocks new work structures, roles and environments which enable people and businesses to thrive."
                imageSrc="/images/sustainability.svg"
            />

            <GlobalGradientBanner
                title="Learning, Reinvented"
                description="Unlocking the human + AI learning advantage for your workforce"
                buttonLabel="Read more"
                buttonHref="/about/accenture-song"
                className="mt-20"
                align="left"
            />

            <GlobalStats
                title="Talent & organization now"
                stats={[
                    {
                        value: "#1",
                        description:
                            "Fortune 500 leaders ranked talent shortages as the #1 threat to their business",
                    },
                    {
                        value: "93%",
                        description:
                            "of executives say it is more important than ever for organizations to innovate with purpose",
                    },
                    {
                        value: "11%",
                        description:
                            "Top-line productivity premium when unlocking the growth combination of data, tech and people",
                    },
                    {
                        value: "94%",
                        description:
                            "of workers are ready to learn gen AI skills, but just 5% of organizations are providing training at scale",
                    },
                ]}
            />


            <GlobalReinvent
                title="Reinvent with talent & organization"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in talent & organization"
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

            <GlobalPartners partners={SecuritypartnersData} title="Partners in change"/>


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
                title="Talent careers"
                description="Thriving organizations are driving change at the intersection of technology and talent. Combine data and AI and human experience that enable people and businesses to thrive.​"
                mobileImage="/images/cloudbg.jpg"
                desktopImage="/images/cloudbg.jpg"
                sectionId="careers"
                className="mt-12"
                links={[
                    {
                        label: "Sarch open roles",
                        href: "/careers/search",
                    },
                ]}

            />

        </div>
    );
}