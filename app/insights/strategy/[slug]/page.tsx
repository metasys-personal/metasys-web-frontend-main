"use client";

import { useParams } from "next/navigation";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import NavbarNew from "@/app/components/navbar/navbar";
import { getClientData } from "../../strategy/index";
import Image from "next/image";

const ClientDetailPage = () => {
  const params = useParams();
  const slugParam = params?.slug;

  // Ensure slug is always a string
  const slug = Array.isArray(slugParam) ? slugParam[0] : slugParam;

  const clientData = slug ? getClientData(slug) : null;

  if (!clientData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-400 bg-black">
         <Breadcrumb
          overrideSegments={[
            { name: "Our Work", href: "/insights/strategy/extras" },
            { name: "Unknown Client", href: `/insights/strategy/extras/${slug}` },
          ]}
        />
        <p className="text-center">No data available for this client.</p>
      </div>
    );
  }

  const { clientName, projects } = clientData;

  return (
    <>
      <NavbarNew />

      <section className="bg-black text-white min-h-screen px-4 sm:px-6 lg:px-16 py-12 pt-30">
        {/* Breadcrumb */}
        <Breadcrumb
          overrideSegments={[
            { name: "Our Work", href: "/insights/strategy/extras" },
            { name: clientName, href: `/insights/strategy/extras/${slug}` },
          ]}
        />

        {/* Page Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold mt-4 mb-12">
          {clientName} Projects
        </h1>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, idx) => (
            <section key={idx} className="border-b border-gray-700 pb-12">
              {/* Project Title */}
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
                {project.title}
              </h2>

              {/* Project Images */}
              {project.images && project.images.length > 0 && (
                <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.images.map((img, i) => (
                    <div
                      key={i}
                      className="relative w-full h-64 sm:h-48 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} image ${i + 1}`}
                        className="object-cover w-full h-full"
                        width={400}
                        height={300}

                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Executive Summary */}
              {project.executiveSummary && (
                <div className="mb-6 max-w-4xl">
                  <h3 className="text-lg font-semibold mb-2">
                    Executive Summary
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.executiveSummary}
                  </p>
                </div>
              )}

              {/* Project Objective */}
              {project.objective && (
                <div className="mb-6 max-w-4xl">
                  <h3 className="text-lg font-semibold mb-2">
                    Project Objective
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {project.objective}
                  </p>
                </div>
              )}

              {/* Challenges */}
              {project.challenge?.length > 0 && (
                <div className="mb-6 max-w-4xl">
                  <h3 className="text-lg font-semibold mb-2">Challenges</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.challenge.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Solutions */}
              {project.solution?.length > 0 && (
                <div className="mb-6 max-w-4xl">
                  <h3 className="text-lg font-semibold mb-2">Solutions</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.solution.map((s, i) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Impact */}
              {project.impact?.length > 0 && (
                <div className="mb-6 max-w-4xl">
                  <h3 className="text-lg font-semibold mb-2">Impact</h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.impact.map((i, idx) => (
                      <li key={idx}>{i}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Operational Integration */}
              {project.operationalIntegration?.length > 0 && (
                <div className="mb-6 max-w-4xl">
                  <h3 className="text-lg font-semibold mb-2">
                    Operational Integration
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.operationalIntegration.map((o, idx) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Business Outcomes */}
              {project.businessOutcomes?.length > 0 && (
                <div className="mb-6 max-w-4xl">
                  <h3 className="text-lg font-semibold mb-2">
                    Business Outcomes
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.businessOutcomes.map((b, idx) => (
                      <li key={idx}>{b}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sustainability */}
              {project.sustainability?.length > 0 && (
                <div className="mb-6 max-w-4xl">
                  <h3 className="text-lg font-semibold mb-2">
                    Sustainability & Future-readiness
                  </h3>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    {project.sustainability.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
    </>
  );
};

export default ClientDetailPage;
