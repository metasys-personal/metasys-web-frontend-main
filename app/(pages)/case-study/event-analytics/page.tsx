import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import NavbarNew from "@/app/components/navbar/navbar";

export default function EventsCaseStudy() {

  return (
    <>
    <NavbarNew />
    <section className="bg-black text-white min-h-screen px-6 md:px-5 lg:px-16 py-12 relative pt-30">
     <Breadcrumb
        overrideSegments={[
          { name: "Case study", href: "/insights/strategy/extras" },
          { name: "Event-Based Analytics", href: "/case-study/event-analytics" },
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-12 mt-10">
        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
            Event-Based Analytics to Boost Retention and Reduce Churn
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Leveraging event-driven insights and AI-powered analytics to retain users and optimize product engagement.
          </p>
        </div>

        {/* Challenge */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Challenge
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            A SaaS company lacked visibility into how users interacted with its product. Teams couldn’t identify drop-offs, measure feature adoption, or quickly respond to engagement trends.
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Solution
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We implemented event-based analytics, heatmaps, and funnel tracking using GA4, Amplitude, and Mixpanel. RAG pipelines summarized usage patterns via AI, allowing product teams to make proactive decisions.
          </p>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Additionally, automated dashboards and weekly insights were delivered to stakeholders, highlighting feature adoption trends, critical drop-offs, and opportunities for engagement optimization.
          </p>
        </div>

        {/* Core Tools */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            Core Tools & Framework
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
            <li><strong>Analytics Platforms:</strong> GA4, Amplitude, Mixpanel for event tracking.</li>
            <li><strong>AI-Powered Insights:</strong> RAG pipelines to summarize and highlight key engagement patterns.</li>
            <li><strong>Visualization:</strong> Dashboards built with Tableau and Looker for stakeholder reporting.</li>
            <li><strong>Alerts & Automation:</strong> Automated reports and notifications for product and marketing teams.</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Impact
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
            <li>Identified onboarding drop-offs → churn reduced by 18%.</li>
            <li>Increased feature adoption by 22% through targeted interventions.</li>
            <li>Automated weekly insight summaries for product and marketing teams.</li>
            <li>Enabled data-driven decision-making across product lifecycle.</li>
            <li>Improved customer satisfaction by proactively addressing friction points.</li>
          </ul>
        </div>

        {/* Closing */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Event-based analytics empowered the company to turn raw user interactions into actionable insights, improving retention, adoption, and overall product success.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
