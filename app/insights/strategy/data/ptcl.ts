import { Project } from "@/app/types/project";

export const slug = "ptcl";
export const clientName = "PTCL";


export const ptclProjects: Project[] = [
  {
    title: "PTCL 360° Customer-Lifecycle Management",
    executiveSummary:
      "This project aimed at reducing customer churn and protecting revenue by shifting PTCL from reactive to proactive lifecycle-based engagement.",
    objective:
      "To predict and prevent churn early across customer lifecycle stages using data-driven targeting and interventions.",
    challenge: [
      "Limited early-warning signals for rising disengagement",
      "Inefficient retention spend due to blanket or late interventions",
      "CVM and CRM teams lacked decision support for lifecycle-specific actions"
    ],
    solution: [
      "Soft-churn prediction models across early tenure, mature base, and pre-churn stages",
      "Behavioral and usage signals to detect disengagement before explicit churn intent",
      "Uplift modeling to identify customers who are both at risk and persuadable",
      "CVM/CRM integration translating outputs into prioritized target lists, offer tiers and timing rules, and channel engagement strategies"
    ],
    impact: [
      "Shifted PTCL from reactive to proactive churn prevention",
      "Reduced avoidable churn and increased customer lifetime value",
      "Improved efficiency and effectiveness of retention campaigns",
      "Established a repeatable, lifecycle-driven decision framework"
    ],
    operationalIntegration: [
      "Embedded within CVM and CRM systems",
      "Enabled campaign execution aligned to lifecycle stage and churn risk",
      "Supported ongoing optimization through model feedback loops"
    ],
    businessOutcomes: [
      "Lower churn rates across key customer segments",
      "Higher return on retention spend",
      "Stronger alignment between analytics and commercial decision-making"
    ],
    sustainability: [
      "Scalable lifecycle models adaptable to new segments and products",
      "Continuous model retraining as customer behavior evolves",
      "Reduced long-term retention costs through early intervention",
      "Institutionalized data-driven churn management within CVM teams"
    ]
  },
  {
    title: "PTCL CVM Recommendation Engine",
    executiveSummary:
      "This project accelerated revenue growth by enabling personalized cross-sell and upsell campaigns.",
    objective:
      "To increase conversion rates, ARPU, and customer lifetime value through next-best-offer recommendations.",
    challenge: [
      "Limited personalization in cross-sell and upsell campaigns",
      "Customer fatigue from irrelevant offers",
      "CVM and CRM teams lacked predictive decision support"
    ],
    solution: [
      "Collaborative filtering and propensity modeling techniques",
      "Behavioral, transactional, and contextual features including usage intensity, recharge behavior, device type, tenure, and price sensitivity",
      "Business-rule constraints for commercial and customer suitability",
      "Integration into CVM and CRM systems for real-time and batch execution"
    ],
    impact: [
      "Shifted campaigns from mass marketing to personalized engagement",
      "Improved conversion rates and campaign effectiveness",
      "Increased ARPU and customer lifetime value",
      "Reduced customer fatigue through relevant offer delivery"
    ],
    operationalIntegration: [
      "Embedded into CVM and CRM workflows",
      "Supported real-time decisioning and scheduled campaigns",
      "Enabled scalable rollout across products and segments"
    ],
    businessOutcomes: [
      "Measurable incremental revenue uplift",
      "More efficient use of CVM and marketing budgets",
      "Stronger alignment between customer needs and commercial strategy"
    ],
    sustainability: [
      "Scalable recommendation framework for new products and markets",
      "Continuous learning as customer behavior changes",
      "Reduced promotional waste through high-propensity targeting",
      "Extendable to future services and converged offers"
    ]
  }
];
