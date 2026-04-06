import {  LeaderProps } from "../types/leader.types";

export type Partner = {
  name: string;
  src: string;
  description: string;
  href?: string; // ✅ OPTIONAL
  titletwo?: string;
};

export type AccelerateProps = {
  src: string;
  description: string;
  href?: string; // ✅ OPTIONAL
  titletwo?: string;
  name?: string;
};


export const partners: Partner[] = [
    {
        name: "AWS",
        src: "/images/aws.webp",
        description:
            "Build solutions that transforms industries, communities and lives for the better using AWS world-leading cloud technologies. Together, we empower organizations to modernize, optimize and innovate at scale.",
            href: "/partners/aws"
            
    },
    {
        name: "Google",
        src: "/images/google.webp",
        description:
            "Achieve transformative results through scalable infrastructure, advanced data analytics, robust security, targeted advertising and cutting-edge generative AI. Foster a culture of continuous innovation across your organization.",
            href: "/partners/aws"
    },
    {
        name: "Microsoft",
        src: "/images/microsoft.webp",
        description:
            "Reinvent how you work with Microsoft’s secure, agile and AI-powered platforms and tools, designed to meet the evolving needs of your organization and unlock new levels of productivity and collaboration.",
            href: "/partners/aws"
    },

    {
        name: "Servicenow",
        src: "/images/service.webp",
        description:
            "Securely visualize enterprise-wide operations using an asset model to apply context to real-time processes, alarms, events and achieved historical data",
            href: "/partners/aws"
    },
];


export const accelerateDetails: AccelerateProps[] = [
    {
        src: "/images/comm1.svg",
        titletwo: "Entity Analytics",
        description:
            "Batch process billions of disparate data records to analyze, augment and entity resolve your data for the next stage of your data pipeline.",
    },
    {
        src: "/images/comm2.svg",
        titletwo: "CloudTracker",
        description:
            "Provide cloud resource management for oversight, tracking, compliance, and optimization for enterprise FinOps efficiency and accountability.",
    },
    {
        src: "/images/comm3.svg",
        titletwo: "Next-Gen Mission Analytics",
        description:
            "Deliver near real-time pattern and behavioral analysis of various data, by curating more than 100,000 global media sources through a common operating picture.",
    },
];

export const workingWithusDetails: AccelerateProps[] = [
    {
        src: "/images/comm1.svg",
        titletwo: "Advanced Technology Centers",
        description:
            "At our U.S.-based centers, we deliver highly scalable operations with mission-critical quality, security and performance for complex agency-specific solutions.",
    },
    {
        src: "/images/comm2.svg",
        titletwo: "Contract vehicles",
        description:
            "Find us on these Indefinite Delivery/Indefinite Quantity (IDIQ) contracts and other contract vehicles.",
    },
    {
        src: "/images/comm3.svg",
        titletwo: "Small Business Partners",
        description:
            "We work with a wide range of small business partners to bring the best to your mission, business and people.",
    },
];

export const cloudPartners: Partner[] = [
    {
        name: "AWS",
        src: "/images/aws.webp",
        description:
            "Build solutions that transforms industries, communities and lives for the better using AWS world-leading cloud technologies. Together, we empower organizations to modernize, optimize and innovate at scale.",
            href: "/partners/aws"
            
    },
    {
        name: "Google",
        src: "/images/google.webp",
        description:
            "Achieve transformative results through scalable infrastructure, advanced data analytics, robust security, targeted advertising and cutting-edge generative AI. Foster a culture of continuous innovation across your organization.",
            href: "/partners/aws"
    },
    {
        name: "Microsoft",
        src: "/images/microsoft.webp",
        description:
            "Reinvent how you work with Microsoft’s secure, agile and AI-powered platforms and tools, designed to meet the evolving needs of your organization and unlock new levels of productivity and collaboration.",
            href: "/partners/aws"
    },

    {
        name: "Servicenow",
        src: "/images/service.webp",
        description:
            "Securely visualize enterprise-wide operations using an asset model to apply context to real-time processes, alarms, events and achieved historical data",
            href: "/partners/aws"
    },
];

// export  const leaders = [
//         {
//             name: "Aisha Bello",
//             role: "Chief Executive Officer",
//             image: "/images/exec2.jpg",
//         },
//         {
//             name: "Daniel Okoye",
//             role: "Chief Technology Officer",
//             image: "/images/exec1.jpg",
//         },
//         {
//             name: "Sophia Mensah",
//             role: "Chief Operating Officer",
//             image: "/images/exec2.jpg",
//         },
//         {
//             name: "Michael Chen",
//             role: "Chief Product Officer",
//             image: "/images/exec1.jpg",
//         },
//         {
//             name: "Laura Schmidt",
//             role: "Chief Marketing Officer",
//             image: "/images/exec2.jpg",
//         },
//     ];

 export const leaders: LeaderProps[] = [
  {
    slug: "ashok-sharma",
    name: "Ashok Sharma",
    title: "Chief Executive Officer",
    location: "Lahore, India",
    image: "/images/exec2.jpg",
    bio: "Ashok sharma has over 15 years of leadership experience across finance and technology sectors...",
    socialLinks: {
      linkedin: "https://linkedin.com/in/aishabello",
      twitter: null,
    },
  },
  {
    slug: "rakim-nayyal",
    name: "Rakim Nayyal",
    title: "Chief Financial Officer",
    location: "Abuja, Nigeria",
    image: "/images/exec1.jpg",
    bio: "Rakim Nayyal the company’s technology strategy and engineering teams...",
    socialLinks: {
    linkedin: "https://linkedin.com/in/danielokoye",
      twitter: null,
    },
   },
    {
    slug: "daniela-mills",
    name: "Daniela Mills",
    title: "Chief Technology Officer",
    location: "London, Uk",
    image: "/images/exec1.jpg",
    bio: "Daniela leads the company’s technology strategy and engineering teams...",
    socialLinks: {
    linkedin: "https://linkedin.com/in/danielokoye",
      twitter: null,
    },
   },
    {
    slug: "rufus-giwa",
    name: "Rufus Giwa",
    title: "Chief Technology Officer",
    location: "Abuja, Nigeria",
    image: "/images/exec1.jpg",
    bio: "Daniel leads the company’s technology strategy and engineering teams...",
    socialLinks: {
    linkedin: "https://linkedin.com/in/danielokoye",
      twitter: null,
    },
   },
];





  export  const SecuritypartnersData = [
  { name: "AWS", src: "/images/aws.webp" },
  { name: "Cloudflare", src: "/images/cloudfare.webp" },
  { name: "CrowdStrike", src: "/images/crowdstrike.webp" },
  { name: "CyberArk", src: "/images/cyberak.webp" },
  { name: "Fortinet", src: "/images/fortinet.webp" },

  { name: "Google", src: "/images/google.webp" },
  { name: "OpenText", src: "/images/opentext.webp" },
  { name: "Microsoft", src: "/images/microsoft.webp" },
  { name: "Nozomi", src: "/images/nozomi.webp" },
  { name: "Okta", src: "/images/okta.webp" },

  { name: "Oracle", src: "/images/oracle.webp" },
  { name: "Palo Alto", src: "/images/polato.webp" },
  { name: "Ping Identity", src: "/images/ping.webp" },
  { name: "SailPoint", src: "/images/sail.webp" },
  { name: "Salesforce", src: "/images/salesforce.webp" },

  { name: "Saviynt", src: "/images/savyint.webp" },
  { name: "SAP", src: "/images/sap.webp" },
  { name: "ServiceNow", src: "/images/service.webp" },
  { name: "Splunk", src: "/images/splunk.webp" },
  { name: "Wiz", src: "/images/wiz.webp" },
];