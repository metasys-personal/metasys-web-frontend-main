import { reinventCloudItems } from "@/app/lib/reinvent.data";
import { trendingCloudItems } from "@/app/lib/trending.data";

import { cloudPartners } from "@/app/lib/partners.data";
import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalCareer,
    GlobalHoverShowcase,
    PartnersWithText,
    GlobalMediaContent,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function Health() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Health"
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
                title=" Health"
                description="People expect intuitive access to their healthcare and personalized experiences. Leaders that reinvent to create easy access and engaging experiences will stay resilient while delivering better outcomes."
                imageSrc="/images/health.svg"
            />

            <GlobalMediaContent
                title="Gen AI amplified"
                description="83% of healthcare executives are piloting gen AI in pre-production environments, but fewer than 10% are investing in the infrastructure necessary for enterprise-wide deployment."
                image="/images/health-1.jpg"
                ctaLabel="Read more"
                ctaHref="/images/gen-ai-healthcare"
                className="mt-16"
            />



            <GlobalStats
                title="Healthcare now"
                stats={[
                    {
                        value: "85%",
                        description:
                            "of CEOs and 79% of health system leaders see substantial or transformative change ahead",
                    },
                    {
                        value: "1.82x",
                        description:
                            "increase in home and virtual care expected by health executives over the next decade",
                    },
                    {
                        value: "13M",
                        description:
                            "the projected shortage of nurses by 2030 according to the International Council of Nurses",
                    },
                    {
                        value: "70%",
                        description:
                            "of healthcare workers’ tasks in the US could be redesigned by technology augmentation or automation",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent health"
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
                title="What’s trending in health"
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
                title="Health careers"
                description="Humanize healthcare: harness the power of technology and human ingenuity to improve access, experience and outcomes.​​"
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
