import NavbarNew from "@/app/components/navbar/navbar";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";

export default function AICaseStudy() {

  return (
    <>
      <NavbarNew />
      <section className="bg-black text-white min-h-screen px-6 md:px-5 lg:px-16 py-12 relative pt-30">

        {/* Sticky Back Button */}
        <Breadcrumb
          overrideSegments={[
            { name: "Case study", href: "/insights/strategy/extras" },
            { name: "AI-Powered Clinical Research Assistant", href: "/case-study/ai-powered" },
          ]}
        />

        <div className="max-w-6xl mx-auto space-y-12 pt-10">
          {/* Title */}
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold max-w-3xl">AI-Powered Clinical Research Assistant</h1>
            <p className="text-gray-400 text-base md:text-lg">
              Transforming clinical research with AI + agentic systems for faster, accurate, and scalable insights.
            </p>
          </div>

          {/* Challenge */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Challenge
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Clinical research operates at the intersection of science, regulation, and patient care and is defined by information overload. Every study involves thousands of pages of trial protocols, investigator brochures, PubMed articles, FDA guidances, and real-world evidence. Traditional keyword-based search is slow, brittle, and often incomplete. Review cycles stretch into weeks, increasing cost and delaying insights that could improve patient outcomes.
            </p>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              The industry needed more than a database. It needed a next-generation intelligence layer capable of reading, reasoning, and delivering answers with context and confidence.
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Solution
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              We built an AI-powered Clinical Research Assistant, a GenAI + agentic system that transforms static research into dynamic, on-demand intelligence.
            </p>
          </div>

          {/* Core Technology */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              Core Technology
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
              <li>
                <strong>LLMs & Domain Fine-Tuning:</strong> GPT-4 and Llama-3 adapted with biomedical corpora for scientific precision.
              </li>
              <li>
                <strong>RAG Pipelines:</strong> Vector databases grounding every response in verified trial and regulatory documents.
              </li>
              <li>
                <strong>Multi-Agent Frameworks:</strong> LangChain & crewAI orchestrating subtasks like citation validation, endpoint extraction, and cross-study comparison.
              </li>
              <li>
                <strong>Cloud-Native Architecture:</strong> Serverless functions on AWS/Azure for elastic scale and HIPAA-grade security.
              </li>
              <li>
                <strong>Researcher Experience Layer:</strong> React/Next.js interface with explainable outputs, drill-downs, and exportable summaries.
              </li>
            </ul>
          </div>

          {/* Process Flow */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              Process Flow
            </h2>
            <ol className="list-decimal list-inside text-gray-400 space-y-2 text-sm md:text-base">
              <li><strong>Aggregate:</strong> Ingest PubMed, regulatory PDFs, and internal repositories.</li>
              <li><strong>Index & Embed:</strong> Structure unstructured data into searchable embeddings.</li>
              <li><strong>Retrieve & Ground:</strong> Query the vector DB for top matches with citations.</li>
              <li><strong>Reason & Synthesize:</strong> Multi-agent pipeline evaluates evidence, reconciles conflicts, and produces validated answers.</li>
              <li><strong>Deliver:</strong> Outputs actionable insights or structured tables instantly.</li>
            </ol>
          </div>

          {/* Impact */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
              The Impact
            </h2>
            <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
              <li>60% faster reviews – weeks of literature review compressed into days.</li>
              <li>Higher accuracy – every output citation-grounded and reproducible.</li>
              <li>Scalable collaboration – global teams access a unified “research brain.”</li>
              <li>Strategic acceleration – researchers spend less time searching, more time innovating.</li>
            </ul>
          </div>

          {/* Closing */}
          <div className="space-y-4">
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              This isn’t just another chatbot — it’s a collaborative research partner that scales human expertise and accelerates scientific discovery.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
