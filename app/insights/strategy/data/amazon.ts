import { Project } from "@/app/types/project";

export const slug = "amazon";
export const clientName = "Amazon (AWS)";

export const amazonProjects: Project[] = [
  {
    title: "AWS Training & Certification – AI-Powered Learning at Global Scale",
    executiveSummary:
      "This project modernized AWS Training & Certification to deliver intelligent, personalized, and scalable learning experiences. By unifying identity, intelligence, and integration, the platform evolved from a content delivery system into an AI-powered learning ecosystem serving millions of learners worldwide.",
    objective:
      "Enable secure, enterprise-ready learner onboarding and identity management; personalize learning journeys with AI/ML-driven recommendations; support global scalability for millions of learners; and provide extensible, partner-friendly platform services for content and integrations.",
    challenge: [
      "Fragmented learner identity and profile experiences across training, labs, subscriptions, and certifications",
      "Manual and inconsistent enterprise onboarding, including SSO and LMS integrations",
      "Limited personalization despite rich learner data",
      "High operational overhead managing global content delivery",
      "Growing demand for AI/GenAI learning experiences without compromising security or privacy"
    ],
    solution: [
      "Unified Learner Identity & Profile Services – Centralized identity and profile layer for consistent access, progress tracking, and personalization",
      "Enterprise SSO & LMS Integration – Scalable SSO and LMS/LXP integrations for secure, frictionless onboarding",
      "AI & ML-Driven Learning Intelligence – ML-powered recommendations, skill-gap insights, and engagement analytics for adaptive learning journeys",
      "GenAI-Ready Capabilities – Guardrails for AI/LLM-powered learning plans and content discovery with identity-aware access",
      "Partner & Ecosystem Enablement – Extensible APIs and platform services enabling partners and internal teams to integrate and scale globally"
    ],
    impact: [
      "Faster enterprise onboarding through standardized SSO and LMS frameworks",
      "Personalized, AI-driven learning journeys tailored to learner roles, goals, and skill levels",
      "Global scalability supporting millions of learners securely",
      "Enabled GenAI-powered learning experiences without compromising trust, privacy, or reliability"
    ],
    operationalIntegration: [
      "Unified learner identity and progress tracking across the AWS learning ecosystem",
      "Platform services integrated with internal AWS systems and partner workflows",
      "Knowledge transfer and best practices shared with enterprise and partner teams"
    ],
    businessOutcomes: [
      "Accelerated skill development for the global cloud workforce",
      "Improved learner engagement through personalized AI-powered experiences",
      "Reduced operational overhead and integration complexity",
      "Scalable platform supporting enterprise and individual learners worldwide"
    ],
    sustainability: [
      "Platform designed for continuous extension and partner integration",
      "AI/ML and GenAI capabilities continuously updated using learner data",
      "Secure, scalable architecture supporting long-term global growth",
      "Adaptive learning experiences maintained and improved over time"
    ],
    images: [] // add learning dashboards, architecture diagrams, etc. if available
  }
];
