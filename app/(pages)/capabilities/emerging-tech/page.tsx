
import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingEmergingTech } from "@/app/lib/trending.data";

import { innovateItems } from "@/app/lib/hovers.data";

import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalHoverShowcase,
    GlobalTrendingRail,
    GlobalCareer,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";



export default function EmergingTechView() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Emerging Technology"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Emerging technology solutions"
                description="In a rapidly changing world, embrace emerging technology to transform and achieve greater efficiency, effectiveness, and breakthrough innovation."
                imageSrc="/images/emerging-tech.svg"
            />

            <GlobalStats
                title="Emerging technology now"
                stats={[
                    {
                        value: "96%",
                        description:
                            "of executives agree that the convergence of digital and physical worlds over the next decade will transform their industry",
                    },
                    {
                        value: "95%",
                        description:
                            "of executives believe next generation computing will be a major driver of breakthroughs in their industry over the next decade",
                    },
                    {
                        value: "93%",
                        description:
                            "of executives agree that with rapid technological advancements, it is more important than ever for organizations to innovate with purpose",
                    },
                    {
                        value: "83%",
                        description:
                            "of executives believe science tech capabilities could help address society’s greatest challenges in health-related issues and diseases",
                    },
                ]}
            />


            <GlobalReinvent
                title="Reinvent with emerging technology"
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
                title="What’s trending with emerging technology"
                items={trendingEmergingTech}
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
                title="Technology careers"
                description="Be part of shaping the future and making positive changes in every business across every industry."
                mobileImage="/images/cloudbg.jpg"
                desktopImage="/images/cloudbg.jpg"
                sectionId="careers"
                className="md:mt-20"
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