import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import NavbarNew from "@/app/components/navbar/navbar";

export default function SttmsCaseStudy() {
  
  return (
    <>
    <NavbarNew />
    <section className="bg-black text-white min-h-screen px-6 md:px-5 lg:px-16 py-12 relative pt-30">

      <Breadcrumb
        overrideSegments={[
          { name: "Case study", href: "/insights/strategy/extras" },
          { name: "STTMS Construction Data Hub", href: "/case-study/sttms" },
        ]} 
      />

      <div className="max-w-6xl mx-auto space-y-12 mt-10">

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold max-w-4xl">
            STTMS – From Data Silos to Strategic Clarity for a Construction Giant
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Transforming fragmented data into unified insights, accelerating decision-making for large-scale construction operations.
          </p>
        </div>

        {/* Challenge */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Challenge
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            A leading construction company faced a familiar challenge: fragmented data across ERPs, financials, and compliance systems. Reporting cycles were slow, and leadership lacked visibility across projects and states.
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Solution
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We designed and implemented STTMS, a unified data intelligence hub built on Azure, Snowflake, and Power BI, integrating AI-driven analytics for real-time operational insights.
          </p>

          <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
            <li><strong>Data Mapping & Harmonization:</strong> Consolidating legacy systems into a single source of truth.</li>
            <li><strong>Unified Dashboards:</strong> KPIs for cost, labor, and compliance visualized across all projects.</li>
            <li><strong>AI-Driven Analytics:</strong> Natural-language queries and GPT-4 + LangChain for intelligent insights.</li>
            <li><strong>Agentic Workflows:</strong> Automated anomaly detection and data quality checks.</li>
            <li><strong>Cloud Scalability:</strong> Secure, SOC2-aligned architecture enabling future-ready analytics.</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Impact
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
            <li>Reporting cycles 70% faster, saving weeks of analysis time.</li>
            <li>Unified cross-state benchmarking for better operational decisions.</li>
            <li>Executive confidence through real-time insights and predictive analytics.</li>
            <li>Future-ready system supporting advanced forecasting and AI-driven strategies.</li>
          </ul>
        </div>

        {/* Closing */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            STTMS redefined decision-making by merging GenAI, data harmonization, and real-time intelligence — empowering leadership with actionable insights and strategic clarity.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
