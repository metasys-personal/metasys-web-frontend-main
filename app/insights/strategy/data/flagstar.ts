import { Project } from "@/app/types/project";

export const slug = "flagstar";
export const clientName = "Flagstar";

export const flagstarProjects: Project[] = [
  {
    title: "AI-Enabled Lending Modernization, Risk Intelligence & Digital Customer Support",
    executiveSummary:
      "Flagstar Bank modernized its digital lending and customer support platforms to improve decision speed, strengthen fraud controls, and reduce operational cost while maintaining regulatory compliance and customer trust.",
    objective:
      "Modernize loan origination and servicing workflows, improve credit and fraud decision intelligence using AI, strengthen authentication and account protection, and reduce cost-to-serve through digital self-service.",
    challenge: [
      "Slow, manual loan origination and underwriting processes",
      "Increasing credit and fraud risk from evolving attack patterns",
      "Inconsistent authentication creating security gaps or user friction",
      "High volume of repetitive customer service inquiries driving cost"
    ],
    solution: [
      "Loan Origination Modernization – Streamlined end-to-end workflows, improved digital application clarity, enabled automated decisioning with governed exception handling",
      "AI-Driven Risk Intelligence – Enhanced credit and fraud models with behavioural and real-time signals, introduced explainable AI decisioning aligned with compliance",
      "Authentication & Fraud Controls – Implemented risk-based step-up authentication, strengthened account access, recovery, and auditability",
      "Chatbot-Driven Customer Support – Automated high-volume servicing inquiries, intelligent escalation to live agents with context, integrated compliant knowledge bases and analytics feedback loops"
    ],
    impact: [
      "Faster loan processing and improved customer experience",
      "Reduced fraud exposure and improved risk accuracy",
      "Lower contact centre volume and higher agent productivity",
      "Stronger, more consistent security controls"
    ],
    operationalIntegration: [
      "Embedded AI decisioning and risk controls into core lending workflows",
      "Integrated authentication and chatbot services with servicing platforms",
      "Maintained governance, auditability, and regulatory alignment"
    ],
    businessOutcomes: [
      "Reduced time-to-decision and cost-to-serve",
      "Improved conversion, servicing efficiency, and customer satisfaction",
      "Scalable foundation for future digital lending growth"
    ],
    sustainability: [
      "Modular, compliant architecture supporting future enhancements",
      "Continuous model monitoring and risk governance",
      "Digital self-service capabilities that scale with demand"
    ],
    images: [] // Lending workflow visuals, AI-risk dashboards, chatbot interface mockups (optional)
  }
];
