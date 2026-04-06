
import Breadcrumb from "@/app/components/ui/breadcrumb/breadcrumb";
import { leaders } from "@/app/lib/partners.data";
import { buildPageMetadata } from "@/app/lib/seo";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  const leader = leaders.find(
    (l) => l.slug === resolvedParams.slug
  );

  if (!leader) return {};

  return buildPageMetadata({
    title: leader.name,
    description: leader.bio,
    image: leader.image,
  });
}

export default async function LeaderDetailPage({
  params,
}: {
  params: { slug: string } | Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;

  const leader = leaders.find(
    (l) => l.slug === resolvedParams.slug
  );

  if (!leader) {
    return notFound();
  }

  return (
    <section className="container mx-auto py-10">
       <Breadcrumb
    overrideSegments={[
      { name: "Leaders", href: "/leaders" },
      { name: leader.name, href: `/leaders/${leader.slug}` },
    ]}
  />

      <div className="grid gap-8 md:grid-cols-3">
        <Image
          src={leader.image}
          alt={leader.name}
          className="rounded-lg w-full"
          width={400}
          height={400}
        />

        <div className="md:col-span-2 space-y-4">
          <h1 className="text-3xl font-bold">{leader.name}</h1>
          <p className="text-lg text-gray-600">{leader.title}</p>

          {leader.location && (
            <p className="text-sm text-gray-500">{leader.location}</p>
          )}

          {leader.bio && (
            <p className="leading-relaxed">{leader.bio}</p>
          )}

          {leader.socialLinks && (
            <div className="flex gap-4">
              {leader.socialLinks.linkedin && (
                <a href={leader.socialLinks.linkedin}>LinkedIn</a>
              )}
              {leader.socialLinks.twitter && (
                <a href={leader.socialLinks.twitter}>Twitter</a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
