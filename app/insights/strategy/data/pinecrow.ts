import { Project } from "@/app/types/project";

export const slug = "pinecrow";
export const clientName = "Pinecrow";

export const pinecrowProjects: Project[] = [
  {
    title: "Pinecrow – AI-Powered Survey Insights Platform",
    executiveSummary:
      "Pinecrow transformed its survey platform into an AI-driven insights engine. By embedding LLM-based text analysis, sentiment detection, and near-real-time analytics, the platform evolved from survey collection into continuous intelligence. A privacy-first architecture enabled secure, enterprise-scale adoption across employee and customer feedback programs.",
    objective:
      "Accelerate insight generation from survey data, enable enterprise-wide trend detection and analysis, reduce manual analysis and reporting, and ensure secure, privacy-first AI integration.",
    challenge: [
      "Slow, manual analysis of open-ended survey responses",
      "Fragmented reporting workflows requiring external BI tools",
      "Difficulty scaling insights across teams and business units",
      "Rising expectations for AI-powered insights without compromising privacy"
    ],
    solution: [
      "LLM-Powered Text & Sentiment Analysis – Automated theme extraction and sentiment scoring from open-ended responses",
      "Advanced Insight Generation & Trend Detection – Cross-survey analysis surfacing recurring patterns, risks, and emerging themes",
      "Embedded BI & Self-Service Analytics – Native dashboards enabling teams to explore insights without external BI dependencies",
      "Privacy-First AI Architecture – Secure, compliant AI workflows supporting enterprise trust and governance",
      "Platform Expansion Through M&A – Seamless integration of acquired capabilities into a unified insights platform"
    ],
    impact: [
      "Insight generation reduced from weeks to minutes",
      "Faster, clearer understanding of sentiment, risks, and emerging trends",
      "Enterprise-scale analysis across thousands of surveys and millions of responses",
      "Differentiated market position as an AI-powered insights platform"
    ],
    operationalIntegration: [
      "Embedded AI and analytics directly into core survey workflows",
      "Standardized insight dashboards across teams and departments",
      "Knowledge transfer, training, and adoption playbooks for enterprise users"
    ],
    businessOutcomes: [
      "Reduced time-to-insight for leaders and decision-makers",
      "Improved cross-team alignment on employee and customer feedback",
      "Early detection of trends and emerging organizational risks",
      "Scalable, AI-enabled survey intelligence platform"
    ],
    sustainability: [
      "Modular, extensible architecture supporting continuous AI evolution",
      "Privacy-first design ensuring long-term compliance and governance",
      "Repeatable enterprise adoption with standardized processes and playbooks",
      "Continuous learning driven by AI-powered feedback loops"
    ],
    images: [] // dashboards, sentiment analysis visuals, AI insight flows (optional)
  }
];
