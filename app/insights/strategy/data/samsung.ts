import { Project } from "@/app/types/project";

export const slug = "samsung";
export const clientName = "Samsung SDS";

export const samsungProjects: Project[] = [
  {
    title: "Samsung SDS — Enterprise Incident Recovery & Product Transformation",
    executiveSummary:
      "Samsung SDS stabilized critical production systems, reduced incident backlogs, and transitioned toward a product-centric operating model. Through standardized agile practices, governance improvements, and engineering efficiency initiatives, the organization improved delivery predictability, throughput, and alignment with enterprise objectives.",
    objective:
      "Reduce critical incident backlog (S1–S3), standardize intake and change request management, implement product-centric governance and agile practices, and increase engineering throughput and operational predictability.",
    challenge: [
      "High-volume unresolved incidents creating operational risk",
      "Fragmented intake and change management processes",
      "Lack of clear product ownership and roadmap alignment",
      "Inconsistent agile practices and low delivery predictability"
    ],
    solution: [
      "Incident Backlog Reduction – Triaged and resolved critical production incidents with clear ownership and prioritization",
      "Standardized Intake & Change Framework – Unified intake pipeline for incidents, enhancements, and change requests",
      "Agile Product Management – Standardized ceremonies, backlog grooming, and cross-team coordination",
      "Product-Led Operating Model – Roadmaps aligned with measurable business outcomes",
      "Engineering Efficiency & Toil Reduction – Automated repetitive tasks and improved operational runbooks"
    ],
    impact: [
      "Reduced S1–S3 incident backlog and overall operational risk",
      "Improved SLA compliance and production system reliability",
      "Increased engineering throughput and planned delivery capacity",
      "Stronger product ownership and more predictable execution"
    ],
    operationalIntegration: [
      "Unified intake, escalation, and ownership models across engineering teams",
      "Standardized agile workflows embedded into daily operations",
      "Knowledge transfer, documentation, and playbooks for sustained adoption"
    ],
    businessOutcomes: [
      "Faster incident resolution and fewer operational disruptions",
      "Higher engineering efficiency and delivery predictability",
      "Improved collaboration across teams and stakeholders",
      "Scalable operating model repeatable across enterprise programs"
    ],
    sustainability: [
      "Standardized processes supporting continuous operational improvement",
      "Product-centric governance ensuring long-term delivery alignment",
      "Repeatable agile practices maintaining performance and predictability",
      "Operational playbooks and monitoring embedded for ongoing improvement"
    ],
    images: [] // workflow diagrams, incident dashboards, agile operating model visuals (optional)
  }
];
