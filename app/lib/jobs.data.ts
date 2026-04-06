import { AreaOfInterest,  } from "../types/jobs";

export const areasOfInterest: AreaOfInterest[] = [
  { name: "Security & Cloud", count: 3 }, 
  // DevSecOps, SRE, MLOps, Cloud Architect, DevOps

  { name: "Software Engineering", count: 8 }, 
  // Frontend, Backend, Automation QA, Performance Tester, SRE, DevOps, MLOps, AI/ML Engineer

  { name: "Data & AI", count: 5 }, 
  // Data Scientist, Data Engineer, Data Architect, AI/ML Engineer, MLOps (AI focus)

  { name: "Product & Project Management", count: 3 }, 
  // Product Manager, Project Manager, Program Manager, Business & Finance, Support Engineer

  { name: "Creative & Design", count: 3 }, 
  // UI/UX Designer, Graphic Designer, Video Editor, Frontend (UI/UX portion)

  { name: "Operations & Support", count: 1 }, 
  // Tech Ops, Support Engineer, DevOps (Ops focus)
];

export const jobTypes: AreaOfInterest[] = [
  { name: "Full time", count: 25 },
  { name: "Part time", count: 0 },
  { name: "Contract", count: 0 },
  { name: "Internship", count: 0 },
];


 export const experienceType: AreaOfInterest[] = [
  { name: "Early Career", count: 2 },
  { name: "Mid-level", count: 20 },
  { name: "Senior Level", count: 4 },
];


import { Job } from "@/app/types/jobs";

export const jobs: Job[] = [
  {
    id: "solution-architect",
    title: "Solution Architect",
    location: "Global / Remote",
    jobType: "Full time",
    level: "Senior Level",
    areaOfInterest: "Security & Cloud",

    description: `
The Solution Architect defines the complete technical framework for our integrated supply chain e-commerce ecosystem.
You translate complex operational flows into scalable, secure, and compliant architecture while guiding teams toward
consistent, high-quality delivery.
    `,

    responsibilities: `
• Architect end-to-end SCM flows (MES → WMS → OMS → Payments → Invoices)
• Define system architecture using Node.js 22 and NestJS
• Design API contracts, domain models, and integration patterns
• Lead multi-tenancy strategies using PostgreSQL RLS
• Define infrastructure standards using Terraform, Docker, and Traefik
• Drive architecture reviews and mentor engineering teams
    `,

    skillsRequired: `
Node.js 22, NestJS, TypeScript, PostgreSQL 15 (RLS), Redis, Meilisearch, MinIO,
Next.js, React, Terraform, Docker, Traefik, Prometheus, Grafana, OpenTelemetry
    `,

    designation: "Reports to CTO; leads architectural review boards",
    qualifications: "Relevant technical degree or equivalent experience",
    experienceRange: "10+ years",

    additionalInformation: `
AI Agent Focus:
• Secure multi-agent orchestration
• Agent data-access layers across MES/WMS/OMS
• Standards for LangChain, AutoGen, and RAG integration

Success Metrics:
• Adoption of architecture standards
• Compliance with audit and security requirements
• Achievement of platform SLOs
    `,

    aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
    `,
  },

  {
    id: "technical-architect",
    title: "Technical Architect (Frontend / Backend)",
    location: "Global / Hybrid",
    jobType: "Full time",
    level: "Senior Level",
    areaOfInterest: "Software Engineering",

    description: `
The Technical Architect defines and enforces the application-layer architecture across frontend and backend systems,
ensuring consistency, performance, and high-quality delivery.
    `,

    responsibilities: `
• Define app-layer architecture for web, admin, and agent interfaces
• Standardize frontend stack and UI patterns
• Lead backend architecture using Node.js 22 and NestJS
• Create API-first integration rules
• Maintain architecture documentation
• Enforce monorepo and CI/CD standards
    `,

    skillsRequired: `
Next.js 14, React 18, TypeScript, Tailwind CSS, Radix UI, Framer Motion,
Node.js 22, NestJS, PostgreSQL 15, Redis, Meilisearch, MinIO
    `,

    experienceRange: "8–12 years",

    additionalInformation: `
AI Agent Focus:
• UI patterns for agent interactions
• Backend services enabling agent workflows
• Integration with LangChain and LlamaIndex

Success Metrics:
• Reduced technical debt
• Faster delivery cycles
• Improved performance and developer productivity
    `,
  },

  {
    id: "security-engineer",
    title: "Security Engineer",
    location: "Global",
    jobType: "Full time",
    level: "Senior Level",
    areaOfInterest: "Security & Cloud",

    description: `
The Security Engineer protects the platform by defining security controls, risk mitigation strategies,
and compliance frameworks across applications, infrastructure, and AI systems.
    `,

    responsibilities: `
• Perform threat modeling and vulnerability assessments
• Enforce PCI-DSS and GDPR compliance
• Implement OAuth2 and SAML authentication
• Manage secrets, encryption, and tenant isolation
• Define WAF rules and abuse prevention
• Lead incident response and security training
    `,

    skillsRequired: `
Node.js/NestJS security, Next.js security patterns, OAuth2, SAML, JWT,
Vault, Docker, Terraform, PostgreSQL RLS, Prometheus
    `,

    experienceRange: "7–11 years",

    additionalInformation: `
AI Agent Focus:
• Prevent prompt injection and data exfiltration
• Define secure boundaries for agent actions
• Enforce policy-based LLM access controls

Success Metrics:
• Reduced vulnerabilities
• Successful audits with no exceptions
• Faster incident response
    `,
  },

  {
  id: "devsecops-engineer",
  title: "DevSecOps Engineer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid–Senior Level",
  areaOfInterest: "Software Engineering",

  description: `
The DevSecOps Engineer embeds security directly into the CI/CD lifecycle, ensuring continuous and automated
enforcement of security standards across development and deployment. You design secure pipelines, automate
security checks, and maintain infrastructure hygiene while enabling teams to ship faster and safer.
  `,

  responsibilities: `
• Integrate SAST, DAST, and container security into CI/CD pipelines
• Enforce secure Terraform and Docker standards
• Manage vulnerability scanning and remediation workflows
• Automate secrets management and certificate rotation
• Implement monitoring and alerting for security anomalies
• Collaborate with development and platform teams to embed security-as-code
  `,

  skillsRequired: `
CI/CD pipelines, Makefile, Terraform, Docker, Vault, Prometheus, Grafana, Loki,
SAST/DAST tools, Bash/Python scripting, Node.js, NestJS, Oracle Cloud
  `,

  designation: "Reports to Solution Architect or DevOps Lead",
  qualifications: "Relevant technical degree or equivalent hands-on experience",
  experienceRange: "5–8 years",

  additionalInformation: `
AI Agent Focus:
• Secure AI agent deployment pipelines
• Monitor AI workloads for abnormal behavior
• Enforce isolation and controlled access to sensitive SCM data

Success Metrics:
• High coverage of automated security checks
• Reduced vulnerabilities reaching production
• Strong compliance across IaC and runtime environments
  `,

  aboutCompany: `
We work with one shared purpose: to deliver value through secure, resilient, and scalable platforms.
Every day, we help organizations reinvent how they build and operate technology.
  `,
  },

  {
  id: "site-reliability-engineer",
  title: "Site Reliability Engineer (SRE)",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Senior Level",
  areaOfInterest: "Software Engineering",

  description: `
The Site Reliability Engineer ensures platform uptime, reliability, and operational excellence across our
supply chain and e-commerce ecosystem. You build observability systems, lead incident response, and drive
automation that reduces operational toil while ensuring services scale reliably under load.
  `,

  responsibilities: `
• Define SLIs and SLOs across all platform services
• Design and operate observability platforms
• Lead incident response and post-incident reviews
• Manage autoscaling, capacity planning, and disaster recovery
• Automate operational tasks using scripting and IaC
• Partner with engineering teams to improve system reliability
  `,

  skillsRequired: `
Prometheus, Grafana, Loki, Tempo, OpenTelemetry, Docker, Terraform, Traefik,
PostgreSQL, Redis, pgBackRest, Bash, Python
  `,

  designation: "Reports to CTO; collaborates with DevOps, Backend, and Security teams",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "7–10 years",

  additionalInformation: `
AI Agent Focus:
• Monitor AI services, workloads, and latency
• Ensure reliability of multi-agent runtime environments
• Optimize compute resources for LLM-heavy workloads

Success Metrics:
• High system uptime and SLO compliance
• Reduced MTTR and fewer recurring incidents
• Significant reduction in manual operational effort
  `,

  aboutCompany: `
We help organizations operate at scale with confidence.
Our teams focus on reliability, resilience, and continuous improvement across every layer of the platform.
  `,
  },

  {
  id: "cloud-architect",
  title: "Cloud Architect",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Senior Level",
  areaOfInterest: "Security & Cloud",

  description: `
The Cloud Architect designs scalable, highly available, and cost-efficient cloud infrastructure for
multi-tenant supply chain platforms. You define cloud strategy, networking models, and compliance standards
while ensuring performance, security, and data residency requirements are met across providers.
  `,

  responsibilities: `
• Architect multi-region and multi-AZ cloud environments
• Optimize compute, storage, and network resources
• Lead infrastructure-as-code governance using Terraform
• Conduct cloud configuration and IAM security audits
• Define disaster recovery, failover, and HA strategies
• Guide teams on cloud best practices and cost optimization
  `,

  skillsRequired: `
AWS, GCP, Azure, Oracle Cloud, Terraform, Docker, Traefik,
IAM roles and policies, VPC/VNet, PostgreSQL, Redis, MinIO,
Prometheus, OpenTelemetry, cloud cost-management tools
  `,

  designation: "Reports to Solution Architect or CTO",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "8–12 years",

  additionalInformation: `
AI Agent Focus:
• Design GPU-enabled clusters for AI training and inference
• Manage data residency and governance for AI artifacts
• Optimize infrastructure for AI orchestration workloads

Success Metrics:
• Reduced cloud spend with improved performance
• Strong cloud governance and compliance
• Highly reliable infrastructure with minimal downtime
  `,

  aboutCompany: `
We design cloud platforms that balance scale, security, and efficiency.
Our mission is to help organizations run critical systems with confidence and agility.
  `,
  },

  {
  id: "automation-qa-engineer",
  title: "Automation QA Engineer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Software Engineering",

  description: `
The Automation QA Engineer ensures product quality by building robust automated testing frameworks across UI, API,
performance, and supply chain workflows. You embed quality gates into CI/CD pipelines to ensure every release
meets strict reliability, performance, and scalability standards.
  `,

  responsibilities: `
• Build and maintain automated E2E, UI, and API test suites
• Integrate automated tests into CI/CD pipelines
• Conduct load and performance testing for SCM workflows
• Manage regression strategies and test data
• Collaborate with developers to prevent defects early in the lifecycle
  `,

  skillsRequired: `
Playwright, Cypress, Jest, TypeScript, Node.js, PostgreSQL,
JMeter/K6, Makefile CI/CD, GitHub/GitLab CI, Monorepo workflows
  `,

  designation: "Reports to Technical Architect or QA Lead",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "4–7 years",

  additionalInformation: `
AI Agent Focus:
• Validate agent behavior and deterministic execution
• Test AI integrations for accuracy, safety, and regression risks
• Ensure secure and correct data access by autonomous agents

Success Metrics:
• Increased automated test coverage across critical flows
• Reduced production defects and deployment risk
• Faster, more reliable CI/CD pipelines
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "performance-tester",
  title: "Performance Tester",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Software Engineering",

  description: `
The Performance Tester ensures the platform remains fast, stable, and scalable under varying load conditions.
You simulate real-world traffic to identify performance bottlenecks across APIs, databases, infrastructure,
and user-facing systems, ensuring readiness for peak operational demand.
  `,

  responsibilities: `
• Design and execute load, stress, spike, and endurance tests
• Analyze API, database, cache, and infrastructure performance
• Produce detailed performance reports with clear optimization recommendations
• Collaborate with SRE and engineering teams to resolve bottlenecks
• Integrate performance testing into CI/CD pipelines
• Validate system readiness for peak e-commerce and operational usage
  `,

  skillsRequired: `
JMeter, Gatling, K6, Prometheus, Grafana, OpenTelemetry,
PostgreSQL optimization, Redis, Node.js/NestJS performance tools,
Docker, cloud-based load generators
  `,

  designation: "Reports to Automation QA Lead or Technical Architect",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "5–8 years",

  additionalInformation: `
AI Agent Focus:
• Measure LLM latency, throughput, and concurrency
• Stress-test multi-agent orchestration environments
• Analyze infrastructure impact of AI-intensive workloads

Success Metrics:
• Improved 95th percentile response times
• Stable performance under projected peak loads
• Accurate identification and resolution of system bottlenecks
• Lower resource utilization during high-traffic periods
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "data-architect",
  title: "Data Architect",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Senior Level",
  areaOfInterest: "Data & AI",

  description: `
The Data Architect designs and governs the data ecosystem that powers analytics, operations, and AI workflows.
You ensure data across MES, WMS, OMS, and e-commerce platforms is structured, accessible, compliant, and
optimized for both operational and analytical use cases.
  `,

  responsibilities: `
• Define conceptual, logical, and physical data models
• Architect ETL/ELT pipelines for unified supply chain data
• Drive data governance, GDPR compliance, and quality controls
• Support real-time analytics and BI requirements
• Optimize schemas and queries for transactional and analytical workloads
• Define data retention, archival, and lifecycle strategies
  `,

  skillsRequired: `
PostgreSQL 15, SQL, Redis, MinIO, Meilisearch,
Data warehousing solutions, Python ETL tools,
Schema design tools, metadata management systems,
GDPR governance frameworks
  `,

  designation: "Reports to Solution Architect; supports Data, AI, and Engineering teams",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "8–12 years",

  additionalInformation: `
AI Agent Focus:
• Prepare curated datasets for LLM fine-tuning and RAG pipelines
• Structure agent interaction logs for auditability and improvement
• Ensure governed, high-quality data for AI pipelines

Success Metrics:
• High data accuracy, consistency, and reliability
• Efficient, low-latency data pipelines
• Strong compliance with governance and audit requirements
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "mlops-engineer",
  title: "MLOps Engineer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Senior Level",
  areaOfInterest: "Data & AI",

  description: `
The MLOps Engineer builds and operates the systems that deploy, monitor, and maintain machine learning models
at scale. You bridge data science and production by automating training, versioning, deployment, and monitoring
workflows to ensure models perform reliably, efficiently, and safely in real-world environments.
  `,

  responsibilities: `
• Build and automate ML training and deployment pipelines
• Manage experiment tracking, model versioning, and artifact storage
• Implement drift detection, monitoring, and alerting
• Deploy models into production APIs and event-driven workflows
• Maintain feature stores and retraining triggers
• Support A/B testing for model performance in live environments
  `,

  skillsRequired: `
MLflow, Kubeflow, SageMaker, PyTorch, TensorFlow, Python,
Docker, Terraform, model registries, CI/CD pipelines,
feature stores, GPU compute management
  `,

  designation: "Reports to Solution Architect / CTO; collaborates with Data Architects and SRE",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "6–10 years",

  additionalInformation: `
AI Agent Focus:
• Fine-tuning, evaluation, and deployment of LLMs
• Monitoring multi-agent performance and response quality
• Optimizing inference pipelines for cost and speed

Success Metrics:
• Fast and reliable ML deployments
• Minimal model drift and stable production accuracy
• High automation across the ML lifecycle
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "support-engineer-customer-success",
  title: "Support Engineer / Customer Success",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Early Career",
  areaOfInterest: "Operation & Delivery",

  description: `
The Support Engineer ensures smooth and reliable user experiences by resolving technical issues, supporting
onboarding, and translating customer feedback into actionable insights. You support both e-commerce users
and internal teams working with complex supply chain and administrative tools.
  `,

  responsibilities: `
• Diagnose and resolve technical issues across e-commerce and internal systems
• Handle L1/L2 support, reproduce bugs, and document findings
• Manage support tickets and ensure SLA adherence
• Conduct onboarding and training for B2B customers
• Gather user insights to inform product and engineering improvements
• Validate fixes before ticket closure
  `,

  skillsRequired: `
Browser DevTools, API debugging tools, Jira/ServiceNow,
Grafana and Loki logs, SCM workflow familiarity,
Slack and collaboration tools
  `,

  designation: "Reports to Customer Success Manager or Engineering Lead",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "1–4 years",

  additionalInformation: `
AI Agent Focus:
• Test AI agent responses and flag incorrect behavior
• Improve AI-related knowledge base and training content
• Support integration between support systems and AI agents

Success Metrics:
• High CSAT and low mean time to resolution (MTTR)
• Accurate and actionable bug reports
• Strong onboarding quality and user enablement
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "frontend-engineer",
  title: "Frontend Engineer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Software Engineering",

  description: `
The Frontend Engineer builds high-performance, accessible, and visually consistent interfaces across e-commerce,
B2B, and internal platforms. You transform design systems into production-quality UI while optimizing
performance, usability, and maintainability across the supply chain ecosystem.
  `,

  responsibilities: `
• Build user interfaces using Next.js 14, React 18, and TypeScript
• Implement Tailwind CSS, Radix UI, and design system components
• Optimize Core Web Vitals and frontend performance
• Conduct usability testing and support A/B experiments
• Collaborate in a monorepo environment with backend and platform teams
  `,

  skillsRequired: `
Next.js, React 18, TypeScript, Tailwind CSS, Radix UI,
Framer Motion, Playwright, Jest, REST/GraphQL APIs,
Web performance and accessibility tools
  `,

  designation: "Reports to Technical Architect; works closely with UX and backend teams",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Build chat interfaces, dashboards, and agent-driven UI components
• Implement streaming updates and real-time feedback patterns
• Design intuitive UX for LLM-powered workflows

Success Metrics:
• High Lighthouse and accessibility scores
• Consistent, reusable UI components
• Fast and reliable delivery of frontend features
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "backend-engineer",
  title: "Backend Engineer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Software Engineering",

  description: `
The Backend Engineer builds scalable, secure, and reliable APIs that power core supply chain operations.
You implement business logic for OMS, WMS, MES, payments, and integrations, ensuring performance,
data integrity, and seamless communication across services and AI-driven systems.
  `,

  responsibilities: `
• Develop APIs and services using Node.js 22 and NestJS
• Implement multi-tenant data models with PostgreSQL RLS
• Integrate payment gateways and logistics providers
• Use Redis for caching and asynchronous workflows
• Add tracing, metrics, and logs for observability
• Ensure secure authentication and role-based access control
  `,

  skillsRequired: `
Node.js 22, NestJS, TypeScript, PostgreSQL 15,
Redis, Docker, OpenTelemetry, REST/GraphQL APIs,
CI/CD pipelines, message queues
  `,

  designation: "Reports to Technical Architect or Engineering Lead",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Build agent orchestration services and secure tool endpoints
• Expose RAG-friendly APIs for AI retrieval workflows
• Ensure transactional integrity in agent-driven operations

Success Metrics:
• Low-latency APIs consistently meeting SLOs
• Scalable backend services with high reliability
• Strong code quality and cross-team collaboration
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "business-finance-federal-tenders",
  title: "Business & Finance Professional (Federal Tenders)",
  location: "Global / Hybrid",
  jobType: "Full time",
  level: "Senior Level",
  areaOfInterest: "Operations & Support",

  description: `
The Business & Finance Professional leads federal tender submissions, proposal development,
and contract strategy. You translate complex technical capabilities into compliant, competitive
government proposals while ensuring financial, security, and operational requirements are met.
  `,

  responsibilities: `
• Prepare and submit responses to federal RFPs, RFIs, and tenders
• Draft technical, management, and financial proposal volumes
• Perform cost modeling and pricing justifications
• Research and apply federal compliance frameworks (FISMA, NIST)
• Coordinate SOW alignment and contract deliverables
• Map platform security and AI controls into compliance narratives
  `,

  skillsRequired: `
Federal acquisition regulations, proposal writing tools,
FISMA/NIST compliance knowledge, financial modeling tools,
documentation systems, government procurement portals
  `,

  designation: "Reports to Program Manager or CFO",
  qualifications: "Relevant degree or equivalent experience in government contracting",
  experienceRange: "7–12 years",

  additionalInformation: `
AI Agent Focus:
• Highlight AI-driven automations within proposal narratives
• Align LLM capabilities with federal compliance requirements
• Document AI security and governance controls

Success Metrics:
• High federal tender win rate
• Zero compliance exceptions during evaluations
• Strong technical scoring and proposal quality
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },
  
  {
  id: "ui-ux-designer",
  title: "UI / UX Designer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Creative & Design",

  description: `
The UI/UX Designer creates intuitive, accessible, and consistent experiences across e-commerce,
B2B platforms, and internal tools. You translate complex supply chain and AI-driven workflows
into clean, user-friendly interfaces that improve adoption and satisfaction.
  `,

  responsibilities: `
• Design interfaces for e-commerce, SCM tools, and internal platforms
• Create wireframes, prototypes, design systems, and high-fidelity UI
• Conduct usability testing, research, and user interviews
• Ensure WCAG accessibility compliance and visual consistency
• Collaborate closely with frontend engineers for implementation
• Iterate designs based on analytics and user behavior
  `,

  skillsRequired: `
Figma, Adobe XD, Sketch, UI kits,
Radix UI design patterns, prototyping tools,
WCAG accessibility guidelines, UX research frameworks
  `,

  designation: "Reports to Product Manager or Technical Architect",
  qualifications: "Relevant design degree or equivalent experience",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Design intuitive interfaces for AI agents, chat surfaces, and copilots
• Create visualizations for agent insights and recommendations
• Ensure transparency and trust in AI-driven interactions

Success Metrics:
• Improved usability scores and reduced user friction
• Strong adoption of shared design systems
• Positive user feedback and reduced support tickets
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "graphic-designer",
  title: "Graphic Designer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Creative & Design",

  description: `
The Graphic Designer shapes the visual identity of the brand across all digital and print touchpoints.
You create high-quality graphics, UI assets, marketing visuals, and product illustrations, ensuring a strong
and unified brand presence. You collaborate with UI/UX, Product, and Marketing teams to produce impactful visuals.
  `,

  responsibilities: `
• Design icons, illustrations, banners, and UI graphic assets
• Develop marketing collateral for campaigns and feature launches
• Maintain and improve brand identity guidelines
• Create visuals for dashboards, documentation, and onboarding
• Collaborate with UI/UX to integrate graphics into interfaces
• Produce infographics explaining SCM or AI workflows
  `,

  skillsRequired: `
Adobe Illustrator, Photoshop, InDesign, Figma,
vector tools, brand guidelines, typography, color theory,
basic motion graphics
  `,

  designation: "Reports to UI/UX Designer or Product Manager",
  qualifications: "Relevant design degree or equivalent experience",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Create visual branding for AI agents and automation tools
• Produce infographics explaining AI system operations
• Support AI-focused product launches with visual assets

Success Metrics:
• Strong visual consistency across platforms
• High-quality creative output delivered on time
• Increased engagement with marketing and product visuals
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "video-editor",
  title: "Video Editor",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Creative & Design",

  description: `
The Video Editor produces high-quality instructional, promotional, and educational content for external users
and internal teams. You translate complex workflows—OMS, AI agents, and e-commerce—into clear and engaging videos.
You manage the production lifecycle to ensure consistent branding and professional execution.
  `,

  responsibilities: `
• Produce tutorials, walkthroughs, onboarding videos, and product demos
• Manage storyboarding, recording, editing, motion graphics, and sound
• Collaborate with product and marketing teams on content priorities
• Create explainers for SCM processes and AI tools
• Maintain an organized video library for training and documentation
• Ensure videos meet branding, clarity, and usability standards
  `,

  skillsRequired: `
Adobe Premiere Pro, After Effects, Final Cut Pro,
video codecs, screen recording tools, motion graphics,
sound design tools
  `,

  designation: "Reports to Product Manager or Marketing Lead",
  qualifications: "Relevant media/design degree or equivalent experience",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Produce instructional videos on AI agent usage and workflows
• Create animated explainers for LLM behavior and automation
• Visualize agent reasoning and interaction flows

Success Metrics:
• High adoption and engagement with published videos
• Increased product understanding and self-service rates
• Timely delivery aligned with product release cycles
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "tech-ops",
  title: "Tech Ops Specialist",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Early Career",
  areaOfInterest: "Software Engineering",

  description: `
The Tech Ops Specialist ensures smooth day-to-day operation of internal tools, systems, and infrastructure.
You provide access provisioning, troubleshoot systems, maintain IT assets, and support initial diagnostics
for platform alerts. You act as the first line of technical support for the organization.
  `,

  responsibilities: `
• Manage onboarding/offboarding and access provisioning
• Provide L1 troubleshooting for internal systems and tools
• Monitor dashboards and escalate infrastructure issues
• Maintain IT asset inventory and system documentation
• Support integrations between internal tools and automation
• Assist with log reviews and preliminary failure analysis
  `,

  skillsRequired: `
Windows/macOS/Linux administration, ticketing systems,
basic networking (DNS, VPN), monitoring dashboards (Grafana/Loki),
identity systems (Auth/Kratos), hardware troubleshooting
  `,

  designation: "Reports to Program Manager or SRE Lead",
  qualifications: "Relevant technical degree or equivalent experience",
  experienceRange: "0–3 years",

  additionalInformation: `
AI Agent Focus:
• Manage specialized resource access for AI/ML teams
• Support internal AI automation tools
• Assist with troubleshooting agent-to-system integration

Success Metrics:
• Low MTTR for internal technical tickets
• Smooth onboarding operations and access readiness
• Accurate monitoring alert escalation and resolution
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "data-engineer",
  title: "Data Engineer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Data & AI",

  description: `
The Data Engineer builds and maintains pipelines that unify operational, transactional, and AI data
across the platform. You ensure high-quality, governed data powering dashboards, reporting, and AI models.
Collaborate with engineering, analytics, and AI teams to ensure smooth data availability.
  `,

  responsibilities: `
• Build ETL/ELT pipelines for MES/WMS/OMS and e-commerce data
• Manage data warehouse schema design and optimization
• Implement data quality, validation, and monitoring checks
• Tune PostgreSQL queries for analytics and operations
• Manage data archival and storage strategies using MinIO
• Integrate logs and events from observability systems
  `,

  skillsRequired: `
Python, SQL, PostgreSQL 15, Redis, MinIO,
Spark/Kafka concepts, ETL frameworks, Docker, Terraform,
data warehousing patterns
  `,

  designation: "Reports to Data Architect",
  qualifications: "Relevant technical or data engineering degree",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Build pipelines for AI logs, metrics, and dataset generation
• Maintain feature pipelines for ML and agent workflows
• Provide high-quality data for LLM fine-tuning and RAG systems

Success Metrics:
• High pipeline uptime and reliability
• Efficient data flow with minimal latency
• Strong documentation and clean data modeling
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "devops-engineer",
  title: "DevOps Engineer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Software Engineering",

  description: `
The DevOps Engineer ensures fast, reliable, and consistent delivery of applications across our
supply chain e-commerce ecosystem. You automate deployments, manage cloud infrastructure,
and work closely with engineering teams to maintain stable, scalable, and cost-efficient systems.
  `,

  responsibilities: `
• Build and maintain CI/CD pipelines using Makefile, Git workflows, and containerized deployments
• Manage cloud infrastructure provisioning with Terraform and maintain environment consistency
• Optimize Docker deployments, image management, and runtime configurations
• Implement monitoring, logging, and alerting using Prometheus, Grafana, and Loki
• Collaborate with developers to streamline builds and improve release cycles
• Ensure backup, restore, and system recovery procedures are managed
  `,

  skillsRequired: `
Terraform, Docker, Traefik, Linux,
CI/CD pipelines, Prometheus/Grafana/Loki,
Git, scripting (Bash/Python)
  `,

  designation: "Reports to DevOps Lead / SRE Lead",
  qualifications: "Relevant technical or engineering degree",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Support deployment environments for AI services
• Optimize infrastructure for model inference
• Ensure stable hosting for multi-agent workflows

Success Metrics:
• Deployment reliability and reduced downtime
• Faster CI/CD cycles and improved infrastructure stability
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "ai-ml-engineer",
  title: "AI/ML Engineer",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Data & AI",

  description: `
The AI/ML Engineer develops machine learning models and AI-driven capabilities that enhance
e-commerce, automation, supply chain operations, and personalization. You transform business problems
into production-ready AI solutions.
  `,

  responsibilities: `
• Build, train, and optimize ML models for forecasting, classification, and recommendation tasks
• Develop pipelines for feature engineering, model evaluation, and experimentation
• Integrate ML models into production systems with batch and real-time inference
• Perform data analysis and identify patterns across MES/WMS/OMS datasets
• Collaborate with Data Engineering and MLOps teams for smooth deployment
  `,

  skillsRequired: `
Python, scikit-learn, TensorFlow/PyTorch, MLflow, Jupyter,
SQL, ETL/ELT, Docker, cloud compute (AWS/GCP/Azure)
  `,

  designation: "Reports to Head of AI / MLOps Lead",
  qualifications: "Relevant technical or AI/ML degree",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Build model components powering LLM agents
• Create embeddings for RAG systems
• Optimize models for fast inference within multi-agent environments

Success Metrics:
• Model accuracy and business impact
• Efficient deployment and inference performance
• Streamlined ML workflows
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "product-manager",
  title: "Product Manager",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Product & Project Management",

  description: `
The Product Manager leads the vision, strategy, and roadmap for our e-commerce and supply chain technology ecosystem.
You convert market needs, user insights, and business priorities into product features that enhance automation, usability,
and operational efficiency.
  `,

  responsibilities: `
• Define product roadmaps for e-commerce, WMS, OMS, and AI-driven features
• Conduct user research and gather requirements from internal teams and clients
• Translate needs into clear PRDs, user stories, and acceptance criteria
• Collaborate with design and engineering teams through the full product lifecycle
• Analyze product performance and continuously refine the experience
• Lead cross-functional communication between stakeholders and development teams
  `,

  skillsRequired: `
Product roadmapping tools (Jira, Notion), UX principles, analytics tools, API understanding, Agile/Scrum workflows
  `,

  designation: "Reports to Head of Product / Program Leadership",
  qualifications: "Relevant product or technical degree",
  experienceRange: "3–7 years",

  additionalInformation: `
AI Agent Focus:
• Identify opportunities to embed AI into workflows
• Define agent capabilities
• Shape product requirements for AI assistant experiences

Success Metrics:
• Feature adoption and delivery velocity
• Customer satisfaction
• Operational efficiency improvements
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "project-manager",
  title: "Project Manager",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Product & Project Management",

  description: `
The Project Manager ensures smooth execution of projects spanning e-commerce modules, internal SaaS tools,
and emerging AI initiatives. You coordinate timelines, align stakeholders, and ensure deliverables meet quality standards.
  `,

  responsibilities: `
• Create detailed project plans, timelines, and delivery schedules
• Coordinate across engineering, design, QA, and DevOps teams
• Track project progress, identify risks, and drive mitigation strategies
• Manage documentation, sprint planning, and stakeholder communication
• Ensure projects are delivered within scope, time, and quality constraints
  `,

  skillsRequired: `
Jira, Asana, MS Project, project documentation tools, Agile/Scrum frameworks, basic technical understanding
  `,

  designation: "Reports to Program Manager / PMO",
  qualifications: "Relevant project management or technical degree",
  experienceRange: "3–7 years",

  additionalInformation: `
AI Agent Focus:
• Manage delivery timelines for AI-enabled features
• Coordinate with data/AI teams for structured rollout

Success Metrics:
• On-time delivery
• Risk mitigation effectiveness
• Project transparency
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "program-manager",
  title: "Program Manager",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Senior Level",
  areaOfInterest: "Product & Project Management",

  description: `
The Program Manager oversees multiple parallel projects, ensuring alignment with business goals and product strategy.
You manage cross-team coordination, long-term planning, and operational frameworks that ensure organizational scalability.
  `,

  responsibilities: `
• Oversee multi-project execution across e-commerce, SCM tools, and AI initiatives
• Align organizational priorities, resources, and execution plans
• Build governance frameworks for communication, reporting, and risk management
• Guide project managers and ensure consistent delivery practices
• Analyze program performance and refine operational processes
  `,

  skillsRequired: `
Jira/Portfolio tools, risk management frameworks, Agile/Scaled Agile, roadmap planning, budget management
  `,

  designation: "Reports to senior leadership / CTO / Product Head",
  qualifications: "Relevant management or technical degree",
  experienceRange: "7+ years",

  additionalInformation: `
AI Agent Focus:
• Drive long-term strategy for AI adoption
• Ensure cross-functional readiness for AI-driven transformation

Success Metrics:
• Program-level success
• Cross-team collaboration quality
• Alignment between strategy and execution
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },

  {
  id: "data-scientist",
  title: "Data Scientist",
  location: "Global / Remote",
  jobType: "Full time",
  level: "Mid-level",
  areaOfInterest: "Data & AI",

  description: `
The Data Scientist transforms raw data into insights and predictive models that support e-commerce optimization,
demand forecasting, user behavior analysis, and AI-driven automation.
  `,

  responsibilities: `
• Analyze MES/WMS/OMS data for trends, anomalies, and optimization opportunities
• Build predictive models for personalization, fraud detection, forecasting, and behavior analysis
• Develop dashboards, reports, and analytical artifacts for business teams
• Work closely with ML and Data Engineering teams to operationalize insights
• Validate data quality and ensure statistical rigor in all analyses
  `,

  skillsRequired: `
Python, Pandas, NumPy, SQL, machine learning libraries,
BI tools (Tableau/PowerBI), statistics, ETL familiarity
  `,

  designation: "Reports to Head of Data / AI",
  qualifications: "Relevant data science or analytics degree",
  experienceRange: "3–6 years",

  additionalInformation: `
AI Agent Focus:
• Enhance agent intelligence through data-driven insights
• Improve LLM grounding with structured data
• Support RAG systems with clean feature engineering

Success Metrics:
• Model performance and accuracy of insights
• Business impact
• Analytical reliability
  `,

  aboutCompany: `
We work with one shared purpose: to deliver on the promise of technology and human ingenuity.
Every day, we help organizations continuously reinvent.
  `,
  },
];
