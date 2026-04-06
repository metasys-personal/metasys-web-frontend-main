import { Project } from "@/app/types/project";

export const slug = "optimum";
export const clientName = "Optimum";

export const optimumProjects: Project[] = [
  {
    title: "Optimum Broadband – Large-Scale Broadband Platform Modernization & Revenue Assurance",
    executiveSummary:
      "This project modernized Optimum Broadband’s infrastructure, identity, and device management platforms to support millions of customers with secure, scalable, and future-ready broadband services. By unifying operations, automating workflows, and improving revenue assurance, Optimum enhanced customer experience while reducing operational risk.",
    objective:
      "Modernize broadband infrastructure for reliability, scalability, and automation; strengthen customer identity verification and security; enable large-scale device migration with minimal disruption; prevent revenue leakage and rationalize product offerings; and establish a product-driven execution model for operational efficiency.",
    challenge: [
      "Legacy infrastructure limiting scalability and slowing feature delivery",
      "Fragmented customer identity and authentication across channels",
      "Complex device migration requiring coordination across inventory, provisioning, and support",
      "Revenue leakage due to underperforming or obsolete products",
      "High operational cost and manual workflows impeding speed and efficiency"
    ],
    solution: [
      "Broadband Infrastructure Modernization – Migrated provisioning workflows to API-driven orchestration, introduced event-driven architecture, and improved OSS/BSS, CRM, inventory, and billing interoperability",
      "Customer Identity Verification & Security – Centralized identity validation, integrated KYC services, applied role-based access controls, and strengthened auditability",
      "Large-Scale Device Migration & CPE Modernization – Managed end-to-end lifecycle of modems, gateways, and routers with automated compatibility checks and phased migration strategies",
      "Revenue Assurance & Product Sunset Programs – Identified inactive or legacy products, reconciled billing discrepancies, and implemented controls to prevent leakage",
      "Product-Led Governance & Execution Model – Agile, product-driven execution with standardized intake, clear roadmaps, KPIs, and stakeholder communication"
    ],
    impact: [
      "Reduced service disruptions and enabled faster adoption of next-generation broadband",
      "Centralized identity verification reduced account takeover risk and strengthened compliance",
      "Completed large-scale CPE migrations with minimal customer disruption",
      "Improved billing accuracy through revenue assurance and product rationalization",
      "Accelerated time to market via API-driven workflows",
      "Reduced manual effort and long-term operational costs through standardization"
    ],
    operationalIntegration: [
      "Coordinated modernization across engineering, operations, security, finance, and CX teams",
      "Embedded automated workflows into core broadband systems for provisioning and monitoring",
      "Delivered operational playbooks and knowledge transfer for sustainable execution"
    ],
    businessOutcomes: [
      "Enhanced customer experience with reliable, high-speed broadband services",
      "Stronger security, fraud prevention, and compliance posture",
      "Improved operational efficiency and reduced cost at scale",
      "Secured revenue streams and rationalized the product portfolio",
      "Accelerated deployment of next-generation broadband features"
    ],
    sustainability: [
      "Product-driven platform enabling continuous improvement and scalability",
      "Governance, automation, and identity frameworks designed for long-term resilience",
      "Future-ready architecture supporting advanced connectivity, AI-driven insights, and digital-first experiences"
    ],
    images: [] // add platform diagrams, device lifecycle visuals, etc. when available
  }
];
