import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

export default function CrossChannelMkt() {
  return (
    <>
      <NavbarNew />
      <section className="bg-black text-white min-h-screen px-6 md:px-5 lg:px-16 py-12 relative pt-30">
        <Breadcrumb
          overrideSegments={[
            { name: "Case study", href: "/insights/strategy/extras" },
            { name: "Cross-Channel Marketing Dashboards", href: "/case-study/cross-channel-mkt" },
          ]}
        />

        <div className="max-w-6xl mx-auto space-y-12 mt-10">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
              Cross-Channel Marketing Dashboards: From Google Ads to TikTok in One View
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              Consolidating all marketing campaigns into a single dashboard for actionable insights and ROI tracking.
            </p>
          </div>

          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Challenge
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              A global B2C brand struggled to consolidate marketing data from Google, Meta, TikTok, and email platforms—making ROI tracking nearly impossible.
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Solution
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We built a Marketing Intelligence Dashboard integrating all campaigns into one view.
            </p>

            {/* Stack */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-white">Stack</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
                <li><strong>Integration:</strong> Supermetrics / Fivetran → BigQuery</li>
                <li><strong>Visualization:</strong> Power BI / Looker Studio</li>
                <li><strong>AI Layer:</strong> GPT-4 + LangChain for natural-language campaign insights</li>
                <li><strong>Alerts:</strong> Slack + email triggers for key KPIs</li>
              </ul>
            </div>
          </div>

          {/* Impact */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Impact
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
              <li>90% reduction in manual reporting time.</li>
              <li>Unified ROI visibility across channels.</li>
              <li>25% improvement in campaign efficiency through data-driven optimization.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
