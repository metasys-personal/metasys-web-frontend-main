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


export default function Travel() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Travel"
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
                title="Travel consulting"
                description="The travel industry is no stranger to disruption. And in the post-pandemic world, travel companies must continuously reinvent to outwit unforeseen circumstances, while providing cohesive, elevated experiences for customers."
                imageSrc="/images/travel.svg"
            />


            <GlobalStats
                title="Travel now"
                stats={[
                    {
                        value: "78%",
                        description:
                            "of consumers plan to travel for leisure in the next 12 months",
                    },
                    {
                        value: "45%",
                        description:
                            "of travelers find their travel experiences unauthentic",
                    },
                    {
                        value: "100%",
                        description:
                            "of travel executives interviewed agree that technology plays a critical role in all current and future reinvention strategies",
                    },
                    {
                        value: "35%",
                        description:
                            "of travel companies state that legacy technology is the main barrier in delivering their reinvention strategy",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent travel"
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
                title="What’s trending in travel"
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
                title="Travel careers​"
                description="Help companies across aviation, hospitality and travel services take bold action to outwit unforeseen circumstances.​​"
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
