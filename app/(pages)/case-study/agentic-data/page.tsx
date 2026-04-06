import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

export default function AgentData() {

    return (
        <>
            <NavbarNew />
            <section className="bg-black text-white min-h-screen px-6 md:px-5 lg:px-16 py-12 relative pt-30">

                <Breadcrumb
                    overrideSegments={[
                        { name: "Case study", href: "/insights/strategy/extras" },
                        { name: "Agentic Data Extraction", href: "/case-study/agentic-data"}
                    ]}
                />

                <div className="max-w-6xl mx-auto space-y-12 mt-10">
                    {/* Title */}
                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">
                            Agentic Data Extraction: Any Source, Any System, Anytime
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg">
                            Unlocking trapped enterprise data with AI-enabled frameworks for speed, scale, and compliance.
                        </p>
                    </div>

                    {/* Challenge */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
                            The Challenge
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            Most valuable enterprise data remains trapped across PDFs, portals, APIs, or legacy systems. Manual collection is slow, inconsistent, and risky.
                        </p>
                    </div>

                    {/* Solution */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
                            The Solution
                        </h2>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            We engineered a universal AI-enabled scraping and parsing framework adaptable to any domain, from Medicaid fee schedules to retail or construction data.
                        </p>
                    </div>

                    {/* Core Stack */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
                            Core Stack
                        </h2>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
                            <li><strong>Scraping:</strong> Scrapy, Playwright, Selenium, Puppeteer.</li>
                            <li><strong>Parsing:</strong> GPT-4 + Llama-3 + BeautifulSoup for semantic cleaning.</li>
                            <li><strong>Data Modeling:</strong> Pandas, PySpark, dbt pipelines.</li>
                            <li><strong>Storage:</strong> Snowflake, PostgreSQL, AWS S3, Airflow orchestration.</li>
                            <li><strong>RAG-Ready:</strong> pgvector, Pinecone, Weaviate.</li>
                            <li><strong>Compliance:</strong> SOC2, HIPAA, GDPR aligned.</li>
                        </ul>
                    </div>

                    {/* Impact */}
                    <div className="space-y-4">
                        <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
                            The Impact
                        </h2>
                        <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
                            <li>Used across industries for reimbursement intelligence, pricing, and compliance.</li>
                            <li>Speed & scale: from weeks to hours.</li>
                            <li>Powers GenAI assistants with structured, ready-to-query data.</li>
                            <li>Future-proof and domain-agnostic for enterprise intelligence.</li>
                        </ul>
                    </div>

                    {/* Closing */}
                    <div className="space-y-4">
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                            This system transforms inaccessible data into actionable insights, empowering organizations to make smarter, faster decisions across any domain.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
