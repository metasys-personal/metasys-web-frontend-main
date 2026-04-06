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
    GlobalHoverShowcase,
    PartnersWithText,
    GlobalPartners,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function Retail() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Retail"
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
                title="Retail industry consulting"
                description="Reinventing the future of retail. We’re witnessing a transformational moment in retail history. Generative AI is transforming how people shop, how retailers operate and how employees work. There is a massive opportunity for retailers of all sizes to capitalize on this moment and prepare for the future of retail. The time to act is now."
                imageSrc="/images/retail.svg"
            />


            <GlobalStats
                title="Retail now"
                stats={[
                    {
                        value: "46%",
                        description:
                            "of tasks undertaken by retail workers could be automated or augmented by large language models",
                    },
                    {
                        value: "56%",
                        description:
                            "of global consumers worry about their country’s economy",
                    },
                    {
                        value: "41%",
                        description:
                            "of high-income consumers plan to increase spend on ‘health and fitness’",
                    },
                    {
                        value: "8/10",
                        description:
                            "consumers say that inflation and the rising cost of living are their top economic concerns",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent retail"
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
                title="What’s trending in retail"
                items={trendingCloudItems}
                className="mt-24"
            />

            <PartnersWithText
                title="Partners in change"
                partners={cloudPartners}
                sectionId="partners"
                showLearnMore={false}
            />

            <GlobalPartners partners={SecuritypartnersData} title="Our extended partner ecosystem"/>


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
                title="Retail careers"
                description="Innovate to shape a new retail culture—both physical and digital experiences—where companies can adapt as fast as consumer preferences change.​​"
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
