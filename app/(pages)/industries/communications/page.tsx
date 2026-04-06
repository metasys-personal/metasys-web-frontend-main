import { trendingCloudItems } from "@/app/lib/trending.data";

import {
    GlobalHeader,
    GlobalHero,
    GlobalStats,
    GlobalTrendingRail,
    GlobalCareer,
    GlobalHoverShowcase,
} from "@/app/components/common";
import { innovateItems } from "@/app/lib/hovers.data";
import WhyWorkWithUsSection from "@/app/components/common/why-work-with-us-section";
import { GlobalFeatureSection } from "@/app/components/common/feature-section";
import OurTeamIntro from "@/app/components/common/our-team-intro";



export default function Communications() {
    return (
        <div className="lg:px-10 bg-black text-white min-h-screen lg:py-16">
            <GlobalHeader
                title="Communications & media"
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
                title="Communications & Media consulting"
                description="Unlock profitable growth in communications & media. People and businesses are always on, whether watching, working, or enabling innovative new growth. Keep them engaged and successful by delivering the continuous experiences and capabilities they expect and need."
                imageSrc="/images/communications.svg"

            />


            <GlobalStats
                title="Communications & media now"
                stats={[
                    {
                        value: "$45B",
                        description:
                            "estimated enterprise network spend in the next four years",
                    },
                    {
                        value: "35%",
                        description:
                            "of consumers have unsubscribed from at least one of the Big 5 streaming services in the past 12 months",
                    },
                    {
                        value: "86%",
                        description:
                            "of consumers would be interested in a single service that captured and shared all of their basic information and content preference",
                    },
                    {
                        value: "$1.7T",
                        description:
                            "the outlay the SMB segment will put in IT and digital services between now and 2026",
                    },
                ]}
            />

            <GlobalHoverShowcase
                title="How to innovate"
                items={innovateItems}
                className="mt-10"
            />

            <WhyWorkWithUsSection
                title="Communications"
                description="We help telecoms operators use data, AI and automation to manage costs, optimize operating models, build modern networks, and put customer experience at the heart of growth. We work with ecosystem partners to help industry leaders offer new services beyond connectivity and accelerate their reinvention. "
                image="/images/work-withus.jpg"
                className="mt-10"
            />

            <GlobalFeatureSection
                features={[
                    {
                        icon: "/images/comm1.svg",
                        title: "Deliver new services to enterprises and SMBs",
                        description:
                            "Build on your connectivity offerings to deliver new technology services through platforms. Leverage 5G, edge computing, and security to innovate tailored, industry-specific solutions that complement and enhance your core services.",
                        href: "/services",
                    },
                    {
                        icon: "/images/comm2.svg",
                        title: "Engage customers with service and experience",
                        description:
                            "Empower customers with self-service options and personalize experiences using data and new AI applications. Make customer experience your competitive edge and growth driver.",
                        href: "/experience",
                    },
                    {
                        icon: "/images/comm3.svg",
                        title: "Apply data and AI to everything you do",
                        description:
                            "Unlock new revenue with future-ready data and AI foundations. Modernize your architecture to automate operations and transform front and back offices.",
                        href: "/ai",
                    },
                     {
                        icon: "/images/comm4.svg",
                        title: "Drive growth with your network transformation",
                        description:
                            "Unlock growth by transforming networks into open platforms. Re-engineer networks in the cloud, leveraging autonomy, AI and APIs to boost performance, attract ecosystem partners and create new services.",
                        href: "/ai",
                    },
                     {
                        icon: "/images/comm5.svg",
                        title: "Build a future-ready tech foundation",
                        description:
                            "To be ready for whatever comes next, build a digital core: a truly integrated foundation of cloud, open digital platforms, data and AI. Use it to scale AI and new technologies across the enterprise, creating a platform for agility and growth.",
                        href: "/ai",
                    },
                ]}
            />



            <GlobalTrendingRail
                sectionId="whats-trending"
                title="What’s trending in communications & media"
                items={trendingCloudItems}
                className="mt-24"
            />

{/* 
            <GlobalLeaders
                title="Our Leaders"
                leaders={leaders}
                sectionId="leaders"
                className="my-16"
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
                title="Comms and media careers"
                description="Deliver innovative solutions and strategies to help clients navigate the rapidly evolving landscape of telecommunications and media to drive growth and competitiveness​"
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
