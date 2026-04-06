import { Project } from "@/app/types/project";

export const slug = "cvs";
export const clientName = "CVS";


export const cvsProjects: Project[] = [
  {
    title: "CVS Core Services Platform – Modernizing Identity, Onboarding, and Intelligence at Enterprise Scale",
    executiveSummary:
      "This project modernized CVS Health’s core services platform to unify identity, onboarding, and intelligence across its complex healthcare ecosystem. By standardizing processes and enabling automation, CVS accelerated client onboarding, improved security, and created a future-ready foundation for AI-driven insights.",
    objective:
      "Standardize onboarding and identity across products, clients, and internal systems; enable faster delivery and reduce operational costs; support scalable, AI-ready workflows and insights; establish reusable platform services across CVS care management programs.",
    challenge: [
      "Fragmented onboarding and identity experiences across legacy and modern systems",
      "Manual, error-prone client and user setup slowing go-live timelines",
      "Inconsistent SSO and role-based access across products",
      "Limited reuse of core services for new digital initiatives",
      "Growing demand for AI-driven insights without a unified platform"
    ],
    solution: [
      "Unified User & Client Onboarding Platform – Centralized framework replacing bespoke, product-specific setups with reusable services",
      "Enterprise SSO & Access Standardization – Consistent identity, SSO, and role-based access across all CVS products",
      "Workflow Automation & Operational Scale – Embedded configuration, validation, and entitlement logic to reduce manual work and improve auditability",
      "GenAI-Ready Platform Foundations – Structured and governed onboarding and identity data for AI/LLM workflows, dashboards, anomaly detection, and assisted operations",
      "Cross-Product Reuse & Expansion – Platform designed for greenfield and legacy client migrations, enabling reuse across multiple programs"
    ],
    impact: [
      "Faster client onboarding and reduced go-live timelines",
      "Consistent identity and SSO experience across CVS products",
      "Lower operational burden and rework through automation",
      "Scalable foundation for future products, clients, and AI-driven capabilities"
    ],
    operationalIntegration: [
      "Integrated onboarding, identity, and entitlement workflows across CVS care management programs",
      "Platform services connected to internal teams and product operations",
      "Knowledge transfer to ensure sustainable adoption and governance"
    ],
    businessOutcomes: [
      "Accelerated delivery of digital healthcare solutions",
      "Improved efficiency and reduced operational costs",
      "Stronger security, compliance, and audit posture",
      "Enabled scalable, AI-ready workflows and insights",
      "Standardized processes across products and client types"
    ],
    sustainability: [
      "Platform designed for continuous reuse and expansion",
      "Governance and automation frameworks ensure long-term scalability",
      "Supports future AI/GenAI-driven capabilities across CVS enterprise"
    ],
    images: [] // can add diagrams/screenshots if available
  }
];
