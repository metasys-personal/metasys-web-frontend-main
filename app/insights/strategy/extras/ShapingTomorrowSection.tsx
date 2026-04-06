"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const tabs = [
    "Adobe",
    "Amazon",
    "Cisco",
    "CVS",
    "Etisalat",
    "Flagstar",
    "Intel",
    "MACY’S",
    "Microsoft",
    "Nike",
    "Optimum",
    "PepsiCo",
    "Pinecrow",
    "PTCL",
    'SAFARICOM',
    "Samsung",
    "Vodafone",
    "Walmart",
    "Workday"
];

const tabContent: Record<
    string,
    { description: string; image: string }
> = {
    Nike: {
        description: `
        Nike Korea modernized its commerce platform to support localized experiences,
        region-specific operations, and reliable performance during traffic spikes.
        Centralized and regional components for checkout, payments, fulfillment, and returns were defined.
        Operational readiness standards, service-level objectives, and structured release governance
        improved stability, accelerated feature delivery, and reduced rollout friction.
        `.trim(),
        image: "/images/case1.jpg",
    },
    Workday: {
        description: `
         Workday scaled identity-first extensibility with automated provisioning, role-based access,
         and secure APIs. Custom applications could now be deployed rapidly while staying aligned
         with core systems.
         
         GenAI-ready guardrails and platform services enabled AI workflows safely, allowing faster
         innovation without compromising enterprise security or compliance.
         `.trim(),

        image: "/images/case2.jpg",
    },
    CVS: {
        description: `
         CVS unified onboarding, identity, and access across its healthcare ecosystem. Standardized
         platform workflows replaced manual, fragmented processes, accelerating client and user
         onboarding.
         
         Enterprise SSO, automation, and reusable services reduced operational burden and
         improved consistency, laying a foundation for digital health and AI initiatives.
         `.trim(),

        image: "/images/case3.jpg",
    },
    Intel: {
        description: `
          Intel centralized commodity, cost, and scheduling data across global operations. Shared
          data models and machine-learning forecasts improved predictive planning and operational
          visibility.
          
          Integrated dashboards and automated workflows reduced reporting cycles and enabled
          confident, data-driven decision-making at scale.
          `.trim(),

        image: "/images/case1.jpg",
    },
    Amazon: {
        description: `
        AWS modernized its learning platform with AI-driven personalization and unified identity.
        Metasys implemented SSO integration, secure access, and extensible APIs for millions of
        learners.
        
        Machine-learning insights and GenAI-ready features enabled personalized learning
        journeys, improved engagement, and accelerated enterprise onboarding globally.
        `.trim(),

        image: "/images/case2.jpg",
    },
    Optimum: {
        description: `
         Optimum modernized broadband infrastructure, device migrations, and identity verification.
         Automated, API-driven workflows improved operational efficiency and reduced revenue
         leakage.
         
         Coordinated device lifecycle management and network updates ensured seamless customer
         experiences while establishing a scalable, reliable broadband foundation.
         `.trim(),

        image: "/images/case2.jpg",
    },
    Walmart: {
        description: `
          Walmart modernized its POS ecosystem with AI-assisted workflows, GenAI insights, and
          extensible core services. Transaction processing, promotions, and store operations were
          decoupled for agility.
          
          Enhanced diagnostics and guided resolution reduced downtime, improved associate
          workflows, and enabled faster innovation while maintaining consistent, reliable customer
          experiences.
          `.trim(),

        image: "/images/case2.jpg",
    },
    Pinecrow: {
        description:
            "Pinecrow partnered with Metasys to transform its supply chain operations through advanced analytics and AI-driven insights. By implementing predictive analytics and real-time tracking, Pinecrow enhanced inventory management, reduced lead times, and improved supplier collaboration, resulting in significant cost savings and operational efficiency.",
        image: "/images/case2.jpg",
    },
    Samsung: {
        description:
            "Samsung enhanced its customer support platform with AI-powered chatbots and unified service management. Metasys integrated GenAI capabilities to provide instant, personalized assistance, reducing response times and improving customer satisfaction. The new platform streamlined support workflows and enabled proactive issue resolution, driving higher engagement and loyalty.",
        image: "/images/case2.jpg",
    },
    Vodafone: {
        description:
            "Vodafone revamped its network management system with AI-driven monitoring and automated incident response. Metasys implemented predictive maintenance and real-time analytics to optimize network performance and reduce downtime. The enhanced system enabled Vodafone to deliver reliable connectivity, improve customer experiences, and support future growth initiatives.",
        image: "/images/case2.jpg",
    },
    PepsiCo: {
        description:
            "Pepsico transformed its marketing analytics with AI-powered insights and personalized campaign strategies. Metasys integrated GenAI tools to analyze consumer behavior and optimize marketing efforts across channels. The new approach enabled Pepsico to deliver targeted messaging, improve ROI, and drive brand engagement in a competitive market.",
        image: "/images/case2.jpg",
    },
    Adobe: {
        description:
            "Adobe enhanced its creative cloud platform with AI-driven design tools and collaborative features. Metasys integrated GenAI capabilities to streamline content creation, automate repetitive tasks, and foster teamwork among creatives. The upgraded platform empowered users to produce high-quality work faster, driving innovation and customer satisfaction.",
        image: "/images/case2.jpg",
    },
    Cisco: {
        description:
            "Cisco modernized its cybersecurity infrastructure with AI-powered threat detection and response. Metasys implemented GenAI-driven analytics to identify vulnerabilities, automate incident response, and enhance overall security posture. The new system enabled Cisco to protect critical assets, ensure compliance, and maintain trust with customers in an evolving threat landscape.",
        image: "/images/case2.jpg",
    },
    Microsoft: {
        description:
            "Microsoft transformed its cloud services with AI-driven scalability and personalized user experiences. Metasys integrated GenAI tools to optimize resource allocation, enhance performance, and deliver tailored solutions for enterprise clients. The revamped platform enabled Microsoft to accelerate innovation, improve customer satisfaction, and maintain its leadership in the cloud computing market.",
        image: "/images/case2.jpg",
    },
    Etisalat: {
        description:
            "Etisalat upgraded its telecommunications network with AI-powered optimization and predictive analytics. Metasys implemented GenAI-driven solutions to enhance network performance, reduce latency, and improve customer experiences. The modernized infrastructure enabled Etisalat to support growing data demands, deliver reliable connectivity, and drive digital transformation across the region.",
        image: "/images/case2.jpg",
    },
    Flagstar: {
        description:
            "Flagstar Bank enhanced its digital banking platform with AI-driven personalization and secure transaction processing. Metasys integrated GenAI capabilities to provide tailored financial solutions, automate fraud detection, and streamline customer interactions. The upgraded platform empowered Flagstar Bank to deliver exceptional banking experiences, improve operational efficiency, and foster long-term customer loyalty.",
        image: "/images/case2.jpg",
    },
    PTCL: {
        description:
            "PTCL modernized its broadband services with AI-powered network management and customer support. Metasys implemented GenAI-driven analytics to optimize bandwidth allocation, enhance service reliability, and provide personalized assistance. The revamped platform enabled PTCL to deliver superior connectivity, improve customer satisfaction, and support digital growth initiatives across Pakistan.",
        image: "/images/case2.jpg",
    },
    SAFARICOM: {
        description:
            "Safaricom transformed its mobile money platform with AI-driven fraud prevention and personalized financial services. Metasys integrated GenAI capabilities to enhance transaction security, analyze user behavior, and deliver tailored offerings. The upgraded platform empowered Safaricom to provide safe, convenient financial solutions, improve customer trust, and drive financial inclusion across Kenya.",
        image: "/images/case2.jpg",
    },
    "MACY’S": {
        description: "Macy’s modernized its fulfillment operations with Manhattan WMS, improving warehouse execution, inventory accuracy, and omnichannel fulfillment. Standardized processes and automation readiness increased throughput, reduced operational costs, and enhanced customer satisfaction.",
        image: "/images/case2.jpg"
    }

};

export default function ShapingTomorrowSection() {
    const [activeTab, setActiveTab] = useState(tabs[0]);
    const content = tabContent[activeTab];

    return (
        <section className="bg-black text-white py-8 md:py-16 lg:py-24">
            <div className="max-w-[1400px] mx-auto">
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Our Work In Action
                </h2>
                <p className="text-gray-300 max-w-3xl mb-12">
                    Across industries, organizations are embracing change, modernizing operations, and
                    finding new ways to drive growth. These examples highlight how innovative approaches are
                    turning challenges into measurable results.
                </p>

                {/* Tabs */}
                <div role="tablist" aria-label="Interview series tabs" className="flex flex-wrap max-w-6xl gap-6 mb-16">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            role="tab"
                            aria-selected={activeTab === tab}
                            aria-controls={`tabpanel-${tab}`}
                            id={`tab-${tab}`}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm md:text-xl lg:text-2xl font-medium transition-colors ${activeTab === tab
                                ? "text-white"
                                : "text-gray-400 hover:text-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div role="tabpanel"
                    id={`tabpanel-${activeTab}`}
                    aria-labelledby={`tab-${activeTab}`} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left text */}
                    <div className="flex flex-col justify-start">
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
                            {content.description}
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col md:flex-row gap-4 mt-6 w-full">  
                            <Link
                                href={`/insights/strategy/${activeTab.toLowerCase()}`}
                                className="text-white border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition mt-4"
                            >
                                Read More
                            </Link>

                        </div>

                    </div>

                    {/* Right video placeholder */}
                    <div className="flex justify-center lg:justify-end items-center">
                        <div className="relative w-full aspect-video overflow-hidden rounded-lg">
                            <Image
                                src={content.image}
                                alt={activeTab}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
