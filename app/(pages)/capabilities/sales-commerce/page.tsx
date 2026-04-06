
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



export default function SalesCommerce() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Sales & Commerce"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Partners", id: "partners" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Drive growth with smarter selling and buying experiences"
                description="In a market overflowing with choice, experience is the differentiator. To stay competitive, you must improve sales effectiveness and drive revenue efficiency—without compromising the customer journey. Winning means delivering an omnichannel experience that empowers sellers, builds buyer confidence and accelerates growth."
                imageSrc="/images/sales-comm.svg"
            />

            <GlobalStats
                title="Sales & commerce now"
                stats={[
                    {
                        value: "83%",
                        description:
                            "of leaders think that commerce is growing faster than they can change their businesses",
                    },
                    {
                        value: "20%",
                        description:
                            "Only a small group of companies are winning by managing commerce profitably",
                    },
                    {
                        value: "54%",
                        description:
                            "of sales leaders believe that increasing sales reps’ effectiveness should be a top priority ",
                    },
                    {
                        value: "70%",
                        description:
                            "of sales leaders are planning to invest in generative AI, driven by the technology's potential to revolutionize sales processes",
                    },
                ]}
            />


            <GlobalReinvent
                title="Every sales and commerce journey is unique. Deliver intelligent experiences that power confident decisions across the buying lifecycle."
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />

            <GlobalGradientBanner
                title="Your new kind of sales and commerce partner"
                description="The world’s largest tech-powered creative group."
                buttonLabel="Meet Metasys Song"
                buttonHref="/about/accenture-song"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending with sales & commerce"
                items={trendingCloudItems}
                className="mt-24"
            />


            <PartnersWithText
                title="Partners in change"
                partners={cloudPartners}
                sectionId="partners"
            />

            <GlobalCareer
                title="Sales careers"
                description="Build lasting relationships using your industry knowledge and technology insights to help clients reinvent and grow.​"
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