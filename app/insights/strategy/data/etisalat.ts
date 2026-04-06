import { Project } from "@/app/types/project";

export const slug = "etisalat";
export const clientName = "Etisalat";

export const etisalatProjects: Project[] = [
  {
    title: "Etisalat 360° Customer-Lifecycle",
    executiveSummary:
      "This project reduced churn and protected revenue by shifting Etisalat from reactive to proactive lifecycle-based engagement across multiple regions.",
    objective:
      "Predict and prevent churn early across lifecycle stages using data-driven targeting and interventions, maximizing retention ROI.",
    challenge: [
      "Operates across UAE, Egypt, Pakistan, and Afghanistan, each with unique market dynamics",
      "Significant revenue risk from churn due to price sensitivity, competition, and varying service quality",
      "Existing churn management was reactive, focusing only on customers at the point of disconnection",
      "CVM and CRM teams lacked a data-driven framework to decide which customers to engage, when, and how aggressively"
    ],
    solution: [
      "Implemented soft-churn prediction models across early tenure, mature base, and pre-churn stages, combined with uplift modeling to identify persuadable customers",
      "Analyzed behavioral, usage, and engagement signals to detect early disengagement",
      "Integrated uplift modeling to quantify expected incremental impact of retention interventions",
      "Delivered outputs as actionable CVM/CRM workflows: prioritized target lists, tiered offers, channel strategies, and timing rules",
      "Location-specific adaptation for UAE, Egypt, Pakistan, and Afghanistan"
    ],
    impact: [
      "Shifted Etisalat from reactive to proactive, lifecycle-based churn management",
      "Increased campaign efficiency and conversion rates across multiple regions",
      "Reduced avoidable churn and enhanced customer lifetime value",
      "Provided a robust, repeatable framework for lifecycle-based retention programs",
      "Enabled data-driven decision-making for offer aggressiveness and campaign prioritization"
    ],
    operationalIntegration: [
      "Embedded models and workflows into CVM and CRM systems",
      "Supported automated prioritization, targeting, and scheduling of retention campaigns",
      "Provided actionable insights to business and operations teams"
    ],
    businessOutcomes: [
      "Lower churn rates across multiple markets",
      "Improved ROI on retention campaigns",
      "Strengthened alignment between analytics and commercial strategy"
    ],
    sustainability: [
      "Models designed for scalability across regions and customer segments",
      "Continuous retraining and adaptation as subscriber behavior evolves",
      "Reduced long-term retention costs through proactive engagement",
      "Framework supports future lifecycle programs and emerging products"
    ],
    images: [] // add URLs if available
  },
  {
    title: "Etisalat CVM Recommendation Engine",
    executiveSummary:
      "This project accelerated revenue growth by enabling personalized cross-sell and upsell campaigns across multiple geographies.",
    objective:
      "Generate next-best-offer recommendations at the individual customer level to increase ARPU, conversion rates, and customer lifetime value.",
    challenge: [
      "Telecom markets demanded accelerated revenue growth but faced systemic limitations: rule-based campaigns, low conversion rates, and customer fatigue",
      "CVM and CRM teams lacked systematic next-best-offer recommendations",
      "Each region presented unique challenges requiring location-specific solutions"
    ],
    solution: [
      "Implemented personalized recommendation engines using advanced AI/ML",
      "Collaborative filtering and propensity models combined with business-rule constraints",
      "Incorporated behavioral, transactional, and contextual features: usage intensity, recharge patterns, device type, tenure, price sensitivity",
      "Generated next-best-offer recommendations at the individual customer level",
      "Integrated with CVM/CRM workflows for real-time and batch execution",
      "Defined offer eligibility, prioritization logic, and contact policies aligned with commercial strategy",
      "Location-specific customization for UAE, Egypt, Pakistan, and Afghanistan"
    ],
    impact: [
      "Transitioned from mass marketing to personalized, data-driven campaigns",
      "Increased ARPU and customer lifetime value across geographies",
      "Improved conversion rates and reduced customer fatigue",
      "Recommendations became core input for CVM-led growth campaigns",
      "Delivered measurable uplift in incremental revenue and field effectiveness"
    ],
    operationalIntegration: [
      "Embedded into CVM/CRM workflows for real-time and batch campaign execution",
      "Supported campaign scheduling, prioritization, and monitoring",
      "Provided actionable insights for marketing and sales teams"
    ],
    businessOutcomes: [
      "Measurable uplift in cross-sell and upsell revenue",
      "More efficient allocation of marketing budgets",
      "Stronger alignment between commercial strategy and customer needs"
    ],
    sustainability: [
      "Scalable recommendation framework adaptable to new products and markets",
      "Continuous learning as customer behavior evolves",
      "Reduced long-term campaign costs through high-propensity targeting",
      "Extendable to future AI-driven CVM initiatives"
    ],
    images: [] // add URLs if available
  }
];
