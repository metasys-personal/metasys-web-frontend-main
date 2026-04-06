import Script from "next/script";

import { notFound } from "next/navigation";
import Image from "next/image";
import { INSIGHTS } from "@/app/lib/insights.data";
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import NavbarNew from "@/app/components/navbar/navbar";

export default async function Page({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const item = INSIGHTS.find((i) => i.slug === resolvedParams.slug);
  if (!item) return notFound();

  return (
    <>
      {/* Article structured data */}
      <Script
        id="insight-article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: item.title,
            description: item.description,
            image: item.coverImage,
            datePublished: item.publishDate,
            dateModified: item.publishDate,
            author: {
              "@type": "Organization",
              name: "Metasys",
            },
            publisher: {
              "@type": "Organization",
              name: "Metasys",
              logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
              },
            },
          }),
        }}
      />

      {/* Breadcrumb structured data */}
      <Script
        id="insight-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://yourdomain.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Insights",
                item: "https://yourdomain.com/insights",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: item.title,
                item: `https://yourdomain.com/insights/${item.slug}`,
              },
            ],
          }),
        }}
      />

      {/* Page UI */}
      <>
      <NavbarNew />
      <section className="bg-[#191919] text-white min-h-screen px-6 lg:px-16 pb-12 pt-30 relative">
        <div className="space-y-8">
          <Breadcrumb
            overrideSegments={[
              { name: "Insights", href: "/insights" },
              { name: item.title, href: `/insights/${item.slug}` },
            ]}
          />

          <div className="flex flex-col lg:flex-row items-start gap-12 mt-10">
            {/* Left */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{item.title}</h1>
              <p className="text-gray-400 text-sm mb-6">
                {item.category} •{" "}
                {new Date(item.publishDate).toLocaleDateString()}
              </p>

              <div className="relative w-full h-64 md:h-96 rounded overflow-hidden shadow-lg">
                <Image
                  src={item.coverImage}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>

            {/* Right */}
            <div className="prose prose-invert lg:max-w-md text-gray-300 space-y-10">
              <p className="text-base leading-relaxed">{item.description}</p>

              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-xl font-semibold mb-2">Why it mattered</h3>
                <p className="text-base leading-relaxed">
                  This insight demonstrates the team’s ability to combine domain
                  expertise with modern technology to solve real business
                  problems.
                </p>
              </div>

              <div className="border-t border-gray-700 pt-4">
                <h3 className="text-xl font-semibold mb-2">Key takeaways</h3>
                <ul className="list-disc ml-5 space-y-1 text-base leading-relaxed">
                  <li>Actionable result or metric 1.</li>
                  <li>Actionable result or metric 2.</li>
                  <li>Recommendation for similar customers.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    </>
  );
}