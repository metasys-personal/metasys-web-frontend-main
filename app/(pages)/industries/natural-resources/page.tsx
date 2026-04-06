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


export default function NaturalResources() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Natural resources"
                navItems={[
                    { label: "Opportunity", id: "what-we-do" },
                    { label: "Segments", id: "segment" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Mining and metals industry"
                description="Be a steward of the world’s natural resources. As the world looks towards decarbonization, mining, metals, forest products and building materials companies face increasing pressure to shift from being resource producers to resource stewards."
                imageSrc="/images/natural-res.svg"
            />


            <GlobalStats
                title="Natural resources now"
                stats={[
                    {
                        value: "83%",
                        description:
                            "of natural resources executives have adopted an enterprise-wide strategy to reinvent all functions and business units",
                    },
                    {
                        value: "95%",
                        description:
                            "of natural resources CxOs say technology is a key element of their competitiveness",
                    },
                    {
                        value: "83%",
                        description:
                            "of natural resources CxOs are interested in exploring the potential use of Gen AI for tasks like text generation and customer service automation",
                    },
                    {
                        value: "80%",
                        description:
                            "of surveyed consumers plan to buy more eco-friendly products over the next five years",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent natural resources"
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
                title="What’s trending in natural resources"
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
                title="Natural Resources careers​"
                description="Help mining, metals, forest products and building materials companies transform and become safer, smarter and sustainable.​​​"
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
