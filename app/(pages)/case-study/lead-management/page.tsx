import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

export default function LeadManagement() {
  return (
    <>
      <NavbarNew />
      <section className="bg-black text-white min-h-screen px-6 md:px-5 lg:px-16 py-12 relative pt-30">
        <Breadcrumb
          overrideSegments={[
            { name: "Case study", href: "/insights/strategy/extras" },
            { name: "Lead Management System", href: "/case-study/lead-management" },
          ]}
        />

        <div className="max-w-6xl mx-auto space-y-12 mt-10">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
              Lead Management System: From Capture to Conversion
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              AI-powered Lead Intelligence for tracking, nurturing, and converting high-value leads efficiently.
            </p>
          </div>

          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Challenge
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              A B2B services firm struggled to track and convert leads from multiple sources including LinkedIn, HubSpot, and email.
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Solution
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We deployed an AI-powered Lead Intelligence Platform integrating HubSpot, Salesforce, and SendGrid.
            </p>

            {/* Tech Highlights */}
            <div className="space-y-2">
              <h3 className="text-lg md:text-xl font-semibold text-white">Tech Highlights</h3>
              <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
                <li>AI Lead Scoring with LLMs for firmographics & intent.</li>
                <li>Predictive Nurturing Journeys via automated workflows.</li>
              </ul>
            </div>
          </div>

          {/* Impact */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Impact
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
              <li>Lead response time cut from 3 days to &lt;3 hours.</li>
              <li>2.3x higher conversion rates.</li>
              <li>AI surfaced high-value leads ($50k+ potential deals).</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
