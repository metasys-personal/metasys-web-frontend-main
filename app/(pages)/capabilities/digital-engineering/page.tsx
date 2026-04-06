import { innovateItems } from '@/app/lib/hovers.data'
import { leaders, partners } from '@/app/lib/partners.data'
import { reinventItems } from '@/app/lib/reinvent.data'
import { trendingItems } from '@/app/lib/trending.data'

import {
    GlobalCareer,
    GlobalHeader,
    GlobalHero,
    GlobalHoverShowcase,
    GlobalLeaders,
    GlobalReinvent,
    GlobalStats,
    GlobalTrendingRail,
    PartnersWithText,
} from "@/app/components/common";


export default function DataEngView() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Digital Engineering & Manufacturing"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Partners", id: "partners" },
                    { label: "Careers", id: "careers" },
                ]}
            />

            <GlobalHero
                id="what-we-do"
                title="Digital engineering and manufacturing"
                description="Digitize what you make, revolutionize how you make it. Use data and AI to reinvent your engineering, manufacturing, infrastructure and capital projects. Drive more efficient and sustainable operations, greater productivity, customer relevance and growth."
                imageSrc="/images/data-eng.svg"
            />

            <GlobalStats
                title="Digital engineering & manufacturing now"
                stats={[
                    {
                        value: "$1B",
                        description:
                            "Is the average investment companies will make in manufacturing and supply chain resiliency",
                    },
                    {
                        value: "68%",
                        description:
                            "of companies plan to boost investments in multi-skilled workforce over 3 years to enhance agility",
                    },
                    {
                        value: "78%",
                        description:
                            "of companies will use multiple manufacturing sites in 3 years’ time to boost flexibility, responsiveness and sustainability",
                    },
                    {
                        value: "$1.6T",
                        description:
                            "is the potential revenue growth left on the table annually by companies, as engineering, supply, and production vulnerabilities are exposed by disruptions",
                    },
                ]}
            />


            <GlobalReinvent
                title="Reinvent with digital engineering & manufacturing"
                items={reinventItems}
                limit={10}
                className="lg:my-[120px]"
            />

            <GlobalHoverShowcase
                title="How to innovate"
                items={innovateItems}
            />

            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending with digital engineering and manufacturing"
                items={trendingItems}
                className="mt-24"
            />

            <PartnersWithText
                title="Partners in change"
                partners={partners}
                sectionId="partners"
            />

            <GlobalLeaders sectionId='leaders' leaders={leaders} limit={4} imageSize="w-full lg:w-72 h-72" />

            <PartnersWithText
                title="We’re expanding our capabilities through strategic acquisitions"
                partners={partners}
                sectionId="partners"
                className='md:mt-16 mt-20'
            />

            <GlobalCareer
                title="Engineering careers​"
                description="Use data, AI and advanced technology to help clients digitize what they make and revolutionize how they make it."
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
    )
}
