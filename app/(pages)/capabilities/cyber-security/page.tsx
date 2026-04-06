
import { reinventItems } from "@/app/lib/reinvent.data";
import { trendingItems } from "@/app/lib/trending.data";

import { SecuritypartnersData } from "@/app/lib/partners.data";


import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalReinvent,
    GlobalTrendingRail,
    GlobalPartners,
    GlobalCareer,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function CyberSecurityView() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Cyber Security"
                navItems={[
                    { label: "What we do", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Cybersecurity consulting"
                description="De-risk tomorrow by boosting cybersecurity today. Infuse cybersecurity into your strategy and ecosystem to protect value, help prevent threats and build trust as you grow."
                imageSrc="/images/cyber-sec.svg"
            />

            <GlobalStats
                title="Cyber security now"
                stats={[
                    {
                        value: "$10.5T",
                        description:
                            "estimated yearly cost of cybercrime in 2025",
                    },
                    {
                        value: "86%",
                        description:
                            "of business leaders believe global geopolitical instability is likely to lead to a catastrophic cyber event in the next two years",
                    },
                    {
                        value: "200%",
                        description:
                            "levels of disruption increased from 2017 to 2022",
                    },
                ]}
            />


            <GlobalReinvent
                title="Reinvent with CyberSecurity"
                items={reinventItems}
                limit={8}
                className="lg:my-[120px]"
            />

            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in Cybersecurity"
                items={trendingItems}
                className="mt-24"
            />

            <GlobalPartners partners={SecuritypartnersData} title="Partners in change" />

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
                title="Cybersecurity careers"
                description="Use your expertise and start-up mentality to help clients build secure, resilient businesses in a complex and ever-changing threat landscape."
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
    );
}