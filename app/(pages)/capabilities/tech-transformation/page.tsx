import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import { SecuritypartnersData } from "@/app/lib/partners.data";
import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalPartners,
    GlobalCareer,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function TechTransformation() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Technology Transformation"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Technology consulting"
                description="Reinvent your business with technology at the core. Use everything technology offers to build a better business."
                imageSrc="/images/tech-transform.svg"
            />


            <GlobalStats
                title="Technology-led transformation now"
                className="mt-10"
                stats={[
                    {
                        value: "200%",
                        description:
                            "Increase in macroeconomic volatility since 2017, including unprecedented technology disruption.",
                    },
                    {
                        value: "97%",
                        description:
                            "of executives agree that technology plays a critical role in their reinvention strategy.",
                    },
                    {
                        value: "21%",
                        description:
                            "of companies have advanced their strategy development to integrate technology in a meaningful way.",
                    },
                    {
                        value: "38%",
                        description:
                            "of CXOs say that heading into 2025, the primary area of concern is adapting to advancements in tech and innovation such as AI and automation.",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent with technology"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in technology-led transformation"
                items={trendingCloudItems}
                className="mt-24"
            />


            <GlobalPartners title="Partners in change" limit={5} partners={SecuritypartnersData} />


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
                title="Strategy and consulting careers"
                description="Get hands-on with the technologies that our clients need to reinvent, work in new ways and change the world for the better..​"
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