
import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/app/lib/jobs.data";

import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import NavbarNew from "@/app/components/navbar/navbar";

export default async function JobDetailPage({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const job = jobs.find((j) => j.id === resolvedParams.id);

  if (!job) notFound();

  // Similar jobs (same area of interest)
  const similarJobs = jobs
    .filter((j) => j.areaOfInterest === job.areaOfInterest && j.id !== job.id)
    .slice(0, 3);

  return (
    <>
      <NavbarNew />
      <main className="bg-black text-white px-4 md:px-6 lg:px-14 py-4 md:pb-10 md:pt-30">
        <div className="mb-10">
          <Breadcrumb
            overrideSegments={[
              { name: "Careers", href: "/careers/search" },
              { name: job.title, href: `/careers/search/${job.id}` },
            ]}
          />

          <div className="flex flex-col lg:flex-row gap-10 pt-10">
            {/* Main Job Content */}
            <div className="flex-1 space-y-10">
              {/* Job Header */}
              <section>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 md:max-w-3xl">
                  {job.title}
                </h1>
                <p className="text-gray-400 text-sm mb-10">
                  {job.location} • {job.jobType} • {job.level}
                </p>
                <Link
                  href="/careers/apply"
                  className="bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-gray-200 transition"
                >
                  Apply Now
                </Link>
              </section>

              {/* Job Description */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Job Description</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {job.description || "Detailed job description will be available soon."}
                </p>
              </section>

              {/* Qualifications */}
              {job.qualifications && (
                <section>
                  <h2 className="text-xl font-semibold mb-3">Qualifications</h2>
                  <p className="text-gray-300 whitespace-pre-line">{job.qualifications}</p>
                </section>
              )}

              {/* Additional Information */}
              {job.additionalInformation && (
                <section>
                  <h2 className="text-xl font-semibold mb-3">Additional Information</h2>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {job.additionalInformation}
                  </p>
                </section>
              )}

              {/* AI Agent Focus */}
              {job.additionalInformation?.includes("AI Agent Focus") && (
                <section>
                  <h2 className="text-xl font-semibold mb-3">AI Agent Focus</h2>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {job.additionalInformation
                      .split("AI Agent Focus:")[1]
                      .split("Success Metrics:")[0]
                      .trim()}
                  </p>
                </section>
              )}

              {/* Success Metrics */}
              {job.additionalInformation?.includes("Success Metrics") && (
                <section>
                  <h2 className="text-xl font-semibold mb-3">Success Metrics</h2>
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {job.additionalInformation
                      .split("Success Metrics:")[1]
                      .trim()}
                  </p>
                </section>
              )}

              {/* About Company */}
              <section>
                <h2 className="text-xl font-semibold mb-3">About Metasys</h2>
                <p className="text-gray-300 leading-relaxed md:text-lg whitespace-pre-line md:max-w-3xl">
                  We work with one shared purpose: to deliver on the promise of technology
                  and human ingenuity. Every day, our people help organizations reinvent,
                  innovate, and deliver meaningful value. We believe innovation thrives in
                  an inclusive and diverse environment where everyone is empowered to do
                  their best work.
                </p>
              </section>

              {/* Important Notice */}
              <section>
                <h2 className="text-xl font-semibold mb-3">Important Notice</h2>
                <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                  Fraud alerts and other info...
                </p>
              </section>
            </div>

            {/* Sidebar: Similar Jobs */}
            {similarJobs.length > 0 && (
              <aside className="lg:w-1/3 flex flex-col gap-6 mt-8 md:mt-0">
                <h2 className="text-2xl font-semibold mb-3">Similar Jobs</h2>

                {similarJobs.map((item) => (
                  <div
                    key={item.id}
                    className="p-5 bg-[#191919] hover:border-white transition"
                  >
                    <span className="block w-6 h-[3px] bg-white mb-6" />
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 mb-8">
                      {item.location} | {item.jobType} | {item.level}
                    </p>
                    <Link
                      href={`/careers/search/${item.id}`}
                      className="text-sm underline"
                    >
                      See this job
                    </Link>
                  </div>
                ))}
              </aside>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
