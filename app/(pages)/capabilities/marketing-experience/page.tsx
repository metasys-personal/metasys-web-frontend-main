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
    GlobalGradientBanner,
    PartnersWithText,
} from "@/app/components/common";



export default function MarketingExp() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Marketing & Experience"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Partners", id: "partners" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Resonate to create relevance in today's world of marketing"
                description="Data overload, vague promises and uninspired content are drowning out meaningful customer experiences. To cut through the noise, relevance must take center stage—driven by a marketing function fueled by data, creativity and technology to create lasting interactions."
                imageSrc="/images/marketing-img.svg"
            />

            <GlobalStats
                title="Marketing now"
                stats={[
                    {
                        value: "90%",
                        description:
                            "of B2C and 84% of B2B executives agree they can’t react fast enough to their customer’s changing lives",
                    },
                    {
                        value: "77%",
                        description:
                            "of CEOs acknowledge the need to deeply reimagine how they engage with and treat customers given the new fabric of life",
                    },
                    {
                        value: "93%",
                        description:
                            "of CMOs expect generative AI to change their relationship with customers",
                    },
                    {
                        value: "44%",
                        description:
                            "of a company’s revenue today is the CMO’s responsibility vs. 10% in the mid-2000s",
                    },
                ]}
            />


            <GlobalReinvent
                title="Deliver relevant experiences that are powered by gen AI and creativity to help your brand thrive today and endure tomorrow."
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />

            <GlobalGradientBanner
                title="Your new kind of marketing and experience partner"
                description="The world’s largest tech-powered creative group."
                buttonLabel="Meet Metasys Song"
                buttonHref="/about/accenture-song"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in marketing"
                items={trendingCloudItems}
                className="mt-24"
            />


            <PartnersWithText
                title="Partners in change"
                partners={cloudPartners}
                sectionId="partners"
            />

            <GlobalCareer
                title="Marketing careers​"
                description="You’ll amplify messages and engage people—whether you’re building interactive experiences, measuring the impact of a social campaign or telling brand stories.​"
                mobileImage="/images/cloudbg.jpg"
                desktopImage="/images/cloudbg.jpg"
                sectionId="careers"
                className="mt-12"
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