import { Project } from "@/app/types/project";

export const slug = "nike";
export const clientName = "Nike";

export const nikeProjects: Project[] = [
  {
    title: "Nike Korea — KoP (Korea on Platform) Modernization",
    executiveSummary:
      "This project focused on modernizing Nike Korea’s commerce platform to support localized experiences, region-specific operations, and reliable performance during demand spikes. The initiative balanced local agility with global consistency, enabling faster delivery independent of global constraints.",
    objective:
      "Modernize the platform to meet local customer and operational needs, improve performance reliability during high-demand periods, accelerate development velocity, and integrate local operations with Nike’s global commerce ecosystem.",
    challenge: [
      "Need for a localized platform experience while maintaining global consistency",
      "Region-specific operational requirements including payments, fulfillment, and returns",
      "High traffic peaks requiring reliable and resilient performance",
      "Faster feature delivery without disrupting global commerce operations"
    ],
    solution: [
      "Platform Capability Decomposition to define which components remain centralized versus localized, including checkout, order lifecycle, payments, fulfillment, and returns",
      "Operational readiness and reliability standards with service health metrics, alert tuning, SLO definitions, incident response playbooks, and clear ownership",
      "Release governance and execution with dependency management, structured rollout planning, risk gating, and quality gates tied to regression and customer impact"
    ],
    impact: [
      "Faster platform evolution tailored specifically to Nike Korea’s market needs",
      "Improved platform stability and incident response during traffic peaks",
      "Reduced release friction through clear governance and operational readiness criteria"
    ],
    operationalIntegration: [
      "Coordinated collaboration between global and regional platform teams",
      "Aligned localized operations with Nike’s broader global commerce ecosystem",
      "Implemented monitoring and operational playbooks to maintain reliability at scale"
    ],
    businessOutcomes: [
      "Accelerated delivery of localized features and customer experiences",
      "Improved platform stability and reliability during peak demand periods",
      "Reduced release risk and operational overhead"
    ],
    sustainability: [
      "Platform modernization supports continuous regional innovation",
      "Operational and release processes designed for long-term efficiency",
      "Monitoring and governance frameworks enable scalable and reliable growth"
    ],
    images: [] // add platform or architecture visuals later if needed
  }
];
