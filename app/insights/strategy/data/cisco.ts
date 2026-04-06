import { Project } from "@/app/types/project";

export const slug = "cisco";
export const clientName = "Cisco";

export const ciscoProjects: Project[] = [
  {
    title: "Router Manufacturing Programs & Scalable Networking Infrastructure",
    executiveSummary:
      "This engagement strengthened Cisco’s router manufacturing and product governance capabilities, improving production scalability, firmware integration, and operational resilience for enterprise and carrier-grade networking hardware.",
    objective:
      "Improve scalability and efficiency of high-performance router manufacturing, ensure seamless firmware, feature, and hardware integration, and strengthen quality assurance and operational resilience across production programs.",
    challenge: [
      "Scaling production while reducing time-to-market",
      "Maintaining quality and resilience in high-volume manufacturing",
      "Managing firmware and feature compatibility across hardware variants",
      "Eliminating cross-functional silos",
      "Meeting strict enterprise reliability and security expectations"
    ],
    solution: [
      "Router Manufacturing Program Management – Standardized workflows, coordinated hardware, firmware, QA, and manufacturing teams, optimized planning and ramp-up",
      "Firmware & Feature Integration Management – Controlled versioning, automated/manual testing for routing, security, QoS features, reduced post-production defects",
      "Operational Resilience & Risk Mitigation – Root-cause analysis frameworks, supply-chain risk monitoring, pre-deployment validation to reduce customer-impacting failures",
      "Product Governance & Program Execution – Product-led governance with KPIs for quality, throughput, and release readiness, cross-functional sprints and executive dashboards"
    ],
    impact: [
      "Higher production throughput and predictable launch ramp-ups",
      "Reduced defect rates and field failures",
      "Faster firmware integration and feature delivery",
      "Improved program execution efficiency"
    ],
    operationalIntegration: [
      "Embedded governance and QA checkpoints into manufacturing workflows",
      "Integrated firmware validation into production cycles",
      "Aligned operations, support, and field teams"
    ],
    businessOutcomes: [
      "Improved product reliability and customer trust",
      "Reduced operational risk and variability",
      "Faster delivery of enterprise networking capabilities"
    ],
    sustainability: [
      "Scalable manufacturing and governance models for future router generations",
      "Continuous quality improvement through analytics and feedback loops",
      "Resilient operational frameworks supporting long-term growth"
    ],
    images: [] // Router diagrams, production workflow visuals, QA dashboards (optional)
  }
];
