import { Project } from "@/app/types/project";

export const slug = "macys";
export const clientName = "Macys";

export const macysProjects: Project[] = [
  {
    title: "Macy’s — Manhattan WMS Modernization & Fulfillment Transformation",
    executiveSummary:
      "Macy’s modernized its fulfillment operations through a Manhattan WMS transformation, improving warehouse execution, inventory accuracy, and omnichannel fulfillment. Standardized processes and automation-ready workflows increased throughput, reduced operational costs, and enhanced customer satisfaction.",
    objective:
      "Modernize warehouse management for scale and speed, improve inventory accuracy and fulfillment reliability, enable automation readiness and operational efficiency, and standardize governance across cross-functional teams.",
    challenge: [
      "Legacy warehouse processes limiting throughput and scalability",
      "Inventory visibility gaps across distribution centers, stores, and e-commerce",
      "Slow fulfillment cycles and high operational cost-to-serve",
      "Complex omnichannel fulfillment and returns orchestration"
    ],
    solution: [
      "Manhattan WMS Enablement – Standardized warehouse execution, real-time inventory visibility, and automation integration",
      "Fulfillment Optimization – Intelligent prioritization, orchestration, and exception handling across channels",
      "Automation Readiness – Enabled support for robotics, conveyors, and AS/RS integrations",
      "Product-Led Execution & Governance – Phased rollout with KPIs, milestones, and cross-functional governance"
    ],
    impact: [
      "Increased pick, pack, and ship throughput with reduced cycle times",
      "Improved inventory accuracy and fewer order cancellations",
      "Higher warehouse productivity and operational efficiency",
      "Lower overall fulfillment and operational costs"
    ],
    operationalIntegration: [
      "Standardized warehouse workflows across distribution centers and channels",
      "Integrated WMS execution with automation systems for consistent fulfillment",
      "Playbooks, training, and change management for long-term adoption"
    ],
    businessOutcomes: [
      "Faster fulfillment and improved customer delivery promises",
      "Reduced manual interventions and operational errors",
      "Scalable fulfillment foundation supporting growth and expansion",
      "Improved omnichannel execution and enterprise-wide inventory visibility"
    ],
    sustainability: [
      "Modular, extensible WMS processes supporting continuous improvement",
      "Automation-ready workflows enabling future technology upgrades",
      "Repeatable governance and monitoring ensuring long-term efficiency",
      "Scalable fulfillment model supporting seasonal peaks and business expansion"
    ],
    images: [] // warehouse layouts, WMS flow diagrams, automation visuals (optional)
  }
];
