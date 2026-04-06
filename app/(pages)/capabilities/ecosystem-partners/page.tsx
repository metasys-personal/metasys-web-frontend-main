
import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalPartners,
    GlobalCareer,
    UpcomingEventsSlider,
} from "@/app/components/common";
import { detailedPartners, events, networkPartners } from "@/app/lib/events.data";
import WhyWorkWithUsSection from "@/app/components/common/why-work-with-us-section";
import { ExploreNetwork } from "@/app/components/common/explore-network";


export default function EcosystemPartners() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Ecosystem Partners"
                navItems={[
                    { label: "Key partners", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Ecosystem partners"
                description="Reinvention doesn’t happen in a silo. Fast-track your journey with integrated applications and platforms that bring the latest industry- and function-specific capabilities, plus advanced data and AI offerings, to empower your people and business."
                imageSrc="/images/ecom-partners.svg"
            />

            <UpcomingEventsSlider events={events} className="mt-16" />


            <GlobalStats
                title="Why you need integrated partners"
                className="mt-10"
                stats={[
                    {
                        value: "2/3",
                        description:
                            "of companies are leaving a significant amount of money on the table in missed opportunities due to poor interoperability among their applications",
                    },
                    {
                        value: "6x",
                        description:
                            "companies with interconnected enterprise platforms and applications saw 6x more revenue growth vs. their peers with disconnected ecosystems",
                    },
                    {
                        value: "2x",
                        description:
                            "companies with industry-leading digital cores are twice as likely to choose vendor ecosystems over standalone solutions to avoid silos and ensure smooth connections",
                    },
                    {
                        value: "99%",
                        description:
                            "of Reinventors describe their technology ecosystem as strategic partners, with whom they seek ways to co-create solutions or share in risks and rewards",
                    },
                ]}
            />

            <WhyWorkWithUsSection
                title="Why work with us"
                description="Adopt innovative ways of working and accelerate transformation with some of the world’s most powerful platforms. We’ve developed deep partnerships with today’s most influential technology providers—as well as tomorrow’s emerging leaders—to bring you co-developed solutions, industry-specific offerings, and advanced expertise. Together, we deliver highly integrated, interoperable systems that push the boundaries of what tech can deliver for your business."
                image="/images/work-withus.jpg"
                className="mt-10"
            />


            <GlobalPartners title="Who we partner with" limit={5} partners={detailedPartners} />

            <ExploreNetwork
                title="Explore our network"
                description="Our ecosystem partners and suppliers bring deep expertise..."
                items={networkPartners.map((partner) => ({
                    label: partner.name,
                    href: partner.url,
                }))}
            />


            <GlobalCareer
                title="Careers"
                description="Join our team of over 10,000 platform engineers and experts and build a network of long term, meaningful relationships with our partners and suppliers.​"
                mobileImage="/images/cloudbg.jpg"
                desktopImage="/images/cloudbg.jpg"
                sectionId="careers"
                className="mt-12"
                links={[
                    {
                        label: "Sarch open roles",
                        href: "/careers/search",
                    },
                ]}

            />

        </div>
    );
}
