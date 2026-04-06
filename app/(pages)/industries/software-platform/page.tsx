
import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalCareer,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function SoftwarePlatform() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Software & platforms"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="A new dawn for the software & platforms industry"
                description="From how we live, work, shop and socialize, expanded tech and macro shifts have created new opportunities for software and platform companies to improve every aspect of our lives.

                What's hot and trending in Software and Platforms?"
                imageSrc="/images/software-platform.webp"
            />

            <GlobalStats
                title="Software & platforms now"
                stats={[
                    {
                        value: "80%",
                        description:
                            "of software and platform companies neglect substantial revenue streams by only transforming parts of their business rather than the whole",
                    },
                    {
                        value: "$3.5T",
                        description:
                            "revenue opportunity for platforms who can secure their slice of the everything economy",
                    },
                    {
                        value: "96%",
                        description:
                            "of tech executives are inspired by the new capabilities offered by generative AI",
                    },
                    {
                        value: "74%",
                        description:
                            "of c-suite execs feel they need to completely rethink their operating models to be more resilient",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent software & platforms"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />

            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in software & platforms"
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
                title="Software and platforms careers"
                description="Help software and platform companies re-strategize by helping them grow, build stand-out and personalized experiences, secure trust and reinvent for sustainable growth.​"
                mobileImage="/images/cloudbg.jpg"
                desktopImage="/images/cloudbg.jpg"
                sectionId="careers"
                className="mt-8"
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