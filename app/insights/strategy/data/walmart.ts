import { Project } from "@/app/types/project";

export const slug = "walmart";
export const clientName = "Walmart";


export const walmartProjects: Project[] = [
  {
    title: "Walmart Core Services (POS) – AI-Powered Modernization for Global Retail at Scale",
    executiveSummary:
      "This project modernized Walmart’s Point-of-Sale (POS) platform, making it extensible, AI-enabled, and globally scalable. By unifying core services, introducing intelligence, and enabling automation, Walmart improved operational efficiency, store workflows, and checkout reliability across millions of daily transactions.",
    objective:
      "Modernize the POS platform for global reliability and extensibility, introduce AI and GenAI capabilities for store operations and support, reduce operational overhead and manual interventions, and enable consistent yet localized POS experiences across regions.",
    challenge: [
      "Legacy POS architecture limited extensibility and slowed feature delivery",
      "Fragmented store workflows across regions and formats",
      "High operational overhead for issue resolution, training, and support",
      "Limited real-time intelligence for associates and checkout operations",
      "Pressure to apply GenAI and LLMs without risking core operations"
    ],
    solution: [
      "Modern POS Core Services Architecture – Decoupled transaction processing, pricing, promotions, and store workflows to enable faster innovation without destabilizing core checkout",
      "GenAI & LLM-Enabled Store Intelligence – AI-powered issue triage, associate assistance, operational insights, and contextual guidance",
      "AI-Assisted Associate & Support Workflows – Diagnostic tools and guided resolutions reducing downtime and manual escalation",
      "Global Strategy & Localization at Scale – Platform patterns supporting regional compliance, language, and tax requirements while preserving a consistent core POS experience"
    ],
    impact: [
      "Accelerated feature delivery and platform evolution without disrupting checkout",
      "Improved store support efficiency and reduced operational downtime",
      "Enhanced real-time intelligence for store associates and operations teams",
      "Delivered consistent yet localized POS experiences across global markets"
    ],
    operationalIntegration: [
      "Unified core POS services and workflows across regions and store formats",
      "Integrated AI capabilities with store operations and support teams",
      "Delivered knowledge transfer and operational playbooks for sustainable adoption"
    ],
    businessOutcomes: [
      "Improved operational efficiency and store performance at scale",
      "Reduced reliance on manual support and intervention processes",
      "Faster rollout of promotions, pricing changes, and operational enhancements",
      "Enabled AI-driven insights and intelligent workflows across stores"
    ],
    sustainability: [
      "Modular, extensible architecture supporting continuous innovation",
      "GenAI and LLM capabilities designed for safe, governed expansion",
      "Global platform patterns ensuring long-term scalability and compliance",
      "AI-driven operational intelligence continuously maintained and improved"
    ],
    images: [] // POS diagrams, store workflow visuals, AI-assist mockups (optional)
  }
];
