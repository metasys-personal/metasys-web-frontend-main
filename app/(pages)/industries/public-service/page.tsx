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
    GlobalMediaContent,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function PublicService() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Public service"
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
                title="Public sector consulting"
                description="Public Services today for stronger communities tomorrow. Facing limited resources, increasingly rapid technology advances and a state of permacrisis, public service organizations who embrace continuous change can have meaningful impact on outcomes for individuals and entire communities."
                imageSrc="/images/public-service.svg"
            />


            <GlobalStats
                title="Public service now"
                stats={[
                    {
                        value: "200%",
                        description:
                            "increase in global disruption since 2017",
                    },
                    {
                        value: "1 in 4",
                        description:
                            "central government workers across OECD countries were aged 55 or over in 2020",
                    },
                    {
                        value: "36%",
                        description:
                            "of people we surveyed in 10 countries say government agency processes and interactions are intuitive",
                    },
                ]}
            />

            <GlobalMediaContent
                title="Resiliency for better mission outcomes"
                description="Now is the perfect opportunity for leaders of government agencies to reimagine their operations to build resiliency and deliver better outcomes for all."
                image="/images/health-1.jpg"
                ctaLabel="Learn more"
                ctaHref="/images/gen-ai-healthcare"
                className="mt-16"
            />


            <GlobalReinvent
                title="How to reinvent public service"
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
                title="What’s trending in public service"
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
                title="Public Service careers​"
                description="Help public sector organizations ranging from federal to local governments, higher education institutions and non-profit organizations embrace a strategy of continuous reinvention.​​"
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
