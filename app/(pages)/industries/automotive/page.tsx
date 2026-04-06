import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import { cloudPartners } from "@/app/lib/partners.data";
import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    PartnersWithText,
    GlobalCareer,
    GlobalHoverShowcase,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function Automotive() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Automotive"
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
                title="Automotive consulting"
                description="The traditional automotive industry has reached a crossroads. We are now operating in a mobility ecosystem, shifting into the next iteration of automotive. To move forward, it’s time to embrace the ecosystem, collaborate beyond industry lines, and find new ways of innovating and partnering for success."
                imageSrc="/images/automotive.svg"
            />

            <GlobalStats
                title="Automotive now"
                stats={[
                    {
                        value: "83%",
                        description:
                            "of automotive leaders believe digital services will be key differentiators by 2040",
                    },
                    {
                        value: "3.5T$",
                        description:
                            "in potential revenue from digitally-enabled services—comprising 40% of total auto industry revenue",
                    },
                    {
                        value: "58%",
                        description:
                            "of all new cars sold in Europe in 2030 will be electric vehicles",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent automotive"
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
                title="What’s trending in automotive"
                items={trendingCloudItems}
                className="mt-24"
            />

            <PartnersWithText
                title="Partners in change"
                partners={cloudPartners}
                sectionId="partners"
                showLearnMore={false}
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
                title="Automotive careers"
                description="Help companies that build aircraft, ships, spacecraft, weapon systems and defense equipment adopt a digital first, AI-powered, cloud-enabled mindset.​"
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
