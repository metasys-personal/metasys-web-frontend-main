import { Project } from "@/app/types/project";

export const slug = "vodafone";
export const clientName = "Vodafone";


export const vodafoneProjects: Project[] = [
  {
    title: "Network Traffic Forecasting",
    executiveSummary:
      "This project entailed decreasing complexity in network traffic caused by growing data consumption, evolving customer behaviour, and multi-technology network management.",
    objective:
      "To forecast voice and data traffic accurately across various time horizons and geographies, enabling data-driven CAPEX and OPEX decisions.",
    challenge: [
      "Manual and historical-average planning methods failed to capture seasonal trends, travel patterns, and rapid shifts in customer behaviour.",
      "Sub-optimal capacity bids, either over-committing (increasing costs) or under-committing (impacting customer experience and revenue opportunities).",
      "Manual and retrospective forecasting methods limited the ability to proactively plan capacity and maintain QoS."
    ],
    solution: [
      "Integrated historical and real-time network data",
      "Applied advanced time-series and machine learning models, and provided interactive dashboards and scenario simulations to support proactive planning and operational optimization.",
      "An end-to-end forecasting framework to predict roaming voice minutes and data usage across key partner networks and geographies.",
      "A time-series modelling with feature-driven regression approaches to capture trend, multiple seasonalities, holiday/travel effects, and country-specific mobility patterns.",
      "Modular, production-ready framework enabling automated data ingestion, model training, back-testing, and forecast generation."
    ],
    impact: [
      "Improved forecast accuracy for voice and data traffic",
      "Enabled proactive capacity planning and congestion mitigation",
      "Optimized CAPEX and OPEX allocation",
      "Strengthened collaboration across technical, operational, and strategic teams"
    ],
    operationalIntegration: [
      "Forecasts integrated with Vodafone’s planning and reporting systems",
      "Decision-support tools provided to network planners and operational teams",
      "Knowledge transfer sessions to ensure sustainable use"
    ],
    businessOutcomes: [
      "Improved forecast accuracy for voice and data traffic",
      "Proactive capacity planning and congestion risk mitigation",
      "Optimized CAPEX and OPEX allocation",
      "Maintained peak-period service quality",
      "Enhanced collaboration across technical, operational, and strategic planning teams"
    ],
    sustainability: [
      "Extended forecasting to emerging technologies (5G, IoT traffic)",
      "Enhanced real-time adaptive optimization capabilities",
      "Investment in continuous data quality improvements and model refinement",
      "Expanded scenario simulations to cover additional business drivers"
    ],
        images: [
      "/images/vodafone/forecast1.jpg",
      "/images/vodafone/forecast2.jpg",
    ],
  },
  {
    title: "Vodafone 360° Customer-Lifecycle",
    executiveSummary:
      "This project focused on reducing revenue risk from customer churn by implementing proactive, lifecycle-based churn prediction and retention strategies across multiple Vodafone markets.",
    objective:
      "To predict and prevent customer churn across multiple lifecycle stages, enabling data-driven retention campaigns and maximizing customer lifetime value (CLV) without unnecessarily eroding margins.",
    challenge: [
      "High churn risk due to market competition and price sensitivity.",
      "Varying service quality perceptions across markets.",
      "Existing churn approaches were reactive, leaving limited scope for early intervention.",
      "CVM and CRM teams lacked data-driven frameworks to decide which customers to target, when to engage them, and how aggressive retention offers should be."
    ],
    solution: [
      "Soft-churn prediction models spanning early tenure, mature base, and pre-churn phases to detect subtle behavioral and usage-based signals.",
      "Uplift modeling to identify persuadable customers and estimate incremental impact of retention interventions.",
      "Outputs integrated with CVM and CRM workflows, including prioritized target lists, offer tiers, channel strategies, and timing rules.",
      "Co-designed campaigns with CVM and CRM teams tailored to South African and Middle Eastern market dynamics."
    ],
    impact: [
      "Shifted to proactive, lifecycle-based churn prevention.",
      "Increased campaign efficiency and conversion rates.",
      "Reduced avoidable churn and improved customer lifetime value.",
      "Provided a robust framework for offer optimization and ROI."
    ],
    operationalIntegration: [
      "Model outputs fully integrated into CVM and CRM workflows.",
      "Decision-support tools used for targeted retention campaigns.",
      "Knowledge transfer sessions for CVM and CRM teams to ensure sustainable adoption."
    ],
    businessOutcomes: [
      "Reduced customer churn and enhanced customer lifetime value.",
      "Increased efficiency and ROI of retention spend.",
      "Enabled data-driven offer targeting and campaign timing.",
      "Strengthened decision-making across commercial and operational teams."
    ],
    sustainability: [
      "Continuous model refinement and data quality improvements.",
      "Expansion of churn models to cover additional lifecycle stages and emerging market dynamics.",
      "Integration of scenario analysis to optimize retention spend and campaign effectiveness."
    ],
    images: ["/images/vodafone/cvl1.jpg"],
  },
  {
    title: "CVM Recommendation Engine",
    executiveSummary:
      "This project focused on accelerating revenue growth for Vodafone and partner operators by transitioning from generic, rule-based marketing campaigns to personalized, data-driven cross-sell and upsell recommendations across the customer lifecycle.",
    objective:
      "To enable data-driven next-best-offer recommendations that increase ARPU and customer lifetime value through personalized CVM campaigns.",
    challenge: [
      "Rule-based and broadcast CVM campaigns resulted in low personalization and weak conversion performance.",
      "CVM and CRM teams lacked a systematic framework to determine which products to recommend, to whom, and when.",
      "Inefficient targeting led to customer fatigue and suboptimal use of marketing budgets across competitive telecom markets."
    ],
    solution: [
      "Combined collaborative filtering, propensity models, and business-rule constraints.",
      "Leveraged behavioral, transactional, and contextual features including usage intensity, recharge behavior, device type, tenure, and price sensitivity.",
      "Generated individual-level next-best-offer recommendations across data bundles, roaming packs, value-added services, and plan upgrades.",
      "Integrated seamlessly into CVM and CRM workflows for real-time and batch campaign execution.",
      "Co-designed offer eligibility, prioritization logic, and contact policies with CVM teams to ensure commercial viability and market alignment."
    ],
    impact: [
      "Shift from mass marketing to personalized, customer-centric campaigns.",
      "Improved conversion rates and incremental revenue uplift.",
      "Increased ARPU and customer lifetime value.",
      "Reduced customer fatigue through more relevant offer delivery.",
      "Established a scalable recommendation capability across South Africa and the Middle East."
    ],
    operationalIntegration: [
      "Embedded into day-to-day CVM campaign planning and execution.",
      "Supported both real-time triggers and scheduled campaigns.",
      "Enabled CVM teams with explainable recommendations and operational controls."
    ],
    businessOutcomes: [
      "Improved conversion rates and incremental revenue uplift.",
      "Shift from mass marketing to personalized, customer-centric campaigns.",
      "Increased ARPU and customer lifetime value.",
      "Reduced customer fatigue through more relevant offer delivery.",
      "Established a scalable recommendation capability across multiple regions."
    ],
    sustainability: [
      "Scalable recommendation framework adaptable to new products and markets.",
      "Continuous model retraining as customer behavior evolves.",
      "Reduced promotional waste through high-propensity targeting.",
      "Extendable to emerging services (5G, digital VAS, converged offers).",
      "Long-term CVM capability building through data-driven decision-making."
    ]
  },
  {
    title: "NLP-Based Customer-Ops Enhancement System",
    executiveSummary:
      "This project entailed improving customer operations efficiency and service quality by transforming unstructured customer complaints into actionable, real-time operational intelligence.",
    objective:
      "To automatically analyze and classify large volumes of customer complaints and feedback, enabling faster issue detection, prioritization, and resolution while reducing manual effort.",
    challenge: [
      "High volumes of unstructured customer complaints across COPS and service channels",
      "Manual review and broad tagging were time-consuming and inconsistent",
      "Emerging and hidden issue themes were not captured by rule-based taxonomies",
      "Limited visibility into true drivers of customer dissatisfaction",
      "Reactive operations increased resolution time and downstream churn risk"
    ],
    solution: [
      "Applied unsupervised topic modeling and embedding-based clustering to discover hidden and emerging complaint themes",
      "Created labeled datasets from discovered topics for supervised learning",
      "Deployed LSTM / transformer-based text classification models for near real-time topic prediction",
      "Implemented text normalization, multilingual handling, and domain-specific feature enrichment",
      "Integrated automated tagging, routing, and prioritization into customer operations workflows"
    ],
    impact: [
      "Reduced manual complaint review effort by 60–80%",
      "Improved accuracy and consistency of complaint categorization",
      "Uncovered previously hidden and emerging customer pain points",
      "Enabled faster root-cause analysis and issue prioritization",
      "Accelerated complaint resolution turnaround time",
      "Improved customer experience and satisfaction",
      "Supported proactive interventions to reduce downstream churn"
    ],
    operationalIntegration: [
      "Integrated with existing COPS and customer service platforms",
      "Enabled near real-time complaint classification and routing",
      "Provided actionable insights to customer service, network, and business teams"
    ],
    businessOutcomes: [
      "Increased operational efficiency within customer operations",
      "Reduced rework and mis-routing of complaints",
      "Faster identification and resolution of high-impact service issues",
      "Improved customer satisfaction and retention"
    ],
    sustainability: [
      "Scalable NLP framework adaptable to new channels and complaint types",
      "Continuous learning as new complaint data becomes available",
      "Extendable to additional use cases (sentiment analysis, agent performance, VOC analytics)",
      "Long-term reduction in operational cost through automation",
      "Strengthened data-driven decision-making across Customer Operations"
    ]
  }
];
