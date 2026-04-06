
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


export default function Banking() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Banking"
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
                title="Financial services consulting"
                description="Build the next generation of Banking. Technology has changed the way people and businesses bank, and traditional strategies no longer work. Now is the time for bold new approaches to intensifying disruption."
                imageSrc="/images/banking.svg"
            />


            <GlobalStats
                title="Banking now"
                stats={[
                    {
                        value: "59%",
                        description:
                            "of customers recently chose a financial product from a provider other than their main bank",
                    },
                    {
                        value: "$89B",
                        description:
                            "of revenues at risk between now and 2025 if card-issuing banks are slow to invest in next-gen payment options",
                    },
                    {
                        value: "73%",
                        description:
                            "the share of US banks’ working hours which could be impacted by technologies like generative AI",
                    },
                    {
                        value: "8.1%",
                        description:
                            "the average premium that commercial payments clients would be willing to pay their provider for value-added services",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent banking"
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
                title="What’s trending in banking"
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
                title="Banking careers"
                description="Help banks challenge traditional strategies so they can capitalize on the full potential of technology, talent and emerging opportunities.​"
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
