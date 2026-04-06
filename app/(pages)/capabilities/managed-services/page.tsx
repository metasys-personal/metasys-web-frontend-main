import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalCareer,
    GlobalHoverShowcase,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function ManagedServices() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Managed Services"
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
                title="Managed Services"
                description="As organizations strive to optimize cost and accelerate growth, managed services, including business process services (BPS), can help to better prepare them to reinvent operations and drive holistic value at scale."
                imageSrc="/images/finance-risk.svg"
            />

            <GlobalStats
                title="Why managed services?"
                stats={[
                    {
                        value: "1.4X",
                        description:
                            "higher operating margins",
                    },
                    {
                        value: "2.2X",
                        description:
                            "greater total shareholder returns (three-year)",
                    },
                    {
                        value: "42%",
                        description:
                            "improvement in agile product and process innovation",
                    },
                    {
                        value: "34%",
                        description:
                            "better at reducing energy consumption and greenhouse gas emissions",
                    },
                ]}
            />


            <GlobalReinvent
                title="Reinvent with managed services"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />

            <GlobalHoverShowcase
                title="How to innovate"
                items={innovateItems}
                sectionId="segments"
            />

            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in managed services"
                items={trendingCloudItems}
                className="mt-24"
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
                title="Operations careers​"
                description="Use data, insights and tech to reimagine how people work, moving operations from transactional to transformational.​"
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