import { Project } from "@/app/types/project";

export const slug = "safaricom";
export const clientName = "Safaricom";


export const safaricomProjects: Project[] = [
  {
    title: "Safaricom CVM Recommendation Engine",
    executiveSummary:
      "This project accelerated revenue growth by enabling personalized cross-sell and upsell campaigns, improving customer engagement while reducing offer fatigue.",
    objective:
      "Generate next-best-offer recommendations at the individual customer level to increase conversion rates, ARPU, and customer lifetime value.",
    challenge: [
      "Limited personalization in cross-sell and upsell campaigns",
      "Difficulty aligning offers with customer behavior, lifecycle stage, and evolving needs",
      "CVM and CRM teams lacked actionable decision support"
    ],
    solution: [
      "Hybrid AI approach combining collaborative filtering, propensity modeling, and business-rule constraints",
      "Behavioral, transactional, and contextual features included: recharge behavior, usage intensity, device type, tenure, plan type, and price sensitivity",
      "Full CVM/CRM workflow integration for real-time and batch campaign execution",
      "Logical rules for offer eligibility and prioritization to ensure commercial viability and customer-friendliness"
    ],
    impact: [
      "Shifted campaigns from mass marketing to personalized, data-driven engagement",
      "Significantly improved conversion rates and ARPU",
      "Increased customer lifetime value while reducing offer fatigue",
      "Became a core input for CVM-led growth campaigns, driving measurable incremental revenue"
    ],
    operationalIntegration: [
      "Recommendations embedded within existing CVM and CRM systems",
      "Supported both real-time and scheduled campaign execution",
      "Provided actionable insights for marketing and retention teams"
    ],
    businessOutcomes: [
      "Measurable uplift in cross-sell and upsell revenue",
      "More efficient allocation of marketing budgets",
      "Stronger alignment between commercial strategy and customer needs"
    ],
    sustainability: [
      "Scalable framework adaptable to new products and offers",
      "Continuous learning as customer behavior evolves",
      "Reduced long-term campaign costs through targeted engagement",
      "Extendable to future AI-driven CVM initiatives"
    ],
    images: [] // Add URLs here later if available
  }
];
