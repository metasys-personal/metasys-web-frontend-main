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
    PartnersWithText,
    GlobalGradientBanner,
    GlobalPartners,
} from "@/app/components/common";
import NewsSection from "@/app/components/home-page/news-section";
import OurTeamIntro from "@/app/components/common/our-team-intro";


export default function Learning() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Learning Service"
                navItems={[
                    { label: "Our vision", id: "what-we-do" },
                    { label: "What's trending", id: "whats-trending" },
                    { label: "Partners", id: "partners" },
                    { label: "Leaders", id: "leaders" },
                    { label: "Careers", id: "careers" },
                ]}
            />


            <GlobalHero
                id="what-we-do"
                title="Digital learning solutions"
                description="Become a talent creator. While technology plays a key role in business reinvention, it’s your people who determine its success. Metasys LearnVantage helps you build the skills they need, and you want, to grow faster."
                imageSrc="/images/learning.svg"
            />

            <GlobalGradientBanner
                title="Enable people resilience"
                description="Build a resilient organization, cultivate a workforce that is energized, skilled and supported with a structure designed for speed, flexibility and accountability."
                buttonLabel="Read more"
                buttonHref="/about/accenture-song"
                className="mt-20"
                align="left"
            />

            <GlobalStats
                title="Why reinvent learning?"
                stats={[
                    {
                        value: "10.3T",
                        description:
                            "of economic value can be created if enterprises across the globe take a responsible, people-centric approach to adopt gen AI",
                    },
                    {
                        value: "61%",
                        description:
                            "of workers globally will need retraining by 2027",
                    },
                    {
                        value: "94%",
                        description:
                            "of people around the world saying they are ready to learn new skills to work with gen AI",
                    },
                    {
                        value: "5%",
                        description:
                            "of organizations only are actively reskilling their workforce at scale",
                    },
                ]}
            />


            <GlobalReinvent
                title="How to reinvent learning"
                items={reinventCloudItems}
                limit={8}
                className="lg:my-[120px]"
            />


            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in learning"
                items={trendingCloudItems}
                className="mt-24"
            />

            <GlobalPartners title="Partners in change" partners={SecuritypartnersData} />

            <PartnersWithText
                title="Partners in change"
                partners={cloudPartners}
                sectionId="partners"
                className="md:mt-20"
            />

            <NewsSection />


            {/* <GlobalLeaders
                title="Our Leaders"
                leaders={leaders}
                sectionId="leaders"
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
                title="Learning careers"
                description="TWhile technology plays a key role in business reinvention, it’s your people who determine its success. Help build the skills businesses need to grow faster.​"
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