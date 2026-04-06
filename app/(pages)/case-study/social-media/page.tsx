import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import NavbarNew from "@/app/components/navbar/navbar";

export default function SocialMedia() {
  
  return (
    <>
    <NavbarNew />
    <section className="bg-black text-white min-h-screen px-6 md:px-5 lg:px-16 py-12 relative pt-30">

      <Breadcrumb 
        overrideSegments={[
          { name: "Case study", href: "/insights/strategy/extras" },
          { name: "AI-Driven Social Media Automation", href: "/case-study/social-media" },
        ]}
      />

      <div className="max-w-6xl mx-auto space-y-12 mt-10">

        {/* Title */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            AI-Driven Social Media Automation
          </h1>
          <p className="text-gray-400 text-base md:text-lg">
            Centralized AI-powered social media management for consistent messaging, higher engagement, and actionable insights.
          </p>
        </div>

        {/* Challenge */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Challenge
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            A digital brand managed Kajabi, Instagram, TikTok, and chat channels separately, creating duplication, inconsistent messaging, and inefficient workflows. Marketing teams struggled to respond quickly, measure engagement, and optimize campaigns.
          </p>
        </div>

        {/* Solution */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Solution
          </h2>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            We built a Social Media Command Center integrating scheduling, analytics, and engagement tools across all platforms. An AI layer powered GPT-4 agents to handle auto-replies, competitor analysis, and content recommendations.
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
            <li><strong>Integrations:</strong> APIs for all major social platforms including Instagram, TikTok, Facebook, and chat tools.</li>
            <li><strong>Scheduler:</strong> React + Node.js tool with AI optimization for posting times and frequency.</li>
            <li><strong>Analytics:</strong> Power BI cross-platform dashboards tracking engagement, reach, and conversion metrics.</li>
            <li><strong>AI Layer:</strong> GPT-4 agents for automated responses, competitor insights, and content suggestions.</li>
            <li><strong>Workflow Automation:</strong> Unified inbox and content calendar to eliminate duplicate efforts.</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold border-l-4 border-white pl-4">
            The Impact
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm md:text-base">
            <li>70% reduction in manual work for social media teams.</li>
            <li>True ROI tracking across all channels with consolidated analytics.</li>
            <li>3x engagement increase via AI-driven interactions and optimal posting times.</li>
            <li>Faster response times and improved customer satisfaction on social platforms.</li>
            <li>Cross-platform consistency, eliminating duplicate content and messaging errors.</li>
            <li>Marketing teams can focus on strategy and creativity instead of repetitive tasks.</li>
          </ul>
        </div>

        {/* Closing */}
        <div className="space-y-4">
          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            This AI-driven social media system transformed operational efficiency, enhanced audience engagement, and empowered teams to act on insights in real time.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
