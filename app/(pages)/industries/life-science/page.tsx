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
    PartnersWithText,
} from "@/app/components/common";
import OurTeamIntro from "@/app/components/common/our-team-intro";



export default function LifeScience() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Life sciences"
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
                title="Life science consulting"
                description="Redefine what’s possible in life sciences. In the era of intelligent technologies, organizations must reinvent to bring breakthrough treatments to patients, faster and at lower costs."
                imageSrc="/images/life-science.svg"
            />


            <GlobalStats
                title="Life sciences now"
                stats={[
                    {
                        value: "100%",
                        description:
                            "of biopharma executives agree AI foundation models will enable connections across data types, revolutionizing where and how AI is used",
                    },
                    {
                        value: "92%",
                        description:
                            "of biopharma executives agree that technology plays a critical role in all current and future reinvention strategy",
                    },
                    {
                        value: "90%",
                        description:
                            "of biopharma executives agree that data transparency is becoming a competitive differentiator",
                    },
                     {
                        value: "60%",
                        description:
                            "of life sciences supply chain executives want better real-time inventory and visibility from external manufacturing partners",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent life sciences"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in life sciences"
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
                title="Life Sciences careers"
                description="Empower life sciences companies to have a significant influence on the well-being of patients by utilizing cutting-edge scientific advancements, novel medical technologies, and improved collaborative efforts.​​"
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
