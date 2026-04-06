import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

export default function Medirate() {
  return (
    <>
      <NavbarNew />
      <section className="bg-black text-white min-h-screen px-6 md:px-5 lg:px-16 py-12 relative pt-30">
        <Breadcrumb
          overrideSegments={[
            { name: "Case study", href: "/insights/strategy/extras" },
            { name: "MediRate", href: "/case-study/medirate" },
          ]}
        />

        <div className="max-w-6xl mx-auto space-y-12 mt-10">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
              MediRate – A Cutting-Edge Solution for Medicaid Rate Intelligence
            </h1>
            <p className="text-gray-400 text-base md:text-lg">
              MediRate makes Medicaid reimbursement data searchable, comparable, and actionable in real time, empowering healthcare organizations with clarity and speed.
            </p>
          </div>

          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Challenge
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Medicaid is the largest government-funded health program in the U.S., covering more than 80 million Americans and approaching $1 trillion in annual spend. Yet despite its scale, the system is highly fragmented. State-specific program designs, inconsistent formats, and limited comparability across 50 states make it extremely difficult for providers, payors, and policy stakeholders to track reimbursement rates and trends with confidence.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Healthcare organizations face critical questions every day:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
              <li>Are we being reimbursed accurately for the services we provide?</li>
              <li>How do our local rates compare to other states or programs?</li>
              <li>What expansion opportunities exist in financially viable markets?</li>
              <li>How often are rates adjusted, and what are the historical trends?</li>
            </ul>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Answering these questions has traditionally meant sifting through scattered state portals, PDFs, and legislative documents—costing teams weeks of effort while still risking outdated or incomplete insights.
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Solution
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              MediRate is a cutting-edge SaaS platform purpose-built to make Medicaid reimbursement data searchable, comparable, and actionable in real time.
            </p>

            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
              <li>
                <strong>Data Aggregation at Scale:</strong> Curates payment rates by CPT/HCPCS billing code across all 50 states and D.C. from fee schedules, provider manuals, bulletins, appropriations, and regulatory sources.
              </li>
              <li>
                <strong>Payment Rate Analysis:</strong> Enables subscribers to search rates by service line, code, program, and date; track reimbursement trends over time; and benchmark rates against national averages.
              </li>
              <li>
                <strong>Policy Monitoring in Real Time:</strong> Provides customizable alerts so stakeholders never miss a payment change or policy development in their market.
              </li>
            </ul>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              With support for core Medicaid service lines—including Applied Behavior Analysis, Behavioral Health, Substance Use Disorder, Intellectual & Developmental Disabilities, and Home & Community-Based Services—MediRate empowers organizations to navigate reimbursement complexity with confidence.
            </p>
          </div>

          {/* Impact */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Impact
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
              <li><strong>Speed:</strong> Cuts data collection and cleaning from weeks to minutes.</li>
              <li><strong>Clarity:</strong> Provides a single intuitive platform for searching, comparing, and monitoring Medicaid rates.</li>
              <li><strong>Insight:</strong> Surfaces real-time trends and policy developments that help organizations advocate for better reimbursement, design value-based contracts, and identify expansion opportunities.</li>
            </ul>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              For providers, payors, and policymakers, MediRate represents more than a tool—it’s a strategic advantage in one of the most complex healthcare markets in the world.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
