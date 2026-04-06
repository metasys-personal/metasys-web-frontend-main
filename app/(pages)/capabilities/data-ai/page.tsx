
import { leaders, SecuritypartnersData } from '@/app/lib/partners.data'
import { reinventItems } from '@/app/lib/reinvent.data'
import { trendingItems } from '@/app/lib/trending.data'

import {
    GlobalCareer,
    GlobalHeader,
    GlobalHero,
    GlobalLeaders,
    GlobalPartners,
    GlobalReinvent,
    GlobalStats,
    GlobalTrendingRail,
} from "@/app/components/common";

export default function DataAI() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Data and AI"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Partners", id: "partners" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Data & AI"
                description="In the last 30 years, no technology has promised to change everything across a business—until generative AI. Today, AI is the number one driver of business reinvention. And data readiness is one of the most important factors for AI success."
                imageSrc="/images/ai-data.svg"
            />

            <GlobalStats
                title="AI & Data now"
                stats={[
                    {
                        value: "97%",
                        description:
                            "of executives said generative AI will transform their company and industry",
                    },
                    {
                        value: "67%",
                        description:
                            "of organizations plan to increase spending in technology and are prioritizing investments in data and AI",
                    },
                    {
                        value: "75%",
                        description:
                            "of executives said that “good quality data” is the most valuable ingredient to enhance their generative AI capabilities",
                    },
                    {
                        value: "10-15%",
                        description:
                            "more revenue growth is achieved by data-driven companies than by their peers",
                    },
                ]}
            />

            <GlobalReinvent
                title="Reinvent with AI and data"
                items={reinventItems}
                limit={10}
                className="lg:my-[120px]"
            />

            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending with AI and data"
                items={trendingItems}
                className="mt-24"
            />

            <GlobalPartners title="Partners in change" sectionId='partners' partners={SecuritypartnersData} limit={12} />
            <GlobalLeaders sectionId='leaders' leaders={leaders} limit={2} imageSize="w-72 h-72" />

            <GlobalCareer
                title="Data careers"
                description="Unlock the power of AI and data to reinvent all facets of business–responsibly."
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
