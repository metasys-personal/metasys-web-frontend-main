import { Project } from "@/app/types/project";

export const slug = "intel";
export const clientName = "Intel";


export const intelProjects: Project[] = [
  {
    title: "Intel Core Services Platform – Data-Driven Intelligence for Capital-Intensive Operations",
    executiveSummary:
      "This project modernized Intel’s core services platform to unify operational, financial, and schedule data for capital-intensive programs. By creating predictive, data-driven intelligence, Intel transformed reactive reporting into proactive decision-making, enabling more confident planning and execution of semiconductor fabrication, infrastructure, and supply chain operations.",
    objective:
      "Enable end-to-end visibility across commodities, construction programs, and financial data; replace manual, spreadsheet-driven processes with automated, predictive workflows; provide executive-ready dashboards and scenario analysis tools; establish reusable platform capabilities for global fabs and capital programs.",
    challenge: [
      "Fragmented data across systems, spreadsheets, and regional tools",
      "Limited visibility into commodity demand, supplier performance, and pricing trends",
      "Manual cost estimation, forecasting, and reporting processes",
      "Disconnected scheduling across engineering, procurement, and construction teams",
      "Inconsistent data definitions reducing confidence in operational and financial decisions"
    ],
    solution: [
      "Centralized Commodity & Cost Intelligence – Single source of truth for planning and analysis, integrating commodity pricing, supplier inputs, and cost drivers",
      "ML-Driven Reporting & Forecasting – Machine-learning-based cost projections, variance analysis, and demand forecasting replacing static models",
      "Integrated Scheduling & Program Visibility – Unified schedule data enabling dependency tracking, risk identification, and scenario planning at portfolio scale",
      "Executive BI & Decision Dashboards – Self-service BI tools providing real-time insights, reducing reporting cycles from weeks to hours",
      "Automation of Manual Processes – Standardized workflows and validation embedded into platform services, reducing spreadsheet reliance"
    ],
    impact: [
      "Faster generation of forecasts, reports, and executive updates",
      "Improved accuracy and confidence in cost estimates and schedules",
      "End-to-end visibility across commodities, construction programs, and financial outcomes",
      "Scalable platform supporting multiple fabs, regions, and capital programs"
    ],
    operationalIntegration: [
      "Unified operational, financial, and schedule data across teams and regions",
      "BI dashboards integrated with program management and finance workflows",
      "Knowledge transfer for global teams to ensure sustainable adoption"
    ],
    businessOutcomes: [
      "Proactive, data-driven decision-making for large-scale capital programs",
      "Reduced reliance on manual processes and spreadsheets",
      "Optimized spend and risk management",
      "Standardized, reusable platform capabilities across multiple projects"
    ],
    sustainability: [
      "Platform designed for continuous use across future fabs and programs",
      "ML-driven forecasting models updated automatically with new data",
      "Reusable architecture for ongoing capital program support",
      "Enhanced decision-making and operational efficiency across Intel’s global operations"
    ],
    images: [] // can add screenshots or diagrams if available
  }
];
