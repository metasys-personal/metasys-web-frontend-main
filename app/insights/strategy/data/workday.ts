import { Project } from "@/app/types/project";

export const slug = "workday";
export const clientName = "Workday";


export const workdayProjects: Project[] = [
  {
    title: "Workday Cloud Platform (Extend) – Scaling Identity-First Extensibility",
    executiveSummary:
      "This project enabled secure, scalable identity-first extensibility for Workday Extend. Enterprises building custom apps, automations, and AI workflows faced identity bottlenecks. Our solution ensured Extend applications were secure, compliant, and enterprise-ready, accelerating adoption and innovation.",
    objective:
      "Enable rapid, secure development and deployment of Extend applications, ensure consistent identity and access across core Workday, Extend apps, and partner systems, simplify user provisioning and SSO, and support AI/GenAI workflows while preserving enterprise trust.",
    challenge: [
      "Fragmented identity across core Workday, Extend, and third-party systems",
      "Complex user provisioning and role management across tenants and environments",
      "Inconsistent SSO and limited federation flexibility",
      "High friction integrating AI/GenAI workflows securely",
      "Enterprise-grade security, compliance, and audit requirements"
    ],
    solution: [
      "Unified Identity & Access Model ensuring consistent roles, policies, and tenant isolation across core and Extend apps",
      "Automated User Provisioning & Onboarding reducing manual setup and administrative overhead",
      "Enterprise-Grade SSO & Federation enabling secure, low-friction authentication across core and extended apps",
      "GenAI-Ready Capabilities with guardrails enforcing identity, authorization, and data policies",
      "Developer & Partner Enablement with APIs, SDKs, and abstractions for secure-by-default development"
    ],
    impact: [
      "Faster build and deployment of Extend applications",
      "Stronger tenant isolation, access control, and auditability",
      "Scalable identity enforcement across regions and partner solutions",
      "Enabled secure AI/GenAI adoption without compromising compliance"
    ],
    operationalIntegration: [
      "Integrated with Workday core platform and partner workflows",
      "Knowledge transfer to enterprise IT, developers, and partners",
      "Reduced IAM overhead and strengthened compliance posture"
    ],
    businessOutcomes: [
      "Accelerated Extend application adoption",
      "Lower administrative burden for identity management",
      "Enhanced security and audit compliance",
      "Enabled secure, enterprise-grade AI and automation workflows",
      "Empowered developers and partners to innovate safely"
    ],
    sustainability: [
      "Designed for multi-tenant, global-scale deployment",
      "Continuous refinement of identity policies, automation, and governance",
      "Platform ready to support emerging technologies and AI/GenAI workflows"
    ],
    images: [] // add diagrams or screenshots later if available
  }
];
