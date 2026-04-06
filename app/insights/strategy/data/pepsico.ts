import { Project } from "@/app/types/project";

export const slug = "pepsico";
export const clientName = "PepsiCo";


export const pepsicoProjects: Project[] = [
  {
    title: "PepsiCo — AI-Driven Store Potential & Decision Intelligence",
    executiveSummary:
      "We provided AI-driven, store-level insights to unlock latent revenue potential and guide differentiated commercial actions.",
    objective:
      "Estimate true potential of each retail outlet and optimize assortment, promotions, and field resource allocation.",
    challenge: [
      "Large FMCG organizations, including PepsiCo, struggled to accurately understand the true potential of retail outlets",
      "Stores differed in size, shopper profile, catchment characteristics, and execution quality",
      "Assortments, promotions, and retailer value offers were often designed using broad regional rules or historical averages",
      "Consequences included misaligned product mixes, inefficient trade spend, uniform allocation of field resources, and missed revenue opportunities from high-potential stores"
    ],
    solution: [
      "Designed and implemented a cloud-based, AI-driven decision framework combining machine learning, deep learning, and advanced analytics",
      "Predictive Modeling of Store Potential using quantile regression and ML models to estimate upper-bound sales potential under ideal execution conditions",
      "Deep learning captured nonlinear interactions between assortment, pricing, promotions, distribution, and local demand signals",
      "Behavioral & Economic Store Segmentation via unsupervised ML clustering",
      "Business-ready recommendations with tailored assortment strategies, optimized shopper value offers (SVOs) and retailer value offers (RVOs), and prioritized deployment of execution devices and field resources",
      "Scalable cloud architecture on Databricks with automated pipelines for data ingestion, model training, and scoring"
    ],
    impact: [
      "Identified latent revenue potential at the store level, enabling targeted growth strategies",
      "Introduced differentiated assortments and promotions",
      "Improved ROI of trade spend via targeted SVOs and RVOs",
      "Optimized allocation of field resources and execution devices",
      "Increased sales productivity and execution quality across high-potential store clusters",
      "Drove measurable uplift in both sales and operational effectiveness"
    ],
    operationalIntegration: [
      "Automated pipelines ensured seamless integration of data, models, and scoring into commercial workflows",
      "Recommendations provided actionable guidance for field teams and commercial managers",
      "Cloud-based architecture allowed real-time updates and decision support"
    ],
    businessOutcomes: [
      "Enabled differentiated, data-driven commercial planning at store level",
      "Improved efficiency and ROI of trade promotions and field operations",
      "Strengthened alignment between data-driven insights and business execution"
    ],
    sustainability: [
      "Scalable framework adaptable to new stores, products, and markets",
      "Continuous retraining of models as store performance and market conditions evolve",
      "Long-term optimization of trade spend and field resource allocation",
      "Supports ongoing improvements in execution quality and sales productivity"
    ],
    images: [] // optional, add URLs later
  },
  {
    title: "PepsiCo AI for StoreIQ",
    executiveSummary:
      "We delivered an AI-driven decision assistant to convert fragmented store-level data into actionable recommendations for field sales and service teams.",
    objective:
      "Enable real-time, data-backed store-level decisions for assortment, promotions, and execution strategies, unlocking latent store potential.",
    challenge: [
      "Field sales and service teams relied on manual reports, static dashboards, and experience-driven judgment",
      "Fragmented data across sales, distribution, execution, and shopper behavior systems",
      "Slow, inconsistent decision-making at the store level",
      "Missed opportunities in high-potential outlets and reduced effectiveness of last-mile field teams"
    ],
    solution: [
      "Designed and implemented an AI-powered decision assistant using NLP and Retrieval-Augmented Generation (RAG)",
      "LLM-powered query understanding hosted on AWS Bedrock to interpret natural-language questions",
      "Structured knowledge layer integrating internal sales, assortment, distribution, and store-potential datasets",
      "Actionable recommendations converting complex ML outputs into business-friendly strategies",
      "Scalable, secure cloud architecture with vector search and orchestration logic for high accuracy and reliability"
    ],
    impact: [
      "Provided instant, store-specific, data-backed recommendations for field teams and service reps",
      "Improved consistency and quality of assortment and promotion decisions across all outlets",
      "Accelerated last-mile decision-making, unlocking latent store potential",
      "Increased sales productivity and field effectiveness",
      "Delivered measurable uplift in sales, execution quality, and ROI"
    ],
    operationalIntegration: [
      "Integrated into existing commercial and field workflows for real-time decision support",
      "Supported natural-language querying for easy access to complex ML outputs",
      "Scalable AWS-based architecture ensured continuous updates and reliability"
    ],
    businessOutcomes: [
      "Enabled differentiated, high-impact store-level commercial strategies",
      "Optimized field execution and last-mile effectiveness",
      "Improved ROI of promotions and resource allocation",
      "Strengthened data-driven decision-making across commercial teams"
    ],
    sustainability: [
      "Framework supports ongoing updates as store performance and market conditions evolve",
      "Continuous retraining of models ensures long-term accuracy and relevance",
      "Scalable architecture allows expansion to new stores, products, and geographies",
      "Provides a foundation for future AI-driven operational improvements"
    ],
    images: [] // optional
  }
];
